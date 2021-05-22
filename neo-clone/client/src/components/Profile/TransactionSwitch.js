import { useState } from "react";
import Switch from "../Switch";
function TransactionSwitch() {
  const [transactions, setTransactions] = useState(true);

  return (
    <div>
      <Switch state={transactions} toggleState={setTransactions} />
    </div>
  );
}

export default TransactionSwitch;
