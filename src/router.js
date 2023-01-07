import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {Home} from './Home';
import { SearchForm } from './components/search/SearcheForm';

export const Router=()=>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>

            <Route path="/search" element={<SearchForm/>}/>
        </Routes>
        </BrowserRouter>
    )
}