import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from '@components';
import { Theme, Mixins, Media, Main } from '@styles';

const { colors, fonts, navDelay } = Theme;

const StyledMainContainer = styled(Main)`
  ${Mixins.flexCenter};
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  color: ${colors.green};
  font-family: ${fonts.SFMono};
  font-size: 12vw;
  line-height: 1;
  ${Media.bigDesktop`font-size: 200px;`}
  ${Media.phablet`font-size: 120px;`};
`;

const StyledSubtitle = styled.h2`
  font-size: 3vw;
  font-weight: 400;
  ${Media.bigDesktop`font-size: 50px;`};
  ${Media.phablet`font-size: 30px;`};
`;

const StyledHomeButton = styled(Link)`
  ${Mixins.bigButton};
  margin-top: 40px;
`;

const NotFoundPage = ({ location }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Layout location={location}>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition timeout={500} classNames="fade">
            <StyledMainContainer className="MainContents">
              <StyledTitle>404</StyledTitle>
              <StyledSubtitle>Page Not Found</StyledSubtitle>
              <StyledHomeButton to="/">Go Home</StyledHomeButton>
            </StyledMainContainer>
          </CSSTransition>
        )}
      </TransitionGroup>
    </Layout>
  );
};

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NotFoundPage;
