/**
@license
sprintf.js from the php.js project - https://github.com/kvz/phpjs
Directly from https://github.com/kvz/phpjs/blob/master/functions/strings/sprintf.js

php.js is copyright 2012 Kevin van Zonneveld.

Portions copyright Brett Zamir (http://brett-zamir.me), Kevin van Zonneveld
(http://kevin.vanzonneveld.net), Onno Marsman, Theriault, Michael White
(http://getsprink.com), Waldo Malqui Silva, Paulo Freitas, Jack, Jonas
Raoni Soares Silva (http://www.jsfromhell.com), Philip Peterson, Legaev
Andrey, Ates Goral (http://magnetiq.com), Alex, Ratheous, Martijn Wieringa,
Rafa? Kukawski (http://blog.kukawski.pl), lmeyrick
(https://sourceforge.net/projects/bcmath-js/), Nate, Philippe Baumann,
Enrique Gonzalez, Webtoolkit.info (http://www.webtoolkit.info/), Carlos R.
L. Rodrigues (http://www.jsfromhell.com), Ash Searle
(http://hexmen.com/blog/), Jani Hartikainen, travc, Ole Vrijenhoek,
Erkekjetter, Michael Grier, Rafa? Kukawski (http://kukawski.pl), Johnny
Mast (http://www.phpvrouwen.nl), T.Wild, d3x,
http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript,
Rafa? Kukawski (http://blog.kukawski.pl/), stag019, pilus, WebDevHobo
(http://webdevhobo.blogspot.com/), marrtins, GeekFG
(http://geekfg.blogspot.com), Andrea Giammarchi
(http://webreflection.blogspot.com), Arpad Ray (mailto:arpad@php.net),
gorthaur, Paul Smith, Tim de Koning (http://www.kingsquare.nl), Joris, Oleg
Eremeev, Steve Hilder, majak, gettimeofday, KELAN, Josh Fraser
(http://onlineaspect.com/2007/06/08/auto-detect-a-time-zone-with-javascript/),
Marc Palau, Martin
(http://www.erlenwiese.de/), Breaking Par Consulting Inc
(http://www.breakingpar.com/bkp/home.nsf/0/87256B280015193F87256CFB006C45F7),
Chris, Mirek Slugen, saulius, Alfonso Jimenez
(http://www.alfonsojimenez.com), Diplom@t (http://difane.com/), felix,
Mailfaker (http://www.weedem.fr/), Tyler Akins (http://rumkin.com), Caio
Ariede (http://caioariede.com), Robin, Kankrelune
(http://www.webfaktory.info/), Karol Kowalski, Imgen Tata
(http://www.myipdf.com/), mdsjack (http://www.mdsjack.bo.it), Dreamer,
Felix Geisendoerfer (http://www.debuggable.com/felix), Lars Fischer, AJ,
David, Aman Gupta, Michael White, Public Domain
(http://www.json.org/json2.js), Steven Levithan
(http://blog.stevenlevithan.com), Sakimori, Pellentesque Malesuada,
Thunder.m, Dj (http://phpjs.org/functions/htmlentities:425#comment_134018),
Steve Clay, David James, Francois, class_exists, nobbler, T. Wild, Itsacon
(http://www.itsacon.net/), date, Ole Vrijenhoek (http://www.nervous.nl/),
Fox, Raphael (Ao RUDLER), Marco, noname, Mateusz "loonquawl" Zalega, Frank
Forte, Arno, ger, mktime, john (http://www.jd-tech.net), Nick Kolosov
(http://sammy.ru), marc andreu, Scott Cariss, Douglas Crockford
(http://javascript.crockford.com), madipta, Slawomir Kaniecki,
ReverseSyntax, Nathan, Alex Wilson, kenneth, Bayron Guevara, Adam Wallner
(http://web2.bitbaro.hu/), paulo kuong, jmweb, Lincoln Ramsay, djmix,
Pyerre, Jon Hohle, Thiago Mata (http://thiagomata.blog.com), lmeyrick
(https://sourceforge.net/projects/bcmath-js/this.), Linuxworld, duncan,
Gilbert, Sanjoy Roy, Shingo, sankai, Oskar Larsson H?gfeldt
(http://oskar-lh.name/), Denny Wardhana, 0m3r, Everlasto, Subhasis Deb,
josh, jd, Pier Paolo Ramon (http://www.mastersoup.com/), P, merabi, Soren
Hansen, Eugene Bulkin (http://doubleaw.com/), Der Simon
(http://innerdom.sourceforge.net/), echo is bad, Ozh, XoraX
(http://www.xorax.info), EdorFaus, JB, J A R, Marc Jansen, Francesco, LH,
Stoyan Kyosev (http://www.svest.org/), nord_ua, omid
(http://phpjs.org/functions/380:380#comment_137122), Brad Touesnard, MeEtc
(http://yass.meetcweb.com), Peter-Paul Koch
(http://www.quirksmode.org/js/beat.html), Olivier Louvignes
(http://mg-crea.com/), T0bsn, Tim Wiel, Bryan Elliott, Jalal Berrami,
Martin, JT, David Randall, Thomas Beaucourt (http://www.webapp.fr), taith,
vlado houba, Pierre-Luc Paour, Kristof Coomans (SCK-CEN Belgian Nucleair
Research Centre), Martin Pool, Kirk Strobeck, Rick Waldron, Brant Messenger
(http://www.brantmessenger.com/), Devan Penner-Woelk, Saulo Vallory, Wagner
B. Soares, Artur Tchernychev, Valentina De Rosa, Jason Wong
(http://carrot.org/), Christoph, Daniel Esteban, strftime, Mick@el, rezna,
Simon Willison (http://simonwillison.net), Anton Ongson, Gabriel Paderni,
Marco van Oort, penutbutterjelly, Philipp Lenssen, Bjorn Roesbeke
(http://www.bjornroesbeke.be/), Bug?, Eric Nagel, Tomasz Wesolowski,
Evertjan Garretsen, Bobby Drake, Blues (http://tech.bluesmoon.info/), Luke
Godfrey, Pul, uestla, Alan C, Ulrich, Rafal Kukawski, Yves Sucaet,
sowberry, Norman "zEh" Fuchs, hitwork, Zahlii, johnrembo, Nick Callen,
Steven Levithan (stevenlevithan.com), ejsanders, Scott Baker, Brian Tafoya
(http://www.premasolutions.com/), Philippe Jausions
(http://pear.php.net/user/jausions), Aidan Lister
(http://aidanlister.com/), Rob, e-mike, HKM, ChaosNo1, metjay, strcasecmp,
strcmp, Taras Bogach, jpfle, Alexander Ermolaev
(http://snippets.dzone.com/user/AlexanderErmolaev), DxGx, kilops, Orlando,
dptr1988, Le Torbi, James (http://www.james-bell.co.uk/), Pedro Tainha
(http://www.pedrotainha.com), James, Arnout Kazemier
(http://www.3rd-Eden.com), Chris McMacken, gabriel paderni, Yannoo,
FGFEmperor, baris ozdil, Tod Gentille, Greg Frazier, jakes, 3D-GRAF, Allan
Jensen (http://www.winternet.no), Howard Yeend, Benjamin Lupton, davook,
daniel airton wermann (http://wermann.com.br), Atli T¨®r, Maximusya, Ryan
W Tenney (http://ryan.10e.us), Alexander M Beedie, fearphage
(http://http/my.opera.com/fearphage/), Nathan Sepulveda, Victor, Matteo,
Billy, stensi, Cord, Manish, T.J. Leahy, Riddler
(http://www.frontierwebdev.com/), Rafa? Kukawski, FremyCompany, Matt
Bradley, Tim de Koning, Luis Salazar (http://www.freaky-media.com/), Diogo
Resende, Rival, Andrej Pavlovic, Garagoth, Le Torbi
(http://www.letorbi.de/), Dino, Josep Sanz (http://www.ws3.es/), rem,
Russell Walker (http://www.nbill.co.uk/), Jamie Beck
(http://www.terabit.ca/), setcookie, Michael, YUI Library:
http://developer.yahoo.com/yui/docs/YAHOO.util.DateLocale.html, Blues at
http://hacks.bluesmoon.info/strftime/strftime.js, Ben
(http://benblume.co.uk/), DtTvB
(http://dt.in.th/2008-09-16.string-length-in-bytes.html), Andreas, William,
meo, incidence, Cagri Ekin, Amirouche, Amir Habibi
(http://www.residence-mixte.com/), Luke Smith (http://lucassmith.name),
Kheang Hok Chin (http://www.distantia.ca/), Jay Klehr, Lorenzo Pisani,
Tony, Yen-Wei Liu, Greenseed, mk.keck, Leslie Hoare, dude, booeyOH, Ben
Bryan

Licensed under the MIT (MIT-LICENSE.txt) license.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL KEVIN VAN ZONNEVELD BE LIABLE FOR ANY CLAIM, DAMAGES
OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/

function sprintf() {
  // http://kevin.vanzonneveld.net
  // +   original by: Ash Searle (http://hexmen.com/blog/)
  // + namespaced by: Michael White (http://getsprink.com)
  // +    tweaked by: Jack
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +      input by: Paulo Freitas
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +      input by: Brett Zamir (http://brett-zamir.me)
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: Dj
  // +   improved by: Allidylls
  // *     example 1: sprintf("%01.2f", 123.1);
  // *     returns 1: 123.10
  // *     example 2: sprintf("[%10s]", 'monkey');
  // *     returns 2: '[    monkey]'
  // *     example 3: sprintf("[%'#10s]", 'monkey');
  // *     returns 3: '[####monkey]'
  // *     example 4: sprintf("%d", 123456789012345);
  // *     returns 4: '123456789012345'
  var regex = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g;
  var a = arguments,
    i = 0,
    format = a[i++];

  // pad()
  var pad = function (str, len, chr, leftJustify) {
    if (!chr) {
      chr = ' ';
    }

    var padding = (str.length >= len) ? '' : Array(1 + len - str.length >>> 0).join(chr);
    return leftJustify ? str + padding : padding + str;
  };

  // justify()
  var justify = function (value, prefix, leftJustify, minWidth, zeroPad, customPadChar) {
    var diff = minWidth - value.length;
    if (diff > 0) {
      if (leftJustify || !zeroPad) {
        value = pad(value, minWidth, customPadChar, leftJustify);
      } else {
        value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
      }
    }
    return value;
  };

  // formatBaseX()
  var formatBaseX = function (value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
    // Note: casts negative numbers to positive ones
    var number = value >>> 0;
    prefix = prefix && number && {
      '2': '0b',
      '8': '0',
      '16': '0x'
    }[base] || '';
    value = prefix + pad(number.toString(base), precision || 0, '0', false);
    return justify(value, prefix, leftJustify, minWidth, zeroPad);
  };

  // formatString()
  var formatString = function (value, leftJustify, minWidth, precision, zeroPad, customPadChar) {
    if (precision != null) {
      value = value.slice(0, precision);
    }
    return justify(value, '', leftJustify, minWidth, zeroPad, customPadChar);
  };

  // doFormat()
  var doFormat = function (substring, valueIndex, flags, minWidth, _, precision, type) {
    var number;
    var prefix;
    var method;
    var textTransform;
    var value;

    if (substring == '%%') {
      return '%';
    }

    // parse flags
    var leftJustify = false,
      positivePrefix = '',
      zeroPad = false,
      prefixBaseX = false,
      customPadChar = ' ';
    var flagsl = flags.length;
    for (var j = 0; flags && j < flagsl; j++) {
      switch (flags.charAt(j)) {
        case ' ':
          positivePrefix = ' ';
          break;
        case '+':
          positivePrefix = '+';
          break;
        case '-':
          leftJustify = true;
          break;
        case "'":
          customPadChar = flags.charAt(j + 1);
          break;
        case '0':
          zeroPad = true;
          break;
        case '#':
          prefixBaseX = true;
          break;
      }
    }

    // parameters may be null, undefined, empty-string or real valued
    // we want to ignore null, undefined and empty-string values
    if (!minWidth) {
      minWidth = 0;
    } else if (minWidth == '*') {
      minWidth = +a[i++];
    } else if (minWidth.charAt(0) == '*') {
      minWidth = +a[minWidth.slice(1, -1)];
    } else {
      minWidth = +minWidth;
    }

    // Note: undocumented perl feature:
    if (minWidth < 0) {
      minWidth = -minWidth;
      leftJustify = true;
    }

    if (!isFinite(minWidth)) {
      throw new Error('sprintf: (minimum-)width must be finite');
    }

    if (!precision) {
      precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type == 'd') ? 0 : undefined;
    } else if (precision == '*') {
      precision = +a[i++];
    } else if (precision.charAt(0) == '*') {
      precision = +a[precision.slice(1, -1)];
    } else {
      precision = +precision;
    }

    // grab value using valueIndex if required?
    value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];

    switch (type) {
      case 's':
        return formatString(String(value), leftJustify, minWidth, precision, zeroPad, customPadChar);
      case 'c':
        return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
      case 'b':
        return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
      case 'o':
        return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
      case 'x':
        return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
      case 'X':
        return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad).toUpperCase();
      case 'u':
        return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
      case 'i':
      case 'd':
        number = +value || 0;
        number = Math.round(number - number % 1); // Plain Math.round doesn't just truncate
        prefix = number < 0 ? '-' : positivePrefix;
        value = prefix + pad(String(Math.abs(number)), precision, '0', false);
        return justify(value, prefix, leftJustify, minWidth, zeroPad);
      case 'e':
      case 'E':
      case 'f': // Should handle locales (as per setlocale)
      case 'F':
      case 'g':
      case 'G':
        number = +value;
        prefix = number < 0 ? '-' : positivePrefix;
        method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
        textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
        value = prefix + Math.abs(number)[method](precision);
        return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
      default:
        return substring;
    }
  };

  return format.replace(regex, doFormat);
}

/**
 * @exports defined
 *
 * @param {*} value The object.
 * @returns {Boolean} Returns true if the object is defined, returns false otherwise.
 *
 * @example
 * if (Cesium.defined(positions)) {
 *      doSomething();
 * } else {
 *      doSomethingElse();
 * }
 */
