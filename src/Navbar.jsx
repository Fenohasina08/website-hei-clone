import React from 'react'

const Navbar = () => (
  <header className="sticky top-0 bg-[#001E53] shadow z-50">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-3xl font-bold text-yellow-500">[ HEI ]</div>

      {/* Navigation */}
      <nav className="space-x-6 hidden md:flex text-white items-center">
        <a href="#" className="text-yellow-500 font-bold">ACCUEIL</a>
        <a href="#" className="hover:text-yellow-500">ACTUALITÉS</a>
        <a href="#" className="hover:text-yellow-500">BOURSE D'ÉTUDES</a>
        <a href="#" className="hover:text-yellow-500">INSCRIPTION</a>

        {/* Bouton INTRANET */}
        <a
          href="#"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md font-bold"
        >
          INTRANET
        </a>
      </nav>
    </div>
  </header>
)

export default Navbar
