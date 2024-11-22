import '../index.css'
import { useState } from 'react'
import PropTypes from 'prop-types';

const SubmitButton = ({ cusStyle, title, hoverProperty, children }) => {
  const [isHovered, onHover] = useState(false);
  return(
  <>
  <div 
  onMouseEnter={() => onHover(true)} 
  onMouseLeave={() => onHover(false)} 
  className={`btn submit-btn ${cusStyle} ${isHovered ? hoverProperty : ''}`}>
    {title}
    <div className='submit-logo'>{children}</div>
  </div>
  </>)
}

SubmitButton.propTypes = {
  title: PropTypes.string,
  cusStyle: PropTypes.string,
  hoverProperty: PropTypes.string,
  children: PropTypes.node,
}

export default SubmitButton