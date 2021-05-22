import { useState } from "react";
import { Container } from "../Container";

import { SimpleButton } from "../SimpleButton";

import { Text } from "../Text";
import { useDispatch } from "react-redux";
import { InputBox } from "../Input";
import { Button } from "../Button";
import { setPhoneNumber } from "../../redux/auth";
import Modal from "../Modal";

function EditPhone() {
  const [showModal, setShowModal] = useState(false);
  const [newNumber, setNewNumber] = useState(null);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewNumber(e.target.value);
  };
  const handleModal = (state) => {
    setShowModal(state);
  };
  const handleAdd = () => {
    if (newNumber) {
      dispatch(setPhoneNumber(newNumber));
      handleModal(false);
    } else {
      setErrors("Enter Number");
    }
  };
  const handleBlur = () => {
    if (!newNumber) {
      setErrors("Enter Number");
    } else {
      return;
    }
  };
  return (
    <Container>
      <SimpleButton onClick={() => handleModal(true)}>Edit</SimpleButton>
      <Modal isOpen={showModal} handleClose={() => handleModal(false)}>
        <Container p="1rem">
          <Text
            fontSize="1.3rem"
            textAlign="center"
            fontWeight="bold"
            mb="1rem"
          >
            What’s your new number?
          </Text>

          <InputBox
            py="1rem"
            fontSize="1rem"
            px="1rem"
            width={"90%"}
            value={newNumber}
            placeholder={errors ? errors : "Mobile Number"}
            display="block"
            my="1.5rem"
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
            Update
          </Button>
        </Container>
      </Modal>
    </Container>
  );
}

export default EditPhone;
