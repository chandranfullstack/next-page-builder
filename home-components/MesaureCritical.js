import AppBox from "../client-components/AppBox/AppBox";
import AppFlex from "../client-components/AppFlex/AppFlex";
import AppGrid from "../client-components/AppGrid/AppGrid";
import AppGridItem from "../client-components/AppGrid/AppGridItem";
import AppText from "../client-components/AppText/AppText";
import { measureCritical } from "./data";
import AppContainer from "../client-components/AppContainer/AppContainer";
import FeatureCard from "../page-components/FeatureCard";

const MeasureCritical = () => {
  return (
    <AppBox
      customStyle={{
        w: "100%",
        bgColor: "#15407E",
        backgroundImage: `url("/home/assement-img.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: { base: "auto", sm: "auto", md: "724px" },
      }}
    >
      <AppGrid templateRows={"1,1fr"}>
        <AppBox
          justifyContent="center"
          color={"black"}
          customStyle={{ textAlign: "center", w: { base: "auto", sm: "100%" } }}
        >
          <AppText
            customStyle={{
              color: "#FFFFFF",
              fontSize: "40px",
              fontWeight: "500",
              lineHeight: "50px",
              mt: "100px",
            }}
            text="Measure Critical Technical Skills with"
          />
          <AppText
            customStyle={{
              color: "#FFFFFF",
              fontSize: "40px",
              fontWeight: "500",
              lineHeight: "50px",
            }}
            text="Dynamic Assessments"
          />
          <AppText
            customStyle={{
              fontSize: "20px",
              fontWeight: "500",
              lineHeight: "33px",
              color: "#FFFFFF",
              mt: "13px",
            }}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          />
          <AppText
            customStyle={{
              fontSize: "20px",
              fontWeight: "500",
              lineHeight: "33px",
              color: "#FFFFFF",
            }}
            text="incididunt ut labore et dolore magna aliqua."
          />
        </AppBox>
      </AppGrid>
      <AppGrid
        templateRows="1,1fr"
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(3,1fr)",
        }}
        gap={"40px"}
        customStyle={{
          mt: "49px",
          mx: { md: "89px", sm: "15px", base: "15px" },
          pb: { base: "49px" },
        }}
      >
        {measureCritical.map((item, index) => {
          return (
            <FeatureCard
              key={index}
              head={item.name}
              subhead={item.para}
              icon={item.icon}
            />
          );
        })}
      </AppGrid>
    </AppBox>
  );
};
export default MeasureCritical;
