import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import HomeContainer from './containers/HomeContainer';
import './App.css';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';

class App extends Component {

	renderCustomerNewContainer = () => <h1>Customer New Container</h1>

	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={HomeContainer} />
					<Route exact path="/customers" component={CustomersContainer} />
					<Switch>

						<Route exact path="/customers/new" component={this.renderCustomerNewContainer} />
						<Route exact path="/customers/:dni"
							render={props => <CustomerContainer dni={props.match.params.dni} />} />
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
