import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Hamberger from '../../assets/menu.png';
import close from '../../assets/close.png';

const Layout = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <nav className='navbar' onClick={(e) => e.stopPropagation()}>
      <div className='nav-container'>
        {/* <NavLink exact to='/' className='nav-logo'>
          <i className='fa fa-code' />
        </NavLink> */}
        <img className='logo' alt='logo' src={Logo} />

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink
              exact
              to='/products'
              activeClassName='active'
              className='nav-links'
              onClick={click ? handleClick : null}
            >
              Products
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact
              to='/pricing'
              activeClassName='active'
              className='nav-links'
              onClick={click ? handleClick : null}
            >
              Pricing
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact
              to='/resources'
              activeClassName='active'
              className='nav-links'
              onClick={click ? handleClick : null}
            >
              Resources
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink
              exact
              to='/request-a-demo'
              activeClassName='active'
              className='nav-links'
              onClick={click ? handleClick : null}
            >
              Request a Demo
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact
              to='/login'
              activeClassName='active'
              className='nav-links'
              onClick={click ? handleClick : null}
            >
              Login
            </NavLink>
          </li>
          <li className='nav-item signupli'>
            <NavLink
              exact
              to='/Signup'
              activeClassName='active'
              className='nav-links'
              onClick={click ? handleClick : null}
            >
              Signup
            </NavLink>
          </li>
        </ul>
        <div role='button' className='nav-icon' onClick={handleClick}>
          <i className='fa fa-bars' />
          {!click ? (
            <img className='hamberger' alt='fgh' src={Hamberger} />
          ) : (
            <img alt='fghi' src={close} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Layout;
