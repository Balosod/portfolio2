import { HStack, Box, Circle, Link, Icon, Text } from "@chakra-ui/react";
import { CgMail } from "react-icons/cg";
import { AiOutlineArrowUp } from "react-icons/ai";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const Contact = ({ handleAboutClick, ContactRef }) => {
  return (
    <Box
      p={{ base: "35px", lg: "70px" }}
      bg="black"
      textAlign="center"
      ref={ContactRef}
    >
      <Box>
        <Text fontSize="3xl" color="#4da6ff">
          Get In Touch
        </Text>
        <Box>
          <Text fontSize="1xl" color="#e6e6e6">
            I’m currently searching for opportunities for a full stack developer
            role.
          </Text>
          <Text fontSize="1xl" color="#e6e6e6">
            If there is any vacancy my inbox is always open. Whether
          </Text>
          <Text fontSize="1xl" color="#e6e6e6">
            you have any further questions or just want to say hi,
          </Text>
          <Text fontSize="1xl" color="#e6e6e6">
            I’ll try my best to get back to you!
          </Text>
        </Box>
        <HStack justifyContent="center" my="20px">
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
        <Text fontSize="1xl" color="#e6e6e6">
          ©Copyright 2023, All Rights Reserved By Balogun Sodiq.
        </Text>

        <Circle
          onClick={handleAboutClick}
          mr="auto"
          ml="auto"
          mt=" 25px"
          size="40px"
          bg="#4da6ff"
        >
          <Icon as={AiOutlineArrowUp} color="white" />
        </Circle>
      </Box>
    </Box>
  );
};

export default Contact;
