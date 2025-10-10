import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <body className="bg-dark text-light">
      <header className="container-fluid">
      <nav className="navbar fixed-top navbar-dark">
        <a className="navbar-brand" href="#">Simon<sup>&reg;</sup></a>
        <menu className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="play.html">Play</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="scores.html">Scores</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">About</a>
          </li>
        </menu>
      </nav>
    </header>

    <header className="container-fluid">
      <nav className="navbar fixed-top navbar-dark">
        <a className="navbar-brand" href="#">Simon<sup>&reg;</sup></a>
        <menu className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="play.html">Play</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="scores.html">Scores</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="about.html">About</a>
          </li>
        </menu>
      </nav>
    </header>

    <footer className="bg-dark text-white-50">
      <div className="container-fluid">
        <span className="text-reset">Author Name(s)</span>
        <a className="text-reset" href="https://github.com/webprogramming260/simon-css">Source</a>
      </div>
    </footer>
    </body>
  );
}

import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import {Login} from "./login/login";
import {Play} from "./play/play";
import {Scores} from "./scores/scores";
import {About} from "./about/about";


