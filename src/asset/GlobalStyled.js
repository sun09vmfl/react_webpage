import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`
  ${reset}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&family=Ubuntu:wght@300;400;500&display=swap');

  body {
   font-family: 'Noto Sans KR', sans-serif;
   font-size: 20px;
   
  }

`;

export default GlobalStyled;
