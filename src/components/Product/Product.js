import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {handleAddToCart,product} = props;
    const {name,img,seller,ratings,price} = product;
   
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <h6 className='product-name'>{name}</h6>
              <h4>Price : {price}</h4>
               <p><small>Seller : {seller}</small></p>   
               <p><small>Rating : {ratings}</small></p>     
            </div>  
            <button onClick={()=> handleAddToCart(product)} className='btn-cart'>
               <p> Add to cart  <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></p>
              
            </button>
        </div>
    );
};

export default Product;