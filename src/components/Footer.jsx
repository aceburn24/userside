import { Link } from 'react-router-dom';
import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs';

function Footer() {
  return (
    <footer className='footer p-3'>
      <div className="footer-container container">
        <div className="row">
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/return-policy">Return Policy</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Newsletter</h5>
            <p>Stay updated with our latest offers and news</p>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <div className="col-md-4 text-center text-md-right">
            <h5>Connect with us</h5>
            <ul className="d-flex justify-content-around">
              <Link to='https://www.facebook.com/calciumjoyjoyph27' target='_blank'><BsFacebook className='social-icons social-fb fs-4' /></Link>
              <Link to='https://twitter.com/calciumjoyjoyoy' target='_blank'><BsTwitter className='social-icons social-twt fs-4' /></Link>
              <Link to='https://www.instagram.com/calciumjoyjoyonlineshop/?hl=en' target='_blank'><BsInstagram className='social-icons social-ig fs-4' /></Link>
            </ul>
            <p className="mt-3">&copy;2023 Calcium & Joyjoy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
