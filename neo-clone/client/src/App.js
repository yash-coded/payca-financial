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
import Home from "./pages/Home";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, removeUser } from "./redux/auth";
import { Container } from "./components/Container";
import Sidebar from "./components/Sidebar";
import Rewards from "./pages/Account/Rewards";
import RewardDetails from "./components/Accounts/Rewards";
import Card from "./pages/Card";
import Profile from "./pages/Profile";
import Accounts from "./pages/Account/Accounts";
function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { user } = useSelector((state) => state.auth);
  // console.log("userrr=>>", user);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setLoading(false);

        dispatch(setCurrentUser(currentUser));
        history.push("/accounts");
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

  const SecuredRoute = ({ path, component, exact }) => {
    return (
      <Route
        exact
        path={path}
        component={user ? component : history.push("/signin")}
      />
    );
  };

  return (
    <div className="App">
      <Switch>
        {loading ? (
          <div>loading....</div>
        ) : (
          <>
            {" "}
            <>
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
          </>
        )}
      </Switch>
    </div>
  );
}

export default withRouter(App);
