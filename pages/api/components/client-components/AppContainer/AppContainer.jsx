"use client";
import { defaultContainerWidth } from "@/theme/utils";
import { Container } from "@chakra-ui/react";
import React from "react";

const AppContainer = ({ children, maxW = defaultContainerWidth, ...props }) => {
  return (
    <Container maxW={maxW} {...props}>
      {children}
    </Container>
  );
};

export default AppContainer;
