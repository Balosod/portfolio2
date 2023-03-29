import { React, useState, useRef } from "react";
import resume from "./Balogun_sodiq.pdf";
import mylogo from "./mylogo.jpeg";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Testimonials from "./components/testimonials";
import Certifications from "./components/certifications";
import About from "./components/about";
import Skills from "./components/skills";
import Contact from "./components/contact";
import {
  HStack,
  VStack,
  Box,
  Link,
  Spacer,
  Flex,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
function App() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const honorRef = useRef(null);
  const CertificateRef = useRef(null);
  const ContactRef = useRef(null);

  const handleAboutClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    changeDisplay(false);
  };
  const handleSkillClick = () => {
    skillRef.current?.scrollIntoView({ behavior: "smooth" });
    changeDisplay(false);
  };
  const handleHonorClick = () => {
    honorRef.current?.scrollIntoView({ behavior: "smooth" });
    changeDisplay(false);
  };
  const handleCertficateClick = () => {
    CertificateRef.current?.scrollIntoView({ behavior: "smooth" });
    changeDisplay(false);
  };
  const handleContactClick = () => {
    ContactRef.current?.scrollIntoView({ behavior: "smooth" });
    changeDisplay(false);
  };
  let [display, changeDisplay] = useState(false);
  return (
    <Box h="100vh" bg="#262626">
      {/* Header */}
      <Box>
        <HStack
          p={{ base: "20px", lg: "20px" }}
          justifyContent="center"
          spacing={{ base: "0px", lg: "250px" }}
          bg="black"
          display={{ base: "none", lg: "flex" }}
        >
          <Box>
            <Image w="25px" h="25px" src={mylogo} />
          </Box>
          <HStack spacing="50px">
            <Box>
              <Text onClick={handleAboutClick} cursor="pointer" color="white">
                About
              </Text>
            </Box>
            <Box>
              <Text onClick={handleSkillClick} cursor="pointer" color="white">
                Skills
              </Text>
            </Box>
            <Box>
              <Text onClick={handleHonorClick} cursor="pointer" color="white">
                Honor & Awards
              </Text>
            </Box>
            <Box>
              <Text
                onClick={handleCertficateClick}
                cursor="pointer"
                color="white"
              >
                Certifications
              </Text>
            </Box>
            <Box>
              <Text onClick={handleContactClick} cursor="pointer" color="white">
                Contact
              </Text>
            </Box>
          </HStack>
          <Box>
            <Link href={resume} download="Balogun Sodiq CV">
              <Button colorScheme="blue">Resume</Button>
            </Link>
          </Box>
        </HStack>

        {/* Hamburger */}
        <Box display={{ base: "block", lg: "none" }} bg="black">
          <Flex p="20px" display={display ? "none" : "flex"}>
            <Box p="4">
              <Image w="25px" h="25px" src={mylogo} alt="logo" />
            </Box>
            <Spacer />
            <Box p="4">
              <RxHamburgerMenu
                onClick={() => changeDisplay(true)}
                size="25px"
                color="#8A8A8A"
                style={{ cursor: "pointer" }}
              />
            </Box>
          </Flex>
        </Box>

        <Box
          mt="0"
          mb="0"
          bg="black"
          display={{ base: "block", lg: "none" }}
          position="absolute"
          w="100%"
          mr="auto"
          ml="auto"
        >
          <Box display={display ? "block" : "none"}>
            <Box p="4" align="right">
              <AiOutlineClose
                onClick={() => changeDisplay(false)}
                size="25px"
                color="#FFFFFF"
                style={{ cursor: "pointer" }}
              />
            </Box>

            <VStack spacing="50px">
              <Box>
                <Text onClick={handleAboutClick} cursor="pointer" color="white">
                  About
                </Text>
              </Box>
              <Box>
                <Text onClick={handleSkillClick} cursor="pointer" color="white">
                  Skills
                </Text>
              </Box>
              <Box>
                <Text onClick={handleHonorClick} cursor="pointer" color="white">
                  Honor & Awards
                </Text>
              </Box>
              <Box>
                <Text
                  onClick={handleCertficateClick}
                  cursor="pointer"
                  color="white"
                >
                  Certifications
                </Text>
              </Box>
              <Box>
                <Text
                  onClick={handleContactClick}
                  cursor="pointer"
                  color="white"
                >
                  Contact
                </Text>
              </Box>
              <Box>
                <Link href={resume} download="Balogun Sodiq CV">
                  <Button mb="30px" colorScheme="blue">
                    Resume
                  </Button>
                </Link>
              </Box>
            </VStack>
          </Box>
        </Box>
      </Box>

      {/* About */}
      <About aboutRef={aboutRef} />

      {/* Skills */}
      <Skills skillRef={skillRef} />

      {/* Testimonials */}
      <Testimonials honorRef={honorRef} />

      {/* Certification */}
      <Certifications CertificateRef={CertificateRef} />

      {/* Contact */}
      <Contact handleAboutClick={handleAboutClick} ContactRef={ContactRef} />
    </Box>
  );
}

export default App;
