"use client";
import { Box } from "@chakra-ui/react";
import React from "react";

const AppBox = ({ children, customStyle, ...props }) => {

  return (
    <Box sx={customStyle} {...props}>
      {children}
    </Box>
  );
};

export default AppBox;
