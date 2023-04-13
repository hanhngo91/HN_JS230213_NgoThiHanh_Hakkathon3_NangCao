import React from "react";
import CartItem from "./CartItem";
import "./Style_ShoppingCart.css";

export default function ShoppingCart(props) {
  let { sumBuy, cartItems, handleReset, handleAdjustQuantity } = props;
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul
        style={{ listStyleType: "none" }}
        className="cart-item"
        onClick={handleAdjustQuantity}
      >
        {cartItems.length != 0
          ? cartItems.map((item, i) => (
              <li>
                <CartItem
                  key={i}
                  name={item.title}
                  quantity={item.quantity}
                  id={item.id}
                />
              </li>
            ))
          : ""}
      </ul>
      <div>
        <span className="total">Total: ${sumBuy.toLocaleString()}</span>
        <button className="btnReset" onClick={handleReset}>
          Reset Cart
        </button>
      </div>
    </div>
  );
}
