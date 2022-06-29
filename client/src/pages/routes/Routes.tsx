import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import { Contact } from "../../components/contact/contact.js";
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
        <Route exact component={Contact} path="/contact" />
      </Switch>
    </>
  );
};

export default Routes;
