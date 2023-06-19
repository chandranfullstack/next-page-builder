'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@craftjs/core');
var Tooltip = require('@radix-ui/react-tooltip');
var CheckIcon = require('@heroicons/react/24/outline/CheckIcon');
var PencilSquareIcon = require('@heroicons/react/24/outline/PencilSquareIcon');
var ArrowUturnLeftIcon = require('@heroicons/react/24/outline/ArrowUturnLeftIcon');
var ArrowUturnRightIcon = require('@heroicons/react/24/outline/ArrowUturnRightIcon');
var ChevronDownIcon = require('@heroicons/react/24/outline/ChevronDownIcon');
var SelectPrimitive = require('@radix-ui/react-select');
var cx = require('classnames');
var Squares2X2Icon = require('@heroicons/react/24/outline/Squares2X2Icon');
var ArrowSmallUpIcon = require('@heroicons/react/24/outline/ArrowSmallUpIcon');
var nodeHtmlParser = require('node-html-parser');
var ReactDOM = require('react-dom');
var DialogPrimitive = require('@radix-ui/react-dialog');
var XMarkIcon = require('@heroicons/react/24/outline/XMarkIcon');
var TrashIcon = require('@heroicons/react/24/outline/TrashIcon');
var HashtagIcon = require('@heroicons/react/24/outline/HashtagIcon');
var PhotoIcon = require('@heroicons/react/24/outline/PhotoIcon');
var LinkIcon = require('@heroicons/react/24/outline/LinkIcon');
var CircleStackIcon = require('@heroicons/react/24/outline/CircleStackIcon');
var ArrowsPointingOutIcon = require('@heroicons/react/24/outline/ArrowsPointingOutIcon');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Tooltip__namespace = /*#__PURE__*/_interopNamespace(Tooltip);
var CheckIcon__default = /*#__PURE__*/_interopDefaultLegacy(CheckIcon);
var PencilSquareIcon__default = /*#__PURE__*/_interopDefaultLegacy(PencilSquareIcon);
var ArrowUturnLeftIcon__default = /*#__PURE__*/_interopDefaultLegacy(ArrowUturnLeftIcon);
var ArrowUturnRightIcon__default = /*#__PURE__*/_interopDefaultLegacy(ArrowUturnRightIcon);
var ChevronDownIcon__default = /*#__PURE__*/_interopDefaultLegacy(ChevronDownIcon);
var SelectPrimitive__namespace = /*#__PURE__*/_interopNamespace(SelectPrimitive);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);
var Squares2X2Icon__default = /*#__PURE__*/_interopDefaultLegacy(Squares2X2Icon);
var ArrowSmallUpIcon__default = /*#__PURE__*/_interopDefaultLegacy(ArrowSmallUpIcon);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var DialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(DialogPrimitive);
var XMarkIcon__default = /*#__PURE__*/_interopDefaultLegacy(XMarkIcon);
var TrashIcon__default = /*#__PURE__*/_interopDefaultLegacy(TrashIcon);
var HashtagIcon__default = /*#__PURE__*/_interopDefaultLegacy(HashtagIcon);
var PhotoIcon__default = /*#__PURE__*/_interopDefaultLegacy(PhotoIcon);
var LinkIcon__default = /*#__PURE__*/_interopDefaultLegacy(LinkIcon);
var CircleStackIcon__default = /*#__PURE__*/_interopDefaultLegacy(CircleStackIcon);
var ArrowsPointingOutIcon__default = /*#__PURE__*/_interopDefaultLegacy(ArrowsPointingOutIcon);

