import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "../home/Home";
import "./routesStyle.css";
import Register from "../register/register";

const Routes = () => {
  return (
    <>
      <div className="bg-container"></div>
      <Navbar></Navbar>
      <Switch>
        <Route exact component={Home} path="/"></Route>
        <Route exact component={Register} path="/register"></Route>
      </Switch>
    </>
  );
};

export default Routes;
