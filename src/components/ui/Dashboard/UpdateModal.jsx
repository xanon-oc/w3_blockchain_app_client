import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Box, Container, CssBaseline, Grid, FormControl } from "@mui/joy";
import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { toast } from "sonner";
import { usePostBlockchainMutation } from "../../../redux/features/blockchain/blockchainApi.js";
import EditNoteIcon from "@mui/icons-material/EditNote";

export default function UpdateModal() {
  const [open, setOpen] = React.useState(false);
  const [postBlock] = usePostBlockchainMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const toastId = toast.loading("Creating user");

    try {
      const name = data.get("name");
      const photo = data.get("photo");
      const network = data.get("network");

      if (!name || !photo || !network) {
        toast.error("Please fill in all fields", { id: toastId });
        return;
      }

      const allFromData = { name, photo, network };

      const result = await postBlock(allFromData);

      if (result.data?.success === true) {
        toast.success(result.data?.message, { id: toastId });
        setOpen(false);
      } else if (result?.error) {
        toast.error(result.error.data.errorMessage || "Something went wrong", {
          id: toastId,
        });
      } else {
        toast.error("Something went wrong", { id: toastId });
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong", { id: toastId });
    }
  };

  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        <EditNoteIcon />
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
            variant="h4"
            textColor="inherit"
            fontWeight="bold"
            mb={1}
          >
            Add new Blockchain Here
          </Typography>
          <Container
            component="main"
            maxWidth="xs"
            style={{
              backgroundColor: "white",
              borderRadius: "0.6rem",
            }}
          >
            <CssBaseline />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="name"
                      label="Blockchain Name"
                      name="name"
                      autoComplete="name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="photo"
                      type="photo"
                      label="Photo URL"
                      name="photo"
                      autoComplete="photo"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl>
                      <FormLabel id="network">Network</FormLabel>
                      <RadioGroup row aria-labelledby="network" name="network">
                        <FormControlLabel
                          value="ETH"
                          control={<Radio />}
                          label="ETH"
                        />
                        <FormControlLabel
                          value="TestNet"
                          control={<Radio />}
                          label="TestNet"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{ backgroundColor: "#9B1FE9" }}
                >
                  Add Blockchain
                </Button>
              </Box>
            </Box>
          </Container>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
