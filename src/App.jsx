import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Product from './components/Product/Product'
import Contact from './components/Contact/Contact'
import Notfound from './components/Notfound/Notfound'
import Home from './components/Home/Home'
import Footer from "./components/Footer/Footer"
import './App.css'


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/constellation" element={<Product/>}/>
            <Route path="*" element={<Notfound/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
