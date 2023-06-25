import React from "react";
import AppBox from "../client-components/AppBox/AppBox";
import AppText from "../client-components/AppText/AppText";


const CountWithText = ({
  countTextStyle = "countTextMd",
  subTextStyle = "fs3",
  countText,
  subText,
  color = "black",
}) => {
  return (
    <AppBox>
      <AppText color={color} textStyle={countTextStyle} text={countText} />
      <AppText color={color} textStyle={subTextStyle} text={subText} />
    </AppBox>
  );
};

export default CountWithText;
