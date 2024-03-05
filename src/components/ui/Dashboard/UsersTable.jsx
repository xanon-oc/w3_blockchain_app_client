import PropTypes from "prop-types";
import Table from "@mui/joy/Table";
import Hidden from "@mui/material/Hidden"; // Import the Hidden component
import { useGetAllUsersQuery } from "../../../redux/features/auth/authApi";

export default function UsersTable() {
  const { data: userData, isFetching } = useGetAllUsersQuery();
  const allUsers = userData?.data;

  return (
    <div>
      <Table aria-label="table sizes" size="lg">
        <thead>
          <tr>
            <th>Sr</th>
            <th>Name</th>
            <Hidden smDown>
              <th>Email</th>
            </Hidden>
            <th>Gender</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {allUsers && allUsers.length > 0 ? (
            allUsers.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <Hidden smDown>
                  <td>{user.email}</td>
                </Hidden>
                <td>{user.gender}</td>
                <td>{user.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

UsersTable.propTypes = {
  testNetData: PropTypes.arrayOf(PropTypes.object),
};