function defined(value) {
  return value !== undefined && value !== null;
}

/**
 * Constructs an exception object that is thrown due to a developer error, e.g., invalid argument,
 * argument out of range, etc.  This exception should only be thrown during development;
 * it usually indicates a bug in the calling code.  This exception should never be
 * caught; instead the calling code should strive not to generate it.
 * <br /><br />
 * On the other hand, a {@link RuntimeError} indicates an exception that may
 * be thrown at runtime, e.g., out of memory, that the calling code should be prepared
 * to catch.
 *
 * @alias DeveloperError
 * @constructor
 * @extends Error
 *
 * @param {String} [message] The error message for this exception.
 *
 * @see RuntimeError
 */
function DeveloperError(message) {
  /**
   * 'DeveloperError' indicating that this exception was thrown due to a developer error.
   * @type {String}
   * @readonly
   */
  this.name = "DeveloperError";

  /**
   * The explanation for why this exception was thrown.
   * @type {String}
   * @readonly
   */
  this.message = message;

  //Browsers such as IE don't have a stack property until you actually throw the error.
  var stack;
  try {
    throw new Error();
  } catch (e) {
    stack = e.stack;
  }

  /**
   * The stack trace of this exception, if available.
   * @type {String}
   * @readonly
   */
  this.stack = stack;
}

if (defined(Object.create)) {
  DeveloperError.prototype = Object.create(Error.prototype);
  DeveloperError.prototype.constructor = DeveloperError;
}

DeveloperError.prototype.toString = function () {
  var str = this.name + ": " + this.message;

  if (defined(this.stack)) {
    str += "\n" + this.stack.toString();
  }

  return str;
};

/**
 * @private
 */
DeveloperError.throwInstantiationError = function () {
  throw new DeveloperError(
    "This function defines an interface and should not be called directly."
  );
};

/**
 * Contains functions for checking that supplied arguments are of a specified type
 * or meet specified conditions
 * @private
 */
var Check = {};

/**
 * Contains type checking functions, all using the typeof operator
 */
Check.typeOf = {};

function getUndefinedErrorMessage(name) {
  return name + " is required, actual value was undefined";
}

function getFailedTypeErrorMessage(actual, expected, name) {
  return (
    "Expected " +
    name +
    " to be typeof " +
    expected +
    ", actual typeof was " +
    actual
  );
}

/**
 * Throws if test is not defined
 *
 * @param {String} name The name of the variable being tested
 * @param {*} test The value that is to be checked
 * @exception {DeveloperError} test must be defined
 */
Check.defined = function (name, test) {
  if (!defined(test)) {
    throw new DeveloperError(getUndefinedErrorMessage(name));
  }
};

/**
 * Throws if test is not typeof 'function'
 *
 * @param {String} name The name of the variable being tested
 * @param {*} test The value to test
 * @exception {DeveloperError} test must be typeof 'function'
 */
Check.typeOf.func = function (name, test) {
  if (typeof test !== "function") {
    throw new DeveloperError(
      getFailedTypeErrorMessage(typeof test, "function", name)
    );
  }
};

/**
 * Throws if test is not typeof 'string'
 *
 * @param {String} name The name of the variable being tested
 * @param {*} test The value to test
 * @exception {DeveloperError} test must be typeof 'string'
 */
Check.typeOf.string = function (name, test) {
  if (typeof test !== "string") {
    throw new DeveloperError(
      getFailedTypeErrorMessage(typeof test, "string", name)
    );
  }
};

/**
 * Throws if test is not typeof 'number'
 *
 * @param {String} name The name of the variable being tested
 * @param {*} test The value to test
 * @exception {DeveloperError} test must be typeof 'number'
 */
Check.typeOf.number = function (name, test) {
  if (typeof test !== "number") {
    throw new DeveloperError(
      getFailedTypeErrorMessage(typeof test, "number", name)
    );
  }
};

