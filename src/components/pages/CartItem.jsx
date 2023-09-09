import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { useCartContext } from "../contexts/CartContext";

export default function CartItem({ productDetails }) {
  const { cart, setCart } = useCartContext();
  const product = productDetails[0];
  const count = productDetails[1];

  function handleRightClick() {
    if (count === 10) return;

    let cartCopy = [...cart];

    cartCopy = cartCopy.map((p) => {
      if (p[0].specialId === product.specialId) {
        p[1]++;
      }
      return p;
    });

    setCart([...cartCopy]);
  }

  function handleLeftClick() {
    let cartCopy = [...cart];

    cartCopy = cartCopy.map((p) => {
      if (p[0].specialId === product.specialId) {
        p[1]--;
      }

      return p;
    });

    cartCopy = cartCopy.filter((p) => p[1] !== 0);
    setCart([...cartCopy]);
  }

  function handleChange() {}

  return (
    <article className="product" key={product.id}>
      <div className="product-image">
        <Link to="">
          <img src={product.image} alt="image" />
        </Link>
      </div>
      <div className="details">
        <h4>{product.title}</h4>
        <p>$ {count * product.price}</p>
        <div className="count">
          <button className="btn decrement" onClick={handleLeftClick}>
            -
          </button>
          <div className="input-count">
            <input
              className="input-count"
              type="number"
              value={count}
              onChange={handleChange}
            />
          </div>
          <button className="btn increment" onClick={handleRightClick}>
            +
          </button>
        </div>
      </div>
    </article>
  );
}
