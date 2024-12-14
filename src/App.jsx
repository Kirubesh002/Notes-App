import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from '../src/Pages/SignIn/SignIn';
import SignUp from '../src/Pages/SignUp/SignUp';
import Home from '../src/Pages/Home/Home';
import NavBar from './common/NavBar/NavBar';

function App() {
  return (
    <><NavBar /><Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router></>
  );
}

export default App;
