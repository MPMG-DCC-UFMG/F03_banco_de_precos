import React from 'react';
import GlobalContext from './wrappers/GlobalContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Result from './pages/Results';
import { createTheme, ThemeProvider } from '@mui/material';
import { ptBR } from '@mui/x-data-grid';
import { ptBR as corePtBr } from '@mui/material/locale';
import PrivateRoute from './wrappers/PrivateRoute';
import Login from './pages/Login';

const theme = createTheme(
  corePtBr,
  ptBR
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalContext>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/result" element={<PrivateRoute><Result /></PrivateRoute>} />
          </Routes>
        </BrowserRouter>
      </GlobalContext>
    </ThemeProvider>
  );
}

export default App;
