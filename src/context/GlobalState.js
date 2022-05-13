import { createContext, useReducer } from "react"
import AppReducer from "./AppReducer";


// Create an initialState
export const initialState = {
    transaction: []
}

// Create a GlobalContext
export const GlobalContext = createContext(initialState);

// Create a Provider for GlobalContext
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addTransaction(transaction) {
        dispatch(
            {
                type: "ADD_TRANSACTION",
                payload: transaction
            }
        );
    }

    function delTransaction(id) {
        dispatch(
            {
                type: 'DELETE_TRANSACTION',
                payload: id
            }
        );
    }

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transaction,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    );
}