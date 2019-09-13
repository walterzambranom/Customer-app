import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions';
import CustomersList from './../components/CustomersList';
import { fetchCustomers } from '../actions/fetchCustomers';
import {getCustomers} from './../selectors/customers';

class CustomersContainer extends Component {
	componentDidMount() {
		this.props.fetchCustomers();
	}


	handleAddNew = () => {
		this.props.history.push('/customers/new');
	}
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
					body={this.renderBody(this.props.customers)} ></AppFrame>
			</div>
		);
	}
}

CustomersContainer.propTypes = {
	fetchCustomers: PropTypes.func.isRequired,
	customers: PropTypes.array.isRequired,
};

CustomersContainer.defaultProps = {
	customers: []
};

const mapStateToProps = state => ({
	customers: getCustomers(state)
})
export default withRouter(connect(mapStateToProps, { fetchCustomers })(CustomersContainer));