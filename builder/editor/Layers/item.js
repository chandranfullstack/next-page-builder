import { useContext } from "react";
import { ThemeContext } from "../../context/builder-context";
import { Component } from "../../resolver/resolver";
import { getImageUrl } from "../../functions";
import { cleanHTMLElement } from "../../functions";
import SimpleTooltip from "../components/toolTip";
import React from "react"
import nodeHtmlParser from "node-html-parser"

const Item = ({ connectors, c }) => {
    const { standalone } = useContext(ThemeContext);
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

export default Item;
 