import { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Input,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useCurrentBlockchain } from "../../redux/features/blockchain/blockchainSlice";
import { toast } from "sonner";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAddBalanceRequestMutation } from "../../redux/features/balanceRequest/balanceRequestApi";

const Form = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [ethAmount, setEthAmount] = useState("");

  const { blockchain } = useSelector(useCurrentBlockchain);
  const [postRequest] = useAddBalanceRequestMutation();
  const { user: currentUser } = useSelector(selectCurrentUser);

  const handleSubmit = async (event) => {
    const toastId = toast.loading("Sending request data");
    event.preventDefault();
    if (!blockchain) {
      toast.error("Please select network first");
    }
    const id = blockchain?.id;
    const user = currentUser?.email;
    const requestFormValue = {
      blockchain_id: id,
      user_email: user,
      wallet_address: walletAddress,
      requested_balance: Number(ethAmount),
    };

    try {
      const res = await postRequest(requestFormValue).unwrap();

      toast.success(res.message, { id: toastId });
    } catch (error) {
      toast.error(error.data.errorMessage, { id: toastId });
    }
  };

  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth={true} style={{ marginBottom: "2rem" }}>
                <FormLabel
                  sx={{
                    color: "#9B1FE9",
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                  }}
                >
                  Wallet Address
                </FormLabel>
                <Input
                  placeholder="1HB5XMLmzFVj8ALj6mfBsbifRoD4miY36v"
                  color="primary"
                  size="lg"
                  variant="soft"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth={true}>
                <FormLabel
                  sx={{
                    color: "#9B1FE9",
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                  }}
                >
                  Request Type
                </FormLabel>
                <Input
                  placeholder="20 Test Link"
                  disabled
                  color="primary"
                  size="lg"
                  variant="soft"
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth={true}>
                <FormLabel
                  sx={{
                    color: "#9B1FE9",
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                  }}
                >
                  ETH
                </FormLabel>
                <Input
                  type="number"
                  placeholder="0.5"
                  color="primary"
                  size="lg"
                  variant="soft"
                  value={ethAmount}
                  onChange={(e) => setEthAmount(e.target.value)}
                />
              </FormControl>
            </Grid>

            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#9B1FE9", marginLeft: "0.8rem" }}
              sx={{ mt: 3, mb: 2 }}
              size="lg"
            >
              Send Request
            </Button>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Form;
