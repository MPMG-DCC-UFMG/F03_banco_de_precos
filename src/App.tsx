import React from 'react';
import GlobalContext from './wrappers/GlobalContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Result from './pages/Results';

function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext>
  );
}

export default App;
