import { useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css'

const Button = ({ cusStyle, title, hoverProperty, dest, tab }) => {
  const [isHovered, onHover] = useState(false);
  return(
  <>
  <Link
  to={dest}
  target={tab} rel="noopener noreferrer"
  onMouseEnter={() => onHover(true)} 
  onMouseLeave={() => onHover(false)} 
  className={`btn ${cusStyle} ${isHovered ? hoverProperty : ''}`}>
    {title}
  </Link>
  </>)
}

Button.propTypes = {
  title: PropTypes.string,
  cusStyle: PropTypes.string,
  hoverProperty: PropTypes.string,
  children: PropTypes.node,
  dest: PropTypes.string,
  tab: PropTypes.string,
}

export default Button