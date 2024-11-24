import PropTypes from 'prop-types';

const DisplayCard = ({ name, msrp, price, image }) => {
  return (
    <div className='card'>
        <img src={image} alt="Item Image" className='image' />
      <div className='name'>{name}</div>

      {
        price <= msrp ? (
          <div className='price'>${price}</div>
        ) : (
          <div className='discount'>
            <div className='slashed'>${price}</div>
            <div className='price'>${msrp}</div>
          </div>
        )}

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
