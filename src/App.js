import React from 'react';
import './App.css';
import Hero from './Components/Hero';
import Reyansh from './Components/Reyansh';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <div className='container'>
                <Hero />
              </div>
            }
          />
          <Route path='/reyansh' element={<Reyansh />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
