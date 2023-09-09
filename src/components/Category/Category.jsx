import { useLoaderData, useParams, defer, Await, Link } from "react-router-dom"
import { Suspense } from "react"
import { getProducts } from "../../../api"
import Loading from "../pages/Loading"
import "./Category.css"
import GoBack from "../pages/GoBack"

export   function loader({params}){
   const {category} = params

   return defer({products :  getProducts(category)})
}


export default function Category() {
  const productsPromise = useLoaderData()
  const { category } = useParams()


  function renderProducts(products){

    const readyProducts = products.map(product=> {
     return <Link key={product.id} className="link" to={`${product.id}`}>
      <article  className="product">
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
    })
    return readyProducts
  }

  return (
    <section className="category">
     <GoBack/>
    <h1>{category.toUpperCase()}</h1>
      <div>
 <Suspense fallback={<Loading/>}>
   <Await resolve={productsPromise.products}>
      {(products)=> renderProducts(products)}
   </Await>
 </Suspense>
      </div>
    </section>
  )
}
