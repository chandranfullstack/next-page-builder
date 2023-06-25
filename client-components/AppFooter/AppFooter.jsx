"use client";
import { useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import AppBox from "../AppBox/AppBox";
import AppFlex from "../AppFlex/AppFlex";
import AppLink from "../AppLink/AppLink";
import { navDropDown } from "../AppNav/data";
import AppText from "../AppText/AppText";
import AppGrid from "../AppGrid/AppGrid";
import AppContainer from "../AppContainer/AppContainer";

const AppFooter = ({ bgimg = true }) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <AppFlex
      direction={"column"}
      alignItems={"flex-start"}
      justifyContent={"center"}
      customStyle={{
        width: "100%",
        pt: "163px",
        pb: "100px",
        backgroundColor: bgimg ? "" : "#1B1B1B",
        backgroundImage: bgimg ? `url("/footerbg.svg")` : "",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <AppContainer>
        {/* <AppBox
        customStyle={{
          height: "85.47px",
          borderRadius: "0px 0px 100% 100%",
          backgroundColor: "white",
          width: "100%",
        }}
      /> */}
        <AppFlex
          direction={{ base: "column", xl: "row" }}
          customStyle={{
            gap: "1rem",
            width: "100%",
            // marginLeft: "2rem",
            alignItems: "start",
            color: "black",
          }}
        >
          <AppFlex
            direction={"column"}
            alignItems={"start"}
            width={{ base: "100%", xl: "20%" }}
          >
            <Image
              src="/common/logo.svg"
              alt="arrow"
              width={220}
              height={120}
            />

            {/* <AppText
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc."
            }
          /> */}
            <AppLink style={{ display: "block" }} href={"/"}>
              <AppFlex gap={"0.5rem"}>
                <Image
                  src="/common/mail.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                />
                <AppText text={"contact@techademy.net"} />
              </AppFlex>
            </AppLink>
          </AppFlex>
          <AppGrid
            width={{ base: "100%", xl: "80%" }}
            gap="40px"
            templateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              xl: "repeat(3,1fr)",
            }}
            justifyItems="start"
          >
            <AppFlex
              gap={"0.6rem"}
              direction={"column"}
              alignItems={"flex-start"}
            >
              <AppText
                text={"Solutions"}
                customStyle={{
                  color: "#737373",
                  fontSize: "16px",
                }}
              />
              {navDropDown[1].listOne.map((item, index) => (
                <AppLink key={index} href={item.link} className="link">
                  {item.title}
                </AppLink>
              ))}
            </AppFlex>
            <AppFlex
              direction={"column"}
              gap={"0.6rem"}
              alignItems={"flex-start"}
            >
              <AppText
                text={"Skilling Solutions"}
                customStyle={{
                  color: "#737373",
                  fontSize: "16px",
                }}
              />
              {navDropDown[0].listTwo.map((item, index) => (
                <AppLink key={index} href={item.link} className="link">
                  {item.title}
                </AppLink>
              ))}
            </AppFlex>

            <AppFlex
              gap={"0.6rem"}
              direction={"column"}
              alignItems={"flex-start"}
            >
              <AppText
                text={"Featured Platform "}
                customStyle={{
                  color: "#737373",
                  fontSize: "16px",
                }}
              />
              {navDropDown[0].listOne.map((item, index) => (
                <AppLink key={index} href={item.link} className="link">
                  {item.title}
                </AppLink>
              ))}
            </AppFlex>
            <AppFlex
              direction={"column"}
              gap={"0.6rem"}
              alignItems={"flex-start"}
            >
              <AppText
                text={"Platform by Use Case"}
                customStyle={{
                  color: "#737373",
                  fontSize: "16px",
                }}
              />
              {navDropDown[1].listTwo.map((item, index) => (
                <AppLink key={index} href={item.link} className="link">
                  {item.title}
                </AppLink>
              ))}
            </AppFlex>

            <AppFlex
              gap={"0.6rem"}
              direction={"column"}
              alignItems={"flex-start"}
            >
              <AppText
                text={"Resources"}
                customStyle={{
                  color: "#737373",
                  fontSize: "16px",
                }}
              />
              {navDropDown[2].listOne
                .concat(navDropDown[2].listTwo)
                .map((item, index) => (
                  <AppLink key={index} href={item.link} className="link">
                    {item.title}
                  </AppLink>
                ))}
            </AppFlex>
          </AppGrid>
        </AppFlex>
        <AppFlex
          direction={"column"}
          alignItems={"flex-start"}
          customStyle={{
            gap: "2rem",
            width: "100%",
            height: "100%",
            flex: "1",
            paddingTop: "1.5rem",
          }}
        >
          <AppBox
            customStyle={{
              width: "100%",
              height: "1px",
              backgroundColor: "#fff",
              opacity: "0.2",
            }}
          />
          <AppFlex
            justifyContent="space-between"
            customStyle={{
              width: "100%",
            }}
          >
            <AppFlex
              gap={"0.6rem"}
              customStyle={{
                color: "#fff",
              }}
            >
              <Image
                src="/common/globe.svg"
                alt="arrow"
                width={20}
                height={20}
              />
              United States (English)
            </AppFlex>
            <AppFlex
              gap={"1.5rem"}
              customStyle={{
                color: "#fff",
              }}
            >
              <AppLink
                target="_blank"
                href={"https://www.linkedin.com/company/techademy-ulxp/"}
              >
                <Image
                  src="/common/LinkedIn.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                />
              </AppLink>
              <AppLink
                target="_blank"
                href={"https://www.youtube.com/@techademy1221"}
              >
                <Image
                  src="/common/YouTube.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                />
              </AppLink>
              <AppLink
                target="_blank"
                href={"https://www.instagram.com/techademy_ULXP/"}
              >
                <Image
                  src="/common/Instagram.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                />
              </AppLink>
            </AppFlex>
          </AppFlex>
          <AppBox
            customStyle={{
              width: "100%",
              height: "1px",
              backgroundColor: "#fff",
              opacity: "0.2",
            }}
          />
          <AppFlex
            justifyContent="space-between"
            customStyle={{
              width: "100%",
              fontSize: { base: "12px", sm: "16px", md: "16px", xl: "16px" },
            }}
          >
            <AppText
              customStyle={{
                fontSize: { basic: "12px", md: "16px", sm: "16px", xl: "16px" },
                color: "#737373",
              }}
              text={"© 2023 Techademy.net"}
            />
            <AppBox>
              <AppLink
                href={"/privacy-policy"}
                fontSize={{ base: "12px", sm: "16px", md: "16px", xl: "16px" }}
              >
                Privacy Policy
              </AppLink>
              <AppBox customStyle={{ m: "0px 4px", display: "inline" }}>
                |
              </AppBox>

              <AppLink
                href={"/terms-of-service"}
                fontSize={{ base: "12px", sm: "16px", md: "16px", xl: "16px" }}
              >
                Terms & Conditions
              </AppLink>
            </AppBox>
          </AppFlex>
        </AppFlex>
        <style>
          {`.link:hover{
            text-decoration:underline;
          }
          `}
        </style>
      </AppContainer>
    </AppFlex>
  );
};

export default AppFooter;
