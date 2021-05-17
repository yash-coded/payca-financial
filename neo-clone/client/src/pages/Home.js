import React from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/auth";
import { ThemeProvider } from "styled-components";
import theme from "../theme/HomeTheme";
import Sidebar from "../components/Sidebar";
import { Container } from "../components/Container";
import { Route, Switch } from "react-router-dom";
import Card from "./Card";
import Accounts from "./Account/Accounts";
import Profile from "./Profile";
import Rewards from "./Account/Rewards";
function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = () => {
    auth.signOut().then(() => {
      history.push("/signin");
      dispatch(removeUser());
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        {/* <Route exact path="/accounts" component={Accounts} /> */}
        {/* 
        <Route exact path="/card" component={Card} />
        <Route exact path="/profile" component={Profile} /> */}
      </Switch>
    </ThemeProvider>
  );
}

export default Home;
