import {useSearchParams} from 'react-router-dom';
import { Fetch } from '../../hooks/Fetch';
import { Card } from '../card/Card';


export const SearchForm=()=>{
const [serchParams]=useSearchParams()
const url="https://api.sampleapis.com/coffee/hot?"+serchParams
const urlL="https://api.sampleapis.com/coffee/iced?"+serchParams


const {data:itens}=Fetch(url)

const {data:itensIce}=Fetch(urlL)

return(

        <div class="flex justify-center">
<h1>Sua pesquisa</h1>

<div className=' md:grid grid-cols-2 gap-4 lg:grid grid-cols-3 gap-4'>
        {/*grid grid-cols-2 gap-4 */}
        {itens && itens.map((hot)=>(
        <Card
        key={hot.id}
        title={hot.title}
        image={hot.image}
        ingredients={hot.ingredients}
        />
        ))}
        
        {itensIce && itensIce.map((ice)=>(
          <Card
          key={ice.id}
          title={ice.title}
          image={ice.image}
          
          />
        ))}
        </div>
</div>

    )
}