import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Body from "../components/Body/Body";
import Favorites from "../components/Favorites/Favorites";
import LogIn from "../components/LogIn/LogIn";

export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={LogIn} />
        <Route exact path='/body' component={Body} />
        <Route exact path='/favorites' component={Favorites} />
      </Switch>
      <Redirect from='/' to='/login' />
    </Router>
  );
}
