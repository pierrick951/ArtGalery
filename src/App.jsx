import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Constellation from './components/Constellation/Constellation'
import Contact from './components/Contact/Contact'
import Notfound from './components/Notfound/Notfound'
import Home from './components/Home/Home'
import Astro from './components/Astro/Astro'
import './App.css'


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/constellation" element={<Constellation/>}/>
            <Route path="/astro" element={<Astro/>}/>
            <Route path="*" element={<Notfound/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
