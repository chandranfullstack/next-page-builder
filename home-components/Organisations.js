import AppBox from "../client-components/AppBox/AppBox";
import AppFlex from "../client-components/AppFlex/AppFlex";
import AppText from "../client-components/AppText/AppText";
import Image from "next/image";
import React from "react";
import { imgs } from "./data";
import { BsArrowRight } from "react-icons/bs";
import AppButton from "../client-components/AppButton/AppButton";
import appColors from "../themes/appColors";
import AppGrid from "../client-components/AppGrid/AppGrid";

const Organisations = () => {
  return (
    <AppBox py={{ base: "30px", md: "100px" }}>
      <AppFlex justifyContent="center">
        <AppBox
          textStyle="fs3"
          color={"black"}
          customStyle={{
            textAlign: "center",
            w: { base: "90%", xl: "558px" },
          }}
        >
          Join{" "}
          <AppText
            text="3000+ organizations"
            color={"black"}
            textStyle="h3"
            as="span"
          />{" "}
          that trust{" "}
          <AppText as="span" textStyle="h3" color={"black"} text="Techademy" />{" "}
          in supporting
          <AppText
            as="span"
            textStyle="h3"
            color={"black"}
            text=" 20 million+ employees"
          />{" "}
          across the globe
        </AppBox>
      </AppFlex>
      <AppBox>
        {/* <AppFlex gap={"95px"} justifyContent="center" mt="40px">
          {imgs.slice(0, 6).map((item) => {
            return (
              <Image
                width={item?.width}
                key={item?.src}
                alt={item?.src}
                height={item?.height}
                src={item?.src}
              />
            );
          })}
        </AppFlex> */}
        <AppFlex
          gap={{ base: "1.5em", md: "2em", lg: "65px" }}
          justifyContent="center"
          mt="40px"
          flexWrap="wrap"
          w={{ base: "80%" }}
          mx={"auto"}
        >
          {/* <AppGrid
          templateRows="2,1fr"
          templateColumns="repeat(4, 1fr)"
          customStyle={{ mt: "40px" }}
        > */}
          {imgs.map((item) => {
            return (
              <Image
                width={item?.width}
                key={item?.src}
                alt={item?.src}
                height={item?.height}
                src={item?.src}
              />
            );
          })}
          {/* </AppGrid> */}
        </AppFlex>
        <AppBox textAlign="center" mt="40px">
          {/* <AppButton
            variant={"plainbtn"}
            color={appColors.appblack["40"]}
            display={{ base: "none", md: "initial" }}
          > */}
          <AppFlex
            alignItems="center"
            justifyContent="center"
            gap="5px"
            textStyle="italic3"
            px="10px"
            color={appColors.appblack["40"]}
            textDecoration="underline"
            display={{ base: "none", md: "flex" }}
          >
            Read Case Studies of how companies elevate their Learning
            Experiences over the last 20 years
            <BsArrowRight />
          </AppFlex>
          {/* </AppButton> */}
          <AppBox
            textStyle="italic3"
            variant={"plainbtn"}
            color={appColors.appblack["40"]}
            textDecoration="underline"
            px="10px"
            display={{ base: "initial", md: "none" }}
          >
            Read Case Studies of how companies elevate their Learning
            Experiences over the last 20 years
          </AppBox>
        </AppBox>
      </AppBox>
    </AppBox>
  );
};

export default Organisations;
