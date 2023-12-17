import React, { useState } from 'react';
import {
    Box,
    Flex,
    Spacer,
    IconButton,
    useDisclosure,
    Image,
    VStack,
    HStack,
    Text,
    Collapse,
    useColorMode,
} from '@chakra-ui/react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import myImg from '../assets/Image.Webp';

const handleResumeDownload = () => {
    const googleDriveFileDirectDownloadUrl = 'https://drive.usercontent.google.com/download?id=17A0m-yflqKYoeqj52id5u_OIoONKSIeQ&export=download&authuser=0&confirm=t&uuid=46942857-037d-4dd2-b3db-72e291fe3cf8&at=APZUnTWwKPe7M3OzvQRtrrvqQqib:1701627501437';
    window.location.href = googleDriveFileDirectDownloadUrl;
    const googleDriveFileUrl = 'https://drive.google.com/file/d/17A0m-yflqKYoeqj52id5u_OIoONKSIeQ/view?usp=drive_link';
    window.open(googleDriveFileUrl, '_blank');
};
const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    const [isBoxExpanded, setIsBoxExpanded] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    const toggleBox = () => {
        setIsBoxExpanded(!isBoxExpanded);
    };

    return (
        <Flex bg="#7B66FF" p={4} align="center" position="sticky" top={0} zIndex="sticky">
            <Box
                w={{ base: "50px", md: "50px" }}
                h={{ base: "50px", md: "50px" }}
                borderRadius={"full"}
                overflow={"hidden"}
                bg={"white"}
                mr={4}
                _hover={{ transform: "scale(1.04)", cursor: "pointer" }} >
                <Image src={myImg}></Image>
            </Box>
            <Text fontSize="xl" fontWeight="bold" mr={4} _hover={{ transform: "scale(1.1)", cursor: "pointer" }} display={{ base: 'none', sm: 'block', md: 'block' }}>
                ABHISHEK
            </Text>
            <Box display={{ base: 'block', md: 'none' }}>
                <IconButton
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    onClick={toggleBox}
                    variant="ghost"
                    size="md"
                    aria-label="Toggle Navigation"
                />
            </Box>
            <Box
                display={isBoxExpanded ? 'block' : 'none'}
                position="absolute"
                top="105%"
                bg="#7B66FF"
                borderBottomRadius="5px"
                ml={{ base: 1, md: 0 }}
                left={0}
                width="40%"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                zIndex={1} >
                <Collapse in={isBoxExpanded} animateOpacity>
                    <VStack spacing={4} align="stretch" textAlign={"center"} mt={{ base: 4, md: 0 }} fontWeight={'bold'}>
                        <AnchorLink href="#header">
                            <Text p={2}
                                fontWeight={"bold"}
                                color="96EFFF"
                                _hover={{
                                    textDecoration: 'none',
                                    borderBottom: '2px',
                                    borderColor: 'white',
                                }}
                                cursor="pointer">HOME</Text>
                        </AnchorLink>
                        <AnchorLink href="#about">
                            <Text p={2}
                                fontWeight={"bold"}
                                color="96EFFF"
                                _hover={{
                                    textDecoration: 'none',
                                    borderBottom: '2px',
                                    borderColor: 'white',
                                }}
                                cursor="pointer">ABOUT</Text>
                        </AnchorLink>
                        <AnchorLink href="#skills">
                            <Text p={2}
                                fontWeight={"bold"}
                                color="96EFFF"
                                _hover={{
                                    textDecoration: 'none',
                                    borderBottom: '2px',
                                    borderColor: 'white',
                                }}
                                cursor="pointer">SKILLS</Text>
                        </AnchorLink>
                        <AnchorLink href="#projects">
                            <Text p={2}
                                fontWeight={"bold"}
                                color="96EFFF"
                                _hover={{
                                    textDecoration: 'none',
                                    borderBottom: '2px',
                                    borderColor: 'white',
                                }}
                                cursor="pointer">PROJECTS</Text>
                        </AnchorLink>
                        <AnchorLink href="#contact">
                            <Text p={2}
                                fontWeight={"bold"}
                                color="96EFFF"
                                _hover={{
                                    textDecoration: 'none',
                                    borderBottom: '2px',
                                    borderColor: 'white',
                                }}
                                cursor="pointer">CONTACT</Text>
                        </AnchorLink>
                        <Text onClick={handleResumeDownload} p={2}
                            fontWeight={"bold"}
                            color="96EFFF"
                            _hover={{
                                textDecoration: 'none',
                                borderBottom: '2px',
                                borderColor: 'white',
                            }}
                            cursor="pointer">RESUME</Text>
                    </VStack>
                </Collapse>
            </Box>
            <Spacer />
            <Box display={{ base: 'none', md: 'block' }}>
                <HStack spacing={4} align="stretch" fontWeight={'bold'}>
                    <AnchorLink href="#header">
                        <Text p={2}
                            fontWeight={"bold"}
                            color="96EFFF"
                            _hover={{
                                textDecoration: 'none',
                                borderBottom: '2px',
                                borderColor: 'white',
                            }}
                            cursor="pointer">HOME</Text>
                    </AnchorLink>
                    <AnchorLink href="#about">
                        <Text p={2}
                            fontWeight={"bold"}
                            color="96EFFF"
                            _hover={{
                                textDecoration: 'none',
                                borderBottom: '2px',
                                borderColor: 'white',
                            }}
                            cursor="pointer">ABOUT</Text>
                    </AnchorLink>
                    <AnchorLink href="#skills">
                        <Text p={2}
                            fontWeight={"bold"}
                            color="96EFFF"
                            _hover={{
                                textDecoration: 'none',
                                borderBottom: '2px',
                                borderColor: 'white',
                            }}
                            cursor="pointer">SKILLS</Text>
                    </AnchorLink>
                    <AnchorLink href="#projects">
                        <Text p={2}
                            fontWeight={"bold"}
                            color="96EFFF"
                            _hover={{
                                textDecoration: 'none',
                                borderBottom: '2px',
                                borderColor: 'white',
                            }}
                            cursor="pointer">PROJECTS</Text>
                    </AnchorLink>
                    <AnchorLink href="#contact">
                        <Text p={2}
                            fontWeight={"bold"}
                            color="96EFFF"
                            _hover={{
                                textDecoration: 'none',
                                borderBottom: '2px',
                                borderColor: 'white',
                            }}
                            cursor="pointer">CONTACT</Text>
                    </AnchorLink>
                    <Text onClick={handleResumeDownload} p={2}
                        fontWeight={"bold"}
                        color="96EFFF"
                        _hover={{
                            textDecoration: 'none',
                            borderBottom: '2px',
                            borderColor: 'white',
                        }}
                        cursor="pointer">RESUME</Text>
                </HStack>
            </Box>
            <IconButton
                aria-label="Toggle Dark/Light mode"
                icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                isRound="true"
                onClick={toggleColorMode}
                variant="ghost"
                size="md"
            />
        </Flex>
    );
};

export default Navbar;