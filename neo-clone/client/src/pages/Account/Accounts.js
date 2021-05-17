import React from "react";
import AccountDetails from "../../components/Accounts";
import { Container } from "../../components/Container";
import { Route, Switch } from "react-router-dom";
import Rewards from "../Account/Rewards";

function Accounts() {
  return (
    <Container width="100%" mt={["1rem", "1rem", "1rem", "3rem"]}>
      <AccountDetails />
    </Container>
  );
}

export default Accounts;
