import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Input,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Form = () => {
  const theme = useTheme();
  const isMdOrUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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
      </Box>
    </Container>
  );
};

export default Form;
