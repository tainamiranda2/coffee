import {Card} from './components/card/Card';
import { Search } from './components/search/Search';
import { Fetch } from './hooks/Fetch';
export const Home=()=>{


const {data:itens}=Fetch('https://api.sampleapis.com/coffee/hot')

const {data:itensIce}=Fetch('https://api.sampleapis.com/coffee/iced')
console.log(itens)
    return (
        <div>
        <Search pesquisa={"Qual item voce procura"}/>
     {/*<Filtro hot={"hot"} ice={"ice"}/>*/}   
        
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