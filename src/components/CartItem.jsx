import React from "react";
export default function CartItem(props) {
  let { name, quantity, id } = props;
  return (
    <div
      className="abc"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div>
        <span style={{ fontWeight: "700" }}>{name}</span>
      </div>
      <div style={{ marginLeft: "200px" }}>
        <button id={id} className="btn-tru">
          -
        </button>
        <span>{quantity}</span>
        <button id={id} className="btn-cong">
          +
        </button>
      </div>
    </div>
  );
}
