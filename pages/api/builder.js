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
var Plus =require("@heroicons/react/24/solid/PlusCircleIcon.js")
var CloseIcon=require("@heroicons/react/24/solid/XCircleIcon.js")
var ListIcon=require("@heroicons/react/24/outline/ListBulletIcon.js")
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
import { chakra } from '@chakra-ui/react';
import AppBox from "../../client-components/AppBox/AppBox"
import AppFlex from '../../client-components/AppFlex/AppFlex';
import AppLink from "../../client-components/AppLink/AppLink"
import AppGrid from '../../client-components/AppGrid/AppGrid';
import AppContainer from "../../client-components/AppContainer/AppContainer"
import AppText from "../../client-components/AppText/AppText"
import AppAvatar from '../../client-components/AppAvatar/AppAvatar';
import AppBadge from '../../client-components/AppBadge/AppBadge';
import AppButton from '../../client-components/AppButton/AppButton';
import AppCard from '../../client-components/AppCard/AppCard';
import AppCarousel from '../../client-components/AppCarousel/AppCarousel';
import AppDivider from '../../client-components/AppDivider/AppDivider';
import AppDrawer from '../../client-components/AppDrawer';
import AppFooter from '../../client-components/AppFooter/AppFooter';
import AppGridItem from '../../client-components/AppGrid/AppGridItem';
import AppList from '../../client-components/AppList/AppList';4
import AppUnOrList from "../../client-components/AppList/AppUnOrList"
import AppListItem from '../../client-components/AppListItem/AppListItem';
import AppSearch from '../../client-components/AppSearch/AppSearch';
import AppProgress from '../../client-components/AppProgress/AppProgress';
import AppImage from '../../client-components/AppImage/AppImage';
import RedirectStripe from '../../page-components/RedirectStripe';
import AppIcon from '../../client-components/AppIcons/AppIcon';
import AppNav from '../../client-components/AppNav/AppNav';
import DevelopCard from '../../home-components/DevelopCard';
import DigitalTranformation from "../../home-components/DigitalTranformation"
import Hero from "../../home-components/Hero"
import Organistions from "../../home-components/Organisations"
import Technologies from "../../home-components/Technologies"
import Testimonial from "../../home-components/Testimonial"
import MeasureCritical from '../../home-components/MesaureCritical';
import HeroSection from '../../page-components/HeroSection';
import Nav from '../../client-components/AppNav/AppNav';


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
var PlusOutIcon__default = /*#__PURE__*/_interopDefaultLegacy(Plus);
var CloseIcon__default = /*#__PURE__*/_interopDefaultLegacy(CloseIcon);
var ListIcon__default=/*#__PURE__*/_interopDefaultLegacy(ListIcon)



