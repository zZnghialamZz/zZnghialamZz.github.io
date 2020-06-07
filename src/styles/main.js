import styled from 'styled-components';
import Mixins from './mixins';
import Media from './media';

const Main = styled.main`
  ${Mixins.sidePadding};

  margin: 0 auto;
  width: 100%,
  max-width: 1600px;
  min-height: 100vh;
  padding-top: 200px;
  padding-bottom: 200px;

  ${Media.desktop`
    padding-top: 200px;
    padding-bottom: 200px;
  `};
  ${Media.tablet`
    padding-top: 150px;
    padding-bottom: 150px;
  `};
  ${Media.phablet`
    padding-top: 125px;
    padding-bottom: 125px;
  `};

  &.MainContents {
    padding-top: 0;
    padding-bottom: 0;
    ${Media.desktop`
      padding-top: 0;
      padding-bottom: 0;
    `};
    ${Media.tablet`
      padding-top: 0;
      padding-bottom: 0;
    `};
    ${Media.phablet`
      padding-top: 0;
      padding-bottom: 0;
    `};
  }
`;

export default Main;
