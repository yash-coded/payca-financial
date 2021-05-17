import { createSlice } from "@reduxjs/toolkit";

//auth reducer
export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: null,
  },
  reducers: {
    setCurrentUser: (state, { payload }) => {
      console.log("reducer user=>>", payload);
      state.user = payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

// export actions
export const { setCurrentUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
