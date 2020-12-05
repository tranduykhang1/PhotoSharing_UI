import React from "react";
import "./App.css";

import Product from "./components/Product.js";
import Home from "./components/Home";
import Customer from "./components/Customer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/product" component={Product}/>
				<Route path="/customer" component={Customer}/>
			</Switch>
		</Router>
	);
};
export default App;
