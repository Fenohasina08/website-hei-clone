import React from 'react'
import { FaCalendarAlt, FaUsers, FaBullseye } from 'react-icons/fa'

const Propos = () => (
  <section className="bg-gray-50 py-16">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Partie gauche - Photo */}
        <div className="md:w-1/2">
          <div className=" h-full min-h-[400px] rounded-lg overflow-hidden">
            {/* Image fictive */}
            <img 
              src="/public/A-propos-left-1.webp" 
              alt="Équipe HET" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Partie droite - Texte */}
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-3xl font-bold">
            À propos de nous
          </h1>

          {/* Ligne 1 - 3 ans */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-[#DFA408] text-2xl " />
              <h2 className="text-2xl font-semibold text-[#001948]">+3ans</h2>
            </div>
            <p className="text-[#001948]">
              Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l'informatique. Nous sommes un groupe d'experts, de professionnels et des passionnés de l'informatique de Madagascar et du monde entier.
            </p>
          </div>

          {/* Ligne 2 - 250 étudiants */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <FaUsers className="text-[#DFA408] text-2xl" />
              <h2 className="text-2xl font-semibold text-[#001948]">+250 étudiants</h2>
            </div>
            <p className="text-[#001948]">
              Plus de 250 étudiants et plus d'une dizaine d'entreprises ont déjà fait confiance à notre formation habilitée par l'État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la "grande famille HET".
            </p>
          </div>

          {/* Ligne 3 - Notre mission */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <FaBullseye className="text-[#DFA408] text-2xl" />
              <h2 className="text-2xl font-semibold text-[#001948]">Notre mission</h2>
            </div>
            <p className="text-[#001948]">
              Notre mission est d'amener des jeunes malgaches sur des domaines porteurs comme l'intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.
            </p>
          </div>

           
        </div>
      </div>
    </div>
  </section>
)

export default Propos