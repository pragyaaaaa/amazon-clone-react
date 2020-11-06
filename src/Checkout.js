import React from 'react'
import './Checkout.css'
import Sumtotal from './Sumtotal'
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className="checkout-ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/35/gateway/mobile/stripe/Amazon_GW_MobileStrip_NTA_orange_1242x150._SX1242_CB469234474_.jpg"
                    alt="checkoutL">
                </img>
                <div className="checkout-title">
                    <h2>Your Cart</h2>
                </div>
            </div>
            <div className="checkout-right">
                <Sumtotal />
            </div>


        </div>
    )
}

export default Checkout
