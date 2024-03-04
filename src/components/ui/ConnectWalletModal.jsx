import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

export default function ConnectWalletModal() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button
        style={{ color: "#9B1FE9", borderColor: "#9B1FE9" }}
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
      >
        <AccountBalanceWalletIcon
          style={{ marginRight: "0.5rem", color: "#9B1FE9" }}
        />{" "}
        Connect Wallet
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={4}
          >
            Connect your wallet
          </Typography>
          <div style={{ display: "flex", gap: "2rem" }}>
            <div
              style={{
                backgroundColor: "#F5F7FD",
                height: "180px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                borderRadius: "0.8rem",
              }}
            >
              <img
                style={{ width: "5rem" }}
                src="https://faucets1.netlify.app/static/media/MetaMask_Fox.svg.d9c41a5680a1daaae624.png"
                alt="Meta Mask"
              />
              <p style={{ fontWeight: "bold", color: "#9B1FE9" }}>Meta Mask</p>
            </div>

            <div
              style={{
                backgroundColor: "#F5F7FD",
                height: "180px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                borderRadius: "0.8rem",
              }}
            >
              <img
                style={{ width: "5rem" }}
                src="https://faucets.netlify.app/static/media/WalletConnect.d0b10794.svg"
                alt="WalletConnect"
              />
              <p style={{ fontWeight: "bold", color: "#9B1FE9" }}>Meta Mask</p>
            </div>
          </div>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
