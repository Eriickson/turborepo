import React from 'react'
import { CreateProduct } from './create-product'
import { Products } from './products'

export const dynamic = "dynamic-force"
export default function HomePage() {
  return (
    <div>
      <CreateProduct/>
      <Products/>
    </div>
  )
}
