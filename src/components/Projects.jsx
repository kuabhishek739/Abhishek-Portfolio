import React from 'react';
import { Box, Text, Image, Link, Button, Flex } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import myhrs from '../assets/myhrs.Webp';
import superheroresume from '../assets/superheroresume.Webp';
import jioClone from '../assets/Jio-Clone.webp';
import { useColorMode } from '@chakra-ui/color-mode'

const Projects = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? "#2c2c2c" : "#cecece";
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id='projects'>
      <Box
        textAlign='center'
        pt={100}
        pb={100}
        bgColor={bgColor}
      >
        <Text
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight={"bold"}
        >My Projects</Text>
        <Box h={1} w={"5%"} margin={"auto"} bg={"#7b66ff"} borderRadius={"full"} mb={5}></Box>
        <br />
        <Box w={"80%"} margin={"auto"}>
          <Slider {...settings}>
            <Box
              key='myHours'
              borderColor='gray.200'
              margin={"auto"}
              display="flex"
              flexDirection="column"
              alignItems="center"
              maxW={{ base: "100%", md: "80%", lg: "80%" }}
            >
              <Image src={myhrs} alt='MyHours' />
              <br />
              <Text fontWeight={"bold"} fontSize={"2xl"}>MyHours</Text>
              <Text>I developed a replica of the <a href='https://myhours.com/'>https://myhours.com/</a> website using React and Chakra UI, mimicking its functionalities and design elements. The project involved recreating the site's features and aesthetics using modern web technologies like React and the Chakra UI library.</Text>
              <Flex justify={"center"}>
                <Link href='https://my-projects-dcsb.vercel.app/' target='_blank'>
                  <Button mt={8} mb={8} mr={8} bg={"#7B66FF"}>Visit Site</Button>
                </Link>
                <Link href='https://github.com/kuabhishek739/My-Projects/tree/main/myhours' target='_blank'>
                  <Button mt={8} mb={8} bg={"#7B66FF"}>Visit Code</Button>
                </Link>
              </Flex>
            </Box>

            <Box
              key='superHeroResume'
              borderColor='gray.200'
              margin={"auto"}
              display="flex"
              flexDirection="column"
              alignItems="center"
              maxW={{ base: "100%", md: "80%", lg: "80%" }}
            >
              <Image src={superheroresume} alt='superheroresume' />
              <br />
              <Text fontWeight={"bold"} fontSize={"2xl"}>Super Hero Resume</Text>
              <Text>
                I crafted a resume portraying the superhero Captain America, incorporating his unique traits and achievements into the design elements. This project showcases Captain America's professional background and characteristics through a creatively designed, HTML/CSS-based single-page resume.</Text>
              <Flex justify={"center"}>
                <Link href='https://glittering-brigadeiros-18cbcc.netlify.app/' target='_blank'>
                  <Button mt={8} mb={8} mr={8} bg={"#7B66FF"}>Visit Site</Button>
                </Link>

                <Link href='https://github.com/kuabhishek739/My-Projects/tree/main/Super%20Hero%20Resume' target='_blank'>
                  <Button mt={8} mb={8} bg={"#7B66FF"}>Visit Code</Button>
                </Link>
              </Flex>
            </Box>

            <Box
              key='superHeroResume'
              borderColor='gray.200'
              margin={"auto"}
              display="flex"
              flexDirection="column"
              alignItems="center"
              maxW={{ base: "100%", md: "80%", lg: "80%" }}
            >
              <Image src={jioClone} alt='jioClone' />
              <br />
              <Text fontWeight={"bold"} fontSize={"2xl"}>Jio Clone</Text>
              <Text>
              I replicated the frontend interface of Jio.com using React and Chakra UI, demonstrating a responsive and visually engaging website mirroring the original design.</Text>
              <Flex justify={"center"}>
                <Link href='https://jio-clone-site.vercel.app/' target='_blank'>
                  <Button mt={8} mb={8} mr={8} bg={"#7B66FF"}>Visit Site</Button>
                </Link>

                <Link href='https://github.com/kuabhishek739/My-Projects/tree/main/Jio-Site-Clone' target='_blank'>
                  <Button mt={8} mb={8} bg={"#7B66FF"}>Visit Code</Button>
                </Link>
              </Flex>
            </Box>
          </Slider>
        </Box>
      </Box>
    </section>
  );
};

export default Projects;
