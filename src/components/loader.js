import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import anime from 'animejs';
import { IconLoader } from '@components/icons'
import { Theme, Mixins } from '@styles';

const { colors } = Theme;

const StyledContainer = styled.div`
  ${Mixins.flexCenter};
  background-color: ${colors.navy};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;

const StyledLogo = styled.div`
  width: max-content;
  max-width: 100px;
  transition: ${Theme.transition};
  opacity: ${props => (props.isMounted ? 1 : 0)};
  svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    fill: none;
    user-select: none;
  }
`;

const Loader = ({ finishLoading }) => {
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '#logo path, #logo rect',
        duration: 300,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo',
        duration: 2000,
        easing: 'easeInOutQuart'
      });
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledContainer className="loader">
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <StyledLogo isMounted={isMounted}><IconLoader /></StyledLogo>
    </StyledContainer>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
