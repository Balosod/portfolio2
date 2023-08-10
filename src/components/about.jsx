import { CgMail } from "react-icons/cg";
import web from "./images/web1.jpg";
import {
  HStack,
  Heading,
  Box,
  Link,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const About = ({ aboutRef }) => {
  return (
    <Box
      bg="#262626"
      mt={{ base: "0px", lg: "50px" }}
      p={{ base: "15px", lg: "70px" }}
      display="flex"
      ref={aboutRef}
      flexDirection={{ base: "column", lg: "row" }}
    >
      <Box w={{ base: "100%", lg: "50%" }} textAlign={{base:"center", sm:"center", md:"left"}}>
        <Text color="white">Hi, I'm</Text>
        <Heading color="#4da6ff">Balogun Sodiq</Heading>
        <Heading mb="20px"  fontSize="2xl" color="white">
          FullStack Developer
        </Heading>

        <Text color="#e6e6e6">
          I'm a software developer, specialized in Frontend and Backend of web
          development.
        </Text>
        <Text mt="20px" color="#e6e6e6">
          Let's get in touch
        </Text>
        <HStack mt="20px" justify={{ base: 'center', sm: 'center', md: 'flex-start' }} mb={{ base: "50px", lg: "0px" }}>
          <Link href="mailto:balosod37@gmail.com" isExternal>
            {" "}
            <Icon boxSize={6} as={CgMail} color="#4da6ff" />
          </Link>

          <Link href="https://github.com/Balosod" isExternal>
            <Icon boxSize={6} as={AiFillGithub} color="#4da6ff" />
          </Link>
          <Link href="https://twitter.com/sodiqb86" isExternal>
            <Icon boxSize={6} as={AiFillTwitterCircle} color="#4da6ff" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/balogun-sodiq-55781921b/"
            isExternal
          >
            <Icon boxSize={6} as={AiFillLinkedin} color="#4da6ff" />
          </Link>
        </HStack>
      </Box>
      <Box display={{ base: "none", lg: "block" }} w="30%" ml="50px">
        <Image src={web} />
      </Box>
    </Box>
  );
};

export default About;
