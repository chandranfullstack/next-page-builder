"use client";

import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { navDropDown } from "../AppNav/data";
import AppLink from "../AppLink/AppLink";
import AppText from "../AppText/AppText";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Spinner } from "@chakra-ui/react";

function AppDrawer({ isOpen, onClose, color }) {
  const [currentList, setCurrentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { onClose: closeOnRouteChange } = useDisclosure();

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} size={"xs"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          {currentList.length >= 1 ? (
            <Box>
              <Icon
                as={AiOutlineArrowLeft}
                onClick={() => setCurrentList([])}
              />
            </Box>
          ) : null}
        </DrawerHeader>
        <DrawerBody>
          {isLoading ? (
            <Spinner color={"blue"} />
          ) : (
            <Stack>
              {currentList?.length >= 1
                ? currentList?.map((each) => {
                    return (
                      <AppLink href={each.link} key={each?.title}>
                        <AppText
                          text={each?.title}
                          color="black"
                          onClick={() => {
                            setIsLoading(true);
                            closeOnRouteChange();
                          }}
                          customStyle={{
                            textTransform: "capitalize",
                          }}
                        />
                      </AppLink>
                    );
                  })
                : navDropDown?.map((each, index) => {
                    const subHead = [
                      each?.listOneTitle,
                      each?.listTwoTitle,
                      each?.listThreeTitle,
                    ];
                    const subPageLists = [
                      each?.listOne,
                      each?.listTwo,
                      each?.listThree,
                    ];
                    return (
                      <React.Fragment key={each.name + index}>
                        {" "}
                        <Stack>
                          <AppText
                            text={each?.name}
                            color="black"
                            customStyle={{
                              textTransform: "capitalize",
                              fontWeight: "700",
                            }}
                          />
                          <Stack paddingLeft={"1em"}>
                            {subHead?.map((eachSubhead, index) => {
                              if (eachSubhead) {
                                return (
                                  <AppText
                                    text={eachSubhead}
                                    key={each.subHead + index + 1}
                                    customStyle={{
                                      textTransform: "capitalize",
                                    }}
                                    color="black"
                                    onClick={() => {
                                      setCurrentList(subPageLists[index]);
                                    }}
                                  />
                                );
                              }
                            })}
                          </Stack>
                        </Stack>
                        <Divider />
                      </React.Fragment>
                    );
                  })}
            </Stack>
          )}
        </DrawerBody>
        {/* <DrawerFooter>
             footer
          </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
}

export default AppDrawer;
