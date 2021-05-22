import styled from "styled-components";
import { Container } from "../Container";
import {
  layout,
  space,
  color,
  border,
  typography,
  flexbox,
} from "styled-system";
const SidebarIcon = styled.span`
  cursor: pointer;
  ${space}
  ${color}
   ${border}
    ${typography};
`;
const SidebarLinkContainer = styled.button`
  border: none;
  background-color: transparent;
  :link {
    text-decoration: none;
  }
  text-decoration: none;
  /* width: 100%; */

  :hover {
    background-color: #f5f5f5;
  }
  cursor: pointer;
  ${flexbox}
  ${space}
  ${color}
  ${border}
  ${typography}
  ${layout}
`;
const SidebarLabel = styled.span`
  ${layout}
  :link {
    text-decoration: none;
  }
  text-decoration: none;
`;

const SidebarLink = ({ label, icon, active }) => {
  return (
    <Container>
      <SidebarLinkContainer
        my="1rem"
        mr={["1rem", "1rem", "1rem", "5rem"]}
        ml="1rem"
        py="0.8rem"
        px={["0.5rem", "1rem"]}
        color={active ? "#006EFF" : "#697780"}
        borderRadius="0.7rem"
        cursor="pointer"
        fontSize="1.125rem"
        fontWeight="600"
        display="flex"
        alignItems="center"
        width={["inherit", "inherit", "inherit", "100%"]}
      >
        <SidebarIcon
          mr={["0", "0", "0", "0.6rem"]}
          fontSize="1.3rem"
          px={["0.3rem", "0.8rem", "0.8rem", "0rem"]}
        >
          {" "}
          {icon}
        </SidebarIcon>{" "}
        <SidebarLabel display={["none", "none", "none", "inline"]}>
          {" "}
          {label}
        </SidebarLabel>
      </SidebarLinkContainer>
    </Container>
  );
};
export default SidebarLink;
