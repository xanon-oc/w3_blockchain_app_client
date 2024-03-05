import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BalanceRequestContainer from "../components/ui/BalanceRequestContainer";
import { useSelector } from "react-redux";
import { useCurrentBlockchain } from "../redux/features/blockchain/blockchainSlice";

const Home = () => {
  return (
    <div>
      <AppBar
        style={{
          backgroundColor: "#9B1FE9",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
        position="static"
        color="primary"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "center" }}>
            <Typography variant="h8" fontWeight="bold" color="inherit">
              Request testnet MATIC and LINK tokens for the Mumbai testnet and
              test your Chainlinked smart contract.
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

      <Container
        maxWidth="xl"
        sx={{
          textAlign: "left",
          my: 4,
          mx: "auto",
          width: "90%",
          padding: "20px",
        }}
      >
        <Typography fontWeight="bold" color="#9B1FE9" variant="h4" gutterBottom>
          Request Testnet LINK
        </Typography>
        <Typography style={{ width: "58%" }} variant="body1" paragraph>
          Get testnet LINK for an account on one of the supported blockchain
          testnets so you can create and test your own oracle and Chainlinked
          smart contract.
        </Typography>
      </Container>

      <Container
        maxWidth="xl"
        sx={{
          textAlign: "left",
          my: 4,
          mx: "auto",
          width: "90%",
          padding: "20px",
        }}
      >
        <BalanceRequestContainer />
      </Container>
    </div>
  );
};

export default Home;
