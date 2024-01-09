import React from 'react';
import { Box, Text, Image, Link, Button, Flex } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useColorMode } from '@chakra-ui/color-mode';

import myhrs from '../assets/myhrs.Webp';
import superheroresume from '../assets/superheroresume.Webp';
import jioClone from '../assets/Jio-Clone.webp';

const projectsData = [
  {
    key: 'myHours',
    imageSrc: myhrs,
    title: 'MyHours',
    description:
      'I developed a replica of the https://myhours.com/ website using React and Chakra UI, mimicking its functionalities and design elements...',
    siteLink: 'https://my-projects-dcsb.vercel.app/',
    codeLink: 'https://github.com/kuabhishek739/My-Projects/tree/main/myhours',
  },
  {
    key: 'superHeroResume',
    imageSrc: superheroresume,
    title: 'Super Hero Resume',
    description:
      'I crafted a resume portraying the superhero Captain America, incorporating his unique traits and achievements into the design elements...',
    siteLink: 'https://glittering-brigadeiros-18cbcc.netlify.app/',
    codeLink: 'https://github.com/kuabhishek739/My-Projects/tree/main/Super%20Hero%20Resume',
  },
  {
    key: 'jioClone',
    imageSrc: jioClone,
    title: 'Jio Clone',
    description:
      'I replicated the frontend interface of Jio.com using React and Chakra UI, demonstrating a responsive and visually engaging website mirroring the original design...',
    siteLink: 'https://jio-clone-site.vercel.app/',
    codeLink: 'https://github.com/kuabhishek739/My-Projects/tree/main/Jio-Site-Clone',
  },
];

const Projects = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? '#2c2c2c' : '#cecece';
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
      <Box textAlign='center' pt={100} pb={100} bgColor={bgColor}>
        <Text fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} fontWeight='bold' textShadow={"0 0 15px #7b66ff"}>
          My Projects
        </Text>
        <Box h={1} w={'5%'} margin='auto' bg='#7b66ff' borderRadius='full' mb={5}></Box>
        <br />
        <Box w='80%' margin='auto'>
          <Slider {...settings}>
            {projectsData.map((project) => (
              <Box
                key={project.key}
                borderColor='gray.200'
                margin='auto'
                display='flex'
                flexDirection='column'
                alignItems='center'
                maxW={{ base: '100%', md: '80%', lg: '80%' }}
              >
                <Image src={project.imageSrc} alt={project.title} borderRadius={"0.8rem"}/>
                <br />
                <Text fontWeight='bold' fontSize='2xl'>
                  {project.title}
                </Text>
                <Text>{project.description}</Text>
                <Flex justify='center'>
                  <Link href={project.siteLink} target='_blank'>
                    <Button mt={8} mb={8} mr={8} bg='#7B66FF' _hover={{
                      transform: "scale(1.1)",
                      boxShadow: "0 0 10px gray",
                    }}>
                      Visit Site
                    </Button>
                  </Link>
                  <Link href={project.codeLink} target='_blank'>
                    <Button mt={8} mb={8} bg='#7B66FF' _hover={{
                      transform: "scale(1.1)",
                      boxShadow: "0 0 10px gray",
                    }}>
                      Visit Code
                    </Button>
                  </Link>
                </Flex>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </section>
  );
};

export default Projects;
