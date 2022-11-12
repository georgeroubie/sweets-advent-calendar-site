import { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import DecemberRecipe1 from '../recipes/DecemberRecipe1';
import DecemberRecipe10 from '../recipes/DecemberRecipe10';
import DecemberRecipe11 from '../recipes/DecemberRecipe11';
import DecemberRecipe12 from '../recipes/DecemberRecipe12';
import DecemberRecipe13 from '../recipes/DecemberRecipe13';
import DecemberRecipe14 from '../recipes/DecemberRecipe14';
import DecemberRecipe15 from '../recipes/DecemberRecipe15';
import DecemberRecipe16 from '../recipes/DecemberRecipe16';
import DecemberRecipe17 from '../recipes/DecemberRecipe17';
import DecemberRecipe18 from '../recipes/DecemberRecipe18';
import DecemberRecipe19 from '../recipes/DecemberRecipe19';
import DecemberRecipe2 from '../recipes/DecemberRecipe2';
import DecemberRecipe20 from '../recipes/DecemberRecipe20';
import DecemberRecipe21 from '../recipes/DecemberRecipe21';
import DecemberRecipe22 from '../recipes/DecemberRecipe22';
import DecemberRecipe23 from '../recipes/DecemberRecipe23';
import DecemberRecipe24 from '../recipes/DecemberRecipe24';
import DecemberRecipe25 from '../recipes/DecemberRecipe25';
import DecemberRecipe3 from '../recipes/DecemberRecipe3';
import DecemberRecipe4 from '../recipes/DecemberRecipe4';
import DecemberRecipe5 from '../recipes/DecemberRecipe5';
import DecemberRecipe6 from '../recipes/DecemberRecipe6';
import DecemberRecipe7 from '../recipes/DecemberRecipe7';
import DecemberRecipe8 from '../recipes/DecemberRecipe8';
import DecemberRecipe9 from '../recipes/DecemberRecipe9';
import SnowFlakes from './SnowFlakes';

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

const Calendar = () => {
  const dayRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [activeDay, setActiveDay] = useState(undefined);
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  const Recipes = useMemo(() => {
    return [
      DecemberRecipe1,
      DecemberRecipe2,
      DecemberRecipe3,
      DecemberRecipe4,
      DecemberRecipe5,
      DecemberRecipe6,
      DecemberRecipe7,
      DecemberRecipe8,
      DecemberRecipe9,
      DecemberRecipe10,
      DecemberRecipe11,
      DecemberRecipe12,
      DecemberRecipe13,
      DecemberRecipe14,
      DecemberRecipe15,
      DecemberRecipe16,
      DecemberRecipe17,
      DecemberRecipe18,
      DecemberRecipe19,
      DecemberRecipe20,
      DecemberRecipe21,
      DecemberRecipe22,
      DecemberRecipe23,
      DecemberRecipe24,
      DecemberRecipe25,
    ];
  }, []);

  const Recipe = useMemo(() => {
    if (activeDay) {
      return Recipes[activeDay - 1];
    }
    return undefined;
  }, [activeDay, Recipes]);

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
    <Wrapper>
      <SnowFlakes />
      <InnerWrapper>
        {Recipe ? (
          <Recipe />
        ) : (
          <DaysList>
            {days.map((d) => (
              <Day key={d} ref={dayRef} style={{ height }} onClick={() => setActiveDay(d)}>
                {d}
              </Day>
            ))}
          </DaysList>
        )}
      </InnerWrapper>
    </Wrapper>
  );
};

export default Calendar;
