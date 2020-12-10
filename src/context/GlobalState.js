import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
//initial state
const initialState = {
	transactions: []
}
//create global context
export const GlobalContext = createContext(initialState);

//provider component; provider provides state, action to wrapped component
//children: what is wrapped in component
export const GlobalProvider = ({children}) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	//actions
	function deleteTransaction(id){
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id,
		});
	}
	function addTransaction(transaction){
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction,
		});
	}
	return (
		//make component accessible
		<GlobalContext.Provider value={{
			transactions: state.transactions,
			deleteTransaction,
			addTransaction
		}}>
		  {children}
		</GlobalContext.Provider>
		);
}