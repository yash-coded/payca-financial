import React from "react";
import styled from "styled-components";
import { WiStars } from "react-icons/wi";
import { Container } from "../Container";
import { Text } from "../Text";
import AccountCard from "./AccountCard";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
export const RewardButton = styled.button`
  border: none;
  background-color: #051c2c;
  color: white;
  /* padding: 0.8rem 0.5rem; */
  padding: 0.1rem 1rem;
  border-radius: 5rem;
  font-size: 1rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  :hover {
    background-color: #1e3342;
  }
  cursor: pointer;
`;

const RewardsIcon = styled.span`
  font-size: 2.1rem;
  margin-top: 6px;
  margin-right: 0.4rem;
`;

function Index() {
  const history = useHistory();
  const { savingsAccount, creditAccount, rewardsAccount } = useSelector(
    (state) => state.accounts
  );
  const handleClick = () => {
    history.push("/accounts/rewards/wallet");
  };

  return (
    <Container
      ml={["1rem", "1rem", "2rem", "6rem"]}
      mr={["1rem", "1rem", "1rem", "2rem"]}
      mb="8rem"
    >
      <Container
        display="flex"
        alignItems="center"
        justifyContent={["flex-start", "flex-start", "flex-start", "flex-end"]}
      >
        <Text
          mr="1rem"
          display={["none", "none", "none", "block"]}
          color="#051c2c"
        >
          Rewards Balance
        </Text>
        <RewardButton onClick={handleClick}>
          <RewardsIcon>
            <WiStars />
          </RewardsIcon>{" "}
          {"$" + rewardsAccount.available}
        </RewardButton>
      </Container>

      <Text
        fontSize="1.5rem"
        mt={["1rem", "1rem", "1rem", "0rem"]}
        color="#051c2c"
        fontWeight="bold"
      >
        Welcome
      </Text>
      <Container
        display={"grid"}
        gridGap="1rem"
        gridTemplateColumns={["1fr ", "1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]}
        mt={["1rem", "1rem", "1rem", "2rem"]}
      >
        <AccountCard
          type="Credit"
          balance={creditAccount.available}
          label={`${"$" + creditAccount.due}  due in 14 days`}
          paid={false}
          light
          // onClick={handleAccount}
        />
        <AccountCard
          type="Savings"
          balance={savingsAccount.available}
          label="No actions required"
          paid={true}
          light
          // onClick={handleAccount}
        />
      </Container>
    </Container>
  );
}

export default Index;
