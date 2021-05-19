import { Container } from "./Container";
import { useState } from "react";
import { Text } from "./Text";
import styled from "styled-components";

const HoverState = styled.span`
  :hover {
    background: #eeefef;
  }
`;

export const TabNav = ({ tabs, setIndex }) => {
  const [active, setActive] = useState(0);

  const handleClick = (link, index) => {
    setActive(index);
    setIndex(index);
  };
  return (
    <Container
      display="flex"
      //   mx={["1rem", "1rem", "2rem", "3rem"]}
      //   mt="3rem"
      //   width={["inherit", "30rem"]}
      overflowX="auto"
      borderBottom="1px solid #d3d3d3"
    >
      {tabs.map((link, i) => (
        <HoverState>
          <Text
            onClick={() => handleClick(link, i)}
            // mr="2rem"
            p="0.6rem"
            mx="1rem"
            fontSize="1rem"
            fontWeight="600"
            color={i === active ? "#006EFF" : "#697780"}
            borderBottom={i === active ? "2px solid #006EFF" : ""}
            style={{ cursor: "pointer" }}
            textAlign="center"
          >
            {link.label}
          </Text>
        </HoverState>
      ))}
    </Container>
  );
};
