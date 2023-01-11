import {Card} from './components/card/Card';
import { Search } from './components/search/Search';
import { useFetch } from './hooks/useFetch';
export const Home=()=>{


const {data:itens}=useFetch('https://api.sampleapis.com/coffee/hot')

const {data:itensIce}=useFetch('https://api.sampleapis.com/coffee/iced')


//let tese2=teste.filter(ver=>'black')

    return (
        <div>
        <Search pesquisa={"Qual item voce procura"}/>
     {/*<Filtro hot={"hot"} ice={"ice"}/>*/}   
        
        <div class=' md:grid grid-cols-2 gap-4 lg:grid grid-cols-3 gap-4'>
        {/*grid grid-cols-2 gap-4 */}
        {itens && itens.map((hot)=>(
        <Card
        key={hot.id}
        title={hot.title}
        image={hot.image}
        ingredients={hot.ingredients}
        item={`/detalhes/${hot.id}`}
        info="Detalhes"
        description=""
        />
        ))}
        
        {itensIce && itensIce.map((ice)=>(
          <Card
          key={ice.id}
          title={ice.title}
          image={ice.image}
          item={`/detalhes/${ice.id}`}
          info="Detalhes"
          />
        ))}
        </div>
        </div>
    )
}