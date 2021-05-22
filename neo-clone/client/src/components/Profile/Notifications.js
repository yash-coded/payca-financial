import { Container } from "../Container";
import DataCard from "../DataCard";
import TransactionSwitch from "./TransactionSwitch";
import PaymentDue from "./PaymentDue";
import CreditLimit from "./CreditLimit";
function Notifications() {
  const data = [
    {
      label: "Transactions",
      value: "component",
      flexComponent: <TransactionSwitch />,
    },
    {
      label: "Payment Received",
      value: "component",
      flexComponent: <TransactionSwitch />,
    },
    {
      label: "Credit payment due in",
      value: "component",
      flexComponent: null,
      blockComponent: <PaymentDue />,
    },
    {
      label: "Credit limit approaching",
      value: "component",
      flexComponent: null,
      blockComponent: <CreditLimit />,
    },
  ];

  return (
    <Container>
      {data.map((item, i) => (
        <DataCard
          key={i}
          marginY="0.2rem"
          item={{ label: item.label, value: item.value }}
          flexComponent={item?.flexComponent}
          blockComponent={item?.blockComponent}
        />
      ))}
    </Container>
  );
}

export default Notifications;
