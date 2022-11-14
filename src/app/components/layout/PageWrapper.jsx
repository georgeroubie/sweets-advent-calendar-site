import PropTypes from 'prop-types';
import styled from 'styled-components';
import SnowFlakes from './SnowFlakes';

const Wrapper = styled.div`
  margin: ${({ theme: { spacing } }) => spacing.xlarge} auto;
  padding: 0 ${({ theme: { spacing } }) => spacing.large};
  max-width: 800px;
`;

const InnerWrapper = styled.div`
  border: ${({ theme: { borderSize, colors } }) => `${borderSize.large} solid ${colors.borderPrimary}`};
  width: 100%;
  height: auto;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius.normal};
  position: relative;
`;

const ChildrenWrapper = styled.div`
  overflow: hidden;
`;

const PageWrapper = ({ children }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <SnowFlakes />
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
