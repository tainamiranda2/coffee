import { useEffect, useState } from 'react';
import {useSearchParams} from 'react-router-dom';
import { Card } from '../card/Card';

export const SearchForm=()=>{
 const url="https://api.sampleapis.com/coffee/hot"  

const [serchParams]=useSearchParams()

const [search, setSearch]=useState([])

const query=serchParams.get("q")
//console.log(url)
//const urlL="https://api.sampleapis.com/coffee/iced?" + serchParams
const getSearch=async()=>{
        const res=await fetch(url);
        const data=await res.json()

        setSearch(data.results)
}
console.log(search)

useEffect(() => {
        const topSearch=`${url}+{0}`

        getSearch(topSearch)
        console.log(topSearch)
}, [query]);
//const teste1=url.filter()
console.log(search)


return(

        <div class="flex justify-center">
<h1>Resultados disponiveis para: <span class='cl-blue-600'> {query}</span></h1>

<div className=' md:grid grid-cols-2 gap-4 lg:grid grid-cols-3 gap-4'>
        {/*grid grid-cols-2 gap-4 */}
      {search && search.map((hot)=>(
        <Card
        key={hot.id}
        title={hot.title}
        image={hot.image}
        ingredients={hot.ingredients}
        />
        ))}
         
       {/* {itensIce && itensIce.map((ice)=>(
          <Card
          key={ice.id}
          title={ice.title}
          image={ice.image}
          
          />
        ))}
 */}
        </div>
</div>

    )
}