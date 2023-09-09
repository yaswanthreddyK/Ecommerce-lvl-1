
export async  function getProducts(category){
    
    const url = `https://fakestoreapi.com/products/category/${category}?limit=20`


    const res = await fetch(url)
    const products = await res.json()

    return products
     
}

export async  function getProductDetails(id){
    
    const url = `https://fakestoreapi.com/products/${id}`


    const res = await fetch(url)
    const products = await res.json()

    return products
     
}