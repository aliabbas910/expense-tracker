import { useContext } from "react";
import "./expenseTracker.css";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);
    const balance = transactionAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return <>
        <h5 className="mt-4">CURRENT BALANCE</h5>
        <h2>${balance}</h2>
    </>
}

export default Balance;