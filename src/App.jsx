
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from "./components/Navbar/Navbar";
import Tickets from './components/Tickets/Tickets';
import Contact from './components/Contact/Contact';
import Notfound from './components/Notfound/Notfound';
import Home from './components/Home/Home';
import './Style/locomotive-scroll.css'
import './scripts/locomotive-scroll'
import './App.css';

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div data-scroll-container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/constellation" element={<Tickets />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
