import { Button, Tooltip } from "@mui/material"; // Import Button from MUI
import { Table } from "@mui/material"; // Import Table from MUI
import EditNoteIcon from "@mui/icons-material/EditNote";
import {
  useGetAllBalanceRequestQuery,
  useUpdateBalanceRequestStatusMutation,
} from "../../../redux/features/balanceRequest/balanceRequestApi";
import { toast } from "sonner"; // Import toast if not already imported

export default function AllBalanceRequest() {
  const { data: BalanceRequest } = useGetAllBalanceRequestQuery();
  const [updateStatus] = useUpdateBalanceRequestStatusMutation();

  function convertTo12HourFormat(dateString) {
    const date = new Date(dateString);
    const options = { hour: "numeric", minute: "2-digit", hour12: true };
    return date.toLocaleString("en-US", options);
  }
  const allBalanceRequestData = BalanceRequest?.data;

  const handleButtonClick = async (rowId) => {
    const toastId = toast.loading("Creating user");
    console.log(`Button clicked for row with ID ${rowId}`);

    try {
      const result = await updateStatus(rowId);

      if (result.data?.success === true) {
        toast.success(result.data?.message, { id: toastId });
      } else if (result?.error) {
        toast.error(result.error.data.errorMessage || "Something went wrong", {
          id: toastId,
        });
      } else {
        toast.error("Something went wrong", { id: toastId });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <div>
      <Table aria-label="table sizes" size="lg">
        <thead>
          <tr>
            <th>Sr</th>
            <th>Time</th>
            <th>Amount</th>
            <th>Hash</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allBalanceRequestData?.length > 0 ? (
            Array.isArray(allBalanceRequestData) &&
            allBalanceRequestData.map((row, index) => (
              <tr key={row._id}>
                <>
                  <td>{index + 1}</td>
                  <td>{convertTo12HourFormat(row.createdAt)}</td>
                  <td>{row.requested_balance}</td>
                  <td>{row.wallet_address}</td>
                  <td>{row.request_status}</td>
                  <td>
                    {row.request_status !== "approved" && (
                      <Tooltip title="Click to approve" placement="top">
                        <Button
                          onClick={() => handleButtonClick(row._id)}
                          variant="contained"
                          color="primary"
                        >
                          <EditNoteIcon />
                        </Button>
                      </Tooltip>
                    )}
                  </td>
                </>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
