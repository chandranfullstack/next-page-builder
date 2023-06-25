import React from "react";
import AppFlex from "../client-components/AppFlex/AppFlex";
import appColors from "../themes/appColors"

const RedirectStripe = ({
  children,
  bg = appColors.appblue["100"],
  ...props
}) => {
  return (
    <AppFlex
      bg={bg}
      justifyContent="center"
      alignItems="center"
      textStyle="fs2"
      color="white"
      gap={"10px"}
      {...props}
    >
      {children}
    </AppFlex>
  );
};

export default RedirectStripe;
