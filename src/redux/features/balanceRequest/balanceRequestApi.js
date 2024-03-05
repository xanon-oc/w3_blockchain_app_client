import { baseApi } from "../../api/baseApi";

const blockchainApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBalanceRequest: builder.mutation({
      query: (balanceRequest) => ({
        url: "/balance_request/create_request_balance",
        method: "POST",
        body: balanceRequest,
      }),
      invalidatesTags: ["balanceRequest"],
    }),
    updateBalanceRequestStatus: builder.mutation({
      query: (id) => ({
        url: `/balance_request/update_balance_request_status/${id}`,
        method: "PATCH",
        body: { request_status: "approved" },
      }),
      invalidatesTags: ["balanceRequest"],
    }),
    getAllBalanceRequestByUserEmail: builder.query({
      query: (email) => {
        return {
          url: `/balance_request/get_all_balance_request_by_user/${email}`,
          method: "GET",
        };
      },
      providesTags: ["balanceRequest"],
    }),
    getAllBalanceRequest: builder.query({
      query: () => {
        return {
          url: "/balance_request/get_all_balance_request",
          method: "GET",
        };
      },
      providesTags: ["balanceRequest"],
    }),
  }),
});

export const {
  useAddBalanceRequestMutation,
  useGetAllBalanceRequestByUserEmailQuery,
  useGetAllBalanceRequestQuery,
  useUpdateBalanceRequestStatusMutation,
} = blockchainApi;
