import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import './styles/media-query.css';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import SingleEvent from './pages/single-event/SingleEvent';
import Footer from './layout/footer/Footer';

function App() {
  const { pathname } = useLocation();
  return (
    <ChakraProvider theme={'dark'}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/single-event" element={<SingleEvent />} />
      </Routes>
      {pathname === '/login' ? null : <Footer />}
    </ChakraProvider>
  );
}

export default App;
