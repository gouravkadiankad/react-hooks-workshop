import React from 'react'
import Product from './Product'
import { UseFetch } from '../9-custom-hooks/2-useFetch'

const url = 'https://course-api.com/react-prop-types-example'

const Index = () => {
  const { products } = UseFetch(url)
  return (
    <div>
      <h2>products</h2>
      <section className='products'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </section>
    </div>
  )
}

export default Index
