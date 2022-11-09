import { NavLink as _NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const NavLink = styled(_NavLink)`
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.textPrimary};

  &.active {
    text-decoration: underline;
  }
`;

const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/settings', label: 'Settings' },
];

const Menu = () => {
  return (
    <Wrapper>
      {menuItems.map(({ path, label }) => (
        <NavLink key={path} to={path} end>
          {label}
        </NavLink>
      ))}
    </Wrapper>
  );
};

export default Menu;
