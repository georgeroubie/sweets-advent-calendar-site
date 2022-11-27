import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.h3`
  font-size: ${({ theme: { fontSize } }) => fontSize.large};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.large};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  margin: 0 0 ${({ theme: { spacing } }) => spacing.xsmall};
`;

const SmallSubtitle = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

SmallSubtitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

SmallSubtitle.defaultProps = {
  className: null,
};

export default SmallSubtitle;
