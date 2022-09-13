import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import Tabicondiv from '../../assets/icon11.png';
import Tabimg1 from '../../assets/tabimg1.png';
import Tabimg2 from '../../assets/tabimg2.jpg';
// import tabicon2 from '../../assets/tabicon2.png';

const TeamsTabs = () => (
  <div className='container'>
    <div className='row makeworkrow'>
      <div className='line' />
      <div>Benifits</div>
    </div>
    <div className='row'>
      <p className='homeheadings'>On Glue, Teams Can</p>
      <p className='Playfully'>
        Playfully co-create & have fun in the process.
      </p>
    </div>
    <div className='row'>
      <Tabs>
        <TabList>
          <Tab>
            {/* <div className='tabicondiv'>
              <img
                src='https://res.cloudinary.com/dvli2yrzi/image/upload/v1662905197/teamtabicon.svg'
                alt='ds'
              />
            </div> */}
            <p className='sidetabtext'>
              Self organize around a
              <br />
              shared purpose.
            </p>
          </Tab>
          <Tab>
            {/* <div className='tabicondiv'>
              <img src={tabicon2} alt='ds' />
            </div> */}
            <p className='sidetabtext'>
              Set the big picture &
              <br />
              goals, jointly
            </p>
          </Tab>
          <Tab>
            {/* <div className='tabicondiv'>
              <img src={tabicon2} alt='ds' />
            </div> */}
            <p className='sidetabtext'>
              Make decisions, leaving no-
              <br />
              one behind
            </p>
          </Tab>
          <Tab>
            {/* <div className='tabicondiv'>
              <img src={tabicon2} alt='ds' />
            </div> */}
            <p className='sidetabtext'>
              Jam regularly to reflect
              <br />
              and learn
            </p>
          </Tab>
          <Tab>
            {/* <div className='tabicondiv'>
              <img src={tabicon2} alt='ds' />
            </div> */}
            <p className='sidetabtext'>
              Measure what matters,
              <br />
              very often
            </p>
          </Tab>
          <Tab>
            {/* <div className='tabicondiv'>
              <img src={tabicon2} alt='ds' />
            </div> */}
            <p className='sidetabtext'>
              Celebrate the outcomes
              <br />
              and impact
            </p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className='panel-content '>
            <div className='row'>
              <div className='col-sm-6 panelimg'>
                <img src={Tabimg1} alt='sfsd' />
              </div>

              <div className='col-sm-6 panelseconddiv'>
                <img src={Tabimg2} alt='sfsd' />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='panel-content'>
            <div className='row'>
              <div className='col-sm-6 panelimg'>
                <img src={Tabimg2} alt='sfsd' />
              </div>

              <div className='col-sm-6 panelseconddiv'>
                <img src={Tabimg1} alt='sfsd' />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='panel-content'>
            <div className='row'>
              <div className='col-sm-6 panelimg'>
                <img src={Tabimg1} alt='sfsd' />
              </div>

              <div className='col-sm-6 panelseconddiv'>
                <img src={Tabimg2} alt='sfsd' />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='panel-content'>
            <div className='row'>
              <div className='col-sm-6 panelimg'>
                <img src={Tabimg1} alt='sfsd' />
              </div>

              <div className='col-sm-6 panelseconddiv'>
                <img src={Tabimg2} alt='sfsd' />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='panel-content'>
            <div className='row'>
              <div className='col-sm-6 panelimg'>
                <img src={Tabimg1} alt='sfsd' />
              </div>

              <div className='col-sm-6 panelseconddiv'>
                <img src={Tabimg2} alt='sfsd' />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='panel-content'>
            <div className='row'>
              <div className='col-sm-6 panelimg'>
                <img src={Tabimg1} alt='sfsd' />
              </div>

              <div className='col-sm-6 panelseconddiv'>
                <img src={Tabimg2} alt='sfsd' />
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  </div>
);

export default TeamsTabs;
