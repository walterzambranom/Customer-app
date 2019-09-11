import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import HomeContainer from './containers/HomeContainer';
import './App.css';
import CustomersContainer from './containers/CustomersContainer';

class App extends Component {

	renderHome = () => <HomeContainer />;
	renderCustomerContainer = () => <h1>Customer Container</h1>;
	renderCustomerListContainer = () => <CustomersContainer />;
	renderCustomerNewContainer = () => <h1>Customer New Container</h1>

	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={this.renderHome} />
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
