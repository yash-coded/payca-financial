import { useState, useEffect } from "react";
import { Container } from "../../components/Container";
import { Text } from "../../components/Text";
import { useSelector, useDispatch } from "react-redux";
import TransactionDetails from "../../components/Accounts/Rewards/TransactionDetails";
import RewardDetails from "../../components/Accounts/Rewards/RewardDetails";
import { addCrumbs } from "../../redux/accounts/account";
const navLinks = [
  {
    label: "Transactions",
    component: <TransactionDetails />,
  },
  {
    label: "Details",
    component: <RewardDetails />,
  },
];

function Balance() {
  document.title = "Transactions";
  const { rewardsAccount } = useSelector((state) => state.accounts);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addCrumbs({
        label: "Rewards Cash",
        path: "/accounts/rewards/wallet/balance/transaction",
      })
    );
  }, []);

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
      <TabNav tabs={navLinks} setIndex={setIndex} />
      {navLinks[index].component}
    </Container>
  );
}

export const TabNav = ({ tabs, setIndex }) => {
  const [active, setActive] = useState(0);

  const handleClick = (link, index) => {
    setActive(index);
    setIndex(index);
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
          key={i}
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
