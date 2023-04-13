import React from "react";

export default function CartItem(props) {
  let { name, quantity } = props;
  return (
    <div>
      <span>{name}</span>
      <span>{quantity}</span>
    </div>
  );
}
