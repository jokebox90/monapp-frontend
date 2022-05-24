import './App.scss'

import React from 'react';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import PeopleComponent from './PeopleComponent';


export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PeopleComponent />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}