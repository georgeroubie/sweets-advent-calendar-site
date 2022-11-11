import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import _CircleSnowFlake from '../icons/CircleSnowFlake';
import _SimpleSnowFlake from '../icons/SimpleSnowFlake';
import _StarSnowFlake from '../icons/StarSnowFlake';

const Wrapper = styled.div`
  border: ${({ theme: { borderSize, colors } }) => `${borderSize.large} solid ${colors.borderPrimary}`};
  width: 100%;
  height: auto;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius.normal};
  position: relative;
`;

const InnerWrapper = styled.div`
  overflow: hidden;
`;

const DaysList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${({ theme: { borderSize } }) => borderSize.small};
`;

const Day = styled.div`
  cursor: pointer;
  width: 20%;
  height: 20%;
  display: inline-flex;
  min-width: 0;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.large};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  border-bottom: ${({ theme: { borderSize, colors } }) => `${borderSize.small} solid ${colors.borderPrimary}`};
  border-right: ${({ theme: { borderSize, colors } }) => `${borderSize.small} solid ${colors.borderPrimary}`};
`;

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

const Calendar = () => {
  const dayRef = useRef(null);
  const [width, setWidth] = useState(0);
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

  useEffect(() => {
    function changeWidthValue() {
      const currentWidth = dayRef.current?.offsetWidth;
      if (currentWidth !== width) {
        setWidth(dayRef.current?.offsetWidth);
      }
    }

    changeWidthValue();
    window.addEventListener('resize', changeWidthValue);
    return () => {
      window.removeEventListener('resize', changeWidthValue);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
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
      <InnerWrapper>
        <DaysList>
          {days.map((d) => (
            <Day key={d} ref={dayRef} style={{ height: width }}>
              {d}
            </Day>
          ))}
        </DaysList>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Calendar;
