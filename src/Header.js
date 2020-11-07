import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider'
import { db, auth } from './firebase'
/* logo, search, login, orders, prime, cart */
function Header() {
    const [{ cart, user }, dispatch] = useStateValue();
    const handleAuth = () => {
        auth.signOut();
    }
    return (
        <div className='header'>
            <Link to="/">
                <img
                    className="header-logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                    alt="amazon-logo" />
            </Link>
            <div
                className="header-search">
                <input
                    className="header-search-input"
                    type="text"></input>
                <SearchIcon
                    className="header-search-icon">

                </SearchIcon>

            </div>
            <div className="header-nav">
                <Link to={!user && './login'}>
                    <div onClick={handleAuth} className="header-option">
                        <span className="header-option-lineone">
                            Hello,
                            {user ? user.email : 'guest'}
                        </span>
                        <span className="header-option-linetwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                <Link to='./orders'>
                    <div className="header-option">
                        <span className="header-option-lineone">
                            Returns
                    </span>
                        <span className="header-option-linetwo">
                            & Orders
                    </span>
                    </div>
                </Link>
                <div className="header-option">
                    <span className="header-option-lineone">
                        Your
                    </span>
                    <span className="header-option-linetwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header-option-basket">
                        <ShoppingCartIcon>
                        </ShoppingCartIcon>
                        <span className="header-option-linetwo header-basket-count">
                            {cart?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;
