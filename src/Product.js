import React from 'react';
import './Product.css'
import { useStateValue } from './StateProvider'

const Product = ({ id, title, price, rating, image }) => {

    const [{ basket }, dispatch] = useStateValue()
    
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating
            }
        })
    }

    return (
        <div className="product" >
            <div className="product_info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) =>
                                (
                                    <p key={Math.random() + Math.random()}>*</p>
                                )
                            )
                    }
                </div>
            </div>

            <img src={image} alt="item" />
            <button onClick={addToBasket} >ADD TO CART</button>
        </div>

    );
}

export default Product;