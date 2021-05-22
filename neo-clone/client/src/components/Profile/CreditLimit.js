import Select from "../Select";
import { useSelector, useDispatch } from "react-redux";
import { setCreditLimit } from "../../redux/accounts/account";
import { Toast, invokeToast } from "../Toast";

function CreditLimit() {
  const dispatch = useDispatch();
  const {
    creditAccount: { creditLimit },
  } = useSelector((state) => state.accounts);
  const options = [
    { label: "$100", value: "100" },
    { label: "$250", value: "250" },
    { label: "$500", value: "500" },
    { label: "$1000", value: "1000" },
  ];

  const onChange = (val) => {
    dispatch(setCreditLimit(val));

    invokeToast(`Email Notifications Updated`);
  };
  return (
    <div>
      {" "}
      <Select
        placeholder="Amount"
        options={options}
        onChange={onChange}
        defaultValue={creditLimit}
      />
      <Toast />
    </div>
  );
}

export default CreditLimit;
