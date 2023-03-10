import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
export const Search=({pesquisa})=>{
  const [query,setQuery]=useState("")

const navigate =useNavigate();

const handleSubmit=(e)=>{
  e.preventDefault()
  if(!query) return;

  navigate(`/search?q=${query}`)
  setQuery("")
}
//console.log('teste1',query)
    return(
<form onSubmit={handleSubmit}>
        <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
      <input
      onChange={(e)=>setQuery(e.target.value)}
       type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder={pesquisa} aria-label="Search" aria-describedby="button-addon2"/>
      <input
       class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 
       hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="submit" id="button-addon2"/>
       
    </div>
  </div>
</div>
</form>

    )
}