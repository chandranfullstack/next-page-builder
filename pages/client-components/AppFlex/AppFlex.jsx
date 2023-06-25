"use client";

import { Flex } from "@chakra-ui/react";
import React from "react";

const AppFlex = ({
  children,
  customStyle,
  direction,
  color = "white",
  alignItems = "center",
  justifyContent = "",
  gap,
  ...props
}) => {
  return (
    <Flex
      direction={direction}
      color={color}
      alignItems={alignItems}
      sx={customStyle}
      gap={gap}
      justifyContent={justifyContent}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default AppFlex;
