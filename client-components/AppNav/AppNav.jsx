"use client";

import React from "react";
import AppBox from "../AppBox/AppBox";
import AppFlex from "../AppFlex/AppFlex";
import { MdArrowDropDown, MdOutlineMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import AppLink from "../AppLink/AppLink";
import Image from "next/image";
import { navDropDown } from "./data";
import AppButton from "../AppButton/AppButton";
import AppText from "../AppText/AppText";
import AppNavItem from "./AppNavItem";
import appColors from "../../themes/appColors";
import AppNavCard from "./AppNavCard";
import {
  Container,
  keyframes,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import AppContainer from "../AppContainer/AppContainer";
import { GiHamburgerMenu } from "react-icons/gi";
import AppDrawer from "../AppDrawer";
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";
import { motion, Variant } from "framer-motion";
import { Slide, Collapse } from "@chakra-ui/react";

const Contact = ({ color }) => {
  return (
    <AppFlex
      customStyle={{
        justifyContent: "end",
        backgroundColor: color === "white" ? "transparent" : "white",
        alignItems: "center",
        height: "60px",
      }}
    >
      <AppFlex
        customStyle={{ gap: "22px", alignItems: "center", height: "100%" }}
      >
        <AppFlex
          color={color}
          customStyle={{ gap: "7px", alignItems: "center" }}
        >
          <AppBox>
            <MdOutlineMail size={20} />{" "}
          </AppBox>
          <AppBox fontSize={{ base: "8px", sm: "12px", md: "17px" }}>
            contact@techademy.net
          </AppBox>
        </AppFlex>

        <AppFlex gap={"1.5rem"}>
          <AppLink
            target="_blank"
            href={"https://www.linkedin.com/company/techademy-ulxp/"}
          >
            <BsLinkedin size={20} color={color} />
          </AppLink>
          <AppLink
            target="_blank"
            href={"https://www.youtube.com/@techademy1221"}
          >
            <BsYoutube size={20} color={color} />
          </AppLink>
          <AppLink
            target="_blank"
            href={"https://www.instagram.com/techademy_ULXP/"}
          >
            <BsInstagram size={20} color={color} />
          </AppLink>
        </AppFlex>
        {/* <AppBox fontSize={{base:"14px",md:"17px"}}>
          <AppLink
            customStyle={{
              lineHeight: "22px",
              fontWeight: "bold",
              textDecoration: "underline",
              color: color,
            }}
            fontSize={{base:"8px", sm:"12px",md:"14px"}}
            href={"/signin"}
          >
            Sign In
          </AppLink>
        </AppBox> */}
      </AppFlex>
    </AppFlex>
  );
};
const Nav = ({ logo, color }) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const router = useRouter();
  const [currentSelectedNavItem, setCurrentSelectedNavItem] = React.useState();

  return (
    <>
      <AppFlex
        customStyle={{
          width: "100%",
          py: "22px",
          position: "relative",
          backgroundColor: color === "white" ? "transparent" : "white",
          borderTop: `1px solid ${
            color === "white" ? "white" : appColors.grey["20"]
          }`,
          borderBottom: `1px solid ${
            color === "white" ? "white" : appColors.grey["20"]
          }`,
        }}
        justifyContent="space-between"
      >
        <AppFlex gap={"52px"}>
          <AppLink href={"/"}>
            <Image src={logo} width={208} height={24} alt="Image" />
          </AppLink>
          <AppFlex gap={"10px"} display={isLargerThan768 ? "flex" : "none"}>
            {navDropDown?.map((item) => {
              return (
                <AppFlex
                  key={item?.id}
                  textStyle="fs2"
                  onMouseOver={() => {
                    setCurrentSelectedNavItem(item?.id);
                  }}
                  color={color}
                  customStyle={{ gap: "2px", cursor: "pointer" }}
                >
                  {item?.name}
                  <MdArrowDropDown
                    style={{
                      transition: "all 0.1s ease-in-out",
                      transform: `rotate(${
                        currentSelectedNavItem === item?.id ? "180deg" : "0deg"
                      })`,
                    }}
                    size={24}
                  />
                </AppFlex>
              );
            })}
          </AppFlex>
        </AppFlex>

        <AppFlex gap={"8px"}>
          <AppButton variant={color === "white" ? "primarybtn" : "bluebtn"}>
            Watch Demo
          </AppButton>
          <AppButton
            variant={color === "white" ? "primaryoutlinebtn" : "blueoutlinebtn"}
          >
            Talk to Sales
          </AppButton>
        </AppFlex>
      </AppFlex>
      {(currentSelectedNavItem === "solutions" ||
        currentSelectedNavItem === "platform" ||
        currentSelectedNavItem === "resource") && (
        <AppFlex
          onMouseLeave={() => {
            setCurrentSelectedNavItem(null);
          }}
          alignItems={"flex-start"}
          gap={"22px"}
          className="nav-dropdown"
          customStyle={{
            backgroundColor: "#fff",
            borderBottom: "1px solid white",
            // height: "160px",

            zIndex: "10",
            position: "absolute",
            left: "0px",
            width: "100%",
            mx: "auto",
          }}
          as={motion.div}
          initial={{ y: -150 }}
          animate={{
            y: [null, 0, 0, 0],
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
        >
          <AppContainer>
            <AppFlex alignItems={"flex-start"} gap={"22px"}>
              <AppFlex
                direction={"column"}
                alignItems={"flex-start"}
                customStyle={{
                  flex: "1",
                  width: "100%",
                  padding: "22px",
                  marginTop: "22px",
                  height: "100%",
                  borderRight:
                    navDropDown?.find((f) => f?.id === currentSelectedNavItem)
                      ?.listTwoTitle && "1px solid #E4E4E4",
                }}
                as={motion.div}
              >
                <AppText
                  text={
                    navDropDown?.find((f) => f?.id === currentSelectedNavItem)
                      ?.listOneTitle
                  }
                  customStyle={{
                    fontSize: "14px",
                    textTransform: "uppercase",
                    lineHeight: "24px",
                    color: appColors.grey["30"],
                  }}
                />
                <AppBox
                  customStyle={{
                    width: "80%",
                    height: "1px",
                    backgroundColor: "#E4E4E4",
                    marginTop: "4px",
                    marginBottom: "14px",
                  }}
                />
                {navDropDown
                  ?.find((f) => f?.id === currentSelectedNavItem)
                  ?.listOne?.map((e, key) => (
                    <AppNavItem e={e} key={key} />
                  ))}
              </AppFlex>
              <AppFlex
                direction={"column"}
                alignItems={"flex-start"}
                customStyle={{
                  flex: "1",
                  padding: "22px",

                  width: "100%",
                  height: "100%",
                }}
              >
                {navDropDown?.find((f) => f?.id === currentSelectedNavItem)
                  ?.listTwoTitle ? (
                  <>
                    <AppText
                      text={
                        navDropDown?.find(
                          (f) => f?.id === currentSelectedNavItem
                        )?.listTwoTitle
                      }
                      customStyle={{
                        fontSize: "14px",
                        marginTop: "22px",
                        textTransform: "uppercase",
                        lineHeight: "24px",
                        color: appColors.grey["30"],
                      }}
                    />
                    <AppBox
                      customStyle={{
                        width: "80%",
                        height: "1px",
                        backgroundColor: "#E4E4E4",
                        marginTop: "4px",
                        marginBottom: "14px",
                      }}
                    />
                  </>
                ) : (
                  <AppBox
                    customStyle={{
                      height: "50px",
                    }}
                  />
                )}
                {navDropDown
                  ?.find((f) => f?.id === currentSelectedNavItem)
                  ?.listTwo?.map((e, key) => (
                    <AppNavItem e={e} key={key} />
                  ))}
              </AppFlex>
              {/* <AppFlex
                direction={"column"}
                alignItems={"flex-start"}
                customStyle={{
                  flex: "1",
                  padding: "22px",
                  paddingRight: "4rem",
                  paddingLeft: "4rem",
                  width: "100%",
                  backgroundColor: "#FAFAFA",
                  height: "100%",
                }}
              >
                <AppText
                  text={
                    navDropDown?.find((f) => f?.id === "solutions")
                      ?.listThreeTitle
                  }
                  customStyle={{
                    fontSize: "14px",
                    textTransform: "uppercase",
                    marginTop: "22px",
                    lineHeight: "24px",
                    color: appColors.grey["30"],
                  }}
                />
                <AppBox
                  customStyle={{
                    width: "80%",
                    height: "1px",
                    backgroundColor: "#E4E4E4",
                    marginTop: "4px",
                    marginBottom: "14px",
                  }}
                />
                {navDropDown
                  ?.find((f) => f?.id === currentSelectedNavItem)
                  ?.listThree?.map((e, key) =>
                    currentSelectedNavItem === "platform" ? (
                      <AppNavCard
                        title={
                          "5 Things Recruiters can focus on during a tech hiring freeze"
                        }
                        desc={
                          "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"
                        }
                        key={key}
                      />
                    ) : (
                      <AppNavItem needIcon={false} e={e} key={key} />
                    )
                  )}
              </AppFlex> */}
            </AppFlex>
          </AppContainer>
        </AppFlex>
      )}
    </>
  );
};
const AppNav = ({ logo = "/home/logo.svg", color = "black", customStyle }) => {
  const [isLessThan745] = useMediaQuery("(min-width: 745px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <AppBox
      customStyle={{
        top: "0",
        position: "sticky",
        zIndex: "100",
        width: "100%",
        backgroundColor: "white",
        // backgroundColor: color === "white" ? "#02387A" : "white",
        ...customStyle,
      }}
    >
      <AppContainer>
        <Contact color={color} />

        <AppBox display={{ base: "none", md: "block" }}>
          <Nav logo={logo} color={color} />
        </AppBox>

        <AppFlex
          display={{ base: "flex", md: "none" }}
          justifyContent="space-between"
          pb="0.5em"
        >
          <AppBox onClick={onOpen}>
            <GiHamburgerMenu color={color} />
          </AppBox>
          <AppBox onClick={() => router.push("/home")} role="button">
            <Image src={logo} width={158} height={24} alt="Image" />
          </AppBox>
          <AppButton
            size="xs"
            variant={color === "white" ? "primarybtn" : "bluebtn"}
            fontSize="12px"
            padding="1em"
          >
            Watch Demo
          </AppButton>
        </AppFlex>
      </AppContainer>
      <AppDrawer onClose={onClose} isOpen={isOpen} color={color} />
    </AppBox>
  );
};

export default AppNav;
