import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

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
  font-size: ${({ theme: { fontSize } }) => fontSize.xlarge};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  border-bottom: ${({ theme: { borderSize, colors } }) => `${borderSize.small} solid ${colors.borderPrimary}`};
  border-right: ${({ theme: { borderSize, colors } }) => `${borderSize.small} solid ${colors.borderPrimary}`};
`;

const Days = ({ setActiveRecipe }) => {
  const dayRef = useRef(null);
  const [height, setHeight] = useState(0);
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

  useEffect(() => {
    function changeHeightValue() {
      // Make all the days in the calendar squares
      const width = dayRef.current?.offsetWidth;
      if (width !== height) {
        setHeight(dayRef.current?.offsetWidth);
      }
    }

    changeHeightValue();
    window.addEventListener('resize', changeHeightValue);
    return () => {
      window.removeEventListener('resize', changeHeightValue);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DaysList>
      {days.map((d) => (
        <Day key={d} ref={dayRef} style={{ height }} onClick={() => setActiveRecipe(d)}>
          {d}
        </Day>
      ))}
    </DaysList>
  );
};

Days.propTypes = {
  setActiveRecipe: PropTypes.func.isRequired,
};

export default Days;
