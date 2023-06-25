import React from "react";
import AppGridItem from "../client-components/AppGrid/AppGridItem";
import AppBox from "../client-components/AppBox/AppBox";
import AppFlex from "../client-components/AppFlex/AppFlex";
import AppText from "../client-components/AppText/AppText";
import AppList from "../client-components/AppList/AppList";

const FeatureCard = ({
  head = "",
  subhead = "",
  icon,
  h,
  boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  list,
  minH = "294px",
  center = false,
  otherComponent,
}) => {
  return (
    <AppGridItem
      bg="#FFFFFF"
      minH={minH}
      boxShadow={boxShadow}
      customStyle={{
        bgColor: "#FFFFFF",
        borderRadius: "10px",
        h: h,
        pb: { base: "15px", md: "auto", xl: "auto" },
      }}
      width="100%"
      alignItems="center"
    >
      <AppBox px={"36px"}>
        <AppFlex
          customStyle={{
            borderRadius: "16px",
            pt: "51px",
            pb: "15px",
            justifyContent: center ? "center" : "start",
          }}
        >
          <AppFlex
            alignItems="center"
            justifyContent="center"
            customStyle={{
              h: "59px",
              w: "59px",
              bgColor: "#F4F4F4",
              borderRadius: "160px",
            }}
          >
            {icon}
          </AppFlex>
        </AppFlex>
        <AppBox>
          <AppText
            customStyle={{
              fontSize: "25px",
              fontWeight: "500",
              lineHeight: "37px",
              color: "#000000",
              pb: "5px",
            }}
            textAlign={center ? "center" : "start"}
            text={head}
          />
          <AppText
            text={subhead}
            color="black"
            customStyle={{
              fontSize: "15px",
              lineHeight: "24px",
              fontWeight: "400",
            }}
          />
          {otherComponent}
          {list?.length > 0 && (
            <AppFlex
              mt="20px"
              customStyle={{ justifyContent: center ? "center" : "start" }}
            >
              <AppList textStyle="fs2" color="black" list={list} />
            </AppFlex>
          )}
        </AppBox>
      </AppBox>
    </AppGridItem>
  );
};

export default FeatureCard;
