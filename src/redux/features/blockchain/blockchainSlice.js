import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blockchain: {},
};

const blockchainSlice = createSlice({
  name: "blockchain",
  initialState,
  reducers: {
    setBlockchain_id: (state, action) => {
      state.blockchain = action.payload;
    },
  },
});

export const { setBlockchain_id } = blockchainSlice.actions;

export default blockchainSlice.reducer;
export const useCurrentBlockchain = (state) => state?.blockchain;
