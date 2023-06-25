import React from "react";
import AppBox from "../client-components/AppBox/AppBox";
import AppText from "../client-components/AppText/AppText";
import AppFlex from "../client-components/AppFlex/AppFlex";
import AppButton from "../client-components/AppButton/AppButton";

const HeroSection = ({
  para,
  bgimg,
  Component,
  style,
  py = "250px",
  borderRadius,
  backgroundPosition = "bottom",
  h = { base: "auto", md: "665px" },
}) => {
  return (
    <AppBox
      customStyle={{
        backgroundImage: `url("${bgimg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: backgroundPosition,
        py: { md: py, base: "90px" },
        pl: { md: "120px", base: "10px", sm: "auto" },
        borderRadius: borderRadius,
        h: h,
      }}
    >
      {Component}
      <AppText
        w={{ base: "auto", sm: "auto", md: "632px" }}
        pr={{ base: "5px" }}
        mt="10px"
        textStyle={{ base: "responsiveParaText", md: "fs3" }}
        text={para}
      />
      <AppFlex gap={"8px"} mt="25px">
        <AppButton variant={"primarybtn"}>Request a Demo</AppButton>
        <AppButton variant={"primaryoutlinebtn"}>Talk to Sales</AppButton>
      </AppFlex>
    </AppBox>
  );
};

export default HeroSection;
