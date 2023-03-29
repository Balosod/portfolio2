import { Box, Center, Image, Text } from "@chakra-ui/react";
import pythonlogo from "./images/pythonlogo.png";
import nodelogo from "./images/nodelogo.png";
import djangologo from "./images/djangologo.png";
import javascriptlogo from "./images/javascriptlogo.png";
import reactlogo from "./images/reactlogo.png";
import flasklogo from "./images/flasklogo.png";
import chakralogo from "./images/chakralogo.png";
import htmllogo from "./images/htmllogo.png";
import csslogo from "./images/csslogo.png";
import expresslogo from "./images/expresslogo.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {
  Provider,
  Carousel,
  LeftButton,
  RightButton,
} from "chakra-ui-carousel";

const Skills = ({ skillRef }) => {
  return (
    <Box p={{ base: "15px", lg: "70px" }} bg="black" ref={skillRef}>
      <Text fontSize="3xl" color="#4da6ff" mt={{ base: "20px", lg: "0px" }}>
        Skills
      </Text>
      <Text fontSize="sm" color="#e6e6e6">
        Here are some of my skills
      </Text>
      <Provider>
        <Box mb="30px">
          <RightButton
            float="right"
            w="5px"
            h="30px"
            ml="10px"
            borderRadius="100%"
            customIcon={<AiOutlineArrowRight />}
            bgColor="black"
            textColor="white"
            _hover={{ bgColor: "black", textColor: "white" }}
          />

          <LeftButton
            float="right"
            w="5px"
            h="30px"
            ml="10px"
            borderRadius="100%"
            customIcon={<AiOutlineArrowLeft />}
            bgColor="black"
            textColor="white"
            _hover={{ bgColor: "black", textColor: "white" }}
          />
        </Box>

        <Carousel gap={50}>
          <Box
            borderRadius="10px"
            pt="40px"
            bg="#262626"
            w={{ base: "300px", sm: "400px", md: "450px", lg: "500px" }}
            h="200px"
          >
            <Center>
              <Image src={pythonlogo} w="50px" />
            </Center>

            <Box textAlign="center">
              <Text fontSize="3xl" color="white">
                Python
              </Text>
              <Text color="white">3 years experience</Text>
            </Box>
          </Box>
          <Box borderRadius="10px" pt="40px" bg="#262626" w="500px" h="200px">
            <Center>
              <Image src={djangologo} w="50px" />
            </Center>

            <Box textAlign="center">
              <Text fontSize="3xl" color="white">
                Django
              </Text>
              <Text color="white">3 years experience</Text>
            </Box>
          </Box>
          <Box borderRadius="10px" pt="40px" bg="#262626" w="500px" h="200px">
            <Center>
              <Image src={javascriptlogo} w="50px" />
            </Center>

            <Box textAlign="center">
              <Text fontSize="3xl" color="white">
                JavaScript
              </Text>
              <Text color="white">3 years experience</Text>
            </Box>
          </Box>
          <Box borderRadius="10px" pt="40px" bg="#262626" w="500px" h="200px">
            <Center>
              <Image src={nodelogo} w="50px" />
            </Center>

            <Box textAlign="center">
              <Text fontSize="3xl" color="white">
                Node
              </Text>
              <Text color="white">3 years experience</Text>
            </Box>
          </Box>
          <Box borderRadius="10px" pt="40px" bg="#262626" w="500px" h="200px">
            <Center>
              <Image src={reactlogo} w="50px" />
            </Center>

            <Box textAlign="center">
              <Text fontSize="3xl" color="white">
                React
              </Text>
              <Text color="white">2 years experience</Text>
            </Box>
          </Box>
          <Box borderRadius="10px" pt="40px" bg="#262626" w="500px" h="200px">
            <Center>
              <Image src={flasklogo} w="50px" />
            </Center>

            <Box textAlign="center">
              <Text fontSize="3xl" color="white">
                Flask
              </Text>
              <Text color="white">3 years experience</Text>
            </Box>
          </Box>
          <Box borderRadius="10px" pt="40px" bg="#262626" w="500px" h="200px">
            <Center>
              <Image src={expresslogo} w="50px" />
            </Center>

            <Box textAlign="center">
              <Text fontSize="3xl" color="white">
                Express
              </Text>
              <Text color="white">3 years experience</Text>
            </Box>
          </Box>
          <Box borderRadius="10px" pt="40px" bg="#262626" w="500px" h="200px">
            <Center>
              <Image src={chakralogo} w="50px" />
            </Center>

            <Box textAlign="center">
              <Text fontSize="3xl" color="white">
                Chakra
              </Text>
              <Text color="white">3 years experience</Text>
            </Box>
          </Box>
          <Box borderRadius="10px" pt="40px" bg="#262626" w="500px" h="200px">
            <Center>
              <Image src={htmllogo} w="50px" />
            </Center>

            <Box textAlign="center">
              <Text fontSize="3xl" color="white">
                HTML
              </Text>
              <Text color="white">3 years experience</Text>
            </Box>
          </Box>
          <Box borderRadius="10px" pt="40px" bg="#262626" w="500px" h="200px">
            <Center>
              <Image src={csslogo} w="50px" />
            </Center>

            <Box textAlign="center">
              <Text fontSize="3xl" color="white">
                CSS
              </Text>
              <Text color="white">3 years experience</Text>
            </Box>
          </Box>
        </Carousel>
      </Provider>
    </Box>
  );
};

export default Skills;
