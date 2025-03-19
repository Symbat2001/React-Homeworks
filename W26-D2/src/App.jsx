import React from 'react'
import ProductCard from './ProductCard'
import BookCard from './BookCard'

import './App.css'

function App() {
  return (
    <>
    <h1>Product Cards</h1>
      <div className='product'>
        <ProductCard
          name="Laptop"
          image="https://i5.walmartimages.com/seo/HP-15-6-Ryzen-5-8GB-256GB-Laptop-Rose-Gold_36809cf3-480b-47a5-94f0-e1d5e70c58c0_3.fcc0d6494b0e279a13c32c80c28abfa3.jpeg"
          price="989 990"
          />
        <ProductCard
          name="Smartphone"
          image="https://freshmobile.kz/image/cache/catalog/Apple/Iphone14/Iphone%2014%20Blue-650x650.png"
          price="599 990"
          />
        <ProductCard
         name="Television"
         image="https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/p/1/p1e-55___1.jpg"
         price="859 990"
         />
      </div>
      
      <h1>Book Cards</h1>
      <div className="book-list">
            <BookCard 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKqS8TwcUiDjS-_dfuqBYAuIcADKGaFke1EA&s"
                title="The Wrong Sister: A Novel"
                author="Claire Douglas"
                year="2024"
            />
            <BookCard 
                image="https://m.media-amazon.com/images/I/81vewV2psIL.jpg"
                title="The Girls Who Disappeared: A Novel"
                author="Claire Douglas"
                year="2022"
            />
            <BookCard 
                image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1701276432i/201771216.jpg"
                title="The Woman Who Lied: A Novel"
                author="Claire Douglas"
                year="2023"
            />
        </div>
    </>
  )
}

export default App
