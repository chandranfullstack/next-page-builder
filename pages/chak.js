import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";

const Chak=()=>{
    return(
         <Flex flexDirection={"column-reverse"}>
         <Box backgroundColor={"red"} color={"white"} w={"full"} h={"100%"}>
            <Text>Hello World Chakra UI</Text>
            <Text textStyle={"fs10"}>Next Js with Tech Academy </Text>
            <chakra.div textStyle={"fs10"}>Hello Universe</chakra.div>
         </Box>
         </Flex>
    )
}
export default Chak;