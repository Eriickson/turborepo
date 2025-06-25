import React from 'react'
import { CreateProduct } from './create-product'
import { Products } from './products'

export const dynamic = "force-dynamic"
export default function HomePage() {
  return (
    <div>
      <CreateProduct/>
      <Products/>
    </div>
  )
}
