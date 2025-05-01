import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Button,
  Text,
  Image,
  IconButton,
  useMediaQuery,
  Select,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  DrawerFooter,
} from "@chakra-ui/react";
// import logo from './../../assets/logo.svg';
import { HashLink } from "react-router-hash-link";
import { HamburgerIcon } from "@chakra-ui/icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = ({ select }) => {
  const navigate = useNavigate();
  const [isGreaterThan1000] = useMediaQuery("(min-width: 1000px)");
  const [isGreaterThan600] = useMediaQuery("(min-width: 600px)");
  const [selected, setSelected] = useState(select); // Track selected section
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // This function will set the active section
  const handleSelect = (section) => {
    setSelected(section);
  };

  return (
    <Flex
      w="100%"
      h="80px"
      justify="center"
      position="fixed"
      zIndex={100}
      top={0}
      bgColor="white"
      borderBottom="1px solid #00000033"
    >
      <Flex
        w={isGreaterThan1000 ? "85%" : "95%"}
        justify="space-around"
        alignItems="center"
      >
        <Flex cursor="pointer" w={isGreaterThan600?"15vw":"100%"}>
          <Text
            fontFamily="Alice"
            fontWeight="400"
            fontSize="24px"
            onClick={() => navigate("/")}
          >
            Ankur Verma
          </Text>
        </Flex>
        {isGreaterThan600 && (
          <Flex alignItems="center" gap="10px" w="100%" justify="center" >
            <Box w="36vw">
              <Flex justify="space-around" align="center">
                <Box>
                  <HashLink smooth to="/#home">
                    <Text
                      onClick={() => handleSelect("home")}
                      fontWeight="400"
                      fontSize="15px"
                      fontFamily="Alice"
                      color={selected === "home" ? "#000000" : "#00000099"}
                    >
                      Home
                    </Text>
                  </HashLink>
                  {selected === "home" ? (
                    <Box
                      width="41px"
                      height="4px"
                      bgColor="#813117"
                      borderRadius="4px"
                      position="absolute"
                      bottom={4}
                    ></Box>
                  ) : (
                    <Box
                      width="41px"
                      height="4px"
                      borderRadius="4px"
                      position="absolute"
                      bottom={4}
                    ></Box>
                  )}
                </Box>
                <Box>
                  <HashLink smooth to="/#about">
                    <Text
                      onClick={() => handleSelect("about")}
                      fontWeight="400"
                      fontSize="15px"
                      fontFamily="Alice"
                      color={selected === "about" ? "#000000" : "#00000099"}
                    >
                      About
                    </Text>
                  </HashLink>
                  {selected === "about" ? (
                    <Box
                      width="41px"
                      height="4px"
                      bgColor="#813117"
                      borderRadius="4px"
                      position="absolute"
                      bottom={4}
                    ></Box>
                  ) : (
                    <Box
                      width="41px"
                      height="4px"
                      borderRadius="4px"
                      position="absolute"
                      bottom={4}
                    ></Box>
                  )}
                </Box>

                <Box>
                  <Link to="/services" _hover="none">
                    <Text
                      onClick={() => handleSelect("services")}
                      fontWeight="400"
                      fontSize="15px"
                      fontFamily="Alice"
                      color={selected === "services" ? "#000000" : "#00000099"}
                    >
                      Services
                    </Text>
                  </Link>

                  {selected === "services" ? (
                    <Box
                      width="41px"
                      height="4px"
                      bgColor="#813117"
                      borderRadius="4px"
                      position="absolute"
                      bottom={4}
                    ></Box>
                  ) : (
                    <Box
                      width="41px"
                      height="4px"
                      borderRadius="4px"
                      position="absolute"
                      bottom={4}
                    ></Box>
                  )}
                </Box>
                <Box>
                  <HashLink smooth to="/#benefits">
                    <Text
                      onClick={() => handleSelect("benefit")}
                      fontWeight="400"
                      fontSize="15px"
                      fontFamily="Alice"
                      color={selected === "benefit" ? "#000000" : "#00000099"}
                    >
                      Benefits
                    </Text>
                  </HashLink>
                  {selected === "benefit" ? (
                    <Box
                      width="41px"
                      height="4px"
                      bgColor="#813117"
                      borderRadius="4px"
                      position="absolute"
                      bottom={4}
                    ></Box>
                  ) : (
                    <Box
                      width="41px"
                      height="4px"
                      borderRadius="4px"
                      position="absolute"
                      bottom={4}
                    ></Box>
                  )}
                </Box>
                <Box>
                  <HashLink smooth to="/#testimonial">
                    <Text
                      onClick={() => handleSelect("testimonial")}
                      fontWeight="400"
                      fontSize="15px"
                      fontFamily="Alice"
                      color={
                        selected === "testimonial" ? "#000000" : "#00000099"
                      }
                    >
                      Testimonial
                    </Text>
                  </HashLink>
                  {selected === "testimonial" ? (
                    <Box
                      width="41px"
                      height="4px"
                      bgColor="#813117"
                      borderRadius="4px"
                      position="absolute"
                      bottom={4}
                    ></Box>
                  ) : (
                    <Box
                      width="41px"
                      height="4px"
                      borderRadius="4px"
                      position="absolute"
                      bottom={4}
                    ></Box>
                  )}
                </Box>


                <Box>
                  <Link to="/gemstones" _hover="none">
                    <Text
                      onClick={() => handleSelect("gemstones")}
                      fontWeight="400"
                      fontSize="15px"
                      fontFamily="Alice"
                      color={selected === "gemstones" ? "#000000" : "#00000099"}
                    >
                      Gemstones
                    </Text>
                  </Link>

                  {selected === "gemstones" ? (
                    <Box
                      width="41px"
                      height="4px"
                      bgColor="#813117"
                      borderRadius="4px"
                      position="absolute"
                      bottom={4}
                    ></Box>
                  ) : (
                    <Box
                      width="41px"
                      height="4px"
                      borderRadius="4px"
                      position="absolute"
                      bottom={4}
                    ></Box>
                  )}
                </Box>

              </Flex>
            </Box>
          </Flex>
        )}

        {isGreaterThan600 && (
          <HashLink smooth to="/#contact">
            <Button
              bgColor="#813117"
              color="white"
              w="164px"
              fontWeight="400"
              fontSize="14px"
              h="44px"
              borderRadius="30px"
              fontFamily="Alice"
              ml={8}
            >
              Contact Us
            </Button>
          </HashLink>
        )}

        {!isGreaterThan600 && (
          <IconButton ref={btnRef} onClick={onOpen}>
            <HamburgerIcon fontSize="35px" />
          </IconButton>
        )}
      </Flex>

      {!isGreaterThan600 && (
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          bg="black"
        >
          <DrawerOverlay />
          <DrawerContent bg="black" color="white">
            <DrawerCloseButton />
            <DrawerHeader className="text-base">Menu</DrawerHeader>

            <DrawerBody>
              <Flex
                w={"100%"}
                gap="18px"
                display="flex"
                flexDir="column"
                justifyContent="start"
                alignItems="start"
              >
                <HashLink smooth to="/#home">
                  <Text
                    onClick={() => handleSelect("home")}
                    fontWeight="500"
                    fontSize="15px"
                    fontFamily="Alice"
                    color="white"
                  >
                    Home
                  </Text>
                </HashLink>
                <HashLink smooth to="/#about">
                  <Text
                    onClick={() => handleSelect("about")}
                    fontWeight="500"
                    fontSize="15px"
                    fontFamily="Alice"
                    color="white"
                  >
                    About
                  </Text>
                </HashLink>
                <Link smooth to="/services">
                  <Text
                    onClick={() => handleSelect("services")}
                    fontWeight="500"
                    fontSize="15px"
                    fontFamily="Alice"
                    color="white"
                  >
                    Services
                  </Text>
                </Link>

                <HashLink smooth to="/#benefit">
                  <Text
                    onClick={() => handleSelect("benefit")}
                    fontWeight="500"
                    fontSize="15px"
                    fontFamily="Alice"
                    color="white"
                  >
                    Benefits
                  </Text>
                </HashLink>

                <HashLink smooth to="/#testimonial">
                  <Text
                    onClick={() => handleSelect("testimonial")}
                    fontWeight="500"
                    fontSize="15px"
                    fontFamily="Alice"
                    color="white"
                  >
                    Testimonial
                  </Text>
                </HashLink>

                <Link smooth to="/gemstones">
                  <Text
                    onClick={() => handleSelect("gemstones")}
                    fontWeight="500"
                    fontSize="15px"
                    fontFamily="Alice"
                    color="white"
                  >
                    Gemstones
                  </Text>
                </Link>

                <HashLink smooth to="/#contact">
                  <Button
                    bgColor="#813117"
                    color="white"
                    w="164px"
                    fontWeight="400"
                    fontSize="14px"
                    h="44px"
                    borderRadius="30px"
                    fontFamily="Alice"
                  >
                    Contact Us
                  </Button>
                </HashLink>
              </Flex>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" color="white" mr={3} onClick={onClose}>
                close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </Flex>
  );
};

export default Navbar;
