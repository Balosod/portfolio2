import avatar from "./images/avatar.png";
import { IoMdQuote } from "react-icons/io";
import { MdOutlineStarRate } from "react-icons/md";
import { HStack, Box, Icon, Flex, Image, Text } from "@chakra-ui/react";

const Testimonials = ({ honorRef }) => {
  return (
    <Box p={{ base: "15px", lg: "70px" }} bg="#262626" ref={honorRef}>
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
          w={{ base: "100%", md: "50%", lg: "30%" }}
          bg="black"
          mb={{ base: "50px", lg: "0px" }}
          borderRadius="10px"
          mr={{ base: "0px", md: "30px", lg: "50px" }}
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
          <Flex my="30px">
            <Image w="20%" src={avatar} />
            <Box ml="10px" mt="20px">
              <Text color="#e6e6e6">Karalina</Text>
              <Text fontSize="sm" color="#999999">
                Backend developer(NodeJs,Firebase)
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box
          p="20px"
          w={{ base: "100%", md: "50%", lg: "30%" }}
          bg="black"
          mb={{ base: "50px", lg: "0px" }}
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
          <Flex mt="80px">
            <Image w="20%" src={avatar} />
            <Box ml="10px" mt="20px">
              <Text color="white">Dowell Research</Text>
              <Text fontSize="sm" color="#999999">
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
