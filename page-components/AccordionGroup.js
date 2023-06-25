"use client";
import appColors from "../themes/appColors";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import React from "react";
import AppBox from "../client-components/AppBox/AppBox";

const AccordionGroup = ({ list }) => {
  return (
    <Accordion defaultIndex={[0]}>
      {list?.map((item, index) => {
        return (
          <AccordionItem
            borderTop={"none"}
            borderBottom={"none"}
            _expanded={{ borderLeft: `2px solid ${appColors.appblue[100]}` }}
            key={index}
          >
            {({ isExpanded }) => (
              <AppBox
                borderLeft={`2px solid ${
                  isExpanded ? appColors.appblue[100] : appColors.grey["20"]
                }`}
                pl="20px"
              >
                <h2>
                  <AccordionButton
                    sx={{
                      fontSize: "22px",
                      lineHeight: "22px",
                      fontWeight: "500",
                      color: appColors.grey["20"],
                    }}
                    _expanded={{
                      color: appColors.appblue["100"],
                      fontWeight: "600",
                    }}
                    textAlign={"start"}
                    py="10px"
                  >
                    {item.headcomponent}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{item.subcomponent}</AccordionPanel>
              </AppBox>
            )}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default AccordionGroup;
