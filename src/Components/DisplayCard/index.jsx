import PropTypes from 'prop-types';

const DisplayCard = ({name, mspr, price, image}) => {
  return (
    <div></div>
  );
}

DisplayCard.propTypes = { 
  name: PropTypes.string.isRequired, 
  mspr: PropTypes.number.isRequired, 
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}
export default DisplayCard;