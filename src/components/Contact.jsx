import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Text,
    Textarea,
    useColorModeValue,
} from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'
import React from 'react'
import darkbackground from '../assets/dark-background.png'
import lightbackground from '../assets/light-background.png'
const Contact = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const backgroundImage = isDark ? `url(${darkbackground})` : `url(${lightbackground})`;
    return (
        <section id='contact'>
            <Box
                minH={'100vh'}
                align={'center'}
                justify={'space-around'}
                pt={50}
                pb={100}
                style={{
                    backgroundImage: backgroundImage,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <Box>
                    <Text
                        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                        fontWeight={"bold"}
                    >Contact Me</Text>
                    <Box h={1} w={"5%"} margin={"auto"} bg={"#7b66ff"} borderRadius={"full"} mb={5}></Box>
                    <br />
                </Box>

                <Box
                    rounded={'4xl'}
                    bg={useColorModeValue('white', '#292929')}
                    boxShadow={'lg'}
                    maxW={{ base: '90%', md: '600px' }}
                    p={8}
                    borderRadius="20px"
                    overflow="hidden"
                >

                    <Stack spacing={4}>
                        <Box
                            fontSize={"20px"}
                            fontWeight={"bold"}>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
                        </Box>
                        <FormControl id="fullName">
                            <FormLabel fontSize={"13px"}>NAME</FormLabel>
                            <Input placeholder='Full Name' type="text" />
                        </FormControl>
                        <FormControl id="email">
                            <FormLabel fontSize={"12px"}>EMAIL</FormLabel>
                            <Input placeholder='Email' type="email" />
                        </FormControl>
                        <FormControl id="message">
                            <FormLabel fontSize={"12px"}>MESSAGE</FormLabel>
                            <Textarea placeholder='Type your message' h={200} resize="vertical" />
                        </FormControl>
                        <Button mt={8} bg={"#7B66FF"}>Submit</Button>
                    </Stack>
                </Box>
            </Box>
        </section>
    )

}

export default Contact;