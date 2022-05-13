import { useContext } from "react";
import {GlobalContext} from "../context/GlobalState";
import "./accountSummary";

const AccountSummary = () => {

    const { transactions } = useContext(GlobalContext);

    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);

    const income = transactionAmounts
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(2);

    const expense = Math.abs(transactionAmounts
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        ).toFixed(2);


    return <>
        <div className="row text-center">
            <div className="box pt-3">
                <div className="col-md-4">
                    <h5>INCOME</h5>
                    <p className="income">{income}</p>
                </div>
                <div className="col-md-4">
                    <h5>EXPENSE</h5>
                    <p className="expense">{expense}</p>
                </div>
            </div>
        </div>
    </>
}

export default AccountSummary;