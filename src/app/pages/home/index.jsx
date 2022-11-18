import { NavLink as _NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Calendar from '../../components/calendar/Calendar';
import _InfoIcon from '../../components/icons/Info';
import PageWrapper from '../../components/layout/PageWrapper';

const NavLink = styled(_NavLink)`
  text-decoration: none;
  position: fixed;
  right: ${({ theme: { spacing } }) => spacing.xsmall};
  bottom: 0;
  display: inline-block;
`;

const InfoIcon = styled(_InfoIcon)`
  width: ${({ theme: { fontSize } }) => fontSize.xlarge};
  height: ${({ theme: { fontSize } }) => fontSize.xlarge};
`;

const Home = () => {
  return (
    <>
      <NavLink to="/about">
        <InfoIcon />
      </NavLink>
      <PageWrapper>
        <Calendar />
      </PageWrapper>
    </>
  );
};

export default Home;
