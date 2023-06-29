import AppAvatar from "../client-components/AppAvatar/AppAvatar";
import AppBox from "../client-components/AppBox/AppBox";
import AppContainer from "../client-components/AppContainer/AppContainer";
import AppFlex from "../client-components/AppFlex/AppFlex";
import AppText from "../client-components/AppText/AppText";
import RedirectStripe from "../page-components/RedirectStripe";
import appColors from "../themes/appColors";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { SiNotion } from "react-icons/si";

const Testimonial = () => {
  return (
    <AppBox bg={appColors.appblue["clientblue"]}>
      <AppContainer maxW={"1028px"}>
        <AppFlex
          justifyContent="space-between"
          alignItems="start"
          gap={"30px"}
          py="55px"
        >
          <AppFlex
            direction={"column"}
            display={{ base: "none", md: "initial" }}
          >
            <AppFlex gap={"8px"}>
              <SiNotion size={45} />
              <AppText text="Notion" />
            </AppFlex>
            <AppBox mt="157px">
              <AppText
                textStyle="countText"
                fontSize={{ base: "40px", md: "57px" }}
                text={"250k+"}
              />
              <AppText text={"watching hours"} />
            </AppBox>
          </AppFlex>
          <AppFlex direction={"column"} alignItems="start">
            <AppText
              width={{ base: "100%", md: "535px" }}
              textStyle="fs5"
              fontSize={{ base: "14px", md: "24px" }}
              text={`“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”`}
            />
            <AppFlex gap={"16px"} mt="35px">
              <AppAvatar name={"Don"} />
              <AppBox>
                <AppText text={"John Doe"} />
                <AppText
                  textStyle="fs1"
                  text={"Chief Learning Officer @ Notion"}
                />
              </AppBox>
            </AppFlex>
          </AppFlex>
        </AppFlex>
      </AppContainer>
      <RedirectStripe py="18px">
        Read customer story <BsArrowUpRight />
      </RedirectStripe>
    </AppBox>
  );
};

export default Testimonial;
