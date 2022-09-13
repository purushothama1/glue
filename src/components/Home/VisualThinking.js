import React from 'react';
import Visualthinkingbg from '../../assets/visualthinkingbg.png';
import Nudges from '../../assets/nudges.png';
import IntegrationsIcon from '../../assets/integrations.png';

const VisualThinking = () => (
  <div className='container'>
    <div className='row visualrow'>
      <div className='visual-wrapper'>
        <div className='col-sm-4'>
          <div className='canvasdiv'>
            <img alt='wfw' src={Visualthinkingbg} />
            <p className='visualhead'>Infinite Canvas</p>
            <p className='visualsub'>For visual thinking & gamified planning</p>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='canvasdiv'>
            <img alt='wfw' src={IntegrationsIcon} />
            <p className='visualhead'>300+ Integrations</p>
            <p className='visualsub'>
              Seamlessly work with email, drives & chat tools
            </p>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='canvasdiv'>
            <img alt='wfw' src={Nudges} />
            <p className='visualhead'>AI Nudges</p>
            <p className='visualsub'>
              Self-management & agility (minus the drama)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default VisualThinking;
