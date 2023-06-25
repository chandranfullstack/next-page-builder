import AppBox from "../client-components/AppBox/AppBox";
import Image from "next/image";
import React from "react";
import AppText from "../client-components/AppText/AppText";
import AppFlex from "../client-components/AppFlex/AppFlex";

const TechCard = ({ src, height = 372, width = 422, head, subhead }) => {
  return (
    <AppFlex
      justifyContent="center"
      direction={{ base: "column-reverse", md: "column" }}
      gap={"20px"}
    >
      <AppFlex>
        <Image src={src} width={width} height={height} alt="Image" />
      </AppFlex>
      <AppBox>
        <AppText
          textStyle={{ base: "header1_20", md: "header1" }}
          color="black"
          text={head}
        />
        <AppText
          textStyle="fs1"
          width={{ base: "100%", md: "347px" }}
          color="black"
          mt="10px"
          text={subhead}
        />
      </AppBox>
    </AppFlex>
  );
};

export default TechCard;
