import { css } from 'styled-components';
import Theme from './theme';

// https://reactcommunity.org/react-transition-group/css-transition
const TransitionStyles = css`
  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms ${Theme.easing}, transform 300ms ${Theme.easing};
  }

  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${Theme.easing}, transform 300ms ${Theme.easing};
  }

  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms ${Theme.easing}, transform 300ms ${Theme.easing};
  }

  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${Theme.easing}, transform 300ms ${Theme.easing};
  }

  .fade-enter {
    opacity: 0.01;
    transition: opacity 1000ms ${Theme.easing};
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ${Theme.easing};
  }
`;

export default TransitionStyles;
