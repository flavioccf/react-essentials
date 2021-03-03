import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home, About, Events, Contact, Whoops404
} from "./pages";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" ><Home /></Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/events"><Events /></Route>
          <Route path="/contact" ><Contact /></Route>
          <Route path="*" ><Whoops404 /></Route>
        </Switch>
      </Router>
    </>
  )
}


export default App;
