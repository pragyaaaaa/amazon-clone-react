import React from 'react'
import './Product.css'
function Product({ title, image, price, rating }) {
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
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
