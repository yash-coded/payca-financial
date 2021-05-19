import React from "react";
import { Container } from "../Container";
import { Text } from "../Text";
import PinInput from "react-pin-input";
import { Button } from "../Button";
function ChangePin({ handleClose }) {
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
        Enter new Pin
      </Text>
      <Text my="1rem">
        Set a new 4-digit PIN for purchases with your card's chip
      </Text>

      <PinInput inputMode={"numeric"} length={4} {...props} />
      <Container mt="1rem"></Container>
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

export default ChangePin;
