import PropTypes from 'prop-types';
import "./index.css"

const Heading = ({heading}) => {
  return(
  <h1 className='heading'>
    {heading}
  </h1>
  )
}

Heading.propTypes = {
  heading: PropTypes.string.isRequired
}

export default Heading