const SimpleTooltip = ({ text, children, side, offset }) => /* @__PURE__ */ React__default["default"].createElement(Tooltip__namespace.Provider, null, /* @__PURE__ */ React__default["default"].createElement(Tooltip__namespace.Root, {
  delayDuration: 0
}, /* @__PURE__ */ React__default["default"].createElement(Tooltip__namespace.Trigger, {
  asChild: true
}, children), /* @__PURE__ */ React__default["default"].createElement(Tooltip__namespace.Content, {
  side,
  sideOffset: offset,
  style: { zIndex: 1e5 }
}, /* @__PURE__ */ React__default["default"].createElement("div", {
  className: "bg-gray-600 rounded text-white p-2 text-sm"
}, text))));

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
const Text = (props) => {
  var _a, _b;
  const { node, connectors, actions } = core.useNode((node2) => ({ node: node2 }));
  const { enabled } = core.useEditor((state) => ({ enabled: state.options.enabled }));
  const [text] = React.useState((_b = (_a = node.data.props[props.id]) == null ? void 0 : _a.text) != null ? _b : props.text);
  const onChange = (e) => {
    actions.setProp((prop) => {
      if (!prop[props.id])
        prop[props.id] = {};
      prop[props.id].text = e.target.innerText;
    }, 500);
  };
  const onClick = (e) => {
    if (enabled) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  return enabled ? /* @__PURE__ */ React__default["default"].createElement("span", {
    ref: (ref) => connectors.connect(ref),
    contentEditable: true,
    suppressContentEditableWarning: true,
    className: props.className,
    onClick,
    onInput: onChange
  }, text) : /* @__PURE__ */ React__default["default"].createElement("span", {
    className: props.className,
    style: __spreadValues$5({}, props)
  }, text);
};
Text.craft = {
  displayName: "Text",
  props: {
    text: ""
  },
  related: {}
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
const handleClick$1 = (props) => {
  var _a;
  if (props == null ? void 0 : props.newTab) {
    (_a = window.open(props.link, "_blank")) == null ? void 0 : _a.focus();
  } else {
    location.href = props.link;
  }
};
const Link = ({ r, d, i, propId }) => {
  var _b;
  const { node } = core.useNode((node2) => ({ node: node2 }));
  const { enabled } = core.useEditor((state) => ({ enabled: state.options.enabled }));
  const { connectors } = core.useNode((node2) => ({ node: node2 }));
  const _a = r.attrs, attrsR = __objRest$3(_a, ["class"]);
  const onClick = (e) => {
    e.preventDefault();
    if (!enabled)
      handleClick$1(node.data.props[propId]);
  };
  return /* @__PURE__ */ React__default["default"].createElement("a", __spreadProps$4(__spreadValues$4({
    ref: (ref) => connectors.connect(ref)
  }, attrsR), {
    href: (_b = node.data.props[propId]) == null ? void 0 : _b.link,
    className: r.classNames,
    onClick
  }), /* @__PURE__ */ React__default["default"].createElement(Child, {
    root: r,
    d: d.concat(i)
  }));
};
Link.craft = {
  displayName: "Link",
  props: {},
  rules: {
    canDrag: () => true
  },
  related: {}
};

var __defProp$3 = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const handleClick = (props, e) => {
  var _a;
  if ((props == null ? void 0 : props.type) === "url") {
    if (props == null ? void 0 : props.newTab) {
      (_a = window.open(props.url, "_blank")) == null ? void 0 : _a.focus();
    } else {
      location.href = props.url;
    }
  } else if ((props == null ? void 0 : props.type) === "email") {
    location.href = `mailto:${props.email}`;
  } else if ((props == null ? void 0 : props.type) === "submit") {
    const form = e.target.closest("form");
    if (!(props == null ? void 0 : props.submitAsync)) {
      form.submit();
      return;
    }
    const formData = new FormData();
    for (let e2 of form.elements) {
      if (e2.type !== "submit") {
        formData.append(e2.id, e2.type === "radio" ? e2.checked : e2.value);
      }
    }
    const options = __spreadValues$3({
      method: props.submitMethod
    }, props.submitMethod !== "GET" ? { body: formData } : {});
    fetch(props.submitUrl, options).then((e2) => e2.text().then((d) => ({ ok: e2.ok, text: d }))).then(({ ok, text }) => {
      alert(ok ? text != null ? text : "All good" : "Something went wrong");
    });
  }
};
const Button = ({ r, d, i, propId }) => {
  const { node } = core.useNode((node2) => ({ node: node2 }));
  const { enabled } = core.useEditor((state) => ({ enabled: state.options.enabled }));
  const { connectors } = core.useNode((node2) => ({ node: node2 }));
  const _a = r.attrs, attrsR = __objRest$2(_a, ["class"]);
  const onClick = (e) => {
    e.preventDefault();
    if (!enabled)
      handleClick(node.data.props[propId], e);
  };
  return /* @__PURE__ */ React__default["default"].createElement("button", __spreadProps$3(__spreadValues$3({
    ref: (ref) => connectors.connect(ref)
  }, attrsR), {
    className: r.classNames,
    onClick
  }), /* @__PURE__ */ React__default["default"].createElement(Child, {
    root: r,
    d: d.concat(i)
  }));
};
Button.craft = {
  displayName: "Button",
  props: {},
  rules: {
    canDrag: () => true
  },
  related: {}
};

var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Image = ({ d: _d, i: _i, classNames, attrs, propId }) => {
  var _a, _b;
  const { connectors } = core.useNode((node2) => ({ node: node2 }));
  const { node } = core.useNode((node2) => ({ node: node2 }));
  const url = (_b = (_a = node.data.props[propId]) == null ? void 0 : _a.url) != null ? _b : attrs.src;
  const _c = attrs, attrsR = __objRest$1(_c, ["class"]);
  return /* @__PURE__ */ React__default["default"].createElement("img", __spreadProps$2(__spreadValues$2({
    ref: (ref) => connectors.connect(ref),
    className: classNames
  }, attrsR), {
    src: url
  }));
};
Image.craft = {
  displayName: "Image",
  props: {},
  rules: {
    canDrag: () => true
  },
  related: {}
};

const Svg = ({ r, propId }) => {
  var _a;
  const { connectors, node } = core.useNode((node2) => ({ node: node2 }));
  const path = (_a = node.data.props[propId]) == null ? void 0 : _a.path;
  const nodes = r.childNodes.filter((c) => c.tagName === "PATH");
  return /* @__PURE__ */ React__default["default"].createElement("svg", {
    ref: (ref) => connectors.connect(ref),
    className: r.classNames,
    key: propId,
    fill: r.attrs["fill"],
    viewBox: r.attrs["viewbox"],
    stroke: r.attrs["stroke"],
    xmlns: r.attrs["xmlns"]
  }, nodes.filter((_, i) => i === 0 || !path).map((c, i) => /* @__PURE__ */ React__default["default"].createElement("path", {
    key: propId + i.toString(),
    d: path != null ? path : c.attrs["d"],
    fillRule: c.attrs["fill-rule"],
    clipRule: c.attrs["clip-rule"],
    strokeLinecap: c.attrs["stroke-linecap"],
    strokeLinejoin: c.attrs["stroke-linejoin"],
    strokeWidth: c.attrs["stroke-width"],
    stroke: c.attrs["stroke"],
    fill: c.attrs["fill"]
  })));
};
Svg.craft = {
  displayName: "Svg",
  props: {},
  rules: {
    canDrag: () => true
  },
  related: {}
};

var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Child = ({ root, d = [0] }) => {
  if (!root || (root == null ? void 0 : root.childNodes.length) === 0)
    return null;
  return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, Array.from(root == null ? void 0 : root.childNodes).map((r, i) => {
    var _b;
    const key = d.concat(i).join("");
    const _a = r.attrs, attrsR = __objRest(_a, ["class"]);
    if (r.nodeType === 1) {
      if (r.tagName === "DIV")
        return /* @__PURE__ */ React__default["default"].createElement("div", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "H1")
        return /* @__PURE__ */ React__default["default"].createElement("h1", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "SECTION")
        return /* @__PURE__ */ React__default["default"].createElement("section", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "H2")
        return /* @__PURE__ */ React__default["default"].createElement("h2", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "H3")
        return /* @__PURE__ */ React__default["default"].createElement("h3", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "H4")
        return /* @__PURE__ */ React__default["default"].createElement("h4", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "H5")
        return /* @__PURE__ */ React__default["default"].createElement("h5", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "H6")
        return /* @__PURE__ */ React__default["default"].createElement("h6", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "P")
        return /* @__PURE__ */ React__default["default"].createElement("p", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "A")
        return /* @__PURE__ */ React__default["default"].createElement(core.Element, {
          is: Link,
          key,
          r,
          d,
          i,
          id: key,
          propId: key
        });
      else if (r.tagName === "SPAN")
        return /* @__PURE__ */ React__default["default"].createElement("span", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "STRONG")
        return /* @__PURE__ */ React__default["default"].createElement("strong", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "HEADER")
        return /* @__PURE__ */ React__default["default"].createElement("header", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "FOOTER")
        return /* @__PURE__ */ React__default["default"].createElement("footer", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "NAV")
        return /* @__PURE__ */ React__default["default"].createElement("nav", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "ASIDE")
        return /* @__PURE__ */ React__default["default"].createElement("aside", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "DETAILS")
        return /* @__PURE__ */ React__default["default"].createElement("details", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "SUMMARY")
        return /* @__PURE__ */ React__default["default"].createElement("summary", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "BLOCKQUOTE")
        return /* @__PURE__ */ React__default["default"].createElement("blockquote", __spreadValues$1({
          className: r.classNames,
          key
        }, attrsR), /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "INPUT")
        return /* @__PURE__ */ React__default["default"].createElement("input", __spreadValues$1({
          className: r.classNames,
          key
        }, attrsR));
      else if (r.tagName === "LABEL")
        return /* @__PURE__ */ React__default["default"].createElement("label", __spreadValues$1({
          className: r.classNames,
          key
        }, attrsR), r.innerText);
      else if (r.tagName === "TEXTAREA")
        return /* @__PURE__ */ React__default["default"].createElement("textarea", __spreadValues$1({
          defaultValue: r.innerText,
          className: r.classNames,
          key
        }, attrsR));
      else if (r.tagName === "BUTTON")
        return /* @__PURE__ */ React__default["default"].createElement(core.Element, {
          is: Button,
          key,
          r,
          d,
          i,
          id: key,
          propId: key
        });
      else if (r.tagName === "FORM")
        return /* @__PURE__ */ React__default["default"].createElement("form", __spreadValues$1({
          className: r.classNames,
          key
        }, attrsR), /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "SVG")
        return /* @__PURE__ */ React__default["default"].createElement(core.Element, {
          is: Svg,
          key,
          r,
          id: key,
          propId: key
        });
      else if (r.tagName === "ADDRESS")
        return /* @__PURE__ */ React__default["default"].createElement("address", __spreadValues$1({
          className: r.classNames,
          key
        }, attrsR), /* @__PURE__ */ React__default["default"].createElement(Text, {
          text: r.innerText,
          key,
          id: key
        }));
      else if (r.tagName === "IMG") {
        return /* @__PURE__ */ React__default["default"].createElement(core.Element, {
          is: Image,
          key,
          d,
          i,
          classNames: r.classNames,
          attrs: attrsR,
          id: key,
          propId: key
        });
      } else if (r.tagName === "ARTICLE") {
        return /* @__PURE__ */ React__default["default"].createElement("article", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "DL") {
        return /* @__PURE__ */ React__default["default"].createElement("article", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "DD") {
        return /* @__PURE__ */ React__default["default"].createElement("article", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "DT") {
        return /* @__PURE__ */ React__default["default"].createElement("article", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "SCRIPT") {
        return null;
      } else if (r.tagName === "LINK") {
        return /* @__PURE__ */ React__default["default"].createElement("link", __spreadProps$1(__spreadValues$1({
          className: r.classNames
        }, attrsR), {
          key
        }));
      } else if (r.tagName === "BR") {
        return /* @__PURE__ */ React__default["default"].createElement("br", {
          className: r.classNames,
          key
        });
      } else if (r.tagName === "UL") {
        return /* @__PURE__ */ React__default["default"].createElement("ul", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "LI") {
        return /* @__PURE__ */ React__default["default"].createElement("li", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "CITE") {
        return /* @__PURE__ */ React__default["default"].createElement("cite", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "HR") {
        return /* @__PURE__ */ React__default["default"].createElement("hr", {
          className: r.classNames,
          key
        });
      } else if (r.tagName === "IFRAME") {
        return /* @__PURE__ */ React__default["default"].createElement("iframe", __spreadProps$1(__spreadValues$1({
          className: r.classNames
        }, attrsR), {
          key
        }));
      } else if (r.tagName === "STYLE") {
        return /* @__PURE__ */ React__default["default"].createElement("style", {
          key
        }, r.innerText);
      } else if (r.tagName === "TABLE") {
        return /* @__PURE__ */ React__default["default"].createElement("table", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "THEAD") {
        return /* @__PURE__ */ React__default["default"].createElement("thead", __spreadProps$1(__spreadValues$1({
          className: r.classNames
        }, attrsR), {
          key
        }), /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "TBODY") {
        return /* @__PURE__ */ React__default["default"].createElement("tbody", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "TR") {
        return /* @__PURE__ */ React__default["default"].createElement("tr", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "TD") {
        return /* @__PURE__ */ React__default["default"].createElement("td", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "TH") {
        return /* @__PURE__ */ React__default["default"].createElement("th", {
          className: r.classNames,
          key
        }, /* @__PURE__ */ React__default["default"].createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else {
        return /* @__PURE__ */ React__default["default"].createElement("p", {
          key
        }, "Unknown container");
      }
    } else if (r.nodeType === 3) {
      if (r.innerText.trim() === "")
        return null;
      if (r.constructor === "TextNode" || r.constructor === "t")
        return /* @__PURE__ */ React__default["default"].createElement(Text, {
          text: (_b = r.innerText) != null ? _b : "",
          key,
          id: key
        });
      else
        return /* @__PURE__ */ React__default["default"].createElement("p", {
          key
        }, "Unknown node");
    } else {
      return /* @__PURE__ */ React__default["default"].createElement("p", {
        key
      }, "Unknown type");
    }
  }));
};
const Component = ({ root }) => {
  const { connectors, node } = core.useNode((node2) => ({ node: node2 }));
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    id: node.data.props.id,
    ref: (ref) => connectors.connect(ref)
  }, /* @__PURE__ */ React__default["default"].createElement(Child, {
    root
  }));
};

const Container = ({ children }) => {
  const { connectors } = core.useNode();
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    ref: (ref) => connectors.connect(ref),
    style: { width: "100%", minHeight: "800px" },
    className: "bg-white"
  }, children);
};
Container.craft = {
  displayName: "Container",
  props: {},
  rules: {
    canDrag: () => true
  },
  related: {}
};

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const themes = [
  { name: "Hyper UI", folder: "hyperui", load: () => Promise.resolve().then(function () { return require('./components/index-2f393cd0.js'); }) },
  { name: "Tailblocks", folder: "tailblocks", load: () => Promise.resolve().then(function () { return require('./components/index-66e9643f.js'); }) },
  { name: "Meraki UI", folder: "meraki-light", load: () => Promise.resolve().then(function () { return require('./components/index-8fbd5618.js'); }) }
];
const getCategories = (components) => [...new Set(components == null ? void 0 : components.map((c) => c.category))];
const _resolver = {
  Container,
  Component,
  Element: core.Element,
  Text,
  Child,
  Link,
  Button,
  Image,
  Svg
};
const defaultValue = {
  components: [],
  categories: [],
  themeNames: [],
  themeIndex: 0,
  updateIndex: () => {
  },
  resolver: _resolver,
  standalone: false,
  setStandalone: () => {
  }
};
const ThemeContext = React.createContext(defaultValue);
const ThemeProvider = ({ children }) => {
  const [themeIndex, setThemeIndex] = React.useState(defaultValue.themeIndex);
  const [components, setComponents] = React.useState(defaultValue.components);
  const [categories, setCategories] = React.useState(defaultValue.categories);
  const [standalone, setStandalone] = React.useState(defaultValue.standalone);
  const [resolver, _setResolver] = React.useState(defaultValue.resolver);
  const themeNames = themes.map((t) => t.name);
  React.useEffect(() => {
    updateIndex(0);
  }, []);
  const updateIndex = async (index) => {
    setThemeIndex(index);
    const componentsObject = await themes[index].load();
    const componentsArray = Object.values(componentsObject.default);
    setComponents(componentsArray.map((c) => __spreadProps(__spreadValues({}, c), {
      themeFolder: themes[index].folder,
      blockFolder: c.displayName.replaceAll(" ", "")
    })));
    setCategories(getCategories(componentsArray));
  };
  const value = {
    components,
    categories,
    resolver,
    themeNames,
    themeIndex,
    updateIndex,
    standalone,
    setStandalone
  };
  return /* @__PURE__ */ React__default["default"].createElement(ThemeContext.Provider, {
    value
  }, children);
};

const Select = ({ defaultValue, values, open, setOpen, onChange }) => {
  return /* @__PURE__ */ React__default["default"].createElement(SelectPrimitive__namespace.Root, {
    defaultValue,
    onValueChange: onChange,
    open,
    onOpenChange: (e) => setOpen(e)
  }, /* @__PURE__ */ React__default["default"].createElement(SelectPrimitive__namespace.Content, {
    className: "z-50 top-2"
  }, /* @__PURE__ */ React__default["default"].createElement(SelectPrimitive__namespace.Viewport, {
    className: "bg-white p-2 rounded-lg shadow-lg"
  }, /* @__PURE__ */ React__default["default"].createElement(SelectPrimitive__namespace.Group, null, values.map((f, i) => /* @__PURE__ */ React__default["default"].createElement(SelectPrimitive__namespace.Item, {
    key: i,
    value: f,
    className: cx__default["default"]("relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 font-medium", "hover:opacity-70 cursor-pointer select-none")
  }, /* @__PURE__ */ React__default["default"].createElement(SelectPrimitive__namespace.ItemText, null, f), /* @__PURE__ */ React__default["default"].createElement(SelectPrimitive__namespace.ItemIndicator, {
    className: "absolute left-2 inline-flex items-center"
  }, /* @__PURE__ */ React__default["default"].createElement(CheckIcon__default["default"], null))))))));
};

const Header = () => {
  const { state, query, actions } = core.useEditor((state2, query2) => ({ state: state2, query: query2 }));
  const { updateIndex, themeNames, themeIndex } = React.useContext(ThemeContext);
  const [selectOpen, setSelectOpen] = React.useState(false);
  const enabled = state.options.enabled;
  const onChange = (name) => {
    updateIndex(themeNames.indexOf(name));
  };
  const togglePreview = () => {
    actions.setOptions((o) => o.enabled = !enabled);
  };
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "transition w-full bg-gray-300"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex px-4 py-2 justify-end"
  }, enabled && /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex-1 flex"
  }, /* @__PURE__ */ React__default["default"].createElement(SimpleTooltip, {
    text: "Undo",
    side: "bottom",
    offset: 4
  }, /* @__PURE__ */ React__default["default"].createElement("a", {
    className: ` ${query.history.canUndo() ? "hover:opacity-50 cursor-pointer" : "opacity-50 cursor-not-allowed"} p-2`,
    onClick: actions.history.undo
  }, /* @__PURE__ */ React__default["default"].createElement(ArrowUturnLeftIcon__default["default"], {
    className: "h-4 w-4"
  }))), /* @__PURE__ */ React__default["default"].createElement(SimpleTooltip, {
    text: "Redo",
    side: "bottom",
    offset: 4
  }, /* @__PURE__ */ React__default["default"].createElement("a", {
    className: ` ${query.history.canRedo() ? "hover:opacity-50 cursor-pointer" : "opacity-50 cursor-not-allowed"} p-2`,
    onClick: actions.history.redo
  }, /* @__PURE__ */ React__default["default"].createElement(ArrowUturnRightIcon__default["default"], {
    className: "h-4 w-4"
  }))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mr-auto ml-auto"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex rounded py-2 px-4 transition cursor-pointer items-center justify-center mr-auto ml-auto",
    onClick: () => setSelectOpen(true)
  }, themeNames[themeIndex], /* @__PURE__ */ React__default["default"].createElement(ChevronDownIcon__default["default"], {
    className: "h-4 w-4 ml-2"
  })), /* @__PURE__ */ React__default["default"].createElement(Select, {
    defaultValue: themeNames[themeIndex],
    values: themeNames,
    open: selectOpen,
    setOpen: setSelectOpen,
    onChange
  }))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex"
  }, enabled ? /* @__PURE__ */ React__default["default"].createElement("a", {
    className: "flex bg-green-600 text-white rounded py-2 px-4 transition cursor-pointer items-center",
    onClick: togglePreview
  }, /* @__PURE__ */ React__default["default"].createElement(CheckIcon__default["default"], {
    className: "h-4 w-4 mr-2"
  }), " Preview") : /* @__PURE__ */ React__default["default"].createElement("a", {
    className: "flex bg-primary text-white rounded py-2 px-4 transition cursor-pointer items-center",
    onClick: togglePreview
  }, /* @__PURE__ */ React__default["default"].createElement(PencilSquareIcon__default["default"], {
    className: "h-4 w-4 mr-2"
  }), " Edit"))));
};

const SidebarItem = ({ visible, title, children, onChange }) => {
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex flex-col w-full"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    onClick: () => {
      if (onChange)
        onChange(!visible);
    },
    className: `h-12 cursor-pointer bg-white border-b last:border-b-0 flex items-center px-2 ${visible ? "shadow-sm" : ""}`
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex-1 flex items-center"
  }, /* @__PURE__ */ React__default["default"].createElement(Squares2X2Icon__default["default"], {
    className: "h-4 w-4 ml-2 mr-4"
  }), " ", /* @__PURE__ */ React__default["default"].createElement("h2", {
    className: "text-xs uppercase"
  }, title)), /* @__PURE__ */ React__default["default"].createElement("a", {
    style: { transform: `rotate(${visible ? 180 : 0}deg)` }
  }, /* @__PURE__ */ React__default["default"].createElement(ArrowSmallUpIcon__default["default"], {
    className: "h-4 w-4"
  }))), visible ? /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "w-full flex-1 overflow-auto"
  }, children) : null);
};

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

