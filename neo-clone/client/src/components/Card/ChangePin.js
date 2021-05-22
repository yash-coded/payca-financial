import React, { useState } from "react";
import { Container } from "../Container";
import { Text } from "../Text";
import PinInput from "react-pin-input";
import { Button } from "../Button";
import { useDispatch } from "react-redux";
import { setPin } from "../../redux/accounts/account";
function ChangePin({ handleClose }) {
  const dispatch = useDispatch();

  const [newPin, setNewPin] = useState("");
  const [errors, setErrors] = useState(null);
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

  const handlePin = () => {
    if (newPin) {
      dispatch(setPin(newPin));
      handleClose();
    } else {
      setErrors("Enter a 4 Digit Pin");
    }
  };

  return (
    <Container p="1rem">
      <Text fontWeight="bold" fontSize="1.5rem">
        Enter new Pin
      </Text>
      <Text my="1rem">
        Set a new 4-digit PIN for purchases with your card's chip
      </Text>

      <PinInput
        onChange={(e) => setNewPin(e)}
        inputMode={"numeric"}
        type="numeric"
        length={4}
        {...props}
      />
      {errors && (
        <Text my="0.5rem" color="red" fontSize="0.8rem">
          {errors}
        </Text>
      )}
      <Button
        width="100%"
        mx="auto"
        py="0.8rem"
        px="1rem"
        mt="1rem"
        borderRadius="0.9rem"
        fontSize="1rem"
        onClick={handlePin}
      >
        Ok
      </Button>
    </Container>
  );
}

export default ChangePin;
