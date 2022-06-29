import React from "react";
import Navbar from "../../components/navbar/Navbar";
<<<<<<< HEAD:client/src/pages/routes/Routes.jsx
import { Switch, Route } from "react-router-dom";
=======
import { Route, Switch } from "react-router-dom";
>>>>>>> 2a08dcc93ccb0eb3656d27c2bd99b8d0b6477333:client/src/pages/routes/Routes.tsx
import Home from "../home/Home";
import { Contact } from "../../components/contact/contact.js";
import "./routesStyle.css";
import Register from "../../components/register/register";

const Routes = () => {
<<<<<<< HEAD:client/src/pages/routes/Routes.jsx
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
=======
    return (
        <>
            <div className="bg-container"></div>
            <Navbar></Navbar>
            <Switch>
                <Route exact component={Home} path="/">

                </Route>
                <Route exact component={Register} path="/register">

                </Route>
            </Switch>
        </>
    );
>>>>>>> 2a08dcc93ccb0eb3656d27c2bd99b8d0b6477333:client/src/pages/routes/Routes.tsx
};

export default Routes;
