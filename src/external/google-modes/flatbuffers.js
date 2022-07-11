//@ts-nocheck
export default function (CodeMirror) {
  var verbose = 0

  function Context(name, tokenType, depth, parent, line, pos) {
    this.name = name
    this.tokenType = tokenType
    this.depth = depth
    this.parent = parent
    this.startLine = line
    this.startPos = pos
  }

  var MAX_LOOKAHEAD_LINES = 3

  function MatchContext() {
    this.stream = null
    this.line = this.startPos = 0
    this.string = this.startLine = ""
    this.copyInstance = null
  }

  MatchContext.prototype.start = function (stream) {
    this.stream = stream
    this.line = 0
    this.string = stream.string.slice(stream.start)
    this.startLine = stream.string
    this.startPos = stream.start
    return this
  }

  MatchContext.prototype.startLinebreak = function () {
    this.stream = null
    this.line = this.startPos = 0
    this.string = "\n"
    this.startLine = ""
    return this
  }

  MatchContext.prototype.copy = function () {
    var copy = this.copyInstance || (this.copyInstance = new MatchContext)
    copy.stream = this.stream
    copy.startPos = this.startPos
    copy.line = this.line
    copy.startLine = this.startLine
    copy.string = this.string
    return copy
  }

  MatchContext.prototype.updateStart = function () {
    this.startLine = !this.stream ? "" : this.line == 0 ? this.stream.string : this.stream.lookAhead(this.line)
    this.startPos = this.startLine.length - (this.string.length - 1)
  }

  MatchContext.prototype.ahead = function (n) {
    for (; ;) {
      if (n <= this.string.length) return true
      if (this.string.charCodeAt(this.string.length - 1) !== 10) {
        this.string += "\n"
      } else if (this.line === MAX_LOOKAHEAD_LINES || !this.stream || !this.stream.lookAhead) {
        return false
      } else {
        var next = this.stream.lookAhead(this.line + 1)
        if (next == null) return false
        this.string += next + "\n"
        this.line++
      }
    }
  }

  var tokenValue = null

  var stateClass = function (graph, options) {
    function StateClass(stack, context) {
      this.stack = stack
      this.context = context
    }

    StateClass.prototype.matchNext = function (mcx, pos, maxSkip, top) {
      var depth = this.stack.length - 1, node = this.stack[depth], edges = graph.nodes[node]

      for (var i = 0; i < edges.length; i++) {
        var op = edges[i], matched, to // See compileEdge in compile.js
        if (op === 0) { // Null match
          matched = pos
          to = edges[++i]
        } else if (op === 1 || op === 2) {   // 1, callTarget, returnTo
          var target = edges[++i]            // 2, callTarget, returnTo, context
          var returnTo = edges[++i]
          this.go(returnTo)
          var oldContext = this.context
          if (op === 2) {
            var cx = edges[++i]
            this.context = new Context(cx.name, cx.token, this.stack.length, this.context, mcx.startLine, mcx.startPos)
          }
          this.stack.push(target)
          var inner = this.matchNext(mcx, pos, 0, false)
          if (inner === pos) inner = this.matchNext(mcx, pos, i == edges.length - 1 ? maxSkip : 0, top)
          if (inner < 0) { // Reset state when the call fails
            this.stack.length = depth + 1
            this.stack[depth] = node
            this.context = oldContext
            continue
          }
          return inner
        } else if (op === 3) { // 3, tokenType, matchExpr, nextNode
          var token = edges[++i]
          matched = this.matchExpr(edges[++i], mcx, pos)
          to = edges[++i]
          if (matched > pos) tokenValue = token
        } else { // matchExpr, nextNode
          matched = this.matchExpr(op, mcx, pos)
          to = edges[++i]
        }

        if (matched < 0) {
          if (maxSkip > 0 && i == edges.length - 1) {
            if (verbose > 0) console["log"]("Dead end at", mcx.string.slice(pos), node, this.stack.join())
            maxSkip--
            matched = pos
          } else {
            continue
          }
        }
        this.go(to)
        if (!top && to === -1 || this.stack.length === 0) return matched

        if (matched > pos) {
          if (verbose > 1)
            console["log"]("Token", JSON.stringify(mcx.string.slice(pos, matched)), "from", node, "to", to, "under", this.stack.join())
          return matched
        } else {
          matched = this.matchNext(mcx, pos, i == edges.length - 1 ? maxSkip : 0, top)
          if (matched >= 0) return matched
          this.stack.length = depth + 1
          this.stack[depth] = node
        }
      }
      return -1
    }

    StateClass.prototype.go = function (to) {
      this.stack.pop()
      while (this.context && this.context.depth > this.stack.length)
        this.context = this.context.parent
      if (to !== -1) this.stack.push(to)
    }

    StateClass.prototype.runMaybe = function (mcx, pos, maxSkip) {
      tokenValue = null
      return this.matchNext(mcx, pos, maxSkip, true)
    }

    StateClass.prototype.forward = function (mcx, pos) {
      var progress = this.runMaybe(mcx, pos, 2)
      if (progress < 0) {
        if (verbose > 0) console["log"]("Lost it at", mcx.string.slice(pos), this.stack.join())
        this.stack.push(graph.token)
        progress = this.runMaybe(mcx, pos, 0)
      }
      return progress
    }

    StateClass.prototype.lookahead = function (mcx, pos, start) {
      var oldTokenValue = tokenValue
      var state = new this.constructor([start], null)
      mcx = mcx.copy()
      for (; ;) {
        mcx.updateStart()
        // FIXME implement custom scanning algorithm. This one breaks when a sub-match fails
        var newPos = state.runMaybe(mcx, pos, 0)
        if (newPos < 0) { tokenValue = oldTokenValue; return false }
        if (state.stack.length === 0) { tokenValue = oldTokenValue; return true }
        pos = newPos
      }
    }

    StateClass.prototype.matchExpr = function (expr, mcx, pos) {
      if (typeof expr === "string") {
        var end = pos + expr.length
        return mcx.ahead(end) && mcx.string.slice(pos, end) === expr ? end : -1
      }
      if (expr.exec) {
        var m = mcx.ahead(pos + 1) && expr.exec(pos > 0 ? mcx.string.slice(pos) : mcx.string)
        if (!m) return -1
        return pos + m[0].length
      }

      var op = expr[0]
      if (op === 0) { // OP_SEQ, ...rest
        for (var i = 1; i < expr.length; i++) {
          pos = this.matchExpr(expr[i], mcx, pos)
          if (pos < 0) return -1
        }
        return pos
      } else if (op === 1) { // OP_CHOICE, ...rest
        for (var i = 1, e = expr.length - 1; ; i++) {
          var cur = this.matchExpr(expr[i], mcx, pos)
          if (i === e || cur > -1) return cur
        }
        return -1
      } else if (op === 2 || op === 3) { // OP_STAR/OP_PLUS, expr
        if (op === 3 && (pos = this.matchExpr(expr[1], mcx, pos)) < 0) return -1
        for (; ;) {
          var inner = this.matchExpr(expr[1], mcx, pos)
          if (inner == -1) return pos
          pos = inner
        }
      } else if (op === 4) { // OP_MAYBE, expr
        return Math.max(this.matchExpr(expr[1], mcx, pos), pos)
      } else if (op === 5) { // OP_LOOKAHEAD, expr
        return this.lookahead(mcx, pos, expr[1]) ? pos : -1
      } else if (op === 6) { // OP_NEG_LOOKAHEAD, expr
        return this.lookahead(mcx, pos, expr[1]) ? -1 : pos
      } else if (op === 7) { // OP_PREDICATE, name
        var lineStart = pos ? mcx.string.lastIndexOf("\n", pos - 1) : -1, line, linePos
        if (mcx.stream && lineStart < 0) {
          line = mcx.stream.string
          linePos = pos + mcx.stream.start
        } else {
          var lineEnd = mcx.string.indexOf("\n", pos)
          line = mcx.string.slice(lineStart + 1, lineEnd < 0 ? mcx.string.length : lineEnd)
          linePos = pos - (lineStart + 1)
        }
        return options.predicates[expr[1]](line, linePos, this.context, mcx.stream ? nextLines(mcx.stream) : noNextLines) ? pos : -1
      } else {
        throw new Error("Unknown match type " + expr)
      }
    }

    function noNextLines() { return null }

    function nextLines(stream) { return function (n) { return stream.lookAhead(n) } }

    StateClass.prototype.contextAt = function (line, linePos) {
      var copy = this.copy(), mcx = new MatchContext, pos = 0, lastCx = this.context
      mcx.string = line + "\n"
      mcx.startLine = line
      for (; ;) {
        var matched = copy.runMaybe(mcx, pos, 0)
        if (matched == -1) return copy.context
        if (matched > linePos) {
          var context = copy.context
          if (pos == linePos) {
            trim: while (context) {
              for (var prev = lastCx; prev; prev = prev.parent) if (prev === context) break trim
              context = context.parent
            }
          }
          return context
        }
        pos = matched
        lastCx = copy.context
      }
    }

    StateClass.prototype.copy = function () {
      return new this.constructor(this.stack.slice(), this.context)
    }

    StateClass.start = function () {
      return new this([graph.start], null)
    }

    return StateClass
  }

  // declare global: CodeMirror
  function GrammarMode(graph, options) {
    this.State = stateClass(graph, options || {})
    this.mcx = new MatchContext
  }

  CodeMirror.GrammarMode = GrammarMode;

  GrammarMode.prototype.startState = function () { return this.State.start() }

  GrammarMode.prototype.copyState = function (state) { return state.copy() }

  GrammarMode.prototype.token = function (stream, state) {
    stream.pos += state.forward(this.mcx.start(stream), 0)
    var tokenType = tokenValue
    for (var cx = state.context; cx; cx = cx.parent)
      if (cx.tokenType) tokenType = cx.tokenType + (tokenType ? " " + tokenType : "")
    if (stream.eol())
      state.forward(this.mcx, stream.pos - stream.start)
    return tokenType
  }

  GrammarMode.prototype.blankLine = function (state) {
    state.forward(this.mcx.startLinebreak(), 0)
  }


  var e = [[1, " ", "\t", "\n"], /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, /^include(?![a-zA-Z¡-￿_0-9_])/, /^namespace(?![a-zA-Z¡-￿_0-9_])/, /^attribute(?![a-zA-Z¡-￿_0-9_])/, /^root_type(?![a-zA-Z¡-￿_0-9_])/, /^file_extension(?![a-zA-Z¡-￿_0-9_])/, /^file_identifier(?![a-zA-Z¡-￿_0-9_])/, /^(?:\-?0x[0-9a-fA-F]+|\-?[0-9]+)/, /^(?:true|false)/, /^\"[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*\"/, /^(?:bool|byte|ubyte|short|ushort|int|uint|float|long|ulong|double|int8|uint8|int16|uint16|int32|uint32|int64|uint64|float32|float64|string)(?![a-zA-Z¡-￿_0-9_])/, /^\/\/.*/, [0, /^(?!\*\/)/, /^[^]/], /^table(?![a-zA-Z¡-￿_0-9_])/, /^\-?[0-9]+\.[0-9]+(?:[eE][\+\-]?[0-9]+)?/, /^struct(?![a-zA-Z¡-￿_0-9_])/, /^enum(?![a-zA-Z¡-￿_0-9_])/, /^union(?![a-zA-Z¡-￿_0-9_])/, /^rpc_service(?![a-zA-Z¡-￿_0-9_])/];
  var nodes = [
    [3, "keyword", e[2], 2,
      0, 3],
    [/^[^]/, 0],
    [e[0], 2,
      2, 25, 2, { "name": "comment", "token": "comment" },
      2, 28, 4, { "name": "string_constant", "token": "string" }],
    [3, "keyword", e[3], 5,
      2, 31, 6, { "name": "table_decl" },
      2, 45, 6, { "name": "struct_decl" },
      2, 57, 6, { "name": "enum_decl" },
      2, 72, 6, { "name": "union_decl" },
      3, "keyword", e[5], 7,
      3, "keyword", e[6], 8,
      3, "keyword", e[7], 9,
      3, "keyword", e[4], 10,
      2, 81, 6, { "name": "rpc_decl" },
      2, 95, 6, { "name": "object" },
      2, 25, 6, { "name": "comment", "token": "comment" },
      0, 1],
    [e[0], 4,
      2, 25, 4, { "name": "comment", "token": "comment" },
      ";", 11],
    [e[0], 5,
      2, 25, 5, { "name": "comment", "token": "comment" },
    e[1], 12],
    [e[0], 6,
      2, 25, 6, { "name": "comment", "token": "comment" },
      0, 3],
    [e[0], 7,
      2, 25, 7, { "name": "comment", "token": "comment" },
      1, 105, 13],
    [e[0], 8,
      2, 25, 8, { "name": "comment", "token": "comment" },
      2, 28, 14, { "name": "string_constant", "token": "string" }],
    [e[0], 9,
      2, 25, 9, { "name": "comment", "token": "comment" },
      2, 28, 15, { "name": "string_constant", "token": "string" }],
    [e[0], 10,
      2, 25, 10, { "name": "comment", "token": "comment" },
      3, "attribute", e[1], 16,
      3, "attribute", e[10], 16],
    [e[0], 11,
      2, 25, 11, { "name": "comment", "token": "comment" },
      0, 0],
    [e[0], 12,
      2, 25, 12, { "name": "comment", "token": "comment" },
      0, 17],
    [e[0], 13,
      2, 25, 13, { "name": "comment", "token": "comment" },
      ";", 6],
    [e[0], 14,
      2, 25, 14, { "name": "comment", "token": "comment" },
      ";", 6],
    [e[0], 15,
      2, 25, 15, { "name": "comment", "token": "comment" },
      ";", 6],
    [e[0], 16,
      2, 25, 16, { "name": "comment", "token": "comment" },
      ";", 6],
    [".", 18,
      ";", 6],
    [e[0], 18,
      2, 25, 18, { "name": "comment", "token": "comment" },
    e[1], 19],
    [e[0], 19,
      2, 25, 19, { "name": "comment", "token": "comment" },
      0, 17],
    [3, "keyword", e[2], -1,
      3, "keyword", e[3], -1,
      3, "keyword", e[4], -1,
      3, "keyword", e[14], -1,
      3, "keyword", e[16], -1,
      3, "keyword", e[17], -1,
      3, "keyword", e[18], -1,
      3, "keyword", e[5], -1,
      3, "keyword", e[19], -1,
      3, "keyword", e[6], -1,
      3, "keyword", e[7], -1,
      2, 25, -1, { "name": "comment", "token": "comment" },
      e[12], 21,
      "/*", 22,
      3, "number", e[8], -1,
      3, "builtin", e[9], -1,
      3, "number", e[8], -1,
      /^\-?0x[0-9a-fA-F]+/, -1,
      /^\-?[0-9]+/, -1,
      3, "builtin", e[9], -1,
      3, "number", e[15], -1,
      2, 28, -1, { "name": "string_constant", "token": "string" },
      e[1], -1,
      3, "def", e[1], -1,
      3, "def property", e[1], -1,
      3, "property", e[1], -1,
      3, "property", e[1], -1,
      3, "attribute", e[1], -1,
      3, "attribute", e[10], -1,
      3, "builtin", e[11], -1,
      3, "type", e[1], -1,
      /^\[ */, 23,
      1, 105, -1,
      /^[^]/, -1],
    ["\n", -1],
    [e[13], 22,
      "*/", -1],
    [3, "builtin", e[11], 24,
      3, "type", e[1], 24],
    [/^ *\]/, -1],
    [e[12], 26,
      "/*", 27],
    ["\n", -1],
    [e[13], 27,
      "*/", -1],
    ["\"", 29],
    ["\\", 30,
      /^(?!\")./, 29,
      "\"", -1],
    [/^[^]/, 29],
    [3, "keyword", e[14], 32],
    [e[0], 32,
      2, 25, 32, { "name": "comment", "token": "comment" },
      3, "type", e[1], 33],
    [e[0], 33,
      2, 25, 33, { "name": "comment", "token": "comment" },
      1, 108, 34],
    [e[0], 34,
      2, 25, 34, { "name": "comment", "token": "comment" },
      "{", 35],
    [e[0], 35,
      2, 25, 35, { "name": "comment", "token": "comment" },
      0, 36],
    [3, "property", e[1], 37],
    [e[0], 37,
      2, 25, 37, { "name": "comment", "token": "comment" },
      ":", 38],
    [e[0], 38,
      2, 25, 38, { "name": "comment", "token": "comment" },
      1, 105, 39],
    [e[0], 39,
      2, 25, 39, { "name": "comment", "token": "comment" },
      "=", 40,
      0, 41],
    [e[0], 40,
      2, 25, 40, { "name": "comment", "token": "comment" },
      3, "number", e[15], 41,
      3, "number", e[8], 41,
      3, "builtin", e[9], 41,
      3, "property", e[1], 41],
    [e[0], 41,
      2, 25, 41, { "name": "comment", "token": "comment" },
      1, 108, 42],
    [e[0], 42,
      2, 25, 42, { "name": "comment", "token": "comment" },
      ";", 43],
    [e[0], 43,
      2, 25, 43, { "name": "comment", "token": "comment" },
      0, 44],
    [0, 36,
      "}", -1],
    [3, "keyword", e[16], 46],
    [e[0], 46,
      2, 25, 46, { "name": "comment", "token": "comment" },
      3, "type", e[1], 47],
    [e[0], 47,
      2, 25, 47, { "name": "comment", "token": "comment" },
      1, 108, 48],
    [e[0], 48,
      2, 25, 48, { "name": "comment", "token": "comment" },
      "{", 49],
    [e[0], 49,
      2, 25, 49, { "name": "comment", "token": "comment" },
      0, 50],
    [3, "property", e[1], 51],
    [e[0], 51,
      2, 25, 51, { "name": "comment", "token": "comment" },
      ":", 52],
    [e[0], 52,
      2, 25, 52, { "name": "comment", "token": "comment" },
      1, 105, 53],
    [e[0], 53,
      2, 25, 53, { "name": "comment", "token": "comment" },
      1, 108, 54],
    [e[0], 54,
      2, 25, 54, { "name": "comment", "token": "comment" },
      ";", 55],
    [e[0], 55,
      2, 25, 55, { "name": "comment", "token": "comment" },
      0, 56],
    [0, 50,
      "}", -1],
    [3, "keyword", e[17], 58],
    [e[0], 58,
      2, 25, 58, { "name": "comment", "token": "comment" },
      3, "type", e[1], 59],
    [e[0], 59,
      2, 25, 59, { "name": "comment", "token": "comment" },
      ":", 60,
      0, 61],
    [e[0], 60,
      2, 25, 60, { "name": "comment", "token": "comment" },
      1, 105, 61],
    [e[0], 61,
      2, 25, 61, { "name": "comment", "token": "comment" },
      1, 108, 62],
    [e[0], 62,
      2, 25, 62, { "name": "comment", "token": "comment" },
      "{", 63],
    [e[0], 63,
      2, 25, 63, { "name": "comment", "token": "comment" },
      3, "def property", e[1], 64],
    [e[0], 64,
      2, 25, 64, { "name": "comment", "token": "comment" },
      "=", 65,
      0, 66],
    [e[0], 65,
      2, 25, 65, { "name": "comment", "token": "comment" },
      3, "number", e[8], 66,
      3, "builtin", e[9], 66],
    [e[0], 66,
      2, 25, 66, { "name": "comment", "token": "comment" },
      0, 67],
    [",", 68,
      "}", -1],
    [e[0], 68,
      2, 25, 68, { "name": "comment", "token": "comment" },
      3, "def property", e[1], 69],
    [e[0], 69,
      2, 25, 69, { "name": "comment", "token": "comment" },
      "=", 70,
      0, 71],
    [e[0], 70,
      2, 25, 70, { "name": "comment", "token": "comment" },
      3, "number", e[8], 71,
      3, "builtin", e[9], 71],
    [e[0], 71,
      2, 25, 71, { "name": "comment", "token": "comment" },
      0, 67],
    [3, "keyword", e[18], 73],
    [e[0], 73,
      2, 25, 73, { "name": "comment", "token": "comment" },
      3, "type", e[1], 74],
    [e[0], 74,
      2, 25, 74, { "name": "comment", "token": "comment" },
      1, 108, 75],
    [e[0], 75,
      2, 25, 75, { "name": "comment", "token": "comment" },
      "{", 76],
    [e[0], 76,
      2, 25, 76, { "name": "comment", "token": "comment" },
      3, "type", e[1], 77],
    [e[0], 77,
      2, 25, 77, { "name": "comment", "token": "comment" },
      0, 78],
    [",", 79,
      "}", -1],
    [e[0], 79,
      2, 25, 79, { "name": "comment", "token": "comment" },
      3, "type", e[1], 80],
    [e[0], 80,
      2, 25, 80, { "name": "comment", "token": "comment" },
      0, 78],
    [3, "keyword", e[19], 82],
    [e[0], 82,
      2, 25, 82, { "name": "comment", "token": "comment" },
      3, "def", e[1], 83],
    [e[0], 83,
      2, 25, 83, { "name": "comment", "token": "comment" },
      "{", 84],
    [e[0], 84,
      2, 25, 84, { "name": "comment", "token": "comment" },
      0, 85],
    [3, "def", e[1], 86],
    [e[0], 86,
      2, 25, 86, { "name": "comment", "token": "comment" },
      "(", 87],
    [e[0], 87,
      2, 25, 87, { "name": "comment", "token": "comment" },
      3, "type", e[1], 88],
    [e[0], 88,
      2, 25, 88, { "name": "comment", "token": "comment" },
      ")", 89],
    [e[0], 89,
      2, 25, 89, { "name": "comment", "token": "comment" },
      ":", 90],
    [e[0], 90,
      2, 25, 90, { "name": "comment", "token": "comment" },
      3, "type", e[1], 91],
    [e[0], 91,
      2, 25, 91, { "name": "comment", "token": "comment" },
      1, 108, 92],
    [e[0], 92,
      2, 25, 92, { "name": "comment", "token": "comment" },
      ";", 93],
    [e[0], 93,
      2, 25, 93, { "name": "comment", "token": "comment" },
      0, 94],
    [0, 85,
      "}", -1],
    ["{", 96],
    [e[0], 96,
      2, 25, 96, { "name": "comment", "token": "comment" },
      3, "property", e[1], 97],
    [e[0], 97,
      2, 25, 97, { "name": "comment", "token": "comment" },
      ":", 98],
    [e[0], 98,
      2, 25, 98, { "name": "comment", "token": "comment" },
      1, 118, 99],
    [e[0], 99,
      2, 25, 99, { "name": "comment", "token": "comment" },
      0, 100],
    [",", 101,
      "}", -1],
    [e[0], 101,
      2, 25, 101, { "name": "comment", "token": "comment" },
      3, "property", e[1], 102],
    [e[0], 102,
      2, 25, 102, { "name": "comment", "token": "comment" },
      ":", 103],
    [e[0], 103,
      2, 25, 103, { "name": "comment", "token": "comment" },
      1, 118, 104],
    [e[0], 104,
      2, 25, 104, { "name": "comment", "token": "comment" },
      0, 100],
    [/^\[ */, 106,
      3, "builtin", e[11], -1,
      3, "type", e[1], -1],
    [3, "builtin", e[11], 107,
      3, "type", e[1], 107],
    [/^ *\]/, -1],
    ["(", 109,
      0, -1],
    [e[0], 109,
      2, 25, 109, { "name": "comment", "token": "comment" },
      3, "attribute", e[1], 110],
    [e[0], 110,
      2, 25, 110, { "name": "comment", "token": "comment" },
      ":", 111,
      0, 112],
    [e[0], 111,
      2, 25, 111, { "name": "comment", "token": "comment" },
      3, "number", e[15], 112,
      3, "number", e[8], 112,
      3, "builtin", e[9], 112,
      3, "property", e[1], 112,
      2, 28, 112, { "name": "string_constant", "token": "string" }],
    [e[0], 112,
      2, 25, 112, { "name": "comment", "token": "comment" },
      0, 113],
    [",", 114,
      ")", -1],
    [e[0], 114,
      2, 25, 114, { "name": "comment", "token": "comment" },
      3, "attribute", e[1], 115],
    [e[0], 115,
      2, 25, 115, { "name": "comment", "token": "comment" },
      ":", 116,
      0, 117],
    [e[0], 116,
      2, 25, 116, { "name": "comment", "token": "comment" },
      3, "number", e[15], 117,
      3, "number", e[8], 117,
      3, "builtin", e[9], 117,
      3, "property", e[1], 117,
      2, 28, 117, { "name": "string_constant", "token": "string" }],
    [e[0], 117,
      2, 25, 117, { "name": "comment", "token": "comment" },
      0, 113],
    [3, "number", e[15], -1,
      3, "number", e[8], -1,
      3, "builtin", e[9], -1,
      3, "property", e[1], -1,
      2, 28, -1, { "name": "string_constant", "token": "string" },
      2, 95, -1, { "name": "object" },
      2, 119, -1, { "name": "list_literal" }],
    ["[", 120],
    [e[0], 120,
      2, 25, 120, { "name": "comment", "token": "comment" },
      1, 118, 121],
    [e[0], 121,
      2, 25, 121, { "name": "comment", "token": "comment" },
      0, 122],
    [",", 123,
      "]", -1],
    [e[0], 123,
      2, 25, 123, { "name": "comment", "token": "comment" },
      1, 118, 124],
    [e[0], 124,
      2, 25, 124, { "name": "comment", "token": "comment" },
      0, 122]
  ];
  var start = 0;
  var token = 20;

  var grammar = /*#__PURE__*/Object.freeze({
    __proto__: null,
    nodes: nodes,
    start: start,
    token: token
  });

  var FlatBuffersMode = /*@__PURE__*/(function (superclass) {
    function FlatBuffersMode(conf, modeConf) {
      superclass.call(this, grammar);
      this.conf = conf;

      this.electricChars = '[{}]';
      this.blockCommentStart = '/*';
      this.blockCommentEnd = ' */';
      this.blockCommentLead = ' * ';
      this.lineComment = '//';
      this.fold = ['brace'];
    }

    if (superclass) FlatBuffersMode.__proto__ = superclass;
    FlatBuffersMode.prototype = Object.create(superclass && superclass.prototype);
    FlatBuffersMode.prototype.constructor = FlatBuffersMode;

    /**
     * Simple indent function: Indent 1 level for each open context (i.e. open
     * curly or square bracket)
     *
     * @param state the state object at the current cursor position, as defined by
     *     grammar-mode.js
     * @param {string} textAfter the portion of the current line that is past the
     *     cursor position
     * @param {string} line the (complete) line the cursor is on
     */
    FlatBuffersMode.prototype.indent = function indent(state, textAfter, line) {
      var context = state.contextAt(line, line.length);

      var indentLevel = 0;
      while (context) {
        // Ignore brackets that were opened on this line
        if (context.startLine !== line && context.startLine !== '') {
          indentLevel = indentLevel + 1;
        }
        context = context.parent;
      }
      return indentLevel * this.conf.indentUnit;
    };

    return FlatBuffersMode;
  }(CodeMirror.GrammarMode));

  CodeMirror.defineMode(
    'flatbuffers', function (conf, modeConf) { return new FlatBuffersMode(conf, modeConf); });
  CodeMirror.defineMIME('text/x-fbs', { name: 'flatbuffers' });

  var keywords = ["include", "namespace", "attribute", "table", "struct", "enum",
    "union", "root_type", "rpc_service", "file_extension",
    "file_identifier"];
  var builtins = ["bool", "byte", "ubyte", "short", "ushort", "int", "uint",
    "float", "long", "ulong", "double", "int8", "uint8", "int16",
    "uint16", "int32", "uint32", "int64", "uint64", "float32",
    "float64", "string", "true", "false"];
  CodeMirror.registerHelper('hintWords', 'flatbuffers',
    keywords.concat(builtins));
}