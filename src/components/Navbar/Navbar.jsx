import { Link } from "react-router-dom"
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/constellation'>Constellation</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/astro'>Astro</Link>
    </nav>
  )
}