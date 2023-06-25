"use client";
import React from "react";
import AppGridItem from "../client-components/AppGrid/AppGridItem";
import AppBox from "../client-components/AppBox/AppBox";
import Image from "next/image";
import AppFlex from "../client-components/AppFlex/AppFlex";
import AppText from "../client-components/AppText/AppText";
import AppDivider from "../client-components/AppDivider/AppDivider";
import appColors from "../themes/appColors";
import moment from "moment/moment";
import { useRouter } from "next/navigation";
import AppLink from "../client-components/AppLink/AppLink";

const BlogCard = ({
  borderColor = appColors.grey["20"],
  bgColor = "white",
  item,
  link,
  color = "black",
}) => {
  const router = useRouter();
  let image = item?.bannerImageUrl || item?.imageUrl;
  let category = item?.category;
  return (
    <AppLink
      href={link}
      className="bounce"
      customStyle={{
        border: `1px solid ${borderColor}`,
        borderRadius: "5px",
        minHeight: "490px",
        maxHeight: "490px",
        maxWidth: {base:"auto",sm:"auto",md:"394px"},
        backgroundColor: "white",
      }}
    >
      <AppGridItem
        h="100%"
        w="100%"
        // onClick={() => router.push(`${link}`)}
      >
        <AppFlex
          customStyle={{ p: "3" }}
          justifyContent="start"
          alignItems="stretch"
          direction={"column"}
          h="100%"
          w="100%"
        >
          <AppFlex>
            <Image
              alt="image"
              src={item?.img || image}
              width={399}
              height={209}
              style={{
                maxHeight: "320px",
                objectFit: "contain",
              }}
            />
          </AppFlex>
          {category && (
            <AppFlex
              customStyle={{
                bgColor: "#6FA0FF2E",
                w: "180px",
                h: "30px",
                mt: "17px",
                mb: "13px",
                px: "4px",
                color: color,
                borderRadius: "4px",
              }}
              alignItems="center"
              justifyContent="center"
            >
              <AppText
                color={color}
                isTruncated
                text={category}
                customStyle={{
                  lineHeight: "22px",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              />
            </AppFlex>
          )}
          <AppText
            customStyle={{
              fontSize: { base: "18px", md: "22px" },
              lineHeight: { base: "24px", md: "32px" },
              fontWeight: "600",
              height: "95px",
              color: color, //black
            }}
            mt="10px"
            noOfLines={3}
            text={item?.title}
          />
          <AppBox
            flexGrow={"1"}
            w="100%"
            display="flex"
            flexDirection="column"
            justifyContent="end"
          >
            <AppDivider
              customstyle={{
                mt: "14px",
                color: color, //#1D1D1D
                bgColor: "rgba(29, 29, 29, 0.2)",
                h: "1px",
              }}
            />
            <AppFlex customStyle={{ mt: "10px" }}>
              <AppText
                text={moment(item?.publishDate).format("LLL")}
                customStyle={{
                  fontSize: "16px",
                  lineHeight: "28px",
                  fontWeight: "400",
                  color: color,
                }}
              />
            </AppFlex>
          </AppBox>
        </AppFlex>
      </AppGridItem>
      <style>
        {`.bounce:hover{ 
            transform: scale(1.05);
            transition: 0.3s all ease;
          }
          .bounce:active{
            transform: scale(0.9);
            transition: 0.3s all ease;
            backgroundColor: ${bgColor};
          }
          `}
      </style>
    </AppLink>
  );
};

export default BlogCard;
