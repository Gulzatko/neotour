import React, { useState } from 'react';
import styles from "../Components/Modal.module.scss";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import NumberOfPeople from "./NumberOfPeople";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function PopModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [phone, setPhone] = useState('');
  const [value, setValue] = useState();

  return (
    <div className={styles.modal}>
       <Button className={styles.booking__btn} onClick={handleOpen} >Book your tour</Button>
        <Modal 
         open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography  id="modal-modal-title" variant="h6" component="h2">
            <h1>Your info</h1>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            To submit an application for a tour reservation,
             you need fill in your information and select the number 
             of people for the reservation
          </Typography>
          <PhoneInput
            className={styles.modal__input}
            country={'kg'}
            value={phone}
            onChange={phone => this.setState({ phone })}
          />
          <div>
          <input type="text" placeholder='I wish there was JDM' />
    
            </div>
           <NumberOfPeople/>

           <div>
            <button>Submit</button>
           </div>
        
        </Box>
      </Modal>
    </div>
  );
}