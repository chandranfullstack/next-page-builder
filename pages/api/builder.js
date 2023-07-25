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
var grapesjs =require("grapesjs")
import { background, chakra } from '@chakra-ui/react';
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
import {Layers} from "@craftjs/layers"
import {useLayer} from "@craftjs/layers"
import { useEffect ,useCallback,useState,useRef,useContext} from 'react';
import { textStyle } from '../../themes/textStyle';


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

var React__default = _interopDefaultLegacy(React);
var Tooltip__namespace = _interopNamespace(Tooltip);
var CheckIcon__default = _interopDefaultLegacy(CheckIcon);
var PencilSquareIcon__default = _interopDefaultLegacy(PencilSquareIcon);
var ArrowUturnLeftIcon__default = _interopDefaultLegacy(ArrowUturnLeftIcon);
var ArrowUturnRightIcon__default = _interopDefaultLegacy(ArrowUturnRightIcon);
var ChevronDownIcon__default = _interopDefaultLegacy(ChevronDownIcon);
var SelectPrimitive__namespace = _interopNamespace(SelectPrimitive);
var cx__default = _interopDefaultLegacy(cx);
var Squares2X2Icon__default = _interopDefaultLegacy(Squares2X2Icon);
var ArrowSmallUpIcon__default = _interopDefaultLegacy(ArrowSmallUpIcon);
var ReactDOM__default = _interopDefaultLegacy(ReactDOM);
var DialogPrimitive__namespace = _interopNamespace(DialogPrimitive);
var XMarkIcon__default = _interopDefaultLegacy(XMarkIcon);
var TrashIcon__default = _interopDefaultLegacy(TrashIcon);
var HashtagIcon__default = _interopDefaultLegacy(HashtagIcon);
var PhotoIcon__default = _interopDefaultLegacy(PhotoIcon);
var LinkIcon__default = _interopDefaultLegacy(LinkIcon);
var CircleStackIcon__default = _interopDefaultLegacy(CircleStackIcon);
var ArrowsPointingOutIcon__default = _interopDefaultLegacy(ArrowsPointingOutIcon);
var PlusOutIcon__default = _interopDefaultLegacy(Plus);
var CloseIcon__default = _interopDefaultLegacy(CloseIcon);
var ListIcon__default=_interopDefaultLegacy(ListIcon)



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
  const { setProp, fontSize } = core.useNode((node) => ({
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

const TextEditor = () => {
  const {prop, props1,actions,node ,color,connectors} = core.useNode(node => ({
    prop: node.data.props,
    props1:node.data,
    node:node,
    color:node.data.props.color
  }));
  //console.log(props,props1)
  const { enabled,state } = core.useEditor((state) => ({ enabled: state.options.enabled ,state:state}));
  //console.log(props,"props",node)
  //const [textStyle, setTextStyle] = useState({
  //  color: '#333',
  //  fontSize: '16px',
  //  fontFamily: 'Arial, sans-serif',
  //  fontWeight: 'normal',
  //});
  const [styleKeys,setStyleKeys]=useState([])
  const [currentStyle,setCurrentStyle]=useState(null)
  useEffect(()=>{
    if(styleKeys.length!==Object.keys(textStyle).length){
      for (const key in textStyle) {
        styleKeys.push(key)
        setCurrentStyle(textStyle[prop.textStyle])
      }
    }
  },[styleKeys])
  //console.log(styleKeys,"styleKeys")
  const handleTextChange=(e)=>{
    console.log(e.target.value,"text value",enabled)
    actions.setProp((props) => {
      props.text=e.target.value  
      console.log(props.text,prop.text)
    },500);
  }

  const handleColorChange = (e) => {
    const  color= e.target.value
    console.log(color,state.nodes,state,connectors)
    actions.setProp((props)=>{ 
      //props.color=color
      //if(!props[prop.id]){
      //  prop[props.id] = {};
      //  prop[props.id].color = color
      //}
      props.color=color
      console.log(props,props.color,props[prop.id])
    })
  };
 //console.log(currentStyle,"currentStyle")
  const handleFontSizeChange = (e) => {
      const fontSize= e.target.value + 'px'
      console.log(fontSize,"fontZixe",prop.fontSize)
      actions.setProp((props)=>{
        console.log(props,props.fontsize)
        props.fontsize=fontSize
        console.log(prop,"prop")
         //props.fontsize=fontSize
      })
  };


  const handleFontWeightChange = (e) => {
    console.log(e.target.value)
    actions.setProp((props)=>{
      props.fontWeight=e.target.value
      console.log(props,"props weight",props.fontWeight,prop)
    })
  };
   
  const handleLineHeightChange=(e)=>{
    console.log(prop)
    actions.setProp((props)=>{
      props.lineHeight=e.target.value + "px"
      console.log(props.lineHeight,props,"line height",prop)
    })
  }

  const handleStyleChange=(e)=>{
    console.log(e.target.value)
    setCurrentStyle(textStyle[e.target.value])
    actions.setProp((prop)=>{
      prop.textStyle=e.target.value
    })
  }
  // const handleFontWeightChange = (e) => {
  //   console.log(e.target.value)
  //   actions.setProp((props)=>{
  //     props.fontweight=e.target.value
  //     console.log(props,"props")
  //   })
  // };

  return (
    <div className=' flex flex-col w-44 justify-center items-center h-full'>
      <div className=' mt-2 pr-1 pl-1'>
      <label className=' text-base flex flex-col justify-center items-center' >
          Font Styles
          <select  
          onChange={handleStyleChange} 
          style={{color:"white"}} 
          className='border border-gray-300 text-gray-900 text-base block w-full rounded p-2 bg-gray-300'
          >
            <option selected value={prop.textStyle} style={{color:"rgb(235, 235, 235)",background:"#5E5E5E"}}>{prop.textStyle}</option>
            {
              styleKeys.map((l,index)=>
                <option value={l} key={index} className=' p-2 ' style={{color:"white",background:"#5E5E5E",padding:"8px"}}>{l}</option>
              )
            }
          </select>
          </label>
       {/* <label className='text-base'>
          Text
          <textarea
          class=" w-full text-gray-900 text-sm p-2 bg-gray-400"
          rows="4"
          defaultValue={prop.text} onInput={(e)=>handleTextChange(e)}></textarea> 
           <input type="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" defaultValue={prop.text} onChange={handleColorChange} />  
        </label> */}
        <label className=' text-base '>
          Color
          <input type="color" 
          defaultValue={prop.color===undefined?"#000000":prop.color}
          className="text-gray-900 text-sm block w-full rounded p-1" onChange={handleColorChange} />
        </label>
        <label className=' text-base '>
          Font Size
          <input
            type="text"
            defaultValue={currentStyle&&currentStyle.fontSize}
            onChange={handleFontSizeChange}
            style={{color:"white"}}
            readOnly
            className=' text-black text-sm  w-full rounded placeholder:p-2 p-2 bg-gray-400'
          />
        </label>
         <label className=' text-base '>
          Font Weight
          <input
            type="text"
            defaultValue={currentStyle&&currentStyle.fontWeight}
            onChange={handleFontWeightChange}
            style={{color:"white"}}
            readOnly
            className=' text-black text-sm  block w-full rounded bg-gray-400 p-2'
          />
        </label>
        <label className=' text-base '>
          Line height
          <input
            type="text"
            defaultValue={currentStyle&&currentStyle.lineHeight}
            onChange={handleLineHeightChange}
            style={{color:"white"}}
            readOnly
            className=' border border-gray-300 text-black text-sm rounded p-2 bg-gray-400 focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </label> 
      </div>
    </div>
  );
};


Text.craft = {
  displayName: "Text",
  props: {
    text: ""
  },
  rules: {},
  related: {settings: TextEditor}
};

const HeadingEditor=()=>{
  const {actions,prop}=core.useNode((node)=>({prop:node.data.props}))
  const [Headings,setHeadings]=useState(["h1","h2","h3","h4","h5","h6"])
  const [currentHead,setCurrentHead]=useState([prop.size])
  const handleColorChange=(e)=>{
    actions.setProp((props)=>{
    console.log(prop.color,e.target.value,props)
    props.color=e.target.value
    console.log(prop.color,e.target.value)
    },500)
  }

  const handleFontSize=(e)=>{
     const fontSize=e.target.value+"px"
     actions.setProp((props)=>{
      props.fontSize=fontSize
      console.log(props.fontSize,fontSize)
     },500)
  }

  const handleHeading=(i)=>{
    console.log(i,"heading",prop.size)
    setCurrentHead(i)
    actions.setProp((props)=>{
      props.size=i
      console.log(props.size,currentHead)
    },500)
  }
    
     return(
      <div>
        <div className=' flex flex-col w-44 justify-center items-center h-full'>
      <div className=' mt-2 pr-1 pl-1'>
        <label className=' text-base '>
          Color
          <input type="color" 
          defaultValue={prop.color===undefined?"black":prop.color}
          className="text-gray-900 text-sm block w-full rounded p-1" onChange={handleColorChange} />
        </label>
        <label className=' text-base '>
          Font Size
          <input
            type="number"
            onChange={handleFontSize}
            defaultValue={prop.fontSize}
            style={{color:"black"}}
            className=' text-black text-sm  w-full rounded placeholder:p-2 p-2 bg-gray-400'
          />
        </label>
        <div className=' flex w-full flex-col col-span-6 h-7 mt-2' style={{height:"28px"}}>
          <div className=' flex justify-between h-full'>
               {
                Headings.map((i,index)=>
                <span key={index} selected={prop.size} className=' h-full flex justify-center items-center cursor-pointer' style={{background:prop.size===i||currentHead===i?"#2B2B2":"#5E5E5E",width:"30px",}} onClick={()=>handleHeading(i)}>{i}</span>
                )
               }
          </div>
        </div>
        <div id="font-list" data-fonts=""></div>
      </div>
    </div>
      </div>
     )
}

var Heading = (props) => {
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




var APPText = (props) => {
  var _a, _b;
  const { node, connectors, actions } = core.useNode((node2) => ({ node: node2 }));
  const { enabled } = core.useEditor((state) => ({ enabled: state.options.enabled }));
  const [text] = React.useState((_b = (_a = node.data.props[props.id]) == null ? void 0 : _a.text) != null ? _b : props.text);
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
const Button = ({ r, d, i, propId ,color,background,width,height,borderRadius}) => {
  const { node } = core.useNode((node2) => ({ node: node2 }));
  const { enabled } = core.useEditor((state) => ({ enabled: state.options.enabled }));
  const { connectors } = core.useNode((node2) => ({ node: node2 }));
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

const DefaultProps={
   background:"",
   color:"",
   fontSize:"",
   fontWeight:""
}

const DefaultButtonSettings=()=>{
  const {actions,prop}=core.useNode((node)=>({prop:node.data.props}))
  const handleColor=(e)=>{
      console.log(e.target.value)
      actions.setProp((props)=>{
        props.color=e.target.value
        console.log(props.color,props,prop)
      },500)
  }

  const handleBackground=(e)=>{
    const background=e.target.value
    actions.setProp((props)=>{
      props.background=background
    },500)}

  const handleWidth=(e)=>{
    const width=e.target.value+"px"
    actions.setProp((props)=>{
      props.width=width
    },500)
  }

   const handleHeight=(e)=>{
     const height=e.target.value+"px"
     actions.setProp((props)=>{
      props.height=height
     },500)
   }
  
  return(
    <div className=' flex flex-row w-48 mt-2'>
    <div className='w-full p-2'>
      <label className="text-sm">
        color
        <input 
        type="color" 
        style={{color:"black",border:"1px solid gray"}} 
        defaultValue={prop.color} 
        className="text-black w-full" 
        onChange={handleColor}
        />
      </label>
      <label className='text-sm'>
        background
        <input 
        type='color'
        onChange={handleBackground}
        defaultValue={prop.background}
        style={{color:"black",border:"1px solid gray"}}
        className="w-full"
        />
      </label>
      <lable className="text-sm">
        width
        <input 
        type='number'
        onChange={handleWidth}
        min={50}
        max={200}
        defaultValue={prop.width.slice(0,-2)}
        style={{color:"black",border:"1px solid gray"}}
        className="w-full"
        />
      </lable>
      <lable className="text-sm">
        height
        <input 
        type='number'
        onChange={handleHeight}
        defaultValue={prop.height.slice(0,-2)}
        style={{color:"black",border:"1px solid gray"}}
        className="w-full"
        />
      </lable>
    </div>
    </div>
  )
}

Button.craft = {
  displayName: "Button",
  props: DefaultProps,
  rules: {
    canDrag: () => true
  },
  related: {settings:DefaultButtonSettings}
};

const ButtonSettings=()=>{
    const {actions}=core.useNode()
    const [colors,setColor]=useState(["gray","red","orange","yellow","green","teal","blue","cyan","purple","pink","linkedin"])

    const handleColors=(e)=>{
      console.log("color",e.target.innerText)
      e.preventDefault()
      e.stopPropagation()
      actions.setProp((props)=>{
        props.colorScheme=e.target.innerText
        console.log(props.colorScheme,"variant",props)
      },500)
    }

    return(
        <div className=' flex w-48 flex-col  mt-2 items-center align-baseline'>
          <div className=' justify-between h-full'>
               {
                colors.map((i,index)=>
                <p key={index} load={false} className=' h-full flex justify-center items-center cursor-pointer w-full px-5 py-3' value={i} style={{background:i}} onClick={(e)=>handleColors(e)}>{i}</p>
                )
               }
          </div>
          </div>
    )
}

const ButtonResolver = ({ r, d, i, propId }) => {
  const { node } = core.useNode((node2) => ({ node: node2 }));
  const { enabled } = core.useEditor((state) => ({ enabled: state.options.enabled }));
  const { connectors } = core.useNode((node2) => ({ node: node2 }));
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

const ParagraphSettings=()=>{
      const {actions,prop}=core.useNode((node)=>({prop:node.data.props}))

      const handleColorChange=(e)=>{
        actions.setProp((props)=>{
          props.color=e.target.value
        },500)
      }

      const handleFontSize=(e)=>{
        const fontsize=e.target.value+"px"
        actions.setProp((props)=>{
         props.fontsize=fontsize
        },500)
      }

      const handleFontWeight=(e)=>{
        actions.setProp((props)=>{
          props.fontweight=e.target.value
        },500)
      }

      const handleLineHeight=(e)=>{
        const lineheight=e.target.value+"px"
        actions.setProp((props)=>{props.lineheight=lineheight},500)
      }

return(
      <div>
      <div className=' flex flex-col w-44 justify-center items-center h-full'>
      <div className=' mt-2 pr-1 pl-1'>
        <label className=' text-base '>
          Color
          <input type="color" 
          defaultValue={prop.color===undefined?"black":prop.color}
          className="text-gray-900 text-sm block w-full rounded p-1" onChange={handleColorChange} />
        </label>
        <label className=' text-base '>
          Font Size
          <input
            type="number"
            onChange={handleFontSize}
            defaultValue={prop.fontsize.slice(0,-2)}
            style={{color:"black"}}
            className=' text-black text-sm  w-full rounded placeholder:p-2 p-2 bg-gray-400'
          />
        </label>
        <label className=' text-base '>
          Font Weight
          <input
            type="number"
            onChange={handleFontWeight}
            defaultValue={prop.fontweight}
            style={{color:"black"}}
            className=' text-black text-sm  w-full rounded placeholder:p-2 p-2 bg-gray-400'
          />
        </label>
        <label className=' text-base '>
          Line height
          <input
            type="number"
            onChange={handleLineHeight}
            defaultValue={prop.lineheight.slice(0,-2)}
            style={{color:"black"}}
            className=' text-black text-sm  w-full rounded placeholder:p-2 p-2 bg-gray-400'
          />
        </label>
      </div>
    </div>
      </div>
      )
}

const Paragraph=(props)=>{
  var _a, _b;
  const { node, connectors, actions } = core.useNode((node2) => ({ node: node2 }));
  const { enabled } = core.useEditor((state) => ({ enabled: state.options.enabled }));
  const [text] = React.useState((_b = (_a = node.data.props[props.id]) == null ? void 0 : _a.text) != null ? _b : props.text);
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

const containerSetting=()=>{
  const {actions}=core.useNode()
  const handleColor=(e)=>{
    console.log(e.target.value)
    actions.setCustom((props)=>props.background=e.target.value)
  }
  return(
    <div className=' flex  w-48 h-full'>
      <div className='flex flex-col'>
       <label>
         Gap
         <input 
         type="number" 
         style={{color:"black"}}
         className=' text-black text-sm  w-full rounded placeholder:p-2 p-2 bg-gray-400'
         />
       </label>
       </div>
       <div>
         <label>
           direction
           <input value={"Row"}  style={{color:"black"}}
            className=' text-black text-sm  w-full rounded placeholder:p-2 p-2 bg-gray-400' />
           <input value={"Column"}  style={{color:"black"}}
            className=' text-black text-sm  w-full rounded placeholder:p-2 p-2 bg-gray-400' />
         </label>
       </div>
       <div>
         <label>
            Coloumns
          <input type="button" title='+'  style={{color:"black"}}
            className=' text-black text-sm  w-full rounded placeholder:p-2 p-2 bg-gray-400' />
         </label>
       </div>
       <div>
        <lable>
          Rows
          <input type='button' title='+'  style={{color:"black"}}
            className=' text-black text-sm  w-full rounded placeholder:p-2 p-2 bg-gray-400' />
        </lable>
       </div>
    </div>
  )
}

const Container1 = ({ children }) => {
  const { connectors } = core.useNode();
  const { selected } = core.useEditor((state) => {
    const [currentNodeId] = state.events.selected;
    let selected;

    if ( currentNodeId ) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings
      };
    }
    //console.log(selected,":selected",state.nodes[currentNodeId],"node:",node)
    return {
      selected
    }
  });
  
  return (
    <div
      ref={(ref) => connectors.connect(ref)}
      style={{ width: "100%", minHeight: "400px" ,border:"1px solid black"}}
      className="bg-wheate grid grid-flow-col grid-cols-3"
    >
      {children}
    </div>
  );
};

Container1.craft={
  displayName:"Container",
  props:{},
  rules:{
    canDrag:()=>true
  },
  related:{setting:containerSetting}
}

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
        }));else if (r.tagName === "HEADING1")
        return  React.createElement(core.Element, {
          className: r.classNames,
          is:Heading,
          text:r.innerText,
          size:r.attrs.size,
          color:"",
          fontSize:"",
          fontWeight:"",
          lineHeight:"",
          id:key,
          key
        })
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
        }, attrsR));else if (r.tagName === "PARAGRAPH")
        return  React.createElement(core.Element, {
          is: Paragraph,
          key,
          r,
          d,
          i,
          text:attrsR.text,
          color:attrsR.color,
          background:attrsR.background,
          width:attrsR.width,
          height:attrsR.height,
          borderRadius:attrsR.borderradius,
          fontsize:attrsR.fontsize,
          fontweight:attrsR.fontweight,
          lineheight:attrsR.lineheight,
          id: key,
          propId: key
        });
      else if (r.tagName === "BUTTON")
        return  React.createElement(core.Element, {
          is: Button,
          key,
          r,
          d,
          i,
          color:attrsR.color,
          background:attrsR.background,
          width:attrsR.width,
          height:attrsR.height,
          borderRadius:attrsR.borderradius,
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
        }))}else if(r.tagName==="CONTAINER"){
        return React.createElement(core.Element,{
          is:Container1,
          width:attrsR.width,
          height:attrsR.height,
          border:attrsR.border,
          canvas:true,
          children:[],
          id:key,key
        },React.createElement(Child, {
          root: r,
          d: d.concat(i)
        }))}else if (r.tagName === "APPBOX"){
      return  React.createElement(AppBox, {
        props:r.attrs, 
        backgroundColor:r.attrs.backgroundColor,
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
              return  React.createElement(core.Element, {
                is:ButtonResolver,
                id:key,
                r:r,
                d:d,
                i:i,
                variant:r.attrs.variant,
                colorScheme:r.attrs.colorscheme,
                propId:key,
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
  const {isView,setView,currnetComponent,setCurrentComponent}=useContext(ThemeContext)
  const containerRef=React.useRef(null)
  const { setProp, fontSize } = core.useNode((node) => ({
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

const defaultProps = {
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  fillSpace: 'no',
  padding: ['0', '0', '0', '0'],
  margin: ['0', '0', '0', '0'],
  background:"",
  color: { r: 0, g: 0, b: 0, a: 1 },
  shadow: 0,
  radius: 0,
  width: '100%',
  height: 'auto',
};

Component.craft={
  displayName:"Component",
  props:{},
  rules:{canDrag:()=>true},
  related:{}
}

//const Container = ({ children }) => {
//  const { connectors } = core.useNode();
//  return  React.createElement("div", {
//    ref: (ref) => connectors.connect(ref),
//    style: { width: "100%", minHeight: "800px" },
//    className: "bg-wheate shadow-2xl"
//  }, children);
//};



const Container = ({ children }) => {
  const { connectors } = core.useNode();
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
  Heading,
  Child,
  Link,
  Button,
  Image,
  Svg,
  APPText,
  ButtonResolver,
  Container1,
  Paragraph
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
  const [currnetComponent,setCurrentComponent]=useState(null)
  const [openLink, setOpenLink] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  const [openButton, setOpenButton] = useState(false);
  const [openHash, setOpenHash] = useState(false);
  const [openSvg, setOpenSvg] = useState(false);
  const [openText,setOpenText]=useState(false)


  const themeNames = themes.map((t) => t.name);
  React.useEffect(() => {
    updateIndex(0);
    //localStorage.setItem("currentPage","home")
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
    setPageChange,
    currnetComponent,
    setCurrentComponent,
    openLink,
    setOpenLink,
    openImage,
    setOpenImage,
    openButton,
    setOpenButton,
    openHash,
    setOpenHash,
    openSvg,
    setOpenSvg
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

//const Select = ({ defaultValue, values, onChange ,open,setOpen}) => {
//  
//
//  return (
//    <SelectPrimitive.Root defaultValue={defaultValue} onValueChange={onChange} open={open} onOpenChange={(e) => setOpen(e)}>
//      <SelectPrimitive.Content  className="z-50 top-2">
//        <SelectPrimitive.Viewport className="bg-white p-2 rounded-lg shadow-lg">
//          <SelectPrimitive.Group>
//            {values.map((f, i) => (
//              <SelectPrimitive.Item
//                key={i}
//                value={f}
//                className={cx__default('relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 font-medium', 'hover:opacity-70 cursor-pointer select-none')}
//              >
//                <SelectPrimitive.ItemText>{f}</SelectPrimitive.ItemText>
//                <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
//                  <CheckIcon__default />
//                </SelectPrimitive.ItemIndicator>
//              </SelectPrimitive.Item>
//            ))}
//          </SelectPrimitive.Group>
//        </SelectPrimitive.Viewport>
//      </SelectPrimitive.Content>
//    </SelectPrimitive.Root>
//  );
//};
//

// const Header = () => {
//   const { state, query, actions } = core.useEditor((state2, query2) => ({ state: state2, query: query2 }));
//   const { updateIndex, themeNames, themeIndex ,currentPage} = React.useContext(ThemeContext);
//   const [selectOpen, setSelectOpen] = React.useState(false);
//   const enabled = state.options.enabled;
//   const onChange = (name) => {
//     updateIndex(themeNames.indexOf(name));
//   };
//   const togglePreview = () => {
//     actions.setOptions((o) => o.enabled = !enabled);
//   };
//   return  React.createElement("div", {
//     className: "transition w-full bg-gray-300"
//   },  React.createElement("div", {
//     className: "flex px-4 py-2 justify-end"
//   }, enabled &&  React.createElement("div", {
//     className: "flex-1 flex"
//   },  React.createElement(SimpleTooltip, {
//     text: "Undo",
//     side: "bottom",
//     offset: 4
//   },  React.createElement("a", {
//     className: ` ${query.history.canUndo() ? "hover:opacity-50 cursor-pointer" : "opacity-50 cursor-not-allowed"} p-2`,
//     onClick: actions.history.undo
//   },  React.createElement(ArrowUturnLeftIcon__default["default"], {
//     className: "h-4"
//   }))),  React.createElement(SimpleTooltip, {
//     text: "Redo",
//     side: "bottom",
//     offset: 4
//   },  React.createElement("a", {
//     className: ` ${query.history.canRedo() ? "hover:opacity-50 cursor-pointer" : "opacity-50 cursor-not-allowed"} p-2`,
//     onClick: actions.history.redo
//   },  React.createElement(ArrowUturnRightIcon__default["default"], {
//     className: "h-4"
//   }))),  React.createElement("div", {
//     className: "mr-auto ml-auto"
//   },  React.createElement("div", {
//     className: "flex rounded py-2 px-4 transition cursor-pointer items-center justify-center mr-auto ml-auto",
//     onClick: () => setSelectOpen(true)
//   }, themeNames[themeIndex],  React.createElement(ChevronDownIcon__default["default"], {
//     className: "h-4 ml-2"
//   })),  React.createElement(Select, {
//     defaultValue: themeNames[themeIndex],
//     values: themeNames,
//     open: selectOpen,
//     setOpen: setSelectOpen,
//     onChange
//   }))), React.createElement("div",{
//     className:"bg-gray-300 py-2 px-6 bg-gray-600 text-white"
//   },React.createElement("a",{
//     href:"/page-list"
//   },"Back")),
//    React.createElement("div", {
//     className: "flex"
//   }, enabled ?  React.createElement("a", {
//     className: "flex bg-green-600 text-white rounded py-2 px-4 transition cursor-pointer items-center",
//     onClick: togglePreview
//   },  React.createElement(CheckIcon__default["default"], {
//     className: "h-4  mr-2"
//   }), " Finish Editing") :  React.createElement("a", {
//     className: "flex bg-primary text-white rounded py-2 px-4 transition cursor-pointer items-center",
//     onClick: togglePreview
//   },  React.createElement(PencilSquareIcon__default["default"], {
//     className: "h-4 w-4 mr-2"
//   }), " Edit"))));
// };

const Header = () => {
  const { state, query, actions } = core.useEditor((state2, query2) => ({ state: state2, query: query2 }));
  const { updateIndex, themeNames, themeIndex, currentPage } = useContext(ThemeContext);
  const [selectOpen, setSelectOpen] = useState(false);
  const enabled = state.options.enabled;

  const onChange = (name) => {
    updateIndex(themeNames.indexOf(name));
  };

  const togglePreview = () => {
    actions.setOptions((o) => o.enabled = !enabled);
  };

  return (
    <div className="transition w-full bg-gray-300">
      <div className="flex px-4 py-2 justify-end">
        {enabled && (
          <div className="flex-1 flex">
            <SimpleTooltip text="Undo" side="bottom" offset={4}>
              <a
                className={`${
                  query.history.canUndo() ? 'hover:opacity-50 cursor-pointer' : 'opacity-50 cursor-not-allowed'
                } p-2`}
                onClick={actions.history.undo}
              >
                <ArrowUturnLeftIcon className="h-4" />
              </a>
            </SimpleTooltip>
            <SimpleTooltip text="Redo" side="bottom" offset={4}>
              <a
                className={`${
                  query.history.canRedo() ? 'hover:opacity-50 cursor-pointer' : 'opacity-50 cursor-not-allowed'
                } p-2`}
                onClick={actions.history.redo}
              >
                <ArrowUturnRightIcon className="h-4" />
              </a>
            </SimpleTooltip>
            <div className="mr-auto ml-auto">
              <div
                className="flex rounded py-2 px-4 transition cursor-pointer items-center justify-center mr-auto ml-auto"
                onClick={() => setSelectOpen(true)}
              >
                {themeNames[themeIndex]}
                <ChevronDownIcon className="h-4 ml-2" />
              </div>
              <Select defaultValue={themeNames[themeIndex]} values={themeNames} open={selectOpen} setOpen={setSelectOpen} onChange={onChange} />
            </div>
          </div>
        )}
      <div className="bg-gray-600 py-2 px-6  text-white">
        <a href="/page-list">Back</a>
      </div>
      <div className="flex">
        {enabled ? (
          <a
            className="flex bg-green-600 text-white rounded py-2 px-4 transition cursor-pointer items-center"
            onClick={togglePreview}
          >
            <CheckIcon className="h-4  mr-2" />
            Finish Editing
          </a>
        ) : (
          <a
            className="flex bg-primary text-white rounded py-2 px-4 transition cursor-pointer items-center"
            onClick={togglePreview}
          >
            <PencilSquareIcon className="h-4 w-4 mr-2" />
            Edit
          </a>
        )}
      </div>
    </div>
    </div>
  );
};


// const SidebarItem = ({ visible, title, children, onChange }) => {
//   return  React.createElement("div", {
//     className: "flex flex-col w-full"
//   },  React.createElement("div", {
//     onClick: () => {
//       if (onChange)
//         onChange(!visible);
//     },
//     className: `h-12 cursor-pointer bg-white border-b last:border-b-0 flex items-center px-2 ${visible ? "shadow-sm" : ""}`
//   },  React.createElement("div", {
//     className: "flex-1 flex items-center"
//   },  React.createElement(Squares2X2Icon__default["default"], {
//     className: "h-4  ml-2 mr-4"
//   }), " ",  React.createElement("h2", {
//     className: "text-xs uppercase"
//   }, title)),  React.createElement("a", {
//     style: { transform: `rotate(${visible ? 180 : 0}deg)` }
//   },  React.createElement(ArrowSmallUpIcon__default["default"], {
//     className: "h-4"
//   }))), visible ?  React.createElement("div", {
//     className: "w-full flex-1 overflow-auto"
//   }, children) : null);
// };


const SidebarItem = ({ visible, title, children, onChange }) => {
  const handleClick = () => {
    if (onChange) {
      onChange(!visible);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div
        onClick={handleClick}
        className={`h-12 cursor-pointer bg-white border-b last:border-b-0 flex items-center px-2 ${visible ? 'shadow-sm' : ''}`}
      >
        <div className="flex-1 flex items-center">
          <Squares2X2Icon className="h-4 ml-2 mr-4" />
          <h2 className="text-xs uppercase">{title}</h2>
        </div>
        <a style={{ transform: `rotate(${visible ? 180 : 0}deg)` }}>
          <ArrowSmallUpIcon className="h-4" />
        </a>
      </div>
      {visible && (
        <div className="w-full flex-1 overflow-auto">{children}</div>
      )}
    </div>
  );
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


//const Item = ({ connectors, c }) => {
//  const { standalone } = useContext(ThemeContext);
//  const ref = useRef(null);
//
//
//  return (
//    <div ref={ref}>
//      <SimpleTooltip text={c.displayName} side="right" offset={12}>
//        <a className="cursor-move m-2 pb-2  block">
//          <img
//            src={getImageUrl(standalone, `/public/${c.themeFolder}/${c.blockFolder}/preview.png`)}
//            width="600px"
//            height="300px"
//            alt="Preview"
//          />
//        </a>
//      </SimpleTooltip>
//    </div>
//  );
//};

// const Sidebar = () => {
//   const { components, categories } = React.useContext(ThemeContext);
//   const { enabled, connectors } = core.useEditor(({ options }) => ({ enabled: options.enabled }));
//   const [toolbarVisible, setToolbarVisible] = React.useState([]);
//   React.useEffect(() => {
//     const v = Array.from({ length: categories.length }, (_, i) => i === 0);
//     setToolbarVisible(v);
//   }, [categories]);
//   const toggleToolbar = (index) => {
//     setToolbarVisible((t) => t.map((c, i) => i === index ? !c : c));
//   };
//   return  React.createElement("div", {
//     className: `toolbox h-full flex flex-col bg-white ${enabled ? "w-48" : "w-0 opacity-0"} fixed`,
//     style: { transition: "0.4s cubic-bezier(0.19, 1, 0.22, 1)" }
//   },  React.createElement("div", {
//     className: "flex flex-1 flex-col items-center pt-3 overflow-scroll hide-scrollbars"
//   }, categories.map((b, j) =>  React.createElement(Category, {
//     key: j,
//     title: b,
//     visible: toolbarVisible[j],
//     onChange: () => toggleToolbar(j)
//   }, components == null ? void 0 : components.filter((c) => c.category === b).map((c, i) =>  React.createElement(Item, {
//     connectors,
//     c,
//     key: i
//   }))))));
// };

const Sidebar = () => {
  const { components, categories } = React.useContext(ThemeContext);
  const { enabled, connectors } = core.useEditor(({ options }) => ({ enabled: options.enabled }));
  const [toolbarVisible, setToolbarVisible] = useState([]);

  useEffect(() => {
    const v = Array.from({ length: categories.length }, (_, i) => i === 0);
    setToolbarVisible(v);
  }, [categories]);

  const toggleToolbar = (index) => {
    setToolbarVisible((t) => t.map((c, i) => (i === index ? !c : c)));
  };

  return (
    <div
      className={`toolbox h-full flex flex-col bg-white ${enabled ? 'w-48' : 'w-0 opacity-0'} fixed section`}
      style={{ transition: '0.4s cubic-bezier(0.19, 1, 0.22, 1)' }} id='section1'
    >
      <div className="flex flex-1 flex-col items-center pt-3 overflow-scroll hide-scrollbars">
        {categories.map((b, j) => (
          <Category key={j} title={b} visible={toolbarVisible[j]} onChange={() => toggleToolbar(j)}>
            {components &&
              components
                .filter((c) => c.category === b)
                .map((c, i) => (
                  <Item connectors={connectors} c={c} key={i} />
                ))}
          </Category>
        ))}
      </div>
    </div>
  );
};






<<<<<<< HEAD
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
=======
const CustomizeOptions = () => {
  const {isView,setView,openLink,openHash,openButton,openSvg} = React.useContext(ThemeContext)
  const {dom}=core.useEditor()
  const handleOptions = () => {
    setView(!isView);
  };
>>>>>>> 0ed0e6d0adc88763d66ecdf4d5b727103cc25ff2

  
  

  return (
    <div>
      <div onClick={handleOptions}>
        <div className="bg-gray-600 text-white flex flex-row px-4 py-3 justify-evenly cursor-pointer w-48" style={{ padding: '4px 10px 4px 10px' }}>
          Customize
          {/* <ChevronDownIcon className={`h-4 ml-2 ${isView ? 'transform rotate-180' : ''}`} /> */}
        </div>
      </div>
      {isView && (
        <div className="text-white w-48">
          
        </div>
      )}
    </div>
  );
};

const LayerSide = () => {
  const { enabled } = core.useEditor(({ options }) => ({ enabled: options.enabled }));
  
  
  return (
    <div className={`${enabled ? 'w-48' : 'w-0 opacity-0'} section`} id='section3' style={{backgroundColor:"#2B2B2B"}}>
      <CustomizeOptions />
      <Layers />
      <div id="layer" className=' flex flex-col items-center justify-center'>
      </div>
    </div>
  );
};



// const Viewport = ({ children }) => {
//   const { connectors, actions ,enabled} = core.useEditor((state) => ({ enabled: state.options.enabled }));
  
  
//   React.useEffect(() => {
//     setTimeout(() => {
//       actions.setOptions((o) => o.enabled = true);
//     }, 200);
//   }, [actions.setOptions]);
//   return  React.createElement("div", {
//     className: "viewport"
//   },
//     React.createElement("div", {
//     className: "flex h-full overflow-hidden flex-row w-full"
//   },
//      React.createElement(Sidebar,{className:"fixed"}, null),  React.createElement("div", {
//      className: "page-container flex flex-1 h-full flex-col",
//      style:{marginLeft:`${enabled?"192px":"0px"}`}
//    }, 
//    React.createElement(Header, null),  React.createElement("div", {
//     className: "craftjs-renderer flex-1 h-full w-full transition pb-8 overflow-auto",
//     ref: (ref) => connectors.select(connectors.hover(ref, ""), "")
//   },  React.createElement("div", {
//     className: "relative flex-col flex items-center pt-8 justify-center ",
//     style: { margin: "auto",padding:"50px" }
//   }, children),  React.createElement("div", {
//     className: "flex items-center justify-center w-full pt-6 text-xs text-gray-400"
//   }, "Powered by", " ",React.createElement("a", {
//     className: "mx-1",
//     target: "_blank",
//     href: "https://craft.js.org/"
//   }, "Craft.js"), " ", "and", " ",  React.createElement("a", {
//     className: "mx-1",
//     target: "_blank",
//     href: "https://tailwindui.com/"
//   }, "Tailwind CSS")))),React.createElement(LayerSide,null)));
// };

const Viewport = ({ children }) => {
  const { connectors, actions ,enabled} = core.useEditor((state) => ({ enabled: state.options.enabled }));
  
  useEffect(() => {
    setTimeout(() => {
      actions.setOptions((o) => o.enabled = true);
    }, 200);
  }, [actions.setOptions]); 

  return (
    <div className="viewport">
      <div className="flex h-full overflow-hidden flex-row w-full">
        <Sidebar className="fixed" />
        <div className={`page-container flex flex-1 h-full flex-col section`} id="section1" style={{marginLeft:`${enabled ? '192px' : ''}`}}>
          <Header />
          <div
            className="craftjs-renderer flex-1 h-full w-full transition pb-8 overflow-auto"
            ref={(ref) => {
              connectors.select(connectors.hover(ref, ""), "")
            }}
          >
            <div className="relative flex-col flex items-center pt-8 justify-center" style={{ margin: 'auto', padding: '50px' }}>
              {children}
            </div>
            {/* <div className="flex items-center justify-center w-full pt-6 text-xs text-gray-400">
              Powered by{' '}
              <a className="mx-1" target="_blank" href="https://craft.js.org/">
                Craft.js
              </a>{' '}
              and{' '}
              <a className="mx-1" target="_blank" href="https://tailwindui.com/">
                Tailwind CSS
              </a>
            </div> */}
          </div>
        </div>
        <LayerSide />
      </div>
    </div>
  );
};

// const Dialog$4 = ({ open, setOpen, node, actions }) => {
//   var _a, _b, _c, _d;
//   const props = node.data.props;
//   const key = props.propId;
//   const [link, setLink] = React.useState((_c = (_a = node.data.props[key]) == null ? void 0 : _a.link) != null ? _c : (_b = node.dom) == null ? void 0 : _b.href);
//   const [newTab, setNewTab] = React.useState((_d = node.data.props[key]) == null ? void 0 : _d.newTab);
//   return  React.createElement(DialogPrimitive__namespace.Root, {
//     open,
//     onOpenChange: setOpen
//   },  React.createElement(DialogPrimitive__namespace.Portal, null,  React.createElement(DialogPrimitive__namespace.Overlay, null,  React.createElement(DialogPrimitive__namespace.Content, {
//     className: cx__default["default"]("fixed shadow bg-white rounded-lg p-4", "w-[95vw] max-w-md md:w-full", "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")
//   },  React.createElement(DialogPrimitive__namespace.Title, {
//     className: "text-sm font-medium text-gray-900 dark:text-gray-100"
//   }, "Update Link"),  React.createElement("div", {
//     className: "mt-8 mb-4"
//   },  React.createElement("div", null,  React.createElement("div", null,  React.createElement("div", {
//     className: "flex justify-center mb-4 flex-col"
//   },  React.createElement("input", {
//     type: "text",
//     className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4",
//     placeholder: "Eg. https://github.com/LiveDuo/destack",
//     defaultValue: link,
//     onChange: (e) => setLink(e.target.value)
//   }),  React.createElement("div", {
//     className: "flex items-center ml-4"
//   },  React.createElement("p", null, "Open in new tab"),  React.createElement("input", {
//     defaultChecked: newTab,
//     type: "checkbox",
//     onChange: (e) => setNewTab(e.target.checked),
//     className: "ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
//   })))))),  React.createElement("div", {
//     className: "mt-4 flex justify-end"
//   },  React.createElement(DialogPrimitive__namespace.Close, {
//     onClick: () => {
//       setOpen(false);
//       actions.setProp(node.id, (prop) => {
//         if (!prop[key])
//           prop[key] = {};
//         prop[key].link = link;
//         prop[key].newTab = newTab;
//       });
//     },
//     className: cx__default["default"]("inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium", "bg-blue-600 text-white hover:bg-blue-700 border border-transparent")
//   }, "Save")),  React.createElement(DialogPrimitive__namespace.Close, {
//     onClick: () => setOpen(false),
//     className: cx__default["default"]("absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1")
//   },  React.createElement(XMarkIcon__default["default"], {
//     className: "h-4 w-4 text-gray-500 hover:text-gray-700"
//   }))))));
// };


const Dialog$4 = ({ open, setOpen, node, actions }) => {
  var _a, _b, _c, _d;
  const props = node.data.props;
  const key = props.propId;
  const [link, setLink] = React.useState((_c = (_a = node.data.props[key]) == null ? void 0 : _a.link) != null ? _c : (_b = node.dom) == null ? void 0 : _b.href);
  const [newTab, setNewTab] = React.useState((_d = node.data.props[key]) == null ? void 0 : _d.newTab);

  const handleSave = () => {
    setOpen(false);
    actions.setProp(node.id, (prop) => {
      if (!prop[key]) prop[key] = {};
      prop[key].link = link;
      prop[key].newTab = newTab;
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4 w-[95vw] max-w-md md:w-full">
            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Update Link
            </div>
            <div className="mt-8 mb-4">
              <div>
                <div className="flex justify-center mb-4 flex-col">
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4"
                    placeholder="Eg. https://github.com/LiveDuo/destack"
                    defaultValue={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                  <div className="flex items-center ml-4">
                    <p>Open in new tab</p>
                    <input
                      type="checkbox"
                      defaultChecked={newTab}
                      onChange={(e) => setNewTab(e.target.checked)}
                      className="ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleSave}
                className="inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 border border-transparent"
              >
                Save
              </button>
            </div>
            <button
              onClick={handleClose}
              className="absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500 hover:text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// const Content = ({ url, text, setText, onUpload, onChange }) => {
//   const input = React.useRef(null);
//   return  React.createElement("div", {
//     className: "mt-4 mb-4"
//   }, !url ?  React.createElement("div", null,  React.createElement("div", {
//     className: "flex justify-center mt-8 mb-4"
//   },  React.createElement("input", {
//     ref: input,
//     type: "file",
//     onChange: onUpload,
//     style: { display: "none" }
//   }),  React.createElement("button", {
//     className: "rounded-md px-4 py-2 text-sm font-medium bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-700 hover:text-white border border-transparent",
//     onClick: () => {
//       var _a;
//       (_a = input.current) == null ? void 0 : _a.click();
//     }
//   }, "Upload")),  React.createElement("div", {
//     className: "flex justify-center mb-4"
//   }, "OR"),  React.createElement("div", {
//     className: "flex justify-center mb-4"
//   },  React.createElement("input", {
//     type: "text",
//     className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",
//     placeholder: "Eg. https://www.w3schools.com/html/pic_trulli.jpg",
//     onChange: (e) => setText(e.target.value)
//   }),  React.createElement("button", {
//     onClick: () => onChange(),
//     className: cx__default["default"]("rounded-md px-4 py-2 text-sm font-medium bg-transparent border", "text-blue-500 hover:opacity-50 border border-transparent", `${text !== "" ? "hover:opacity-50" : "opacity-50 cursor-not-allowed"}`),
//     disabled: text === ""
//   }, "Set"))) :  React.createElement("img", {
//     src: url
//   }));
// };


const Content = ({ url,text,setText, onUpload, onChange }) => {
  const input = useRef(null);
  //const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleUploadClick = () => {
    if (input.current) {
      input.current.click();
    }
  };

  const handleSetClick = () => {
    onChange();
  };

  return (
    <div className="mt-4 mb-4">
      {!url ? (
        <div>
          <div className="flex justify-center mt-8 mb-4">
            <input
              ref={input}
              type="file"
              onChange={onUpload}
              style={{ display: "none" }}
            />
            <button
              className="rounded-md px-4 py-2 text-sm font-medium bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-700 hover:text-white border border-transparent"
              onClick={handleUploadClick}
            >
              Upload
            </button>
          </div>
          <div className="flex justify-center mb-4">OR</div>
          <div className="flex justify-center mb-4">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Eg. https://www.w3schools.com/html/pic_trulli.jpg"
              onChange={handleInputChange}
            />
            <button
              onClick={handleSetClick}
              className={`rounded-md px-4 py-2 text-sm font-medium bg-transparent border text-blue-500 hover:opacity-50 border border-transparent ${
                text !== "" ? "hover:opacity-50" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={text === ""}
            >
              Set
            </button>
          </div>
        </div>
      ) : (
        <img src={url} />
      )}
    </div>
  );
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

//const Dialog$3 = ({open, setOpen, node, actions}) => {
//  var _a, _b, _c;
//  const props = node.data.props;
//  const propId = props.propId;
//  const [url, setUrl] = React.useState((_c = (_a = props[propId]) == null ? void 0 : _a.url) != null ? _c : (_b = node.dom) == null ? void 0 : _b.src);
//  const [text, setText] = useState("");
//
//  const onUpload = async (e) => {
//    const file = e?.target.files[0];
//    const response = await uploadFile(file, false);
//    setUrl(response[0]);
//  };
//
//  const onChange = async () => {
//    setUrl(text);
//  };
//
//  return (
//    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
//      <DialogPrimitive.Portal>
//        <DialogPrimitive.Overlay>
//          <DialogPrimitive.Content className={cx("fixed shadow bg-white rounded-lg p-4", "w-[95vw] max-w-md md:w-full", "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")}>
//            <DialogPrimitive.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
//              Upload Image
//            </DialogPrimitive.Title>
//            <DialogPrimitive.Content url={url} text={text} setText={setText} onUpload={onUpload} onChange={onChange} />
//            <div className="mt-4 flex justify-end">
//              <button
//                style={{ marginRight: "auto" }}
//                className={cx("rounded-md px-4 py-2 text-sm font-medium bg-transparent border", "text-blue-500 hover:opacity-50 border border-transparent")}
//                onClick={() => {
//                  setUrl(null);
//                  setText("");
//                }}
//              >
//                Replace
//              </button>
//              <DialogPrimitive.Close
//                onClick={() => {
//                  setOpen(false);
//                  actions.setProp(node.id, (prop) => {
//                    if (!prop[propId])
//                      prop[propId] = {};
//                    prop[propId].url = url;
//                  });
//                }}
//                className={cx("inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium", `bg-blue-600 text-white border border-transparent ${url ? "hover:bg-blue-700" : "opacity-50 cursor-not-allowed"}`)}
//                disabled={!url}
//              >
//                Save
//              </DialogPrimitive.Close>
//            </div>
//            <DialogPrimitive.Close
//              onClick={() => setOpen(false)}
//              className={cx("absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1")}
//            >
//              <XMarkIcon className="h-4 w-4 text-gray-500 hover:text-gray-700" />
//            </DialogPrimitive.Close>
//          </DialogPrimitive.Content>
//        </DialogPrimitive.Overlay>
//      </DialogPrimitive.Portal>
//    </DialogPrimitive.Root>
//  );
//};



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


// const Dialog$2 = ({ open, setOpen, node, actions }) => {
//   const [openSelect, setOpenSelect] = useState(false);
//   const props = node.data.props;
//   const key = props.propId;
//   const [url, setUrl] = useState(props.url);
//   const [email, setEmail] = useState(props.email);
//   const [submitUrl, setSubmitUrl] = useState(props.submitUrl);
//   const [submitMethod, setSubmitMethod] = useState(props.submitMethod ?? 'GET');
//   const [submitAsync, setSubmitAsync] = useState(props.submitAsync);
//   const [methodSelect, setMethodSelect] = useState(props.methodSelect);
//   const [newTab, setNewTab] = useState(props.newTab);
//   const [type, setType] = useState(props.type ?? 'url');

//   const capitalize = (str) => {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   };

//   const onChange = (e) => {
//     setType(e.toLowerCase());
//   };

//   const saveChanges = () => {
//     setOpen(false);
//     actions.setProp(node.id, (prop) => {
//       if (!prop[key]) prop[key] = {};
//       prop[key].type = type.toLowerCase();
//       prop[key].url = url;
//       prop[key].email = email;
//       prop[key].newTab = newTab;
//       prop[key].submitUrl = submitUrl;
//       prop[key].submitMethod = submitMethod;
//       prop[key].submitAsync = submitAsync;
//     });
//   };

//   return (
//     <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
//       <DialogPrimitive.Portal>
//         <DialogPrimitive.Overlay />
//         <DialogPrimitive.Content className={cx('fixed shadow bg-white rounded-lg p-4', 'w-[95vw] max-w-md md:w-full', 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2')}>
//           <DialogPrimitive.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
//             Update Button
//           </DialogPrimitive.Title>
//           <DialogPrimitive.Description className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
//             <div className="mt-4 mb-4">
//               <div className="flex rounded py-2 px-4 transition cursor-pointer items-center ml-2 mb-4" onClick={() => setOpenSelect(true)}>
//                 {capitalize(type)} <ChevronDownIcon className="h-4 w-4 ml-2" />
//               </div>
//               <Select
//                 defaultValue={type}
//                 values={options.map((o) => capitalize(o))}
//                 open={openSelect}
//                 setOpen={setOpenSelect}
//                 onChange={onChange}
//               />
//               {type === 'url' && (
//                 <div className="flex justify-center mb-4 flex-col">
//                   <input
//                     type="text"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4"
//                     placeholder="Eg. https://github.com/LiveDuo/destack"
//                     defaultValue={url}
//                     onChange={(e) => setUrl(e.target.value)}
//                   />
//                   <div className="flex items-center ml-4">
//                     <p>Open in new tab</p>
//                     <input
//                       defaultChecked={newTab}
//                       type="checkbox"
//                       onChange={(e) => setNewTab(e.target.checked)}
//                       className="ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
//                     />
//                   </div>
//                 </div>
//               )}
//               {type === 'email' && (
//                 <div className="flex justify-center mb-4">
//                   <input
//                     type="text"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
//                     placeholder="Eg. matt@mullenweg.com"
//                     defaultValue={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//               )}
//               {type === 'submit' && (
//                 <div className="flex justify-center mb-4 flex-col">
//                   <div className="flex justify-end mb-4">
//                     <input
//                       type="text"
//                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
//                       placeholder="Eg. /api/submit"
//                       defaultValue={submitUrl}
//                       onChange={(e) => setSubmitUrl(e.target.value)}
//                     />
//                     <div className="flex rounded py-2 px-4 transition cursor-pointer items-center ml-2" onClick={() => setMethodSelect(true)}>
//                       {submitMethod} <ChevronDownIcon className="h-4 w-4 ml-2" />
//                     </div>
//                     <Select
//                       defaultValue={submitMethod}
//                       values={methods}
//                       open={methodSelect}
//                       setOpen={setMethodSelect}
//                       onChange={(e) => setSubmitMethod(e)}
//                     />
//                   </div>
//                   <div className="flex items-center ml-4">
//                     <p>Async</p>
//                     <input
//                       defaultChecked={submitAsync}
//                       type="checkbox"
//                       onChange={(e) => setSubmitAsync(e.target.checked)}
//                       className="ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </DialogPrimitive.Description>
//           <div className="mt-4 flex justify-end">
//             <DialogPrimitive.Close
//               onClick={saveChanges}
//               className={cx(
//                 'inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium',
//                 'bg-blue-600 text-white hover:bg-blue-700 border border-transparent'
//               )}
//             >
//               Save
//             </DialogPrimitive.Close>
//           </div>
//           <DialogPrimitive.Close
//             onClick={() => setOpen(false)}
//             className={cx('absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1')}
//           >
//             <XMarkIcon className="h-4 w-4 text-gray-500 hover:text-gray-700" />
//           </DialogPrimitive.Close>
//         </DialogPrimitive.Content>
//       </DialogPrimitive.Portal>
//     </DialogPrimitive.Root>
//   );
// };



const Dialog$1 = ({ open, setOpen, node, actions }) => {
  const [id, setId] = useState(node.data.props.id);

  const handleSave = () => {
    setOpen(false);
    actions.setProp(node.id, (prop) => {
      prop.id = id;
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay />
        <DialogPrimitive.Content className={cx("fixed shadow bg-white rounded-lg p-4", "w-[95vw] max-w-md md:w-full", "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")}>
          <DialogPrimitive.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
            Update Section Id
          </DialogPrimitive.Title>
          <div className="mt-8 mb-4">
            <div>
              <div>
                <div className="flex justify-center mb-4 flex-col">
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4"
                    placeholder="Eg. section-1"
                    defaultValue={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <DialogPrimitive.Close
              onClick={handleSave}
              className={cx("inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium", "bg-blue-600 text-white hover:bg-blue-700 border border-transparent")}
            >
              Save
            </DialogPrimitive.Close>
          </div>
          <DialogPrimitive.Close
            onClick={handleClose}
            className={cx("absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1")}
          >
            <XMarkIcon className="h-4 w-4 text-gray-500 hover:text-gray-700" />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};



const Dialog = ({ open, setOpen, node, actions }) => {
  const props = node.data.props;
  const key = props.propId;
  const [path, setPath] = useState(props[key]?.path);

  const handleSave = () => {
    setOpen(false);
    actions.setProp(node.id, (prop) => {
      if (!prop[key]) prop[key] = {};
      prop[key].path = path;
    });
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay>
          <DialogPrimitive.Content className={cx("fixed shadow bg-white rounded-lg p-4", "w-[95vw] max-w-md md:w-full", "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")}>
            <DialogPrimitive.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">Update SVG Path</DialogPrimitive.Title>
            <div className="mt-8 mb-4">
              <div>
                <div>
                  <div className="flex justify-center mb-4 flex-col">
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4"
                      placeholder="Eg. d = 'M150 0 L75 200 L225 200 Z'"
                      defaultValue={path}
                      onChange={(e) => setPath(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <DialogPrimitive.Close
                onClick={handleSave}
                className={cx("inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium", "bg-blue-600 text-white hover:bg-blue-700 border border-transparent")}
              >
                Save
              </DialogPrimitive.Close>
            </div>
            <DialogPrimitive.Close
              onClick={() => setOpen(false)}
              className={cx("absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1")}
            >
              <XMarkIcon className="h-4 w-4 text-gray-500 hover:text-gray-700" />
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </DialogPrimitive.Overlay>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};



const  CustomEditorElement= ({render}) => {
  const { id } = core.useNode();
  const { actions, isActive,query } = core.useEditor((_, query) => ({
    isActive: query.getEvent('selected').contains(id),
  }));
  const { connectors, node } = core.useNode((node2) => ({ node: node2 }));
  const {props}=core.useNode()
  const {setProp}=core.useNode().actions
  const data = node.data;
  const dom = node.dom;
  const displayName = (data.custom?.displayName) || data.displayName;
  const isRootChild = data.parent === 'ROOT';
  const isChild=displayName==='Heading'
  const showFocus = id !== 'ROOT' && displayName !== 'App';
  const currentRef = React.useRef();
  const {  isSelected } = core.useNode((node) => ({
    isSelected: node.events.selected,
  }));
  const { connectors: {connect, drag}, hasSelectedNode, hasDraggedNode} = core.useNode((state) => ({
    hasSelectedNode: state.events.selected.size > 0,
    hasDraggedNode: state.events.dragged.size > 0,
  }));
  const { curentState} = core.useEditor((state) => ({curentState:state.nodes}));
  const {
    openLink,setOpenLink,openImage,setOpenImage,
    openButton,setOpenButton,openHash,setOpenHash,
    openSvg,setOpenSvg,isView,setView
  }=useContext(ThemeContext)
  
  useEffect(() => {
    if (dom) {
      if (isActive || node.events.selected){
        setView(true)
        dom.classList.add('component-selected');
      }else{
        //setView(!isView)
        dom.classList.remove('component-selected');
      }
    }
  }, [dom, isActive, node.events.hovered]);
  const getPos = useCallback((dom2) => {
    const { top, left, bottom } = dom2 ? dom2.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 };
    return { top: `${top > 0 ? top : bottom}px`, left: `${left}px` };
  }, []);
  const scroll = useCallback(() => {
    if (!currentRef.current)
      return;
    const { top, left } = getPos(dom);
    currentRef.current.style.top = top;
    currentRef.current.style.left = left;
  }, [dom, getPos]);

  useEffect(() => {
    const el = document.querySelector('.craftjs-renderer');
    el?.addEventListener('scroll', scroll);
    return () => {
      el?.removeEventListener('scroll', scroll);
    };
  }, [scroll]);
  

  const { selected } = core.useEditor((state) => {
    const [currentNodeId] = state.events.selected;
    let selected;

    if ( currentNodeId ) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
        isDeletable:query.node(currentNodeId).isDeletable()
      };
    }
    console.log(selected,":selected")
    return {
      selected
    }
  });
 
  
  return (
    <>
      {node.events.selected || isActive ? ReactDOM.createPortal(
        <div
          ref={currentRef}
          //className=' bg-red-200 leading-3'
          className=" text-white   items-center leading-3 text-xs"
         // style={{
         //   height: '30px',
         //   marginTop: '-29px',
         //   left: getPos(dom).left,
         //   top: getPos(dom).top,
         //   zIndex: 9999,
         // }}
        >
          <h2 
          className="flex-1 mr-4"
          style={{color:"rgb(235, 235, 235)"}}
          >{displayName}</h2>
          {isRootChild && (
            <a 
            className="cursor-pointer flex w-44 p-2 justify-around bg-primary border-zinc-50 hover:bg-gray-500"
            style={{justifyContent:"space-around"}}
            ref={connectors.drag}>
              <ArrowsPointingOutIcon className="h-4" /> Drag
            </a>
          )}
          {/* {isRootChild && (
            <a
              className="mr-2 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setOpenHash(true);
              }}
            >
              <HashtagIcon className="h-4" />
            </a>
          )} */}
          {showFocus && (
            <a
              className="cursor-pointer flex w-48 p-2 justify-around bg-primary border-zinc-50 hover:bg-gray-500"
              style={{justifyContent:"space-around"}}
              onClick={() => {
                actions.selectNode(data.parent);
              }}
            >
              <ArrowSmallUpIcon className="h-4" /> Up
            </a>
          )}
          {dom?.nodeName === 'IMG' && (
            <a
            className="cursor-pointer flex w-48 p-2 justify-around bg-primary border-zinc-50 hover:bg-gray-500"
            style={{justifyContent:"space-around"}}
              onClick={(e) => {
                e.stopPropagation();
                setOpenImage(true);
              }}
            >
              <PhotoIcon className="h-4" /> Image Change
            </a>
          )}
          {dom?.nodeName === 'svg' && (
            <a
              className="cursor-pointer flex w-44 p-2 justify-around bg-primary border-zinc-50 hover:bg-gray-500"
              style={{justifyContent:"space-around"}}
              onClick={(e) => {
                e.stopPropagation();
                setOpenSvg(true);
              }}
            >
              <PhotoIcon className="h-4" /> upload svg
            </a>
          )}
          {dom?.nodeName === 'A' && (
            <a
              className="cursor-pointer flex w-44 p-2 justify-around bg-primary border-zinc-50 hover:bg-gray-500"
              style={{justifyContent:"space-around"}}
              onClick={(e) => {
                e.stopPropagation();
                setOpenLink(true);
              }}
            >
              <LinkIcon className="h-4" /> update link
            </a>
          )}
          {dom?.nodeName === 'LINK' && (
            <a
            className="cursor-pointer flex w-44 p-2 justify-around bg-primary border-zinc-50 hover:bg-gray-500"
            style={{justifyContent:"space-around"}}
              onClick={(e) => {
                e.stopPropagation();
                setOpenLink(true);
              }}
            >
              <LinkIcon className="h-4" /> Link
            </a>
          )}
           {dom?.nodeName === 'APPBUTTON' && (
            <a
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setOpenButton(true);
              }}
            >
              <CircleStackIcon className="h-4" /> 
            </a>
          )}
          {dom?.nodeName === 'BUTTON' && (
            <a
              className="cursor-pointer flex w-44 p-2 justify-around bg-primary border-zinc-50 hover:bg-gray-500"
              style={{justifyContent:"space-around"}}
              onClick={(e) => {
                e.stopPropagation();
                setOpenButton(true);
              }}
            >
              <CircleStackIcon className="h-4" /> update link
            </a>
          )}
          {isRootChild&&(
            <a
            className="cursor-pointer flex w-44 p-2 justify-around bg-primary border-zinc-50 hover:bg-gray-500"
            style={{justifyContent:"space-around"}}
              onClick={(e) => {
                e.stopPropagation();
                actions.delete(id);
              }}
            >
              <TrashIcon className="h-4" /> Delete
            </a>
          )}
          <Dialog$4 open={openLink} setOpen={setOpenLink} node={node} actions={actions} />
          <Dialog$3 open={openImage} setOpen={setOpenImage} node={node} actions={actions} />
          <Dialog$1 open={openHash} setOpen={setOpenHash} node={node} actions={actions} />
          <Dialog open={openSvg} setOpen={setOpenSvg} node={node} actions={actions} />
          <Dialog$2 open={openButton} setOpen={setOpenButton} node={node} actions={actions} />
          {/* <LayerSide  node={node} /> */}
          { 
            selected.settings && React.createElement(selected.settings)
          }
        </div>,
        // document.querySelector('.page-container')
        document.getElementById("layer")
      ) : null}
      {render}
      
    </>
  );
};

const EditorElement = ({ render }) => {
  const { id } = core.useNode();
  const { actions, isActive } = core.useEditor((_, query) => ({
    isActive: query.getEvent('selected').contains(id),
  }));
  const { connectors, node } = core.useNode((node2) => ({ node: node2 }));
  const data = node.data;
  const dom = node.dom;
  const displayName = (data.custom?.displayName) || data.displayName;
  const isRootChild = data.parent === 'ROOT';
  const showFocus = id !== 'ROOT' && displayName !== 'App';
  const currentRef = React.useRef();
  const {  isSelected } = core.useNode((node) => ({
    isSelected: node.events.selected,
  }));
  
  useEffect(() => {
    if (dom) {
      if (isActive || node.events.hovered)
        dom.classList.add('component-selected');
      else
        dom.classList.remove('component-selected');
    }
  }, [dom, isActive, node.events.hovered]);
  const getPos = useCallback((dom2) => {
    const { top, left, bottom } = dom2 ? dom2.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 };
    return { top: `${top > 0 ? top : bottom}px`, left: `${left}px` };
  }, []);

  const scroll = useCallback(() => {
    if (!currentRef.current)
      return;
    const { top, left } = getPos(dom);
    currentRef.current.style.top = top;
    currentRef.current.style.left = left;
  }, [dom, getPos]);

  useEffect(() => {
    const el = document.querySelector('.craftjs-renderer');
    el?.addEventListener('scroll', scroll);
    return () => {
      el?.removeEventListener('scroll', scroll);
    };
  }, [scroll]);

 
  

  const [openLink, setOpenLink] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  const [openButton, setOpenButton] = useState(false);
  const [openHash, setOpenHash] = useState(false);
  const [openSvg, setOpenSvg] = useState(false);

  return (
    <>
      {node.events.hovered || isActive ? ReactDOM.createPortal(
        <div
          ref={currentRef}
          className="px-2 py-2 text-white bg-primary fixed flex items-center leading-3 text-xs"
          style={{
            height: '30px',
            marginTop: '-29px',
            left: getPos(dom).left,
            top: getPos(dom).top,
            zIndex: 9999,
          }}
        >
          <h2 className="flex-1 mr-4">{displayName}</h2>
          {isRootChild && (
            <a className="mr-2 cursor-move" ref={connectors.drag}>
              <ArrowsPointingOutIcon className="h-4" />
            </a>
          )}
          {isRootChild && (
            <a
              className="mr-2 cursor-pointer"
              onMouseDown={(e) => {
                e.stopPropagation();
                setOpenHash(true);
              }}
            >
              <HashtagIcon className="h-4" />
            </a>
          )}
          {showFocus && (
            <a
              className="mr-2 cursor-pointer"
              onClick={() => {
                actions.selectNode(data.parent);
              }}
            >
              <ArrowSmallUpIcon className="h-4" />
            </a>
          )}
          {dom?.nodeName === 'IMG' && (
            <a
              className="cursor-pointer"
              onMouseDown={(e) => {
                e.stopPropagation();
                setOpenImage(true);
              }}
            >
              <PhotoIcon className="h-4" />
            </a>
          )}
          {dom?.nodeName === 'svg' && (
            <a
              className="cursor-pointer flex w-44 p-2 justify-around bg-primary border-zinc-50 hover:bg-gray-500"
              style={{justifyContent:"space-around"}}
              onMouseDown={(e) => {
                e.stopPropagation();
                setOpenSvg(true);
              }}
            >
              <PhotoIcon className="h-4" /> upload svg
            </a>
          )}
          {dom?.nodeName === 'A' && (
            <a
              className="cursor-pointer flex w-44 p-2 justify-around bg-primary border-zinc-50 hover:bg-gray-500"
              style={{justifyContent:"space-around"}}
              onMouseDown={(e) => {
                e.stopPropagation();
                setOpenLink(true);
              }}
            >
              <LinkIcon className="h-4" /> update link
            </a>
          )}
          {dom?.nodeName === 'BUTTON' && (
            <a
              className="cursor-pointer"
              onMouseDown={(e) => {
                e.stopPropagation();
                setOpenButton(true);
              }}
            >
              <CircleStackIcon className="h-4" />
            </a>
          )}
          {isRootChild && (
            <a
              className="cursor-pointer"
              onMouseDown={(e) => {
                e.stopPropagation();
                actions.delete(id);
              }}
            >
              <TrashIcon className="h-4" />
            </a>
          )}
          <Dialog$4 open={openLink} setOpen={setOpenLink} node={node} actions={actions} />
          <Dialog$3 open={openImage} setOpen={setOpenImage} node={node} actions={actions} />
          <Dialog$1 open={openHash} setOpen={setOpenHash} node={node} actions={actions} />
          <Dialog open={openSvg} setOpen={setOpenSvg} node={node} actions={actions} />
          <Dialog$2 open={openButton} setOpen={setOpenButton} node={node} actions={actions} />
        </div>,
        document.querySelector('.page-container')
      ) : null}
      {render}
    </>
  );
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
  return(
    !data?
    // <Viewport>
      <core.Frame>
        <core.Element canvas={true} is={Container} children={[]} custom={{displayName:"App"}}>
        </core.Element>
      </core.Frame>
    // </Viewport> 
    :
    <div className='page-container' >
      <core.Frame>
      </core.Frame>
    </div>
    )
};


const Editor = ({ data, standaloneServer,pages }) => {
  const { resolver, setStandalone,currentPage } = React.useContext(ThemeContext);
  React.useEffect(() => setStandalone(standaloneServer), []);
  const onStateChange = (e) => {
    saveTemplateDebounce(e, standaloneServer,localStorage.getItem("currentPage"));
  }; 

  return(
    <core.Editor 
    resolver={resolver} 
    enabled={!data} 
    onRender={CustomEditorElement}
    onNodesChange={onStateChange}
    indicator={{
      'success': '#2d9d78', // green
      'error': '#e34850' // red
    }}
    >
    <Viewport>
      <FrameEditor data={data} standaloneServer={standaloneServer} />
    </Viewport>
    </core.Editor>
  )};





const ContentProviderBase = ({ data, standaloneServer,pages }) => {

  return(
    <ThemeProvider>
      <div className='h-full'>
       <Editor data={data} standaloneServer={false} pages={pages}></Editor>
      </div>
    </ThemeProvider>
  )};



const ContentProvider = ({ data,pages }) => <ContentProviderBase data={data} pages={pages}></ContentProviderBase>

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
    className: "page-container",
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
