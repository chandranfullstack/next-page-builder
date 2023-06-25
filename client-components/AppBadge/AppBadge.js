"use client";
import appColors from "../../themes/appColors"
import { Badge } from "@chakra-ui/react";
import React from "react";

const AppBadge = ({ bg = appColors.grey["badge"], text = "Default" }) => {
  return (
    <Badge
      background={bg}
      py="5px"
      px="20px"
      fontWeight={"normal"}
      textStyle={"fs2"}
    >
      {text}
    </Badge>
  );
};

export default AppBadge;
