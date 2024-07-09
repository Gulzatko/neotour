import React,{useState} from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { PhoneInput } from 'react-international-phone';
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
  
    return (
      <div>
        <Button onClick={handleOpen}>Book your tour</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <h1>Your info</h1>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab repudiandae debitis labore, nobis iste veritatis expedita provident ducimus fugiat consectetur suscipit esse tenetur, eligendi dicta at totam hic praesentium. Fugit, excepturi aperiam sint sit, in aliquam accusamus architecto voluptatibus, officiis modi ea delectus. Laboriosam iure voluptatum, ipsum alias laborum ea.
            </Typography>
            <PhoneInput
             defaultCountry="kg"
             value={phone}
             onChange={(phone) => setPhone(phone)}
      />
          </Box>
        </Modal>
      </div>
    );
  }