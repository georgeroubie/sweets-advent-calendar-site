import styled from 'styled-components';

const Wrapper = styled.div`
  border: 0.5rem solid #fff;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
`;

const Day = styled.div`
  cursor: pointer;
  width: 20%;
  height: 150px;
  display: inline-flex;
  min-width: 0;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.large};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  border-bottom: 1px solid white;
  border-right: 1px solid white;
`;

const Calendar = () => {
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  return (
    <Wrapper>
      {days.map((d) => (
        <Day key={d}>{d}</Day>
      ))}
    </Wrapper>
  );
};

export default Calendar;
