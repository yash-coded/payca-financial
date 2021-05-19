import React, { useState } from "react";
import { Container } from "../../components/Container";
import { Text } from "../../components/Text";
import { useSelector } from "react-redux";
import { useHistory, Route, Switch } from "react-router-dom";
import TransactionDetails from "../../components/Accounts/Rewards/TransactionDetails";
import RewardDetails from "../../components/Accounts/Rewards/RewardDetails";
const navLinks = [
  {
    label: "Transactions",
    path: "/accounts/rewards/wallet/balance/transaction",
  },
  {
    label: "Details",
    path: "/accounts/rewards/wallet/balance/details",
  },
];

function Balance() {
  const { rewardsAccount } = useSelector((state) => state.accounts);

  return (
    <Container>
      <Container
        px={["1rem", "1rem", "2rem", "3rem"]}
        pt="2rem"
        height="10rem"
        background="#051C2C"
      >
        <Text fontSize="2rem" color="white">
          ${rewardsAccount.available}
        </Text>
        <Text fontSize="0.9rem" mt="1rem" color="#D8D9DB">
          ${rewardsAccount.available} available
        </Text>
      </Container>
      <TabNav tabs={navLinks} />
      <Switch>
        <Route path={`/accounts/rewards/wallet/balance/transaction`}>
          <TransactionDetails />
        </Route>
        <Route path={`/accounts/rewards/wallet/balance/details`}>
          <RewardDetails />
        </Route>
      </Switch>
    </Container>
  );
}

export const TabNav = ({ tabs }) => {
  const [active, setActive] = useState(0);
  const history = useHistory();
  const handleClick = (link, index) => {
    setActive(index);
    history.push(link.path);
  };
  return (
    <Container
      display="flex"
      mx={["1rem", "1rem", "2rem", "3rem"]}
      mt="3rem"
      width={["inherit", "30rem"]}
      borderBottom="1px solid #d3d3d3"
    >
      {tabs.map((link, i) => (
        <Text
          onClick={() => handleClick(link, i)}
          mr="2rem"
          fontSize="1rem"
          fontWeight="600"
          color={i === active ? "#006EFF" : "#697780"}
          borderBottom={i === active ? "2px solid #006EFF" : ""}
          style={{ cursor: "pointer" }}
          pb="1rem"
        >
          {link.label}
        </Text>
      ))}
    </Container>
  );
};

export default Balance;