const standaloneServerPort =3000 ;

const getBaseUrl = (standaloneServer) => {
  return standaloneServer ? `http://localhost:${standaloneServerPort}` : "";
};
const getImageUrl = (standaloneServer, imageSrc) => {
  const baseUrl = getBaseUrl(standaloneServer);
  return `${baseUrl}/api/builder/handle?type=asset&path=${imageSrc}`;
};
const fetchJSON = async ({ method, url, data }) => {
  console.log(method,url,data,"fetch failed")
  const res = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: data ? JSON.stringify(data) : void 0
  });
  console.log(method,url,data,"method url data")
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
const loadTemplate = async (standaloneServer) => {
  const baseUrl = getBaseUrl(standaloneServer);
  const data = await fetchJSON({
    method: "get",
    url: `${baseUrl}/api/builder/handle?type=data&path=${location.pathname}`
  });
  console.log(baseUrl,standaloneServer,"base url",location.pathname)
  return data == null ? void 0 : data.content;
};
const saveTemplate = async (state, standaloneServer) => {
  const baseUrl = getBaseUrl(standaloneServer);
  const body = { data: JSON.parse(state.serialize()) };
  await fetchJSON({
    method: "post",
    url: `${baseUrl}/api/builder/handle?type=data&path=${location.pathname}`,
    data: body
  });
};
let stateChanged = false;
const saveTemplateDebounce = debounce((e, standaloneServer) => {
  if (stateChanged) {
    saveTemplate(e, standaloneServer);
  }
  stateChanged = true;
});

