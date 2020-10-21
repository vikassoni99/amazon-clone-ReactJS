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
                    id={12345}
                    title="Alexa"
                    price={250}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
                />
                <Product
                    id={12345}
                    title="Alexa"
                    price={250}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id={12345}
                    title="Alexa"
                    price={250}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
                />
                <Product
                    id={12345}
                    title="Alexa"
                    price={250}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
                />
                <Product
                    id={12345}
                    title="Alexa"
                    price={250}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id={12345}
                    title="Alexa"
                    price={250}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
                />
               
            </div>
        </div>
    );
}

export default Home; 