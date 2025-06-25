import { Product } from '@repo/types'
import React from 'react'

export const Products = async ()=> {
  const response = await fetch(`${process.env.API_URL}/products`, {
    next: {
      tags: ["products"]
    }
  })

  const products: Product[] = await response.json()

  console.log(products);
  

  

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product)=> <div key={product.id} >
          {product.name} - {product.price}
        </div>)}
      </div>
    </div>
  )
}
