import AppBox from "../client-components/AppBox/AppBox";
import AppButton from "../client-components/AppButton/AppButton";
import AppDivider from "../client-components/AppDivider/AppDivider";
import AppFlex from "../client-components/AppFlex/AppFlex";
import AppText from "../client-components/AppText/AppText";
import appColors from "../themes/appColors";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <AppFlex>
      <AppFlex
        alignItems="center"
        gap={"40px"}
        mt={{ base: "40px", xl: "28px" }}
        direction={{ base: "column", xl: "row" }}
      >
        <AppBox customStyle={{ w: { base: "100%", xl: "58%" } }}>
          <AppText
            textStyle="heroSubHead"
            as="span"
            fontSize={{ base: "24px", md: "55px" }}
            lineHeight={{ base: "40px", md: "72px" }}
            text="Start Solving Your Tech Skill Gaps To"
          />
          <AppText
            textStyle="heroHead"
            as="span"
            fontSize={{ base: "24px", md: "55px" }}
            lineHeight={{ base: "40px", md: "72px" }}
            customStyle={{ paddingLeft: "10px" }}
            text="Accelerate Business Transformation."
          />

          <AppDivider customstyle={{ pt: "10px" }} />

          <AppText
            textStyle="hero_italic"
            customStyle={{ color: appColors.apporange["100"], pt: "20px" }}
            text={"Digital Transformation. Skill at Scale with Speed."}
          />
          <AppText
            textStyle="fs3"
            customStyle={{ pt: "10px" }}
            text={
              "Higher adoption rates. Better learner engagement. Improved course completion rates. Aligned to business impact. Delivered on time, every time through a comprehensive learning ecosystem that enables multiple learner journeys."
            }
          />
          <AppFlex
            gap={"8px"}
            justifyContent={{ base: "center", md: "start" }}
            customStyle={{ pt: "20px" }}
          >
            <AppButton variant={"primarybtn"}>Watch Demo</AppButton>
            {/* <AppButton rightIcon={<BsArrowRight />} variant={"plainbtn"}>
              Explore Solutions
            </AppButton> */}
          </AppFlex>
        </AppBox>
        <AppFlex customStyle={{ w: "42%", justifyContent: "end" }}>
          <Image
            src="/home/hero-img.svg"
            width={563}
            height={606}
            alt="Image"
          />
        </AppFlex>
      </AppFlex>
    </AppFlex>
  );
};

export default Hero;