const Category = SidebarItem;
const Item = ({ connectors, c }) => {
  const { standalone } = React.useContext(ThemeContext);
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    ref: (ref) => connectors.create(ref, /* @__PURE__ */ React__default["default"].createElement(Component, {
      root: cleanHTMLElement(nodeHtmlParser.parse(c.source))
    }))
  }, /* @__PURE__ */ React__default["default"].createElement(SimpleTooltip, {
    text: c.displayName,
    side: "right",
    offset: 12
  }, /* @__PURE__ */ React__default["default"].createElement("a", {
    className: "cursor-move m-2 pb-2 cursor-pointer block"
  }, /* @__PURE__ */ React__default["default"].createElement("img", {
    src: getImageUrl(standalone, `/src/themes/${c.themeFolder}/${c.blockFolder}/preview.png`),
    width: "600px",
    height: "300px"
  }))));
};
const Sidebar = () => {
  const { components, categories } = React.useContext(ThemeContext);
  const { enabled, connectors } = core.useEditor(({ options }) => ({ enabled: options.enabled }));
  const [toolbarVisible, setToolbarVisible] = React.useState([]);
  React.useEffect(() => {
    const v = Array.from({ length: categories.length }, (_, i) => i === 0);
    setToolbarVisible(v);
  }, [categories]);
  const toggleToolbar = (index) => {
    setToolbarVisible((t) => t.map((c, i) => i === index ? !c : c));
  };
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    className: `toolbox h-full flex flex-col bg-white ${enabled ? "w-48" : "w-0 opacity-0"}`,
    style: { transition: "0.4s cubic-bezier(0.19, 1, 0.22, 1)" }
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex flex-1 flex-col items-center pt-3 overflow-scroll hide-scrollbars"
  }, categories.map((b, j) => /* @__PURE__ */ React__default["default"].createElement(Category, {
    key: j,
    title: b,
    visible: toolbarVisible[j],
    onChange: () => toggleToolbar(j)
  }, components == null ? void 0 : components.filter((c) => c.category === b).map((c, i) => /* @__PURE__ */ React__default["default"].createElement(Item, {
    connectors,
    c,
    key: i
  }))))));
};

