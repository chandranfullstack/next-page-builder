import AppBox from "../client-components/AppBox/AppBox";
import AppFlex from "../client-components/AppFlex/AppFlex";
import appColors from "../themes/appColors";
import Image from "next/image";
import React from "react";

const Technologies = ({ heading, pb = { base: "50px", md: "230px" } ,bg="/home/technologies-bg.svg"}) => {
  return (
    <AppBox
      customStyle={{
        backgroundImage: { base: "", xl: `url(${bg})` },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: { base: appColors.appblue["clientblue"], xl: "white" },
      }}
    >
      <AppFlex
        direction={"column"}
        justifyContent="center"
        alignItems="center"
        py={{ base: "50px", md: "103px" }}
        pb={pb}
      >
        {heading}
        <AppBox>
          <Image
            alt="image"
            src={"/home/technologies.svg"}
            width={1066}
            height={472}
          />
        </AppBox>
      </AppFlex>
    </AppBox>
  );
};

export default Technologies;
