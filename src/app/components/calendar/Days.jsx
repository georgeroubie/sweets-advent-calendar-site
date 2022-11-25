import PropTypes from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import Notification from '../ui/Notification';

const DaysList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${({ theme: { borderSize } }) => borderSize.small};
  position: relative;
`;

const Day = styled.div`
  cursor: pointer;
  width: 25%;
  height: 25%;
  display: inline-flex;
  min-width: 0;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.xlarge};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  border-bottom: ${({ theme: { borderSize, colors } }) => `${borderSize.small} solid ${colors.borderPrimary}`};
  border-right: ${({ theme: { borderSize, colors } }) => `${borderSize.small} solid ${colors.borderPrimary}`};

  @media (min-width: ${({ theme: { screens } }) => screens.medium}) {
    width: 20%;
    height: 20%;
  }
`;

const Days = ({ setActiveRecipe }) => {
  const dayRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [message, setMessage] = useState(undefined);
  const year = 2022;
  const month = 11;
  const monthLabel = 'December';
  const days = [...Array(25).keys()].map((d) => d + 1);

  const [currentDay, currentMonth, currentYear] = useMemo(() => {
    const date = new Date();
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()];
  }, []);

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

  function handleDayClick(d) {
    if (currentYear === year) {
      if (currentMonth !== month) {
        setMessage(`Wait until ${monthLabel}, be a good kid because santa is watching!`);
        return;
      }

      if (d > currentDay) {
        setMessage(`Wait until ${d} ${monthLabel} to get your recipe, don't be naughty!`);
        return;
      }
    }

    setActiveRecipe(d);
  }

  return (
    <DaysList>
      {message && <Notification message={message} setMessage={setMessage} />}
      {days.map((d) => (
        <Day key={d} ref={dayRef} style={{ height }} onClick={() => handleDayClick(d)}>
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
