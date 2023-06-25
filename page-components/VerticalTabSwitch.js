"use client";
import React, { useState } from "react";
import AppBox from "../client-components/AppBox/AppBox";
import AppFlex from "../client-components/AppFlex/AppFlex";
import AppBadge from "../client-components/AppBadge/AppBadge";
import AppContainer from "../client-components/AppContainer/AppContainer";
import appColors from "../themes/appColors";

const VerticalTabSwitch = ({ list }) => {
  const [tab, setTab] = useState(list[0].name);
  return (
    <AppContainer>
      <AppFlex alignItems="start" justifyContent="space-between" mt="100px">
        <AppFlex direction={"column"} alignItems="start" flexBasis="48%">
          {list.map((item) => {
            return (
              <AppBox
                role="button"
                color={
                  tab === item.name
                    ? appColors.appblue["100"]
                    : appColors.grey["50"]
                }
                textStyle="fs4"
                fontWeight="600"
                pl="20px"
                py="10px"
                borderLeft={`2px solid ${
                  tab === item.name
                    ? appColors.appblue["100"]
                    : appColors.grey["50"]
                }`}
                key={item.name}
                onClick={() => setTab(item.name)}
              >
                {item?.name}
              </AppBox>
            );
          })}
        </AppFlex>
        <AppFlex gap={"20px"} customStyle={{ flexWrap: "wrap", flexBasis: "52%" }}>
          {list
            .filter((item) => item.name === tab)[0]
            .techlist.map((item) => {
              return <AppBadge key={item} text={item} />;
            })}
        </AppFlex>
      </AppFlex>
    </AppContainer>
  );
};

export default VerticalTabSwitch;
