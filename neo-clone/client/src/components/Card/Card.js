import React, { useState } from "react";
import { Container } from "../Container";
import { Text } from "../Text";
import { SiMastercard } from "react-icons/si";
import styled from "styled-components";
import { TabNav } from "../TabNav";
import CardDetails from "./CardDetails";
import Settings from "./Settings";
import Agreements from "./Agreements";
const Highlight = styled.div`
  right: -100px;
  transform: rotate(-90deg);
  position: absolute;
  height: 100%;
  width: 100%;
  background: #fafbfb;
`;

const links = [
  {
    label: "Card Details",
    component: <CardDetails />,
  },
  {
    label: "Settings",
    component: <Settings />,
  },
  {
    label: "Agreements",
    component: <Agreements />,
  },
];

const CardUi = () => {
  return (
    <Container
      background="white"
      height="8rem"
      width="14rem"
      boxShadow="5px 5px 25px rgba(0,0,0,0.1)"
      borderRadius="0.5rem"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      px="1rem"
      pt="1rem"
      pb="0.3rem"
      position="relative"
      overflow="hidden"
    >
      <Text
        fontFamily="Abril Fatface"
        fontSize={"2.2rem"}
        backgroundColor="white"
        color="#B99760"
        letterSpacing="0.1rem"
      >
        PayCA
      </Text>
      <Text color="#EB001B" textAlign="right" fontSize="2rem" zIndex="10">
        <SiMastercard />
      </Text>
      <Highlight
        right="0"
        position="absolute"
        height="10rem"
        width="10rem"
        background="#FAFBFB"
      ></Highlight>
    </Container>
  );
};

function Card() {
  const [index, setIndex] = useState(0);
  return (
    <Container
      ml={["1rem", "1rem", "2rem", "6rem"]}
      mr={["1rem", "1rem", "1rem", "2rem"]}
      mt={["1rem", "1rem", "1rem", "3rem"]}
    >
      <CardUi />
      <Container mt="3rem">
        <TabNav tabs={links} setIndex={setIndex} />
        <Container mt="1.5rem">{links[index].component}</Container>
      </Container>
    </Container>
  );
}

export default Card;
