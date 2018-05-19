import PropTypes from 'prop-types';

const colorsType = PropTypes.shape({
  backgroundColor: PropTypes.string.isRequired,
  foregroundColor: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired
});

export default colorsType;
