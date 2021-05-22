import React, { useState } from "react";
import { Container } from "../Container";
import DataCard from "../DataCard";
import { SimpleButton } from "../SimpleButton";
import { AiFillEye } from "react-icons/ai";
import styled from "styled-components";
import Modal from "../Modal";
import { ShowDetails } from "../ShowDetails";
import { AiFillEyeInvisible } from "react-icons/ai";
const Icon = styled.span`
  margin-right: 0.3rem;
`;

function CardDetails() {
  document.title = "Card Details";
  const [showModal, setShowModal] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  const handleModal = (state) => {
    if (!showAccount) {
      setShowModal(state);
    } else {
      setShowAccount(false);
    }
  };
  return (
    <Container>
      <Container mb="1rem" borderRadius="1rem" overflow="hidden">
        <DataCard item={{ label: "Card Holder Name", value: "Yash Patel" }} />
        <DataCard
          item={{
            label: "Card Number",
            value: !showAccount ? "**** **** **** 4242" : "4242 4242 4242 4242",
          }}
        />
        <DataCard
          item={{
            label: "Valid Through",
            value: !showAccount ? "*****" : "42/42",
          }}
        />
        <DataCard
          item={{ label: "CVC", value: !showAccount ? "***" : "424" }}
        />
      </Container>
      <SimpleButton onClick={() => handleModal(true)}>
        <Icon>{!showAccount ? <AiFillEye /> : <AiFillEyeInvisible />}</Icon>
        {!showAccount ? "Show Info" : "Hide Info"}
      </SimpleButton>
      <Modal isOpen={showModal} handleClose={() => handleModal(false)}>
        <ShowDetails
          handleClose={() => handleModal(false)}
          setShowAccount={setShowAccount}
        />
      </Modal>
    </Container>
  );
}

export default CardDetails;
