import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Test from "./container/Test";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" render={props => <Test {...props} />} />
    </Router>
  );
}

export default App;
