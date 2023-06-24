"use client";
import { Button } from "@chakra-ui/react";
import React from "react";

const AppButton = ({ children, variant, ...props }) => {
  return (
    <Button variant={variant} {...props}>
      {children}
    </Button>
  );
};

export default AppButton;
