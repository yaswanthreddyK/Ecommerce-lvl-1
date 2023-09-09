import "./ProductDetails.css";
import { getProductDetails } from "../../../api";
import { Await, defer, useLoaderData } from "react-router-dom";
import { Suspense, useState } from "react";
import Loading from "../pages/Loading";
import { useCartContext } from "../contexts/CartContext";
import GoBack from "../pages/GoBack";
export function loader({ params }) {
  const { id } = params;
  return defer({ product: getProductDetails(id) });
}

export default function ProductDetails() {
  const [state, setState] = useState(0);
  const productDetailsPromise = useLoaderData();
  const { cart, setCart} = useCartContext()

  function renderProduct(product) {
    const readyProduct = (
      <>
        <article key={product.id} className="product">
          <div className="product-image single">
            <img src={product.image} alt="image" />
          </div>
          <div className="details">
            <h2>{product.title}</h2>
            <p className="desc">{product.description}</p>
            <p className="price">Price: $ {product.price}</p>
            <p className="rating">⭐ {product.rating.rate}</p>
          </div>

          <div className="add-to-cart">
            <div className="count">
              <button className="btn decrement" onClick={handleLeftClick}>-</button>
              <div className="input-count">
              <input  className="input-count" type="number" value={state} onChange={handleInputChange} />
              </div>
              <button className="btn increment" onClick={handleRightClick}>+</button>
            </div>
            <button className="cart-btn" onClick={()=> addToCart(product)}>Add to cart</button>
          </div>
        </article>
      </>
    );
    return readyProduct;
  }

  function addToCart(product) {
    if(state === 0) return 
      setCart(prev => [...prev,[{...product,specialId: crypto.randomUUID()}, state]])
     
  }
  function handleInputChange(e) {
    setState(parseInt(e.target.value));
  }

  function handleLeftClick() {
    if (state === 0) return;

    setState((prev) => prev - 1);
  }

  function handleRightClick() {
    if (state === 10) return;

    setState((prev) => prev + 1);
  }

  return (
    <section className="single-product-section">
      <GoBack />
      <Suspense fallback={<Loading />}>
        <Await resolve={productDetailsPromise.product}>
          {(product) => renderProduct(product)}
        </Await>
      </Suspense>
    </section>
  );
}
