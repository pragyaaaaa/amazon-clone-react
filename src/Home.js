import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img className="home-image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase3/V4/Phase4_Rec_PC_Hero_1X_ENGLISH._CB416347901_.jpg"
                    alt="banner">
                </img>
            </div>
            <div className="home-row">
                {/* product */}
                <Product
                    id={12678}
                    title="Girl Stop Apologizing"
                    image="https://images-na.ssl-images-amazon.com/images/I/91CEhzOF9-L.jpg"
                    price={19.99}
                    rating={3} />
                <Product />
                {/* product */}
            </div>
            <div className="home-row">
                <Product />
                <Product />
                <Product />
            </div>

            <div className="home-row">
                <Product />
            </div>


        </div>
    )
}

export default Home

