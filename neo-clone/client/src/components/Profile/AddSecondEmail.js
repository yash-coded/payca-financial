import React, { useState } from "react";
import { Container } from "../Container";

import { SimpleButton } from "../SimpleButton";
import { HiPlusCircle } from "react-icons/hi";
import { Text } from "../Text";
import { useDispatch, useSelector } from "react-redux";
import { InputBox } from "../Input";
import { Button } from "../Button";
import { setSecondaryEmail } from "../../redux/auth";
import Modal from "../Modal";

const SecondaryEmail = () => {
  const dispatch = useDispatch();
  const { secondaryEmail } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false);
  const [secondEmail, setSecondEmail] = useState("");
  const [errors, setErrors] = useState(null);
  const handleModal = (state) => {
    setShowModal(state);
  };

  const handleChange = (e) => {
    setSecondEmail(e.target.value);
  };

  const handleAdd = () => {
    if (secondEmail) {
      dispatch(setSecondaryEmail(secondEmail));
      handleModal(false);
    } else {
      setErrors("Enter Email");
    }
  };

  const handleBlur = () => {
    if (!secondEmail) {
      setErrors("Enter Email");
    } else {
      return;
    }
  };

  return (
    <>
      {!secondaryEmail ? (
        <>
          <SimpleButton onClick={() => handleModal(true)}>
            <Text display="inline" mr="0.5rem">
              <HiPlusCircle />
            </Text>{" "}
            Add Secondary Email
          </SimpleButton>
          <Modal isOpen={showModal} handleClose={() => handleModal(false)}>
            <Container p="1rem">
              <Text
                fontSize="1.3rem"
                textAlign="center"
                fontWeight="bold"
                mb="1rem"
              >
                Add a secondary email
              </Text>
              <Text>
                Use the email below as an added layer of security or switch it
                to your primary email.
              </Text>
              <InputBox
                py="1rem"
                fontSize="1rem"
                px="1rem"
                value={secondEmail}
                width={"90%"}
                display="block"
                placeholder={errors ? errors : "Secondary Email"}
                my="1.5rem"
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors ? true : false}
              />

              <Button
                width="100%"
                py="0.8rem"
                px="1rem"
                borderRadius="0.9rem"
                fontSize="1rem"
                mb="1.5rem"
                onClick={handleAdd}
              >
                Add
              </Button>
            </Container>
          </Modal>
        </>
      ) : (
        <Text>{secondaryEmail}</Text>
      )}
    </>
  );
};

export default SecondaryEmail;