const Viewport = ({ children }) => {
  const { connectors, actions } = core.useEditor((state) => ({ enabled: state.options.enabled }));
  React.useEffect(() => {
    setTimeout(() => {
      actions.setOptions((o) => o.enabled = true);
    }, 200);
  }, [actions.setOptions]);
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "viewport"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex h-full overflow-hidden flex-row w-full fixed"
  }, /* @__PURE__ */ React__default["default"].createElement(Sidebar, null), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "page-container flex flex-1 h-full flex-col"
  }, /* @__PURE__ */ React__default["default"].createElement(Header, null), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "craftjs-renderer flex-1 h-full w-full transition pb-8 overflow-auto",
    ref: (ref) => connectors.select(connectors.hover(ref, ""), "")
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "relative flex-col flex items-center pt-8 justify-center",
    style: { maxWidth: "800px", margin: "auto" }
  }, children), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex items-center justify-center w-full pt-6 text-xs text-gray-400"
  }, "Powered by", " ", /* @__PURE__ */ React__default["default"].createElement("a", {
    className: "mx-1",
    target: "_blank",
    href: "https://craft.js.org/"
  }, "Craft.js"), " ", "and", " ", /* @__PURE__ */ React__default["default"].createElement("a", {
    className: "mx-1",
    target: "_blank",
    href: "https://tailwindui.com/"
  }, "Tailwind CSS"))))));
};

const Dialog$4 = ({ open, setOpen, node, actions }) => {
  var _a, _b, _c, _d;
  const props = node.data.props;
  const key = props.propId;
  const [link, setLink] = React.useState((_c = (_a = node.data.props[key]) == null ? void 0 : _a.link) != null ? _c : (_b = node.dom) == null ? void 0 : _b.href);
  const [newTab, setNewTab] = React.useState((_d = node.data.props[key]) == null ? void 0 : _d.newTab);
  return /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Root, {
    open,
    onOpenChange: setOpen
  }, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Portal, null, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Overlay, null, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Content, {
    className: cx__default["default"]("fixed shadow bg-white rounded-lg p-4", "w-[95vw] max-w-md md:w-full", "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")
  }, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Title, {
    className: "text-sm font-medium text-gray-900 dark:text-gray-100"
  }, "Update Link"), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-8 mb-4"
  }, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex justify-center mb-4 flex-col"
  }, /* @__PURE__ */ React__default["default"].createElement("input", {
    type: "text",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4",
    placeholder: "Eg. https://github.com/LiveDuo/destack",
    defaultValue: link,
    onChange: (e) => setLink(e.target.value)
  }), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex items-center ml-4"
  }, /* @__PURE__ */ React__default["default"].createElement("p", null, "Open in new tab"), /* @__PURE__ */ React__default["default"].createElement("input", {
    defaultChecked: newTab,
    type: "checkbox",
    onChange: (e) => setNewTab(e.target.checked),
    className: "ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
  })))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-4 flex justify-end"
  }, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Close, {
    onClick: () => {
      setOpen(false);
      actions.setProp(node.id, (prop) => {
        if (!prop[key])
          prop[key] = {};
        prop[key].link = link;
        prop[key].newTab = newTab;
      });
    },
    className: cx__default["default"]("inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium", "bg-blue-600 text-white hover:bg-blue-700 border border-transparent")
  }, "Save")), /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Close, {
    onClick: () => setOpen(false),
    className: cx__default["default"]("absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1")
  }, /* @__PURE__ */ React__default["default"].createElement(XMarkIcon__default["default"], {
    className: "h-4 w-4 text-gray-500 hover:text-gray-700"
  }))))));
};

