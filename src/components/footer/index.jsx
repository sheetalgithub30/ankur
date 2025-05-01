import React from "react";
import {
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/react'
import shield from "../../assets/shield.svg";
import 'swiper/css';
import 'swiper/css/pagination';
import influcent from "./../../assets/influcent.svg";


const Index = () => {
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)')
  const [isLargerThan490] = useMediaQuery('(min-width: 490px)')

  return (
    <Flex wrap="wrap" w="100%" borderTop="1px solid #FFFFFF99" bg="#813117" fontFamily="Montserrat">
      <Flex
        justifyContent={isLargerThan700?"space-between":"center"}
        mx="auto"
        w={isLargerThan700?"85%":"90%"}
        h="100%"
        textAlign="start"
        position="relative"
        borderRadius="50px"
        overflow="hidden"
        py="40px"
        color="#FFFFFF"
       display={isLargerThan700?"flex":"inline"}
      >
        <Flex
          gap="25px"
          fontSize="14px"
          flexDir={isLargerThan700 ? "column" : isLargerThan490 ? "row" : "column"}
          justifyContent={"center"}
          alignItems={isLargerThan490 ? "start" : "center"}
        >
          <a href={"/privacy-policy"}>
            <Text  fontWeight="600" fontSize="14px">
              Privacy Policy
            </Text>
          </a>
          <a href={"/terms-of-use"}>
            <Text  fontWeight="600" fontSize="14px">Terms of use</Text>
          </a>
          <a href={"/get-in-touch"}>
            <Text  fontWeight="600" fontSize="14px">Get In Touch</Text>
          </a>
         
        </Flex>
        <Flex alignItems="center"
        justifyContent="center"
        gap="6px" className="max-md:mt-6">
          <Image  src={shield} />
          <Text color="#FFFFFF99"  fontWeight="600" fontSize="12px">
            Powered by 
          </Text>
          <Image  src={influcent} />

        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;
