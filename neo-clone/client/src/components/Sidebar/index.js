import React, { useState } from "react";
import { Container } from "../Container";
import { AiTwotoneBank } from "react-icons/ai";
import { CgCreditCard } from "react-icons/cg";
import { HiUserCircle } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import { Text } from "../Text";
import SidebarLink from "./SidebarLink";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/auth";
import { auth } from "../../firebase";
export const links = [
  {
    icon: <AiTwotoneBank />,
    label: "Accounts",
  },
  {
    icon: <CgCreditCard />,
    label: "Card",
  },
  {
    icon: <HiUserCircle />,
    label: "Profile",
  },
  {
    icon: <FiLogOut />,
    label: "Sign out",
  },
];

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = (link, index) => {
    if (link.label.toLowerCase() !== "sign out") {
      setActiveIndex(index);
      history.push(`/${link.label.toLowerCase()}`);
    } else {
      handleSignOut();
    }
  };
  const handleSignOut = () => {
    auth.signOut().then(() => {
      dispatch(removeUser());
      history.push("/signin");
    });
  };

  const ListItem = styled.li`
    list-style: none;
    :link {
      text-decoration: none;
    }
  `;

  return (
    <>
      <Text
        fontFamily="Abril Fatface"
        // mb="1rem"
        py="1rem"
        px="1rem"
        fontSize={"2.2rem"}
        backgroundColor="white"
        width={"inherit"}
        color="#003254"
        letterSpacing="0.1rem"
        // mx={["0.5rem", "0.5rem", "0.5rem", "2rem"]}
        // mr={["0.5rem", "0.5rem", "0.5rem", "2rem"]}
        // mt="3rem"
        display={["block", "block", "block", "none"]}
      >
        PayCA
      </Text>
      <Container
        display={["flex", "flex", "flex", "block"]}
        top={[null, null, null, 0]}
        position={["fixed", "fixed", "fixed", "sticky"]}
        width={["100%", "100%", "100%", "inherit"]}
        bottom={[0, 0, 0, ""]}
        // overflow={"hidden"}
        background="#FFFFFF"
        height={["inherit", null, null, "100vh"]}
        pr="3rem"
      >
        <Text
          fontFamily="Abril Fatface"
          mb="2rem"
          fontSize={["1rem", "1.5rem", "1.5rem", "2rem"]}
          color="#003254"
          letterSpacing="0.1rem"
          mx={["0.5rem", "0.5rem", "0.5rem", "2rem"]}
          // mr={["0.5rem", "0.5rem", "0.5rem", "2rem"]}
          mt="3rem"
          display={["none", "none", "none", "block"]}
        >
          PayCA
        </Text>
        <Container
          display={["flex", "flex", "flex", "block"]}
          justifyContent={[
            "space-between",
            "space-between",
            "space-between",
            "",
          ]}
          width="100%"
        >
          {links.map((link, index) => (
            <ListItem onClick={() => handleClick(link, index)}>
              <SidebarLink
                active={index === activeIndex ? true : false}
                icon={link.icon}
                label={link.label}
              />
            </ListItem>
          ))}
        </Container>
      </Container>
    </>
  );
};

export default Index;
