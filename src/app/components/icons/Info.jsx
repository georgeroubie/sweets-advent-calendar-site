import PropTypes from 'prop-types';

const InfoIcon = ({ className }) => {
  return (
    <svg className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1 18h-2v-8h2v8zM12 5.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
    </svg>
  );
};

InfoIcon.propTypes = {
  className: PropTypes.string,
};

InfoIcon.defaultProps = {
  className: '',
};

export default InfoIcon;
