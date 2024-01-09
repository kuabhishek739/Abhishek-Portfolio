import { ReactNode } from 'react';
import {
    Box,
    Text,
    Link,
    IconButton,
    Spacer,
    HStack,
    Image,
} from '@chakra-ui/react';
import { FaGithub} from 'react-icons/fa';
import YoutubeIcon from '../assets/youtube-color-icon.png';
import InstagramIcon from '../assets/instagram-color-icon.svg';
import LinkedinIcon from '../assets/linkedin-app-icon.svg';

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
                            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} textShadow={"0 0 15px gray"}>ABHISHEK</Text>
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
                                    _hover={{ transform: "scale(1.1)" }}
                                />
                            </Link>
                            <Link href="https://www.linkedin.com/in/abhishek-3526011b5/">
                                <Image
                                src={LinkedinIcon}
                                alt="Linkedin"
                                boxSize="2em"
                                _hover={{ transform: "scale(1.1)" }}
                            />
                            </Link>

                            <Link href="https://www.instagram.com/kuabhishek739/">
                                <Image
                                    src={InstagramIcon}
                                    alt="Instagram"
                                    boxSize="2em"
                                    _hover={{ transform: "scale(1.1)" }}
                                />
                            </Link>

                            <Link href="https://www.youtube.com/@ezeecode9327">
                                <Image
                                    src={YoutubeIcon}
                                    alt="Youtube"
                                    boxSize="2.5em"
                                    _hover={{ transform: "scale(1.1)" }}
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
