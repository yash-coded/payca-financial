import { createSlice } from "@reduxjs/toolkit";

//auth reducer
export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: null,
    secondaryEmail: null,
    phoneNumber: "(123) 456-8299",
    address: "123 Demo Street NW, Calgary, AB, CA",
  },
  reducers: {
    setCurrentUser: (state, { payload }) => {
      state.user = payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
    setSecondaryEmail: (state, { payload }) => {
      state.secondaryEmail = payload;
    },
    setPhoneNumber: (state, { payload }) => {
      state.phoneNumber = payload;
    },
    setAddress: (state, { payload }) => {
      state.address = payload;
    },
  },
});

// export actions
export const {
  setAddress,
  setPhoneNumber,
  setCurrentUser,
  removeUser,
  setSecondaryEmail,
} = authSlice.actions;

export default authSlice.reducer;
