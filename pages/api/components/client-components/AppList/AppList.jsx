"use client";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";

const AppList = ({ list, color = "white", textStyle = "fs3", ...props }) => {
  return (
    <UnorderedList {...props}>
      {list?.length > 0 &&
        list?.map((item, index) => {
          return (
            <ListItem color={color} textStyle={textStyle} key={index}>
              {item}
            </ListItem>
          );
        })}
    </UnorderedList>
  );
};

export default AppList;
