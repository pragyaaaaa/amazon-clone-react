import React from 'react'
import './Checkout.css'
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className="checkout-ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_1x._CB428993290_.jpg"
                    alt="checkoutL">
                </img>
                <div className="checkout-title">
                    <h2>Your Cart</h2>
                </div>
            </div>
            <div className="checkout-right">
                <h1>Sum Total</h1>
            </div>


        </div>
    )
}

export default Checkout
