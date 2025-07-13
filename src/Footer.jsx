 import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full bg-[#001948]">
      {/* Partie haute */}
      <div className=" text-white py-12 px-4 w-full">
        <div className="max-w-6xl mx-auto">
          {/* Logo centré */}
          <div className="flex mb-12">
            <img 
              src="/Logo-hei.png" 
              alt="HEI Logo"
              className="h-16"
            />
          </div>

          {/* Contenu principal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Colonne 1 - Habilitation */}
            <div className="text-center md:text-left">
              <p className="text-gray-300 mb-2">
                Formation habilitée par l'État suivant le système LMD
              </p>
              <p className="text-gray-300">
                Habilitation MESupRes n°31309/2023
              </p>
            </div>

            {/* Colonne 2 - Adresse */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold mb-4">Adresse</h2>
              <address className="text-gray-300 not-italic">
                Il 1 J.B.I. R. Ambodivoanjo<br />
                Nandy Antananarivo<br />
                101. Madagascar
              </address>
            </div>

            {/* Colonne 3 - Navigation + Médias sociaux côte à côte */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-8">
              {/* Navigation */}
              <div className="text-center md:text-left">
                <h2 className="text-xl font-semibold mb-4">Navigation</h2>
                <ul className="space-y-2">
                  {['Accueil', 'Actualités', 'Bourse d\'études', 'Inscription'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-300 hover:text-white transition">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Médias sociaux */}
              <div className="text-center md:text-left">
                <h2 className="text-xl font-semibold mb-4">Médias sociaux</h2>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white text-2xl">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white text-2xl">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white text-2xl">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partie basse */}
      <div className="bg-white py-4 w-full">
        <div className="max-w-6xl mx-auto text-center text-gray-800">
          <p>© HEI Madagascar</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
