import { Button, Link, IconButton, Stack, Box, Text, VStack, Image, Circle } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import React, { useState, useEffect } from 'react'
import LordIconComponent from './LordIconComponent';
import AnchorLink from "react-anchor-link-smooth-scroll";
import BgImage from '../assets/Vscode.Webp'
import Typewriter from 'typewriter-effect';

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <section id='header'>
            <Stack
                style={{
                    backgroundImage: `url(${BgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                }}
                minW={"100%"}
                minH={"100vh"}
                pb={100}
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    pt={"5%"}
                    justify={"space-between"}
                    display="flex"
                >
                    <VStack
                        display={{ base: 'none', md: 'flex', lg: 'flex' }}
                        p={3} pt={200}>
                        <Link href="https://github.com/kuabhishek739">
                            <IconButton
                                as={FaGithub}
                                aria-label="GitHub"
                                variant="ghost"
                                size="sm"
                                color={"white"}
                                _hover={{ transform: "scale(1.1)" }}
                            />
                        </Link>
                        <Link href="https://www.linkedin.com/in/abhishek-3526011b5/">
                            <IconButton
                                as={FaLinkedin}
                                aria-label="LinkedIn"
                                variant="ghost"
                                size="sm"
                                color={"white"}
                                _hover={{ transform: "scale(1.1)" }}
                            />
                        </Link>
                        <Link href="https://twitter.com">
                            <IconButton
                                as={FaTwitter}
                                aria-label="Twitter"
                                variant="ghost"
                                size="sm"
                                color={"white"}
                                _hover={{ transform: "scale(1.1)" }}
                            />
                        </Link>
                        <Link href="mailto:abhishekkukreti9@gmail.com">
                            <IconButton
                                as={AiOutlineMail}
                                aria-label="Email"
                                variant="ghost"
                                size="sm"
                                color={"white"}
                                _hover={{ transform: "scale(1.1)" }}
                            />
                        </Link>
                        <Link href="tel:+919311837437">
                            <IconButton
                                as={AiOutlinePhone}
                                aria-label="Phone"
                                variant="ghost"
                                size="sm"
                                color={"white"}
                                _hover={{ transform: "scale(1.1)" }}
                            />
                        </Link>
                    </VStack>
                    <Box
                        mr={{ lg: "20" }}
                        ml={{ base: "20" }}
                        p={4}
                        maxW={"60%"}
                        textAlign={"center"}
                        margin={{ sm: "auto", md: "none", lg: "none" }}
                    >
                        <Text fontSize={{ base: "3xl", md: "3xl", lg: "5xl" }} color={"white"} fontWeight={"bold"}>HEY, I'M</Text>
                        <Text fontSize={{ base: "3xl", md: "3xl", lg: "5xl" }} color={"white"} fontWeight={"bold"}>
                            <Typewriter
                                options={{
                                    strings: ['ABHISHEK', 'CODER', 'WEB DEVELOPER'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                    deleteSpeed: 50,
                                    writeSpeed: 50
                                }}
                            />
                        </Text>
                        <br />
                        <Text color={"white"} fontSize={{ base: "l", md: "l", lg: "xl" }}>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</Text>
                        <AnchorLink href="#contact">
                            <Button
                                mt={8}
                                bg={"#7B66FF"}
                                color={"white"}
                            >Contact Me</Button>
                        </AnchorLink>
                    </Box>
                </Box>
                <Box mt={"10%"}>
                    <LordIconComponent />
                </Box>
            </Stack >
        </section>
    )
}

export default Header