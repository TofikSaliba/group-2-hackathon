import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Switch } from "react-router-dom";
import Home from "../home/Home";

const Routes = () => {
    return (
        <>
            <Navbar></Navbar>
            <Switch>
                <Home></Home>
            </Switch>
        </>
    );
};

export default Routes;