const Content = ({ url, text, setText, onUpload, onChange }) => {
  const input = React.useRef(null);
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-4 mb-4"
  }, !url ? /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex justify-center mt-8 mb-4"
  }, /* @__PURE__ */ React__default["default"].createElement("input", {
    ref: input,
    type: "file",
    onChange: onUpload,
    style: { display: "none" }
  }), /* @__PURE__ */ React__default["default"].createElement("button", {
    className: "rounded-md px-4 py-2 text-sm font-medium bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-700 hover:text-white border border-transparent",
    onClick: () => {
      var _a;
      (_a = input.current) == null ? void 0 : _a.click();
    }
  }, "Upload")), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex justify-center mb-4"
  }, "OR"), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex justify-center mb-4"
  }, /* @__PURE__ */ React__default["default"].createElement("input", {
    type: "text",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",
    placeholder: "Eg. https://www.w3schools.com/html/pic_trulli.jpg",
    onChange: (e) => setText(e.target.value)
  }), /* @__PURE__ */ React__default["default"].createElement("button", {
    onClick: () => onChange(),
    className: cx__default["default"]("rounded-md px-4 py-2 text-sm font-medium bg-transparent border", "text-blue-500 hover:opacity-50 border border-transparent", `${text !== "" ? "hover:opacity-50" : "opacity-50 cursor-not-allowed"}`),
    disabled: text === ""
  }, "Set"))) : /* @__PURE__ */ React__default["default"].createElement("img", {
    src: url
  }));
};
const Dialog$3 = ({ open, setOpen, node, actions }) => {
  var _a, _b, _c;
  const props = node.data.props;
  const propId = props.propId;
  const [url, setUrl] = React.useState((_c = (_a = props[propId]) == null ? void 0 : _a.url) != null ? _c : (_b = node.dom) == null ? void 0 : _b.src);
  const [text, setText] = React.useState("");
  const onUpload = async (e) => {
    const file = e == null ? void 0 : e.target.files[0];
    const response = await uploadFile(file, false);
    setUrl(response[0]);
  };
  const onChange = async () => {
    setUrl(text);
  };
  return /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Root, {
    open,
    onOpenChange: setOpen
  }, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Portal, null, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Overlay, null, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Content, {
    className: cx__default["default"]("fixed shadow bg-white rounded-lg p-4", "w-[95vw] max-w-md md:w-full", "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")
  }, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Title, {
    className: "text-sm font-medium text-gray-900 dark:text-gray-100"
  }, "Upload Image"), /* @__PURE__ */ React__default["default"].createElement(Content, {
    url,
    text,
    setText,
    onUpload,
    onChange
  }), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-4 flex justify-end"
  }, /* @__PURE__ */ React__default["default"].createElement("button", {
    style: { marginRight: "auto" },
    className: cx__default["default"]("rounded-md px-4 py-2 text-sm font-medium bg-transparent border", "text-blue-500 hover:opacity-50 border border-transparent"),
    onClick: () => {
      setUrl(null);
      setText("");
    }
  }, "Replace"), /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Close, {
    onClick: () => {
      setOpen(false);
      actions.setProp(node.id, (prop) => {
        if (!prop[propId])
          prop[propId] = {};
        prop[propId].url = url;
      });
    },
    className: cx__default["default"]("inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium", `bg-blue-600 text-white border border-transparent ${url ? "hover:bg-blue-700" : "opacity-50 cursor-not-allowed"}`),
    disabled: !url
  }, "Save")), /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Close, {
    onClick: () => setOpen(false),
    className: cx__default["default"]("absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1")
  }, /* @__PURE__ */ React__default["default"].createElement(XMarkIcon__default["default"], {
    className: "h-4 w-4 text-gray-500 hover:text-gray-700"
  }))))));
};

const capitalize = (text) => text[0].toUpperCase() + text.substring(1, text.length);

const options = ["url", "email", "submit"];
const methods = ["GET", "POST"];
const Dialog$2 = ({ open, setOpen, node, actions }) => {
  var _a, _b;
  const [openSelect, setOpenSelect] = React.useState(false);
  const props = node.data.props;
  const key = props.propId;
  const [url, setUrl] = React.useState(props.url);
  const [email, setEmail] = React.useState(props.email);
  const [submitUrl, setSubmitUrl] = React.useState(props.submitUrl);
  const [submitMethod, setSubmitMethod] = React.useState((_a = props.submitMethod) != null ? _a : "GET");
  const [submitAsync, setSubmitAsync] = React.useState(props.submitAsync);
  const [methodSelect, setMethodSelect] = React.useState(props.methodSelect);
  const [newTab, setNewTab] = React.useState(props.newTab);
  const [type, setType] = React.useState((_b = props.type) != null ? _b : "url");
  const onChange = (e) => {
    setType(e.toLowerCase());
  };
  return /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Root, {
    open,
    onOpenChange: setOpen
  }, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Portal, null, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Overlay, null, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Content, {
    className: cx__default["default"]("fixed shadow bg-white rounded-lg p-4", "w-[95vw] max-w-md md:w-full", "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")
  }, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Title, {
    className: "text-sm font-medium text-gray-900 dark:text-gray-100"
  }, "Update Button"), /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Description, {
    className: "mt-2 text-sm font-normal text-gray-700 dark:text-gray-400"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-4 mb-4"
  }, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex rounded py-2 px-4 transition cursor-pointer items-center ml-2 mb-4",
    onClick: () => setOpenSelect(true)
  }, capitalize(type), " ", /* @__PURE__ */ React__default["default"].createElement(ChevronDownIcon__default["default"], {
    className: "h-4 w-4 ml-2"
  })), /* @__PURE__ */ React__default["default"].createElement(Select, {
    defaultValue: type,
    values: options.map((o) => capitalize(o)),
    open: openSelect,
    setOpen: setOpenSelect,
    onChange
  }), /* @__PURE__ */ React__default["default"].createElement("div", null, type === "url" && /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex justify-center mb-4 flex-col"
  }, /* @__PURE__ */ React__default["default"].createElement("input", {
    type: "text",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4",
    placeholder: "Eg. https://github.com/LiveDuo/destack",
    defaultValue: url,
    onChange: (e) => setUrl(e.target.value)
  }), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex items-center ml-4"
  }, /* @__PURE__ */ React__default["default"].createElement("p", null, "Open in new tab"), /* @__PURE__ */ React__default["default"].createElement("input", {
    defaultChecked: newTab,
    type: "checkbox",
    onChange: (e) => setNewTab(e.target.checked),
    className: "ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
  }))), type === "email" && /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex justify-center mb-4"
  }, /* @__PURE__ */ React__default["default"].createElement("input", {
    type: "text",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",
    placeholder: "Eg. matt@mullenweg.com",
    defaultValue: email,
    onChange: (e) => setEmail(e.target.value)
  })), type === "submit" && /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex justify-center mb-4 flex-col"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex justify-end mb-4"
  }, /* @__PURE__ */ React__default["default"].createElement("input", {
    type: "text",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",
    placeholder: "Eg. /api/submit",
    defaultValue: submitUrl,
    onChange: (e) => setSubmitUrl(e.target.value)
  }), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex rounded py-2 px-4 transition cursor-pointer items-center ml-2",
    onClick: () => setMethodSelect(true)
  }, submitMethod, " ", /* @__PURE__ */ React__default["default"].createElement(ChevronDownIcon__default["default"], {
    className: "h-4 w-4 ml-2"
  })), /* @__PURE__ */ React__default["default"].createElement(Select, {
    defaultValue: submitMethod,
    values: methods,
    open: methodSelect,
    setOpen: setMethodSelect,
    onChange: (e) => setSubmitMethod(e)
  })), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex items-center ml-4"
  }, /* @__PURE__ */ React__default["default"].createElement("p", null, "Async"), /* @__PURE__ */ React__default["default"].createElement("input", {
    defaultChecked: submitAsync,
    type: "checkbox",
    onChange: (e) => setSubmitAsync(e.target.checked),
    className: "ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
  }))))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-4 flex justify-end"
  }, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Close, {
    onClick: () => {
      setOpen(false);
      actions.setProp(node.id, (prop) => {
        if (!prop[key])
          prop[key] = {};
        prop[key].type = type.toLowerCase();
        prop[key].url = url;
        prop[key].email = email;
        prop[key].newTab = newTab;
        prop[key].submitUrl = submitUrl;
        prop[key].submitMethod = submitMethod;
        prop[key].submitAsync = submitAsync;
      });
    },
    className: cx__default["default"]("inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium", "bg-blue-600 text-white hover:bg-blue-700 border border-transparent")
  }, "Save")), /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Close, {
    onClick: () => setOpen(false),
    className: cx__default["default"]("absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1")
  }, /* @__PURE__ */ React__default["default"].createElement(XMarkIcon__default["default"], {
    className: "h-4 w-4 text-gray-500 hover:text-gray-700"
  }))))));
};