/**
 * Throws if test is not typeof 'number' and less than limit
 *
 * @param {String} name The name of the variable being tested
 * @param {*} test The value to test
 * @param {Number} limit The limit value to compare against
 * @exception {DeveloperError} test must be typeof 'number' and less than limit
 */
Check.typeOf.number.lessThan = function (name, test, limit) {
  Check.typeOf.number(name, test);
  if (test >= limit) {
    throw new DeveloperError(
      "Expected " +
      name +
      " to be less than " +
      limit +
      ", actual value was " +
      test
    );
  }
};

/**
 * Throws if test is not typeof 'number' and less than or equal to limit
 *
 * @param {String} name The name of the variable being tested
 * @param {*} test The value to test
 * @param {Number} limit The limit value to compare against
 * @exception {DeveloperError} test must be typeof 'number' and less than or equal to limit
 */
Check.typeOf.number.lessThanOrEquals = function (name, test, limit) {
  Check.typeOf.number(name, test);
  if (test > limit) {
    throw new DeveloperError(
      "Expected " +
      name +
      " to be less than or equal to " +
      limit +
      ", actual value was " +
      test
    );
  }
};

/**
 * Throws if test is not typeof 'number' and greater than limit
 *
 * @param {String} name The name of the variable being tested
 * @param {*} test The value to test
 * @param {Number} limit The limit value to compare against
 * @exception {DeveloperError} test must be typeof 'number' and greater than limit
 */
Check.typeOf.number.greaterThan = function (name, test, limit) {
  Check.typeOf.number(name, test);
  if (test <= limit) {
    throw new DeveloperError(
      "Expected " +
      name +
      " to be greater than " +
      limit +
      ", actual value was " +
      test
    );
  }
};

/**
 * Throws if test is not typeof 'number' and greater than or equal to limit
 *
 * @param {String} name The name of the variable being tested
 * @param {*} test The value to test
 * @param {Number} limit The limit value to compare against
 * @exception {DeveloperError} test must be typeof 'number' and greater than or equal to limit
 */
Check.typeOf.number.greaterThanOrEquals = function (name, test, limit) {
  Check.typeOf.number(name, test);
  if (test < limit) {
    throw new DeveloperError(
      "Expected " +
      name +
      " to be greater than or equal to" +
      limit +
      ", actual value was " +
      test
    );
  }
};

/**
 * Throws if test is not typeof 'object'
 *
 * @param {String} name The name of the variable being tested
 * @param {*} test The value to test
 * @exception {DeveloperError} test must be typeof 'object'
 */
Check.typeOf.object = function (name, test) {
  if (typeof test !== "object") {
    throw new DeveloperError(
      getFailedTypeErrorMessage(typeof test, "object", name)
    );
  }
};

/**
 * Throws if test is not typeof 'boolean'
 *
 * @param {String} name The name of the variable being tested
 * @param {*} test The value to test
 * @exception {DeveloperError} test must be typeof 'boolean'
 */
Check.typeOf.bool = function (name, test) {
  if (typeof test !== "boolean") {
    throw new DeveloperError(
      getFailedTypeErrorMessage(typeof test, "boolean", name)
    );
  }
};

/**
 * Throws if test1 and test2 is not typeof 'number' and not equal in value
 *
 * @param {String} name1 The name of the first variable being tested
 * @param {String} name2 The name of the second variable being tested against
 * @param {*} test1 The value to test
 * @param {*} test2 The value to test against
 * @exception {DeveloperError} test1 and test2 should be type of 'number' and be equal in value
 */
Check.typeOf.number.equals = function (name1, name2, test1, test2) {
  Check.typeOf.number(name1, test1);
  Check.typeOf.number(name2, test2);
  if (test1 !== test2) {
    throw new DeveloperError(
      name1 +
      " must be equal to " +
      name2 +
      ", the actual values are " +
      test1 +
      " and " +
      test2
    );
  }
};

/**
 * Finds an item in a sorted array.
 *
 * @exports binarySearch
 * @param {Array} array The sorted array to search.
 * @param {*} itemToFind The item to find in the array.
 * @param {binarySearch~Comparator} comparator The function to use to compare the item to
 *        elements in the array.
 * @returns {Number} The index of <code>itemToFind</code> in the array, if it exists.  If <code>itemToFind</code>
 *        does not exist, the return value is a negative number which is the bitwise complement (~)
 *        of the index before which the itemToFind should be inserted in order to maintain the
 *        sorted order of the array.
 *
 * @example
 * // Create a comparator function to search through an array of numbers.
 * function comparator(a, b) {
 *     return a - b;
 * };
 * var numbers = [0, 2, 4, 6, 8];
 * var index = Cesium.binarySearch(numbers, 6, comparator); // 3
 */
function binarySearch(array, itemToFind, comparator) {
  //>>includeStart('debug', pragmas.debug);
  Check.defined("array", array);
  Check.defined("itemToFind", itemToFind);
  Check.defined("comparator", comparator);
  //>>includeEnd('debug');

  var low = 0;
  var high = array.length - 1;
  var i;
  var comparison;

  while (low <= high) {
    i = ~~((low + high) / 2);
    comparison = comparator(array[i], itemToFind);
    if (comparison < 0) {
      low = i + 1;
      continue;
    }
    if (comparison > 0) {
      high = i - 1;
      continue;
    }
    return i;
  }
  return ~(high + 1);
}

/**
 * Returns the first parameter if not undefined, otherwise the second parameter.
 * Useful for setting a default value for a parameter.
 *
 * @exports defaultValue
 *
 * @param {*} a
 * @param {*} b
 * @returns {*} Returns the first parameter if not undefined, otherwise the second parameter.
 *
 * @example
 * param = Cesium.defaultValue(param, 'default');
 */
function defaultValue(a, b) {
  if (a !== undefined && a !== null) {
    return a;
  }
  return b;
}

/**
 * A frozen empty object that can be used as the default value for options passed as
 * an object literal.
 * @type {Object}
 */
defaultValue.EMPTY_OBJECT = Object.freeze({});

/**
 * Represents a Gregorian date in a more precise format than the JavaScript Date object.
 * In addition to submillisecond precision, this object can also represent leap seconds.
 * @alias GregorianDate
 * @constructor
 *
 * @see JulianDate#toGregorianDate
 */
function GregorianDate(
  year,
  month,
  day,
  hour,
  minute,
  second,
  millisecond,
  isLeapSecond
) {
  /**
   * Gets or sets the year as a whole number.
   * @type {Number}
   */
  this.year = year;
  /**
   * Gets or sets the month as a whole number with range [1, 12].
   * @type {Number}
   */
  this.month = month;
  /**
   * Gets or sets the day of the month as a whole number starting at 1.
   * @type {Number}
   */
  this.day = day;
  /**
   * Gets or sets the hour as a whole number with range [0, 23].
   * @type {Number}
   */
  this.hour = hour;
  /**
   * Gets or sets the minute of the hour as a whole number with range [0, 59].
   * @type {Number}
   */
  this.minute = minute;
  /**
   * Gets or sets the second of the minute as a whole number with range [0, 60], with 60 representing a leap second.
   * @type {Number}
   */
  this.second = second;
  /**
   * Gets or sets the millisecond of the second as a floating point number with range [0.0, 1000.0).
   * @type {Number}
   */
  this.millisecond = millisecond;
  /**
   * Gets or sets whether this time is during a leap second.
   * @type {Boolean}
   */
  this.isLeapSecond = isLeapSecond;
}

/**
 * Determines if a given date is a leap year.
 *
 * @exports isLeapYear
 *
 * @param {Number} year The year to be tested.
 * @returns {Boolean} True if <code>year</code> is a leap year.
 *
 * @example
 * var leapYear = Cesium.isLeapYear(2000); // true
 */
