import WarningIcon from "@mui/icons-material/Warning";
import Form from "../form/Form";
import { Typography } from "@mui/material";
import RequestHistory from "./RequestHistory";
import { useSelector } from "react-redux";
import { useCurrentBlockchain } from "../../redux/features/blockchain/blockchainSlice";
const BalanceRequestContainer = () => {
  const { blockchain } = useSelector(useCurrentBlockchain);
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
        <WarningIcon sx={{ color: "#9B1FE9" }} />{" "}
        {blockchain.name ? (
          <>
            {" "}
            Your wallet is connected to{" "}
            <span style={{ fontWeight: "bold" }}>{blockchain.name}</span>, so
            you are requesting{" "}
            <span style={{ fontWeight: "bold" }}>{blockchain.name}</span>{" "}
            Link/ETH.
          </>
        ) : (
          "Please Select A Network"
        )}
      </Typography>
      <Form />
      <RequestHistory />
    </div>
  );
};

export default BalanceRequestContainer;
