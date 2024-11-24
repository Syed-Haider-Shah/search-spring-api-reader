import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Logo = ({ image, cusStyle }) => {
  return(
  <Link className='logo' to='/'>
  <img src={image} className={cusStyle}/>
  </Link>
  )
}

Logo.propTypes = {
  image: PropTypes.string.isRequired,
  cusStyle: PropTypes.string,
}

export default Logo