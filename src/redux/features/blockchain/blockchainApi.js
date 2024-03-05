import { baseApi } from "../../api/baseApi";

const blockchainApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlockchain: builder.query({
      query: () => ({
        url: "/blockchain/get_all_blockchain",
        method: "GET",
      }),
      providesTags: ["blockchain"],
    }),
    postBlockchain: builder.mutation({
      query: (blockchain) => ({
        url: "/blockchain/create_blockchain",
        method: "POST",
        body: blockchain,
      }),
      invalidatesTags: ["blockchain"],
    }),
  }),
});

export const { useGetBlockchainQuery, usePostBlockchainMutation } =
  blockchainApi;
