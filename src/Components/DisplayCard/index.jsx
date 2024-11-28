import PropTypes from 'prop-types';
import "./index.css"

const DisplayCard = ({ name, msrp, price, image }) => {
  return (
    <div className='card'>
        <img src={image} alt="Item Image" className='image' />
      <div className='name'>{name}</div>
      <div className='bottom-section'>
      {msrp > price ? (
          <div className='discount'>
            <div className='slashed'>${msrp}</div>
            <div className='price'>${price}</div>
          </div>
        ) : (
          <div className='discount'>
            <div className='price'>${price}</div>
          </div>
        )}
        <button className='display-btn'>+</button>
        </div>
    </div>
  );
};

DisplayCard.propTypes = {
  name: PropTypes.string.isRequired,
  msrp: PropTypes.string,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default DisplayCard;
