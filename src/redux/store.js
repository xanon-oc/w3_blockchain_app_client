import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import blockchainReducer from "./features/blockchain/blockchainSlice";
import balanceRequestReducer from "./features/balanceRequest/balanceRequestSlice";
import { baseApi } from "./api/baseApi";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfigAuth = {
  key: "auth",
  storage,
};
const persistConfigBlockchain = {
  key: "blockchain",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfigAuth, authReducer);
const persistedBlockchainReducer = persistReducer(
  persistConfigBlockchain,
  blockchainReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    blockchain: persistedBlockchainReducer,
    balanceRequest: balanceRequestReducer,

    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);
