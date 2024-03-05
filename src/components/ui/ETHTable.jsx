import PropTypes from "prop-types";
import Table from "@mui/joy/Table";
export default function ETHTable({ ethData }) {
  function convertTo12HourFormat(dateString) {
    const date = new Date(dateString);
    const options = { hour: "numeric", minute: "2-digit", hour12: true };
    return date.toLocaleString("en-US", options);
  }

  return (
    <div>
      <Table aria-label="table sizes" size="lg">
        <thead>
          <tr>
            <th>Sr</th>
            <th>Time</th>
            <th>Network</th>
            <th>Amount</th>
            <th>Hash</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ethData?.length > 0 ? (
            Array.isArray(ethData) &&
            ethData.map((row, index) => (
              <tr key={row._id}>
                <>
                  <td>{index + 1}</td>
                  <td>{convertTo12HourFormat(row.createdAt)}</td>
                  <td>{row.blockchain_id.network}</td>
                  <td>{row.requested_balance}</td>
                  <td>{row.wallet_address}</td>
                  <td>{row.request_status}</td>
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
ETHTable.propTypes = {
  ethData: PropTypes.arrayOf(PropTypes.object),
};
