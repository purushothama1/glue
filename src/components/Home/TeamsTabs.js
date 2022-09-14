import React from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import Tabicondiv from '../../assets/icon11.png';
import Tabimg1 from '../../assets/tabimg1.png';
import Tabimg2 from '../../assets/tabimg2.jpg';
import { Tabicon1 } from '../../assets';
import tabicon3 from '../../assets/tabicon3.png';
// import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import icon5 from '../../assets/icon5.png';
import icon6 from '../../assets/icon6.png';
import icon7 from '../../assets/icon7.png';

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
      {/* <Tabs>
        <TabList>
          <Tab>
            <p className='sidetabtext'>
              Self organize around a
              <br />
              shared purpose.
            </p>
          </Tab>
          <Tab>
            <p className='sidetabtext'>
              Set the big picture &
              <br />
              goals, jointly
            </p>
          </Tab>
          <Tab>
            <p className='sidetabtext'>
              Make decisions, leaving no-
              <br />
              one behind
            </p>
          </Tab>
          <Tab>
            <p className='sidetabtext'>
              Jam regularly to reflect
              <br />
              and learn
            </p>
          </Tab>
          <Tab>
            <p className='sidetabtext'>
              Measure what matters,
              <br />
              very often
            </p>
          </Tab>
          <Tab>
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
      </Tabs> */}
      <div className='col-sm-5 pad-0'>
        <div className='row row-pad rowflex'>
          <div className='col-sm-2 pad-0'>
            <img alt='Tabicon' src={Tabicon1.default} />
          </div>
          <div className='col-sm-10'>
            <p className='teamtext'>
              Self organize around a
              <br />
              shared purpose.
            </p>
          </div>
        </div>
        <div className='row row-pad rowflex'>
          <div className='col-sm-2 pad-0'>
            <img alt='Tabicon' src={tabicon3} />
          </div>
          <div className='col-sm-10'>
            <p className='teamtext'>
              Set the big picture &
              <br />
              goals, jointly
            </p>
          </div>
        </div>
        <div className='row row-pad rowflex'>
          <div className='col-sm-2 pad-0'>
            <img alt='Tabicon' src={icon4} />
          </div>
          <div className='col-sm-10'>
            <p className='teamtext'>
              Make decisions, leaving no-
              <br />
              one behind
            </p>
          </div>
        </div>
        <div className='row row-pad rowflex'>
          <div className='col-sm-2 pad-0'>
            <img alt='Tabicon' src={icon5} />
          </div>
          <div className='col-sm-10'>
            <p className='teamtext'>
              Jam regularly to reflect
              <br />
              and learn
            </p>
          </div>
        </div>
        <div className='row row-pad rowflex'>
          <div className='col-sm-2 pad-0'>
            <img alt='Tabicon' src={icon6} />
          </div>
          <div className='col-sm-10'>
            <p className='teamtext'>
              Measure what matters,
              <br />
              very often
            </p>
          </div>
        </div>
        <div className='row row-pad rowflex'>
          <div className='col-sm-2 pad-0'>
            <img alt='Tabicon' src={icon7} />
          </div>
          <div className='col-sm-10'>
            <p className='teamtext'>
              Celebrate the outcomes
              <br />
              and impact
            </p>
          </div>
        </div>
      </div>
      <div className='col-sm-7 teamimgdiv'>
        <div className='row'>
          <div className='col-sm-6 panelimg'>
            <img src={Tabimg1} alt='sfsd' />
          </div>

          <div className='col-sm-6 panelseconddiv'>
            <img src={Tabimg2} alt='sfsd' />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TeamsTabs;
