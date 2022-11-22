import PropTypes from 'prop-types';
import { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.backgroundSecondary};
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme: { spacing } }) => spacing.xlarge};
  font-size: ${({ theme: { fontSize } }) => fontSize.xlarge};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.xlarge};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  overflow: hidden;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius.normal};
`;

const Notification = ({ message, setMessage }) => {
  useEffect(() => {
    const timeout = setTimeout(() => setMessage(undefined), 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [message, setMessage]);

  return <Wrapper>{message}</Wrapper>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  setMessage: PropTypes.func.isRequired,
};

export default Notification;
