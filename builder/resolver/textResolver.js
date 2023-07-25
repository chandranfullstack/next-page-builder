import { useNode,useEditor } from "@craftjs/core";
import { useState } from "react";
import React from "react"
import TextEditor from "../settings/textSettings";
import AppText from "../../client-components/AppText/AppText";


var APPText = (props) => {
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
  displayName: "Text",
  props: {
    text: "",
  },
  related: {settings:TextEditor}
};

export default APPText