import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

const Checkout = () => {

    const [{ basket }] = useStateValue()

    return (
        <div className="checkout" >

            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="Image AD"
                />
                {basket?.length === 0 ?
                    (
                        <h2 className="checkout__title" >Your Shopping Cart is empty.</h2>
                    ) :
                    (<div>
                        <h2 className="checkout__title" >Your Shopping Cart</h2>
                        {basket.map(item => (
                            <CheckoutProduct
                                key={Math.random() + Math.random()}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />)
                        )}

                    </div>)
                }
            </div>

            {basket.length > 0 && (
                <div className="checkout__right" >
                    
                    <Subtotal/>
                </div>
            )}

        </div>


    )
}

export default Checkout;