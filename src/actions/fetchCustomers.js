import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';

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
]

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);
