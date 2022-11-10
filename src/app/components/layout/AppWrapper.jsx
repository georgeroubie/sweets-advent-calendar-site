import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import _CircleSnowFlake from '../icons/CircleSnowFlake';
import _SimpleSnowFlake from '../icons/SimpleSnowFlake';
import _StarSnowFlake from '../icons/StarSnowFlake';

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  background: ${({ theme: { colors } }) => colors.backgroundPrimary};
  ${({ $height }) =>
    $height &&
    css`
      height: ${$height};
    `};
`;

const SnowFlake = css`
  width: ${({ theme: { fontSize } }) => fontSize.xlarge};
  height: ${({ theme: { fontSize } }) => fontSize.xlarge};
  fill: ${({ theme: { colors } }) => colors.textPrimary};
  position: fixed;
`;

const LeftCircleSnowFlake = styled(_CircleSnowFlake)`
  ${SnowFlake}
  top: 1.3rem;
  left: 1rem;
`;

const LeftSimpleSnowFlake = styled(_SimpleSnowFlake)`
  ${SnowFlake}
  top: 0.4rem;
  left: 2.2rem;
`;

const LeftStarSnowFlake = styled(_StarSnowFlake)`
  ${SnowFlake}
  top: 1.3rem;
  left: 3.3rem;
`;

const RightCircleSnowFlake = styled(_CircleSnowFlake)`
  ${SnowFlake}
  top: 1.3rem;
  right: 1rem;
`;

const RightSimpleSnowFlake = styled(_SimpleSnowFlake)`
  ${SnowFlake}
  top: 0.4rem;
  right: 2.2rem;
`;

const RightStarSnowFlake = styled(_StarSnowFlake)`
  ${SnowFlake}
  top: 1.3rem;
  right: 3.3rem;
`;

function getHeight() {
  return `${window.innerHeight}px`;
}

const AppWrapper = ({ children }) => {
  const [height, setHeight] = useState(getHeight());

  useEffect(() => {
    function changeHeightValue() {
      const currentHeight = getHeight();
      if (height !== currentHeight) {
        setHeight(currentHeight);
      }
    }

    window.addEventListener('resize', changeHeightValue);
    return () => {
      window.removeEventListener('resize', changeHeightValue);
    };
  }, [height]);

  return (
    <Wrapper $height={height}>
      <LeftStarSnowFlake />
      <LeftSimpleSnowFlake />
      <LeftCircleSnowFlake />
      <RightCircleSnowFlake />
      <RightSimpleSnowFlake />
      <RightStarSnowFlake />
      {children}
    </Wrapper>
  );
};

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
