import { useState } from "react";
import { Container } from "../Container";
import { Text } from "../Text";
import { Button } from "../Button";
import DataCard from "../DataCard";
import { useDispatch, useSelector } from "react-redux";
import { addPromotion } from "../../redux/accounts/account";
import { InputBox } from "../Input";
import Modal from "../Modal";
function Promotions() {
  const [showModal, setShowModal] = useState(false);
  const [code, setCode] = useState(null);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const {
    rewardsAccount: { promotions },
  } = useSelector((state) => state.accounts);

  const handleModal = (state) => {
    setShowModal(state);
  };
  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleAddCode = () => {
    if (code) {
      dispatch(addPromotion(code));
      handleModal(false);
    } else {
      setErrors("Enter Code");
    }
  };

  const handleBlur = () => {
    if (!code) {
      setErrors("Enter Code");
    } else {
      return;
    }
  };
  return (
    <Container>
      <Container
        justifyContent="space-between"
        alignItems="center"
        display="flex"
        mx="1rem"
      >
        <Text>
          {promotions.length === 0
            ? "No Promotions"
            : `${promotions.length} Promotion${
                promotions.length === 1 ? "" : "s"
              } Available`}
        </Text>
        <Button
          px="1rem"
          py="0.8rem"
          fontSize="0.9rem"
          borderRadius="1rem"
          fontWeight="bold"
          onClick={() => handleModal(true)}
        >
          Add Code
        </Button>
        <Modal isOpen={showModal} handleClose={() => handleModal(false)}>
          <Container p="1rem">
            <Text textAlign="center" fontSize="1.5rem" fontWeight="bold">
              Have a code?
            </Text>
            <Container
              display="flex"
              flexDirection="column"
              alignItems="center"
              my="1rem"
            >
              <InputBox
                placeholder={errors ? errors : "Code"}
                px="1rem"
                py="1rem"
                fontSize="1rem"
                mb="1rem"
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors ? true : false}
              />
              <Button
                px="1rem"
                width="10rem"
                py="0.8rem"
                fontSize="0.9rem"
                borderRadius="1rem"
                fontWeight="bold"
                onClick={() => handleAddCode()}
              >
                Apply
              </Button>
            </Container>
          </Container>
        </Modal>
      </Container>
      <Container mt="2rem">
        {promotions.map((item, i) => (
          <DataCard
            key={i}
            marginY="0.2rem"
            dark
            mb="8rem"
            item={{ label: item }}
          />
        ))}
      </Container>
    </Container>
  );
}

export default Promotions;
