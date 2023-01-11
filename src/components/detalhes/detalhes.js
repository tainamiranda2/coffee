import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { Card } from "../card/Card"

export const Detalhes=()=>{

    const {id}=useParams()

    const url="https://api.sampleapis.com/coffee/hot/"+id
const {data:detalhes}=useFetch(url)
//console.log('oi',detalhes)

    return(
        <>
        <h2 class="mx-auto">Mais detalhes</h2>
        {detalhes && (
   <Card
      key={detalhes.id}
    title={detalhes.title}
    image={detalhes.image}
   ingredients={detalhes.ingredients}
     description={detalhes.description}
    //  item={"/"}
    //  info="Voltar"
      />
        )}
     
        </>
    )
}