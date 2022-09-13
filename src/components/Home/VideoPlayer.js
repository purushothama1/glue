import ReactPlayer from 'react-player';
import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Play from '../../assets/play.png';
import Close from '../../assets/close.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Video = ({ val }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='p-5 w-75'>
      <div className='row'>
        <div
          className=''
          style={{ position: 'relative', width: '100%', float: 'left' }}
        >
          <img className='sliderimg' alt='sqdas' src={val.photo} />
          <button
            onClick={() => {
              handleOpen();
            }}
          >
            <img alt='' src={Play} className='play-button' />
          </button>
        </div>
      </div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <button className='videoclosebutton' onClick={handleClose}>
              <img alt='guy' src={Close} />
            </button>
            <ReactPlayer
              width='100%'
              height='450px'
              pip
              controls
              config={{ file: { forceHLS: true } }}
              url={val.video}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Video;
