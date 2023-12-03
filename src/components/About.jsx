import React from 'react'
import { Button, Box, Text } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode'

const About = () => {
    const { colorMode } = useColorMode();
    const bgColor = colorMode === 'dark' ? "#2c2c2c" : "#cecece";

    return (
        <section id='about'>
            <Box
                bgColor={bgColor}
                pb={100}>
                <Box
                    textAlign={"center"}
                    maxW={"80%"}
                    margin={"auto"}
                    pt={150}
                >
                    <Text
                        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                        fontWeight={"bold"}
                    >ABOUT ME</Text>
                    <Box h={1} w={"5%"} margin={"auto"} bg={"#7b66ff"} borderRadius={"full"} mb={5}></Box>
                    <br />
                    <Text fontSize={{ sm: "l", md: "l", lg: "xl" }}
                    >Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</Text>
                </Box>
                <Box
                    maxW={"50%"}
                    margin={"auto"}
                    mt={5}
                    textAlign={"center"}>
                    <Text
                        fontSize={"2xl"}
                        fontWeight={"bold"}
                    >Get to know me!</Text>
                    <br />
                    <Text
                        fontSize={{ sm: "l", md: "l", lg: "xl" }}
                    >I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</Text>
                    <br />
                    <Text
                        fontSize={{ sm: "l", md: "l", lg: "xl" }}
                    >I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</Text>
                    <Button
                        mt={8} bg={"#7B66FF"}
                    >Contact Me</Button>
                </Box>
            </Box>
        </section >
    )
}

export default About