import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions';
import CustomersList from './../components/CustomersList';

const customers = [
	{
		"dni": "1144049862",
		"name": "Walter Zambrano",
		"age": 27
	},
	{
		"dni": "1107063435",
		"name": "Gloria Zambrano",
		"age": 28
	},
	{
		"dni": "31861042",
		"name": "Martha Morales",
		"age": 56
	}
];
class CustomersContainer extends Component {

	renderBody = customers =>
		(
			<div>
				<CustomersList
					customers={customers}
					urlPath={'customers/'}>
				</CustomersList>
				<CustomersActions>
					<button onClick={this.handleAddNew}>Nuevo cliente</button>
				</CustomersActions>
			</div>
		);

	render() {
		return (
			<div>
				<AppFrame header={'Listado de clientes'}
					body={this.renderBody(customers)} ></AppFrame>
			</div>
		);
	}
}

CustomersContainer.propTypes = {

};

export default CustomersContainer;