function isLeapYear(year) {
  //>>includeStart('debug', pragmas.debug);
  if (year === null || isNaN(year)) {
    throw new DeveloperError("year is required and must be a number.");
  }
  //>>includeEnd('debug');

  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Describes a single leap second, which is constructed from a {@link JulianDate} and a
 * numerical offset representing the number of seconds TAI is ahead of the UTC time standard.
 * @alias LeapSecond
 * @constructor
 *
 * @param {JulianDate} [date] A Julian date representing the time of the leap second.
 * @param {Number} [offset] The cumulative number of seconds that TAI is ahead of UTC at the provided date.
 */
function LeapSecond(date, offset) {
  /**
   * Gets or sets the date at which this leap second occurs.
   * @type {JulianDate}
   */
  this.julianDate = date;

  /**
   * Gets or sets the cumulative number of seconds between the UTC and TAI time standards at the time
   * of this leap second.
   * @type {Number}
   */
  this.offset = offset;
}

/**
 * Constants for time conversions like those done by {@link JulianDate}.
 *
 * @exports TimeConstants
 *
 * @see JulianDate
 *
 * @private
 */
var TimeConstants = {
  /**
   * The number of seconds in one millisecond: <code>0.001</code>
   * @type {Number}
   * @constant
   */
  SECONDS_PER_MILLISECOND: 0.001,

  /**
   * The number of seconds in one minute: <code>60</code>.
   * @type {Number}
   * @constant
   */
  SECONDS_PER_MINUTE: 60.0,

  /**
   * The number of minutes in one hour: <code>60</code>.
   * @type {Number}
   * @constant
   */
  MINUTES_PER_HOUR: 60.0,

  /**
   * The number of hours in one day: <code>24</code>.
   * @type {Number}
   * @constant
   */
  HOURS_PER_DAY: 24.0,

  /**
   * The number of seconds in one hour: <code>3600</code>.
   * @type {Number}
   * @constant
   */
  SECONDS_PER_HOUR: 3600.0,

  /**
   * The number of minutes in one day: <code>1440</code>.
   * @type {Number}
   * @constant
   */
  MINUTES_PER_DAY: 1440.0,

  /**
   * The number of seconds in one day, ignoring leap seconds: <code>86400</code>.
   * @type {Number}
   * @constant
   */
  SECONDS_PER_DAY: 86400.0,

  /**
   * The number of days in one Julian century: <code>36525</code>.
   * @type {Number}
   * @constant
   */
  DAYS_PER_JULIAN_CENTURY: 36525.0,

  /**
   * One trillionth of a second.
   * @type {Number}
   * @constant
   */
  PICOSECOND: 0.000000001,

  /**
   * The number of days to subtract from a Julian date to determine the
   * modified Julian date, which gives the number of days since midnight
   * on November 17, 1858.
   * @type {Number}
   * @constant
   */
  MODIFIED_JULIAN_DATE_DIFFERENCE: 2400000.5,
};
var TimeConstants$1 = Object.freeze(TimeConstants);

/**
 * Provides the type of time standards which JulianDate can take as input.
 *
 * @exports TimeStandard
 *
 * @see JulianDate
 */
var TimeStandard = {
  /**
   * Represents the coordinated Universal Time (UTC) time standard.
   *
   * UTC is related to TAI according to the relationship
   * <code>UTC = TAI - deltaT</code> where <code>deltaT</code> is the number of leap
   * seconds which have been introduced as of the time in TAI.
   *
   * @type {Number}
   * @constant
   */
  UTC: 0,

  /**
   * Represents the International Atomic Time (TAI) time standard.
   * TAI is the principal time standard to which the other time standards are related.
   *
   * @type {Number}
   * @constant
   */
  TAI: 1,
};
var TimeStandard$1 = Object.freeze(TimeStandard);

var gregorianDateScratch = new GregorianDate();
var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var daysInLeapFeburary = 29;

function compareLeapSecondDates(leapSecond, dateToFind) {
  return JulianDate.compare(leapSecond.julianDate, dateToFind.julianDate);
}

// we don't really need a leap second instance, anything with a julianDate property will do
var binarySearchScratchLeapSecond = new LeapSecond();

function convertUtcToTai(julianDate) {
  //Even though julianDate is in UTC, we'll treat it as TAI and
  //search the leap second table for it.
  binarySearchScratchLeapSecond.julianDate = julianDate;
  var leapSeconds = JulianDate.leapSeconds;
  var index = binarySearch(
    leapSeconds,
    binarySearchScratchLeapSecond,
    compareLeapSecondDates
  );

  if (index < 0) {
    index = ~index;
  }

  if (index >= leapSeconds.length) {
    index = leapSeconds.length - 1;
  }

  var offset = leapSeconds[index].offset;
  if (index > 0) {
    //Now we have the index of the closest leap second that comes on or after our UTC time.
    //However, if the difference between the UTC date being converted and the TAI
    //defined leap second is greater than the offset, we are off by one and need to use
    //the previous leap second.
    var difference = JulianDate.secondsDifference(
      leapSeconds[index].julianDate,
      julianDate
    );
    if (difference > offset) {
      index--;
      offset = leapSeconds[index].offset;
    }
  }

  JulianDate.addSeconds(julianDate, offset, julianDate);
}

function convertTaiToUtc(julianDate, result) {
  binarySearchScratchLeapSecond.julianDate = julianDate;
  var leapSeconds = JulianDate.leapSeconds;
  var index = binarySearch(
    leapSeconds,
    binarySearchScratchLeapSecond,
    compareLeapSecondDates
  );
  if (index < 0) {
    index = ~index;
  }

  //All times before our first leap second get the first offset.
  if (index === 0) {
    return JulianDate.addSeconds(julianDate, -leapSeconds[0].offset, result);
  }

  //All times after our leap second get the last offset.
  if (index >= leapSeconds.length) {
    return JulianDate.addSeconds(
      julianDate,
      -leapSeconds[index - 1].offset,
      result
    );
  }

  //Compute the difference between the found leap second and the time we are converting.
  var difference = JulianDate.secondsDifference(
    leapSeconds[index].julianDate,
    julianDate
  );

  if (difference === 0) {
    //The date is in our leap second table.
    return JulianDate.addSeconds(
      julianDate,
      -leapSeconds[index].offset,
      result
    );
  }

  if (difference <= 1.0) {
    //The requested date is during the moment of a leap second, then we cannot convert to UTC
    return undefined;
  }

  //The time is in between two leap seconds, index is the leap second after the date
  //we're converting, so we subtract one to get the correct LeapSecond instance.
  return JulianDate.addSeconds(
    julianDate,
    -leapSeconds[--index].offset,
    result
  );
}

function setComponents(wholeDays, secondsOfDay, julianDate) {
  var extraDays = (secondsOfDay / TimeConstants$1.SECONDS_PER_DAY) | 0;
  wholeDays += extraDays;
  secondsOfDay -= TimeConstants$1.SECONDS_PER_DAY * extraDays;

  if (secondsOfDay < 0) {
    wholeDays--;
    secondsOfDay += TimeConstants$1.SECONDS_PER_DAY;
  }

  julianDate.dayNumber = wholeDays;
  julianDate.secondsOfDay = secondsOfDay;
  return julianDate;
}

function computeJulianDateComponents(
  year,
  month,
  day,
  hour,
  minute,
  second,
  millisecond
) {
  // Algorithm from page 604 of the Explanatory Supplement to the
  // Astronomical Almanac (Seidelmann 1992).

  var a = ((month - 14) / 12) | 0;
  var b = year + 4800 + a;
  var dayNumber =
    (((1461 * b) / 4) | 0) +
    (((367 * (month - 2 - 12 * a)) / 12) | 0) -
    (((3 * (((b + 100) / 100) | 0)) / 4) | 0) +
    day -
    32075;

  // JulianDates are noon-based
  hour = hour - 12;
  if (hour < 0) {
    hour += 24;
  }

  var secondsOfDay =
    second +
    (hour * TimeConstants$1.SECONDS_PER_HOUR +
      minute * TimeConstants$1.SECONDS_PER_MINUTE +
      millisecond * TimeConstants$1.SECONDS_PER_MILLISECOND);

  if (secondsOfDay >= 43200.0) {
    dayNumber -= 1;
  }

  return [dayNumber, secondsOfDay];
}

//Regular expressions used for ISO8601 date parsing.
//YYYY
var matchCalendarYear = /^(\d{4})$/;
//YYYY-MM (YYYYMM is invalid)
var matchCalendarMonth = /^(\d{4})-(\d{2})$/;
//YYYY-DDD or YYYYDDD
var matchOrdinalDate = /^(\d{4})-?(\d{3})$/;
//YYYY-Www or YYYYWww or YYYY-Www-D or YYYYWwwD
var matchWeekDate = /^(\d{4})-?W(\d{2})-?(\d{1})?$/;
//YYYY-MM-DD or YYYYMMDD
var matchCalendarDate = /^(\d{4})-?(\d{2})-?(\d{2})$/;
// Match utc offset
var utcOffset = /([Z+\-])?(\d{2})?:?(\d{2})?$/;
// Match hours HH or HH.xxxxx
var matchHours = /^(\d{2})(\.\d+)?/.source + utcOffset.source;
// Match hours/minutes HH:MM HHMM.xxxxx
var matchHoursMinutes = /^(\d{2}):?(\d{2})(\.\d+)?/.source + utcOffset.source;
// Match hours/minutes HH:MM:SS HHMMSS.xxxxx
var matchHoursMinutesSeconds =
  /^(\d{2}):?(\d{2}):?(\d{2})(\.\d+)?/.source + utcOffset.source;

var iso8601ErrorMessage = "Invalid ISO 8601 date.";

/**
 * Represents an astronomical Julian date, which is the number of days since noon on January 1, -4712 (4713 BC).
 * For increased precision, this class stores the whole number part of the date and the seconds
 * part of the date in separate components.  In order to be safe for arithmetic and represent
 * leap seconds, the date is always stored in the International Atomic Time standard
 * {@link TimeStandard.TAI}.
 * @alias JulianDate
 * @constructor
 *
 * @param {Number} [julianDayNumber=0.0] The Julian Day Number representing the number of whole days.  Fractional days will also be handled correctly.
 * @param {Number} [secondsOfDay=0.0] The number of seconds into the current Julian Day Number.  Fractional seconds, negative seconds and seconds greater than a day will be handled correctly.
 * @param {TimeStandard} [timeStandard=TimeStandard.UTC] The time standard in which the first two parameters are defined.
 */
function JulianDate(julianDayNumber, secondsOfDay, timeStandard) {
  /**
   * Gets or sets the number of whole days.
   * @type {Number}
   */
  this.dayNumber = undefined;

  /**
   * Gets or sets the number of seconds into the current day.
   * @type {Number}
   */
  this.secondsOfDay = undefined;

  julianDayNumber = defaultValue(julianDayNumber, 0.0);
  secondsOfDay = defaultValue(secondsOfDay, 0.0);
  timeStandard = defaultValue(timeStandard, TimeStandard$1.UTC);

  //If julianDayNumber is fractional, make it an integer and add the number of seconds the fraction represented.
  var wholeDays = julianDayNumber | 0;
  secondsOfDay =
    secondsOfDay +
    (julianDayNumber - wholeDays) * TimeConstants$1.SECONDS_PER_DAY;

  setComponents(wholeDays, secondsOfDay, this);

  if (timeStandard === TimeStandard$1.UTC) {
    convertUtcToTai(this);
  }
}

/**
 * Creates a new instance from a GregorianDate.
 *
 * @param {GregorianDate} date A GregorianDate.
 * @param {JulianDate} [result] An existing instance to use for the result.
 * @returns {JulianDate} The modified result parameter or a new instance if none was provided.
 *
 * @exception {DeveloperError} date must be a valid GregorianDate.
 */
JulianDate.fromGregorianDate = function (date, result) {
  //>>includeStart('debug', pragmas.debug);
  if (!(date instanceof GregorianDate)) {
    throw new DeveloperError("date must be a valid GregorianDate.");
  }
  //>>includeEnd('debug');

  var components = computeJulianDateComponents(
    date.year,
    date.month,
    date.day,
    date.hour,
    date.minute,
    date.second,
    date.millisecond
  );
  if (!defined(result)) {
    return new JulianDate(components[0], components[1], TimeStandard$1.UTC);
  }
  setComponents(components[0], components[1], result);
  convertUtcToTai(result);
  return result;
};

/**
 * Creates a new instance from a JavaScript Date.
 *
 * @param {Date} date A JavaScript Date.
 * @param {JulianDate} [result] An existing instance to use for the result.
 * @returns {JulianDate} The modified result parameter or a new instance if none was provided.
 *
 * @exception {DeveloperError} date must be a valid JavaScript Date.
 */
JulianDate.fromDate = function (date, result) {
  //>>includeStart('debug', pragmas.debug);
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new DeveloperError("date must be a valid JavaScript Date.");
  }
  //>>includeEnd('debug');

  var components = computeJulianDateComponents(
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  );
  if (!defined(result)) {
    return new JulianDate(components[0], components[1], TimeStandard$1.UTC);
  }
  setComponents(components[0], components[1], result);
  convertUtcToTai(result);
  return result;
};

