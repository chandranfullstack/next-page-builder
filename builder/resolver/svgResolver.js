import { useNode } from "@craftjs/core";
import React from "react"

const Svg = ({ r, propId }) => {
    var _a;
    const { connectors, node } = useNode((node2) => ({ node: node2 }));
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

export default Svg