import React from 'react';

// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
import MakeWorkTab from './MakeWorkTab';

const MakeWork = () => (
  <>
    <div className='row makeworkrow'>
      <div className='line' />
      <div>Features</div>
    </div>
    <div className='row'>
      <p className='homeheadings'>Make work suck less</p>
      <p className='Playfully'>
        Kill the boredom, dump the stress & give yourself some great work to do
      </p>
    </div>
    <div className='row makeworktabs'>
      <MakeWorkTab />
    </div>
  </>
);

export default MakeWork;