/**
 * Creates a new instance from a from an {@link http://en.wikipedia.org/wiki/ISO_8601|ISO 8601} date.
 * This method is superior to <code>Date.parse</code> because it will handle all valid formats defined by the ISO 8601
 * specification, including leap seconds and sub-millisecond times, which discarded by most JavaScript implementations.
 *
 * @param {String} iso8601String An ISO 8601 date.
 * @param {JulianDate} [result] An existing instance to use for the result.
 * @returns {JulianDate} The modified result parameter or a new instance if none was provided.
 *
 * @exception {DeveloperError} Invalid ISO 8601 date.
 */
JulianDate.fromIso8601 = function (iso8601String, result) {
  //>>includeStart('debug', pragmas.debug);
  if (typeof iso8601String !== "string") {
    throw new DeveloperError(iso8601ErrorMessage);
  }
  //>>includeEnd('debug');

  //Comma and decimal point both indicate a fractional number according to ISO 8601,
  //start out by blanket replacing , with . which is the only valid such symbol in JS.
  iso8601String = iso8601String.replace(",", ".");

  //Split the string into its date and time components, denoted by a mandatory T
  var tokens = iso8601String.split("T");
  var year;
  var month = 1;
  var day = 1;
  var hour = 0;
  var minute = 0;
  var second = 0;
  var millisecond = 0;

  //Lacking a time is okay, but a missing date is illegal.
  var date = tokens[0];
  var time = tokens[1];
  var tmp;
  var inLeapYear;
  //>>includeStart('debug', pragmas.debug);
  if (!defined(date)) {
    throw new DeveloperError(iso8601ErrorMessage);
  }

  var dashCount;
  //>>includeEnd('debug');

  //First match the date against possible regular expressions.
  tokens = date.match(matchCalendarDate);
  if (tokens !== null) {
    //>>includeStart('debug', pragmas.debug);
    dashCount = date.split("-").length - 1;
    if (dashCount > 0 && dashCount !== 2) {
      throw new DeveloperError(iso8601ErrorMessage);
    }
    //>>includeEnd('debug');
    year = +tokens[1];
    month = +tokens[2];
    day = +tokens[3];
  } else {
    tokens = date.match(matchCalendarMonth);
    if (tokens !== null) {
      year = +tokens[1];
      month = +tokens[2];
    } else {
      tokens = date.match(matchCalendarYear);
      if (tokens !== null) {
        year = +tokens[1];
      } else {
        //Not a year/month/day so it must be an ordinal date.
        var dayOfYear;
        tokens = date.match(matchOrdinalDate);
        if (tokens !== null) {
          year = +tokens[1];
          dayOfYear = +tokens[2];
          inLeapYear = isLeapYear(year);

          //This validation is only applicable for this format.
          //>>includeStart('debug', pragmas.debug);
          if (
            dayOfYear < 1 ||
            (inLeapYear && dayOfYear > 366) ||
            (!inLeapYear && dayOfYear > 365)
          ) {
            throw new DeveloperError(iso8601ErrorMessage);
          }
          //>>includeEnd('debug')
        } else {
          tokens = date.match(matchWeekDate);
          if (tokens !== null) {
            //ISO week date to ordinal date from
            //http://en.wikipedia.org/w/index.php?title=ISO_week_date&oldid=474176775
            year = +tokens[1];
            var weekNumber = +tokens[2];
            var dayOfWeek = +tokens[3] || 0;

            //>>includeStart('debug', pragmas.debug);
            dashCount = date.split("-").length - 1;
            if (
              dashCount > 0 &&
              ((!defined(tokens[3]) && dashCount !== 1) ||
                (defined(tokens[3]) && dashCount !== 2))
            ) {
              throw new DeveloperError(iso8601ErrorMessage);
            }
            //>>includeEnd('debug')

            var january4 = new Date(Date.UTC(year, 0, 4));
            dayOfYear = weekNumber * 7 + dayOfWeek - january4.getUTCDay() - 3;
          } else {
            //None of our regular expressions succeeded in parsing the date properly.
            //>>includeStart('debug', pragmas.debug);
            throw new DeveloperError(iso8601ErrorMessage);
            //>>includeEnd('debug')
          }
        }
        //Split an ordinal date into month/day.
        tmp = new Date(Date.UTC(year, 0, 1));
        tmp.setUTCDate(dayOfYear);
        month = tmp.getUTCMonth() + 1;
        day = tmp.getUTCDate();
      }
    }
  }

  //Now that we have all of the date components, validate them to make sure nothing is out of range.
  inLeapYear = isLeapYear(year);
  //>>includeStart('debug', pragmas.debug);
  if (
    month < 1 ||
    month > 12 ||
    day < 1 ||
    ((month !== 2 || !inLeapYear) && day > daysInMonth[month - 1]) ||
    (inLeapYear && month === 2 && day > daysInLeapFeburary)
  ) {
    throw new DeveloperError(iso8601ErrorMessage);
  }
  //>>includeEnd('debug')

  //Now move onto the time string, which is much simpler.
  //If no time is specified, it is considered the beginning of the day, UTC to match Javascript's implementation.
  var offsetIndex;
  if (defined(time)) {
    tokens = time.match(matchHoursMinutesSeconds);
    if (tokens !== null) {
      //>>includeStart('debug', pragmas.debug);
      dashCount = time.split(":").length - 1;
      if (dashCount > 0 && dashCount !== 2 && dashCount !== 3) {
        throw new DeveloperError(iso8601ErrorMessage);
      }
      //>>includeEnd('debug')

      hour = +tokens[1];
      minute = +tokens[2];
      second = +tokens[3];
      millisecond = +(tokens[4] || 0) * 1000.0;
      offsetIndex = 5;
    } else {
      tokens = time.match(matchHoursMinutes);
      if (tokens !== null) {
        //>>includeStart('debug', pragmas.debug);
        dashCount = time.split(":").length - 1;
        if (dashCount > 2) {
          throw new DeveloperError(iso8601ErrorMessage);
        }
        //>>includeEnd('debug')

        hour = +tokens[1];
        minute = +tokens[2];
        second = +(tokens[3] || 0) * 60.0;
        offsetIndex = 4;
      } else {
        tokens = time.match(matchHours);
        if (tokens !== null) {
          hour = +tokens[1];
          minute = +(tokens[2] || 0) * 60.0;
          offsetIndex = 3;
        } else {
          //>>includeStart('debug', pragmas.debug);
          throw new DeveloperError(iso8601ErrorMessage);
          //>>includeEnd('debug')
        }
      }
    }

    //Validate that all values are in proper range.  Minutes and hours have special cases at 60 and 24.
    //>>includeStart('debug', pragmas.debug);
    if (
      minute >= 60 ||
      second >= 61 ||
      hour > 24 ||
      (hour === 24 && (minute > 0 || second > 0 || millisecond > 0))
    ) {
      throw new DeveloperError(iso8601ErrorMessage);
    }
    //>>includeEnd('debug');

    //Check the UTC offset value, if no value exists, use local time
    //a Z indicates UTC, + or - are offsets.
    var offset = tokens[offsetIndex];
    var offsetHours = +tokens[offsetIndex + 1];
    var offsetMinutes = +(tokens[offsetIndex + 2] || 0);
    switch (offset) {
      case "+":
        hour = hour - offsetHours;
        minute = minute - offsetMinutes;
        break;
      case "-":
        hour = hour + offsetHours;
        minute = minute + offsetMinutes;
        break;
      case "Z":
        break;
      default:
        minute =
          minute +
          new Date(
            Date.UTC(year, month - 1, day, hour, minute)
          ).getTimezoneOffset();
        break;
    }
  }

  //ISO8601 denotes a leap second by any time having a seconds component of 60 seconds.
  //If that's the case, we need to temporarily subtract a second in order to build a UTC date.
  //Then we add it back in after converting to TAI.
  var isLeapSecond = second === 60;
  if (isLeapSecond) {
    second--;
  }

  //Even if we successfully parsed the string into its components, after applying UTC offset or
  //special cases like 24:00:00 denoting midnight, we need to normalize the data appropriately.

  //milliseconds can never be greater than 1000, and seconds can't be above 60, so we start with minutes
  while (minute >= 60) {
    minute -= 60;
    hour++;
  }

  while (hour >= 24) {
    hour -= 24;
    day++;
  }

  tmp = inLeapYear && month === 2 ? daysInLeapFeburary : daysInMonth[month - 1];
  while (day > tmp) {
    day -= tmp;
    month++;

    if (month > 12) {
      month -= 12;
      year++;
    }

    tmp =
      inLeapYear && month === 2 ? daysInLeapFeburary : daysInMonth[month - 1];
  }

  //If UTC offset is at the beginning/end of the day, minutes can be negative.
  while (minute < 0) {
    minute += 60;
    hour--;
  }

  while (hour < 0) {
    hour += 24;
    day--;
  }

  while (day < 1) {
    month--;
    if (month < 1) {
      month += 12;
      year--;
    }

    tmp =
      inLeapYear && month === 2 ? daysInLeapFeburary : daysInMonth[month - 1];
    day += tmp;
  }

  //Now create the JulianDate components from the Gregorian date and actually create our instance.
  var components = computeJulianDateComponents(
    year,
    month,
    day,
    hour,
    minute,
    second,
    millisecond
  );

  if (!defined(result)) {
    result = new JulianDate(components[0], components[1], TimeStandard$1.UTC);
  } else {
    setComponents(components[0], components[1], result);
    convertUtcToTai(result);
  }

  //If we were on a leap second, add it back.
  if (isLeapSecond) {
    JulianDate.addSeconds(result, 1, result);
  }

  return result;
};

