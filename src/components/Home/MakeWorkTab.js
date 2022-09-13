/* eslint-disable react/function-component-definition */
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Mwtabimg from '../../assets/mwtabimg.png';
import Linkarrow from '../../assets/linkarrow.png';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          centered
          variant='scrollable'
          allowScrollButtonsMobile
        >
          <Tab label='Glue Jam' {...a11yProps(0)} />
          <Tab label='Glue.Projects' {...a11yProps(1)} />
          <Tab label='Glue.Bounty' {...a11yProps(2)} />
          <Tab label='Glue.Thrive' {...a11yProps(3)} />
          <Tab label='Glue.Feedback' {...a11yProps(4)} />
          <Tab label='Glue.Social' {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel className='mwtab' value={value} index={0}>
        <div className='row'>
          <div className='col-sm-5' style={{ paddingLeft: '0px' }}>
            <p className='mwtabhead'>Glue.Jam</p>
            <p className='mwtabsubtext'>
              Lorem Jam dolor sit amet, consectetur adipiscing elit. Risus id
              integer in et vestibulum, non ut sed sed. Cum ullamcorper bibendum
              consequat donec amet magna scelerisque. Magna velit nam ut
              aliquet. Velit in non, ut egemt orci.donec amet magna scelerisque.
              Magna velit nam ut aliquet. Velit in non, ut egemt orci.
            </p>
            <p className='mwtablink'>
              <a href='/'>
                Learn More
                <img alt='dew' src={Linkarrow} />
              </a>
            </p>
          </div>
          <div className='col-sm-7 mwimgdiv'>
            <img alt='dsafd' src={Mwtabimg} />
          </div>
        </div>
      </TabPanel>
      <TabPanel className='mwtab' value={value} index={1}>
        <div className='row'>
          <div className='col-sm-5' style={{ paddingLeft: '0px' }}>
            <p className='mwtabhead'>Glue.Projects</p>
            <p className='mwtabsubtext'>
              Lorem Projects dolor sit amet, consectetur adipiscing elit. Risus
              id integer in et vestibulum, non ut sed sed. Cum ullamcorper
              bibendum consequat donec amet magna scelerisque. Magna velit nam
              ut aliquet. Velit in non, ut egemt orci.donec amet magna
              scelerisque. Magna velit nam ut aliquet. Velit in non, ut egemt
              orci.
            </p>
            <p className='mwtablink'>
              <a href='/'>
                Learn More
                <img alt='dew' src={Linkarrow} />
              </a>
            </p>
          </div>
          <div className='col-sm-7 mwimgdiv'>
            <img alt='dsafd' src={Mwtabimg} />
          </div>
        </div>
      </TabPanel>
      <TabPanel className='mwtab' value={value} index={2}>
        <div className='row'>
          <div className='col-sm-5' style={{ paddingLeft: '0px' }}>
            <p className='mwtabhead'>Glue.Bounty</p>
            <p className='mwtabsubtext'>
              Lorem Bounty dolor sit amet, consectetur adipiscing elit. Risus id
              integer in et vestibulum, non ut sed sed. Cum ullamcorper bibendum
              consequat donec amet magna scelerisque. Magna velit nam ut
              aliquet. Velit in non, ut egemt orci.donec amet magna scelerisque.
              Magna velit nam ut aliquet. Velit in non, ut egemt orci.
            </p>
            <p className='mwtablink'>
              <a href='/'>
                Learn More
                <img alt='dew' src={Linkarrow} />
              </a>
            </p>
          </div>
          <div className='col-sm-7 mwimgdiv'>
            <img alt='dsafd' src={Mwtabimg} />
          </div>
        </div>
      </TabPanel>
      <TabPanel className='mwtab1' value={value} index={3}>
        <div className='row'>
          <div className='col-sm-5' style={{ paddingLeft: '0px' }}>
            <p className='mwtabhead'>Glue.Thrive</p>
            <p className='mwtabsubtext'>
              Lorem Thrive dolor sit amet, consectetur adipiscing elit. Risus id
              integer in et vestibulum, non ut sed sed. Cum ullamcorper bibendum
              consequat donec amet magna scelerisque. Magna velit nam ut
              aliquet. Velit in non, ut egemt orci.donec amet magna scelerisque.
              Magna velit nam ut aliquet. Velit in non, ut egemt orci.
            </p>
            <p className='mwtablink'>
              <a href='/'>
                Learn More
                <img alt='dew' src={Linkarrow} />
              </a>
            </p>
          </div>
          <div className='col-sm-7 mwimgdiv'>
            <img alt='dsafd' src={Mwtabimg} />
          </div>
        </div>
      </TabPanel>
      <TabPanel className='mwtab1' value={value} index={4}>
        <div className='row'>
          <div className='col-sm-5' style={{ paddingLeft: '0px' }}>
            <p className='mwtabhead'>Glue.Feedback</p>
            <p className='mwtabsubtext'>
              Lorem Feedback dolor sit amet, consectetur adipiscing elit. Risus
              id integer in et vestibulum, non ut sed sed. Cum ullamcorper
              bibendum consequat donec amet magna scelerisque. Magna velit nam
              ut aliquet. Velit in non, ut egemt orci.donec amet magna
              scelerisque. Magna velit nam ut aliquet. Velit in non, ut egemt
              orci.
            </p>
            <p className='mwtablink'>
              <a href='/'>
                Learn More
                <img alt='dew' src={Linkarrow} />
              </a>
            </p>
          </div>
          <div className='col-sm-7 mwimgdiv'>
            <img alt='dsafd' src={Mwtabimg} />
          </div>
        </div>
      </TabPanel>
      <TabPanel className='mwtab1' value={value} index={5}>
        <div className='row'>
          <div className='col-sm-5' style={{ paddingLeft: '0px' }}>
            <p className='mwtabhead'>Glue.Social</p>
            <p className='mwtabsubtext'>
              Lorem Social dolor sit amet, consectetur adipiscing elit. Risus id
              integer in et vestibulum, non ut sed sed. Cum ullamcorper bibendum
              consequat donec amet magna scelerisque. Magna velit nam ut
              aliquet. Velit in non, ut egemt orci.donec amet magna scelerisque.
              Magna velit nam ut aliquet. Velit in non, ut egemt orci.
            </p>
            <p className='mwtablink'>
              <a href='/'>
                Learn More
                <img alt='dew' src={Linkarrow} />
              </a>
            </p>
          </div>
          <div className='col-sm-7 mwimgdiv'>
            <img alt='dsafd' src={Mwtabimg} />
          </div>
        </div>
      </TabPanel>
      {/* <TabPanel className='mwtab' value={value} index={4}>
        edwaerews
      </TabPanel> */}
    </Box>
  );
}
