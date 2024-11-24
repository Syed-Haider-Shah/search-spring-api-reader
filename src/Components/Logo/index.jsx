import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./index.css";

const Logo = ({ image, cusStyle, height }) => {
  return(
  <Link className='logo' to='/'>
  <img src={image} alt='Logo Image' height={height} className={cusStyle}/>
  </Link>
  )
}

Logo.propTypes = {
  image: PropTypes.string.isRequired,
  cusStyle: PropTypes.string,
  height: PropTypes.string
}

export default Logo