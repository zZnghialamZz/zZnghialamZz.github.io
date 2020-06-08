import { css } from 'styled-components';

import JetBrainsMonoRegularTTF from '@fonts/JetBrainsMono/ttf/JetBrainsMono-Regular.ttf';
import JetBrainsMonoRegularWOFF from '@fonts/JetBrainsMono/woff/JetBrainsMono-Regular.woff';
import JetBrainsMonoRegularWOFF2 from '@fonts/JetBrainsMono/woff2/JetBrainsMono-Regular.woff2';
import JetBrainsMonoRegularItalicTTF from '@fonts/JetBrainsMono/ttf/JetBrainsMono-Italic.ttf';
import JetBrainsMonoRegularItalicWOFF from '@fonts/JetBrainsMono/woff/JetBrainsMono-Italic.woff';
import JetBrainsMonoRegularItalicWOFF2 from '@fonts/JetBrainsMono/woff2/JetBrainsMono-Italic.woff2';
import JetBrainsMonoMediumTTF from '@fonts/JetBrainsMono/ttf/JetBrainsMono-Medium.ttf';
import JetBrainsMonoMediumWOFF from '@fonts/JetBrainsMono/woff/JetBrainsMono-Medium.woff';
import JetBrainsMonoMediumWOFF2 from '@fonts/JetBrainsMono/woff2/JetBrainsMono-Medium.woff2';
import JetBrainsMonoMediumItalicTTF from '@fonts/JetBrainsMono/ttf/JetBrainsMono-Medium-Italic.ttf';
import JetBrainsMonoMediumItalicWOFF from '@fonts/JetBrainsMono/woff/JetBrainsMono-Medium-Italic.woff';
import JetBrainsMonoMediumItalicWOFF2 from '@fonts/JetBrainsMono/woff2/JetBrainsMono-Medium-Italic.woff2';
import JetBrainsMonoBoldTTF from '@fonts/JetBrainsMono/ttf/JetBrainsMono-Bold.ttf';
import JetBrainsMonoBoldWOFF from '@fonts/JetBrainsMono/woff/JetBrainsMono-Bold.woff';
import JetBrainsMonoBoldWOFF2 from '@fonts/JetBrainsMono/woff2/JetBrainsMono-Bold.woff2';
import JetBrainsMonoBoldItalicTTF from '@fonts/JetBrainsMono/ttf/JetBrainsMono-Bold-Italic.ttf';
import JetBrainsMonoBoldItalicWOFF from '@fonts/JetBrainsMono/woff/JetBrainsMono-Bold-Italic.woff';
import JetBrainsMonoBoldItalicWOFF2 from '@fonts/JetBrainsMono/woff2/JetBrainsMono-Bold-Italic.woff2';

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
    src: url(${JetBrainsMonoBoldWOFF2}) format('woff2'),
      url(${JetBrainsMonoBoldWOFF}) format('woff'), url(${JetBrainsMonoBoldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'JetBrains Mono';
    src: url(${JetBrainsMonoBoldItalicWOFF2}) format('woff2'),
      url(${JetBrainsMonoBoldItalicWOFF}) format('woff'),
      url(${JetBrainsMonoBoldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
`;

export default FontFaces;
