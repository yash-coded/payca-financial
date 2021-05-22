import React from "react";
import { Container } from "../../Container";
import { Text } from "../../Text";
import { useSelector } from "react-redux";

function RewardDetails() {
  const {
    rewardsAccount: { currentBalanceDetails, totalBalanceDetails },
  } = useSelector((state) => state.accounts);
  return (
    <Container
      mx={["1rem", "1rem", "2rem", "3rem"]}
      mt="2rem"
      background="white"
      width={["inherit", "30rem"]}
      p="1rem"
    >
      <Details
        currentBalanceDetails={currentBalanceDetails}
        totalBalanceDetails={totalBalanceDetails}
      />
    </Container>
  );
}

export const Details = ({
  bg,
  padding,
  currentBalanceDetails,
  totalBalanceDetails,
}) => {
  return (
    <Container background={bg} p={padding}>
      <Container borderBottom="1px solid #d3d3d3">
        {currentBalanceDetails.map((item, i) => (
          <Container
            key={i}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb="1.4rem"
          >
            <Text color="#8F9AA0">{item.label}</Text>
            <Text color="#051c2c">${item.value}</Text>
          </Container>
        ))}
      </Container>
      <Container mt="1.4rem">
        {totalBalanceDetails.map((item, i) => (
          <Container
            key={i}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={i === totalBalanceDetails.length - 1 ? "" : "1.4rem"}
          >
            <Text color="#8F9AA0">{item.label}</Text>
            <Text color="#051c2c">${item.value}</Text>
          </Container>
        ))}
      </Container>
    </Container>
  );
};

export default RewardDetails;
