import React from 'react';
import Logo from '../../assets/logo.png';
import Facebookicon from '../../assets/facebookicon.png';
import Instaicon from '../../assets/instaicon.png';
import Twittericon from '../../assets/twittericon.png';

const Footer = () => (
  <div className='footermaindiv'>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-3 fooetrimgdiv'>
          <div className='row footerlogodiv'>
            <img className='footerlogo' alt='logo' src={Logo} />
          </div>

          <p className='pooterlinks pooterlinkstext'>
            <span>
              Made with love by
              <br />
              people who wanna
              <br />
              make work suck less
            </span>
          </p>

          <div className='row socialdiv'>
            <p className='linkshead'>Follow us</p>
            <img alt='dfs' src={Facebookicon} />
            <img alt='dfs' src={Instaicon} />
            <img alt='dfs' src={Twittericon} />
          </div>
        </div>
        <div className='col-sm-3 footerrow'>
          <p className='pooterlinks'>
            <a className='linkshead' hef='/'>
              lorem
            </a>
          </p>
          <p className='pooterlinks'>
            <a hef='/'>lorem ipsum wqedwq</a>
          </p>
          <p className='pooterlinks'>
            <a hef='/'>lorem ipsum</a>
          </p>
          <p className='pooterlinks'>
            <a hef='/'>lorem ipsum dwqfwe</a>
          </p>
        </div>
        <div className='col-sm-3 footerrow'>
          <p className='pooterlinks'>
            <a className='linkshead' hef='/'>
              About
            </a>
          </p>
          <p className='pooterlinks'>
            <a hef='/'>lorem ipsum</a>
          </p>
          <p className='pooterlinks'>
            <a hef='/'>lorem ipsum</a>
          </p>
          <p className='pooterlinks'>
            <a hef='/'>lorem ipsum</a>
          </p>
        </div>
        <div className='col-sm-3 footerrow'>
          <p className='pooterlinks'>
            <a className='linkshead' hef='/'>
              lorem ipsum
            </a>
          </p>
          <p className='pooterlinks'>
            <a hef='/'>lorem ipsum</a>
          </p>
          <p className='pooterlinks'>
            {' '}
            <a hef='/'>lorem ipsum</a>
          </p>
          <p className='pooterlinks'>
            {' '}
            <a hef='/'>lorem ipsum</a>
          </p>
          <p className='pooterlinks'>
            {' '}
            <a hef='/'>lorem ipsum</a>
          </p>
        </div>
      </div>
      <hr className='footerhr' />
      <div className='row'>
        <p className='rights'>© 2022 GLUE | ALL RIGHTS RESERVED</p>
      </div>
    </div>
  </div>
);

export default Footer;
