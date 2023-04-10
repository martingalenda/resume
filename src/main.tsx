/* React MUI */
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
/* React */
import React from 'react'
import ReactDOM from 'react-dom/client'
/* Components */
import App from './App'
/* Rutas */
import {BrowserRouter as Router} from "react-router-dom";
/* Efecto de particulas */
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {particlesEffect} from './assets/animations/tsparticles';
const particlesInit = async (main) => { 
  await loadFull(main)
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9ddeff',
    },
    secondary: {
      main: '#ff2929',
    },
    background: {
      paper: '#131829',
      default: '#131829',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Particles id="tsparticles" init={particlesInit} options={particlesEffect} />
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
) 
