import React, { useEffect } from 'react';
import { Box, Heading, Text, Stack, Flex, useMediaQuery,  ListItem, UnorderedList ,Link } from '@chakra-ui/react';
import Navbar from '../../components/navbar/index.jsx';
import Footer from '../../components/footer/index.jsx';

const TermsOfUse = () => {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
    useEffect(()=>{
     window.scrollTo(0,0);
    },[]);


  return (
    <Flex flexDir="column">
     <Navbar />
    <Box  w={isLargerThan1000 ? "70%" : "98%"} mx="auto" p={4}>
      <Heading  mt="90px" mb={isLargerThan1000?"80px":"40px"} as="h1" size={isLargerThan1000?"xl":"lg"} textAlign='center'>
      📜 Terms and Conditions – 
      </Heading>

      <Text fontSize="sm" mb={4}>
      Effective Date: April 23, 2025
      </Text>

      <Heading mb={4} as="h3" size="md" mt={8}>
      1. Acceptance of Terms
      </Heading>

      <Text mb={4} >
      By using our services or accessing our website, you agree to these Terms and Conditions. If you disagree, please refrain from using the services.
      </Text>

      <Heading as="h3" size="md" mb={4} mt={8}>
      2. Services Offered
      </Heading>

      <Text mb={4} >
      Rabiya Gill provides personal development and life coaching sessions, courses, and downloadable content designed to promote mental and emotional wellbeing.      </Text>


      <Heading as="h3" size="md" mb={4} mt={8}>
      3. Eligibility
      </Heading>

      <Text mb={4} >
      You must be at least 18 years old to use our services. By using the site, you confirm that you meet this requirement.
      </Text>


  
      <Heading as="h3" size="md" mb={4} mt={8}>
      4. Bookings & Cancellations
      </Heading>
      <UnorderedList mb={4}>
        <ListItem>All coaching sessions must be booked in advance.

</ListItem>
        <ListItem>Cancellation or rescheduling requires 24-hour notice.
        </ListItem>
        <ListItem>No-shows or last-minute cancellations may not be eligible for refunds.

        </ListItem>
      </UnorderedList>



      <Heading as="h3" size="md" mb={4} mt={8}>
      5. Payment Terms      </Heading>

      <Text mb={4}>
      All payments must be made in full at the time of booking. Pricing is subject to change at any time.      </Text>




      <Heading as="h3" size="md" mb={4} mt={8}>
      5. Cookies & Tracking
      </Heading>

      <Text mb={4}>
      We may use cookies for a smoother browsing experience. You can choose to disable cookies in your browser settings.
      </Text>


      <Heading as="h3" size="md" mb={4} mt={8}>
      6. Intellectual Property</Heading>
      <Text mb={4} >You have the right to:
      </Text>

     
      <Text mb={4}>
      All materials provided (e.g., course content, resources, handouts) are the intellectual property of Rabiya Gill. Reproduction or redistribution without written permission is prohibited.
      </Text>

    

      <Heading as="h3" size="md" mb={4} mt={8}>
      7. Disclaimer
        </Heading>

        <Text mb={4}>
        Coaching is not a substitute for medical or mental health care. Results may vary based on individual commitment and circumstances.
        </Text>

        <Heading as="h3" size="md" mb={4} mt={8}>
        8. Limitation of Liability
        </Heading>

        <Text mb={4}>
        We are not liable for any direct or indirect damages arising from use of the services or website.        </Text>

        <Heading as="h3" size="md" mb={4} mt={8}>
        9. Modifications
        </Heading>

        <Text mb={4}>
        We reserve the right to update these terms at any time. Continued use of the website or services constitutes acceptance of those changes.
        </Text>

        <Heading as="h3" size="md" mb={4} mt={8}>
        10. Contact Information        </Heading>

        <Text mb={4}>
        For questions or concerns, please contact:<Link href="mailto:rabiyagill.lifecoach@gmail.com" color="teal.500">rabiyagill.lifecoach@gmail.com</Link>      </Text>

     

   

   
  
    </Box>
    <Footer />
    </Flex>
  );
};

export default TermsOfUse;
