import React from 'react'
import './Checkout.css'
import Sumtotal from './Sumtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
function Checkout() {
    const [{ cart, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className="checkout-ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/35/gateway/mobile/stripe/Amazon_GW_MobileStrip_NTA_orange_1242x150._SX1242_CB469234474_.jpg"
                    alt="checkoutL">
                </img>
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout-title">Your Cart</h2>
                    {cart.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        >
                        </CheckoutProduct>
                    ))}
                    {/* checkoutproduct */}
                </div>
            </div>
            <div className="checkout-right">
                <Sumtotal />
            </div>


        </div>
    )
}

export default Checkout
