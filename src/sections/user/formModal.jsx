import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function FormModal({ open, handleClose }){
  const [formData, setFormData] = useState({
    name: '',
    ville: '',
    telephone: '',
    email: '',
    password: '',
    type:''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Form data submitted:', formData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle textAlign="center" variant="h3">
        Add New User
      </DialogTitle>
      <DialogContent>
        <DialogContentText textAlign="center" variant="h6">
          Fill out the form below and click Submit.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="ville"
          type="ville"
          name="ville"
          value={formData.ville}
          onChange={handleInputChange}
          fullWidth
        />{' '}
        <TextField
          margin="dense"
          label="telephone"
          type="telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleInputChange}
          fullWidth
        />{' '}
        <TextField
          margin="dense"
          label="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          fullWidth
        />{' '}
        <TextField
          margin="dense"
          label="type"
          type="type"
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="row"
          alignItems="center"
          margin="0 auto"
        >
          <Box>
            <Button size="large" variant="contained" onClick={handleClose}>
              Cancel
            </Button>
          </Box>
          <Box ml={2}>
            <Button onClick={handleSubmit} color="primary" size="large" variant="contained">
              Submit
            </Button>
          </Box>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

FormModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired, 
};