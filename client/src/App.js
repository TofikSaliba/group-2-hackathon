import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

import { useData } from "./contexts/DataContext";

import API from "./api/api.js";
import "./app.css";

function App() {
  const { setCurrentUser, setToken, isSpinning, setIsSpinning } = useData();

  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem("Token"));
    if (storedToken) {
      const getUser = async () => {
        try {
          const options = {
            headers: { Authorization: storedToken },
          };
          const { data } = await API(options).get("/users/profile");
          setCurrentUser(data.requestedUser);
          setToken(storedToken);
        } catch (err) {
          console.log(err.message);
        } finally {
          setIsSpinning(false);
        }
      };
      getUser();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Router>
        <Header />
        <div className="mainContainer">
          {isSpinning && <h1 className="spinner">Loading</h1>}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Register" component={Register} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
