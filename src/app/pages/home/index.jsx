import { NavLink as _NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Calendar from '../../components/calendar/Calendar';
import _InfoIcon from '../../components/icons/Info';
import PageWrapper from '../../components/layout/PageWrapper';

const NavLink = styled(_NavLink)`
  text-decoration: none;
  position: fixed;
  top: ${({ theme: { spacing } }) => spacing.xsmall};
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
`;

const InfoIcon = styled(_InfoIcon)`
  width: ${({ theme: { fontSize } }) => fontSize.large};
  height: ${({ theme: { fontSize } }) => fontSize.large};
`;

const Home = () => {
  return (
    <PageWrapper>
      <NavLink to="/about">
        <InfoIcon />
      </NavLink>
      <Calendar />
    </PageWrapper>
  );
};

export default Home;
