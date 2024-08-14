import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GithubCalender from './components/GitHubStats';
import AnimatedCursor from "react-animated-cursor";
import './App.css';

const App = () => {
  return (
    <ChakraProvider>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        outerStyle={{
          mixBlendMode: 'exclusion',
          zIndex: 9999,
        }}
        innerStyle={{
          zIndex: 9999,
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          '.chakra-icon',
          '.chakra-icon-button',
          '.chakra-button',
          '.chakra-icon > svg',
          {
            target: '.custom',
            options: {
              innerSize: 12,
              outerSize: 12,
              color: '255, 255, 255',
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
          },
        ]}
      />
      <BrowserRouter>
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Projects />
        <GithubCalender />
        <Contact />
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
