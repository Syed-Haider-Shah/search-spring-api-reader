import '../index.css'
import { useState } from 'react'
import PropTypes from 'prop-types';

const Button = ({ cusStyle, title, hoverProperty, dest, tab }) => {
  const [isHovered, onHover] = useState(false);
  return(
  <>
  <button
  to={dest}
  target={tab} rel="noopener noreferrer"
  onMouseEnter={() => onHover(true)} 
  onMouseLeave={() => onHover(false)} 
  className={`btn ${cusStyle} ${isHovered ? hoverProperty : ''}`}>
    {title}
  </button>
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