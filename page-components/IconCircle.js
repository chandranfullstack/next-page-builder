import React from "react";
import AppFlex from "../client-components/AppFlex/AppFlex";
import appColors from "../themes/appColors";

const IconCircle = ({ children }) => {
  return (
    <AppFlex
      w="59px"
      h="59px"
      alignItems="center"
      borderRadius="100%"
      bg={appColors.appblue["10"]}
      justifyContent="center"
    >
      {children}
    </AppFlex>
  );
};

export default IconCircle;