const Dialog$1 = ({ open, setOpen, node, actions }) => {
  const [id, setId] = React.useState(node.data.props.id);
  return /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Root, {
    open,
    onOpenChange: setOpen
  }, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Portal, null, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Overlay, null, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Content, {
    className: cx__default["default"]("fixed shadow bg-white rounded-lg p-4", "w-[95vw] max-w-md md:w-full", "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")
  }, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Title, {
    className: "text-sm font-medium text-gray-900 dark:text-gray-100"
  }, "Update Section Id"), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-8 mb-4"
  }, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex justify-center mb-4 flex-col"
  }, /* @__PURE__ */ React__default["default"].createElement("input", {
    type: "text",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4",
    placeholder: "Eg. section-1",
    defaultValue: id,
    onChange: (e) => setId(e.target.value)
  }))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-4 flex justify-end"
  }, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Close, {
    onClick: () => {
      setOpen(false);
      actions.setProp(node.id, (prop) => {
        prop.id = id;
      });
    },
    className: cx__default["default"]("inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium", "bg-blue-600 text-white hover:bg-blue-700 border border-transparent")
  }, "Save")), /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Close, {
    onClick: () => setOpen(false),
    className: cx__default["default"]("absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1")
  }, /* @__PURE__ */ React__default["default"].createElement(XMarkIcon__default["default"], {
    className: "h-4 w-4 text-gray-500 hover:text-gray-700"
  }))))));
};

const Dialog = ({ open, setOpen, node, actions }) => {
  var _a;
  const props = node.data.props;
  const key = props.propId;
  const [path, setPath] = React.useState((_a = node.data.props[key]) == null ? void 0 : _a.path);
  return /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Root, {
    open,
    onOpenChange: setOpen
  }, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Portal, null, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Overlay, null, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Content, {
    className: cx__default["default"]("fixed shadow bg-white rounded-lg p-4", "w-[95vw] max-w-md md:w-full", "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")
  }, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Title, {
    className: "text-sm font-medium text-gray-900 dark:text-gray-100"
  }, "Update SVG Path"), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-8 mb-4"
  }, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex justify-center mb-4 flex-col"
  }, /* @__PURE__ */ React__default["default"].createElement("input", {
    type: "text",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4",
    placeholder: "Eg. d = 'M150 0 L75 200 L225 200 Z'",
    defaultValue: path,
    onChange: (e) => setPath(e.target.value)
  }))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-4 flex justify-end"
  }, /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Close, {
    onClick: () => {
      setOpen(false);
      actions.setProp(node.id, (prop) => {
        if (!prop[key])
          prop[key] = {};
        prop[key].path = path;
      });
    },
    className: cx__default["default"]("inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium", "bg-blue-600 text-white hover:bg-blue-700 border border-transparent")
  }, "Save")), /* @__PURE__ */ React__default["default"].createElement(DialogPrimitive__namespace.Close, {
    onClick: () => setOpen(false),
    className: cx__default["default"]("absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1")
  }, /* @__PURE__ */ React__default["default"].createElement(XMarkIcon__default["default"], {
    className: "h-4 w-4 text-gray-500 hover:text-gray-700"
  }))))));
};

const EditorElement = ({ render }) => {
  var _a;
  const { id } = core.useNode();
  const { actions, isActive } = core.useEditor((_, query) => ({
    isActive: query.getEvent("selected").contains(id)
  }));
  const { connectors, node } = core.useNode((node2) => ({ node: node2 }));
  const data = node.data;
  const dom = node.dom;
  const displayName = ((_a = data.custom) == null ? void 0 : _a.displayName) || data.displayName;
  const isRootChild = data.parent === "ROOT";
  const showFocus = id !== "ROOT" && displayName !== "App";
  const currentRef = React.useRef();
  console.log(data,"data",dom,"dom",displayName,"displayname",isRootChild,"isRootChild",showFocus,"ShowFocus",currentRef,"currentRef")
  React.useEffect(() => {
    if (dom) {
      if (isActive || node.events.hovered)
        dom.classList.add("component-selected");
      else
        dom.classList.remove("component-selected");
    }
  }, [dom, isActive, node.events.hovered]);
  const getPos = React.useCallback((dom2) => {
    const { top, left, bottom } = dom2 ? dom2.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 };
    return { top: `${top > 0 ? top : bottom}px`, left: `${left}px` };
  }, []);
  const scroll = React.useCallback(() => {
    if (!currentRef.current)
      return;
    const { top, left } = getPos(dom);
    currentRef.current.style.top = top;
    currentRef.current.style.left = left;
  }, [dom, getPos]);
  React.useEffect(() => {
    const el = document.querySelector(".craftjs-renderer");
    el == null ? void 0 : el.addEventListener("scroll", scroll);
    return () => {
      el == null ? void 0 : el.removeEventListener("scroll", scroll);
    };
  }, [scroll]);
  const [openLink, setOpenLink] = React.useState(false);
  const [openImage, setOpenImage] = React.useState(false);
  const [openButton, setOpenButton] = React.useState(false);
  const [openHash, setOpenHash] = React.useState(false);
  const [openSvg, setOpenSvg] = React.useState(false);
  return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, node.events.hovered || isActive ? ReactDOM__default["default"].createPortal(/* @__PURE__ */ React__default["default"].createElement("div", {
    ref: {currentRef},
    className: "px-2 py-2 text-white bg-primary fixed flex items-center leading-3 text-xs",
    style: {
      height: "30px",
      marginTop: "-29px",
      left: getPos(dom).left,
      top: getPos(dom).top,
      zIndex: 9999
    }
  }, /* @__PURE__ */ React__default["default"].createElement("h2", {
    className: "flex-1 mr-4"
  }, displayName), isRootChild && /* @__PURE__ */ React__default["default"].createElement("a", {
    className: "mr-2 cursor-move",
    ref: () => connectors.drag
  }, /* @__PURE__ */ React__default["default"].createElement(ArrowsPointingOutIcon__default["default"], {
    className: "h-4 w-4"
  })), isRootChild && /* @__PURE__ */ React__default["default"].createElement("a", {
    className: "mr-2 cursor-pointer",
    onMouseDown: (e) => {
      e.stopPropagation();
      setOpenHash(true);
    }
  }, /* @__PURE__ */ React__default["default"].createElement(HashtagIcon__default["default"], {
    className: "h-4 w-4"
  })), showFocus && /* @__PURE__ */ React__default["default"].createElement("a", {
    className: "mr-2 cursor-pointer",
    onClick: () => {
      actions.selectNode(data.parent);
    }
  }, /* @__PURE__ */ React__default["default"].createElement(ArrowSmallUpIcon__default["default"], {
    className: "h-4 w-4"
  })), (dom == null ? void 0 : dom.nodeName) === "IMG" && /* @__PURE__ */ React__default["default"].createElement("a", {
    className: "cursor-pointer",
    onMouseDown: (e) => {
      e.stopPropagation();
      setOpenImage(true);
    }
  }, /* @__PURE__ */ React__default["default"].createElement(PhotoIcon__default["default"], {
    className: "h-4 w-4"
  })), (dom == null ? void 0 : dom.nodeName) === "svg" && /* @__PURE__ */ React__default["default"].createElement("a", {
    className: "cursor-pointer",
    onMouseDown: (e) => {
      e.stopPropagation();
      setOpenSvg(true);
    }
  }, /* @__PURE__ */ React__default["default"].createElement(PhotoIcon__default["default"], {
    className: "h-4 w-4"
  })), (dom == null ? void 0 : dom.nodeName) === "A" && /* @__PURE__ */ React__default["default"].createElement("a", {
    className: "cursor-pointer",
    onMouseDown: (e) => {
      e.stopPropagation();
      setOpenLink(true);
    }
  }, /* @__PURE__ */ React__default["default"].createElement(LinkIcon__default["default"], {
    className: "h-4 w-4"
  })), (dom == null ? void 0 : dom.nodeName) === "BUTTON" && /* @__PURE__ */ React__default["default"].createElement("a", {
    className: "cursor-pointer",
    onMouseDown: (e) => {
      e.stopPropagation();
      setOpenButton(true);
    }
  }, /* @__PURE__ */ React__default["default"].createElement(CircleStackIcon__default["default"], {
    className: "h-4 w-4"
  })), isRootChild && /* @__PURE__ */ React__default["default"].createElement("a", {
    className: "cursor-pointer",
    onMouseDown: (e) => {
      e.stopPropagation();
      actions.delete(id);
    }
  }, /* @__PURE__ */ React__default["default"].createElement(TrashIcon__default["default"], {
    className: "h-4 w-4"
  })), /* @__PURE__ */ React__default["default"].createElement(Dialog$4, {
    open: openLink,
    setOpen: setOpenLink,
    node,
    actions
  }), /* @__PURE__ */ React__default["default"].createElement(Dialog$3, {
    open: openImage,
    setOpen: setOpenImage,
    node,
    actions
  }), /* @__PURE__ */ React__default["default"].createElement(Dialog$1, {
    open: openHash,
    setOpen: setOpenHash,
    node,
    actions
  }), /* @__PURE__ */ React__default["default"].createElement(Dialog, {
    open: openSvg,
    setOpen: setOpenSvg,
    node,
    actions
  }), /* @__PURE__ */ React__default["default"].createElement(Dialog$2, {
    open: openButton,
    setOpen: setOpenButton,
    node,
    actions
  })), document.querySelector(".page-container")) : null, render);
};

