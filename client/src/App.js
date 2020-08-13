import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import { Container } from "react-bootstrap";
import "./App.css";

import GlobalState from "./context/GlobalState";

const App = () => {
  return (
    <GlobalState>
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </Container>
      </Router>
    </GlobalState>
  );
};

export default App;
