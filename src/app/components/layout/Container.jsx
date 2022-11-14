import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: ${({ theme: { spacing } }) => spacing.normal};
`;

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
