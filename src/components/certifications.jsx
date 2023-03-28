import { Box, Image, Text } from "@chakra-ui/react";
import pythoncert from "./images/pythoncert.jpg";
import djangocert from "./images/djangocert.jpg";

const Certifications = ({ CertificateRef }) => {
  return (
    <Box p={{ base: "15px", lg: "70px" }} bg="black" ref={CertificateRef}>
      <Text fontSize="3xl" color="#4da6ff" mt={{ base: "20px", lg: "0px" }}>
        Certifications
      </Text>
      <Text fontSize="sm" color="#e6e6e6">
        Here are some of my certifications
      </Text>
      <Box
        justifyContent="center"
        display="flex"
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        mt="20px"
      >
        <Box
          p="20px"
          bg="#262626"
          borderRadius="20px"
          w={{ base: "100%", md: "50%", lg: "30%" }}
          mb={{ base: "50px", lg: "0px" }}
          mr={{ base: "0px", md: "30px", lg: "25px" }}
        >
          <Box ml="auto" mr="auto">
            <Image src={pythoncert} />
            <Text color="#e6e6e6" fontSize="2xl" mt="10px">
              Bootcamp Zero to Hero in Python
            </Text>
            <Text fontSize="sm" color="#e6e6e6">
              Issue by Udemy
            </Text>
            <Text fontSize="sm" color="#999999">
              Feb 2022
            </Text>
          </Box>
        </Box>
        <Box
          p="20px"
          bg="#262626"
          borderRadius="20px"
          w={{ base: "100%", md: "50%", lg: "30%" }}
          mb={{ base: "50px", lg: "0px" }}
        >
          <Box ml="auto" mr="auto">
            <Image src={djangocert} />
            <Text color="#e6e6e6" fontSize="2xl" mt="10px">
              Django 4 and Python FullStack
            </Text>
            <Text fontSize="sm" color="#e6e6e6">
              Issue by Udemy
            </Text>
            <Text fontSize="sm" color="#999999">
              Mar 2022
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Certifications;
