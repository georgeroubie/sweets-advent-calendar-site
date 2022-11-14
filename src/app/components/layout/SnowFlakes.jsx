import styled, { css } from 'styled-components';
import _CircleSnowFlake from '../icons/CircleSnowFlake';
import _SimpleSnowFlake from '../icons/SimpleSnowFlake';
import _StarSnowFlake from '../icons/StarSnowFlake';

const SnowFlake = css`
  width: ${({ theme: { fontSize } }) => fontSize.large};
  height: ${({ theme: { fontSize } }) => fontSize.large};
  fill: ${({ theme: { colors } }) => colors.textPrimary};
  position: absolute;
`;

const TopLeftCircleSnowFlake = styled(_CircleSnowFlake)`
  ${SnowFlake}
  top: -1.2rem;
  left: -1.2rem;
`;

const TopLeftSimpleSnowFlake = styled(_SimpleSnowFlake)`
  ${SnowFlake}
  top: -1.5rem;
  left: 0;
`;

const TopLeftStarSnowFlake = styled(_StarSnowFlake)`
  ${SnowFlake}
  top: 0;
  left: -1.5rem;
`;

const TopRightCircleSnowFlake = styled(_CircleSnowFlake)`
  ${SnowFlake}
  top: -1.2rem;
  right: -1.2rem;
`;

const TopRightSimpleSnowFlake = styled(_SimpleSnowFlake)`
  ${SnowFlake}
  top: -1.5rem;
  right: 0;
`;

const TopRightStarSnowFlake = styled(_StarSnowFlake)`
  ${SnowFlake}
  top: 0;
  right: -1.5rem;
`;

const BottomLeftCircleSnowFlake = styled(_CircleSnowFlake)`
  ${SnowFlake}
  bottom: -1.2rem;
  left: -1.2rem;
`;

const BottomLeftSimpleSnowFlake = styled(_SimpleSnowFlake)`
  ${SnowFlake}
  bottom: -1.5rem;
  left: 0;
`;

const BottomLeftStarSnowFlake = styled(_StarSnowFlake)`
  ${SnowFlake}
  bottom: 0;
  left: -1.5rem;
`;

const BottomRightCircleSnowFlake = styled(_CircleSnowFlake)`
  ${SnowFlake}
  bottom: -1.2rem;
  right: -1.2rem;
`;

const BottomRightSimpleSnowFlake = styled(_SimpleSnowFlake)`
  ${SnowFlake}
  bottom: -1.5rem;
  right: 0;
`;

const BottomRightStarSnowFlake = styled(_StarSnowFlake)`
  ${SnowFlake}
  bottom: 0;
  right: -1.5rem;
`;

const SnowFlakes = () => {
  return (
    <>
      <TopLeftStarSnowFlake />
      <TopLeftSimpleSnowFlake />
      <TopLeftCircleSnowFlake />
      <TopRightCircleSnowFlake />
      <TopRightSimpleSnowFlake />
      <TopRightStarSnowFlake />
      <BottomLeftCircleSnowFlake />
      <BottomLeftSimpleSnowFlake />
      <BottomLeftStarSnowFlake />
      <BottomRightCircleSnowFlake />
      <BottomRightSimpleSnowFlake />
      <BottomRightStarSnowFlake />
    </>
  );
};

export default SnowFlakes;