const FrameEditor = ({ data, standaloneServer }) => {
  const { actions } = core.useEditor();
  const loadData = async () => {
    if (data) {
      const templateData = data.find(( name ) =>name.name === "\\solutions" || name.name === "\\default" );
      if(templateData.content!==''){
      const content = JSON.parse(templateData.content);
      actions.deserialize(content);
    }else{
      const result = await loadTemplate(standaloneServer);
      const content = JSON.parse(result);
      actions.deserialize(content);
    }
    } else {
      const result = await loadTemplate(standaloneServer);
      const content = JSON.parse(result);
      actions.deserialize(content);
    }
  };
  React.useEffect(() => {
    loadData();
  }, []);
  return !data ? /* @__PURE__ */ React__default["default"].createElement(Viewport, null, /* @__PURE__ */ React__default["default"].createElement(core.Frame, null, /* @__PURE__ */ React__default["default"].createElement(core.Element, {
    canvas: true,
    is: Container,
    children: [],
    custom: { displayName: "App" }
  }))) : /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "page-container"
  }, /* @__PURE__ */ React__default["default"].createElement(core.Frame, null));
};
const FrameEditor1 = ({ data, standaloneServer }) => {
  const { actions } = core.useEditor();
  const loadData = async () => {
    if (data) {
      const templateData = data.find(( name ) =>name.name === "\\solutions" || name.name === "\\default" );
      if(templateData.content!==''){
      const content = JSON.parse(templateData.content);
      actions.deserialize(content);
    }else{
      const result = await loadTemplate(standaloneServer);
      const content = JSON.parse(result);
      actions.deserialize(content);
    }
    } else {
      const result = await loadTemplate(standaloneServer);
      const content = JSON.parse(result);
      actions.deserialize(content);
    }
  };
  React.useEffect(() => {
    loadData();
  }, []);
  return  /* @__PURE__ */ React__default["default"].createElement(Viewport, null, /* @__PURE__ */ React__default["default"].createElement(core.Frame, null, /* @__PURE__ */ React__default["default"].createElement(core.Element, {
    canvas: true,
    is: Container,
    children: [],
    custom: { displayName: "App" },
    className: "page-container"
  })))
};

const Editor = ({ data, standaloneServer }) => {
  const { resolver, setStandalone } = React.useContext(ThemeContext);
  React.useEffect(() => setStandalone(standaloneServer), []);
  const onStateChange = (e) => {
    saveTemplateDebounce(e, standaloneServer);
  };
  return /* @__PURE__ */ React__default["default"].createElement(core.Editor, {
    resolver,
    enabled: !data,
    onRender: EditorElement,
    onNodesChange: onStateChange
  }, /* @__PURE__ */ React__default["default"].createElement(FrameEditor, {
    data,
    standaloneServer
  }));
};

const Editor1 = ({ data, standaloneServer }) => {
  const { resolver, setStandalone } = React.useContext(ThemeContext);
  React.useEffect(() => setStandalone(standaloneServer), []);
  const onStateChange = (e) => {
    saveTemplateDebounce(e, standaloneServer);
  };
  return /* @__PURE__ */ React__default["default"].createElement(core.Editor, {
    resolver,
    enabled: data,
    onRender: EditorElement,
    onNodesChange: onStateChange
  }, /* @__PURE__ */ React__default["default"].createElement(FrameEditor1, {
    data,
    standaloneServer
  }));
};


const ContentProviderBase = ({ data, standaloneServer }) => {
  return /* @__PURE__ */ React__default["default"].createElement(ThemeProvider, null, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "h-full h-screen"
  }, /* @__PURE__ */ React__default["default"].createElement(Editor, {
    data,
    standaloneServer
  })));
};
const ContentProviderBase1 = ({ data, standaloneServer }) => {
  return /* @__PURE__ */ React__default["default"].createElement(ThemeProvider, null, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "h-full h-screen"
  }, /* @__PURE__ */ React__default["default"].createElement(Editor1, {
    data,
    standaloneServer
  })));
};
const ContentProvider1 = ({ data }) => /* @__PURE__ */ React__default["default"].createElement(ContentProviderBase1, {
  data,
  standaloneServer: true,
});
const ContentProvider = ({ data }) => /* @__PURE__ */ React__default["default"].createElement(ContentProviderBase, {
  data,
  standaloneServer: true,
});
const ContentProviderReact = () => /* @__PURE__ */ React__default["default"].createElement(ContentProviderBase, {
  data: null,
  standaloneServer: true
});

exports.ContentProvider = ContentProvider;
exports.ContentProviderReact = ContentProviderReact;
exports.ContentProvider1=ContentProvider1
