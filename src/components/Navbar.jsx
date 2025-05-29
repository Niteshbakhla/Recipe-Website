import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className='flex gap-4'>
       <Link className='font-sans font-semibold text-white hover:text-gray-700' to="/">HOME</Link>
       <Link className='font-sans font-semibold text-white hover:text-gray-700' to="/about">ABOUT</Link>
       <Link className='font-sans font-semibold text-white hover:text-gray-700' to="/recipes/create">CREATE</Link>
       <Link className='font-sans font-semibold text-white hover:text-gray-700' to="/favourite">FAVOURITE</Link>
       <Link className='font-sans font-semibold text-white hover:text-gray-700' to="*">PAGE NOT FOUND</Link>
       <Link className='font-sans font-semibold text-white hover:text-gray-700' to="/recipes">RECIPES</Link>
       <Link className='font-sans font-semibold text-white hover:text-gray-700' to="/recipes/update">UPDATE</Link>
       <Link className='font-sans font-semibold text-white hover:text-gray-700' to="/recipes/singlerecipe">SINGLE RECIPE</Link>
    </div>
  )
}

export default Navbar