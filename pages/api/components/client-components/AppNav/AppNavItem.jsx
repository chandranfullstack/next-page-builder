import React from "react";
import AppFlex from "../AppFlex/AppFlex";
import Image from "next/image";
import AppText from "../AppText/AppText";
import appColors from "../../../../../themes/appColors";
import Link from "next/link";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";

const AppNavItem = ({ e, needIcon = true }) => {
  
  return (
    <AppFlex
      key={e?.title}
      alignItems={"flex-start"}
      customStyle={{ gap: "1rem", marginBottom: "1.5rem" }}
    >
      {needIcon && (
        <Image
          src="/common/lightbolt.svg"
          width={15}
          style={{ marginTop: "4px" }}
          height={14}
          alt="Image"
        />
      )}
      <AppFlex
        direction={"column"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        customStyle={{ gap: "1px", color: "black" }}
        textStyle="fs2"
      >
        <Link
          href={e.link || "/"}
          style={{
            fontWeight: "bold",
            fontSize: "16px",
            color: "black",
            // lineHeight: "24px",
          }}
        >
          {e?.title}
        </Link>
        <AppText
          text={e?.subTitle}
          color={appColors.grey["30"]}
          customStyle={{
            fontSize: "14px",
            lineHeight: "21px",
          }}
        />
      </AppFlex>
    </AppFlex>
  );
};

export default AppNavItem;
