import { Box, Image, Text, Center, Link, Button } from "@chakra-ui/react";
import multiform from "./images/multiform.png";
import urlshortner from "./images/urlshortner.png";
import phoneflag from "./images/phoneflag.png"


const Project = ({projectRef}) =>{
    return(
        <Box p={{ base: "15px", lg: "70px" }} bg="#262626" ref={projectRef}>
        <Text fontSize="3xl" textAlign={{base:"center", sm:"center", md:"left"}} color="#4da6ff" mt={{ base: "20px", lg: "0px" }}>
          Projects
        </Text>
  
        {/* color={{ base: "red", sm: "yellow", md: "blue", lg: "green" }} */}
        <Text fontSize="sm" textAlign={{base:"center", sm:"center", md:"left"}} color="#e6e6e6">
          Here are some of my projects
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
                  src={multiform}
                />
              </Center>
  
              <Text color="#e6e6e6" fontSize="15px" my="10px">
              I improved user experience through a dynamic multi-step form, real-time validation, and responsive design. This polished solution enhances user engagement and interaction.              </Text>
              <Text fontSize="sm" color="#e6e6e6">
              NextJS | TailwindCSS | HTML | CSS
              </Text>
               <Box mt="10px">
                <Link href="https://multiform-virid.vercel.app/" isExternal >
                <Button colorScheme="blue">View Website</Button>
                </Link>
              </Box>
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
                  src={urlshortner}
                />
              </Center>
  
              <Text color="#e6e6e6" fontSize="15px" my="10px">
              I developed a URL shortener with a full-stack approach, showcasing proficiency in frontend, backend, and enhanced development practices.
              </Text>
              <Text fontSize="sm" color="#e6e6e6">
                NextJS | TailwindCSS | ExpressJS | TypeScript
              </Text>
              <Box mt="10px">
                <Link href="https://url-shortner-frontend-tm3b.vercel.app/" isExternal >
                <Button colorScheme="blue">View Website</Button>
                </Link>
              </Box>
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
                  src={phoneflag}
                />
              </Center>
  
              <Text color="#e6e6e6" fontSize="15px" my="10px">
              I created a responsive landing page for Phoneflag, emphasizing features and benefits. Through reusable components and design consistency, the page adapts seamlessly. It effectively communicates Phoneflag's value proposition, showcasing my expertise in crafting engaging and user-friendly landing pages.              </Text>
              <Text fontSize="sm" color="#e6e6e6">
                React | Chakra UI | HTML | CSS
              </Text>
              <Box mt="10px">
                <Link href="https://phonflag-frontend.vercel.app/" isExternal >
                <Button colorScheme="blue">View Website</Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    )
}
export default Project;