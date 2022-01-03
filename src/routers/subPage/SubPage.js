import React from "react";
import { Route, Switch, useParams } from "react-router-dom";

import Banner from "../../components/subPage/Banner";
import Contact from "./contact/Contact";
import Ear from "./ear/Ear";
import Introduction from "./introduction/Introduction";
import Neck from "./neck/Neck";
import Nose from "./nose/Nose";
import Safe from "./safe/Safe";
import Why from "./why/Why";

function SubPage() {
  const { id } = useParams();
  return (
    <>
      {
        id != "why"
        ?<Banner></Banner>
        : null
      }

      <Switch>
        <Route path="/why/1">
          <Why></Why>
        </Route>
        <Route path="/introduction/:id">
          <Introduction></Introduction>
        </Route>
        <Route path="/nose/:id">
          <Nose></Nose>
        </Route>
        <Route path="/neck/:id">
          <Neck></Neck>
        </Route> 
        <Route path="/ear/:id">
          <Ear></Ear>
        </Route>
        <Route path="/safe/:id">
          <Safe></Safe>
        </Route>
        <Route path="/contact/:id">
          <Contact></Contact>
        </Route>
      </Switch>
    </>
  )
}

export default SubPage;