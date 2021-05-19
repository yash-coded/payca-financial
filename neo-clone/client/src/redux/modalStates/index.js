import { createSlice } from "@reduxjs/toolkit";

//auth reducer
export const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    viewPin: false,
    changePin: false,
  },
  reducers: {
    handleModal: (state, { payload }) => {},
  },
});

// export actions
export const { handleModal } = modalSlice.actions;

export default modalSlice.reducer;
