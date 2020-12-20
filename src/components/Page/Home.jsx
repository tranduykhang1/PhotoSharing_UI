import React from "react";
import "../assets/style/home/home.css";

import Header from "../Layout/Header";
import PhotoDetail from "../Photo/PhotoDetail";
import PhotoList from "../Photo/PhotoList";

import { useRouteMatch } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = (props) => {
  const { url, path} = useRouteMatch();
  console.log(url, path)
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={`${url}`} component={PhotoList} />
        </Switch>
      </Router>
    </div>
  );
};
export default Home;
