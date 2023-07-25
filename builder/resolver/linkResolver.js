import { useNode,useEditor } from "@craftjs/core";
import React from "react"
import { __spreadProps$4 ,__spreadValues$4} from "../functions";
import Child from "./childResolver";
var __defProp$4 = Object.defineProperty;
var __defProps$4 = Object.defineProperties;
var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
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

const Link = ({ r, d, i, propId }) => {
    var _b;
    const { node } = useNode((node2) => ({ node: node2 }));
    const { enabled } = useEditor((state) => ({ enabled: state.options.enabled }));
    const { connectors } = useNode((node2) => ({ node: node2 }));
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
  
export default Link