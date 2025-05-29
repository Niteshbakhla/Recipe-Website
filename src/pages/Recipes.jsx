import React, { useContext, useEffect } from 'react'
import {Link } from 'react-router-dom'
import { RecipeContext } from '../context/MainContext'
import RecipeTemplate from '../components/RecipeTemplate'

const Recipes = () => {
  const {info, setinfo,filters}= useContext(RecipeContext)

  
  const recipeRender= filters.map(rec=> (
    <RecipeTemplate key={rec.id} recipe={rec}/>
))

 useEffect(() => {
   const retriveRecipies= JSON.parse(localStorage.getItem("info"))
   if (retriveRecipies) {
     setinfo(retriveRecipies)
   }
  }, [setinfo])


  useEffect(() => {
    localStorage.setItem("info",JSON.stringify(info))
  }, [info])

  return (
    <div className='w-full h-full flex flex-col p-3 items-center'>
       <Link className=' bg-red-500 text-white px-3 py-2 rounded w-fit' to="/recipes/create">Create Recipe</Link>
       <hr  className='mt-3 outline-dotted w-full'/>
       <div className='w-full grid grid-cols-5 gap-2 mt-2'>
        {info.length>0? recipeRender:"Recipe Not found"}
        {/* {recipeRender} */}
       </div>
      
    </div>
  )
}

export default Recipes