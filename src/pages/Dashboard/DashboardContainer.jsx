import { Container } from "@mui/material";
import DashboardTab from "../../components/ui/DashboardTab";

const DashboardContainer = () => {
  return (
    <Container style={{ padding: "2rem" }}>
      <p
        style={{
          color: "#9B1FE9",
          fontWeight: "bold",
          textAlign: "center",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          fontSize: "1.6rem",
        }}
      >
        Welcome to dashboard
      </p>
      <DashboardTab />
    </Container>
  );
};

export default DashboardContainer;
