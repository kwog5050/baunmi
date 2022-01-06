import react, { useState, Suspense, lazy } from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

import Header from "./common/header/Header"
import Footer from "./common/footer/Footer"
import Main from "../routers/main/Main"

import "../sass/_font.scss";
import "../sass/common.scss";

let SubPage = lazy(() => { return import("../routers/subPage/SubPage") });


function App() {

  let [suspenseStyle, setSuspenseStyle] = useState({
    textAlign: "center",
    padding: "200px 0px",
    backgroundColor: "#eee",
  })

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>

        <Route exact path="/:id/:tap">
          <Suspense fallback={<div style={suspenseStyle}><img src="/img/loding.gif" alt="" /></div>}>
            <SubPage></SubPage>
          </Suspense>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>  
  );
}

export default App;
