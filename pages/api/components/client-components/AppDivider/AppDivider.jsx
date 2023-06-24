"use client";
import { Divider } from "@chakra-ui/react";
import React from "react";

const AppDivider = ({ orientation = "horizontal", customstyle }) => {
  return <Divider sx={customstyle} orientation={orientation} />;
};

export default AppDivider;
