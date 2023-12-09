import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaGit, FaPython, FaReact } from 'react-icons/fa';
import { Flex, Box, Text, VStack } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode'
const Skills = () => {
    const { colorMode } = useColorMode();
    const bgColor = colorMode === 'dark' ? "#3d3d3d" : "#ffffff";
    const skillBoxStyle = {
        width: ['100%', 'calc(50% - 10px)', 'calc(33.33% - 10px)'],
        height: '150px',
        textAlign: 'center',
        my: 3,
        mx: 2,
        border: '2px',
        borderColor: 'gray.400',
        margin: { base: '10px', md: '2' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        _hover: {
            transform: 'scale(1.1)'
        },
        justifyContent: 'center'
    };
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
                    maxW={{ base: "80%", md: "60%", lg: "60%" }}
                    wrap={"wrap"}
                    margin={"auto"}
                    justifyContent={"center"}
                    alignItems={"center"} >

                    <Box {...skillBoxStyle}>
                        <FaHtml5 size={"50%"} />
                        <Text>HTML</Text>
                    </Box>
                    <Box {...skillBoxStyle}>
                        <FaCss3Alt size={"50%"} />
                        <Text>CSS</Text>
                    </Box>
                    <Box {...skillBoxStyle}>
                        <FaJs size={"50%"} />
                        <Text>JavaScript</Text>
                    </Box>
                    <Box {...skillBoxStyle}>
                        <FaGit size={"50%"} />
                        <Text>Git</Text>
                    </Box>
                    <Box {...skillBoxStyle}>
                        <FaReact size={"50%"} />
                        <Text>React</Text>
                    </Box>
                    <Box {...skillBoxStyle}>
                        <FaPython size={"50%"} />
                        <Text>Python</Text>
                    </Box>
                </Flex>
            </Box>

        </section>
    )
}

export default Skills