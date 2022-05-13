import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./expenseTracker.css";

const Transaction = (props) => {

    const {delTransaction} = useContext(GlobalContext);
    const sign = props.transaction.transactionAmount > 0 ? "+" : "-";
    const transactionType = props.transaction.transactionAmount > 0 ? "plus" : "minus";

    return <>
        <li className={transactionType}>
            <button className="x" onClick={()=>delTransaction(props.transaction.id)}>x</button>
            <div>{props.transaction.description}</div>
            <div>{sign}${Math.abs(props.transaction.transactionAmount)}</div>
        </li>
    </>
}

export default Transaction;