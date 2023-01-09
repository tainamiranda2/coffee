import {Link} from 'react-router-dom';

export const Navbar=()=>{
    return(
        <div>
        

<nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                    <Link to="/" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link to="/search" class="text-gray-900 dark:text-white hover:underline">Sobre</Link>
                </li>
           
            </ul>
        </div>
    </div>
</nav>

        </div>
    )
}