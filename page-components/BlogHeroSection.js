import React from "react";
import AppBox from "../client-components/AppBox/AppBox";

const BlogHeroSection = ({ component, bgimg }) => {
  return (
    <AppBox
      customStyle={{
        backgroundImage: `url("${bgimg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      {component}
    </AppBox>
  );
};

export default BlogHeroSection;
