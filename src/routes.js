import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Catalog from "./pages/catalog";
import Admin from "./pages/admin";
import Home from "./pages/home";
import Template from "./pages/template";

export default function AllRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Template component={Catalog} />
        </Route>
        <Route path="/admin">
          <Template component={Admin} />
        </Route>
        <Route path="/home">
          <Template component={Home} />
        </Route>
      </Switch>
    </Router>
  );
}
