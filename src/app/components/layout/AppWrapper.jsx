import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import _CircleSnowFlake from '../icons/CircleSnowFlake';
import _SimpleSnowFlake from '../icons/SimpleSnowFlake';
import _StarSnowFlake from '../icons/StarSnowFlake';

const CircleSnowFlake = styled(_CircleSnowFlake)`
  width: 50px;
  height: 50px;
  fill: #fff;
`;

const SimpleSnowFlake = styled(_SimpleSnowFlake)`
  width: 50px;
  height: 50px;
  fill: #fff;
`;

const StarSnowFlake = styled(_StarSnowFlake)`
  width: 50px;
  height: 50px;
  fill: #fff;
`;

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
      <StarSnowFlake />
      <SimpleSnowFlake />
      <CircleSnowFlake />
      {children}
    </Wrapper>
  );
};

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
