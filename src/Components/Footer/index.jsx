import { Github } from 'lucide-react';
import './index.css'
import Logo from '../Logo';
import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return(
  <footer className='footer'>
    <Link to="https://github.com/Syed-Haider-Shah/search-spring-api-reader" target="_blank"><Github color='white'/></Link>
    <Logo image='/Logo3.png' cusStyle='logo2' height="60"/>
    <Link to="https://www.linkedin.com/in/syedhaider-shah/" target="_blank"><Linkedin color='white'/></Link>
  </footer>
  )
}

export default Footer;