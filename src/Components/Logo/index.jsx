import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Logo = ({ image, cusStyle, height }) => {
  return(
  <Link className='logo' to='/'>
  <img src={image} height={height} className={cusStyle}/>
  </Link>
  )
}

Logo.propTypes = {
  image: PropTypes.string.isRequired,
  cusStyle: PropTypes.string,
  height: PropTypes.string
}

export default Logo