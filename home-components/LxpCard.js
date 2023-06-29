import AppBox from "../client-components/AppBox/AppBox";
import AppFlex from "../client-components/AppFlex/AppFlex";
import AppText from "../client-components/AppText/AppText";
import Image from "next/image";
import AppGrid from "../client-components/AppGrid/AppGrid";

import AppGridItem from "../client-components/AppGrid/AppGridItem";
import AppDivider from "../client-components/AppDivider/AppDivider";
import { LxpData } from "./data";
import AppContainer from "../client-components/AppContainer/AppContainer";
import { RespGridCol, RespheaderText } from "../themes/utils";
import BlogCard from "../page-components/BlogCard";
import { client } from "../contentful/client"
const getData = async () => {
  const res = await client.getEntries({ content_type: "blogs" });

  return res?.items;
};
const LxpCard = async ({
  bgColor,
  color,
  color2,
  pt = { base: "20px", md: "100px" },
  borderColor,
}) => {
  const data = await getData();
  return (
    <AppBox customStyle={{ bgColor: bgColor, py: pt }}>
      <AppContainer maxW="1264px">
        <AppGridItem>
          <AppBox
            justifyContent="center"
            color={color}
            customStyle={{ textAlign: "center", w: "100%" }}
          >
            <AppText
              color={color}
              textStyle={RespheaderText}
              text="How Our LXP works in the real world"
            />
            <AppText
              color={color}
              textStyle={RespheaderText}
              text="and other success stories"
            >
              <AppBox>
                <Image
                  alt="image"
                  src="/home/Vector.svg"
                  height="12"
                  width="96"
                />
              </AppBox>
            </AppText>
            <AppFlex justifyContent="center" mb="51px" mt="14px">
              {/* <AppText
                color={color}
                w={["100%", "533px"]}
                textAlign="center"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
              /> */}
            </AppFlex>
          </AppBox>
        </AppGridItem>

        <AppGrid
          templateColumns={RespGridCol}
          gap={"38px"}
          mt={{base:"20px",md:"40px"}}
          justifyItems="center"
          justifyContent="center"
        >
          {data?.slice(0, 3)?.map((item, index) => {
            return (
              <BlogCard
                key={index + "blog"}
                item={item?.fields}
                // color={color2}
                bgColor={bgColor}
                link={`/resources/blog/${item?.fields?.slug}`}
              />
            );
          })}
        </AppGrid>
      </AppContainer>
    </AppBox>
  );
};
export default LxpCard;
