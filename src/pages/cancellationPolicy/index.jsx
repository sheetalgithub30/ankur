import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import Navbar from './../../components/navbar/index.jsx';
import Footer from './../../components/footer/index.jsx';



const CancellationPolicy = () => {



  return (
    <Box bg="gray.50">
        <Navbar />
    <Box p="20px" mt="100px" w={{ base: "98%", md: "75%" }} mx="auto" bg="gray.50" minH="36vh">
      <VStack spacing={6} align="start">
        {/* Page Title */}
        <Heading as="h1" size="xl" color="teal.600">
          Refund Policy
        </Heading>

      

        {/* Introduction */}
        <Text fontSize="lg" color="gray.700">
          Incase of refund, it will be approved by INFLUCENT TECHNOLOGIES PRIVATE LIMITED. The refund will be credited within 7 days of approval.
        </Text>

     
      </VStack>
    </Box>
      <Footer />
    </Box>
  );
};

export default CancellationPolicy;
