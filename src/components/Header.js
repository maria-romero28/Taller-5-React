import React from 'react';
import logo from '../assets/logo tirnda anime.jpg'

function Header() {
  return (
    <header className="bg-amber-200 shadow-xl ring-1 ring-gray-900/5">
    <nav class="px-4 py-4 sm:flex sm:items-center sm:justify-between">
      <section class="flex justify-between">
        <img src={logo} class="h-16 rounded-lg" alt="LogoStore"/>
        <button class="text-gray-700 sm:hidden"> {/*Con sm:hidden hacemos que la fresas desaparezca*/}
          <svg class="w-6 h-6 fill-current" xmlns="c:\Users\Lenovo\Downloads\Fresas.jpg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        </button>
      </section>
      <div class="flex flex-col items-start mt-3 gap-4 sm:flex-row sm:m-0"> {/*Agregamos flex para que se adapte a las pantallas*/}
        <button class="text-gray-600 hover:bg-gray-200  text-left px-4 rounded hover:text-gray-900 whitespace-nowrap transition-all duration-300 ease-in-out font-bold">Blog</button>
        <button class="text-gray-600 hover:bg-gray-200  text-left px-4 rounded hover:text-gray-900 whitespace-nowrap transition-all duration-300 ease-in-out font-bold">About us</button>
        <button class="text-gray-600 hover:bg-gray-200  text-left px-4 rounded hover:text-gray-900 whitespace-nowrap transition-all duration-300 ease-in-out font-bold">Contact</button>
      </div>
    </nav>
    </header>
  );
}

export default Header;