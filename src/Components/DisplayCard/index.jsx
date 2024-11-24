import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Ensure you import the CSS for the skeleton

const DisplayCard = ({ name, msrp, price, image }) => {
  return (
    <div className='card'>
      {image ? (
        <img src={image} alt="Item Image" className='image' />
      ) : (
        <Skeleton height={200} width={200} />
      )}
      <div className='name'>{name || <Skeleton width={100} />}</div>

      {price !== undefined && msrp !== undefined ? (
        price <= msrp ? (
          <div className='price'>${price}</div>
        ) : (
          <div className='discount'>
            <div className='slashed'>${price}</div>
            <div className='price'>${msrp}</div>
          </div>
        )
      ) : (
        <Skeleton width={50} />
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
