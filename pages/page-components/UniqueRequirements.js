import AppBox from "../client-components/AppBox/AppBox";

const UniqueRequirements = ({
  image = "/hr/laterhire/uniquesectionbg.svg",
  customStyle,
  children,
}) => {
  return (
    <AppBox
      customStyle={{
        w: "100%",
        bgColor: "#15407E",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: { lg: "580px" },
        ...customStyle,
      }}
    >
      {children}
    </AppBox>
  );
};
export default UniqueRequirements;
