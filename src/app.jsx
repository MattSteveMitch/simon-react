import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <body class="bg-dark text-light">
      <header class="container-fluid">
        <nav class="navbar fixed-top navbar-dark">
          <a class="navbar-brand" href="#">Simon<sup>&reg;</sup></a>
          <menu class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="play.html">Play</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="scores.html">Scores</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">About</a>
            </li>
          </menu>
        </nav>
      </header>

      <main class="container-fluid bg-secondary text-center">
        <table class="table table-warning table-striped-columns">
          <thead class="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>도윤 이</td>
              <td>34</td>
              <td>May 20, 2021</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Annie James</td>
              <td>29</td>
              <td>June 2, 2021</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Gunter Spears</td>
              <td>7</td>
              <td>July 3, 2020</td>
            </tr>
          </tbody>
        </table>
      </main>

      <footer class="bg-dark text-white-50">
        <div class="container-fluid">
          <span class="text-reset">Author Name(s)</span>
          <a class="text-reset" href="https://github.com/webprogramming260/simon-css">Source</a>
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


