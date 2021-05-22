import AccountDetails from "../../components/Accounts";
import { Container } from "../../components/Container";

function Accounts() {
  document.title = "Welcome";
  return (
    <Container width="100%" mt={["1rem", "1rem", "1rem", "3rem"]}>
      <AccountDetails />
    </Container>
  );
}

export default Accounts;
