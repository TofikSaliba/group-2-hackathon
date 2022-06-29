import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import { Contact } from "../../components/contact/contact.js";
import "./routesStyle.css";

const Routes = () => {
  return (
    <>
      <div className="bg-container"></div>
      <Navbar></Navbar>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Contact} path="/contact" />
        {/* <Route exact component={Register} path="/register"/> */}
      </Switch>
    </>
  );
};

export default Routes;
