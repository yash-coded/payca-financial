import { createSlice } from "@reduxjs/toolkit";
import { transactionData } from "../../data/transaction";
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
      currentBalanceDetails: [
        {
          label: "Pending Total",
          value: 16.35,
        },
        {
          label: "Posted Purchase Total",
          value: 808.98,
        },
        {
          label: "Total Borrowed",
          value: 825.33,
        },
      ],
      totalBalanceDetails: [
        {
          label: "Credit Limit",
          value: 1000,
        },
        {
          label: "Available",
          value: 191.02,
        },
      ],
      transactions: transactionData,
      accountDetails: [
        {
          label: "Credit Limit",
          value: "$1000.00",
        },
        {
          label: "Purchase Interest",
          value: "22.99%",
        },
        {
          label: "Cash Advance Interest",
          value: "24.99%",
        },
        // {
        //   label: "Account Number",
        //   value: "component",
        // },
      ],
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
    freeze: false,
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
    freezeCard: (state, { payload }) => {
      state.freeze = !payload;
    },
  },
});

// export actions
export const { addCrumbs, removeCrumbs, resetCrumbs, freezeCard } =
  accountSlice.actions;

export default accountSlice.reducer;
