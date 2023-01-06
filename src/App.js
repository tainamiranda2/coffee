import './App.css';
import { useEffect, useState } from 'react';
import {Card} from './components/card/Card';
import { Search } from './components/search/Search';
import { Filtro } from './components/filtro/filtro';

function App() {
const [dados, setDados]=useState([]);
const [dadosGelados,setDadosGelados]=useState([])

const getCoffeeHot=async()=>{
  fetch('https://api.sampleapis.com/coffee/hot') 
.then((Response)=>Response.json()
.then((ResponseJson)=>{
  setDados(ResponseJson)
}))

}
const getCoffeeIce=async()=>{
  fetch('https://api.sampleapis.com/coffee/iced') 
.then((Response)=>Response.json()
.then((ResponseJson)=>{
  setDadosGelados(ResponseJson)
}))

}

useEffect(()=>{
  getCoffeeHot()
  getCoffeeIce()
},[])
//console.log('oi',dados)
  return (
    <div>
    <h1  className="text-3xl text-aling:center mx-auto font-bold underline">Café</h1>
<Search pesquisa={"Qual item voce procura"}/>
<Filtro hot={"hot"} ice={"ice"}/>

<div className=''>
{dados.map((hot)=>(

<Card
key={hot.id}
title={hot.title}
image={hot.image}
ingredients={hot.ingredients}
/>
))}

{dadosGelados.map((ice)=>(
  <Card
  key={ice.id}
  title={ice.title}
  image={ice.image}
  
  />
))}
</div>

    </div>
    
  );
}

export default App;
