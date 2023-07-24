import { useNode ,useEditor} from "@craftjs/core";
import { useContext ,useRef,useState,useEffect} from "react";
import { ThemeContext } from "../context/builder-context";
import containerSetting from "../settings/containerSettings";
import TextEditor from "../settings/textSettings";
import HeadingEditor from "../settings/headingSettings";
import Child from "./childResolver";
import React from "react"
import { __spreadValues$5 } from "../functions";


export const Container = ({ children }) => {
    const { connectors } = useNode();
    return (
      <div
        ref={(ref) => connectors.connect(ref)}
        style={{ width: "100%", minHeight: "800px" }}
        className="bg-wheate shadow-2xl"
      >
        {children}
      </div>
    );
};

Container.craft = {
  displayName: "Container",
  props: {},
  rules: {
    canDrag: () => true
  },
  related: {}
};


export  const Component = ({ root }) => {
    const { connectors, node } = useNode((node2) => ({ node: node2 }));
    const {isView,setView,currnetComponent,setCurrentComponent}=useContext(ThemeContext)
    const containerRef=useRef(null)
    const { setProp, fontSize } = useNode((node) => ({
      fontSize: node.data.props.fontSize
    }));
  
    useEffect(()=>{
      containerRef.current=node.dom
    })
  
    return  React.createElement("div", {
      id: node.data.props.id,
      ref: (ref) => connectors.connect(ref)
    },  React.createElement(Child, {
      root
    }));
  };

  Component.craft={
    displayName:"Component",
    props:{},
    rules:{canDrag:()=>true},
    related:{}
  }

export var Text = (props) => {
    var _a, _b;
    const { node, connectors, actions } = useNode((node2) => ({ node: node2 }));
    const { enabled } = useEditor((state) => ({ enabled: state.options.enabled }));
    const [text] = useState((_b = (_a = node.data.props[props.id]) == null ? void 0 : _a.text) != null ? _b : props.text);
    const { setProp, fontSize } = useNode((node) => ({
      fontSize: node.data.props.fontSize
    }));
    const onChange = (e) => {
      actions.setProp((prop) => {
        console.log(prop,props,prop[props.id])
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
    }, text) :  React.createElement("span", {
      className: props.className,
      style: __spreadValues$5({}, props)
    }, text);
};

Text.craft = {
  displayName: "Text",
  props: {
    text: ""
  },
  rules: {},
  related: {settings: TextEditor}
};

export var Heading = (props) => {
  var _a, _b;
  const { node, connectors, actions } = useNode((node2) => ({ node: node2 }));
  const { enabled } = useEditor((state) => ({ enabled: state.options.enabled }));
  const [text] = useState((_b = (_a = node.data.props[props.id]) == null ? void 0 : _a.text) != null ? _b : props.text);
  
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
  return enabled ? React.createElement(props.size, {
    ref: (ref) => connectors.connect(ref),
    contentEditable: true,
    suppressContentEditableWarning: true,
    className: props.className,
    style:{color:props.color,
      fontSize:props.fontSize,
      fontWeight:props.fontWeight,
      lineHeight:props.lineHeight,},
    onClick,
    onInput: onChange
  }, text):  React.createElement(props.size, {
    className: props.className,
    color:props.color,
    fontSize:props.fontSize,
    lineHeight:props.lineHeight,
    fontWeight:props.fontWeight,
    style: __spreadValues$5({}, props)
  }, text);
};

Heading.craft = {
  displayName: "Heading",
  props: {
    text: ""
  },
  related: {settings:HeadingEditor}
};
