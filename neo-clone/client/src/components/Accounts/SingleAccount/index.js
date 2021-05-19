import React, { useState } from "react";
import { Container } from "../../Container";
import { Text } from "../../Text";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RiCheckboxCircleFill } from "react-icons/ri";
import Details from "./Details";
import Transactions from "./Transactions";
import Account from "./Account";
import Statements from "./Statements";
import Modal from "../../Modal";
import { TabNav } from "../../TabNav";
const Pay = styled.button`
  border: none;
  background: #edeeef;
  padding: 0.5rem 0.7rem;
  border-radius: 0.4rem;
  cursor: pointer;
  font-size: 0.9rem;
  :hover {
    background: #e4e5e6;
  }
`;

const links = [
  {
    label: "Transactions",
    component: <Transactions />,
  },
  {
    label: "Details",
    component: <Details />,
  },
  {
    label: "Account",
    component: <Account />,
  },
  {
    label: "Statements",
    component: <Statements />,
  },
];

const AccountDetails = ({ type }) => {
  const { creditAccount, savingsAccount } = useSelector(
    (state) => state.accounts
  );

  const [showModal, setShowModal] = useState(false);

  const handleModal = (state) => {
    setShowModal(state);
  };

  return (
    <Container>
      <Text letterSpacing="0.07rem" fontSize="0.9rem">
        {type === "credit" ? "You've Borrowed" : "You have"}
      </Text>
      <Text
        fontWeight="bold"
        letterSpacing="0.07rem"
        fontSize="2rem"
        my="0.5rem"
        color="#051C2C"
      >
        {type === "credit"
          ? "$" + creditAccount.due
          : "$" + savingsAccount.available}
      </Text>
      <Text fontSize="0.9rem" letterSpacing="0.04rem" color="#7c7c7c">
        {type === "credit"
          ? "$" + creditAccount.available + " available"
          : "No Actions Required"}
      </Text>

      {type === "credit" && (
        <Container
          width="20rem"
          border="1px solid #a4a4a5"
          p="0.7rem"
          mt="3rem"
          borderRadius="0.5rem"
        >
          <Container
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Container display="flex">
              {creditAccount.due === 0 && (
                <Container mr="0.7rem" color="#697780">
                  <RiCheckboxCircleFill />
                </Container>
              )}
              <Text color="#697780">
                {creditAccount.due > 0
                  ? `${"$" + creditAccount.due} due in 14 days`
                  : "No payments Due"}
              </Text>
            </Container>
            <Pay onClick={() => handleModal(true)}>Pay</Pay>
            <Modal isOpen={showModal} handleClose={() => handleModal(false)}>
              <ModalContent />
            </Modal>
          </Container>
        </Container>
      )}
    </Container>
  );
};

const ModalContent = () => {
  const {
    creditAccount: { due },
  } = useSelector((state) => state.accounts);
  const PaymentCard = ({ label, subtitle, subtitleColor, value }) => {
    return (
      <Container
        background="#EDEEEF"
        borderRadius="1rem"
        px="1.5rem"
        py="1rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        my="1rem"
      >
        <Container>
          <Text>{label}</Text>
          <Text mt="0.5rem" fontSize="0.9rem" color={subtitleColor}>
            {subtitle}
          </Text>
        </Container>
        <Container>
          <Text fontWeight="bold">${value}</Text>
        </Container>
      </Container>
    );
  };

  return (
    <Container p="1rem">
      <Text fontWeight="bold" fontSize="1.5rem" textAlign="center">
        How much do you want to pay?
      </Text>
      <Container>
        <PaymentCard
          label="Total Balance"
          subtitle="Avoid interest Charges"
          value={due}
          subtitleColor="#00c7b1"
        />
        <PaymentCard
          label="Statement Balance"
          subtitle="Avoid interest Charges"
          value={16.85}
          subtitleColor="#00c7b1"
        />
        <PaymentCard
          label="Minimum Payment"
          subtitle="Avoid impacting your credit score"
          value={12.06}
          subtitleColor="#7A868E"
        />
        <Text>
          You can pay off your bill using your bank’s bill pay feature. Look up
          PayCA Financial as a payee, then enter your 16 digit credit card
          number as your account number.
        </Text>
      </Container>
    </Container>
  );
};

function Index({ type }) {
  const [index, setIndex] = useState(0);
  return (
    <Container mb="8rem" mx={["1rem", "1rem", "2rem", "6rem"]} mt="4rem">
      <AccountDetails type={type} />
      <Container mt="3rem">
        <TabNav tabs={links} setIndex={setIndex} />
      </Container>
      <Container mt="2rem">{links[index].component}</Container>
    </Container>
  );
}

export default Index;
