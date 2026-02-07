import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';

export default function App() {
  return (
    <div className="body bg-dark text-light">
    <BrowserRouter>
      <header className="container-fluid">
      <nav className="navbar fixed-top navbar-dark">
        <NavLink className="navbar-brand" href="#">Simon<sup>&reg;</sup></NavLink>
        <menu className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link active" to="">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="play">Play</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="scores">Scores</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="about">About</NavLink>
          </li>
        </menu>
      </nav>
      </header>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="play" element={<Play />} />
        <Route path="scores" element={<Scores />} />
        <Route path="about" element={<About />} />
      </Routes>
      
    </BrowserRouter>

    <footer className="bg-dark text-white-50">
      <div className="container-fluid">
        <span className="text-reset">Author Name(s)</span>
        <a className="text-reset" href="https://github.com/webprogramming260/simon-css">Source</a>
      </div>
    </footer>
    </div>
  );
}
