import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
import SingleProduct from './SingleProduct'

const ProductList = () => {

    const [products,setProducts] = useState([])

    const fetchProducts = async() => {
        {/* API'dan gelenleri burada alıyoruz. */}
        const response = await axios.get("https://fakestoreapi.com/products")
        {/* Burada da ekrana veriyoruz. */}
    setProducts(response.data)
    }

    useEffect(() =>{
        fetchProducts()
    },[])




  return (  
    <div className="product-list">
        <ul>
            {products.map((product,id) =>(
                <li> <SingleProduct product = {product} key={id} /></li>
            ))}
        </ul>
    </div>
  )
}

export default ProductList
