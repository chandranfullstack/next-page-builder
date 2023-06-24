"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import { StyleProps}  from "@chakra-ui/react";
const AppBox = ({ children, customStyle, ...props }) => {
  console.log(children,customStyle,{...props},"app box",StyleProps)
  return (
    <Box sx={customStyle} {...props}>
      {children}
    </Box>
  );
};

export default AppBox;
