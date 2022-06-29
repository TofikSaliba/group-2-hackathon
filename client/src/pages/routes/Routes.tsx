import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import { Contact } from "../../components/contact/contact.js";
import "./routesStyle.css";
import Register from "../register/register";
import Login from "../login/login";
import userApi from "../../apis/userApi";
import { useUser } from "../../context/User.context";
import About from "../about/About";

const Routes = () => {
  const { setCurrentUser, setToken } = useUser();

  useEffect(() => {
    const fetchedToken = localStorage.getItem("Token");
      if (fetchedToken) {
        const getUser = async () => {
          try {
            const options = {
              headers: { Authorization: fetchedToken },
            };
            const { data } = await userApi(options).get("/users/profile");      
            setCurrentUser(data);
            setToken(fetchedToken);
          } catch (err: any) {
            console.log(err.message);
          }
        };
        getUser();
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="bg-container"></div>
      <Navbar></Navbar>
      <Switch>
        <Route exact component={Home} path="/"></Route>
        <Route exact component={Register} path="/register"></Route>
        <Route exact component={Contact} path="/contact" />
        <Route exact component={Login} path="/login" />
        <Route exact component={About} path="/about" />

      </Switch>
    </>
  );
};

export default Routes;
