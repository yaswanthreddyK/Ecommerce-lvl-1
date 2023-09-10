
import { useCartContext } from "../contexts/CartContext"
import "./Cart.css"
import GoBack from "./GoBack"
import CartItem from "./CartItem"


export default function Cart(){
    const { cart, setCart } = useCartContext()
    
    let totalItems = 0;
    let totalCost = 0;
    cart.forEach(p=>{
      totalItems += p[1]
      totalCost += p[0].price * p[1]
    })

    
   function renderProduct(productDetails){

  return <CartItem key={productDetails[0].specialId} productDetails={productDetails}/>
   }


    return (
        <section className="cart-section">
          <GoBack/>
          {!cart && <h2>Cart is Empty</h2>}
       {cart.map(product => {
         return renderProduct(product)
       })}
       
       <div className="checkout">
        <p style={{fontWeight:"500"}}>Total Items: {totalItems}</p>
        <p style={{fontWeight:"500"}}>Total Cost: $ {totalCost.toFixed(2)}</p>
        <button disabled={true} className="buy-now">Buy Now</button>
       </div>
      </section>
    )
}