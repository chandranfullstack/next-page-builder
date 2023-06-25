"use client";
import { Avatar } from "@chakra-ui/react";
import React from "react";

const AppAvatar = ({ name, link = "" }) => {
  return <Avatar name={name} src={link} />;
};

export default AppAvatar;
