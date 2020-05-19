
let checkNull = (showNull, v) =>
  showNull ||
  (v !== null &&
    v !== undefined &&
    v !== "null" &&
    (typeof v !== "string" || v.trim().length > 0));
const makeArray = a => Array.prototype.slice.call(a);

const getElementsByAttribute = (_documentElement, _TagName, _aN, _aV) => {
  let _array = makeArray(_documentElement.getElementsByTagName(_TagName));
  return _aN
    ? _array.filter(n =>
      _aV
        ? n.attributes.getNamedItem(_aN).value === _aV
        : n.attributes.getNamedItem(_aN)
    )
    : _array;
};

const getKids = a =>
  makeArray(a.children[0].children)
    .map(n =>
      n.attributes.getNamedItem("name")
        ? n.attributes.getNamedItem("name").value
        : false
    )
    .filter(Boolean);

const aMap = (a = {}) =>
  Object.entries(a)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");

const tagUp = (k, v, a = {}) => `\t<${k} ${aMap(a)}>${v}</${k}>`;

let rMap = {
  covarianceMatrix: "covarianceMatrixElementsGroup"
};

const subTags = {
  userDefinedParameters: (a, b, c, d, showNull) => {
    let ud = "user_defined";
    let userkeys = Object.keys(c).filter(
      n => n.toLowerCase().indexOf(ud) > -1
    );
    let keyText = userkeys
      .map(k => {
        if (checkNull(showNull, c[k])) {
          return `\t${tagUp("USER_DEFINED", c[k], {
            parameter: k
              .toLowerCase()
              .replace(ud + "_", "")
              .toUpperCase()
          })}`;
        }
      })
      .filter(Boolean)
      .join("\n");
    return keyText;
  }
};

const genTags = (showNull, tags, a, _v) => {
  return getKids(tags[a]).map(n => {
    if (tags[n + "Type"] || tags[rMap[n]] || subTags[n]) {
      if (subTags[n]) {
        _v[n] = subTags[n](tags, tags[rMap[n]] ? rMap[n] : n + "Type", _v, showNull);
      } else {
        _v[n] = genTags(showNull, tags, tags[rMap[n]] ? rMap[n] : n + "Type", _v).join(
          "\n"
        );
      }
    }
    if (checkNull(showNull, _v[n])) {
      return `\t${tagUp(n, _v[n])}`;
    }
  });
};
let tofixed = n => {
  if (!isNaN(n) && (typeof n === "number" || n instanceof bignumber)) {
    let place = n % 1 ? 15 : 0;
    n = n.toFixed(place);
    n = place ? n.replace(/0+$/, "") : n;
  }
  return n;
};

const XMLOMM = (showNull, tags, _v) =>
  `<omm id="CCSDS_OMM_VERS" version="2.0">
    <header>
      ${genTags(showNull, tags, "ndmHeader", _v).join("\n")}
    </header>
    <body>
      <segment>
        <metadata>
          ${genTags(showNull, tags, "ommMetadata", _v).join("\n")}
        </metadata>
        <data>
          ${genTags(showNull, tags, "ommData", _v).join("\n")}
        </data>
      </segment>
    </body>
  </omm>`;
let tagTypes = {
  "xsd:complexType": [],
  "xsd:simpleType": [],
  "xsd:element": [],
  "xsd:group": []
};
export { checkNull, makeArray, getElementsByAttribute, getKids, aMap, tagUp, subTags, genTags, tofixed, tagTypes, XMLOMM };