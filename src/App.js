import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainForm from "./components/MainForm";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={MainForm} />
      </Router>
    );
  }
}

export default App;
