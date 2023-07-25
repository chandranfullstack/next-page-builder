import React from "react"
import { Element } from "@craftjs/core";
import { Text } from "./resolver";
import { Component } from "./resolver";
import APPText from "./textResolver";
import Image from "./imageResolver";
import Link from "./linkResolver";
import Svg from "./svgResolver";
import { Button } from "./buttonResolver";
import AppFlex from "../../client-components/AppFlex/AppFlex";
import AppBox from "../../client-components/AppBox/AppBox";
import AppContainer from "../../client-components/AppContainer/AppContainer";
import AppIcon from "../../client-components/AppIcons/AppIcon";

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
          return  React.createElement(Element, {
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
          return  React.createElement(Element, {
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
          return  React.createElement(Element, {
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
          return  React.createElement(Element, {
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
          return  React.createElement(Element, {
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
          return  React.createElement(Element, {
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
          return React.createElement(Element,{
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
          return  React.createElement(Element, {
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
                return  React.createElement(Element, {
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
                    return  React.createElement(Element, {
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
                        return  React.createElement(Element, {
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
                          return  React.createElement(Element, {
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

export default Child
  