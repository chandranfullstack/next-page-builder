import {useNode,useEditor} from "@craftjs/core"
import React from "react"
import DefaultButtonSettings from "../settings/defaultButtonSettings";
import ButtonSettings from "../settings/buttonSettings";
import { __objRest$2,__spreadProps$3,__spreadValues$3 } from "../functions";
import Child from "./childResolver";


export const Button = ({ r, d, i, propId ,color,background,width,height,borderRadius}) => {
    const { node } = useNode((node2) => ({ node: node2 }));
    const { enabled } = useEditor((state) => ({ enabled: state.options.enabled }));
    const { connectors } = useNode((node2) => ({ node: node2 }));
    const _a = r.attrs, attrsR = __objRest$2(_a, ["class"]);
    const onClick = (e) => {
      e.preventDefault();
      if (!enabled)
        handleClick(node.data.props[propId], e);
    }; 
    return React.createElement("div", {style:{display:"flex",justifyContent:"center"}}, React.createElement("button", __spreadProps$3(__spreadValues$3({
      ref: (ref) => connectors.connect(ref)
    }, attrsR), {
      className: r.classNames,
      style:{color:color,background:background,width:width,height:height,borderRadius:borderRadius},
      onClick
    }),  React.createElement(Child, {
      root: r,
      d: d.concat(i)
    })));
};

Button.craft = {
  displayName: "Button",
  rules: {
    canDrag: () => true
  },
  related: {settings:DefaultButtonSettings}
};

export const ButtonResolver = ({ r, d, i, propId }) => {
  const { node } = useNode((node2) => ({ node: node2 }));
  const { enabled } = useEditor((state) => ({ enabled: state.options.enabled }));
  const { connectors } = useNode((node2) => ({ node: node2 }));
  const _a = r.attrs, attrsR = __objRest$2(_a, ["class"]);
  const onClick = (e) => {
    e.preventDefault();
    if (!enabled)
      handleClick(node.data.props[propId], e);
  };
  return  React.createElement(AppButton,__spreadProps$3(__spreadValues$3({
    ref: (ref) => connectors.connect(ref),
  }), {
    className: r.classNames,
    variant:attrsR.variant,
    colorScheme:attrsR.colorscheme,
    onClick
  }),  React.createElement(Child, {
    root: r,
    d: d.concat(i)
  }));
};
ButtonResolver.craft = {
  displayName: "Button",
  props: {},
  rules: {
    canDrag: () => true
  },
  related: {settings:ButtonSettings}
};


  