const standaloneServerPort =3000 ;

const cleanHTMLElement = (root) => {
    return {
      childNodes: root.childNodes.map(cleanHTMLElement),
      attrs: root.attrs,
      tagName: root.tagName,
      classNames: root.classNames,
      nodeType: root.nodeType,
      innerText: root.innerText,
      constructor: root.constructor.name
    };
  };
  

const getBaseUrl = (standaloneServer) => {
  return standaloneServer ? `http://localhost:${standaloneServerPort}` : "";
};
const getImageUrl = (standaloneServer, imageSrc) => {
  const baseUrl = getBaseUrl(standaloneServer);
  return `${baseUrl}/api/builder/handle?type=asset&path=${imageSrc}`;
};
const fetchJSON = async ({ method, url, data }) => {
  const res = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: data ? JSON.stringify(data) : void 0
  });
  return await res.json();
};
function debounce(callback, timeout = 1e3) {
  let timeoutFn;
  return (...args) => {
    const context = this;
    clearTimeout(timeoutFn);
    timeoutFn = setTimeout(() => callback.apply(context, args), timeout);
  };
}
const uploadFile = async (file, standaloneServer) => {
  const formData = new FormData();
  formData.append("file-0", file);
  const baseUrl = getBaseUrl(standaloneServer);
  const res = await fetch(`${baseUrl}/api/builder/handle?type=data`, {
    method: "POST",
    body: formData
  });
  return await res.json();
};
const loadTemplate = async (standaloneServer,page) => {
  const baseUrl = getBaseUrl(standaloneServer);
  const data = await fetchJSON({
    method: "get",
    url: `${baseUrl}/api/builder/handle?type=data&path=${page}`
  });
  return data == null ? void 0 : data.content;
};

const saveTemplate = async (state, standaloneServer,page) => {
  const baseUrl = getBaseUrl(standaloneServer);
  const body = { data: JSON.parse(state.serialize())};
  await fetchJSON({
    method: "post",
    url: `${baseUrl}/api/builder/handle?type=data&path=${page}`,
    data: body
  });
};
let stateChanged = false;
const saveTemplateDebounce = debounce((e, standaloneServer,page) => {
  if (stateChanged) {
    saveTemplate(e, standaloneServer,page);
  }
  stateChanged = true;
});

const capitalize = (text) => text[0].toUpperCase() + text.substring(1, text.length);

var __defProp$4 = Object.defineProperty;
var __defProps$4 = Object.defineProperties;
var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
var __objRest$3 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

var __defProp$4 = Object.defineProperty;
var __defProps$4 = Object.defineProperties;
var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
var __objRest$3 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};


var __defProp$5 = Object.defineProperty;
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$5.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(b)) {
      if (__propIsEnum$5.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};

exports.saveTemplateDebounce=saveTemplateDebounce
exports.saveTemplate=saveTemplate
exports.loadTemplate=loadTemplate
exports.uploadFile=uploadFile
exports.fetchJSON=fetchJSON
exports.getImageUrl=getImageUrl
exports.cleanHTMLElement=cleanHTMLElement
exports.capitalize=capitalize
exports.__spreadProps$4=__spreadProps$4
exports.__spreadValues$5=__spreadValues$5
exports.__spreadValues$4=__spreadValues$4