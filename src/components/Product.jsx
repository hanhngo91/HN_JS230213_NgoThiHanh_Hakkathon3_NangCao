import React from "react";

export default function Product(props) {
  let products = props.products;
  return (
    <>
      {products.map((e, i) => {
        return (
          <div key={i} className="product">
            <img src={e.image} />
            <p id="name">{e.title}</p>
            <span id="price">$ {e.price.toLocaleString()}</span>
            <div className="buy-product">
              <button id={e.id} className="btn-interest">
                interest
              </button>
              <span>{e.quantity}</span>
              <button id={e.id} className="btn-add">
                add
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
