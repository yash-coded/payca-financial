import React, { useState } from "react";
import { Container } from "../Container";
import { Text } from "../Text";
import PinInput from "react-pin-input";
import { ShowDetails } from "../ShowDetails";
import styled from "styled-components";
import Modal from "../Modal";
import { Button } from "../Button";
export const GhostButton = styled.button`
  cursor: pointer;
  border: none;
  background: #edeeef;
  color: #051c2c;
  :hover {
    background: #e4e5e6;
  }
  padding: 0.5rem 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.7rem;
`;

function ViewPinModal({ handleClose }) {
  const [showPin, setShowPin] = useState(false);
  console.log(showPin);
  const props = {
    inputStyle: {
      borderTopRightRadius: "1rem",
      borderTopLeftRadius: "1rem",
      background: "#EEEFEF",
      height: "3.5rem",
      borderBottom: "1px solid black",
      border: "none",
      padding: 0,
      fontSize: "1rem",
      marginRight: "10px",
    },
    style: {},
    inputStyleInvalid: {},
  };
  return (
    <Container p="1rem">
      <Text fontWeight="bold" fontSize="1.5rem">
        View Your Pin
      </Text>
      <Text my="1rem">
        This is your 4-digit PIN you've set for purchases with your card's chip.
      </Text>

      <PinInput
        initialValue={"1234"}
        secret={showPin ? false : true}
        inputMode={"numeric"}
        type={showPin ? "custom" : "string"}
        length={4}
        {...props}
      />
      <Container my="1rem">
        <GhostButton onClick={() => setShowPin((val) => !val)}>
          {!showPin ? " Show Pin" : "Hide Pin"}
        </GhostButton>
      </Container>
      <Button
        width="100%"
        mx="auto"
        py="0.8rem"
        px="1rem"
        borderRadius="0.9rem"
        fontSize="1rem"
        onClick={handleClose}
      >
        Ok
      </Button>
    </Container>
  );
}

export default ViewPinModal;
