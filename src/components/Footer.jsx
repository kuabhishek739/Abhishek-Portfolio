import { ReactNode } from 'react';
import {
    Box,
    Text,
    Link,
    IconButton,
    Spacer,
    HStack
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {

    return (
        <section id='footer'>
            <Box
                bg={"black"}
                h={"100%"}
                pt={100}
                pb={50}
                color={"white"}
            >
                <Box
                    display={"flex"}
                    margin={"auto"}
                    maxW={"90%"}
                >
                    <Box
                        maxWidth={"40%"}>
                        <Text
                            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}>ABHISHEK</Text>
                        <Text>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</Text>
                    </Box>
                    <Spacer />
                    <Box
                        w={"40%"}
                        margin={"auto"}
                        textAlign={"center"}
                        display={"flex"}

                        flexDirection={"column"}
                        alignItems={"end"}>
                        <Text fontSize={{ base: "l", md: "l", lg: "xl" }}>Social</Text>
                        <br />
                        <HStack>
                            <Link href="https://github.com/kuabhishek739">
                                <IconButton
                                    as={FaGithub}
                                    aria-label="GitHub"
                                    variant="ghost"
                                    size="sm"
                                    color={"white"}
                                    _hover={{ color: "#7B66FF", transform: "scale(1.1)" }}
                                />
                            </Link>
                            <Link href="https://www.linkedin.com/in/abhishek-3526011b5/">
                                <IconButton
                                    as={FaLinkedin}
                                    aria-label="LinkedIn"
                                    variant="ghost"
                                    size="sm"
                                    color={"white"}
                                    _hover={{ color: "#7B66FF", transform: "scale(1.1)" }}
                                />
                            </Link>

                            <Link href="https://www.instagram.com/kuabhishek739/">
                                <IconButton
                                    as={FaInstagram}
                                    aria-label="Instagram"
                                    variant="ghost"
                                    size="sm"
                                    color={"white"}
                                    _hover={{ color: "#7B66FF", transform: "scale(1.1)" }}
                                />
                            </Link>
                            <Link href="https://www.youtube.com/@ezeecode9327">
                                <IconButton
                                    as={FaYoutube}
                                    aria-label="Youtube"
                                    variant="ghost"
                                    size="sm"
                                    color={"white"}
                                    _hover={{ color: "#7B66FF", transform: "scale(1.1)" }}
                                />
                            </Link>
                        </HStack>
                    </Box>

                </Box>

                <br />
                <Text
                    fontSize={{ base: "md", md: "md", lg: "l" }}
                    fontWeight={"bold"}
                    textAlign={"center"}
                >
                    © Copyright 2023. Made by Abhishek
                </Text>
            </Box>
        </section>
    );
}
