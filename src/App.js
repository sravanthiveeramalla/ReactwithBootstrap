import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/home.js";
import Register from "./components/register/register.js";
import Login from "./components/login/login.js";
import Header from "./header.js";
function App() {
  return (
    <Router>
      <div className="header-block">
        <div className="header-head">
          <div className="header-right">
          <a className="a-head" href="/">
              Home
            </a>
          </div>
          <div className="header-left">
            <h1> Super App</h1>
          </div>
          <div className="header-right">
            <a className="a-head" href="/login">
              Login
            </a>
            &nbsp;&nbsp;
            <a className="a-head" href="/register">
              Register
            </a>
          </div>
        </div>
        <Header />
        <img className="header-img" src="../images/header-img.jpg" />
      </div>
      <div className="body-block">
        <div className="app-routes">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;
