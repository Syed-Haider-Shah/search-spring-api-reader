import PropTypes from 'prop-types';
import "./index.css"
import Button from '../Button';

const HomeDisplayCard = ({ name, image, buttonText, dest }) => {
  return (
    <div className='card'>
        <img src={image} alt="Item Image" className='image' />
      <div className='name'>{name}</div>
      <Button cusStyle='display-card-button' title={buttonText} dest={dest}/>
    </div>
  );
};

HomeDisplayCard.propTypes = {
  name: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  image: PropTypes.string.isRequired,
  dest:PropTypes.string.isRequired
};

export default HomeDisplayCard;
