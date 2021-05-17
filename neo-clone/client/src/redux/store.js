import { configureStore } from "@reduxjs/toolkit";

//import all reducres
import authSlice from "./auth";
import accountSlice from "./accounts/account";
export default configureStore({
  //combine all reducers
  reducer: {
    auth: authSlice,
    accounts: accountSlice,
  },
});
