"use client";
import AppBox from "../client-components/AppBox/AppBox";
import AppContainer from "../client-components/AppContainer/AppContainer";
import AppFlex from "../client-components/AppFlex/AppFlex";
import appColors from "../themes/appColors";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const DevelopCard = ({
  Component,
  para,
  ctaText,
  ctaMouseOver,
  cta = true,
  img,
  bgimg,
  imgwidth,
  width = { base: "auto", md: "565px" },
  imgheight,
  direction = "row",
  bgcolor = "white",
  SubComponent,
  gap = "20px",
  headComponent,
  triggerId,
  maxW="1264px",
  py = { base: "50px", md: "100px" },
}) => {
  return (
    <AppFlex
      customStyle={{
        backgroundImage: `url("${bgimg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      bg={bgcolor}
    >
      <AppContainer py={{ base: "20px", md: py }} maxW={maxW}>
        {headComponent}
        <AppFlex
          alignItems="center"
          justifyContent="space-between"
          px="10px"
          direction={direction}
          gap={gap}
        >
          <AppBox width={width}>
            {Component}
            {SubComponent}
            {cta && (
              <AppBox
                style={{
                  color: appColors.appblue["100"],
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "14px",
                  lineHeight: "24px",
                  fontSize: "16px",
                  fontWeight: "600",
                  letterSpacing: "-0.36px",
                }}
                role="button"
                onMouseOver={() => {
                  if (triggerId && SleekNote) {
                    SleekNote.triggerOnclick(triggerId || "");
                  } else {
                    console.log("Trigger does not exist");
                  }
                }}
              >
                {ctaText || "GET IN TOUCH"} <BsArrowRight />
              </AppBox>
            )}
          </AppBox>
          <AppBox>
            <Image alt="image" src={img} width={imgwidth} height={imgheight} />
          </AppBox>
        </AppFlex>
      </AppContainer>
    </AppFlex>
  );
};

export default DevelopCard;
