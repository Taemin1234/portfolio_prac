import React from 'react';
import Container from './component/Container'
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container/>
    </ThemeProvider>
  );
}

export default App;
