import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<Router>
			<div className="App">
				<Link to="/customers">Customers</Link><br />
				<Link to="/customers/Walter">Customers Walter</Link>

			</div>
		</Router>
	);
}

export default App;
