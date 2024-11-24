import PropTypes from 'prop-types';

const RecordHeading = ({heading}) => {
  return(
  <h1 className='record-heading'>
    {heading}
  </h1>
  )
}

RecordHeading.propTypes = {
  heading: PropTypes.string.isRequired
}

export default RecordHeading