import react from "react";
import { Route, Switch, useParams } from "react-router-dom";

import Banner from "../../components/subPage/Banner";

function SubPage() {
  return (
    <>
      <Banner></Banner>

      <Switch>
        <Route path="/why">
          <div>asd</div>
        </Route>
      </Switch>
    </>
  )
}

export default SubPage;