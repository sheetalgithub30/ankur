import React, { useState } from "react";
import Navbar from "../../components/navbar/index.jsx";
import hero from "./../../assets/hero.svg";
import heal1 from "./../../assets/heal1.svg";
import heal2 from "./../../assets/heal2.svg";
import about from "./../../assets/about.svg";
import service from "./../../assets/service.svg";
import service1 from "./../../assets/services1.svg";
import service2 from "./../../assets/services2.svg";
import service3 from "./../../assets/services3.svg";
import service4 from "./../../assets/services4.svg";
import logos from "./../../assets/logos.svg";
import benefit from "./../../assets/benefit.svg";
import arrow from "./../../assets/arrow.svg";
import contact from "./../../assets/contact.png";
import star1 from "./../../assets/star1.svg";
import star2 from "./../../assets/star2.svg";
import one from "./../../assets/01.svg";
import two from "./../../assets/02.svg";
import three from "./../../assets/03.svg";
import four from "./../../assets/04.svg";
import poly from "./../../assets/poly.png";
import moon from "./../../assets/moon.svg";
import introVideo from "./../../assets/introVideo.mp4";
import thumbnail from "./../../assets/thumbnail.svg";

import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  IconButton,
  Image,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  useMediaQuery,
} from "@chakra-ui/react";
import Footer from "../../components/footer/index.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import "../index.css";
import "./../../index.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function Homepage() {
  const [isGreaterThan1000] = useMediaQuery("(min-width: 1000px)");
  const [isGreaterThan600] = useMediaQuery("(min-width: 600px)");
  const [isGreaterThan400] = useMediaQuery("(min-width: 400px)");
  const navigate = useNavigate();

  const card_data = [
    {
      id: 1,
      content:
        "“I was amazed by the accuracy of the reading. Everything matched my life events!“",
      fullName: "– Priya Malhotra",
    },
    {
      id: 2,
      content:
        "“I was amazed by the accuracy of the reading. Everything matched my life events!“",
      fullName: "– Priya M",
    },
    {
      id: 3,
      content:
        "“I was amazed by the accuracy of the reading. Everything matched my life events!“",
      fullName: "– Priya ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % card_data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? card_data.length - 1 : prevIndex - 1
    );
  };

  const visibleTestimonials = card_data.slice(currentIndex, currentIndex + 1);

  return (
    <div>
      <Navbar select={"home"} id="home" />
      {/* hero */}

      <Flex
        width="100%"
        height={isGreaterThan600 ? "700px" : "100%"}
        bgColor="#F8EFE7"
        direction="column"
      >
        <Flex
          flex="1"
          backgroundImage={`url(${hero})`}
          backgroundSize="cover"
          backgroundPosition="center"
          mt={isGreaterThan600 ? "70px" : "100px"}
          backgroundRepeat="no-repeat"
          id="home"
          height={isGreaterThan600 ? "100vh" : "100%"}
          pb={isGreaterThan600 ? "" : "20px"}
        >
          <Flex alignItems="center" justifyContent="center" w="100%">
            <Box w={isGreaterThan600 ? "60%" : "95%"}>
              <Text
                fontFamily="Playfair Display"
                fontSize={isGreaterThan600 ? "56px" : "36px"}
                fontWeight="400"
                textAlign="center"
              >
                Unlock Life’s Mysteries with Personalized Guidance
              </Text>

              <Text
                fontFamily="Alice"
                fontWeight="400"
                fontSize="18px"
                color="#00000099"
                textAlign="center"
                my={4}
              >
                Accurate. Empathetic. Transformational.
              </Text>

              <Flex
                justifyContent="space-around"
                alignItems="center"
                w={isGreaterThan600 ? "40%" : "95%"}
                m="auto"
              >
                <Button
                  bgColor="transparent"
                  color="#1E1E1E"
                  w="164px"
                  fontWeight="400"
                  fontSize="14px"
                  h="44px"
                  borderRadius="30px"
                  fontFamily="Alice"
                  border="1px solid #813117"
                  _hover="none"
                  onClick={()=>navigate("/services")}
                >
                  Explore Services
                </Button>
             <HashLink smooth to="#contact">

                <Button
                  bgColor="#813117"
                  color="white"
                  w="164px"
                  fontWeight="400"
                  fontSize="14px"
                  h="44px"
                  borderRadius="30px"
                  fontFamily="Alice"
                  border="1px solid #813117"
                  _hover="none"
                >
                  Book a Session
                </Button>
             </HashLink>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>

      {/* about */}
      <Box w={isGreaterThan600 ? "83%" : "95%"} mx="auto" my={20} id="about">
        <Flex
          justifyContent="space-between"
          direction={isGreaterThan600 ? "row" : "column"}
        >
          <Box w={isGreaterThan600 ? "" : "100%"}>
            <Text
              fontFamily="Alice"
              fontSize="18px"
              fontWeight="400"
              color="#813117"
            >
              About
            </Text>
            <Text
              fontFamily="Playfair Display"
              fontSize={isGreaterThan600 ? "56px" : "36px"}
              fontWeight="400"
            >
              Hi, I’m Ankur Verma!
            </Text>
          </Box>
          <Box w={isGreaterThan600 ? "55%" : "100%"}>
            <Text
              fontFamily="ALice"
              color="#00000099"
              fontSize="16px"
              fontWeight="400"
              lineHeight="22px"
            >
              With decades of spiritual insight and divine guidance, I help
              individuals uncover the hidden truths of their past, present, and
              future. My approach blends ancient wisdom with practical advice to
              empower you in all walks of life — from love and career to wealth
              and health. I am here to help you align with your higher purpose
              and live a life filled with clarity, abundance, and peace.
            </Text>
          </Box>
        </Flex>

        <Box
          bgColor="red.100"
          h={isGreaterThan600 ? "550px" : "100%"}
          my={4}
          overflow="hidden"
        >
          {" "}
          <video
            src={introVideo}
            controls
            style={{ height: "100%", width: "100%", objectFit: "fill" }}

          />{" "}
        </Box>
      </Box>

      {/* services */}
      <Box
        mt="40px"
        backgroundRepeat="no-repeat"
        id="service"
        height="100%"
        py={10}
        w={isGreaterThan600 ? "" : "95%"}
        mx={isGreaterThan600?"":"auto"}
      >
        <Flex justifyContent="center" direction="column" alignItems="center">
          <Text
            fontFamily="Alice"
            fontSize="18px"
            fontWeight="400"
            color="#813117"
            textAlign="center"
          >
            Services
          </Text>

          <Text
            fontFamily="Playfair Display"
            fontSize={isGreaterThan600 ? "40px" : "30px"}
            fontWeight="400"
            textAlign="center"
            lineHeight="40px"
            my={isGreaterThan600 ? "" : "10px"}
          >
            Navigate life’s big questions with clarity and confidence.
          </Text>

          <Text
            fontFamily="Alice"
            fontSize="16px"
            fontWeight="400"
            lineHeight="22px"
            color="#00000099"
            textAlign="center"
            w={isGreaterThan600 ? "55%" : ""}
            my={4}
          >
            Whether you’re facing uncertainty in love, career, or health, my
            readings provide the spiritual insight and guidance you need to move
            forward with purpose. I can help you with:
          </Text>
        </Flex>

        <Flex
          w="83%"
          margin="auto"
          justifyContent="space-between"
          my={10}
          direction={isGreaterThan600 ? "row" : "column"}
          flexWrap="wrap"
        >
          <Flex
            w={isGreaterThan600 ? "286px" : "100%"}
            h="380px"
            direction="column"
            justifyContent="center"
            alignItems="center"
            bgColor="#F5E1C8"
            borderRadius="12px"
            my={isGreaterThan600 ? "" : "10px"}
          >
            <Image src={service1} />
            <Text
              fontFamily="Playfair Display"
              fontWeight="400"
              fontSize="20px"
              textAlign="center"
              mt={4}
              lineHeight="30px"
            >
              Overall Readings
            </Text>
            <Text
              color="#00000099"
              fontFamily="Alice"
              fontWeight="400"
              fontSize="16px"
              textAlign="center"
              lineHeight="24px"
              mt={2}
              w="70%"
            >
              Personalized life readings — past, present, and future
            </Text>
          </Flex>

          <Flex
            w={isGreaterThan600 ? "286px" : "100%"}
            h="380px"
            direction="column"
            justifyContent="center"
            alignItems="center"
            bgColor="#F3DCBA"
            borderRadius="12px"
            my={isGreaterThan600 ? "" : "10px"}
          >
            <Image src={service2} />
            <Text
              fontFamily="Playfair Display"
              fontWeight="400"
              fontSize="20px"
              textAlign="center"
              mt={4}
              lineHeight="30px"
            >
              Love & Relationships
            </Text>
            <Text
              color="#00000099"
              fontFamily="Alice"
              fontWeight="400"
              fontSize="16px"
              textAlign="center"
              lineHeight="24px"
              mt={2}
              w="75%"
            >
              Matters of love, relationships & compatibility
            </Text>
          </Flex>

          <Flex
            w={isGreaterThan600 ? "286px" : "100%"}
            h="380px"
            direction="column"
            justifyContent="center"
            alignItems="center"
            bgColor="#EAD1CB"
            borderRadius="12px"
            my={isGreaterThan600 ? "" : "10px"}
          >
            <Image src={service3} />
            <Text
              fontFamily="Playfair Display"
              fontWeight="400"
              fontSize="20px"
              textAlign="center"
              mt={4}
              lineHeight="30px"
            >
              Career Guidance
            </Text>
            <Text
              color="#00000099"
              fontFamily="Alice"
              fontWeight="400"
              fontSize="16px"
              textAlign="center"
              lineHeight="24px"
              mt={2}
              w="70%"
            >
              Career, education, and business direction
            </Text>
          </Flex>

          <Flex
            w={isGreaterThan600 ? "286px" : "100%"}
            h="380px"
            direction="column"
            justifyContent="center"
            alignItems="center"
            bgColor="#F0D8C7"
            borderRadius="12px"
            my={isGreaterThan600 ? "" : "10px"}
          >
            <Image src={service4} />
            <Text
              fontFamily="Playfair Display"
              fontWeight="400"
              fontSize="20px"
              textAlign="center"
              mt={4}
              lineHeight="30px"
            >
              Health Reading
            </Text>
            <Text
              color="#00000099"
              fontFamily="Alice"
              fontWeight="400"
              fontSize="16px"
              textAlign="center"
              lineHeight="24px"
              mt={2}
              w="70%"
            >
              Protection against negative energies and remedies
            </Text>
          </Flex>
        </Flex>

        <Flex justifyContent="center" my={16}>
          <Button
            bgColor="#813117"
            color="white"
            w="164px"
            fontWeight="400"
            fontSize="14px"
            h="44px"
            borderRadius="30px"
            fontFamily="Alice"
            border="1px solid #813117"
            _hover="none"
            onClick={()=>navigate("/services")}
            zIndex={2}

          >
            Explore Services
          </Button>
        </Flex>
      </Box>

      {/* Benefits */}
      <Box position="relative" my={16} id="benefits">
        <Box position="absolute" top="-300px" right="0">
          <Image src={star2} />
        </Box>
        <Flex
          w={isGreaterThan600 ? "83%" : "95%"}
          m="auto"
          justifyContent="space-between"
          direction={isGreaterThan600 ? "row" : "column"}
        >
          <Box w={isGreaterThan600 ? "50%" : "100%"}>
            <Text
              fontFamily="Alice"
              fontWeight="400"
              fontSize="18px"
              color="#813117"
            >
              Benefits
            </Text>
            <Text
              fontFamily="Playfair Display"
              fontSize={isGreaterThan600 ? "40px" : "30px"}
              fontWeight="400"
              my={2}
            >
              Why Choose Me?
            </Text>
            <Text
              fontFamily="Alice"
              fontWeight="400"
              fontSize="16px"
              color="#00000099"
            >
              Every star, every planet, and every chart tells a story. With deep
              astrological knowledge and intuitive wisdom, we help you unlock
              the messages
            </Text>
            <Grid
              my={10}
              templateColumns={isGreaterThan600 ? "repeat(2, 1fr)" : ""}
              templateRows={isGreaterThan600 ? "repeat(2, 1fr)" : ""}
              gap={isGreaterThan600 ? "16" : "10"}
            >
              <GridItem>
                <Box>
                  <Image src={one} w={isGreaterThan600 ? "" : "40px"} />
                  <Text
                    fontFamily="Alice"
                    fontWeight="400"
                    fontSize="18px"
                    mt={2}
                    w={isGreaterThan600 ? "65%" : "100%"}
                  >
                    Personalized & Confidential Sessions
                  </Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <Image src={two} w={isGreaterThan600 ? "" : "40px"} />
                  <Text
                    fontFamily="Alice"
                    fontWeight="400"
                    fontSize="18px"
                    mt={2}
                    w={isGreaterThan600 ? "80%" : "100%"}
                  >
                    Guided by Intuition, Backed by Ancient Wisdom{" "}
                  </Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <Image src={three} w={isGreaterThan600 ? "" : "40px"} />
                  <Text
                    fontFamily="Alice"
                    fontWeight="400"
                    fontSize="18px"
                    mt={2}
                    w={isGreaterThan600 ? "65%" : "100%"}
                  >
                    Trusted by Thousands Across the Globe{" "}
                  </Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <Image src={four} w={isGreaterThan600 ? "" : "40px"} />
                  <Text
                    fontFamily="Alice"
                    fontWeight="400"
                    fontSize="18px"
                    mt={2}
                    w={isGreaterThan600 ? "65%" : "100%"}
                  >
                    Quick Turnaround & Accurate Predictions
                  </Text>
                </Box>
              </GridItem>
            </Grid>
          </Box>
          <Box position="relative">
            <Box
              position="absolute"
              right={isGreaterThan600 ? "40px" : "14px"}
              mt="16px"
            >
              <Box textAlign="center">
                <Text
                  color="#813117"
                  fontWeight="600"
                  fontFamily="Playfair Display"
                  fontSize={isGreaterThan600 ? "38px" : "24px"}
                >
                  10 +
                </Text>
                <Text
                  fontFamily="Alice"
                  fontWeight="400"
                  fontSize={isGreaterThan600 ? "18px" : "14px"}
                >
                  Years Of Experience
                </Text>
              </Box>

              <Box textAlign="center" mt={isGreaterThan600 ? 6 : 2}>
                <Text
                  color="#813117"
                  fontWeight="600"
                  fontFamily="Playfair Display"
                  fontSize={isGreaterThan600 ? "38px" : "24px"}
                >
                  150 +
                </Text>
                <Text
                  fontFamily="Alice"
                  fontWeight="400"
                  fontSize={isGreaterThan600 ? "18px" : "14px"}
                >
                  Lives Changed
                </Text>
              </Box>
            </Box>
            <Image src={benefit} />
            <Text
              position="absolute"
              fontFamily="Playfair Display"
              fontSize={isGreaterThan600 ? "14px" : "12px"}
              fontWeight="400"
              w="40%"
              textAlign="center"
              mt={isGreaterThan600 ? "-65px" : "-50px"}
              ml="-10px"
            >
              Accurate. Empathetic. Transformational.
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* testimonial */}
      <Box mt="100px" mb={16} id="testimonial" w={isGreaterThan600?"":"100%"}>
        <Box w={isGreaterThan600?"":"95%"}
        mx="auto"
        >
        <Text
          fontFamily="Alice"
          fontSize="18px"
          fontWeight="400"
          color="#813117"
          textAlign="center"
        >
          Testimonials
        </Text>
        <Text
          fontFamily="Playfair Display"
          fontSize={isGreaterThan600 ? "40px" : "30px"}
          fontWeight="400"
          textAlign="center"
          mb="20px"
          mx={isGreaterThan600?"":"center"}
        >
          What our clients have to say
        </Text>

        </Box>

        <Flex
          flex="1"
          backgroundImage={`url(${poly})`}
          backgroundSize="cover"
          backgroundPosition="center"
          height={isGreaterThan600 ? "320px" : "100%"}
          backgroundRepeat="no-repeat"
          justify="center"
          align="center"
          position="relative"
          py={isGreaterThan600 ? "" : "40px"}
          w={isGreaterThan600?"":"100%"}
          
        >
          <Flex>
            {/* Previous Button */}
            <IconButton
              aria-label="Previous testimonial"
              icon={<FaArrowLeft />}
              w={isGreaterThan600 ? "60px" : "40px"}
              h={isGreaterThan600 ? "60px" : "40px"}
              onClick={handlePrev}
              isDisabled={currentIndex === 0}
              borderRadius="full"
              bgColor="white"
              border="1px solid #00000014"
              position="absolute"
              left={isGreaterThan600 ? "70px" : "10px"}
              top="130px"
            />

            {/* Cards */}
            <Flex gap="20px" justify="center">
              {visibleTestimonials.map((testimonial, index) => {
                return (
                  <Flex
                    key={testimonial.id}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    w={isGreaterThan600 ? "" : "70%"}
                    margin={isGreaterThan600 ? "" : "auto"}
                  >
                    <Image src={moon} />
                    <Text
                      fontSize={isGreaterThan600 ? "20px" : "18px"}
                      fontFamily="Playfair Display"
                      fontWeight="400"
                      my={4}
                      textAlign="center"
                    >
                      {testimonial.content}
                    </Text>
                    <Text
                      fontSize="16px"
                      fontFamily="Alice"
                      fontWeight="400"
                      color="#00000099"
                    >
                      {testimonial.fullName}
                    </Text>
                  </Flex>
                );
              })}
            </Flex>

            {/* Next Button */}
            <IconButton
              aria-label="Next testimonial"
              icon={<FaArrowRight />}
              onClick={handleNext}
              isDisabled={currentIndex === card_data.length - 1}
              borderRadius="full"
              bgColor="white"
              w={isGreaterThan600 ? "60px" : "40px"}
              h={isGreaterThan600 ? "60px" : "40px"}
              border="1px solid #00000014"
              position="absolute"
              right={isGreaterThan600 ? "80px" : "10px"}
              top="130px"
            />
          </Flex>
        </Flex>
      </Box>

      {/* videos */}
      <Box mt="100px" mb={16} position="relative" id="videos" w={isGreaterThan600?"":"95%"}>
        <Text
          fontFamily="Alice"
          fontSize="18px"
          fontWeight="400"
          color="#813117"
          textAlign="center"
        >
          Featured Videos
        </Text>
        <Text
          fontFamily="Playfair Display"
          fontSize={isGreaterThan600 ? "40px" : "30px"}
          fontWeight="400"
          textAlign="center"
          mb="20px"
        >
          Checkout my YouTube channel
        </Text>

        <Flex
          justifyContent="space-between"
          w="83%"
          m="auto"
          flexDirection={isGreaterThan600 ? "row" : "column"}
        >
          <Box
            bgColor="#F5E1C8"
            width={isGreaterThan600 ? "392px" : "100px"}
            h={isGreaterThan600 ? "270px" : "100px"}
            my={isGreaterThan600 ? "" : "10px"}
          ></Box>
          <Box
            bgColor="#F5E1C8"
            width={isGreaterThan600 ? "392px" : "100px"}
            h={isGreaterThan600 ? "270px" : "100px"}
            my={isGreaterThan600 ? "" : "10px"}
          ></Box>
          <Box
            bgColor="#F5E1C8"
            width={isGreaterThan600 ? "392px" : "100px"}
            h={isGreaterThan600 ? "270px" : "100px"}
            my={isGreaterThan600 ? "" : "10px"}
          ></Box>
        </Flex>

        <Box position="absolute" bottom="-230px" left="0">
          <Image src={star1} />
        </Box>
      </Box>

      {/* get in touch */}

      <Flex position="relative" overflow="hidden" id="contact">
        <Flex
          width={isGreaterThan600 ? "83%" : "95%"}
          my="80px"
          mx="auto"
          justifyContent="space-between"
          alignItems="center"
          direction={isGreaterThan600 ? "row" : "column"}
        >
          <Box>
            <Image src={contact} />
          </Box>
          <Box
            w={isGreaterThan600 ? "45%" : "95%"}
            mt={isGreaterThan600 ? "" : "10"}
          >
            <Text
              fontFamily="Alice"
              fontSize="18px"
              fontWeight="400"
              color="#813117"
            >
              Contact Us
            </Text>

            <Text
              fontFamily="Playfair Display"
              fontSize={isGreaterThan600 ? "48px" : "38px"}
              fontWeight="400"
            >
              Get in touch!
            </Text>

            <Text
              fontFamily="Alice"
              color="#00000099"
              fontSize={isGreaterThan600 ? "18px" : "16px"}
              fontWeight="400"
            >
              Let the Stars Guide You — Book a Consultation
            </Text>

            <form>
              <FormControl my={isGreaterThan600?4:10} isRequired>
                <FormLabel
                  fontWeight="400"
                  fontSize="14px"
                  fontFamily="Alice"
                  color="#00000099"
                >
                  Full Name
                </FormLabel>
                <Input
                  // value={fullName}
                  // onChange={(e) => setFullName(e.target.value)}
                  fontSize="14px"
                  type="text"
                  placeholder="Full name"
                  fontFamily="Alice"
                />
              </FormControl>

              <SimpleGrid columns={isGreaterThan600 ? 2 : 1} spacing={4} mb={4}>
                <FormControl isRequired>
                  <FormLabel
                    fontWeight="400"
                    fontSize="14px"
                    fontFamily="Alice"
                    color="#00000099"
                  >
                    Phone Number
                  </FormLabel>
                  <Input
                    // value={phone}
                    // onChange={(e) => setPhone(e.target.value)}
                    fontSize="14px"
                    type="tel"
                    placeholder="Phone number"
                    fontFamily="Alice"
                  />
                </FormControl>

                <FormControl isRequired></FormControl>
              </SimpleGrid>

              <FormControl mb={4} isRequired>
                <FormLabel
                  fontWeight="400"
                  fontSize="14px"
                  fontFamily="Alice"
                  color="#00000099"
                >
                  Message
                </FormLabel>
                <Textarea
                  // value={message}
                  // onChange={(e) => setMessage(e.target.value)}
                  fontSize="14px"
                  placeholder="Message"
                  fontFamily="Alice"
                  zIndex={2}
                />
              </FormControl>

              <Flex mt={10}>
                <Button
                  bgColor="#813117"
                  color="white"
                  w="164px"
                  fontWeight="400"
                  fontSize="14px"
                  h="44px"
                  borderRadius="30px"
                  fontFamily="Alice"
                  border="1px solid #813117"
                  _hover="none"
                >
                  Contact Us
                </Button>
              </Flex>
            </form>
          </Box>
        </Flex>
      </Flex>

      <Footer />
    </div>
  );
}

export default Homepage;
