import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AllFilms from "../components/Body/AllFilms";
import SearchAppBar from "../components/Header/Header";
import LogIn from "../components/LogIn/LogIn";
import Favorites from "../components/Favorites/Favorites";
import Info from "../components/InfoPage";

export default function Routers() {
  // const user = false;

  return (
    <Router>
      <Switch>
        <Route exact path='/films' component={AllFilms} />
        <Route exact path='/home' component={SearchAppBar} />
        <Route exact path='/login' component={LogIn} />
        <Route exact path='/favorites' component={Favorites} />
        <Route exact path='/films/:movieId' component={Info} />
      </Switch>
      <Redirect from='/' to='/films' />
    </Router>
  );
}
