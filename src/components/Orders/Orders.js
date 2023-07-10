import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const {products,previousCart} = useLoaderData();
    const [cart,setCart] = useState(previousCart);
    
    const handleRemoveItem = (id)=>{
        const remaining = cart.filter(product=> product.id!==id)
        setCart(remaining);
        removeFromDb(id);
    }
    // console.log(cart)
    return (
        <div className='shop-container'>
            {/* <h1>This is orders {products.length}</h1>
            <h2> Cart {previousCart.length}</h2> */}
            <div className='orders-container'>
            {
                
                cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveItem={handleRemoveItem}
                    >
                    </ReviewItem> )
            }
            </div>
            <div className='cart-container'>
             <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;