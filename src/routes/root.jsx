import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Root() {
  return (
    <>
    <header className='bg-orange-500 h-20 w-full'>
        <div className='container mx-auto px-16 flex flex-row items-center justify-between pt-6'>
        <h1 className='font-semibold text-xl text-white'>24/7 NEWS</h1>

<nav>
    <ul className='flex flex-row gap-4'>
        <li>
        <Link to="/">Home</Link>
           
        </li>
        <li>
        <Link to="/articles">Articles</Link>
            
        </li>
        <li>
        <Link to="/authors">Authors</Link>
           
        </li>
        <li>
            <Link to="/articles/article">Article</Link>
            
        </li>
        <li>
        <Link to="/authors/author">Author</Link>
           
        </li>
    </ul>
</nav>
        </div>
    
    </header>
    
      
    <Outlet />
    <footer>

    </footer>
    
    </>
  )
}

