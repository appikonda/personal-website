import React from 'react';
import './App.css';
import Hero from './Components/Hero';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className='container'>
        <Hero />
      </div>
    </ThemeProvider>
  );
}

export default App;

