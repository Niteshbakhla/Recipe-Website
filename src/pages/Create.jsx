import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { RecipeContext } from '../context/MainContext'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate= useNavigate()
 const {info, setinfo,editId, seteditId}= useContext(RecipeContext)
 const{register, handleSubmit, formState:{errors}, reset}= useForm()

 const formSubmitHandler=(data)=>{
   data.id= nanoid()
  setinfo([...info, data])
  seteditId(data.id)
  navigate("/recipes")
  reset()
  console.log(data);
 }

   useEffect(() => {
     const retriveRecipies= JSON.parse(localStorage.getItem("info"))
     setinfo(retriveRecipies)
    }, [setinfo])
  
    useEffect(() => {
      localStorage.setItem("info",JSON.stringify(info))
    }, [info])


  return (
    <div className='w-full h-full flex justify-center'>
      <form action="" className=' bg-black p-5 text-black flex flex-col justify-center gap-2 rounded-xl w-full' onSubmit={handleSubmit(formSubmitHandler)}>
        <input className='p-3 border outline-offset-4 w-[400px] w- border-black rounded' {...register("image",{required:true})} type="url"  placeholder='Image'/> { errors.image? <p className='text-red-600 mb-2  text-md font-serif'>Enter Image URL</p>:""}
        <input className='p-3 border outline-offset-4 w-[400px] w- border-black rounded' {...register("title", {required:true})}type="text" placeholder='Title' /> { errors.title? <p className='text-red-600 mb-2 text-md font-serif'>Fill title</p>:""}
        <input className='p-3 border outline-offset-4 w-[400px] w- border-black rounded' {...register("chefname", {required:true})}type="text" placeholder='Chef Name' /> { errors.chefname? <p className='text-red-600 mb-2 text-md font-serif'>Fill Chef Name</p>:""}
        <textarea className='p-3 rounded' {...register("description")}  placeholder='Enter description'></textarea>
        <textarea className='p-3 rounded' {...register("instructions")}  placeholder='Enter instructions'></textarea>
        <textarea className='p-3 rounded' {...register("ingradients")} placeholder='Enter ingradients'></textarea>
        <select className='text-black font-[poppins] text-sm bg-gray-300 p-3 rounded' name="" id="" {...register("catagory", {required:true})}>
          <option value="">Select your catagory</option>
          <option className='bg-black text-white' value="cat-1"> Catagory-1</option>
          <option className='bg-black text-white' value="cat-2"> Catagory-2</option>
          <option className='bg-black text-white' value="cat-3"> Catagory-3</option>
        </select> { errors.catagory? <p className='text-red-600 mb-2 text-md font-serif'>Select Catagory</p>:""}
        <button className='bg-purple-600 rounded w-fit text-white m-auto p-3 active:scale-90'>Register Recipe</button>
      </form>
    </div>
  )
}

export default Create