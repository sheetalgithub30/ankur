import React, { useEffect } from "react";
import {
  Box,
  Button,
  Text,
  Flex,
  Textarea,
  Stack,
  SimpleGrid,
  FormControl,
  FormLabel,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";

import gemstoneHero from "./../../assets/gemstoneHero.svg";


import Navbar from "../../components/navbar/index.jsx";
import Footer from "../../components/footer/index.jsx";

const Index = () => {
  const [isGreaterThan1000] = useMediaQuery("(min-width: 1000px)");
  const [isGreaterThan900] = useMediaQuery("(min-width: 900px)");
  const [isGreaterThan300] = useMediaQuery("(min-width: 300px)");
  const [isGreaterThan600] = useMediaQuery("(min-width: 600px)");


    useEffect(()=>{
     window.scrollTo(0,0);
    },[]);

  return (
    <Flex
      display="flex"
      flexDir="column"
      color="#06325E"
      textAlign="center"
      fontFamily="Lora"
      bg="white"
    >
      {/* navbar */}
      <Navbar select={"gemstones"} />

      <Flex
        width="100%"
        height={isGreaterThan600?"300px":"100%"}
        bgColor="#F8EFE7"
        direction="column"
        mt="70px"
      >
        <Flex
          flex="1"
          backgroundImage={`url(${gemstoneHero})`}
          backgroundSize="cover"
          backgroundPosition="center"
          mt="40px"
          backgroundRepeat="no-repeat"
          id="home"
          height={isGreaterThan600?"300px":"100%"}
        >
          <Flex alignItems="center" justifyContent="center" w="100%">
            <Box w={isGreaterThan600?"60%":"100%"}>
              <Text
                fontFamily="Playfair Display"
                fontSize={isGreaterThan600?"56px":"36px"}
                fontWeight="400"
                textAlign="center"
                color="#000000"
              >
                Gemstones and Crystals
              </Text>

              <Text
                fontFamily="Alice"
                fontWeight="400"
                fontSize="18px"
                color="#00000099"
                textAlign="center"
                my={4}
                w={isGreaterThan600?"60%":"93%"}
                mx="auto"
              >
                Awaken your Energy with Gemstone Magic!
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>

       {/* gemstones */}
       <Box h="30vh"></Box>

      {/* footer */}
      <Footer />
    </Flex>
  );
};

export default Index;
