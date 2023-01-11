import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {Home} from './Home';
import { SearchForm } from './components/search/SearcheForm';
import { Navbar } from './navbar/Navbar';
import { Detalhes } from './components/detalhes/detalhes';

export const Router=()=>{
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detalhes/:id" element={<Detalhes/>}/>

         <Route path="/search" element={<SearchForm/>}/>
        </Routes>
        </BrowserRouter>
    )
}