const SimpleTooltip = ({ text, children, side, offset }) =>  React.createElement(Tooltip__namespace.Provider, null,  React.createElement(Tooltip__namespace.Root, {
  delayDuration: 0
},  React.createElement(Tooltip__namespace.Trigger, {
  asChild: true
}, children),  React.createElement(Tooltip__namespace.Content, {
  side,
  sideOffset: offset,
  style: { zIndex: 1e5 }
},  React.createElement("div", {
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
var Text = (props) => {
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
  return enabled ?  React.createElement("span", {
    ref: (ref) => connectors.connect(ref),
    contentEditable: true,
    suppressContentEditableWarning: true,
    className: props.className,
    onClick,
    onInput: onChange
  }, text,) :  React.createElement("span", {
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

function convertToChakraStyle(style) {
  const convertedStyle = {};

  for (const key in style) {
    const value = style[key];
    convertedStyle[key] = Array.isArray(value) ? JSON.stringify(value) : value;
  }
  //console.log(convertedStyle,"convertedStyle")
  return convertedStyle;
}

var APPText = (props) => {
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
  return enabled ?  React.createElement(AppText, {
    ref: (ref) => connectors.connect(ref),
    contentEditable: true,
    suppressContentEditableWarning: true,
    textStyle:props.textStyle,
    color:props.color,
    fontSize:props.fontsize,
    as:props.as,
    onClick,
    onInput: onChange
  }, text) :  React.createElement(AppText, {
    className: props.className,
    text:props.text,
    textStyle:props.textStyle,
    customStyle:{w:props.w,pr:props.pr,mt:props.mt,as:props.as,fontWeight:props.fontWeight,lineHeight:props.lineHeight},
    as:props.as,
    style: __spreadValues$5({}, props)
  }, text);
};

APPText.craft = {
  displayName: "APPText",
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
  return  React.createElement("a", __spreadProps$4(__spreadValues$4({
    ref: (ref) => connectors.connect(ref)
  }, attrsR), {
    href: (_b = node.data.props[propId]) == null ? void 0 : _b.link,
    className: r.classNames,
    onClick
  }),  React.createElement(Child, {
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
  return  React.createElement("button", __spreadProps$3(__spreadValues$3({
    ref: (ref) => connectors.connect(ref)
  }, attrsR), {
    className: r.classNames,
    onClick
  }),  React.createElement(Child, {
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
  return  React.createElement("img", __spreadProps$2(__spreadValues$2({
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
  return  React.createElement("svg", {
    ref: (ref) => connectors.connect(ref),
    className: r.classNames,
    key: propId,
    fill: r.attrs["fill"],
    viewBox: r.attrs["viewbox"],
    stroke: r.attrs["stroke"],
    xmlns: r.attrs["xmlns"]
  }, nodes.filter((_, i) => i === 0 || !path).map((c, i) =>  React.createElement("path", {
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



function convertChakraUIToJSON(chakraUIObject){
  const jsonObject = {};

  // Iterate over the keys of the Chakra UI object
  Object.keys(chakraUIObject).forEach((key) => {
    const value = chakraUIObject[key];

    // Store the property with the original key name in the JSON object
    jsonObject[key] = value;
  });
  // Convert the JSON object to a string
  return JSON.stringify(jsonObject);
}

const Child = ({ root, d = [0] }) => {
  if (!root || (root == null ? void 0 : root.childNodes.length) === 0)
    return null;
  return  React.createElement(React.Fragment, null, Array.from(root == null ? void 0 : root.childNodes).map((r, i) => {
    var _b;
    const key = d.concat(i).join("");
    const _a = r.attrs, attrsR = __objRest(_a, ["class"]);
    if (r.nodeType === 1) {
      if (r.tagName === "DIV")
        return  React.createElement("div", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "H1")
        return  React.createElement("h1", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "SECTION")
        return  React.createElement("section", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "H2")
        return  React.createElement("h2", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "H3")
        return  React.createElement("h3", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "H4")
        return  React.createElement("h4", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "H5")
        return  React.createElement("h5", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "H6")
        return  React.createElement("h6", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "P")
        return  React.createElement("p", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "A")
        return  React.createElement(core.Element, {
          is: Link,
          key,
          r,
          d,
          i,
          id: key,
          propId: key
        });
      else if (r.tagName === "SPAN")
        return  React.createElement("span", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "STRONG")
        return  React.createElement("strong", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "HEADER")
        return  React.createElement("header", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "FOOTER")
        return  React.createElement("footer", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "NAV")
        return  React.createElement("nav", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "ASIDE")
        return  React.createElement("aside", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "DETAILS")
        return  React.createElement("details", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "SUMMARY")
        return  React.createElement("summary", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "BLOCKQUOTE")
        return  React.createElement("blockquote", __spreadValues$1({
          className: r.classNames,
          key
        }, attrsR),  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "INPUT")
        return  React.createElement("input", __spreadValues$1({
          className: r.classNames,
          key
        }, attrsR));
      else if (r.tagName === "LABEL")
        return  React.createElement("label", __spreadValues$1({
          className: r.classNames,
          key
        }, attrsR), r.innerText);
      else if (r.tagName === "TEXTAREA")
        return  React.createElement("textarea", __spreadValues$1({
          defaultValue: r.innerText,
          className: r.classNames,
          key
        }, attrsR));
      else if (r.tagName === "BUTTON")
        return  React.createElement(core.Element, {
          is: Button,
          key,
          r,
          d,
          i,
          id: key,
          propId: key
        });
      else if (r.tagName === "FORM")
        return  React.createElement("form", __spreadValues$1({
          className: r.classNames,
          key
        }, attrsR),  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      else if (r.tagName === "SVG")
        return  React.createElement(core.Element, {
          is: Svg,
          key,
          r,
          id: key,
          propId: key
        });
      else if (r.tagName === "ADDRESS")
        return  React.createElement("address", __spreadValues$1({
          className: r.classNames,
          key
        }, attrsR),  React.createElement(Text, {
          text: r.innerText,
          key,
          id: key
        }));
      else if (r.tagName === "IMG") {
        return  React.createElement(core.Element, {
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
        return  React.createElement("article", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "DL") {
        return  React.createElement("article", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "DD") {
        return  React.createElement("article", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "DT") {
        return  React.createElement("article", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "SCRIPT") {
        return null;
      } else if (r.tagName === "LINK") {
        return  React.createElement("link", __spreadProps$1(__spreadValues$1({
          className: r.classNames
        }, attrsR), {
          key
        }));
      } else if (r.tagName === "BR") {
        return  React.createElement("br", {
          className: r.classNames,
          key
        });
      } else if (r.tagName === "UL") {
        return  React.createElement("ul", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "LI") {
        return  React.createElement("li", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "CITE") {
        return  React.createElement("cite", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "HR") {
        return  React.createElement("hr", {
          className: r.classNames,
          key
        });
      } else if (r.tagName === "IFRAME") {
        return  React.createElement("iframe", __spreadProps$1(__spreadValues$1({
          className: r.classNames
        }, attrsR), {
          key
        }));
      } else if (r.tagName === "STYLE") {
        return  React.createElement("style", {
          key
        }, r.innerText);
      } else if (r.tagName === "TABLE") {
        return  React.createElement("table", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "THEAD") {
        return  React.createElement("thead", __spreadProps$1(__spreadValues$1({
          className: r.classNames
        }, attrsR), {
          key
        }),  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "TBODY") {
        return  React.createElement("tbody", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "TR") {
        return  React.createElement("tr", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "TD") {
        return  React.createElement("td", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      } else if (r.tagName === "TH") {
        return  React.createElement("th", {
          className: r.classNames,
          key
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }));
      }else if (r.tagName === "APPBOX"){
      return  React.createElement(AppBox, {
        props:r.attrs, 
        customStyle:{backgroundImage:attrsR.backgroundimage,
                    backgroundRepeat:attrsR.backgroundrepeat,
                    backgroundSize:attrsR.backgroundsize,
                    backgroundPosition:attrsR.backgroundposition,
                    paddingBottom:attrsR.paddingbottom,
                    w:attrsR.w,
                    width:attrsR.width,
                    py:attrsR.py,
                    pl:attrsR.pl,
                    mt:attrsR.mt,
                    top:attrsR.top,
                    position:attrsR.position,
                    zIndex:attrsR.zindex,
                    width:attrsR.width,
                    backgroundColor:attrsR.backgroundcolor,
                    role:attrsR.role
                  },
        key
      },  React.createElement(Child, {
        root: r,
        d: d.concat(i)
      }))}else if (r.tagName === "APPCONTAINER"){
          return  React.createElement(AppContainer, {
            sx:r.attrs,
            props:r.attrs,
            maxW:r.attrs.maxw,
            key
          },  React.createElement(Child, {
            root: r,
            d: d.concat(i)
          }))}else if (r.tagName === "APPNAV"){
            return  React.createElement(Nav, {
              logo:attrsR.logo,
              color:attrsR.color,
              key
            },  React.createElement(Child, {
              root: r,
              d: d.concat(i)
            }))}else if (r.tagName === "APPFLEX"){
            return  React.createElement(AppFlex, {   
              children:attrsR.childNodes,
              customStyle:{
                backgroundImage:attrsR.backgroundimage,
                backgroundRepeat:attrsR.backgroundrepeat,
                backgroundSize:attrsR.backgroundsize,
                alignItems:attrsR.alignitems,
                gap:attrsR.gap,
                direction:attrsR.direction,
                color:attrsR.color,
                mt:attrsR.mt, 
                backgroundColor:attrsR.bg,
                pt:attrsR.pt,
                pb:attrsR.pb,
                width:attrsR.width
              },
              direction:attrsR.direction,
              justifyContent:attrsR.justifycontent,
              key
            },React.createElement(Child, {
              root: r,
              d: d.concat(i)
            }))}else if (r.tagName === "APPTEXT"){
        return  React.createElement(core.Element, {
          is:APPText,
          text:r.attrs.text,
          textStyle:attrsR.textstyle,
          fontsize:attrsR.fontsize,
          color:attrsR.color,
          as:attrsR.as,
          w:attrsR.w,
          pr:attrsR.pr,
          mt:attrsR.mt,
          fontWeight:attrsR.fontweight,
          lineHeight:attrsR.lineheight,
          key,
          id: key,
          contenteditable:"true"
        },  React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }))}else if (r.tagName === "APPAVATAR"){
          return  React.createElement(AppAvatar, {
            name:r.attrs.name,
            link:r.attrs.link,
            key
          },  React.createElement(Child, {
            root: r,
            d: d.concat(i)
          }))}else if (r.tagName === "APPBADGE"){
            return  React.createElement(AppBadge, {
              key
            },  React.createElement(Child, {
              root: r,
              d: d.concat(i)
            }))}else if (r.tagName === "APPBUTTON"){
              return  React.createElement(AppButton, {
                variant:r.attrs.variant,
                key
              },  React.createElement(Child, {
                root: r,
                d: d.concat(i)
              }))}else if (r.tagName === "APPCARD"){
                return  React.createElement(AppCard, {
                  key
                },  React.createElement(Child, {
                  root: r,
                  d: d.concat(i)
                }))}else if (r.tagName === "CARDBODY"){
                  return  React.createElement(AppCard, {
                    key
                  },  React.createElement(Child, {
                    root: r,
                    d: d.concat(i)
                  }))}else if (r.tagName === "APPCAROUSEL"){
                    return  React.createElement(AppCarousel, {
                      key
                    },  React.createElement(Child, {
                      root: r,
                      d: d.concat(i)
                    }))}else if (r.tagName === "APPDIVIDER"){
                      return  React.createElement(AppDivider, {
                        sx:r.attrs.customstyle,
                        key
                      },  React.createElement(Child, {
                        root: r,
                        d: d.concat(i)
                      }))}else if (r.tagName === "APPDRAWER"){
                  return  React.createElement(AppDrawer, {
                    isOpen:r.attrs.isopen,
                    isClose:r.attrs.isclose,
                    color:r.attrs.color,
                    key
                  },  React.createElement(Child, {
                    root: r,
                    d: d.concat(i)
                  }))}else if (r.tagName === "APPFOOTER"){
                  return  React.createElement(AppFooter, {
                    key
                  },  React.createElement(Child, {
                    root: r,
                    d: d.concat(i)
                  }))}else if (r.tagName === "APPGRID"){
                  return  React.createElement(AppGrid, {
                    gap:r.attrs.gap,
                    templateRows:r.attrs.templaterows,
                    templateColumns:r.attrs.templatecolumns,
                    customstyle:r.attrs.customstyle,
                    key
                  },  React.createElement(Child, {
                    root: r,
                    d: d.concat(i)
                  }))}else if (r.tagName === "APPGRIDITEM"){
                  return  React.createElement(AppGridItem, {
                    key,
                    colspan:r.attrs.colspan,
                    rowspan:r.attrs.rowspan,
                    bg:r.attrs.bg,
                    customstyle:r.attrs.customstyle,
                    rowStart:r.attr.rowstart,
                    h:r.attrs.h,
                    border:r.attrs.border
                  },  React.createElement(Child, {
                    root: r,
                    d: d.concat(i)
                  }))}else if (r.tagName === "APPLINK"){
                  return  React.createElement(AppLink, {
                    key,
                    href:r.attrs.href,
                    customStyle:r.attrs.customstyle
                  },  React.createElement(Child, {
                    root: r,
                    d: d.concat(i)
                  }))}else if (r.tagName === "APPLIST"){
                    return  React.createElement(AppList, {
                      key,
                      list:r.attrs.list
                    },  React.createElement(Child, {
                      root: r,
                      d: d.concat(i)
                    }))}else if (r.tagName === "APPUNORLIST"){
                      return  React.createElement(AppUnOrList, {
                        key,
                        list:r.attrs.list
                      },  React.createElement(Child, {
                        root: r,
                        d: d.concat(i)
                      }))}else if (r.tagName === "APPLISTItEM"){
                      return  React.createElement(AppListItem,{
                        key,
                      },  React.createElement(Child, {
                        root: r,
                        d: d.concat(i)
                      }))}else if (r.tagName === "APPSEARCH"){
                        return  React.createElement(AppSearch, {
                          bordercolor:r.attrs.bordercolor,
                          key
                        },  React.createElement(Child, {
                          root: r,
                          d: d.concat(i)
                  }))}else if (r.tagName === "APPPROGRESS"){
                  return  React.createElement(AppProgress, {
                    key
                  },  React.createElement(Child, {
                    root: r,
                    d: d.concat(i)
                  }))}else if (r.tagName === "APPIMAGE"){
                  return  React.createElement(core.Element, {
                    key,
                    src:r.attrs.src,
                    width:r.attrs.width,
                    height:r.attrs.width,
                    is:Image,
                    attrs: attrsR,
                    id: key,
                    propId: key
                  },  React.createElement(Child, {
                    root: r,
                    d: d.concat(i)
                  }))}else if (r.tagName === "REDIRECTSTRIPE"){
                    return  React.createElement(RedirectStripe, {
                      key,
                      src:r.attrs.src,
                      width:r.attrs.width,
                      height:r.attrs.width
                    },  React.createElement(Child, {
                      root: r,
                      d: d.concat(i)
                    }))}else if (r.tagName === "APPICON"){
                    return  React.createElement(AppIcon, {
                      key,
                      index:r.attrs.index,
                      size:r.attrs.size
                    },  React.createElement(Child, {
                      root: r,
                      d: d.concat(i)
                    }))}else if (r.tagName === "GRADIENTTEXT"){
                      return  React.createElement(core.Element, {
                        is:APPText,
                        text:r.attrs.text,
                        textStyle:attrsR.textstyle,
                        fontsize:attrsR.fontsize,
                        color:attrsR.color,
                        as:attrsR.as,
                        w:attrsR.w,
                        pr:attrsR.pr,
                        mt:attrsR.mt,
                        fontWeight:attrsR.fontweight,
                        lineHeight:attrsR.lineheight,
                        key,
                        id: key,
                        contenteditable:"true"
                      },  React.createElement(Child, {
                        root: r,
                        d: d.concat(i)
                      }))}else if (r.tagName === "GRADIENTTEXT2"){
                        return  React.createElement(core.Element, {
                          is:APPText,
                          text:r.attrs.text,
                          textStyle:attrsR.textstyle,
                          fontsize:attrsR.fontsize,
                          color:attrsR.color,
                          as:attrsR.as,
                          w:attrsR.w,
                          pr:attrsR.pr,
                          mt:attrsR.mt,
                          fontWeight:attrsR.fontweight,
                          lineHeight:attrsR.lineheight,
                          key,
                          id: key,
                          contenteditable:"true"
                        },  React.createElement(Child, {
                          root: r,
                          d: d.concat(i)
                        }))}else if (r.tagName === "APPNAV"){
                        return  React.createElement(AppNav, {
                          key
                        },  React.createElement(Child, {
                          root: r,
                          d: d.concat(i)
                        }))}else if (r.tagName === "DEVELOPCARD"){
                       return  React.createElement(DevelopCard, {
                          key
                        },  React.createElement(Child, {
                          root: r,
                          d: d.concat(i)
                        }))}else if (r.tagName === "DIGITALTRANFORMATION"){
                       return  React.createElement(DigitalTranformation, {
                         key
                       },  React.createElement(Child, {
                         root: r,
                         d: d.concat(i)
                       }))}else if (r.tagName === "HERO"){
                      return  React.createElement(Hero, {
                        key
                      },  React.createElement(Child, {
                        root: r,
                        d: d.concat(i)
                      }))}else if (r.tagName === "MESAURECRITICAL"){
                      return  React.createElement(MeasureCritical, {
                        key
                      },  React.createElement(Child, {
                        root: r,
                        d: d.concat(i)
                      }))}else if (r.tagName === "ORGANISATIONS"){
                      return  React.createElement(Organistions, {
                        key
                      },  React.createElement(Child, {
                        root: r,
                        d: d.concat(i)
                      }))}else if (r.tagName === "TECHNOLOGIES"){
                      return  React.createElement(Technologies, {
                        key
                      },  React.createElement(Child, {
                        root: r,
                        d: d.concat(i)
                      }))}else if (r.tagName === "TESTIMONIAL"){
                      return  React.createElement(Testimonial, {
                        key
                      },  React.createElement(Child, {
                        root: r,
                        d: d.concat(i)
                      }))}
                  else {
        return  React.createElement("p", {
          key
        }, "Unknown container");
      }
    } else if (r.nodeType === 3) {
      if (r.innerText.trim() === "")
        return null;
      if (r.constructor === "TextNode" || r.constructor === "t")
        return  React.createElement(Text, {
          text: (_b = r.innerText) != null ? _b : "",
          key,
          id: key
        },);
      else
        return  React.createElement("p", {
          key
        }, "Unknown node");
    } else {
      return  React.createElement("p", {
        key
      }, "Unknown type");
    }
  }));
};


const Component = ({ root }) => {
  const { connectors, node } = core.useNode((node2) => ({ node: node2 }));
  return  React.createElement("div", {
    id: node.data.props.id,
    ref: (ref) => connectors.connect(ref)
  },  React.createElement(Child, {
    root
  }));
};

const Container = ({ children }) => {
  const { connectors } = core.useNode();
  return  React.createElement("div", {
    ref: (ref) => connectors.connect(ref),
    style: { width: "100%", minHeight: "800px" },
    className: "bg-wheate shadow-2xl"
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
  { name: "Meraki UI", folder: "meraki-light", load: () => Promise.resolve().then(function () { return require('./components/index-8fbd5618.js'); }) },
  {name:"Chakra UI",folder:"chakra",load:()=>Promise.resolve().then(function(){return require("./components/index-chakra.js")})}
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
  Svg,
  APPText
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
  const [pageList,setPageList]=React.useState([])
  const [currentPage,setCurrentPage]=React.useState("home")
  const [isOpen ,setIsOpen]=React.useState(false)
  const [fileName,setFileName]=React.useState("")
  const [isView,setView]=React.useState(false)
  const [pageChange,setPageChange]=React.useState(false)


  const themeNames = themes.map((t) => t.name);
  React.useEffect(() => {
    updateIndex(0);
    localStorage.setItem("currentPage","home")
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
    setStandalone,
    pageList,
    setPageList,
    currentPage,
    setCurrentPage,
    isOpen,
    setIsOpen,
    fileName,
    setFileName,
    isView,
    setView,
    pageChange,
    setPageChange
  };
  return  React.createElement(ThemeContext.Provider, {
    value
  }, children);
};

const Select = ({ defaultValue, values, open, setOpen, onChange }) => {
  return  React.createElement(SelectPrimitive__namespace.Root, {
    defaultValue,
    onValueChange: onChange,
    open,
    onOpenChange: (e) => setOpen(e)
  },  React.createElement(SelectPrimitive__namespace.Content, {
    className: "z-50 top-2"
  },  React.createElement(SelectPrimitive__namespace.Viewport, {
    className: "bg-white p-2 rounded-lg shadow-lg"
  },  React.createElement(SelectPrimitive__namespace.Group, null, values.map((f, i) =>  React.createElement(SelectPrimitive__namespace.Item, {
    key: i,
    value: f,
    className: cx__default["default"]("relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 font-medium", "hover:opacity-70 cursor-pointer select-none")
  },  React.createElement(SelectPrimitive__namespace.ItemText, null, f),  React.createElement(SelectPrimitive__namespace.ItemIndicator, {
    className: "absolute left-2 inline-flex items-center"
  },  React.createElement(CheckIcon__default["default"], null))))))));
};

const Header = () => {
  const { state, query, actions } = core.useEditor((state2, query2) => ({ state: state2, query: query2 }));
  const { updateIndex, themeNames, themeIndex ,currentPage} = React.useContext(ThemeContext);
  const [selectOpen, setSelectOpen] = React.useState(false);
  const enabled = state.options.enabled;
  const onChange = (name) => {
    updateIndex(themeNames.indexOf(name));
  };
  const togglePreview = () => {
    actions.setOptions((o) => o.enabled = !enabled);
  };
  return  React.createElement("div", {
    className: "transition w-full bg-gray-300"
  },  React.createElement("div", {
    className: "flex px-4 py-2 justify-end"
  }, enabled &&  React.createElement("div", {
    className: "flex-1 flex"
  },  React.createElement(SimpleTooltip, {
    text: "Undo",
    side: "bottom",
    offset: 4
  },  React.createElement("a", {
    className: ` ${query.history.canUndo() ? "hover:opacity-50 cursor-pointer" : "opacity-50 cursor-not-allowed"} p-2`,
    onClick: actions.history.undo
  },  React.createElement(ArrowUturnLeftIcon__default["default"], {
    className: "h-4 w-4"
  }))),  React.createElement(SimpleTooltip, {
    text: "Redo",
    side: "bottom",
    offset: 4
  },  React.createElement("a", {
    className: ` ${query.history.canRedo() ? "hover:opacity-50 cursor-pointer" : "opacity-50 cursor-not-allowed"} p-2`,
    onClick: actions.history.redo
  },  React.createElement(ArrowUturnRightIcon__default["default"], {
    className: "h-4 w-4"
  }))),  React.createElement("div", {
    className: "mr-auto ml-auto"
  },  React.createElement("div", {
    className: "flex rounded py-2 px-4 transition cursor-pointer items-center justify-center mr-auto ml-auto",
    onClick: () => setSelectOpen(true)
  }, themeNames[themeIndex],  React.createElement(ChevronDownIcon__default["default"], {
    className: "h-4 w-4 ml-2"
  })),  React.createElement(Select, {
    defaultValue: themeNames[themeIndex],
    values: themeNames,
    open: selectOpen,
    setOpen: setSelectOpen,
    onChange
  }))),  React.createElement("div", {
    className: "flex"
  }, enabled ?  React.createElement("a", {
    className: "flex bg-green-600 text-white rounded py-2 px-4 transition cursor-pointer items-center",
    onClick: togglePreview
  },  React.createElement(CheckIcon__default["default"], {
    className: "h-4 w-4 mr-2"
  }), " Preview") :  React.createElement("a", {
    className: "flex bg-primary text-white rounded py-2 px-4 transition cursor-pointer items-center",
    onClick: togglePreview
  },  React.createElement(PencilSquareIcon__default["default"], {
    className: "h-4 w-4 mr-2"
  }), " Edit"))));
};

const SidebarItem = ({ visible, title, children, onChange }) => {
  return  React.createElement("div", {
    className: "flex flex-col w-full"
  },  React.createElement("div", {
    onClick: () => {
      if (onChange)
        onChange(!visible);
    },
    className: `h-12 cursor-pointer bg-white border-b last:border-b-0 flex items-center px-2 ${visible ? "shadow-sm" : ""}`
  },  React.createElement("div", {
    className: "flex-1 flex items-center"
  },  React.createElement(Squares2X2Icon__default["default"], {
    className: "h-4 w-4 ml-2 mr-4"
  }), " ",  React.createElement("h2", {
    className: "text-xs uppercase"
  }, title)),  React.createElement("a", {
    style: { transform: `rotate(${visible ? 180 : 0}deg)` }
  },  React.createElement(ArrowSmallUpIcon__default["default"], {
    className: "h-4 w-4"
  }))), visible ?  React.createElement("div", {
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


const Category = SidebarItem;
const Item = ({ connectors, c }) => {
  const { standalone } = React.useContext(ThemeContext);
  return  React.createElement("div", {
    ref: (ref) => connectors.create(ref,  React.createElement(Component, {
      root: cleanHTMLElement(nodeHtmlParser.parse(c.source))
    }))
  },  React.createElement(SimpleTooltip, {
    text: c.displayName,
    side: "right",
    offset: 12
  },  React.createElement("a", {
    className: "cursor-move m-2 pb-2 cursor-pointer block"
  },  React.createElement("img", {
    src: getImageUrl(standalone, `/public/${c.themeFolder}/${c.blockFolder}/preview.png`),
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
  return  React.createElement("div", {
    className: `toolbox h-full flex flex-col bg-white ${enabled ? "w-48" : "w-0 opacity-0"}`,
    style: { transition: "0.4s cubic-bezier(0.19, 1, 0.22, 1)" }
  },  React.createElement("div", {
    className: "flex flex-1 flex-col items-center pt-3 overflow-scroll hide-scrollbars"
  }, categories.map((b, j) =>  React.createElement(Category, {
    key: j,
    title: b,
    visible: toolbarVisible[j],
    onChange: () => toggleToolbar(j)
  }, components == null ? void 0 : components.filter((c) => c.category === b).map((c, i) =>  React.createElement(Item, {
    connectors,
    c,
    key: i
  }))))));
};



const Pages=()=>{
  const {actions}=core.useEditor()
  const {pageList,setIsOpen,isOpen,fileName,setFileName,isView,setView,currentPage,setCurrentPage}=React.useContext(ThemeContext)
  
  const handleInputBox=()=>{
        setIsOpen(!isOpen)  
  }
  const loadData1 = async (data,standaloneServer=false) => {
      if(data.content!==undefined){
      const content = JSON.parse(data.content);
      actions.deserialize(content);
    }else{
      const result = await loadTemplate(standaloneServer,localStorage.getItem("currentPage"));
      const content = JSON.parse(result);
      actions.deserialize(content);
    }}
  
  console.log(pageList,"pageList")
  const handleDynamicPages=async(e)=>{
    setCurrentPage(e.target.textContent)
    const baseUrl = getBaseUrl(false);
    const data = await fetchJSON({
      method: "get",
      url: `${baseUrl}/api/builder/handle?type=data&path=${localStorage.getItem("currentPage")}`
    });
    return data == null ? void 0 : loadData1(data);
  }
  
  const handleActions=async(e)=>{
        localStorage.setItem("currentPage",e.target.textContent)
        await setCurrentPage(...e.target.textContent)
        await setCurrentPage(...e.target.textContent)
        handleDynamicPages(e)
  }
  
  

  const createNewFile=async(standaloneServer)=>{
    setView(!isView)
    const baseUrl = getBaseUrl(standaloneServer);
  const data = await fetchJSON({
    method: "get",
    url: `${baseUrl}/api/builder/handle?type=new&path=${fileName}`
  });
  window.location.reload(true)
  }

  return /*@__PURE__*/React.createElement("div",{

},
//  pageList.map((folder) => (
//      React.createElement("div",
//       {key:folder.folder},
//        React.createElement("h3",
//        {className:"h-12 flex text-xl items-center"},folder.folder
//        ),
//        React.createElement("ul",
//         folder.files.map((file) => (
//            React.createElement("li",{key:file,className:"h-12 flex text-xl items-center",style:{backgroundColor:currentPage===i?"#78818D":"",color:currentPage===i?"white":"#1A202C"}},file)
//          ))
//        )
//      )
//    )),
   pageList.map((i)=>
     /*@__PURE__*/React.createElement("p",
     {className:"h-12 flex text-xl items-center",onClick:(e)=>handleActions(e),style:{backgroundColor:currentPage===i?"#78818D":"",color:currentPage===i?"white":"#1A202C"}},
     i,
     )
  ),
   React.createElement("div",
  {className:"flex justify-center"},
   React.createElement(PlusOutIcon__default["default"],
  {className:"w-4 h-4",onClick:handleInputBox},
  )),
  isOpen?
    React.createElement("div",
   {className:"flex justifiy-between"},
     React.createElement("input",{style:{border:"1px solid gray"},onInput:(e)=>setFileName(e.target.value)})
   ):null,
   fileName.length!==0?
   React.createElement("button",{
   onClick:()=>createNewFile(false)
   },"Add"):null   
   )
}

const MainSideBar= () => {
  const {setView,isView}=React.useContext(ThemeContext)
 
  const handleNew=()=>{
    // loadDynamicTemplate()
    setView(!isView)
  }

  
  
  return  React.createElement("div", {
    className: `toolbox h-full flex flex-col bg-white w-48" `,
    style: { transition: "0.4s cubic-bezier(0.19, 1, 0.22, 1)" }
  },
   React.createElement("div", {
    className: `h-full flex flex-col bg-white w-48`,
  },
   React.createElement("div", 
  {
    className: ` bg-[#D1D5DB] flex justify-between w-48 cursor-pointer items-center m-4 p-2 h-12 shadow-2xl`,
    style: { transition: "0.4s cubic-bezier(0.19, 1, 0.22, 1)",background:"#D1D5DB" },
    onClick:handleNew
  },
   React.createElement(ListIcon__default["default"],
  {className:"w-4 h-4",}
  )
  ,"Pages",
   React.createElement(ArrowSmallUpIcon__default["default"],
  {className:"w-4 h-4",
  style: { transform: `rotate(${isView ? 180 : 0}deg)` }},
  )
  ), 
   React.createElement("div", 
  {
    className: ` bg-white w-48 cursor-pointer items-center m-4`,
    style: { transition: "0.4s cubic-bezier(0.19, 1, 0.22, 1)" },
  },
  isView?
 React.createElement(Pages, 
{
  style:{display:isView?"flex":"none"},
}):null,
  ),));
};


const Viewport = ({ children }) => {
  const { connectors, actions } = core.useEditor((state) => ({ enabled: state.options.enabled }));
  React.useEffect(() => {
    setTimeout(() => {
      actions.setOptions((o) => o.enabled = true);
    }, 200);
  }, [actions.setOptions]);
  return  React.createElement("div", {
    className: "viewport"
  },
    React.createElement("div", {
    className: "flex h-full overflow-hidden flex-row w-full"
  },
  //   React.createElement("div", {
  //    className: "flex h-full overflow-hidden flex-row w-full fixed"
  //  },  React.createElement(MainSideBar, null), 
     React.createElement(Sidebar, null),  React.createElement("div", {
     className: "page-container flex flex-1 h-full flex-col"
   }, 
   React.createElement(Header, null),  React.createElement("div", {
    className: "craftjs-renderer flex-1 h-full w-full transition pb-8 overflow-auto",
    ref: (ref) => connectors.select(connectors.hover(ref, ""), "")
  },  React.createElement("div", {
    className: "relative flex-col flex items-center pt-8 justify-center",
    style: { maxWidth: "800px", margin: "auto" }
  }, children),  React.createElement("div", {
    className: "flex items-center justify-center w-full pt-6 text-xs text-gray-400"
  }, "Powered by", " ",  React.createElement("a", {
    className: "mx-1",
    target: "_blank",
    href: "https://craft.js.org/"
  }, "Craft.js"), " ", "and", " ",  React.createElement("a", {
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
  return  React.createElement(DialogPrimitive__namespace.Root, {
    open,
    onOpenChange: setOpen
  },  React.createElement(DialogPrimitive__namespace.Portal, null,  React.createElement(DialogPrimitive__namespace.Overlay, null,  React.createElement(DialogPrimitive__namespace.Content, {
    className: cx__default["default"]("fixed shadow bg-white rounded-lg p-4", "w-[95vw] max-w-md md:w-full", "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")
  },  React.createElement(DialogPrimitive__namespace.Title, {
    className: "text-sm font-medium text-gray-900 dark:text-gray-100"
  }, "Update Link"),  React.createElement("div", {
    className: "mt-8 mb-4"
  },  React.createElement("div", null,  React.createElement("div", null,  React.createElement("div", {
    className: "flex justify-center mb-4 flex-col"
  },  React.createElement("input", {
    type: "text",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4",
    placeholder: "Eg. https://github.com/LiveDuo/destack",
    defaultValue: link,
    onChange: (e) => setLink(e.target.value)
  }),  React.createElement("div", {
    className: "flex items-center ml-4"
  },  React.createElement("p", null, "Open in new tab"),  React.createElement("input", {
    defaultChecked: newTab,
    type: "checkbox",
    onChange: (e) => setNewTab(e.target.checked),
    className: "ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
  })))))),  React.createElement("div", {
    className: "mt-4 flex justify-end"
  },  React.createElement(DialogPrimitive__namespace.Close, {
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
  }, "Save")),  React.createElement(DialogPrimitive__namespace.Close, {
    onClick: () => setOpen(false),
    className: cx__default["default"]("absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1")
  },  React.createElement(XMarkIcon__default["default"], {
    className: "h-4 w-4 text-gray-500 hover:text-gray-700"
  }))))));
};

const Content = ({ url, text, setText, onUpload, onChange }) => {
  const input = React.useRef(null);
  return  React.createElement("div", {
    className: "mt-4 mb-4"
  }, !url ?  React.createElement("div", null,  React.createElement("div", {
    className: "flex justify-center mt-8 mb-4"
  },  React.createElement("input", {
    ref: input,
    type: "file",
    onChange: onUpload,
    style: { display: "none" }
  }),  React.createElement("button", {
    className: "rounded-md px-4 py-2 text-sm font-medium bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-700 hover:text-white border border-transparent",
    onClick: () => {
      var _a;
      (_a = input.current) == null ? void 0 : _a.click();
    }
  }, "Upload")),  React.createElement("div", {
    className: "flex justify-center mb-4"
  }, "OR"),  React.createElement("div", {
    className: "flex justify-center mb-4"
  },  React.createElement("input", {
    type: "text",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",
    placeholder: "Eg. https://www.w3schools.com/html/pic_trulli.jpg",
    onChange: (e) => setText(e.target.value)
  }),  React.createElement("button", {
    onClick: () => onChange(),
    className: cx__default["default"]("rounded-md px-4 py-2 text-sm font-medium bg-transparent border", "text-blue-500 hover:opacity-50 border border-transparent", `${text !== "" ? "hover:opacity-50" : "opacity-50 cursor-not-allowed"}`),
    disabled: text === ""
  }, "Set"))) :  React.createElement("img", {
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
  return  React.createElement(DialogPrimitive__namespace.Root, {
    open,
    onOpenChange: setOpen
  },  React.createElement(DialogPrimitive__namespace.Portal, null,  React.createElement(DialogPrimitive__namespace.Overlay, null,  React.createElement(DialogPrimitive__namespace.Content, {
    className: cx__default["default"]("fixed shadow bg-white rounded-lg p-4", "w-[95vw] max-w-md md:w-full", "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")
  },  React.createElement(DialogPrimitive__namespace.Title, {
    className: "text-sm font-medium text-gray-900 dark:text-gray-100"
  }, "Upload Image"),  React.createElement(Content, {
    url,
    text,
    setText,
    onUpload,
    onChange
  }),  React.createElement("div", {
    className: "mt-4 flex justify-end"
  },  React.createElement("button", {
    style: { marginRight: "auto" },
    className: cx__default["default"]("rounded-md px-4 py-2 text-sm font-medium bg-transparent border", "text-blue-500 hover:opacity-50 border border-transparent"),
    onClick: () => {
      setUrl(null);
      setText("");
    }
  }, "Replace"),  React.createElement(DialogPrimitive__namespace.Close, {
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
  }, "Save")),  React.createElement(DialogPrimitive__namespace.Close, {
    onClick: () => setOpen(false),
    className: cx__default["default"]("absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1")
  },  React.createElement(XMarkIcon__default["default"], {
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
  return  React.createElement(DialogPrimitive__namespace.Root, {
    open,
    onOpenChange: setOpen
  },  React.createElement(DialogPrimitive__namespace.Portal, null,  React.createElement(DialogPrimitive__namespace.Overlay, null,  React.createElement(DialogPrimitive__namespace.Content, {
    className: cx__default["default"]("fixed shadow bg-white rounded-lg p-4", "w-[95vw] max-w-md md:w-full", "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")
  },  React.createElement(DialogPrimitive__namespace.Title, {
    className: "text-sm font-medium text-gray-900 dark:text-gray-100"
  }, "Update Button"),  React.createElement(DialogPrimitive__namespace.Description, {
    className: "mt-2 text-sm font-normal text-gray-700 dark:text-gray-400"
  },  React.createElement("div", {
    className: "mt-4 mb-4"
  },  React.createElement("div", null,  React.createElement("div", {
    className: "flex rounded py-2 px-4 transition cursor-pointer items-center ml-2 mb-4",
    onClick: () => setOpenSelect(true)
  }, capitalize(type), " ",  React.createElement(ChevronDownIcon__default["default"], {
    className: "h-4 w-4 ml-2"
  })),  React.createElement(Select, {
    defaultValue: type,
    values: options.map((o) => capitalize(o)),
    open: openSelect,
    setOpen: setOpenSelect,
    onChange
  }),  React.createElement("div", null, type === "url" &&  React.createElement("div", {
    className: "flex justify-center mb-4 flex-col"
  },  React.createElement("input", {
    type: "text",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4",
    placeholder: "Eg. https://github.com/LiveDuo/destack",
    defaultValue: url,
    onChange: (e) => setUrl(e.target.value)
  }),  React.createElement("div", {
    className: "flex items-center ml-4"
  },  React.createElement("p", null, "Open in new tab"),  React.createElement("input", {
    defaultChecked: newTab,
    type: "checkbox",
    onChange: (e) => setNewTab(e.target.checked),
    className: "ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
  }))), type === "email" &&  React.createElement("div", {
    className: "flex justify-center mb-4"
  },  React.createElement("input", {
    type: "text",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",
    placeholder: "Eg. matt@mullenweg.com",
    defaultValue: email,
    onChange: (e) => setEmail(e.target.value)
  })), type === "submit" &&  React.createElement("div", {
    className: "flex justify-center mb-4 flex-col"
  },  React.createElement("div", {
    className: "flex justify-end mb-4"
  },  React.createElement("input", {
    type: "text",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",
    placeholder: "Eg. /api/submit",
    defaultValue: submitUrl,
    onChange: (e) => setSubmitUrl(e.target.value)
  }),  React.createElement("div", {
    className: "flex rounded py-2 px-4 transition cursor-pointer items-center ml-2",
    onClick: () => setMethodSelect(true)
  }, submitMethod, " ",  React.createElement(ChevronDownIcon__default["default"], {
    className: "h-4 w-4 ml-2"
  })),  React.createElement(Select, {
    defaultValue: submitMethod,
    values: methods,
    open: methodSelect,
    setOpen: setMethodSelect,
    onChange: (e) => setSubmitMethod(e)
  })),  React.createElement("div", {
    className: "flex items-center ml-4"
  },  React.createElement("p", null, "Async"),  React.createElement("input", {
    defaultChecked: submitAsync,
    type: "checkbox",
    onChange: (e) => setSubmitAsync(e.target.checked),
    className: "ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
  }))))))),  React.createElement("div", {
    className: "mt-4 flex justify-end"
  },  React.createElement(DialogPrimitive__namespace.Close, {
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
  }, "Save")),  React.createElement(DialogPrimitive__namespace.Close, {
    onClick: () => setOpen(false),
    className: cx__default["default"]("absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1")
  },  React.createElement(XMarkIcon__default["default"], {
    className: "h-4 w-4 text-gray-500 hover:text-gray-700"
  }))))));
};

const Dialog$1 = ({ open, setOpen, node, actions }) => {
  const [id, setId] = React.useState(node.data.props.id);
  return  React.createElement(DialogPrimitive__namespace.Root, {
    open,
    onOpenChange: setOpen
  },  React.createElement(DialogPrimitive__namespace.Portal, null,  React.createElement(DialogPrimitive__namespace.Overlay, null,  React.createElement(DialogPrimitive__namespace.Content, {
    className: cx__default["default"]("fixed shadow bg-white rounded-lg p-4", "w-[95vw] max-w-md md:w-full", "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")
  },  React.createElement(DialogPrimitive__namespace.Title, {
    className: "text-sm font-medium text-gray-900 dark:text-gray-100"
  }, "Update Section Id"),  React.createElement("div", {
    className: "mt-8 mb-4"
  },  React.createElement("div", null,  React.createElement("div", null,  React.createElement("div", {
    className: "flex justify-center mb-4 flex-col"
  },  React.createElement("input", {
    type: "text",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4",
    placeholder: "Eg. section-1",
    defaultValue: id,
    onChange: (e) => setId(e.target.value)
  }))))),  React.createElement("div", {
    className: "mt-4 flex justify-end"
  },  React.createElement(DialogPrimitive__namespace.Close, {
    onClick: () => {
      setOpen(false);
      actions.setProp(node.id, (prop) => {
        prop.id = id;
      });
    },
    className: cx__default["default"]("inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium", "bg-blue-600 text-white hover:bg-blue-700 border border-transparent")
  }, "Save")),  React.createElement(DialogPrimitive__namespace.Close, {
    onClick: () => setOpen(false),
    className: cx__default["default"]("absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1")
  },  React.createElement(XMarkIcon__default["default"], {
    className: "h-4 w-4 text-gray-500 hover:text-gray-700"
  }))))));
};

const Dialog = ({ open, setOpen, node, actions }) => {
  var _a;
  const props = node.data.props;
  const key = props.propId;
  const [path, setPath] = React.useState((_a = node.data.props[key]) == null ? void 0 : _a.path);
  return  React.createElement(DialogPrimitive__namespace.Root, {
    open,
    onOpenChange: setOpen
  },  React.createElement(DialogPrimitive__namespace.Portal, null,  React.createElement(DialogPrimitive__namespace.Overlay, null,  React.createElement(DialogPrimitive__namespace.Content, {
    className: cx__default["default"]("fixed shadow bg-white rounded-lg p-4", "w-[95vw] max-w-md md:w-full", "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")
  },  React.createElement(DialogPrimitive__namespace.Title, {
    className: "text-sm font-medium text-gray-900 dark:text-gray-100"
  }, "Update SVG Path"),  React.createElement("div", {
    className: "mt-8 mb-4"
  },  React.createElement("div", null,  React.createElement("div", null,  React.createElement("div", {
    className: "flex justify-center mb-4 flex-col"
  },  React.createElement("input", {
    type: "text",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4",
    placeholder: "Eg. d = 'M150 0 L75 200 L225 200 Z'",
    defaultValue: path,
    onChange: (e) => setPath(e.target.value)
  }))))),  React.createElement("div", {
    className: "mt-4 flex justify-end"
  },  React.createElement(DialogPrimitive__namespace.Close, {
    onClick: () => {
      setOpen(false);
      actions.setProp(node.id, (prop) => {
        if (!prop[key])
          prop[key] = {};
        prop[key].path = path;
      });
    },
    className: cx__default["default"]("inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium", "bg-blue-600 text-white hover:bg-blue-700 border border-transparent")
  }, "Save")),  React.createElement(DialogPrimitive__namespace.Close, {
    onClick: () => setOpen(false),
    className: cx__default["default"]("absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1")
  },  React.createElement(XMarkIcon__default["default"], {
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
  return  React.createElement(React.Fragment, null, node.events.hovered || isActive ? ReactDOM__default["default"].createPortal( React.createElement("div", {
    ref: {currentRef},
    className: "px-2 py-2 text-white bg-primary fixed flex items-center leading-3 text-xs",
    style: {
      height: "30px",
      marginTop: "-29px",
      left: getPos(dom).left,
      top: getPos(dom).top,
      zIndex: 9999
    }
  },  React.createElement("h2", {
    className: "flex-1 mr-4"
  }, displayName), isRootChild &&  React.createElement("a", {
    className: "mr-2 cursor-move",
    ref: () => connectors.drag
  },  React.createElement(ArrowsPointingOutIcon__default["default"], {
    className: "h-4 w-4"
  })), isRootChild &&  React.createElement("a", {
    className: "mr-2 cursor-pointer",
    onMouseDown: (e) => {
      e.stopPropagation();
      setOpenHash(true);
    }
  },  React.createElement(HashtagIcon__default["default"], {
    className: "h-4 w-4"
  })), showFocus &&  React.createElement("a", {
    className: "mr-2 cursor-pointer",
    onClick: () => {
      actions.selectNode(data.parent);
    }
  },  React.createElement(ArrowSmallUpIcon__default["default"], {
    className: "h-4 w-4"
  })), (dom == null ? void 0 : dom.nodeName) === "IMG" &&  React.createElement("a", {
    className: "cursor-pointer",
    onMouseDown: (e) => {
      e.stopPropagation();
      setOpenImage(true);
    }
  },  React.createElement(PhotoIcon__default["default"], {
    className: "h-4 w-4"
  })), (dom == null ? void 0 : dom.nodeName) === "svg" &&  React.createElement("a", {
    className: "cursor-pointer",
    onMouseDown: (e) => {
      e.stopPropagation();
      setOpenSvg(true);
    }
  },  React.createElement(PhotoIcon__default["default"], {
    className: "h-4 w-4"
  })), (dom == null ? void 0 : dom.nodeName) === "A" &&  React.createElement("a", {
    className: "cursor-pointer",
    onMouseDown: (e) => {
      e.stopPropagation();
      setOpenLink(true);
    }
  },  React.createElement(LinkIcon__default["default"], {
    className: "h-4 w-4"
  })), (dom == null ? void 0 : dom.nodeName) === "BUTTON" &&  React.createElement("a", {
    className: "cursor-pointer",
    onMouseDown: (e) => {
      e.stopPropagation();
      setOpenButton(true);
    }
  },  React.createElement(CircleStackIcon__default["default"], {
    className: "h-4 w-4"
  })), isRootChild &&  React.createElement("a", {
    className: "cursor-pointer",
    onMouseDown: (e) => {
      e.stopPropagation();
      actions.delete(id);
    }
  },  React.createElement(TrashIcon__default["default"], {
    className: "h-4 w-4"
  })),  React.createElement(Dialog$4, {
    open: openLink,
    setOpen: setOpenLink,
    node,
    actions
  }),  React.createElement(Dialog$3, {
    open: openImage,
    setOpen: setOpenImage,
    node,
    actions
  }),  React.createElement(Dialog$1, {
    open: openHash,
    setOpen: setOpenHash,
    node,
    actions
  }),  React.createElement(Dialog, {
    open: openSvg,
    setOpen: setOpenSvg,
    node,
    actions
  }),  React.createElement(Dialog$2, {
    open: openButton,
    setOpen: setOpenButton,
    node,
    actions
  })), document.querySelector(".page-container")) : null, render);
};

const FrameEditor = ({ data, standaloneServer ,pages}) => {
  const { actions } = core.useEditor();
  const {pageList,setPageList,currentPage}=React.useContext(ThemeContext)
  if(pages){
    setPageList(pages)
  }
  const loadData = async () => {
    if (data) {
      const templateData = data.find(( name ) =>name.name === "\\"+localStorage.getItem("currentPage") );
      if(templateData!==undefined&&templateData.content!==undefined){
      const content = JSON.parse(templateData.content);
      actions.deserialize(content);
    }else{
      const result = await loadTemplate(standaloneServer,localStorage.getItem("currentPage"));
      const content = JSON.parse(result);
      actions.deserialize(content);
    }
    } else {
      const result = await loadTemplate(standaloneServer,localStorage.getItem("currentPage"));
      const content = JSON.parse(result);
      actions.deserialize(content);
    }
  };
  React.useEffect(() => {
    loadData();
  }, []);
  return !data ?  React.createElement(Viewport, null,  React.createElement(core.Frame, null,  React.createElement(core.Element, {
    canvas: true,
    is: Container,
    children: [],
    custom: { displayName: "App" }
  }))) :  React.createElement("div", {
    className: "page-container"
  },  React.createElement(core.Frame, null));
};

const Editor = ({ data, standaloneServer,pages }) => {
  const { resolver, setStandalone,currentPage } = React.useContext(ThemeContext);
  React.useEffect(() => setStandalone(standaloneServer), []);
  const onStateChange = (e) => {
    saveTemplateDebounce(e, standaloneServer,localStorage.getItem("currentPage"));
  }; 
  return  React.createElement(core.Editor, {
    resolver,
    enabled: !data,
    onRender: EditorElement,
    onNodesChange: onStateChange
  },  React.createElement(FrameEditor, {
    data,
    standaloneServer,
    pages
  }));
};



const ContentProviderBase = ({ data, standaloneServer,pages }) => {
  return  React.createElement(ThemeProvider, null,  React.createElement("div", {
    className: "h-full h-screen"
  },  React.createElement(Editor, {
    data,
    standaloneServer,
    pages
  })));
};
const ContentProvider = ({ data,pages }) =>  React.createElement(ContentProviderBase, {
  data,
  standaloneServer: false,
  pages,
});

const FrameEditor1 = ({ data1, standaloneServer ,pages}) => {
  const { actions } = core.useEditor();
  const {pageList,setPageList}=React.useContext(ThemeContext)
  if(pages){
    setPageList(pages)
  }

  const loadData = async () => {
     if(data1){
      if(data1.content!==undefined){
      const content =await JSON.parse(data1.content);
      actions.deserialize(content);
    }
    //else{
    //   //const result = await loadTemplate(standaloneServer);
    //   //const content = JSON.parse(result);
    //   //actions.deserialize(content);
    //   const content =await JSON.parse(data1.content);
    //   actions.deserialize(content)

    // }
  }}
    
  React.useEffect(() => {
    loadData();
  }, []);


  if(data1!==undefined){
     loadData()
  }
  return !data1 ?  React.createElement("div",  React.createElement("p", {},"loading....")
  ) :  React.createElement("div", {
    className: "page-container"
  },  React.createElement(core.Frame, null));
};

const Editor1 = ({ data1, standaloneServer,pages }) => {
  const { resolver, setStandalone } = React.useContext(ThemeContext);
  React.useEffect(() => setStandalone(standaloneServer), []);
  const onStateChange = (e) => {
    saveTemplateDebounce(e, standaloneServer);
  }; 
  return  React.createElement(core.Editor, {
    resolver,
    enabled: !data1,
    onRender: EditorElement,
    onNodesChange: onStateChange
  },  React.createElement(FrameEditor1, {
    data1,
    standaloneServer,
    pages
  }));
};



const ContentProviderBase1 = ({ data1, standaloneServer,pages }) => {
  return  React.createElement(ThemeProvider, null,  React.createElement("div", {
    className: "h-full h-screen"
  },  React.createElement(Editor1, {
    data1,
    standaloneServer,
    pages
  })));
};
const ContentProvider1 = ({ data1,pages }) =>  React.createElement(ContentProviderBase1, {
  data1,
  standaloneServer: false,
  pages,
});

exports.ContentProvider = ContentProvider;
exports.ContentProvider1=ContentProvider1
exports.Sidebar=Sidebar
