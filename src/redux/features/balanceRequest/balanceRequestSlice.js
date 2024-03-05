import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  user_email: "",
  blockchain_name: "",
  wallet_address: "",
  request_type: "",
  requested_balance: "",
  request_status: "",
};

const balanceRequestSlice = createSlice({
  name: "blockchain",
  initialState,
  reducers: {
    setBlockchain_id: (state, action) => {
      state.blockchain = action.payload;
    },
  },
});

export const { setBlockchain_id } = balanceRequestSlice.actions;

export default balanceRequestSlice.reducer;
