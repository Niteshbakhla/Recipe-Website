import React, { useContext } from 'react'
import { RecipeContext } from '../context/MainContext'

const Search = () => {
  const{search, setsearch,filters}=  useContext(RecipeContext)
  return (
    <div className='w-full h-full flex justify-center flex-col items-center gap-3'>
        
            <input placeholder='Search here ...' value={search}  name='title' onChange={(e)=>setsearch(e.target.value)} type="text" className='border border-black rounded font-normal text-sm text-black p-1 w-[300px] outline bg-gray-100' />

            <div className=' h-full flex flex-wrap gap-2 p-1 '>
                  { search? filters.map((e,i)=>(
                    <ul key={i} className='bg-black text-white w-fit p-5 rounded-xl hover:scale-95 flex flex-col items-center justify-center text-center gap-1'>
                        <img className='w-28 h-28 rounded-full' src={e.image} alt="" />
                        <p> <strong className='underline'>Title:</strong> {e.title}</p>
                        <p><strong className='underline'>Chef Name:</strong> {e.chefname}</p>
                        <p><strong className='underline'>Description:</strong> {e.description}</p>
                        <p><strong className='underline'>Ingradients:</strong> {e.ingradients}</p>
                        <p><strong className='underline'>Instructions:</strong> {e.instructions}</p>
                        <p><strong className='underline'>Catagory:</strong> {e.catagory}</p>
                    </ul>
                  )): ""}
            </div>
    </div>
  )
}

export default Search