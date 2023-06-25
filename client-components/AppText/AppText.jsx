"use client";
import { Text } from "@chakra-ui/react";
import React from "react";

const AppText = ({ text, children, color = "white", customStyle,textStyle, ...props }) => {
  // console.log(text,children,color,customStyle,"apptext")
  return (
    <Text sx={customStyle} color={color} {...props} textStyle={textStyle}>
      {text || children}
    </Text>
  );
};

export default AppText;
