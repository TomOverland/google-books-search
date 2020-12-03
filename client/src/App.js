import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";

import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Unknown from "./pages/Unknown";

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Header />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/unknown" component={Unknown} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
