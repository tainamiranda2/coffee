import './App.css';
import { useEffect, useState } from 'react';

function App() {
const [dados, setDados]=useState([]);

useEffect(()=>{
  fetch('https://api.sampleapis.com/coffee/hot',{
  method:'GET',
  headers:{
    'Content-Type':'application/json'
  },
})
  .then((resp)=>resp.json())
  .then((data)=>{
    setDados(data)
  })
.catch((err)=> console.log(err))
  
},[])
//console.log('oi',dados)
  return (
    <div>
    <h1  className="text-3xl font-bold underline">Café</h1>

{dados.map((teste)=>(

  <div class="mb-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
<div class="md:flex">
    <div class="md:shrink-0">

<img class="h-48 w-full object-cover md:h-full md:w-48" src={teste.image}/>
</div>

<div class="p-10">
  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
  <h2 key={teste.id}>{teste.title}</h2>
  </div>

<p class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{teste.ingredients}</p>
<span class="mb-2 text-slate-500">{teste.description}</span>

</div>

</div>
</div>

))}


    </div>
  );
}

export default App;
