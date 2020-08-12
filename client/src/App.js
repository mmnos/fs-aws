import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <div className="main">
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
};

export default App;
