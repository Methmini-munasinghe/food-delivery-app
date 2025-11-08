import React, { useState } from 'react'; // Added useState import
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/cart/Cart';
import PlaceOder from './pages/PlaceOrder/PlaceOder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {
  const [showLogin, setShowLogin] = useState(false); // Correct usage

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>} {/* Simplified conditional rendering */}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
