import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {lg:400,sm:350,xs:300},
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const FormModal = ({children}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='px-2 sm:px-5 py-3 my-2 bg-primary rounded-md'>
      <button className='w-full' onClick={handleOpen}>{children}</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className='w-full' action="">
            <h1 className='uppercase font-heading font-extrabold lg:text-xl sm:text-lg text-base text-center mb-5'>Enter your details</h1>
            <div className='flex flex-col my-2'>
            <label className='font-medium mx-2 my-1 lg:text-base sm:text-sm text-xs' >Name</label>
            <input placeholder='Enter Your Name' type="text" className='px-4 py-2 placeholder:italic focus:outline-none lg:text-base sm:text-sm text-xs border-2 rounded-md hover:border-2 hover:border-blue-400 focus:border-blue-500' />
            </div>
            <div className='flex flex-col my-2 lg:text-base sm:text-sm text-xs'>
            <label className='font-medium mx-2 my-2' >Email</label>
            <input placeholder='Enter Your Email' type="email" className='px-4 py-2 placeholder:italic focus:outline-none lg:text-base sm:text-sm text-xs border-2 rounded-md hover:border-2 hover:border-blue-400 focus:border-blue-500' />
            </div>
            <div className='flex flex-col my-2 lg:text-base sm:text-sm text-xs'>
            <label className='font-medium mx-2 my-2' >Preferred Time</label>
            <input type="time" className='px-4 py-2 placeholder:italic focus:outline-none lg:text-base sm:text-sm text-xs border-2 rounded-md hover:border-2 hover:border-blue-400 focus:border-blue-500' />
            </div>
            <div className='flex flex-col my-2 lg:text-base sm:text-sm text-xs'>
            <label className='font-medium mx-2 my-2' >Any Message</label>
            <textarea placeholder='Message...' type="time" className='px-4 py-2 placeholder:italic focus:outline-none lg:text-base sm:text-sm text-xs border-2 rounded-md hover:border-2 hover:border-blue-400 focus:border-blue-500' />
            </div>
            <button className='text-xs md:text-sm lg:text-base mt-2 py-2 px-4 bg-primary text-white font-medium rounded-md'>Submit</button>
          <span className='block text-[10px] md:text-xs lg:text-sm italic mt-4 text-gray-500'>We'll get back to you within 3-5 working days*</span>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
