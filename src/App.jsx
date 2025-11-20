import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router';

import './App.css';
import Home from "./components/Home";
import EventsPage from "./components/EventsPage";
import ExhibitsPage from "./components/ExhibitsPage";
import SpeciesPage from "./components/SpeciesPage";
import BasketPage from "./components/BasketPage";
import ExhibitDetails from "./components/ExhibitDetails";


function App() {

  return <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/events" element={<EventsPage/>}/>
      <Route path="/exhibits" element={<ExhibitsPage/>}/>
      <Route path="/exhibit_info" element={<ExhibitDetails/>}/>
      <Route path="/species" element={<SpeciesPage/>}/>
      <Route path="/basket" element={<BasketPage/>}/>
    </Routes>
  </HashRouter>
}

export default App
