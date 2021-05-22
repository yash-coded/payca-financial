import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "../../../components/Container";
import { Text } from "../../../components/Text";
import DataCard from "../../DataCard";
import Modal from "../../Modal";
import { SimpleButton } from "../../SimpleButton";

import { ShowDetails } from "../../ShowDetails";

function Account() {
  const {
    creditAccount: { accountDetails },
  } = useSelector((state) => state.accounts);
  return (
    <Container>
      {accountDetails.map((item, i) => (
        <Container key={i}>
          <DataCard item={item} />
        </Container>
      ))}
      <DataCard
        item={{ label: "Account Number", value: "component" }}
        flexComponent={<AccountDetailsToggle />}
      />
    </Container>
  );
}

const AccountDetailsToggle = () => {
  const [show, setShow] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const handleModal = (toggle) => {
    if (!showAccount) {
      setShow(toggle);
    } else {
      setShowAccount(false);
    }
  };

  return (
    <Container display="flex">
      <SimpleButton onClick={() => handleModal(true)}>
        {!showAccount ? "View" : "Hide"}
      </SimpleButton>
      <Modal isOpen={show} handleClose={() => setShow(false)}>
        <ShowDetails
          setShowAccount={setShowAccount}
          handleClose={() => setShow(false)}
        />
      </Modal>
      <Text ml="0.5rem">
        {!showAccount && <span style={{ marginRight: "0.2rem" }}>****</span>}
        {showAccount ? "4242 4242 4242 4242" : "4242"}
      </Text>
    </Container>
  );
};

export default Account;
