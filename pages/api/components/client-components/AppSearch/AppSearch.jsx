"use client";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const AppSearch = ({
  placeholder = "Search",
  w = { base: "100%", md: "354px" },
  borderColor,
}) => {
  return (
    <InputGroup w={w}>
      <Input type="text" borderColor={borderColor} placeholder={placeholder} />
      <InputRightElement pointerEvents="none">
        <AiOutlineSearch color={borderColor} />
      </InputRightElement>
    </InputGroup>
  );
};

export default AppSearch;
