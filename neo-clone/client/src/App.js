import { useEffect, useState } from "react";
import {
  Route,
  Switch,
  useHistory,
  withRouter,
  useLocation,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, removeUser } from "./redux/auth";
import { Container } from "./components/Container";
import Sidebar from "./components/Sidebar";
import Rewards from "./pages/Account/Rewards";
import SingleAccount from "./pages/Account/SingleAccount";
import Card from "./pages/Card";
import Profile from "./pages/Profile";
import Accounts from "./pages/Account/Accounts";
import { Spinner } from "./components/Spinner";
function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    setLoading(true);

    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setLoading(false);
        dispatch(setCurrentUser(currentUser));
        if (location.pathname === "/") {
          history.push("/accounts");
        }
      } else {
        setLoading(false);
        dispatch(removeUser());
        history.push("/signin");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <Switch>
        {loading ? (
          <Container
            justifyContent="center"
            alignItems="center"
            display="flex"
            width="100vw"
            height="100vh"
          >
            <Spinner />
          </Container>
        ) : (
          <>
            {" "}
            {user ? (
              <>
                <Container
                  position="relative"
                  display={["block", "block", "block", "flex"]}
                >
                  <Sidebar />
                  <>
                    <Route path="/accounts" exact component={Accounts} />
                    <Route
                      path="/accounts/rewards/wallet"
                      component={Rewards}
                    />
                    <Route
                      exact
                      path="/accounts/:type"
                      component={SingleAccount}
                    />

                    <Route path="/card" exact component={Card} />
                    <Route path="/profile" exact component={Profile} />
                  </>
                </Container>
              </>
            ) : (
              <>
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
              </>
            )}
          </>
        )}
      </Switch>
    </div>
  );
}

export default withRouter(App);
