import React, { useEffect } from "react";
import { Box, Flex, Text, Image, Link, Icon, VStack, useMediaQuery } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Navbar from "./../../components/navbar/index.jsx";
import Footer from "./../../components/footer/index.jsx";
import line from "./../../home/contactUs_Line.svg";

function Index() {
   const [isGreaterThan1000] = useMediaQuery("(min-width: 1000px)");
    const [isGreaterThan600] = useMediaQuery("(min-width: 600px)");
    const [isGreaterThan400] = useMediaQuery("(min-width: 400px)");


  useEffect(()=>{
   window.scrollTo(0,0);
  },[]);

  
  return (
    <Box>
      <Navbar />
      <Flex
        w={{ base: "90%", md: "75%" }}
        m="auto"
        minH="85vh"
        py={{base: "80px", md: "150px"}}
        justify="space-between"
        align="center"
        direction={{ base: "column", md: "row" }}
      >
        {/* Left Section */}
        <Box w={{ base: "90%", md: "55%" }} textAlign={{ base: "center", md: "left" }}>
          <Text my={4} fontFamily="Playfair Display" fontSize="16px" fontWeight="400">
            Get in touch 
          </Text>
          <Text fontSize={isGreaterThan600?"60px":"40px"} fontWeight="400" fontFamily="Alice" color="#813117">
            We are always ready to help you and answer your questions
          </Text>
          <Text  my={4} fontFamily="Playfair Display" fontSize="16px" fontWeight="400">
            If you have any query or facing any issue you can reach out to us on
          </Text>
        </Box>

        {/* Middle Section */}
        <Box transform={isGreaterThan600 ?  'none':'rotate(90deg)' } my={isGreaterThan600?"":"-100px"}>
          <Image src={line} alt="Decorative Line" />
        </Box>

        {/* Right Section */}
        <Box
          w={{ base: "90%", md: "30%" }}
        
        >
          <VStack align="start" spacing={6}>
            {/* Email Section */}
            <Flex align="start">
              <Icon as={MdOutlineEmail} boxSize={6} mr={2} />
              <Box>
                <Text fontSize="16px" fontWeight="600" fontFamily="Playfair Display">Email</Text>
                <Text fontSize="16px" fontWeight="400" fontFamily="Alice">Shubhamg@influcent.com</Text>
              </Box>
            </Flex>

        
          </VStack>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
}

export default Index;
