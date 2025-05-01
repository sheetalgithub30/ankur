import React, { useEffect, useState } from "react";
import Navbar from "./../../components/navbar/index.jsx";
import Footer from "./../../components/footer/index.jsx";
import {
  Text,
  Flex,
  Image,
  Box,
  Avatar,
  HStack,
  useMediaQuery,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  SimpleGrid,
  Button,
  VStack,
  List,
  ListItem,
  Spinner,
  useToast,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";

import img from "../../home/Avatar.svg";
import hero from "../../home/heroBackground.svg";
import Ornament from "../../home/Ornament.svg";
import line from "../../home/Line.svg";
import sun from "../../home/sun.svg";
import register from "../../home/register.svg";
import sendDetailMutation from "../../__mutations__/WebinarSendDetails.js";
import PaymentOrderMutation from "../../__mutations__/paymentOrderWebinar.js";
import paymentConfirmationMutation from "../../__mutations__/paymentConfirmation.js";
import { useMutation } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";

function Index() {
  const toast = useToast();
  const {
    isOpen: isConfirmationModalOpen,
    onOpen: onConfirmationModalOpen,
    onClose: onConfirmationModalClose,
  } = useDisclosure();

  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");
  const [isLargerThan400] = useMediaQuery("(min-width: 400px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [orderId, setOrderId] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const serviceId = searchParams.get("serviceId");
  const merchantId = searchParams.get("merchantId");

  const [timeLeft, setTimeLeft] = useState(9 * 60 + 45);

  useEffect(() => {
    // If timeLeft is 0, no need to continue the timer
    if (timeLeft === 0) return;

    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Format to always show two digits (e.g., 09:45)
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  useEffect(() => {
    if (merchantId) {
      console.log("m", merchantId);
      _MutationPaymentConfirmation();
    }
  }, [merchantId]);

  //Mutations
  const [MutationSendDetail, { loading: sendDetailMutationLoading }] =
    useMutation(sendDetailMutation, {
      context: {
        headers: {
          email: import.meta.env.VITE_AUTH_EMAIL,
          password: import.meta.env.VITE_AUTH_PASSWORD,
        },
      },
    });

  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }
  function validatePhoneNumber(phoneNumber) {
    const phonePattern = /^\d{10}$/; // Matches exactly 10 digits
    return phonePattern.test(phoneNumber);
  }

  const _sendDetail = async () => {
   if(email == "" || phone == "" || email ==""){
    toast({
      title: "Please fill all fields",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
   }
    else if (!validateEmail(email)) {
      toast({
        title: "Enter a valid email address",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (!validatePhoneNumber(phone)) {
      toast({
        title: "Enter a valid phone number",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
     
    } else {
      localStorage.setItem("email", email);
      localStorage.setItem("fullName", fullName);
      localStorage.setItem("phone", phone);

      const paymentOrderWebinarData = await _MutationPaymentOrder();
      if (paymentOrderWebinarData?.status === "ORDER_CREATED") {
        window.open(paymentOrderWebinarData?.url, "_self");
      }
    }
  };

  const [
    MutationPaymentConfirmation,
    { loading: paymentConfirmationMutationLoading },
  ] = useMutation(paymentConfirmationMutation, {
    context: {
      headers: {
        email: import.meta.env.VITE_AUTH_EMAIL,
        password: import.meta.env.VITE_AUTH_PASSWORD,
      },
    },
  });

  const _MutationPaymentConfirmation = async (orderId) => {
    const { data } = await MutationPaymentConfirmation({
      variables: {
        cashFreeOrderId: merchantId,
      },
    });
    console.log("pay", data);

    if (data?.PaymentConfirmation?.status === "PAYMENT_SUCCESSFULLY") {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("merchantId");
      setSearchParams(newParams);

      const { data } = await MutationSendDetail({
        variables: {
          email: localStorage.getItem("email"),
          name: localStorage.getItem("fullName"),
          phone: Number(localStorage.getItem("phone")),
        },
      });

      if (data?.WebinarSendDetails?.status === "CREATED_SUCCESSFULLY") {
        onConfirmationModalOpen();
        localStorage.clear();
      }
    }
  };

  const [MutationPaymentOrder, { loading: PaymentOrderMutationLoading }] =
    useMutation(PaymentOrderMutation, {
      context: {
        headers: {
          email: import.meta.env.VITE_AUTH_EMAIL,
          password: import.meta.env.VITE_AUTH_PASSWORD,
        },
      },
    });

  const _MutationPaymentOrder = async () => {
    const { data } = await MutationPaymentOrder({
      variables: {
        amount: 99,
        currency: "INR",
        name: fullName,
        phone: phone,
        // websiteUrl: "https://localhost:5173",
        websiteUrl: "https://nitikabhola.com",
        email: email,
      },
    });

    console.log("data", data);

    setOrderId(data?.PaymentOrderWebinar?.orderId);
    return data?.PaymentOrderWebinar;
  };

  return (
    <div className="text-white">
      <Navbar />

      <Flex
        w="100%"
        minH={isLargerThan700 ? "700px" : "1700px"}
        background="black"
        position="relative"
        justifyContent="center"
        // alignItems="center"
        maxH="100%"
      >
        <Image
          opacity="0.4"
          position="absolute"
          src={hero}
          w="100%"
          h="100%"
          objectFit="cover"
        />
        <Image position="absolute" src={Ornament} w="100%" h="100%" />
        <Flex
          position="absolute"
          w="90%"
          h="100%"
          flexDir={isLargerThan700 ? "row" : "column"}
        >
          <Flex
            w={isLargerThan1000 ? "50%" : "98%"}
            display="flex"
            mx="auto"
            flexDir="column"
            justifyContent="center"
            // alignItems="center"
          >
            <Text fontFamily="Cormorant" fontSize="48px" fontWeight="700">
              Unlock the Secrets to Better Relationships with
              <Text as="span" fontStyle="italic">
                {" "}
                Tarot Insights & Remedies
              </Text>
            </Text>

            <Text fontSize="14px" fontWeight="400" className="font-Montserrat">
              Join our exclusive live session to gain clarity and guidance for
              your life
            </Text>
            <Box mt={4}>
              <Text fontFamily="Cormorant" fontSize="30px" fontWeight="700">
                Why Attend?
              </Text>
              <Image src={line} />

              <HStack my={4}>
                <Image src={sun} />{" "}
                <Text
                  fontSize="14px"
                  fontWeight="500"
                  className="font-Montserrat"
                >
                  Limited time offer for future consultation
                </Text>
              </HStack>
              <HStack my={4}>
                <Image src={sun} />{" "}
                <Text
                  fontSize="14px"
                  fontWeight="500"
                  className="font-Montserrat"
                >
                  Practical Remedies
                </Text>
              </HStack>
              <HStack my={4}>
                <Image src={sun} />{" "}
                <Text
                  fontSize="14px"
                  fontWeight="500"
                  className="font-Montserrat"
                >
                  Live Q&A with Nitika
                </Text>
              </HStack>
            </Box>

            <Box mt={4}>
              <Text fontFamily="Cormorant" fontSize="30px" fontWeight="700">
                Who is it for?
              </Text>
              <Image src={line} />

              <List spacing={3} styleType="disc" mt={4}>
                <ListItem
                  sx={{
                    listStyleType: "disc",
                    fontSize: "sm",
                    marginLeft: "1.5em",
                  }}
                >
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    className="font-Montserrat"
                  >
                    Anyone experiencing confusion or challenges in their
                    relationship.
                  </Text>
                </ListItem>
                <ListItem
                  sx={{
                    listStyleType: "disc",
                    fontSize: "sm",
                    marginLeft: "1.5em",
                  }}
                >
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    className="font-Montserrat"
                  >
                    Individuals seeking guidance on love and compatibility.
                  </Text>
                </ListItem>
                <ListItem
                  sx={{
                    listStyleType: "disc",
                    fontSize: "sm",
                    marginLeft: "1.5em",
                  }}
                >
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    className="font-Montserrat"
                  >
                    Those curious about how tarot and numerology can provide
                    insights into relationships.
                  </Text>
                </ListItem>
              </List>
            </Box>
          </Flex>

          <Box
            w={isLargerThan700 ? "40%" : "99%"}
            display="flex"
            justifyContent="center"
            mt="65px"
            // alignItems="center"
            gap="20px"
          >
            <VStack width="85%">
              <HStack className="font-Montserrat" alignItems="flex-start">
                <Avatar width="92px" height="85px" src={img}></Avatar>
                <Box>
                  <Text fontSize="20px" fontWeight="600">
                    Nitika Bhola
                  </Text>
                  <Text fontSize="14px" fontWeight="400">
                    With over
                    <Text as="span" fontWeight="500">
                      {" "}
                      150k followers on Instagram,
                    </Text>{" "}
                    Nitika is a renowned astrologer and tarot expert who has
                    helped countless people gain clarity and confidence in life.
                  </Text>
                </Box>
              </HStack>
              <Box
                w="100%"
                p={6}
                boxShadow="md"
                bg="white"
                color="#00000099"
                borderRadius="8px"
                mt={6}
              >
                <form>
                  <Text
                    color="#291965"
                    fontSize="30px"
                    fontWeight="700"
                    fontFamily="Cormorant"
                  >
                    Register Now!
                  </Text>
                  <HStack my={3} width="90%" justifyContent="space-between">
                    <Box bgColor="#2919650D" px={2} py={1} borderRadius="4px">
                      <Text
                        fontSize="14px"
                        fontWeight="500"
                        className="font-Montserrat"
                        color="#000000"
                      >
                        <Text as="span" color="#291965" fontWeight="600">
                          When :
                        </Text>{" "}
                        26 Jan 2025
                      </Text>
                    </Box>

                    <Box bgColor="#2919650D" px={2} py={1} borderRadius="4px">
                      <Text
                        fontSize="14px"
                        fontWeight="500"
                        className="font-Montserrat"
                        color="#000000"
                      >
                        <Text as="span" color="#291965" fontWeight="600">
                          Time :
                        </Text>{" "}
                        4:00 PM -5:00 PM
                      </Text>
                    </Box>
                  </HStack>
                  <FormControl mb={4} isRequired>
                    <FormLabel fontWeight="500" fontSize="14px">
                      Full Name
                    </FormLabel>
                    <Input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      fontSize="14px"
                      type="text"
                      placeholder="Full name"
                    />
                  </FormControl>

                  <SimpleGrid
                    columns={isLargerThan500 ? 2 : 1}
                    spacing={4}
                    mb={4}
                  >
                    <FormControl isRequired>
                      <FormLabel fontWeight="500" fontSize="14px">
                        Phone Number
                      </FormLabel>
                      <Input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        fontSize="14px"
                        type="tel"
                        placeholder="Phone number"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel fontWeight="500" fontSize="14px">
                        Email ID
                      </FormLabel>
                      <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        fontSize="14px"
                        placeholder="E-mail ID"
                      />
                    </FormControl>
                  </SimpleGrid>

                  <Button
                    fontSize="12px"
                    fontWeight="600"
                    color="#FFFFFF"
                    bgColor="#291965"
                    type="submit"
                    width="full"
                    onClick={(e) => {
                      e.preventDefault();
                      _sendDetail();
                    }}
                    _hover="none"
                    className="font-Montserrat"
                  >
                    {sendDetailMutationLoading ||
                    PaymentOrderMutationLoading ? (
                      <Spinner mx="auto" my="auto" color="blue.500" />
                    ) : (
                      <>
                        Register Now at{" "}
                        <span className="line-through mx-1"> Rs 299</span> Rs 99
                      </>
                    )}
                  </Button>

                  <Text
                    fontSize="14px"
                    fontWeight="600"
                    color="#291965"
                    fontFamily="Montserrat"
                    textAlign="center"
                    mt={3}
                  >
                    Offer ends in {formattedTime} mins
                  </Text>
                </form>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Flex>
      <Box bgColor="#020212" pb={10}>
        <VStack justifyContent="center">
          <Text
            textAlign="center"
            fontFamily="Cormorant"
            fontSize="30px"
            fontWeight="700"
          >
            Testimonials
          </Text>
          <Image src={line} mt={-2} mb={6} />
        </VStack>
        <Flex
          flexDir={isLargerThan700 ? "row" : "column"}
          width="80%"
          justifyContent="space-between"
          margin="auto"
        >
          {testimonial_data.map((data) => {
            return (
              <Box
                border="1px solid #D9D9D9"
                borderRadius="8px"
                className="font-Montserrat"
                width={isLargerThan700 ? "32%" : "100%"}
                position="relative"
                p={10}
                marginTop={isLargerThan700 ? "10px" : "40px"}
              >
                <Box
                  position="absolute"
                  top="-70px"
                  left="20px"
                  fontSize="120px"
                  fontWeight="700"
                  fontFamily="Cormorant"
                  color="#DBF77E"
                >
                  “
                </Box>
                <Text fontSize="14px" fontWeight="500" className="text-center">
                  {data.data}
                </Text>
                <Text fontSize="14px" fontWeight="400" className="text-center">
                  {data.by}
                </Text>
              </Box>
            );
          })}
        </Flex>
      </Box>

      <Footer />

      <Modal
        closeOnOverlayClick={false}
        isOpen={isConfirmationModalOpen}
        onClose={onConfirmationModalClose}
        size={"lg"}
      >
        <ModalOverlay />
        <ModalContent borderRadius="20px">
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody textAlign="center">
            <Flex
              flexDir="column"
              textAlign="center"
              px="54px"
              py="30px"
              justifyContent="center"
              alignItems="center"
            >
              <Image src={register} width="80px" />
              <Text
                fontSize="20px"
                fontWeight={600}
                className="font-Montserrat"
                my={4}
              >
                You’re Registered!
              </Text>
              <Text
                fontSize="14px"
                fontWeight={400}
                className="font-Montserrat"
                color="#00000099"
              >
                Thank you for registering for the
                <Text as="span" fontWeight={500}>
                  {" "}
                  Relationship & Tarot Webinar with Nitika!
                </Text>
              </Text>

              <Text
                fontSize="14px"
                fontWeight={400}
                className="font-Montserrat"
                color="#00000099"
                my={4}
              >
                You will receive the joining link in your mail shortly. We’re
                excited to have you with us - see you on
                <Text as="span" fontWeight={500}>
                  {" "}
                  26th Jan at 4 PM
                </Text>
              </Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Index;

const testimonial_data = [
  {
    data: "“Nitika's readings have always been spot on. Her remedies worked wonders for my relationship!”",
    by: "- Priya M.",
  },
  {
    data: "“I was skeptical at first, but after one session, I felt a sense of peace and direction. Highly recommend!”",
    by: "- Rohit S.",
  },
  {
    data: "“Her tarot sessions are not only insightful but also practical. The remedies helped us reconnect.”",
    by: "- Neha D.",
  },
];
