import React from 'react';
import logo from './logo.svg';
import VehicleDisplay from './vehicleDisplay'
import './App.css';
import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {


  return (
    <div className="App">
     <Router>
        <nav>
          <ul>
            <li>
              <Link to="/vehicle">Vehicle Display Page</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/vehicle" element={<VehicleDisplay />}></Route>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
