import React from "react";
import { Container } from "../Container";
import { Text } from "../Text";
import { CgCreditCard } from "react-icons/cg";
import { BsCheckCircle } from "react-icons/bs";
function AccountCard({ type, balance, label, paid, light, icon, onClick }) {
  return (
    <Container
      px={["1.5rem"]}
      width={["15rem", "15rem", "17rem", "17rem"]}
      py="1.5rem"
      mt="1rem"
      display="inline-block"
      background={light ? "#FFFFFF" : "#122737"}
      borderRadius="1.5rem"
      boxShadow="5px 5px 25px rgba(0,0,0,0.1)"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <Container display="flex" justifyContent="space-between">
        <Text color={light ? "#122737" : "white"} mb="0.5rem">
          {type}
        </Text>
        {icon && (
          <Text color={light ? "#122737" : "white"} mb="0.5rem">
            {icon}
          </Text>
        )}
      </Container>
      <Text
        mb="1.2rem"
        fontSize="1.625rem"
        color={light ? "#122737" : "white"}
        fontWeight="bold"
      >
        ${balance}
      </Text>
      <Container display="flex">
        <Text color={light ? "#122737" : "white"} mr="0.7rem">
          {paid ? <BsCheckCircle /> : <CgCreditCard />}
        </Text>

        <Text color={light ? "#939393" : "white"}>{label}</Text>
      </Container>
    </Container>
  );
}

export default AccountCard;
