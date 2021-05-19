import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Switch from "../Switch";
import { Container } from "../Container";
import { Text } from "../Text";
import DataCard from "../DataCard";
import { SimpleButton } from "../SimpleButton";
import { freezeCard } from "../../redux/accounts/account";
import Modal from "../Modal";
import ViewPin from "./ViewPinModal";
import ChangePin from "./ChangePin";
function Settings() {
  // const [isToggled, setIsToggled] = useState(false);

  const dispatch = useDispatch();
  const { freeze } = useSelector((state) => state.accounts);
  const [onlineTransactions, setOnlineTransactions] = useState(true);
  const [offlineTransactions, setOfflineTransactions] = useState(true);
  const [withdrawals, setWithdrawals] = useState(true);
  const [pinModal, setPinModal] = useState(false);
  const [changePinModal, setChangePinModal] = useState(false);

  const handleModal = (state, key) => {
    if (key === "view") {
      setPinModal(state);
    } else if (key === "change") {
      setChangePinModal(state);
    }
  };

  const handleFreeze = () => {
    dispatch(freezeCard(freeze));
  };
  return (
    <Container>
      <Text ml="1rem" fontWeight="bold">
        Card Setitngs
      </Text>
      <Container my="1rem">
        <DataCard
          big
          dark
          item={{
            label: !freeze ? "Card is Active" : "Card is Frozen",
            value: "component",
          }}
          marginY={"0.5rem"}
          flexComponent={
            <SimpleButton onClick={handleFreeze}>
              {!freeze ? "Freeze" : "Unfreeze"}
            </SimpleButton>
          }
        />
        <DataCard
          big
          dark
          item={{
            label: "Online Transactions",
            value: "component",
          }}
          marginY={"0.5rem"}
          flexComponent={
            <Switch
              state={onlineTransactions}
              toggleState={setOnlineTransactions}
            />
          }
        />
        <DataCard
          big
          dark
          item={{
            label: "Tap, chip, and swipe transactions",
            value: "component",
          }}
          marginY={"0.5rem"}
          flexComponent={
            <Switch
              state={offlineTransactions}
              toggleState={setOfflineTransactions}
            />
          }
        />
        <DataCard
          big
          dark
          item={{
            label: "ATM cash withdrawals",
            value: "component",
          }}
          marginY={"0.5rem"}
          flexComponent={
            <Switch state={withdrawals} toggleState={setWithdrawals} />
          }
        />
      </Container>
      <Text ml="1rem" my="1.5rem" fontWeight="bold">
        Pin & Security
      </Text>
      <Container>
        <DataCard
          big
          onClick={() => handleModal(true, "view")}
          dark
          marginY={"0.5rem"}
          item={{
            label: "View Pin",
          }}
        />
        <Modal isOpen={pinModal} handleClose={() => handleModal(false, "view")}>
          <ViewPin handleClose={() => handleModal(false, "view")} />
        </Modal>
        <DataCard
          big
          onClick={() => handleModal(true, "change")}
          dark
          marginY={"0.5rem"}
          item={{
            label: "Change Pin",
          }}
        />
        <Modal
          isOpen={changePinModal}
          handleClose={() => handleModal(false, "change")}
        >
          <ChangePin handleClose={() => handleModal(false, "change")} />
        </Modal>
      </Container>
    </Container>
  );
}

export default Settings;
