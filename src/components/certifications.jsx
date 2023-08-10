import { Box, Image, Text, Center } from "@chakra-ui/react";
import pythoncert from "./images/pythoncert.jpg";
import djangocert from "./images/djangocert.jpg";
import nodecert from "./images/nodecert.png";
import node2cert from "./images/node2cert.png";

const Certifications = ({ CertificateRef }) => {
  return (
    <Box p={{ base: "15px", lg: "70px" }} bg="#262626" ref={CertificateRef}>
      <Text fontSize="3xl" color="#4da6ff" mt={{ base: "20px", lg: "0px" }}>
        Certifications
      </Text>

      {/* color={{ base: "red", sm: "yellow", md: "blue", lg: "green" }} */}
      <Text fontSize="sm" color="#e6e6e6">
        Here are some of my certifications
      </Text>
      <Box
        justifyContent="center"
        display="flex"
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
        mt="20px"
      >
        <Box
          p="20px"
          bg="black"
          borderRadius="20px"
          w={{ base: "250px", sm: "400px", md: "250px", lg: "500px" }}
          mb={{ base: "50px", lg: "0px" }}
          mr={{ base: "auto", sm: "auto", md: "10px", lg: "25px" }}
          ml={{ base: "auto", sm: "auto", md: "0px", lg: "0px" }}
        >
          <Box ml="auto" mr="auto">
            <Center>
              <Image
                w={{ base: "250px", sm: "400px", md: "250px", lg: "500px" }}
                src={pythoncert}
              />
            </Center>

            <Text color="#e6e6e6" fontSize="20px" mt="10px">
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
          bg="black"
          borderRadius="20px"
          w={{ base: "250px", sm: "400px", md: "250px", lg: "500px" }}
          mb={{ base: "50px", lg: "0px" }}
          ml={{ base: "auto", sm: "auto", md: "auto", lg: "0px" }}
          mr={{ base: "auto", sm: "auto", md: "auto", lg: "0px" }}
        >
          <Box ml="auto" mr="auto">
            <Center>
              <Image
                w={{ base: "250px", sm: "400px", md: "250px", lg: "500px" }}
                src={djangocert}
              />
            </Center>

            <Text color="#e6e6e6" fontSize="20px" mt="10px">
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
        <Box
          p="20px"
          bg="black"
          borderRadius="20px"
          w={{ base: "250px", sm: "400px", md: "250px", lg: "500px" }}
          mb={{ base: "50px", lg: "0px" }}
          ml={{ base: "auto", sm: "auto", md: "10px", lg: "25px" }}
          mr={{ base: "auto", sm: "auto", md: "auto", lg: "0px" }}
        >
          <Box ml="auto" mr="auto">
            <Center>
              <Image
                w={{ base: "250px", sm: "400px", md: "250px", lg: "500px" }}
                src={nodecert}
              />
            </Center>

            <Text color="#e6e6e6" fontSize="20px" mt="10px">
              Backend Web Development using JavaScript, Node.js and Express
            </Text>
            <Text fontSize="sm" color="#e6e6e6">
              Issue by DevTown
            </Text>
            <Text fontSize="sm" color="#999999">
              Mar 2023
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Certifications;
