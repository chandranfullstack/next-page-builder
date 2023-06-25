import AppBox from "../client-components/AppBox/AppBox";
import AppButton from "../client-components/AppButton/AppButton";
import AppCard from "../client-components/AppCard/AppCard";
import AppContainer from "../client-components/AppContainer/AppContainer";
import AppFlex from "../client-components/AppFlex/AppFlex";
import AppText from "../client-components/AppText/AppText";
import appColors from "../themes/appColors";
import React from "react";

const ActionBannerWithCount = ({ bgimg = "/home/actionbanner.svg" }) => {
  return (
    <AppContainer maxW="1340px" h={{base:"auto"}}>
      <AppCard
        wrapperStyle={{
          background: !bgimg && appColors.appblue["clientblue"],
          py: { base: "30px", md: "60px" },
          px: "52px",
          my: "44px",
          maxH: {base:"auto",md:"338px"},
          my: "100px",
          backgroundImage: `url("${bgimg}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          h:{base:"450px",md:"auto"}
        }}
      >
        <AppFlex
          alignItems="center"
          justifyContent="space-between"
          direction={{ base: "column", md: "inherit" }}
        >
          <AppBox>
            <AppBox
              textStyle={{ base: "responsiveText1", md: "fs7" }}
              color="white"
            >
              Build Assessment quickly using our{" "}
            </AppBox>
            <AppFlex gap={{base:"10px",md:"65px"}} mt="14px">
              <AppBox>
                <AppText
                  textStyle={{ base: "responsiveText2", md: "countTextMd" }}
                  text={"50,000+"}
                />
                <AppText
                  textStyle={{ base: "responsiveText1", md: "fs3" }}
                  text={"Ready-made questions"}
                />
              </AppBox>
              <AppBox mt={{base:"-21px",md:"auto"}}>
                <AppText
                  textStyle={{ base: "responsiveText2", md: "countTextMd" }}
                  text={"500+"}
                />
                <AppText
                  textStyle={{ base: "responsiveText1", md: "fs3" }}
                  text={"Skills Covered"}
                />
              </AppBox>
              <AppBox mt={{base:"-21px",md:"auto"}}>
                <AppText
                  textStyle={{ base: "responsiveText2", md: "countTextMd" }}
                  text={"50+"}
                />
                <AppText
                  textStyle={{ base: "responsiveText1", md: "fs3" }}
                  text={"Certification Templates"}
                />
              </AppBox>
            </AppFlex>
            <AppText
              textStyle="italic3"
              mt={{ base: "2px", md: "14px" }}
              pb={{ base: "2px" }}
              text={
                "Or get assessment tailored to meet your business requirements"
              }
            />
          </AppBox>
          <AppFlex
            gap={"8px"}
            direction={{ base: "flex-start" }}
            customStyle={{ color: { base: "red" } }}
          >
            <AppButton variant={"primarybtn"}>Book A Demo</AppButton>
            <AppButton variant={"primaryoutlinebtn"}>Contact Sales</AppButton>
          </AppFlex>
        </AppFlex>
      </AppCard>
    </AppContainer>
  );
};

export default ActionBannerWithCount;
