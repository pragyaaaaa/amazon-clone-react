import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
function Payment() {
    const [{ cart, user }, dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className='payment-container'>
                <h1>
                    Checkout (<Link to='./checkout'>{cart?.length} items</Link>)
                </h1>
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment-address'>
                        <p>{user?.email}</p>
                        <p>Viman Nagar</p>
                        <p>Pune, Maharashtra-14</p>
                    </div>
                </div>
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Review Items</h3>
                    </div>
                    <div className='payment-items'>
                        {cart.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}>
                            </CheckoutProduct>
                        ))}
                    </div>
                </div>
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment-details'>
                        {/* Stripe stuff */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
