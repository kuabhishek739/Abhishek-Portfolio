import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaGit, FaPython, FaReact } from 'react-icons/fa';
import { Flex, Box, Text, VStack } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode'
const Skills = () => {
    const { colorMode } = useColorMode();
    const bgColor = colorMode === 'dark' ? "#3d3d3d" : "#ffffff";
    return (
        <section id='skills'>
            <Box
                bgColor={bgColor}
                textAlign={"center"}
                pt={100}
                pb={100}>
                <Text
                    fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                    fontWeight={"bold"}
                >My Skills</Text>
                <Box h={1} w={"5%"} margin={"auto"} bg={"#7b66ff"} borderRadius={"full"} mb={5}></Box>
                <br />
                <Flex
                    maxW={"60%"}
                    wrap={"wrap"}
                    margin={"auto"}
                    justifyContent={"center"}
                    alignItems={"center"}>
                    <Box
                        width={['100%', 'calc(50% - 10px)', 'calc(33.33% - 10px)']} // For responsiveness: 100% width on mobile, 50% width on tablet, 33.33% width on larger screens
                        textAlign="center"
                        my={3}
                        mx={2}
                        border='2px' borderColor='gray.400'
                        margin={"auto"}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        _hover={{ transform: "scale(1.1)" }}>
                        <FaHtml5 size={"30%"} />
                        <Text>HTML</Text>
                    </Box>
                    <Box
                        width={['100%', 'calc(50% - 10px)', 'calc(33.33% - 10px)']} // For responsiveness: 100% width on mobile, 50% width on tablet, 33.33% width on larger screens
                        textAlign="center"
                        my={3}
                        mx={2}
                        border='2px' borderColor='gray.400'
                        margin={"auto"}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        _hover={{ transform: "scale(1.1)" }}>
                        <FaCss3Alt size={"30%"} />
                        <Text>CSS</Text>
                    </Box>
                    <Box
                        width={['100%', 'calc(50% - 10px)', 'calc(33.33% - 10px)']} // For responsiveness: 100% width on mobile, 50% width on tablet, 33.33% width on larger screens
                        textAlign="center"
                        my={3}
                        mx={2}
                        border='2px' borderColor='gray.400'
                        margin={"auto"}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        _hover={{ transform: "scale(1.1)" }}>
                        <FaJs size={"30%"} />
                        <Text>JavaScript</Text>
                    </Box>
                    <Box
                        width={['100%', 'calc(50% - 10px)', 'calc(33.33% - 10px)']} // For responsiveness: 100% width on mobile, 50% width on tablet, 33.33% width on larger screens
                        textAlign="center"
                        my={3}
                        mx={2}
                        border='2px' borderColor='gray.400'
                        margin={"auto"}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        _hover={{ transform: "scale(1.1)" }}>
                        <FaGit size={"30%"} />
                        <Text>Git</Text>
                    </Box>
                    <Box
                        width={['100%', 'calc(50% - 10px)', 'calc(33.33% - 10px)']} // For responsiveness: 100% width on mobile, 50% width on tablet, 33.33% width on larger screens
                        textAlign="center"
                        my={3}
                        mx={2}
                        border='2px' borderColor='gray.400'
                        margin={"auto"}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        _hover={{ transform: "scale(1.1)" }}>
                        <FaReact size={"30%"} />
                        <Text>React</Text>
                    </Box>
                    <Box
                        width={['100%', 'calc(50% - 10px)', 'calc(33.33% - 10px)']} // For responsiveness: 100% width on mobile, 50% width on tablet, 33.33% width on larger screens
                        textAlign="center"
                        my={3}
                        mx={2}
                        border='2px' borderColor='gray.400'
                        margin={"auto"}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        _hover={{ transform: "scale(1.1)" }}>
                        <FaPython size={"30%"} />
                        <Text>Python</Text>
                    </Box>
                </Flex>
            </Box>

        </section>
    )
}

export default Skills