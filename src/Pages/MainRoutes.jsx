import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import ProductPage from './ProductPage'

const MainRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route  path="/login" element={<h1>Login..</h1>}/>
            <Route  path="/sell" element={<h1>Post</h1>}/>
            <Route path="/products/:id"  element={<h1>Single product</h1>}/>
            <Route path="/author/:id" element={<h1>Author..</h1>} />
            <Route  path='*' element={<h1>Error page</h1>}/>
        </Routes>
    </>
  )
}

export default MainRoutes