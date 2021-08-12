import React, { useState, useEffect } from 'react';
import './cartstyling.css';
import Navbar from '../../navbar/Navbar';


const UserCartList = () => {
    const [cart, setCart] = useState([]);
    

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems") || '{}');
        if (cartItems) {
            setCart(cartItems);
            console.log(cart,"cartlist");
        }
    }, [])

    const buyNow = (item: any) => {
        const notBuyed = cart.filter((product: any) => product.id !== item.id);
        setCart(notBuyed)
        console.log(cart, "cart");
        localStorage.setItem("cartItems", JSON.stringify(notBuyed));
    }

    return (
        <>
        <Navbar count={cart.length}/>
        <div id="usercartlist">
            {cart.length === 0 && <h2>Your cart is Empty...</h2>}
            {cart.map((item: any, index: number) => {
                return <div key={index} id="cartDiv">
                    <h3>{item.name}:    Rs-{item.price}/. </h3>
                    <button onClick={() => buyNow(item)}>MakePayment</button>
                </div>
            })}
        </div>
        </>
    );
}
export default UserCartList;