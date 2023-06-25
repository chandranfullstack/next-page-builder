import AppBox from "../client-components/AppBox/AppBox";
import AppButton from "../client-components/AppButton/AppButton";
import AppCard from "../client-components/AppCard/AppCard";
import AppContainer from "../client-components/AppContainer/AppContainer";
import AppFlex from "../client-components/AppFlex/AppFlex";
import appColors from "../../themes/appColors";
import React from "react";

const ActionBanner = ({ bgimg = "/home/actionbanner.svg", component }) => {
  return (
    <AppContainer maxW="1264px">
      <AppCard
        wrapperStyle={{
          background: !bgimg && appColors.appblue["clientblue"],
          py: { base: "40px", md: "90px" },
          px: { base: "36px", md: "52px" },
          maxH: { base: "100%", lg: "338px" },
          my: { base: "50px", md: "100px" },
          backgroundImage: `url("${bgimg}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {component || (
          <AppBox
            textStyle="h9"
            color="white"
            fontSize={{ base: "24px", md: "35px" }}
          >
            Want to see Techademy in action ?
          </AppBox>
        )}

        <AppFlex
          gap={"8px"}
          mt="14px"
          justifyContent={{ base: "space-between", md: "start" }}
        >
          <AppButton variant={"primarybtn"}>Book A Demo</AppButton>
          <AppButton variant={"primaryoutlinebtn"}>Contact Sales</AppButton>
        </AppFlex>
      </AppCard>
    </AppContainer>
  );
};

export default ActionBanner;
