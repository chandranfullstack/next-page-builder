import React from "react";
import AppText from "../client-components/AppText/AppText";

export const GradientText2 = ({ as = "span", text = "", ...props }) => {
  return (
    <AppText
      as={as}
      textStyle={{ base: "gradientText25", md: "gradientText1" }}
      text={text}
      {...props}
    />
  );
};

export default GradientText2
