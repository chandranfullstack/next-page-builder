"use client";
import { Text } from "@chakra-ui/react";
import React from "react";

const AppText = ({ text, children, color = "white", customStyle,textStyle, ...props }) => {
  return (
    <Text sx={customStyle} color={color} {...props} textStyle={textStyle}>
      {text || children}
    </Text>
  );
};

export default AppText;
