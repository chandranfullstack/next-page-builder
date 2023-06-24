import appColors from "./appColors";
export const ButtonStyles = {
  variants: {
    primaryoutlinebtn: {
      backgroundColor: "transparent",
      fontSize: { base: "12px", sm: "16px", md: "16px", xl: "16px" },
      color: "white",
      fontWeight: "400",
      border: "1px solid white",
      borderRadius: "4px",
      _hover: {
        color: appColors.appblue["clientblue"],
        backgroundColor: "white",
      },
    },
    primarybtn: {
      backgroundColor: "white",
      fontSize: { base: "12px", sm: "16px", md: "16px", xl: "16px" },
      color: appColors.appblue["clientblue"],
      fontWeight: "500",
      border: "1px solid white",
      borderRadius: "4px",
      _hover: {
        opacity: "0.8",
      },
    },
    blueoutlinebtn: {
      backgroundColor: "transparent",
      fontSize: "16px",
      color: appColors.appblue["clientblue"],
      fontWeight: "400",
      border: `1px solid ${appColors.appblue["clientblue"]}`,
      borderRadius: "4px",
      _hover: {
        backgroundColor: appColors.appblue["clientblue"],
        color: "white",
      },
    },
    bluebtn: {
      backgroundColor: appColors.appblue["clientblue"],
      fontSize: "16px",
      color: "white",
      fontWeight: "500",
      border: "1px solid white",
      borderRadius: "4px",
      _hover: {
        opacity: "0.8",
      },
    },
    plainbtn: {
      backgroundColor: "transparent",
      fontSize: "16px",
      color: "white",
      fontWeight: "400",
      border: "hidden",
      _hover: {
        opacity: "0.8",
      },
    },
  },
};
