import React from 'react'

const Domaines = () => {
  return (
    <section className="py-16 bg-[#F1F1F1]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          Domaines
        </h1>

        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l'avenir :
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Carte Cloud et cybersécurité */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
            <div className="flex justify-center pt-6">
              <img 
                src="/Cloud-et-cybersecurite_Plan-de-travail-1-150x150.png" 
                alt="Cloud et cybersécurité"
                className="w-32 h-32 object-contain"
              />
            </div>
            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <h2 className="text-xl font-bold mb-3">Cloud et cybersécurité</h2>
              <p className="text-gray-700">
                Maîtrisez les engrenages des outils en
                ligne interconnectés sur les nuages
                (comme sur AWS). Ou encore, devenez
                maître de la sécurisation des données
                en ligne ou des programmes et
                applications contre les cybermenaces.
                Chez HEI, vous allez vous former dans
                le domaine du cloud et de la
                cybersécurité.
              </p>
            </div>
          </div>

          {/* Carte Intelligence artificielle */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
            <div className="flex justify-center pt-6">
              <img 
                src="/Intelligence-artificielle_Plan-de-travail-1-150x150.png" 
                alt="Intelligence artificielle"
                className="w-32 h-32 object-contain"
              />
            </div>
            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <h2 className="text-xl font-bold mb-3">Intelligence artificielle</h2>
              <p className="text-gray-700">
                Le monde de la reconnaissance faciale
                ou la détection d'obstacles par les
                voitures semi-autonomes vous fascinent ?
                Ce n'est pas sorcier, cela s'apprend.
                Apprenez les bases de l'intelligence
                artificielle lors de vos cours chez HEI.
              </p>
            </div>
          </div>

          {/* Carte Ingénierie logicielle */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
            <div className="flex justify-center pt-6">
              <img 
                src="/Ingenierie-logicielle_Plan-de-travail-1-1-150x150.png" 
                alt="Ingénierie logicielle"
                className="w-32 h-32 object-contain"
              />
            </div>
            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <h2 className="text-xl font-bold mb-3">Ingénierie logicielle</h2>
              <p className="text-gray-700">
                Apprenez les principes de la conception
                ou le développement de programmes et
                d'applications web et mobile et explorez
                le monde fascinant des "codes". À la fin
                de votre formation, vous serez aptes à
                proposer des solutions pratiques,
                créatives et innovantes à des
                particuliers ou des entreprises pour
                leurs besoins numériques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Domaines