import { css } from 'styled-components';

import JetBrainsMonoRegularTTF from '@fonts/JetBrainsMono/ttf/JetBrainsMono-Regular.ttf';
import JetBrainsMonoRegularWOFF from '@fonts/JetBrainsMono/woff/JetBrainsMono-Regular.woff';
import JetBrainsMonoRegularWOFF2 from '@fonts/JetBrainsMono/woff2/JetBrainsMono-Regular.woff2';
import JetBrainsMonoRegularItalicTTF from '@fonts/JetBrainsMono/ttf/JetBrainsMono-RegularItalic.ttf';
import JetBrainsMonoRegularItalicWOFF from '@fonts/JetBrainsMono/woff/JetBrainsMono-RegularItalic.woff';
import JetBrainsMonoRegularItalicWOFF2 from '@fonts/JetBrainsMono/woff2/JetBrainsMono-RegularItalic.woff2';
import JetBrainsMonoMediumTTF from '@fonts/JetBrainsMono/ttf/JetBrainsMono-Medium.ttf';
import JetBrainsMonoMediumWOFF from '@fonts/JetBrainsMono/woff/JetBrainsMono-Medium.woff';
import JetBrainsMonoMediumWOFF2 from '@fonts/JetBrainsMono/woff2/JetBrainsMono-Medium.woff2';
import JetBrainsMonoMediumItalicTTF from '@fonts/JetBrainsMono/ttf/JetBrainsMono-MediumItalic.ttf';
import JetBrainsMonoMediumItalicWOFF from '@fonts/JetBrainsMono/woff/JetBrainsMono-MediumItalic.woff';
import JetBrainsMonoMediumItalicWOFF2 from '@fonts/JetBrainsMono/woff2/JetBrainsMono-MediumItalic.woff2';
import JetBrainsMonoSemiboldTTF from '@fonts/JetBrainsMono/ttf/JetBrainsMono-Semibold.ttf';
import JetBrainsMonoSemiboldWOFF from '@fonts/JetBrainsMono/woff/JetBrainsMono-Semibold.woff';
import JetBrainsMonoSemiboldWOFF2 from '@fonts/JetBrainsMono/woff2/JetBrainsMono-Semibold.woff2';
import JetBrainsMonoSemiboldItalicTTF from '@fonts/JetBrainsMono/ttf/JetBrainsMono-SemiboldItalic.ttf';
import JetBrainsMonoSemiboldItalicWOFF from '@fonts/JetBrainsMono/woff/JetBrainsMono-SemiboldItalic.woff';
import JetBrainsMonoSemiboldItalicWOFF2 from '@fonts/JetBrainsMono/woff2/JetBrainsMono-SemiboldItalic.woff2';

const FontFaces = css`
  @font-face {
    font-family: 'JetBrains Mono';
    src: url(${JetBrainsMonoRegularWOFF2}) format('woff2'),
      url(${JetBrainsMonoRegularWOFF}) format('woff'),
      url(${JetBrainsMonoRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'JetBrains Mono';
    src: url(${JetBrainsMonoRegularItalicWOFF2}) format('woff2'),
      url(${JetBrainsMonoRegularItalicWOFF}) format('woff'),
      url(${JetBrainsMonoRegularItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'JetBrains Mono';
    src: url(${JetBrainsMonoMediumWOFF2}) format('woff2'),
      url(${JetBrainsMonoMediumWOFF}) format('woff'),
      url(${JetBrainsMonoMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'JetBrains Mono';
    src: url(${JetBrainsMonoMediumItalicWOFF2}) format('woff2'),
      url(${JetBrainsMonoMediumItalicWOFF}) format('woff'),
      url(${JetBrainsMonoMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'JetBrains Mono';
    src: url(${JetBrainsMonoSemiboldWOFF2}) format('woff2'),
      url(${JetBrainsMonoSemiboldWOFF}) format('woff'),
      url(${JetBrainsMonoSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'JetBrains Mono';
    src: url(${JetBrainsMonoSemiboldItalicWOFF2}) format('woff2'),
      url(${JetBrainsMonoSemiboldItalicWOFF}) format('woff'),
      url(${JetBrainsMonoSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
`;

export default FontFaces;
