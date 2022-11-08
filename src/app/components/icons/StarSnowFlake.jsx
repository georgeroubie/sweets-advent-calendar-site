import PropTypes from 'prop-types';

const StarSnowFlake = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M468.679 178.204a8.5 8.5 0 0 0 3.346.692 8.532 8.532 0 0 0 7.85-5.188 8.524 8.524 0 0 0-4.496-11.196l-19.598-8.372 21.656-12.503a8.536 8.536 0 0 0 3.125-11.658c-2.362-4.079-7.588-5.488-11.658-3.125l-26.111 15.076 3.574-29.668c.567-4.679-2.771-8.929-7.45-9.492-4.679-.571-8.614 2.766-9.176 7.45l-4.789 42.358v.016l-48.356 27.737 8.521-72.032c.567-4.679-2.85-8.929-7.529-9.492-4.696-.588-8.468 2.767-9.026 7.45l-9.743 84.721v.019l-33.921 19.293 7.533-71.612c.367-3.358-1.414-6.621-4.343-8.313-2.929-1.683-6.143-1.496-8.876.504l-54.26 40.041v-30.112l64.359-48.641c3.771-2.825 4.285-8.175 1.456-11.946-2.817-3.763-7.786-4.538-11.574-1.704l-54.242 40.958V55.466l30.226-23.041c3.771-2.825 4.285-8.175 1.456-11.946-2.821-3.763-7.795-4.538-11.574-1.704l-20.108 15.358v-25.6a8.534 8.534 0 0 0-17.066 0v25.6l-20.974-15.358c-3.779-2.833-9.369-2.058-12.194 1.704-2.829 3.771-1.695 9.121 2.076 11.946l31.092 23.041v64.001l-55.107-40.958c-3.775-2.833-9.365-2.058-12.194 1.704-2.829 3.771-1.695 9.121 2.076 11.946l65.225 48.641v30.112l-55.187-40.041c-2.729-1.996-6.631-2.187-9.556-.504-2.929 1.692-4.706 4.954-4.341 8.313l7.216 66.918-26.117-15.06-9.652-80.012c-.564-4.683-4.821-7.996-9.5-7.45-4.679.562-8.021 4.812-7.453 9.492l8.103 67.304L126.034 171l-39.913-21.879-4.688-38.9c-.558-4.679-4.838-7.971-9.492-7.45a8.528 8.528 0 0 0-7.45 9.492l3.225 26.77-20.292-11.124a8.519 8.519 0 0 0-11.583 3.383c-2.267 4.129-.75 9.317 3.383 11.583l18.493 10.138-22.238 9.499a8.524 8.524 0 0 0-4.496 11.196 8.532 8.532 0 0 0 7.85 5.188 8.5 8.5 0 0 0 3.346-.692l34.563-14.761 40.921 22.432 15.695 9.061-63.216 27.005a8.53 8.53 0 0 0-4.492 11.2 8.534 8.534 0 0 0 7.85 5.183 8.534 8.534 0 0 0 3.35-.692l74.98-32.03 26.072 15.053-62.448 27.535a8.528 8.528 0 0 0-5.092 7.808 8.527 8.527 0 0 0 5.092 7.808l61.543 27.135-26.084 15.06-74.063-31.634a8.526 8.526 0 0 0-11.2 4.492 8.53 8.53 0 0 0 4.492 11.2l62.296 26.612-55.428 32.001-34.831-14.876c-4.342-1.85-9.35.167-11.196 4.496a8.525 8.525 0 0 0 4.496 11.196l23.059 9.85-21.534 12.433a8.533 8.533 0 1 0 8.533 14.783l22.078-12.747-3.124 25.93c-.567 4.679 2.771 8.929 7.45 9.492.346.042.692.063 1.033.063 4.254 0 7.938-3.179 8.458-7.513l4.655-38.639 55.427-32.001-8.224 68.294c-.567 4.679 2.771 8.929 7.45 9.492.346.042.692.063 1.033.063 4.254 0 7.938-3.179 8.458-7.512l9.756-81.001 26.073-15.054-7.383 67.901a8.534 8.534 0 0 0 4.216 8.313c2.917 1.679 7.066 1.492 9.803-.504l55.187-40.041v38.646l-65.349 48.641c-3.771 2.825-4.781 8.175-1.952 11.946 2.829 3.771 8.543 4.546 12.318 1.704l54.983-40.958v55.468l-31.216 23.041c-3.771 2.825-4.781 8.175-1.952 11.946 2.825 3.763 8.539 4.546 12.318 1.704l20.85-15.358v25.6a8.533 8.533 0 0 0 17.066 0v-25.6l19.984 15.358c1.537 1.154 3.085 1.708 4.864 1.708 2.596 0 5.035-1.179 6.71-3.412 2.829-3.771 2.5-9.121-1.271-11.946l-30.288-23.041v-55.468l54.118 40.958c1.537 1.154 3.085 1.708 4.864 1.708 2.596 0 5.036-1.179 6.71-3.412 2.829-3.771 2.5-9.121-1.271-11.946l-64.421-48.641V341.09l54.197 40.041c1.496 1.092 3.019 1.646 4.794 1.646 1.471 0 2.818-.379 4.143-1.142 2.93-1.692 4.522-4.954 4.155-8.313l-7.388-67.655 30.524 16.743 2.801 1.622 9.843 81.712a8.53 8.53 0 0 0 9.488 7.449 8.527 8.527 0 0 0 7.449-9.492l-8.313-69.004 48.038 27.737 4.742 39.347a8.532 8.532 0 0 0 9.491 7.45c4.679-.563 8.017-4.812 7.45-9.492l-3.209-26.64 22.318 12.885a8.533 8.533 0 1 0 8.533-14.783l-21.032-12.143 22.403-9.57a8.524 8.524 0 0 0 4.496-11.196 8.533 8.533 0 0 0-11.196-4.496l-34.176 14.597-48.04-27.735 61.641-26.332a8.525 8.525 0 0 0 4.496-11.196c-1.85-4.333-6.862-6.35-11.196-4.496l-73.412 31.358-4.258-2.458-30.086-16.495 61.757-27.23a8.528 8.528 0 0 0 5.092-7.808 8.527 8.527 0 0 0-5.092-7.808l-58.128-25.63 33.522-19.354 70.606 30.159a8.5 8.5 0 0 0 3.346.692 8.537 8.537 0 0 0 7.85-5.188 8.524 8.524 0 0 0-4.496-11.196l-58.834-25.133 48.04-27.735 31.372 13.396zm-203.727 43.663v-29.802l48.664-35.99-7.293 64.791-24.125 13.857c-4.569-5.709-10.496-9.9-17.79-11.762.047-.362.544-.719.544-1.094zm-17.066-29.802v29.802c0 .375-.431.732-.384 1.095-5.998 1.531-11.626 4.619-15.885 8.856l-26.972-15.645-6.412-60.098 49.653 35.99zM140.046 256l56.172-24.768 26.449 15.271a34.008 34.008 0 0 0-1.371 9.497c0 3.01.43 5.914 1.165 8.695l-27.148 15.674L140.046 256zm107.84 63.936-49.653 35.99 6.395-61.08 26.804-15.261c4.32 4.507 10.054 7.816 16.454 9.427v30.924zm7.653-46.874c-.038-.001-.072-.011-.109-.011-.037 0-.073.01-.11.011-9.362-.06-16.956-7.686-16.956-17.062 0-9.412 7.654-17.067 17.067-17.067 9.412 0 17.067 7.654 17.067 17.067-.002 9.375-7.598 17.001-16.959 17.062zm9.413 46.874v-30.925c4.267-1.491 10.435-4.43 14.599-8.433l27.51 15.081 6.554 60.267-48.663-35.99zM370.813 256l-56.022 24.701-26.741-14.66A34 34 0 0 0 289.563 256c0-1.93-.2-3.81-.508-5.653.222-.104.446-.201.662-.326l29.243-16.884L370.813 256z" />
    </svg>
  );
};

StarSnowFlake.propTypes = {
  className: PropTypes.string,
};

StarSnowFlake.defaultProps = {
  className: undefined,
};

export default StarSnowFlake;