import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Catalog from "./pages/catalog";
import Admin from "./pages/admin";
import Home from "./pages/home";

export default function AllRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Catalog />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
