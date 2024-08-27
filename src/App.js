import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components/pages
import Header from './project/header/header';
import Navbar from './project/navbar/navbar';
import Home from './project/home/home';
import Robotic from './project/robotic/robotic';
import Data from './project/data/data'
import Sports from './project/sports/sports';
import Ea from './project/ea/ea';
import Form from './project/form/form';


function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/robotic" element={<Robotic />} />
        <Route path="/data" element={<Data />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/ea" element={<Ea />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
