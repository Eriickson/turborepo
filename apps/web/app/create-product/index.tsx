import React from 'react'
import { createProduct } from './action'

export const CreateProduct = () => {
  return (
    <div>
      <form action={createProduct}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name='name' id="name" />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="text" name='price' id="price" />
        </div>
        <button type="submit">
          Create Product
        </button>
      </form>
    </div>
  )
}