/**
 * Creates a new instance that represents the current system time.
 * This is equivalent to calling <code>JulianDate.fromDate(new Date());</code>.
 *
 * @param {JulianDate} [result] An existing instance to use for the result.
 * @returns {JulianDate} The modified result parameter or a new instance if none was provided.
 */
JulianDate.now = function (result) {
  return JulianDate.fromDate(new Date(), result);
};

var toGregorianDateScratch = new JulianDate(0, 0, TimeStandard$1.TAI);

/**
 * Creates a {@link GregorianDate} from the provided instance.
 *
 * @param {JulianDate} julianDate The date to be converted.
 * @param {GregorianDate} [result] An existing instance to use for the result.
 * @returns {GregorianDate} The modified result parameter or a new instance if none was provided.
 */
JulianDate.toGregorianDate = function (julianDate, result) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(julianDate)) {
    throw new DeveloperError("julianDate is required.");
  }
  //>>includeEnd('debug');

  var isLeapSecond = false;
  var thisUtc = convertTaiToUtc(julianDate, toGregorianDateScratch);
  if (!defined(thisUtc)) {
    //Conversion to UTC will fail if we are during a leap second.
    //If that's the case, subtract a second and convert again.
    //JavaScript doesn't support leap seconds, so this results in second 59 being repeated twice.
    JulianDate.addSeconds(julianDate, -1, toGregorianDateScratch);
    thisUtc = convertTaiToUtc(toGregorianDateScratch, toGregorianDateScratch);
    isLeapSecond = true;
  }

  var julianDayNumber = thisUtc.dayNumber;
  var secondsOfDay = thisUtc.secondsOfDay;

  if (secondsOfDay >= 43200.0) {
    julianDayNumber += 1;
  }

  // Algorithm from page 604 of the Explanatory Supplement to the
  // Astronomical Almanac (Seidelmann 1992).
  var L = (julianDayNumber + 68569) | 0;
  var N = ((4 * L) / 146097) | 0;
  L = (L - (((146097 * N + 3) / 4) | 0)) | 0;
  var I = ((4000 * (L + 1)) / 1461001) | 0;
  L = (L - (((1461 * I) / 4) | 0) + 31) | 0;
  var J = ((80 * L) / 2447) | 0;
  var day = (L - (((2447 * J) / 80) | 0)) | 0;
  L = (J / 11) | 0;
  var month = (J + 2 - 12 * L) | 0;
  var year = (100 * (N - 49) + I + L) | 0;

  var hour = (secondsOfDay / TimeConstants$1.SECONDS_PER_HOUR) | 0;
  var remainingSeconds = secondsOfDay - hour * TimeConstants$1.SECONDS_PER_HOUR;
  var minute = (remainingSeconds / TimeConstants$1.SECONDS_PER_MINUTE) | 0;
  remainingSeconds =
    remainingSeconds - minute * TimeConstants$1.SECONDS_PER_MINUTE;
  var second = remainingSeconds | 0;
  var millisecond =
    (remainingSeconds - second) / TimeConstants$1.SECONDS_PER_MILLISECOND;

  // JulianDates are noon-based
  hour += 12;
  if (hour > 23) {
    hour -= 24;
  }

  //If we were on a leap second, add it back.
  if (isLeapSecond) {
    second += 1;
  }

  if (!defined(result)) {
    return new GregorianDate(
      year,
      month,
      day,
      hour,
      minute,
      second,
      millisecond,
      isLeapSecond
    );
  }

  result.year = year;
  result.month = month;
  result.day = day;
  result.hour = hour;
  result.minute = minute;
  result.second = second;
  result.millisecond = millisecond;
  result.isLeapSecond = isLeapSecond;
  return result;
};

/**
 * Creates a JavaScript Date from the provided instance.
 * Since JavaScript dates are only accurate to the nearest millisecond and
 * cannot represent a leap second, consider using {@link JulianDate.toGregorianDate} instead.
 * If the provided JulianDate is during a leap second, the previous second is used.
 *
 * @param {JulianDate} julianDate The date to be converted.
 * @returns {Date} A new instance representing the provided date.
 */
JulianDate.toDate = function (julianDate) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(julianDate)) {
    throw new DeveloperError("julianDate is required.");
  }
  //>>includeEnd('debug');

  var gDate = JulianDate.toGregorianDate(julianDate, gregorianDateScratch);
  var second = gDate.second;
  if (gDate.isLeapSecond) {
    second -= 1;
  }
  return new Date(
    Date.UTC(
      gDate.year,
      gDate.month - 1,
      gDate.day,
      gDate.hour,
      gDate.minute,
      second,
      gDate.millisecond
    )
  );
};

/**
 * Creates an ISO8601 representation of the provided date.
 *
 * @param {JulianDate} julianDate The date to be converted.
 * @param {Number} [precision] The number of fractional digits used to represent the seconds component.  By default, the most precise representation is used.
 * @returns {String} The ISO8601 representation of the provided date.
 */
