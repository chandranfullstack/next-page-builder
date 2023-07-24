"use client";
import { Button } from "@chakra-ui/react";
import React from "react";

const AppButton = ({ children, variant,colorScheme,load,...props}) => {
  
  return (
    <Button variant={variant} isLoading={load} {...props} colorScheme={colorScheme}>
      {children}
    </Button>
  );
};

export default AppButton;
