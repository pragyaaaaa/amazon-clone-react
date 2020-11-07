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
                <Product
                    id={12679}
                    title="Acer Nitro 5 Intel Core i5-9th Gen 15.6-inch Display 1920 x 1080 Thin and Light Gaming Laptop (8GB Ram+16GB Optane/1TB HDD/Windows 10 Home/GTX 1650 Graphics/Obsidian Black/2.3 Kgs), AN515-54"
                    image="https://images-na.ssl-images-amazon.com/images/I/71QXJg8uOCL._SL1500_.jpg"
                    price={799.99}
                    rating={4} />
                {/* product */}
            </div>
            <div className="home-row">
                <Product
                    id={12680}
                    title="Lavie Cleo Women's Shoulder Bag"
                    image="https://images-na.ssl-images-amazon.com/images/I/71cBlp%2B%2BnFL._UL1500_.jpg"
                    price={99.99}
                    rating={4} />
                <Product
                    id={12681}
                    title="Aquaguard Aura 7L RO+UV e-boiling + MTDS water purifier with Active Copper & Mineral Guard Technology ,8 stages of Purification (Black & Copper)"
                    image="https://images-na.ssl-images-amazon.com/images/I/51rr5o7FEFL._SL1100_.jpg"
                    price={299.99}
                    rating={3} />
                <Product
                    id={12682}
                    title="New Apple iPhone 12 Pro Max (128GB) - Graphite"
                    image="https://images-na.ssl-images-amazon.com/images/I/71XXJC7V8tL._SL1500_.jpg"
                    price={599.99}
                    rating={4} />
            </div>

            <div className="home-row">
                <Product
                    id={12683}
                    title="Mi TV 4A PRO 108 cm (43 Inches) Full HD Android LED TV (Black) | With Data Saver"
                    image="https://images-na.ssl-images-amazon.com/images/I/71f-d89oqvL._SL1500_.jpg"
                    price={199.99}
                    rating={3} />
                <Product
                    id={12684}
                    title="Faber 60 cm 1200 m³/hr angular Kitchen Chimney (HOOD EVEREST SC TC HC BK 60, Filterless technology, Touch Control, Black)"
                    image="https://images-na.ssl-images-amazon.com/images/I/61RKjBPjs1L._SL1500_.jpg"
                    price={359.99}
                    rating={4} />
            </div>


        </div>
    )
}

export default Home

