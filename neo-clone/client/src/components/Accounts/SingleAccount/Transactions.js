import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../../../components/Container";
import { Text } from "../../../components/Text";
import dayjs from "dayjs";

//  fontFamily="Abril Fatface"

export const TransactionCard = ({ transaction }) => {
  return (
    <Container
      display="flex"
      alignItems="flex-start"
      background="white"
      mb="1rem"
      p="1.2rem"
      justifyContent="space-between"
    >
      <Container display="flex" alignItems="center" mr="2rem">
        <Text
          fontFamily="Abril Fatface"
          backgroundColor="#003254"
          color="white"
          mr="1rem"
          px="0.5rem"
          fontSize="1.5rem"
          borderRadius="0.4rem"
        >
          P
        </Text>
        <Container>
          <Text fontSize="0.95rem" color="#051c2c">
            {transaction.description}
          </Text>
          <Text color="#697780" mt="0.5rem">
            {dayjs(transaction.completedAt).format("MMMM DD")}
          </Text>
        </Container>
      </Container>
      <Text color="#697780">
        {transaction.type === "DEBIT" && "-"} $
        {(transaction.amountCents / 100).toFixed(2)}
      </Text>
    </Container>
  );
};

function Transactions() {
  const {
    creditAccount: { transactions },
  } = useSelector((state) => state.accounts);
  return (
    <Container>
      {transactions.map((item, i) => (
        <Container>
          {dayjs(item?.completedAt).format("MMMM") !==
            dayjs(transactions[i + 1]?.completedAt).format("MMMM") && (
            <Text ml="1rem" mb="0.8rem">
              {dayjs(item.completedAt).format("MMMM")}
            </Text>
          )}
          <TransactionCard transaction={item} />
        </Container>
      ))}
    </Container>
  );
}

export default Transactions;
