import WarningIcon from "@mui/icons-material/Warning";
import Form from "../form/Form";
import { Typography } from "@mui/material";
import RequestHistory from "./RequestHistory";
const BalanceRequestContainer = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100%",
        borderRadius: "0.7rem",
        padding: "1.7rem",
      }}
    >
      <Typography
        variant="body1"
        component="p"
        sx={{
          backgroundColor: "#EEF2FE",
          padding: "0.6rem",
          borderRadius: "0.4rem",
          marginTop: "0.7rem",
          marginBottom: "2rem",
        }}
      >
        <WarningIcon sx={{ color: "#9B1FE9" }} /> Your wallet is connected to{" "}
        <span style={{ fontWeight: "bold" }}>Ethereum Kovan</span>, so you are
        requesting <span style={{ fontWeight: "bold" }}>Ethereum Kovan</span>{" "}
        Link/ETH.
      </Typography>
      <Form />
      <RequestHistory />
    </div>
  );
};

export default BalanceRequestContainer;
