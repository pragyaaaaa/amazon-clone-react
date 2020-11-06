import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
/* logo, search, login, orders, prime, cart */
function Header() {
    return (
        <div className='header'>
            <Link></Link>
            <img
                className="header-logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt="amazon-logo" />
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
                <div className="header-option">
                    <span className="header-option-lineone">
                        Hello, Pragya.
                    </span>
                    <span className="header-option-linetwo">
                        Sign in.
                    </span>
                </div>
                <div className="header-option">
                    <span className="header-option-lineone">
                        Returns
                    </span>
                    <span className="header-option-linetwo">
                        & Orders
                    </span>
                </div>
                <div className="header-option">
                    <span className="header-option-lineone">
                        Your
                    </span>
                    <span className="header-option-linetwo">
                        Prime
                    </span>
                </div>
                <div className="header-option-basket">
                    <ShoppingCartIcon>    
                    </ShoppingCartIcon>
                    <span className="header-option-linetwo header-basket-count"></span>
                </div>
            </div>
        </div>
    )
}

export default Header;
