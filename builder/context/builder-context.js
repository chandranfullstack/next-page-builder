import { Container,Component } from '../resolver/resolver.js';
import Child from '../resolver/childResolver.js';
import { Element } from '@craftjs/core';
import Link from '../resolver/linkResolver.js';
import Image from '../resolver/imageResolver.js';
import Svg from '../resolver/svgResolver.js';
import APPText from '../resolver/textResolver.js';
import {Button} from "../resolver/buttonResolver.js"
import { Container1 } from '../resolver/containerResolver.js';
import {Paragraph} from "../resolver/paragraphResolver.js"
import { Text } from '../resolver/resolver.js';
import { Heading } from '../resolver/resolver.js';
import { ButtonResolver } from '../resolver/buttonResolver.js';
import React from "react"
import { useState,useEffect } from 'react';

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
    Element: Element,
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
export const ThemeContext = React.createContext(defaultValue);
export  const ThemeProvider = ({ children }) => {
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
    useEffect(() => {
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
  