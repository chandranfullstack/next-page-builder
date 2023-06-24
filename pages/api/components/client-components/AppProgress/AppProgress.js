"use client";
import React from "react";
import NextTopLoader from "nextjs-toploader";
import appColors from "@/theme/appColors";

const AppProgress = () => {
  return <NextTopLoader color={"black"} showSpinner={false} />;
};

export default AppProgress;
