import { Container } from "@mui/material";
import TabRequest from "./TabRequest";

const RequestHistory = () => {
  return (
    <Container style={{ marginTop: "2rem" }}>
      <p style={{ fontWeight: "bold", marginBottom: "2rem" }}>
        Request History
      </p>
      <TabRequest />
    </Container>
  );
};

export default RequestHistory;
