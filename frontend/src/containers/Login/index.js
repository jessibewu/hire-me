import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Snackbar from "../../components/Snackbar";
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

export default function Login({
  opendialog,
  closedialog
}) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  const [snackOpen, setSnackOpen] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
    handleClose();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    closedialog(event);
  };

  return (
    <form>
    <Grid container>
      <Dialog
        open={opendialog}
        onClose={closedialog}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            minWidth: "300px",
            backgroundColor: "primary.main",
            color: "#fff",
          }}
        >
          Login
        </DialogTitle>
        <DialogContent 
          sx={{ '& .MuiTextField-root': { marginTop: 2 }, marginTop: 2 }}
        >
          <TextField
            autoFocus
            margin="dense"
            id="loginEmail"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="loginPassword"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions sx={{ marginBottom: 3, px: 3 }}>
          <Button type="submit" onClick={handleFormSubmit} variant="contained" fullWidth size='large' >Login</Button>
        </DialogActions>
      </Dialog>
    </Grid>
    </form>
  );
}

Login.propTypes = {
  openDialog: PropTypes.bool,
  closeDialog: PropTypes.any
};

