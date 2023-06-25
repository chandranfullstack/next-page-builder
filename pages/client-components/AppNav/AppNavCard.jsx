import React from "react";
import AppBox from "../AppBox/AppBox";
import AppFlex from "../AppFlex/AppFlex";
import AppText from "../AppText/AppText";

const AppNavCard = ({ title, desc }) => {
  return (
    <AppFlex gap={"1rem"} alignItems="flex-start" customStyle={{
      borderBottom: "1px solid #E4E4E4",
      paddingTop: "1.5rem",
      paddingBottom: "1.5rem",
    }}>
      <AppBox
        customStyle={{
          display: "flex",
          flex: "1",
          height: "110px",
          backgroundColor: "#D9D9D9",
        }}
      />
      <AppFlex
        direction={"column"}
        customStyle={{
          flex: "2",
        }}
      >
        <AppText
          text={title}
          customStyle={{
            fontSize: "15px",
            fontWeight: "bold",
            color: "black",
          }}
        />
        <AppText
          text={desc}
          customStyle={{
            color: "#666",
          }}
        />
      </AppFlex>
    </AppFlex>
  );
};

export default AppNavCard;
