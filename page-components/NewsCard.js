import React from "react";
import AppBox from "../client-components/AppBox/AppBox";
import AppFlex from "../client-components/AppFlex/AppFlex";
import Image from "next/image";
import AppCard from "../client-components/AppCard/AppCard";
import appColors from "../../themes/appColors";

const NewsCard = () => {
  return (
    <AppCard
      bodyStyle={{ p: "0px" }}
      wrapperStyle={{
        boxShadow: "0px 1px 25.9355px rgba(192, 192, 192, 0.15)",
        overflow: "hidden",
      }}
    >
      <AppBox px="1.25rem" pt="1.25rem">
        <AppFlex justifyContent="space-between">
          <AppFlex position="relative">
            <Image src={"/resources/news.png"} alt="" width={52} height={17} />
          </AppFlex>
          <AppBox color={appColors.grey["50"]} fontSize="11px">
            1 min read
          </AppBox>
        </AppFlex>
        <AppBox noOfLines={3} mt="32px" textStyle="fs3" fontWeight="500">
          Techademy - the enterprise learning expert launches its e-learning
          platform for techies of today and tomorrow
        </AppBox>
      </AppBox>
      <AppFlex position="relative" height="258px" mt="32px">
        <Image src={"/resources/news.png"} alt="" fill={true} />
      </AppFlex>
    </AppCard>
  );
};

export default NewsCard;
