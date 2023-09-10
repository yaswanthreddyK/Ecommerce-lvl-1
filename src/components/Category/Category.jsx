import { useLoaderData, useParams, defer, Await, Link } from "react-router-dom";
import { Suspense, useState } from "react";
import { getProducts } from "../../../api";
import Loading from "../pages/Loading";
import "./Category.css";
import GoBack from "../pages/GoBack";

export function loader({ params }) {
  const { category } = params;

  return defer({ products: getProducts(category) });
}

export default function Category() {
  const productsPromise = useLoaderData();
  const { category } = useParams();
  const [filter, setFilter] = useState("");

  function renderProducts(products) {
    const readyProducts = products.map((product) => {
      return (
        <Link key={product.id} className="link" to={`${product.id}`}>
          <article className="product">
            <div className="product-image">
              <img className="single-img" src={product.image} alt="image" />
            </div>
            <div className="details">
              <h5>{product.title}</h5>
              <p>$ {product.price}</p>
              <p>⭐ {product.rating.rate}</p>
            </div>
          </article>
        </Link>
      );
    });
    return readyProducts;
  }
  function filterProducts(products) {

    
     products.sort((p1,p2)=>{
          if(filter === "p-high"){
            
            return   (p1.price > p2.price) ? -1 : (p1.price < p2.price) ? 1 : 0 

          }else if(filter === "p-low"){

            return   (p1.price > p2.price) ? 1 : (p1.price < p2.price) ? -1 : 0 

          }else if(filter === "popularity"){

            return   (p1.rating.rate > p2.rating.rate) ? -1 : (p1.rating.rate < p2.rating.rate) ? 1 : 0 


          }
    })
    return products;
  }

  function handleFilterChange(e) {
    setFilter(e.target.value);
  }

  return (
    <section className="category">
      <GoBack />
      <h1>{category.toUpperCase()}</h1>
      <form className="filters" onChange={handleFilterChange}>
        <h3>Filters</h3>
        <label htmlFor="p-high">
          <input type="radio" name="filter" id="p-high" value="p-high" />
          Price: High to Low
        </label>
        <label htmlFor="p-low">
          <input type="radio" name="filter" id="p-low" value="p-low" />
          Price: Low to High
        </label>
        <label htmlFor="popularity">
          <input
            type="radio"
            name="filter" 
            id="popularity"
            value="popularity"
          />
          Popularity
        </label>
      </form>
      <div>
        <Suspense fallback={<Loading />}>
          <Await resolve={productsPromise.products}>
            {(products) => renderProducts(filterProducts(products))}
          </Await>
        </Suspense>
      </div>
    </section>
  );
}
