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

import payment from "./../../assets/payment.svg";
import guidance from "./../../assets/guidance.svg";
import guarantee from "./../../assets/guarante.svg";
import serviceHero from "./../../assets/serviceHero.svg";
import heal2 from "./../../assets/heal2.svg";
import servicePoly from "./../../assets/servicePoly.png";

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
      <Navbar select={"services"} />

      <Flex
        width="100%"
        height={isGreaterThan600?"300px":"100%"}
        bgColor="#F8EFE7"
        direction="column"
        mt="70px"
      >
        <Flex
          flex="1"
          backgroundImage={`url(${serviceHero})`}
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
                Services
              </Text>

              <Text
                fontFamily="Alice"
                fontWeight="400"
                fontSize="18px"
                color="#00000099"
                textAlign="center"
                my={4}
                w={isGreaterThan600?"60%":"95%"}
                mx="auto"
              >
                Explore our range of services designed to provide deep insights
                and clarity into various aspects of your life.{" "}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        w="100%"
        mt="100px"
        background="white"
        position="relative"
        justifyContent="center"
        flexDir="column"
        pb="40px"
      >
        {/* services */}
        <Box></Box>

        <Flex
          backgroundImage={`url(${servicePoly})`}
          backgroundSize= "cover" 
          backgroundPosition= "center"
          mt="40px"
          backgroundRepeat="no-repeat"
          alignItems="center"
          justifyContent="center"
          height="307px"
        >
          <Text
            lineHeight={isGreaterThan600?"49px":"40px"}
            w={isGreaterThan600 ? "42%" : "95%"}
            fontSize={isGreaterThan600?"36px":"28px"}
            fontWeight="400"
            fontFamily="Playfair Display"
            color="#000000"
          >
            “The stars never lie, they only guide. Let their wisdom shape your
            journey"
          </Text>
        </Flex>

        <Flex
          zIndex={99}
          color="#06325E"
          w={isGreaterThan1000 ? "85%" : "98%"}
          mx="auto"
          bg="white"
          borderRadius="18px"
          height="196px"
          mt="15px"
          fontFamily="Alice"
        >
          <SimpleGrid columns={3} w="100%">
            <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
              <Flex flexDir="column" w="100%" alignItems="center" gap="18px">
                <Flex
                  bg="#FFFFFFF5"
                  borderRadius="50%"
                  w="80px"
                  h="80px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image src={guidance} w="90px" />
                </Flex>
                <Text
                  fontWeight="400"
                  fontSize={["clamp(12px, 3vw, 16px)"]}
                  color="#000000"
                >
                  Ethical & Professional Guidance
                </Text>
              </Flex>
            </Flex>
            <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
              <Flex flexDir="column" w="100%" alignItems="center" gap="18px">
                <Flex
                  bg="#FFFFFFF5"
                  borderRadius="50%"
                  w="80px"
                  h="80px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image src={guarantee} w="50px" />
                </Flex>
                <Text
                  fontWeight="400"
                  fontSize={["clamp(12px, 3vw, 16px)"]}
                  color="#000000"
                >
                  100% Confidentiality Guaranteed
                </Text>
              </Flex>
            </Flex>
            <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
              <Flex flexDir="column" w="100%" alignItems="center" gap="18px">
                <Flex
                  bg="#FFFFFFF5"
                  borderRadius="50%"
                  w="80px"
                  h="80px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image src={payment} w="60px" />
                </Flex>
                <Text
                  fontWeight="400"
                  fontSize={["clamp(12px, 3vw, 16px)"]}
                  color="#000000"
                  w={isGreaterThan600?"":"40%"}
                >
                  Secure Payment
                </Text>
              </Flex>
            </Flex>
          </SimpleGrid>
        </Flex>
      </Flex>

      {/* footer */}
      <Footer />
    </Flex>
  );
};

export default Index;
