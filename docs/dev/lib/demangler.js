export default (propertyArray = [], text) => {
  let mangledNames = [];
  for (let i = 0; i < propertyArray.length; i++) {
    mangledNames.push(propertyArray[i].replace(/_/g, "").toUpperCase());
  }
  for (let i = 0; i < mangledNames.length; i++) {
    let mRegExp = new RegExp(mangledNames[i], "g");
    for (let ii = i + 1; ii < mangledNames.length; ii++) {
      mangledNames[ii] = mangledNames[ii].replace(mRegExp, propertyArray[i]);
    }
  }
  propertyArray.forEach((canonicalname, i) => {
    let mRegExp = new RegExp(mangledNames[i], "g");
    text = text.replace(mRegExp, canonicalname);
    for (let ii = i + 1; ii < propertyArray.length; ii++) {
      propertyArray[ii] = propertyArray[ii].replace(mRegExp, canonicalname);
    }
  });

  return text;
};
