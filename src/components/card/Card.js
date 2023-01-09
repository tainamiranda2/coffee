import react from 'react' 

export const Card =({title,image,ingredients})=>{
    return(
      
        <div class=" mb-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">

            <div class="md:shrink-0">
        
        <img class="h-48 w-full object-cover md:h-full md:w-48" src={image}/>
        </div>
        
        <div class="p-10">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          <h2 >Titúlo - {title}</h2>
          </div>
        
        <p class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">iIngredientes - {ingredients}</p>
        {/* <span class="mb-2 text-slate-500">{teste.description}</span>*/}
        
        
        </div>
        
        </div>
        
        </div>
    
    )
}