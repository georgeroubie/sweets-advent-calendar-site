import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: ${({ theme: { borderSize, colors } }) => `${borderSize.large} solid ${colors.borderPrimary}`};
  width: 100%;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
`;

const InnerWrapper = styled.div`
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
      <InnerWrapper>
        {days.map((d) => (
          <Day key={d} ref={dayRef} style={{ height: width }}>
            {d}
          </Day>
        ))}
      </InnerWrapper>
    </Wrapper>
  );
};

export default Calendar;
