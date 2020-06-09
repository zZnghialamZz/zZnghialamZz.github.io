import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { navLinks } from '@config';
import { Theme, Mixins, Media } from '@styles';

const { colors, fontSizes, fonts } = Theme;

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  outline: 0;
  transition: ${Theme.transition};
  transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
  visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
  display: none;
  ${Media.tablet`display: block;`};
`;

const Sidebar = styled.aside`
  ${Mixins.flexCenter};
  flex-direction: column;
  background-color: ${colors.lightNavy};
  padding: 50px;
  width: 50vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  font-family: ${fonts.FiraCode};
  box-shadow: -10px 0px 30px -15px ${colors.shadowNavy};
  ${Media.thone`padding: 25px;`};
  ${Media.phablet`width: 75vw;`};
  ${Media.tiny`padding: 10px;`};
`;

const NavLinks = styled.nav`
  ${Mixins.flexBetween};
  width: 100%;
  flex-direction: column;
  text-align: center;
  color: ${colors.lightestSlate};
`;

const NavLink = styled(Link)`
  ${Mixins.link};
  padding: 3px 20px 20px;
  width: 100%;
`;

const NavList = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
`;

const NavListItem = styled.li`
  margin: 0 auto 20px;
  position: relative;
  font-size: ${fontSizes.lg};
  counter-increment: item 1;
  ${Media.thone`
    margin: 0 auto 10px;
    font-size: ${fontSizes.md};
  `};
  ${Media.tiny`font-size: ${fontSizes.smish};`};
  &:before {
    display: block;
    content: '0' counter(item) '.';
    color: ${colors.green};
    font-size: ${fontSizes.sm};
    margin-bottom: 5px;
  }
`;

const ResumeLink = styled.a`
  ${Mixins.bigButton};
  padding: 18px 50px;
  margin: 10% auto 0;
  width: max-content;
`;

const Menu = ({ menuOpen, toggleMenu }) => {
  const handleMenuClick = e => {
    const target = e.target;
    const isLink = target.hasAttribute('href');
    const isNotMenu = target.classList && target.classList[0].includes('StyledContainer');

    if (isLink || isNotMenu) {
      toggleMenu();
    }
  };

  return (
    <StyledContainer
      menuOpen={menuOpen}
      onClick={handleMenuClick}
      aria-hidden={!menuOpen}
      tabIndex={menuOpen ? 1 : -1}>
      <Sidebar>
        <NavLinks>
          <NavList>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <NavListItem key={i}>
                  <NavLink to={url}>{name}</NavLink>
                </NavListItem>
              ))}
          </NavList>
          <ResumeLink href="/resume.pdf" target="_blank" rel="nofollow noopener noreferrer">
            Resume
          </ResumeLink>
        </NavLinks>
      </Sidebar>
    </StyledContainer>
  );
};

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Menu;
