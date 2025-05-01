import React, { useEffect } from 'react';
import { Box, Heading, Text, Link, Flex, useMediaQuery,  ListItem, UnorderedList } from '@chakra-ui/react';
import Navbar from '../../components/navbar/index.jsx';
import Footer from '../../components/footer/index.jsx';

const PrivacyPolicy = () => {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
    useEffect(()=>{
     window.scrollTo(0,0);
    },[]);


  return (
    <Flex flexDir="column">
     <Navbar />
    <Box  w={isLargerThan1000 ? "70%" : "98%"} mx="auto" p={4} mt="90px">
   

      <Heading as="h2" size="lg" mb={4}>
      🛡 Privacy Policy –
      </Heading>

      <Text fontSize="sm" mb={4}>
      Effective Date: April 23, 2025
      </Text>

      <Heading mb={4} as="h3" size="md" mt={8}>
      1. Overview
      </Heading>

      <Text mb={4} >
      Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you visit or use our website or services.
      </Text>

      <Heading as="h3" size="md" mb={4} mt={8}>
      2. Information We Collect
      </Heading>


  

      <UnorderedList mb={4}>
        <ListItem><b>Personal Data:</b> Name, email, phone number, and payment details (for bookings or purchases).
</ListItem>
        <ListItem><b>Usage Data:</b> Device info, browser type, IP address, and site activity.</ListItem>
        <ListItem><b>Communication Data:</b> Messages or forms you submit on our site.
        </ListItem>
      </UnorderedList>



      <Heading as="h3" size="md" mb={4} mt={8}>
      3. How We Use Your Information
      </Heading>
      <Text mb={4} >
      We use your data to:      </Text>

      <UnorderedList mb={4}>
        <ListItem>Deliver coaching services and respond to inquiries</ListItem>
        <ListItem>Send session reminders, updates, or newsletters (if subscribed)
        </ListItem>
        <ListItem>Process payments
        </ListItem>
        <ListItem>Improve website experience and content
        </ListItem>
      </UnorderedList>


      <Heading as="h3" size="md" mb={4} mt={8}>
      4. Sharing Your Information      </Heading>
      <Text mb={4} >We do <b>not</b> sell or rent your personal data. We may share it with:   </Text>

      <UnorderedList mb={4}>
        <ListItem>Payment processors (e.g., Razorpay, Stripe)
        </ListItem>
        <ListItem>Analytics tools (e.g., Google Analytics)

        </ListItem>
        <ListItem>Email marketing services (e.g., Mailchimp)



        </ListItem>
        
      </UnorderedList>




      <Heading as="h3" size="md" mb={4} mt={8}>
      5. Cookies & Tracking
      </Heading>

      <Text mb={4}>
      We may use cookies for a smoother browsing experience. You can choose to disable cookies in your browser settings.
      </Text>


      <Heading as="h3" size="md" mb={4} mt={8}>
      6. Your Rights</Heading>
      <Text mb={4} >You have the right to:
      </Text>

      <UnorderedList mb={4}>
        <ListItem>Access, update, or delete your personal information

        </ListItem>
        <ListItem>Unsubscribe from marketing emails at any time


        </ListItem>
       
        
      </UnorderedList>

      <Heading as="h3" size="md" mb={4} mt={8}>
      7. Contact Us      </Heading>

      <Text mb={4}>
      For any questions about this policy, please email: <Link href="mailto:rabiyagill.lifecoach@gmail.com" color="teal.500">rabiyagill.lifecoach@gmail.com</Link>      </Text>

    

     

   
    </Box>
    <Footer />
    </Flex>
  );
};

export default PrivacyPolicy;
