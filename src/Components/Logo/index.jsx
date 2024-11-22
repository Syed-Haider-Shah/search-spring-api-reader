import PropTypes from 'prop-types';

const Logo = ({ image, cusStyle }) => {
  return(
  <>
  <img src={image} className={cusStyle}/>
  </>
  )
}

Logo.propTypes = {
  image: PropTypes.string.isRequired,
  cusStyle: PropTypes.string,
}

export default Logo