import PropTypes from 'prop-types';

const DisplayCard = ({name, mspr, price, image}) => {
  return (
    <div className='card'>
      <img src={image} className='image'></img>
      <div className='name'>{name}</div>
      <div className='price'>${price}</div>
    </div>
  );
}

DisplayCard.propTypes = { 
  name: PropTypes.string.isRequired, 
  mspr: PropTypes.string, 
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}
export default DisplayCard;