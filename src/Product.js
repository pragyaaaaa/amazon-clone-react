import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
function Product({ id, title, image, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();
    const addToCart = () => {
        //sent item to data layer
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })

    }
    return (
        <div className="product">
            {/* title, price, star rating, add to cart button, image */}
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img src={image}
                alt="product">
            </img>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