JulianDate.toIso8601 = function (julianDate, precision) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(julianDate)) {
    throw new DeveloperError("julianDate is required.");
  }
  //>>includeEnd('debug');

  var gDate = JulianDate.toGregorianDate(julianDate, gregorianDateScratch);
  var year = gDate.year;
  var month = gDate.month;
  var day = gDate.day;
  var hour = gDate.hour;
  var minute = gDate.minute;
  var second = gDate.second;
  var millisecond = gDate.millisecond;

  // special case - Iso8601.MAXIMUM_VALUE produces a string which we can't parse unless we adjust.
  // 10000-01-01T00:00:00 is the same instant as 9999-12-31T24:00:00
  if (
    year === 10000 &&
    month === 1 &&
    day === 1 &&
    hour === 0 &&
    minute === 0 &&
    second === 0 &&
    millisecond === 0
  ) {
    year = 9999;
    month = 12;
    day = 31;
    hour = 24;
  }

  var millisecondStr;

  if (!defined(precision) && millisecond !== 0) {
    //Forces milliseconds into a number with at least 3 digits to whatever the default toString() precision is.
    millisecondStr = (millisecond * 0.01).toString().replace(".", "");
    return sprintf(
      "%04d-%02d-%02dT%02d:%02d:%02d.%sZ",
      year,
      month,
      day,
      hour,
      minute,
      second,
      millisecondStr
    );
  }

  //Precision is either 0 or milliseconds is 0 with undefined precision, in either case, leave off milliseconds entirely
  if (!defined(precision) || precision === 0) {
    return sprintf(
      "%04d-%02d-%02dT%02d:%02d:%02dZ",
      year,
      month,
      day,
      hour,
      minute,
      second
    );
  }

  //Forces milliseconds into a number with at least 3 digits to whatever the specified precision is.
  millisecondStr = (millisecond * 0.01)
    .toFixed(precision)
    .replace(".", "")
    .slice(0, precision);
  return sprintf(
    "%04d-%02d-%02dT%02d:%02d:%02d.%sZ",
    year,
    month,
    day,
    hour,
    minute,
    second,
    millisecondStr
  );
};

/**
 * Duplicates a JulianDate instance.
 *
 * @param {JulianDate} julianDate The date to duplicate.
 * @param {JulianDate} [result] An existing instance to use for the result.
 * @returns {JulianDate} The modified result parameter or a new instance if none was provided. Returns undefined if julianDate is undefined.
 */
JulianDate.clone = function (julianDate, result) {
  if (!defined(julianDate)) {
    return undefined;
  }
  if (!defined(result)) {
    return new JulianDate(
      julianDate.dayNumber,
      julianDate.secondsOfDay,
      TimeStandard$1.TAI
    );
  }
  result.dayNumber = julianDate.dayNumber;
  result.secondsOfDay = julianDate.secondsOfDay;
  return result;
};

/**
 * Compares two instances.
 *
 * @param {JulianDate} left The first instance.
 * @param {JulianDate} right The second instance.
 * @returns {Number} A negative value if left is less than right, a positive value if left is greater than right, or zero if left and right are equal.
 */
JulianDate.compare = function (left, right) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(left)) {
    throw new DeveloperError("left is required.");
  }
  if (!defined(right)) {
    throw new DeveloperError("right is required.");
  }
  //>>includeEnd('debug');

  var julianDayNumberDifference = left.dayNumber - right.dayNumber;
  if (julianDayNumberDifference !== 0) {
    return julianDayNumberDifference;
  }
  return left.secondsOfDay - right.secondsOfDay;
};

/**
 * Compares two instances and returns <code>true</code> if they are equal, <code>false</code> otherwise.
 *
 * @param {JulianDate} [left] The first instance.
 * @param {JulianDate} [right] The second instance.
 * @returns {Boolean} <code>true</code> if the dates are equal; otherwise, <code>false</code>.
 */
JulianDate.equals = function (left, right) {
  return (
    left === right ||
    (defined(left) &&
      defined(right) &&
      left.dayNumber === right.dayNumber &&
      left.secondsOfDay === right.secondsOfDay)
  );
};

/**
 * Compares two instances and returns <code>true</code> if they are within <code>epsilon</code> seconds of
 * each other.  That is, in order for the dates to be considered equal (and for
 * this function to return <code>true</code>), the absolute value of the difference between them, in
 * seconds, must be less than <code>epsilon</code>.
 *
 * @param {JulianDate} [left] The first instance.
 * @param {JulianDate} [right] The second instance.
 * @param {Number} epsilon The maximum number of seconds that should separate the two instances.
 * @returns {Boolean} <code>true</code> if the two dates are within <code>epsilon</code> seconds of each other; otherwise <code>false</code>.
 */
JulianDate.equalsEpsilon = function (left, right, epsilon) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(epsilon)) {
    throw new DeveloperError("epsilon is required.");
  }
  //>>includeEnd('debug');

  return (
    left === right ||
    (defined(left) &&
      defined(right) &&
      Math.abs(JulianDate.secondsDifference(left, right)) <= epsilon)
  );
};

/**
 * Computes the total number of whole and fractional days represented by the provided instance.
 *
 * @param {JulianDate} julianDate The date.
 * @returns {Number} The Julian date as single floating point number.
 */
JulianDate.totalDays = function (julianDate) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(julianDate)) {
    throw new DeveloperError("julianDate is required.");
  }
  //>>includeEnd('debug');
  return (
    julianDate.dayNumber +
    julianDate.secondsOfDay / TimeConstants$1.SECONDS_PER_DAY
  );
};

/**
 * Computes the difference in seconds between the provided instance.
 *
 * @param {JulianDate} left The first instance.
 * @param {JulianDate} right The second instance.
 * @returns {Number} The difference, in seconds, when subtracting <code>right</code> from <code>left</code>.
 */
JulianDate.secondsDifference = function (left, right) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(left)) {
    throw new DeveloperError("left is required.");
  }
  if (!defined(right)) {
    throw new DeveloperError("right is required.");
  }
  //>>includeEnd('debug');

  var dayDifference =
    (left.dayNumber - right.dayNumber) * TimeConstants$1.SECONDS_PER_DAY;
  return dayDifference + (left.secondsOfDay - right.secondsOfDay);
};

/**
 * Computes the difference in days between the provided instance.
 *
 * @param {JulianDate} left The first instance.
 * @param {JulianDate} right The second instance.
 * @returns {Number} The difference, in days, when subtracting <code>right</code> from <code>left</code>.
 */
JulianDate.daysDifference = function (left, right) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(left)) {
    throw new DeveloperError("left is required.");
  }
  if (!defined(right)) {
    throw new DeveloperError("right is required.");
  }
  //>>includeEnd('debug');

  var dayDifference = left.dayNumber - right.dayNumber;
  var secondDifference =
    (left.secondsOfDay - right.secondsOfDay) / TimeConstants$1.SECONDS_PER_DAY;
  return dayDifference + secondDifference;
};

/**
 * Computes the number of seconds the provided instance is ahead of UTC.
 *
 * @param {JulianDate} julianDate The date.
 * @returns {Number} The number of seconds the provided instance is ahead of UTC
 */
JulianDate.computeTaiMinusUtc = function (julianDate) {
  binarySearchScratchLeapSecond.julianDate = julianDate;
  var leapSeconds = JulianDate.leapSeconds;
  var index = binarySearch(
    leapSeconds,
    binarySearchScratchLeapSecond,
    compareLeapSecondDates
  );
  if (index < 0) {
    index = ~index;
    --index;
    if (index < 0) {
      index = 0;
    }
  }
  return leapSeconds[index].offset;
};

/**
 * Adds the provided number of seconds to the provided date instance.
 *
 * @param {JulianDate} julianDate The date.
 * @param {Number} seconds The number of seconds to add or subtract.
 * @param {JulianDate} result An existing instance to use for the result.
 * @returns {JulianDate} The modified result parameter.
 */
JulianDate.addSeconds = function (julianDate, seconds, result) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(julianDate)) {
    throw new DeveloperError("julianDate is required.");
  }
  if (!defined(seconds)) {
    throw new DeveloperError("seconds is required.");
  }
  if (!defined(result)) {
    throw new DeveloperError("result is required.");
  }
  //>>includeEnd('debug');

  return setComponents(
    julianDate.dayNumber,
    julianDate.secondsOfDay + seconds,
    result
  );
};

/**
 * Adds the provided number of minutes to the provided date instance.
 *
 * @param {JulianDate} julianDate The date.
 * @param {Number} minutes The number of minutes to add or subtract.
 * @param {JulianDate} result An existing instance to use for the result.
 * @returns {JulianDate} The modified result parameter.
 */
JulianDate.addMinutes = function (julianDate, minutes, result) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(julianDate)) {
    throw new DeveloperError("julianDate is required.");
  }
  if (!defined(minutes)) {
    throw new DeveloperError("minutes is required.");
  }
  if (!defined(result)) {
    throw new DeveloperError("result is required.");
  }
  //>>includeEnd('debug');

  var newSecondsOfDay =
    julianDate.secondsOfDay + minutes * TimeConstants$1.SECONDS_PER_MINUTE;
  return setComponents(julianDate.dayNumber, newSecondsOfDay, result);
};

/**
 * Adds the provided number of hours to the provided date instance.
 *
 * @param {JulianDate} julianDate The date.
 * @param {Number} hours The number of hours to add or subtract.
 * @param {JulianDate} result An existing instance to use for the result.
 * @returns {JulianDate} The modified result parameter.
 */
