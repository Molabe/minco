import React, { useState } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Štvorec 515x515mm', price: 2.5, quantity: 1 },
        { id: 2, name: 'Obdĺžnik 515x823mm', price: 3, quantity: 2 },
    ]);

    const getTotalPrice = () =>
        cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Košík</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} ks - {item.price}€ za kus
                    </li>
                ))}
            </ul>
            <h3>Celková cena: {getTotalPrice()}€</h3>
        </div>
    );
};

export default Cart;
