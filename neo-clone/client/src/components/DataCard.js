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
  inline,
}) {
  return (
    <Container my={marginY} background="white" p="1rem">
      <Container
        background="white"
        // p="1rem"
        display="flex"
        alignItems="center"
        justifyContent={inline ? "" : "space-between"}
        py={big ? "1.1rem" : ""}
        onClick={onClick}
        style={{ cursor: onClick ? "pointer" : "" }}
      >
        <Text mr={inline ? "1.5rem" : ""} color={dark ? "black" : "#8f9aa0"}>
          {item.label}
        </Text>

        <Container color="#051c2c">
          {item.value === "component" ? flexComponent : item.value}
        </Container>
      </Container>
      {blockComponent && <Container mt="0.5rem">{blockComponent}</Container>}
    </Container>
  );
}

export const ResponsiveDataCard = ({ first, second, third }) => {
  return (
    <Container
      background={["transparent", "transparent", "white", "white"]}
      display={["block", "block", "flex", "flex"]}
      justifyContent="space-between"
      alignItems="center"
      p={["0", "0", "1rem", "1rem"]}
      mb="0.2rem"
    >
      <Text
        px={["1rem", "1rem", "0", "0"]}
        py={["0.5rem", "0.5rem", "0", "0"]}
        color="#697780"
      >
        {first}
      </Text>
      <Container
        background={["white", "white", null, null]}
        py={["1.5rem", "1.5rem", "0", "0"]}
        px={["1rem", "1rem", "0", "0"]}
        color="#051c2c"
      >
        {second}
      </Container>
      <Container
        px={["1rem", "1rem", "0", "0"]}
        pt={["0.5rem", "0.5rem", "0", "0"]}
      >
        {third}
      </Container>
    </Container>
  );
};

export default DataCard;
