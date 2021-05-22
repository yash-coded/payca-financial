import { useEffect, useState, Suspense, lazy } from "react";
import {
  Route,
  Switch,
  useHistory,
  withRouter,
  useLocation,
} from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, removeUser } from "./redux/auth";
import { Container } from "./components/Container";
import Sidebar from "./components/Sidebar";
import Fallback from "./components/Fallback";

//code splitting
const Signup = lazy(() => import("./pages/Signup"));
const Signin = lazy(() => import("./pages/Signin"));
const Rewards = lazy(() => import("./pages/Account/Rewards")); //page
const SingleAccount = lazy(() => import("./pages/Account/SingleAccount")); //page
const Card = lazy(() => import("./pages/Card")); //page
const Profile = lazy(() => import("./pages/Profile")); //page
const Accounts = lazy(() => import("./pages/Account/Accounts")); //page

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
          <Fallback />
        ) : (
          <Suspense fallback={<Fallback />}>
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
          </Suspense>
        )}
      </Switch>
    </div>
  );
}

export default withRouter(App);
