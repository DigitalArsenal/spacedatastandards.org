export default (propertyArray = [], text) => {
  propertyArray.forEach(canonicalname => {
    let mangledname = canonicalname.replace(/_/g, "").toUpperCase();
    let mRegExp = new RegExp(mangledname, "g");
    text = text.replace(mRegExp, canonicalname);
  });

  return text;
}