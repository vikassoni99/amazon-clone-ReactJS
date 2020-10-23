import React from 'react';
import './Home.css'
import Product from './Product'

const Home = (props) => {
    return (
        <div className="home">
            {/* https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg*/}
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="Home Banner"
            />

            <div className="home__row">
                <Product
                    id={"sdfdbhkad"}
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={350}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
                <Product
                    id={"dvwgs"}
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={5699}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
            </div>
            <div className="home__row">
                <Product
                    id={"asadfdv"}
                    title="Samsung LC4 Fitness Band"
                    price={1800}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                <Product
                    id={"cacvv"}
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={2500}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                />
                <Product
                    id={"dcad"}
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={32000}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id={"cadc"}
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={180000}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
               
            </div>
        </div>
    );
}

export default Home; 