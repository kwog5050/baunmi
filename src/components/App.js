import react, { useState } from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

import Header from "../routers/header/Header"
import Main from "../routers/main/Main"

import "../sass/_font.scss";
import "../sass/common.scss";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
      </Switch>
    </Router>  
  );
}

export default App;