JulianDate.addHours = function (julianDate, hours, result) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(julianDate)) {
    throw new DeveloperError("julianDate is required.");
  }
  if (!defined(hours)) {
    throw new DeveloperError("hours is required.");
  }
  if (!defined(result)) {
    throw new DeveloperError("result is required.");
  }
  //>>includeEnd('debug');

  var newSecondsOfDay =
    julianDate.secondsOfDay + hours * TimeConstants$1.SECONDS_PER_HOUR;
  return setComponents(julianDate.dayNumber, newSecondsOfDay, result);
};

/**
 * Adds the provided number of days to the provided date instance.
 *
 * @param {JulianDate} julianDate The date.
 * @param {Number} days The number of days to add or subtract.
 * @param {JulianDate} result An existing instance to use for the result.
 * @returns {JulianDate} The modified result parameter.
 */
JulianDate.addDays = function (julianDate, days, result) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(julianDate)) {
    throw new DeveloperError("julianDate is required.");
  }
  if (!defined(days)) {
    throw new DeveloperError("days is required.");
  }
  if (!defined(result)) {
    throw new DeveloperError("result is required.");
  }
  //>>includeEnd('debug');

  var newJulianDayNumber = julianDate.dayNumber + days;
  return setComponents(newJulianDayNumber, julianDate.secondsOfDay, result);
};

/**
 * Compares the provided instances and returns <code>true</code> if <code>left</code> is earlier than <code>right</code>, <code>false</code> otherwise.
 *
 * @param {JulianDate} left The first instance.
 * @param {JulianDate} right The second instance.
 * @returns {Boolean} <code>true</code> if <code>left</code> is earlier than <code>right</code>, <code>false</code> otherwise.
 */
JulianDate.lessThan = function (left, right) {
  return JulianDate.compare(left, right) < 0;
};

/**
 * Compares the provided instances and returns <code>true</code> if <code>left</code> is earlier than or equal to <code>right</code>, <code>false</code> otherwise.
 *
 * @param {JulianDate} left The first instance.
 * @param {JulianDate} right The second instance.
 * @returns {Boolean} <code>true</code> if <code>left</code> is earlier than or equal to <code>right</code>, <code>false</code> otherwise.
 */
JulianDate.lessThanOrEquals = function (left, right) {
  return JulianDate.compare(left, right) <= 0;
};

/**
 * Compares the provided instances and returns <code>true</code> if <code>left</code> is later than <code>right</code>, <code>false</code> otherwise.
 *
 * @param {JulianDate} left The first instance.
 * @param {JulianDate} right The second instance.
 * @returns {Boolean} <code>true</code> if <code>left</code> is later than <code>right</code>, <code>false</code> otherwise.
 */
JulianDate.greaterThan = function (left, right) {
  return JulianDate.compare(left, right) > 0;
};

/**
 * Compares the provided instances and returns <code>true</code> if <code>left</code> is later than or equal to <code>right</code>, <code>false</code> otherwise.
 *
 * @param {JulianDate} left The first instance.
 * @param {JulianDate} right The second instance.
 * @returns {Boolean} <code>true</code> if <code>left</code> is later than or equal to <code>right</code>, <code>false</code> otherwise.
 */
JulianDate.greaterThanOrEquals = function (left, right) {
  return JulianDate.compare(left, right) >= 0;
};

/**
 * Duplicates this instance.
 *
 * @param {JulianDate} [result] An existing instance to use for the result.
 * @returns {JulianDate} The modified result parameter or a new instance if none was provided.
 */
JulianDate.prototype.clone = function (result) {
  return JulianDate.clone(this, result);
};

/**
 * Compares this and the provided instance and returns <code>true</code> if they are equal, <code>false</code> otherwise.
 *
 * @param {JulianDate} [right] The second instance.
 * @returns {Boolean} <code>true</code> if the dates are equal; otherwise, <code>false</code>.
 */
JulianDate.prototype.equals = function (right) {
  return JulianDate.equals(this, right);
};

/**
 * Compares this and the provided instance and returns <code>true</code> if they are within <code>epsilon</code> seconds of
 * each other.  That is, in order for the dates to be considered equal (and for
 * this function to return <code>true</code>), the absolute value of the difference between them, in
 * seconds, must be less than <code>epsilon</code>.
 *
 * @param {JulianDate} [right] The second instance.
 * @param {Number} epsilon The maximum number of seconds that should separate the two instances.
 * @returns {Boolean} <code>true</code> if the two dates are within <code>epsilon</code> seconds of each other; otherwise <code>false</code>.
 */
JulianDate.prototype.equalsEpsilon = function (right, epsilon) {
  return JulianDate.equalsEpsilon(this, right, epsilon);
};

/**
 * Creates a string representing this date in ISO8601 format.
 *
 * @returns {String} A string representing this date in ISO8601 format.
 */
JulianDate.prototype.toString = function () {
  return JulianDate.toIso8601(this);
};

/**
 * Gets or sets the list of leap seconds used throughout Cesium.
 * @memberof JulianDate
 * @type {LeapSecond[]}
 */
JulianDate.leapSeconds = [
  new LeapSecond(new JulianDate(2441317, 43210.0, TimeStandard$1.TAI), 10), // January 1, 1972 00:00:00 UTC
  new LeapSecond(new JulianDate(2441499, 43211.0, TimeStandard$1.TAI), 11), // July 1, 1972 00:00:00 UTC
  new LeapSecond(new JulianDate(2441683, 43212.0, TimeStandard$1.TAI), 12), // January 1, 1973 00:00:00 UTC
  new LeapSecond(new JulianDate(2442048, 43213.0, TimeStandard$1.TAI), 13), // January 1, 1974 00:00:00 UTC
  new LeapSecond(new JulianDate(2442413, 43214.0, TimeStandard$1.TAI), 14), // January 1, 1975 00:00:00 UTC
  new LeapSecond(new JulianDate(2442778, 43215.0, TimeStandard$1.TAI), 15), // January 1, 1976 00:00:00 UTC
  new LeapSecond(new JulianDate(2443144, 43216.0, TimeStandard$1.TAI), 16), // January 1, 1977 00:00:00 UTC
  new LeapSecond(new JulianDate(2443509, 43217.0, TimeStandard$1.TAI), 17), // January 1, 1978 00:00:00 UTC
  new LeapSecond(new JulianDate(2443874, 43218.0, TimeStandard$1.TAI), 18), // January 1, 1979 00:00:00 UTC
  new LeapSecond(new JulianDate(2444239, 43219.0, TimeStandard$1.TAI), 19), // January 1, 1980 00:00:00 UTC
  new LeapSecond(new JulianDate(2444786, 43220.0, TimeStandard$1.TAI), 20), // July 1, 1981 00:00:00 UTC
  new LeapSecond(new JulianDate(2445151, 43221.0, TimeStandard$1.TAI), 21), // July 1, 1982 00:00:00 UTC
  new LeapSecond(new JulianDate(2445516, 43222.0, TimeStandard$1.TAI), 22), // July 1, 1983 00:00:00 UTC
  new LeapSecond(new JulianDate(2446247, 43223.0, TimeStandard$1.TAI), 23), // July 1, 1985 00:00:00 UTC
  new LeapSecond(new JulianDate(2447161, 43224.0, TimeStandard$1.TAI), 24), // January 1, 1988 00:00:00 UTC
  new LeapSecond(new JulianDate(2447892, 43225.0, TimeStandard$1.TAI), 25), // January 1, 1990 00:00:00 UTC
  new LeapSecond(new JulianDate(2448257, 43226.0, TimeStandard$1.TAI), 26), // January 1, 1991 00:00:00 UTC
  new LeapSecond(new JulianDate(2448804, 43227.0, TimeStandard$1.TAI), 27), // July 1, 1992 00:00:00 UTC
  new LeapSecond(new JulianDate(2449169, 43228.0, TimeStandard$1.TAI), 28), // July 1, 1993 00:00:00 UTC
  new LeapSecond(new JulianDate(2449534, 43229.0, TimeStandard$1.TAI), 29), // July 1, 1994 00:00:00 UTC
  new LeapSecond(new JulianDate(2450083, 43230.0, TimeStandard$1.TAI), 30), // January 1, 1996 00:00:00 UTC
  new LeapSecond(new JulianDate(2450630, 43231.0, TimeStandard$1.TAI), 31), // July 1, 1997 00:00:00 UTC
  new LeapSecond(new JulianDate(2451179, 43232.0, TimeStandard$1.TAI), 32), // January 1, 1999 00:00:00 UTC
  new LeapSecond(new JulianDate(2453736, 43233.0, TimeStandard$1.TAI), 33), // January 1, 2006 00:00:00 UTC
  new LeapSecond(new JulianDate(2454832, 43234.0, TimeStandard$1.TAI), 34), // January 1, 2009 00:00:00 UTC
  new LeapSecond(new JulianDate(2456109, 43235.0, TimeStandard$1.TAI), 35), // July 1, 2012 00:00:00 UTC
  new LeapSecond(new JulianDate(2457204, 43236.0, TimeStandard$1.TAI), 36), // July 1, 2015 00:00:00 UTC
  new LeapSecond(new JulianDate(2457754, 43237.0, TimeStandard$1.TAI), 37), // January 1, 2017 00:00:00 UTC
];
export { TimeStandard, JulianDate };
export default JulianDate;
