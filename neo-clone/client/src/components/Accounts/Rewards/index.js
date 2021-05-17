import React, { useEffect } from "react";
import { Container } from "../../Container";
import { Text } from "../../Text";
import AccountCard from "../AccountCard";
import { GoChevronRight } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { addCrumbs, resetCrumbs } from "../../../redux/accounts/account";
import { useHistory } from "react-router-dom";

function Index() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { rewardsAccount } = useSelector((state) => state.accounts);

  useEffect(() => {
    dispatch(resetCrumbs());
  }, []);

  const handleClick = () => {
    dispatch(
      addCrumbs({
        label: "Rewards Cash",
        path: "/accounts/rewards/wallet/balance/transaction",
      })
    );
    history.push("/accounts/rewards/wallet/balance/transaction");
  };
  return (
    <Container px={["1rem", "1rem", "2rem", "3rem"]} my="3rem">
      <Text
        color="#051C2C"
        fontSize="1.6rem"
        fontWeight="bold"
        letterSpacing="1px"
      >
        Wallet
      </Text>
      <Container>
        <AccountCard
          onClick={handleClick}
          type="Rewards Cash"
          balance={rewardsAccount.available}
          label={`${"$" + rewardsAccount.available} available`}
          paid={true}
          icon={<GoChevronRight />}
        />
      </Container>
    </Container>
  );
}

export default Index;
