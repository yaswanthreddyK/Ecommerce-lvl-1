import React, { useContext, useEffect, useState } from "react"

const ContextProvider = React.createContext()

export function useCartContext(){
    return useContext(ContextProvider)
}

export default function CartContext({children}){
   const [cart, setCart] = useState(()=>{
    let data = sessionStorage.getItem("cart")
    if(!data) return []
    return JSON.parse(data)
 })

 useEffect(()=>{
     sessionStorage.setItem("cart", JSON.stringify(cart))
 },[cart])
 
const value = {
    cart,
    setCart
 }
    return ( 
        <ContextProvider.Provider value={value}>
          {children}
        </ContextProvider.Provider>
    )
}