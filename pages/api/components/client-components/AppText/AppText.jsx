"use client";
import { Text } from "@chakra-ui/react";
import React from "react";

const AppText = ({ text, children, color = "white", customStyle, ...props }) => {
  return (
    <Text sx={customStyle} color={color} {...props}>
      {text || children}
    </Text>
  );
};

export default AppText;
