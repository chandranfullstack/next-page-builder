import { useNode } from "@craftjs/core";
import { useState } from "react";
import { ParagraphSettings } from "../settings/paragraphSettings";
import React from "react"

export const Paragraph=(props)=>{
    var _a, _b;
    const { node, connectors, actions } = useNode((node2) => ({ node: node2 }));
    const { enabled } = useEditor((state) => ({ enabled: state.options.enabled }));
    const [text] = useState((_b = (_a = node.data.props[props.id]) == null ? void 0 : _a.text) != null ? _b : props.text);
    const onChange = (e) => {
      actions.setProp((prop) => {
        console.log(prop,props)
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
    return enabled ?  React.createElement("p", {
      ref: (ref) => connectors.connect(ref),
      contentEditable: true,
      suppressContentEditableWarning: true,
      textStyle:props.textStyle,
     style:{color:props.color,
      fontSize:props.fontsize,
      fontWeight:props.fontweight,
      lineHeight:props.lineheight},
      as:props.as,
      onClick,
      onInput: onChange
    }, text) :  React.createElement("p", {
      className: props.className,
      text:props.text,
      textStyle:props.textStyle,
      fontWeight:props.fontWeight,
      lineHeight:props.lineHeight,
      fontSize:props.fontsize,
      color:props.color,
      as:props.as,
      style: __spreadValues$5({}, props)
    }, text);
  }
  
  Paragraph.craft={
    displayName:"Paragraph",
    props:{},
    rules:{},
    related:{settings:ParagraphSettings}
  }