import React from "react";
import AppText from "../client-components/AppText/AppText";

export const GradientText = ({ as = "span", text = "", ...props }) => {
  return (
    <AppText
      as={as}
      textStyle={{ base: "gradientText24", md: "gradientText" }}
      text={text}
      {...props}
    />
  );
};

export default GradientText
