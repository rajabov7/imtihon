import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';
import  theme  from './config/mui_theme.js';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ThemeProvider theme={theme}> 
    <CssBaseline />
  <App />
  </ThemeProvider>
 
  </BrowserRouter>,
)
