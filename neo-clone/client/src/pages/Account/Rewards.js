import RewardDetails from "../../components/Accounts/Rewards";
import { Container } from "../../components/Container";
import { Text } from "../../components/Text";
import { useSelector } from "react-redux";

import {
  Route,
  Switch,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import styled from "styled-components";
import Balance from "./Balance";

const Seperator = styled.span`
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  color: ${(props) => (props.balance ? "white" : "#828e95")};
  /* font-size: 1.2rem; */
`;

function Rewards({ match }) {
  const { breadcrumbs } = useSelector((state) => state.accounts);
  const location = useLocation();

  const history = useHistory();

  const Crumbs = () => {
    const balance = "/accounts/rewards/wallet/balance/transaction";
    const details = "/accounts/rewards/wallet/balance/details";

    const handleClick = (crumb) => {
      history.push(crumb.path);
    };

    return (
      <Container
        background={
          location.pathname === balance || location.pathname === details
            ? "#051C2C"
            : ""
        }
        px={["1rem", "1rem", "2rem", "3rem"]}
        py="1.5rem"
        borderBottom="1px solid #b7b7b7"
      >
        <Container display="flex">
          {breadcrumbs.map((crumb, i) => (
            <Text
              key={i}
              display="flex"
              alignItems="center"
              color={
                i === breadcrumbs.length - 1
                  ? ` ${
                      location.pathname === balance ||
                      location.pathname === details
                        ? "white"
                        : "black"
                    } `
                  : `${
                      location.pathname === balance ||
                      location.pathname === details
                        ? "#f4f4f4"
                        : `#828E95`
                    } `
              }
              letterSpacing=".01rem"
              fontSize="0.9rem"
              style={
                i === breadcrumbs.length - 1 ? null : { cursor: "pointer" }
              }
              onClick={() =>
                i === breadcrumbs.length - 1 ? null : handleClick(crumb)
              }
            >
              {" "}
              {i !== 0 && (
                <Seperator
                  balance={
                    location.pathname === balance ||
                    location.pathname === details
                      ? true
                      : false
                  }
                >
                  {" "}
                  <GoChevronRight />
                </Seperator>
              )}
              {crumb.label}
            </Text>
          ))}
        </Container>
      </Container>
    );
  };

  let { url } = useRouteMatch();

  return (
    <Container mb="8rem" width="100%">
      <Crumbs />

      <Switch>
        <Route
          path={`/accounts/rewards/wallet`}
          exact
          component={RewardDetails}
        />

        <Route path={`${url}/balance`} component={Balance} />
      </Switch>
    </Container>
  );
}

export default Rewards;
