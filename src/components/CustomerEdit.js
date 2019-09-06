import React from 'react';
import PropTypes from 'prop-types';

const CustomerEdit = ({ name, dni, age }) => {
	return (
		<div>
			<h2>Nombre del cliente</h2>
			<h3>Nombre: {name} / ID: {dni} / Edad: {age}</h3>
		</div>
	);
};

CustomerEdit.propTypes = {
	name: PropTypes.string,
	dni: PropTypes.string,
	age: PropTypes.number,

};

export default CustomerEdit;