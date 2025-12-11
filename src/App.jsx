import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router';

import './App.css';
import Home from "./components/Home";
import EventsPage from "./components/EventsPage";
import ExhibitsPage from "./components/ExhibitsPage";
import SpeciesPage from "./components/SpeciesPage";
import BasketPage from "./components/BasketPage";
import ExhibitDetails from "./components/ExhibitDetails";

import { events } from './information';

function App() {
  const [notBooked, setNotBooked] = useState(events);
  const [booked, setBooked] = useState([]);

    function addBooked(event) {
      setNotBooked(o => {
        let newO = o.filter(ev => ev.name != event);
        return newO;
      });
      setBooked(o => {
        let newO = [];
        if(o.length > 0) {
          let allEvents = [...o]
          allEvents.push(events.filter(ev => ev.name === event)[0]);
          newO = events.filter(ev => allEvents.includes(ev));
        } else {
          newO = events.filter(ev => ev.name === event);
        }
        return newO;
      });
    };

    function removeBooked(event) {
      setNotBooked(o => {
        let newO = [];
        if(o.length > 0) {
          let allEvents = [...o];
          allEvents.push(events.filter(ev => ev.name === event)[0]);
          newO = events.filter(ev => allEvents.includes(ev));
        } else {
          newO = events.filter(ev => ev.name === event);
        }
        return newO;
      });
      setBooked(o => {
        let newO = o.filter(ev => ev.name != event);
        return newO;
      })
    }
  
  return <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/events" element={<EventsPage addBooked={addBooked} removeBooked={removeBooked} events={notBooked}/>}/>
      <Route path="/exhibits" element={<ExhibitsPage/>}/>
      <Route path="/species" element={<SpeciesPage/>}/>
      <Route path="/basket" element={<BasketPage addBooked={addBooked} removeBooked={removeBooked} events={booked}/>}/>
    </Routes>
  </HashRouter>
}

export default App
