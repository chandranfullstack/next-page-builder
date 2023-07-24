import { useNode } from "@craftjs/core";
import React from "react"

const Image = ({ d: _d, i: _i, classNames, attrs, propId }) => {
    var _a, _b;
    const { connectors } = useNode((node2) => ({ node: node2 }));
    const { node } = useNode((node2) => ({ node: node2 }));
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

export default Image
  