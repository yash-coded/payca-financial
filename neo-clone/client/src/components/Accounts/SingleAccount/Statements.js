import React from "react";
import { Container } from "../../../components/Container";
import { Text } from "../../../components/Text";
import dayjs from "dayjs";

const generateMonths = () => {
  const months = [];
  for (let i = 0; i < 5; i++) {
    const month = dayjs().subtract(i, "month");
    const label = dayjs(month).format(`MMMM DD, YYYY`);
    months.push(label);
  }
  return months;
};

function Statements() {
  document.title = "Statements";
  return (
    <Container background="white">
      {generateMonths().map((month, i) => (
        <Container
          key={i}
          p="1.3rem"
          style={{ cursor: "pointer" }}
          borderBottom="1px solid #828D95"
        >
          <Text>{month}</Text>
        </Container>
      ))}
    </Container>
  );
}

export default Statements;
