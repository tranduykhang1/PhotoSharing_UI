import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NotificationContainer } from "react-notifications";
import 'react-notifications/lib/notifications.css';



import Home from "./components/Page/Home";
import routes from "./routers";
import Header from "./components/Layout/Header";


const App = props => {

  const switchRoute = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route path={route.path} exact={route.exact} component={route.main} />
        );
      });
    }
    return result;
  };
  return (
    <Router>
      <Header />
      <Switch>
        {switchRoute(routes)}
      </Switch>
      <NotificationContainer />
    </Router>
  );
};

export default App;
