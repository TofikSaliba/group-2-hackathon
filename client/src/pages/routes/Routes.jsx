import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Switch } from "react-router-dom";
import Home from "../home/Home";
import "./routesStyle.css";

const Routes = () => {
    return (
        <>
            <div className="bg-container"></div>
            <Navbar></Navbar>
            <Switch>
                <Home></Home>
            </Switch>
        </>
    );
};

export default Routes;
