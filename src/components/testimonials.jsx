import avatar from "./images/avatar.png";
import { IoMdQuote } from "react-icons/io";
import { MdOutlineStarRate } from "react-icons/md";
import { HStack, Box, Icon, Flex, Image, Text } from "@chakra-ui/react";

const Testimonials = ({ honorRef }) => {
  return (
    <Box p={{ base: "15px", lg: "70px" }} bg="black" ref={honorRef}>
      <Text fontSize="3xl" color="#4da6ff" mt={{ base: "20px", lg: "0px" }}>
        Testimonials
      </Text>
      <Text fontSize="sm" color="#e6e6e6">
        What Clients Say
      </Text>

      <Box
        justifyContent="center"
        display="flex"
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        mt="70px"
      >
        <Box
          p="20px"
          w={{ base: "250px", sm: "400px", md: "450px", lg: "450px" }}
          bg="#262626"
          mb={{ base: "50px", lg: "0px" }}
          borderRadius="10px"
          mr={{ base: "auto", sm: "auto", md: "50px", lg: "50px" }}
          ml={{ base: "auto", sm: "auto", md: "0px", lg: "0px" }}
        >
          <Flex justifyContent="space-between">
            <Icon as={IoMdQuote} color="#4da6ff" />
            <HStack>
              <Icon as={MdOutlineStarRate} color="#4da6ff" />
              <Icon as={MdOutlineStarRate} color="#4da6ff" />
              <Icon as={MdOutlineStarRate} color="#4da6ff" />
              <Icon as={MdOutlineStarRate} color="#4da6ff" />
            </HStack>
          </Flex>
          <Text color="#999999" my="20px">
            "Balogun presented himself as good and responsible developer, always
            was ready to take a new task and was online for discussions."
          </Text>
          <Flex mt={{ base: "55px", md: "50px", lg: "70px" }}>
            <Image
              w={{ base: "80px", md: "70px", lg: "70px" }}
              h={{ base: "80px", sm: "20%", md: "20%", lg: "20%", lg: "20%" }}
              src={avatar}
            />
            <Box ml="10px" mt="20px">
              <Text color="#e6e6e6">Content Office</Text>
              <Text fontSize={{ base: "10px", sm: "sm" }} color="#999999">
                Backend developer(NodeJs,Firebase)
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box
          p="20px"
          w={{ base: "250px", sm: "400px", md: "450px", lg: "450px" }}
          bg="#262626"
          mb={{ base: "50px", lg: "0px" }}
          mr={{ base: "auto", sm: "auto", md: "0px", lg: "0px" }}
          ml={{ base: "auto", sm: "auto", md: "0px", lg: "0px" }}
          borderRadius="10px"
        >
          <Flex justifyContent="space-between">
            <Icon as={IoMdQuote} color="#4da6ff" />
            <HStack>
              <Icon as={MdOutlineStarRate} color="#4da6ff" />
              <Icon as={MdOutlineStarRate} color="#4da6ff" />
              <Icon as={MdOutlineStarRate} color="#4da6ff" />
              <Icon as={MdOutlineStarRate} color="#4da6ff" />
              <Icon as={MdOutlineStarRate} color="#4da6ff" />
            </HStack>
          </Flex>
          <Text color="#999999" my="20px">
            "Great working experience with this seller !! He is great in his
            niche !"
          </Text>
          <Flex mt={{ base: "55px", md: "100px", lg: "90px" }}>
            <Image
              w={{ base: "80px", md: "70px" }}
              h={{ base: "80px", sm: "20%", md: "20%", lg: "20%", lg: "20%" }}
              src={avatar}
            />
            <Box ml="10px" mt="20px">
              <Text color="white">Dowell Research</Text>
              <Text fontSize={{ base: "10px", sm: "sm" }} color="#999999">
                Backend developer(Django)
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
