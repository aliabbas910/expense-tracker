   
import React, { useContext } from 'react';

// Import Transaction Component
import Transaction from "./transaction";

// Import the Global State
import { GlobalContext } from '../context/GlobalState';

const TransactionHistory = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <div className='text-center'>
            <h3 className='borderBtm2'>
                Transaction History
            </h3>
            <ul className="list">
                {transactions.map(transaction => 
                    (
                    <Transaction key={transaction.id} transaction={transaction} />
                    )
                )}
            </ul>
        </div>
    )
}
export default TransactionHistory;