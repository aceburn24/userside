import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logoheader.png';
import {BiSearch} from 'react-icons/bi';

const Header = () => {  // Updated component name
  return (
    <>
      <header className='header-upper'>
      <div className="container-xxl">
      <div className="row">
        <div className="col-4 m-auto">
          <Link to='/'><img src={logo} alt='' className='img-fluid logo'/></Link>
        </div>
        <div className='col-5 d-flex align-items-center'>
          <Link to='men' className='page-text-color'>Men</Link>
        <div className='spaces-between'></div>
          <Link to='women' className='page-text-color'>Women</Link>
        <div className='spaces-between'></div>
          <Link to='brand' className='page-text-color'>Brand</Link>
        </div>
        <div className='col-2 d-flex align-items-center'>
          <div className="input-wrapper ">
            <button type="button" className='button-search fs-4 '><BiSearch/></button>
            <input type="text" className='input-search' placeholder="Search"/>
          </div>
        </div>
        <div className="col-1 d-flex align-items-center">
          <Link to='Signin' className='header-right mx-2'>Sign&nbsp;In</Link>
          <div className='spaces-between'></div>
          <Link to='Cart' className='header-right mx-2'>Cart </Link>
        </div>
      </div>
    </div>
  </header>
    </>
  );
}

export default Header;  // Updated export
