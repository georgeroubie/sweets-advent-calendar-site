import { NavLink as _NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Calendar from '../../components/calendar/Calendar';
import _InfoIcon from '../../components/icons/Info';
import PageWrapper from '../../components/layout/PageWrapper';

const NavLink = styled(_NavLink)`
  text-decoration: underline;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: ${({ theme: { spacing } }) => spacing.xsmall};
  display: inline-block;
`;

// eslint-disable-next-line no-unused-vars
const InfoIcon = styled(_InfoIcon)`
  width: ${({ theme: { fontSize } }) => fontSize.xlarge};
  height: ${({ theme: { fontSize } }) => fontSize.xlarge};
`;

const Home = () => {
  return (
    <>
      <NavLink to="/about">ABOUT THIS SITE</NavLink>
      <PageWrapper>
        <Calendar />
      </PageWrapper>
    </>
  );
};

export default Home;
