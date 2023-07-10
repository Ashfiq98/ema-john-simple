import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let total = 0,shipping=0;
    let quantity=0;
    for(const product of cart){
        quantity+=product.quantity;
        // console.log(quantity);
        total+=(product.price*product.quantity);
        shipping+=(product.shipping*product.quantity);
    }
    const tax = parseFloat((total*0.1).toFixed(2));
    const grandTotal = total+shipping+tax;
    return (
        <div className='cart'>
           <h4>Order Summary</h4>
            <p>Selected items : {quantity}</p>  
           <p>Total Price : ${total} </p>
           <p>Total Shipping : ${shipping}</p>
           <p>Tax : {tax}</p>
           <h5>Grand Total : {grandTotal}</h5>
        </div>
    );
};

export default Cart;