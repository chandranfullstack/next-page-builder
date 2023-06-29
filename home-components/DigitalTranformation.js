"use client";
import AppBox from "../client-components/AppBox/AppBox";
import AppContainer from "../client-components/AppContainer/AppContainer";
import AppList from "../client-components/AppList/AppList";
import AppText from "../client-components/AppText/AppText";
import GradientText from "../page-components/GradientText"
import { RespheaderText, defaultSectionContainerWidth } from "../themes/utils";
import Image from "next/image";
import React from "react";
import { digitalTransformation } from "./data";
import AppFlex from "../client-components/AppFlex/AppFlex";
import AppGrid from "../client-components/AppGrid/AppGrid";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";

const ColorCard = ({ src, list, bgcolor, boxColor, head, mt }) => {
  return (
    <AccordionItem
      borderRadius={"4px"}
      background={bgcolor}
      border={`1px solid ${boxColor}`}
      minH={"150px"}
      px="25px"
      py="15px"
      mt={mt}
    >
      <AccordionButton w={"100%"} p={"0px"}>
        <AppFlex direction={"column"} justifyContent="center" w="100%">
          <AppFlex justifyContent="center">
            <AppFlex position="relative" h="59px" w="59px">
              <Image fill={true} src={src} alt="" />
            </AppFlex>
          </AppFlex>
          <AppText
            color={boxColor}
            mt="20px"
            textStyle="h1"
            textAlign="center"
            text={head}
          />
        </AppFlex>
      </AccordionButton>
      <AccordionPanel p={"0px"} mt="10px">
        <AppList color="black" textStyle="fs1" list={list} />
      </AccordionPanel>
    </AccordionItem>
  );
};

const DigitalTranformation = () => {
  return (
    <AppContainer py={{ base: "50px", xl: "100px" }}>
      <AppBox textAlign="center">
        <AppText
          color="black"
          as="span"
          textStyle={RespheaderText}
          text={"Digital Transformation."}
        />
        <GradientText text=" Skill at Scale with Speed." />
      </AppBox>
      <AppContainer maxW="809px" px="10px" textAlign="center" mt="15px">
        Start with insights into your current team’s skills, plan their growth
        in a programmatic way, and close skill gaps with immersive training.
        It’s all plugged in. Now play.
      </AppContainer>
      <AppGrid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(3,1fr)",
          xl: "repeat(5,230px)",
        }}
        mt="40px"
        gap="34px"
      >
        {digitalTransformation.map((item, index) => {
          return (
            <Accordion key={index + "digital"} allowToggle>
              <ColorCard
                src={item?.src}
                bgcolor={item?.bgcolor}
                head={item.head}
                boxColor={item.boxColor}
                list={item.list}
                mt={item.mt}
              />
            </Accordion>
          );
        })}
      </AppGrid>
    </AppContainer>
  );
};

export default DigitalTranformation;
