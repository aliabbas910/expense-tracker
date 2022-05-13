import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./expenseTracker.css";

const AddTransaction = () => {
    let [description, setDescription] = useState("");
    let [transactionAmount, setTransactionAmount] = useState("");

    const {addTransaction} = useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }
        addTransaction(newTransaction);
    }
    
    return <>
    <div className="mt-3">
                <h4 className="borderBtm2">Add New Transaction</h4>
                <ul></ul>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Description
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Detail of Transaction"
                        value={description}
                        onChange={(e) =>setDescription(e.target.value)}
                        required="required"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Transaction Amount
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Dollar Value of Transaction"
                        value={transactionAmount}
                        onChange={(e) =>setTransactionAmount(e.target.value)}
                        required="required"
                    />
                </div>
                <button className="btn btn-primary btn-sm">
                    Add Transaction
                </button>
            </form>
    </>
}

export default AddTransaction;