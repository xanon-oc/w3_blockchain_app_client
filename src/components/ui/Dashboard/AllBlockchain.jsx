import Table from "@mui/joy/Table";
import { useGetBlockchainQuery } from "../../../redux/features/blockchain/blockchainApi";

export default function AllBlockchain() {
  const { data: blockchainData } = useGetBlockchainQuery();

  const allData = blockchainData?.data;

  return (
    <div>
      <Table aria-label="table sizes" size="lg">
        <thead>
          <tr>
            <th>Sr</th>
            <th>Name</th>
            <th>Network</th>
          </tr>
        </thead>
        <tbody>
          {allData.length > 0 ? (
            Array.isArray(allData) &&
            allData.map((row, index) => (
              <tr key={row._id}>
                <>
                  <td>{index + 1}</td>
                  <td>{row.name}</td>
                  <td>{row.network}</td>
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
