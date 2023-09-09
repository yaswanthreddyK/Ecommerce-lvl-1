import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from "react-router-dom"


import Navbar from "./components/pages/Navbar"
import Categories from "./components/pages/Categories"
import Category, {loader as categoryLoader }from "./components/Category/Category"
import "./App.css"
import ProductDetails, { loader as productDetailsLoader } from "./components/Category/ProductDetails"
import Cart from "./components/pages/Cart"
import CartContext from "./components/contexts/CartContext"

export default function App(){
  
  const router = createBrowserRouter(createRoutesFromElements(
   <Route  path="/" element={<Navbar/>}>
    <Route index element={<Categories/>}/>
    <Route path="cart" element={<Cart />}/>
    <Route path=":category" element={<Category/>} loader={categoryLoader}/>
    <Route path=":category/:id" element={<ProductDetails/>} loader={productDetailsLoader}/>
   </Route>
  ))  
  
  return (
    <CartContext>
    <RouterProvider router={router}/>
    </CartContext>
  )
}