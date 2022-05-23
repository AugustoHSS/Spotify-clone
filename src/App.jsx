import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import GlobalStyles from './GlobalStyles';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}
