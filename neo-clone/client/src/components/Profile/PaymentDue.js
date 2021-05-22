import Select from "../Select";
import { useSelector, useDispatch } from "react-redux";
import { setPaymentDue } from "../../redux/accounts/account";
import { Toast, invokeToast } from "../Toast";

function PaymentDue() {
  const dispatch = useDispatch();
  const {
    creditAccount: { paymentDue },
  } = useSelector((state) => state.accounts);
  const options = [
    { label: "1 Day", value: "1day" },
    { label: "5 Days", value: "5days" },
    { label: "7 Days", value: "7days" },
    { label: "14 Days", value: "14days" },
  ];

  const onChange = (val) => {
    dispatch(setPaymentDue(val));

    invokeToast(`Email Notifications Updated`);
  };
  return (
    <div>
      <Select
        placeholder="Amount of days.."
        options={options}
        onChange={onChange}
        defaultValue={paymentDue}
      />
      <Toast />
    </div>
  );
}

export default PaymentDue;
