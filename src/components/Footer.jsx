import React from 'react';
import { Link } from 'react-router-dom';
import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs';

const Footer = () => {  // Updated component name
  return (
    <>
       <footer className='footer p-3'>
  <hr className='my-4' />
      <div className="row">
        <div className="col-12 col-md-6">
          
          <p className="text-center text-md-start">&copy;2023 Calcium & Joyjoy</p>
        </div>
        <div className="col-5 col-md-6 ">
          <ul className=" justify-content-around text-md-end">
            <Link to='https://www.facebook.com/calciumjoyjoyph27' target='_blank'><BsFacebook className='social-icons fs-4'/></Link>
            <Link to='https://twitter.com/calciumjoyjoyoy' target='_blank'><BsTwitter className='social-icons fs-4'/></Link>
            <Link to='https://www.instagram.com/calciumjoyjoyonlineshop/?hl=en' target='_blank'><BsInstagram className='social-icons fs-4'/></Link>
          </ul>
        </div>
      </div>
  </footer>
    </>
  );
}

export default Footer;  // Updated export
