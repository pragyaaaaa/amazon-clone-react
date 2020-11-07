import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }
    return (
        <div className='checkoutproduct'>
            <img
                className="checkoutproduct-image"
                src={image}
                alt="checkout-product">
            </img>
            <div className="checkoutproduct-info">
                <p className='checkoutproduct-title'>{title}</p>
                <p className='checkoutproduct-price'>
                    <small>$</small>
                    <strong>{price}</strong></p>
                <div className='checkoutproduct-rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromCart}>Remove from Cart</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
