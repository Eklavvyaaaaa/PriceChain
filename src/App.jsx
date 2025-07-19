import React from 'react';
import NavBar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer'; // ✅ Add this import
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
      <Footer /> {/* ✅ Now this will work properly */}
    </div>
  );
};

export default App;
