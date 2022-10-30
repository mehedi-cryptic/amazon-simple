import React from 'react';
import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    return (
        <div className='product'>
            <div>
                <img src={props.product.img} alt="" />
            </div>
            <div>
                <h1 className='product-name'>{props.product.name}</h1>
                <br />
                <p>By seller : {props.product.seller}</p>
                <p>Price: ${props.product.price} </p>
                <p>Only {props.product.stock} piece left..order soon</p>
                <button className='main-button' onClick={()=> props.handleAddProduct(props.product)} ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;