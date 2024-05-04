import { useState } from "react"
import { Link } from "react-router-dom"
import logo from '../../assets/logo.svg'
import burger from '../../assets/burger.svg'
import close from '../../assets/close.svg'
import './Navbar.css'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(true)

  function handleClick() {
    setShowMenu(!showMenu)
  }


  return (
    <nav>
      <a href='#' className="logoLink" >
        <img src={logo} alt="" />
        <span>Digital Museum</span>
      </a>
      <div className="MainNavLinks">
        <button 
           onClick={() => handleClick()}
        className="BurgerToggle"
          src={showMenu ? close : burger}>burger</button>
      </div>
      <div className={`${showMenu ? "open" : ""}   NavLinks`}>
        <Link to='/' className="Nlink">Home</Link>
        <Link to='/contact' className="Nlink">Contact</Link>
      </div>
    </nav>
  
  )
}

