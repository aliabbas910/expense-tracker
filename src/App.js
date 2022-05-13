import Header from "./components/Header";
import Balance from "./components/balance";
import TransactionHistory from "./components/transactionHistory";
import AddTransaction from "./components/addTransaction";
import AccountSummary from "./components/accountSummary";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return <>
    <div className="container wrapper">

      <Header />
      <GlobalProvider>
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </GlobalProvider>
    </div>
  </>

}

export default App;
