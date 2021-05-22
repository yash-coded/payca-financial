import React from "react";
import { Details as AccountDetails } from "../Rewards/RewardDetails";
import { useSelector } from "react-redux";
function Details() {
  document.title = "Details";
  const {
    creditAccount: { currentBalanceDetails, totalBalanceDetails },
  } = useSelector((state) => state.accounts);
  return (
    <div>
      <AccountDetails
        bg="white"
        padding="1rem"
        currentBalanceDetails={currentBalanceDetails}
        totalBalanceDetails={totalBalanceDetails}
      />
    </div>
  );
}

export default Details;
