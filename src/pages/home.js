import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ReactTypingEffect from 'react-typing-effect';
import { appInit } from '../state';
import Layout from '../components/Layout/Layout';
// import Bordom from '../assets/bordom.png';
import { Bordom } from '../assets';
import VisualThinking from '../components/Home/VisualThinking';
import TeamsTabs from '../components/Home/TeamsTabs';
import MakeWork from '../components/Home/MakeWork';
import Footer from '../components/Footer/Footer';
import VideoSection from '../components/Home/VideoSection';
// import TypingEffect from '../components/Home/TypingEffect';
// import Animation from "../components/Home/Animation";

const Home = () => {
  const dispatch = useDispatch();
  // const [replace, setReplace] = useState('mohan');
  // const [content, setContent] = useState('mohan kumar');

  console.log(Bordom, 'hiiiii');
  useEffect(() => {
    dispatch(appInit(true));
  }, []);

  // console.log(replace, content, 'mohan');

  // const data = [];
  // const repl = ['mohan', 'Boredom', 'Hierarchy', 'Pyramids'];
  // const wid = ['mohan kumar', 'Playfulness', 'Holacracy', 'Circles'];

  return (
    <>
      <div className='cwr_homepage_wrapper '>
        <div className='cwr_header'>
          {/* <img src={Logo.default} alt='' className='header_logo' /> */}
          <Layout />
        </div>
        {/* <div className='cwr_body'>
        <div className='body_heading' />
        <div className='body_text'>
          <div className='col-sm-6'>sfdsfd</div>
          <div className='col-sm-6'>sfdsfdewfsefged</div>
        </div>
      </div> */}

        <div className='container bordem_wrapper'>
          <div className='row'>
            <div className='col-sm-6' style={{ paddingLeft: '0px' }}>
              <div className='bordom_wrapper'>
                <p className='border_text'>
                  <span className='replacetext'>Replace </span>
                  <span className='bordomtext'>
                    <ReactTypingEffect
                      text={['Ego', 'Manipulation', 'Too much talk', 'Bias']}
                      cursorClassName='textcursor'
                      speed={50}
                      typingDelay={0}
                      eraseDelay={1000}
                    />
                  </span>

                  <br />
                  <span className='replacetext'>with </span>
                  <span className='playfultext'>
                    <ReactTypingEffect
                      text={['Humility', 'Truth', 'Sharp actions', 'Equality']}
                      cursorClassName='textcursor'
                      typingDelay={0}
                      eraseDelay={1000}
                    />
                  </span>
                </p>
                <p className='bordom-subtext'>
                  Glue binds teams to do great things, effortlessly
                </p>
                <button className='start-button'>Start a Project</button>
              </div>
            </div>
            <div
              className='col-sm-6'
              style={{ paddingRight: '0px', paddingLeft: '0px' }}
            >
              <img src={Bordom.default} alt='df' className='bordomimg' />
            </div>
          </div>
        </div>
      </div>
      <div className='bgimg' />

      {/* <div className='container videosection '>
        <Responsive />
      </div> */}

      <TeamsTabs />
      <div className='container'>
        <MakeWork />
      </div>
      <div className='visualthink '>
        {/* <div className='row'>asfswegfresged</div> */}
        <VisualThinking />
      </div>
      <div className=' videosection '>
        <VideoSection />
      </div>
      <div className='vidiosectionbg' />
      <Footer />
      {/* <TextAnimation /> */}
    </>
  );
};

export default Home;
