import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    // const [products,setProducts] = useState([]);
    const products = useLoaderData();
    const [cart,setCart] = useState([]);

    // useEffect(()=>{
    //     // console.log('Products load before fetch');
    //     fetch('products.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         setProducts(data)
    //     //  console.log('Products loaded');
    //     });
    // },[]);
    
    useEffect(()=>{
        // console.log('Local Storage first line',products);
        const storedCart = getStoredCart();
        const savedCart = [];
        // console.log(storedCart);
        for(const id in storedCart){
            // console.log(id);
            const addedProduct = products.find(product => product.id===id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
                // console.log(addedProduct);
            }
    }
    setCart(savedCart);
        // console.log('Local storage finished');
    },[products])

    const handleAddToCart = (selectedProduct) =>{
         let newCart = [];
         const exist = cart.find(product => product.id===selectedProduct.id);
         if(!exist){
            selectedProduct.quantity = 1;
            newCart = [...cart,selectedProduct];
         }
         else{
            const rest = cart.filter(product => product.id!== selectedProduct.id);
            exist.quantity+=1;
            newCart = [...rest,exist];
         }
        // console.log('Item cart',product);
        // cart.push(product);
        // const newCart = [...cart,product];
        // const item= product.category;
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    
    return (
        <div className='shop-container'>
         
         <div className="products-container">
         {
            products.map(product =>
              <Product 
              product={product} 
              key={product.id}
              handleAddToCart = {handleAddToCart}
              ></Product>
            )
         }
         </div>

         <div className="cart-container">
           <Cart cart={cart}></Cart>
         </div>  

        </div>
    );
};

export default Shop;