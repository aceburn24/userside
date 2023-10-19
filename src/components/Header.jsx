import logo from '../assets/images/logoheader.png';
import { BiSearch } from 'react-icons/bi';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import CartIcon from 'bootstrap-icons/icons/cart-fill.svg';
import HeartIcon from 'bootstrap-icons/icons/heart-fill.svg';
import PersonIcon from 'bootstrap-icons/icons/person-fill.svg';

const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header className='header-upper'>
      <div className="container-header container-fluid">
        <div className="row">
          <div className="col-4">
            <Link to='/'><img src={logo} alt='' className='img-fluid logo left-aligned-img' /></Link>
          </div>
          <div className='col-4 d-flex align-items-center'>
            <Link to='men' className='page-text-color'>Men</Link>
            <div className='spaces-between'></div>
            <Link to='women' className='page-text-color'>Women</Link>
            <div className='spaces-between'></div>
            <Link to='brand' className='page-text-color'>Brand</Link>
          </div>
          <div className='col-2 d-flex align-items-center'>
            <div className="input-wrapper ">
              <button type="button" className='button-search fs-4 '><BiSearch /></button>
              <input type="text" className='input-search' placeholder="Search" />
            </div>
          </div>
          <div className="col-1 d-flex align-items-center">
            {isAuthenticated ? (
              <Link to="/profile">
                <img src={PersonIcon} alt="Profile Icon" className="mb-1" width="16" height="16" />
              </Link>
            ) : (
              <Link to='/auth' className='header-right mx-2'>Sign&nbsp;In</Link>
            )}
            <div className='spaces-between'></div>
            <Link to="/wishlist">
              <img src={HeartIcon} alt="Wishlist Icon" className="mb-1" width="20" height="20" />
            </Link>
            <div className='spaces-between'></div>
            <Link to="/cart">
              <img src={CartIcon} alt="Cart Icon" className="mb-1" width="20" height="20" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
