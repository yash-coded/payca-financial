import React from "react";
import { Container } from "./Container";
import { Text } from "./Text";
function DataCard({
  marginY,
  item,
  flexComponent,
  blockComponent,
  dark,
  onClick,
  big,
}) {
  return (
    <Container
      background="white"
      p="1rem"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      my={marginY}
      py={big ? "1.5rem" : ""}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "" }}
    >
      <Text color={dark ? "black" : "#8f9aa0"}>{item.label}</Text>
      <Container color="#051c2c">
        {item.value === "component" ? flexComponent : item.value}
      </Container>
    </Container>
  );
}

export default DataCard;
