import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import './App.css';
import './styles/media-query.css';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import SingleEvent from './pages/single-event/SingleEvent';
import Footer from './layout/footer/Footer';

function App() {
  const { pathname } = useLocation();
  console.log('this is calling now', pathname);
  return (
    <ChakraProvider theme={'dark'}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/single-event" element={<SingleEvent />} />
      </Routes>
      {/* <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack> */}
      {/* <Login /> */}
      {pathname === '/login' ? null : <Footer />}
    </ChakraProvider>
  );
}

export default App;
