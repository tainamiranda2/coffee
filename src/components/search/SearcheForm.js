import {useSearchParams, Link} from 'react-router-dom';


export const SearchForm=()=>{
const [serchParams]=useSearchParams()
const url="https://api.sampleapis.com/coffee/hot?"+serchParams
  
return(

        <div class="flex justify-center">
<h1>Sua pesquisa</h1>
</div>

    )
}