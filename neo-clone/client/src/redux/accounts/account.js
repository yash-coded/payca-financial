import { createSlice } from "@reduxjs/toolkit";

//auth reducer
export const accountSlice = createSlice({
  name: "accountSlice",
  initialState: {
    breadcrumbs: [
      {
        label: "My Accounts",
        path: "/accounts",
      },
      {
        label: "Wallet",
        path: "/accounts/rewards/wallet",
      },
    ],
    creditAccount: {
      available: 191.02,
      due: 1000 - 191.02,
    },
    savingsAccount: {
      available: 5018.95,
    },
    rewardsAccount: {
      available: 109.25,
      currentBalanceDetails: [
        {
          label: "Available Balance",
          value: 109.25,
        },
        {
          label: "Pending Balance",
          value: 35.24,
        },
      ],
      totalBalanceDetails: [
        {
          label: "Total Balance",
          value: 144.49,
        },
        {
          label: "Lifetime Total Earned",
          value: 358.59,
        },
      ],
    },
  },
  reducers: {
    addCrumbs: (state, { payload }) => {
      const filteredArr = state.breadcrumbs.filter(
        (crumb) => crumb.path === payload.path
      );
      console.log(filteredArr);
      filteredArr.length === 0 && state.breadcrumbs.push(payload);
    },

    resetCrumbs: (state, { payload }) => {
      state.breadcrumbs = [
        {
          label: "My Accounts",
          path: "/accounts",
        },
        {
          label: "Wallet",
          path: "/accounts/rewards/wallet",
        },
      ];
    },
  },
});

// export actions
export const { addCrumbs, removeCrumbs, resetCrumbs } = accountSlice.actions;

export default accountSlice.reducer;
