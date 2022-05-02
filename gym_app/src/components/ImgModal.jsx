import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Fade, IconButton } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  height:{md:'80vh',sm:'60vh',xs:'40vh'},
  bgcolor: 'background.paper',
  boxShadow: 24,
};

export const ImgModal = ({img}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  useEffect(()=>{
    function openModal(){
        img ? setOpen(true) : setOpen(false)
    }
    openModal()
  },[img])
  return (
      <Fade in={open}>
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <IconButton onClick={()=>setOpen(!open)} sx={{position:'absolute',color:'white',right:0,cursor:'pointer'}} >
                <CloseIcon fontSize='regular' />
            </IconButton>
          <img className='w-full h-full object-cover' src={img} alt="" />
        </Box>
      </Modal>
    </div>
    </Fade>
  );
}
