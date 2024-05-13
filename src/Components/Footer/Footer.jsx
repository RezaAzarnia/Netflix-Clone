import { Box, Container, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <Box bg={"blackAlpha.500"} p={{ base: 0, md: 5 }} mt={5}
        // pos={"absolute"} bottom={0} left={0} right={0}

        >
            <Container maxW={"480px"}>
                <UnorderedList listStyleType={"none"}
                    display={"grid"}
                    gridTemplateColumns={"repeat(4 , 1fr)"}
                    py={5}
                    fontSize={"sm"}
                    textAlign={"center"}
                    alignItems={"center"}
                    color={"gray.400"}
                >
                    <ListItem>Privacy</ListItem>
                    <ListItem>About</ListItem>
                    <ListItem>Blog</ListItem>
                    <ListItem>FAQ</ListItem>
                </UnorderedList>
            </Container>
            <Container maxW={"container.md"} textAlign={"center"}>
                <Text as="span" color={"gray.600"} fontSize={"sm"}>Explore our movie website where the journey continues even after the credits roll. Dive into a treasure trove of links, from FAQs and customer support to our latest blog posts and social media updates. Stay connected with our vibrant community, where movie enthusiasts converge to share insights, recommendations, and discussions.</Text>
            </Container>
            <Flex justify={"center"} pt={6} gap={5} fontSize={"25px"}>
                <Link to='https://t.me/Rezaazarnia' target="_blank">
                    <FaTelegram />
                </Link>
                <Link to={"https://www.linkedin.com/in/rezaazarnia/"} target="_blank">
                    <FaLinkedin />
                </Link>
                <Link to={"https://github.com/RezaAzarnia"} target="_blank">
                    <FaGithub />
                </Link>
            </Flex>
        </Box>
    )
}

export default Footer