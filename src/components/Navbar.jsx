import { Link, NavLink } from 'react-router-dom';
import {FaHome, FaUserAlt, FaTasks, FaBold, FaGithub} from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  return(
    <nav className="navbar">
      <NavLink to="/"><span>HOME</span><FaHome/></NavLink>
      <NavLink to="/about"><span>ABOUT</span><FaUserAlt/></NavLink>
      <NavLink to="/project"><span>PROJECT</span><FaTasks/></NavLink>
      <a href="https://jihana.tistory.com/" target='_blank' title="새창열림"><span>BLOG</span><FaBold/></a>
      <a href="https://github.com/imhana503/" target='_blank' title="새창열림"><span>GITHUB</span><FaGithub/></a>
    </nav>
  )
}

export default Navbar;