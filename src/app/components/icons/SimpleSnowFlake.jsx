import PropTypes from 'prop-types';

const SimpleSnowFlake = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 298 298">
      <path d="M289.5 140.5h-24.606l11.031-11.03a7.498 7.498 0 0 0 .001-10.606 7.5 7.5 0 0 0-10.606-.001L243.681 140.5h-36.369l16.182-17.392a7.5 7.5 0 0 0-.383-10.6 7.454 7.454 0 0 0-4.345-1.961c-.952-.047-21.495-.003-21.495-.003L221.315 86.5H251.5c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-15.186l17.69-17.69a7.502 7.502 0 0 0 0-10.608c-2.93-2.928-7.844-2.928-10.774 0L225.167 61.1V45.5c0-4.143-3.357-7.5-7.5-7.5a7.499 7.499 0 0 0-7.5 7.5v30.601l-24.837 25.004-.415-22.645c-.001-.036.035-.07.034-.106-.035-1.824-.704-3.641-2.07-5.059-2.873-2.982-7.778-3.07-10.761-.194l-15.951 15.226v-35.22l21.47-21.304c2.929-2.93 3.012-7.678.083-10.607-2.93-2.928-7.803-2.928-10.732 0l-10.821 10.696V7.5c0-4.143-3.357-7.5-7.5-7.5a7.499 7.499 0 0 0-7.5 7.5v24.393l-10.53-10.696a7.402 7.402 0 0 0-10.524 0c-2.929 2.93-3.054 7.678-.125 10.607l21.179 21.304v35.421l-16.176-15.475a7.402 7.402 0 0 0-10.52.289c-1.075 1.136-1.683 2.52-1.914 3.955a7.528 7.528 0 0 0-.201 1.811l-.088 21.229-25.1-24.944V45.5c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v14.894L55.142 43.202a7.402 7.402 0 0 0-10.524 0c-2.929 2.93-2.887 7.678.042 10.608L62.392 71.5H46.5c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h30.892l24.744 24.744-23.057.831c-4.021.146-7.524 3.435-7.563 7.418-.004.112-.349.225-.349.337v.011c0 .008.345.017.345.024.045 1.875.955 3.736 2.395 5.158L89.748 140.5H55.025l-21.638-21.638a7.5 7.5 0 0 0-10.607 10.607l11.03 11.03H8.5c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h25.02l-10.74 10.74a7.5 7.5 0 1 0 10.608 10.607L54.734 155.5h35.027l-15.253 16.394a7.5 7.5 0 0 0 5.489 12.609c.034 0 .068-.005.103-.005.022 0 .044.003.065.003h.055l22.005-.125L77.101 209.5H46.5c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h15.601l-17.399 17.399a7.5 7.5 0 0 0 5.304 12.803c1.919 0 3.672-.732 5.137-2.196l17.025-17.191V250.5c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-30.185l25.445-25.278.977 24.39c.148 4.046 3.517 7.306 7.532 7.225 1.364-.027 2.844-.465 4.312-1.543 1.063-.781 15.734-15.812 15.734-15.812v35.385l-20.971 21.137c-2.93 2.929-2.846 7.678.082 10.607a7.57 7.57 0 0 0 5.345 2.197c1.919 0 3.693-.732 5.157-2.196l10.387-10.532V290.5c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-25.31l11.404 11.237c1.465 1.464 3.468 2.196 5.387 2.196a7.573 7.573 0 0 0 5.345-2.196c2.929-2.93 2.783-7.678-.146-10.607l-21.99-21.845v-35.7s13.729 12.896 15.896 14.976c2.167 2.08 3.942 3.25 6.525 3.25h.046c4.142 0 7.48-3.604 7.455-7.746l-.306-23.696 24.384 24.551v30.89c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-15.891l18.064 17.897c1.465 1.464 3.467 2.196 5.387 2.196 1.919 0 3.88-.732 5.345-2.196 2.929-2.93 2.95-7.678.021-10.607l-17.38-17.399H251.5c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-29.894l-25.742-25.742 23.059-.831c.082-.003.162-.016.243-.021l.09-.008c3.977-.319 7.037-3.709 6.892-7.736a7.478 7.478 0 0 0-3.155-5.837L209.138 155.5h34.835l21.345 21.346a7.476 7.476 0 0 0 5.304 2.197 7.498 7.498 0 0 0 5.304-12.802l-10.74-10.74H289.5c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.501-7.5-7.501zm-88.705-15.017L186.823 140.5h-19.507l15.002-15.002 18.477-.015zM170.21 95.784l.356 20.002-14.399 14.315V109.16l14.043-13.376zm-42.947.081 13.904 13.323v20.205l-13.925-14.008.021-19.52zm-30.401 30.579 19.762-.712 14.768 14.768h-20.299l-14.231-14.056zm.384 43.033L110.25 155.5h20.851l-13.841 13.841-20.014.136zm30.617 32.122-.854-21.042 14.158-14.241v21.604l-13.304 13.679zm42.956-.335-14.652-13.478v-22.179l14.442 14.359.21 21.298zm30.172-32.7-19.614.706-13.77-13.77h20.292l13.092 13.064z" />
    </svg>
  );
};

SimpleSnowFlake.propTypes = {
  className: PropTypes.string,
};

SimpleSnowFlake.defaultProps = {
  className: undefined,
};

export default SimpleSnowFlake;