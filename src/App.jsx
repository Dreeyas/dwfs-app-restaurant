import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Header/NavBar';
import Hero from './components/Hero/Hero';
import Specials from './components/Specials/Specials';
import ControlledCarousel from './components/Carousel/ControlledCarousel';
import MenuSlider from './components/MenuSlider/MenuSlider';
import Booking from './components/Booking/Booking';
import GroupBlog from './components/GroupBlog/GroupBlog';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/dwfs-app-restaurant/about" element={<ControlledCarousel />} />
          <Route path="/dwfs-app-restaurant/menu" element={<MenuSlider />} />
          <Route path="/dwfs-app-restaurant/booking" element={<Booking />} />
          <Route path="/dwfs-app-restaurant/blog" element={<GroupBlog />} />
        </Routes>
        <Hero />
        <Specials />
        <Footer />
      </div>
    </Router>
  );
}

export default App;