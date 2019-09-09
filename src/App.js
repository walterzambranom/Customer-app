import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import HomeContainer from './components/HomeContainer';
import './App.css';

class App extends Component {

	renderHome = () => <h1>Home</h1>;
	renderCustomerContainer = () => <h1>Customer Container</h1>;
	renderCustomerListContainer = () => <h1> Customer List Container</h1>;
	renderCustomerNewContainer = () => <h1>Customer New Container</h1>

	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={HomeContainer} />
					<Route exact path="/customers" component={this.renderCustomerListContainer} />
					<Switch>

						<Route exact path="/customers/new" component={this.renderCustomerNewContainer} />
						<Route exact path="/customers/:dni" component={this.renderCustomerContainer} />
					</Switch>

				</div>
			</Router>
		)
	}


}
/* function App() {
	return (
		<Router>
			<div className="App">
				<Link to="/customers">Customers</Link><br />
				<Link to="/customers/Walter">Customers Walter</Link>

			</div>
		</Router>
	);
} */

export default App;
