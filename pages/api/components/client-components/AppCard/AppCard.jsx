"use client";
import { Card, CardBody } from "@chakra-ui/react";
import React from "react";

const AppCard = ({ children, wrapperStyle, bodyStyle }) => {
  return (
    <Card sx={wrapperStyle}>
      <CardBody sx={bodyStyle}>{children}</CardBody>
    </Card>
  );
};

export default AppCard;
