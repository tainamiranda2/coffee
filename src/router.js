import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {Home} from './Home';
import { SearchForm } from './components/search/SearcheForm';
import { Navbar } from './navbar/Navbar';

export const Router=()=>{
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>

            <Route path="/search" element={<SearchForm/>}/>
        </Routes>
        </BrowserRouter>
    )
}