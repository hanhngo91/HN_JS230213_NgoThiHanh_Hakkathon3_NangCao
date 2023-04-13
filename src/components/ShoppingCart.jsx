import React, { useState } from "react";
import CartItem from "./CartItem";

export default function ShoppingCart(props) {
  let sumBuy = props.sumBuy;
  let cartItems = props.cartItems;
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="cart">
      <h2>Shopping_Cart</h2>
      <div className="cart-item">
        {cartItems.length != 0
          ? cartItems.map((item, i) => (
              <CartItem key={i} name={item.title} quantity={item.quantity} />
            ))
          : ""}
      </div>
      <h3>Total: ${sumBuy.toLocaleString()}</h3>
    </div>
  );
}
