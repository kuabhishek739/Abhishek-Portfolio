import { Box, Text } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { useColorMode } from '@chakra-ui/react';

export default function GithubCalender() {
  const { colorMode } = useColorMode();


  const lightThemeURL =
    'https://github-readme-streak-stats.herokuapp.com/?user=kuabhishek739&theme=transparent&hide_border=true&title_color=black&text_color=black&sideNums=black&sideLabels=black&ring=black&fire=black&currStreakLabel=black&currStreakNum=black';
  const darkThemeURL =
    'https://github-readme-streak-stats.herokuapp.com/?user=kuabhishek739&theme=transparent&hide_border=true&title_color=white&text_color=white&sideNums=white&sideLabels=white&ring=white&fire=white&currStreakLabel=white&currStreakNum=white';


  const imageURL = colorMode === 'dark' ? darkThemeURL : lightThemeURL;

  return (
    <Box maxW={"80%"} margin={"auto"} display={"flex"} flexDirection={"column"} alignItems={"center"} mt={50} mb={50}
      p={8}>
      <Box>
        <Text
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight={"bold"}
        >GitHub Streak</Text>
        <Box h={1} w={"5%"} margin={"auto"} bg={"#7b66ff"} borderRadius={"full"} mb={5}></Box>
        <br />
      </Box>
      <Box
        border="5px solid #7B66FF"
        borderTopLeftRadius="20px"
        borderBottomRightRadius="20px"
        overflow="hidden"
        width="fit-content"
        p={8}
        maxW={"100%"}>
        <GitHubCalendar
          className="react-activity-calendar"
          color="skyblue"
          username="kuabhishek739"
        />
      </Box>
      <Box
        border="5px solid #7B66FF"
        borderTopLeftRadius="20px"
        borderBottomRightRadius="20px"
        overflow="hidden"
        width="fit-content"
        p={8}
        mt={8}>
        <img
          id="github-top-langs"
          width="100%"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=kuabhishek739&theme=transparent&hide_border=true&show_icons=true&locale=en&layout=compact&title_color=white&text_color=white"
        />
      </Box>
      <Box
        border="5px solid #7B66FF"
        borderTopLeftRadius="20px"
        borderBottomRightRadius="20px"
        overflow="hidden"
        width="fit-content"
        p={8}
        mt={8}>
        <img
          id="github-stats-card"
          width="100%"
          src="https://github-readme-stats.vercel.app/api?username=kuabhishek739&theme=transparent&hide_border=true&show_icons=true&locale=en&title_color=white&text_color=white"
        />
      </Box>
      <Box
        border="5px solid #7B66FF"
        borderTopLeftRadius="20px"
        borderBottomRightRadius="20px"
        overflow="hidden"
        width="fit-content"
        p={8}
        mt={8}
      >
        <img id="github-streak-stats" width="100%" src={imageURL} alt="" />
      </Box>
    </Box>
  );
}