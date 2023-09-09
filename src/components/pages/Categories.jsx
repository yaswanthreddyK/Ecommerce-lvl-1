import "./Categories.css"
import Jewellery from "../../assets/categories/jewellery.jpg"
import Electronics from "../../assets/categories/electronics.png"
import MensClothing from "../../assets/categories/mensclothing.webp"
import WomensClothing from "../../assets/categories/womensclothing.webp"
import { Link } from "react-router-dom"

export default function Categories() {
  return (
    <section id="cat">
        <div>
            <h1>Categories</h1>
             <article>
                <Link to="jewelery">
                <div>
                    <img src={Jewellery}/>
                </div>
                <h3>Jewellery</h3>
                </Link>
             </article>
             <article>
                <Link to="electronics">
                <div>
                    <img src={Electronics}/>
                </div>
                <h3>Electronics</h3>
                </Link>
             </article>
             <article>
                <Link to="men's clothing">
                <div>
                    <img src={MensClothing}/>
                </div>
                <h3>Men's Clothing</h3>
                </Link>
             </article>
             <article>
                <Link to="women's clothing">
                <div>
                    <img src={WomensClothing}/>
                </div>
                <h3>Women's Clothing</h3>
                </Link>
             </article>
        </div>
    </section>
  )
}
