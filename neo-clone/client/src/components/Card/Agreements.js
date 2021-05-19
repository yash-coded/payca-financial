import React from "react";
import { Container } from "../Container";
import DataCard from "../DataCard";
import { Text } from "../Text";
import { GoLinkExternal } from "react-icons/go";
function Agreements() {
  return (
    <Container>
      <DataCard
        dark
        big
        onClick
        marginY="0.3rem"
        item={{ label: "Cardholder Agreement", value: "component" }}
        flexComponent={<GoLinkExternal />}
      />
      <DataCard
        dark
        big
        onClick
        item={{
          label: "Discolsure Statement and Fee Schedule",
          value: "component",
        }}
        flexComponent={<GoLinkExternal />}
      />
    </Container>
  );
}

export default Agreements;
