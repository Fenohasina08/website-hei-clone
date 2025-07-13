import React from 'react'

const Debouches = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Partie gauche - Contenu textuel */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-6 text-[#001948]">
              Quelques débouchés
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 text-[#001948]">
              Former-vous à une panoplie de métiers du numérique avec nous et venez acquérir 
              les fondements de la programmation (qui vous servira pour les différents métiers) ! 
              Ce sont des métiers porteurs, des métiers du présent, des métiers du futur...
            </p>

            <p className='text-[#001948]'>Développeur back end, développeur front end, développeurs mobile, chefs de
                projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique
                SSI, auditeur organisationnel SSI, administrateur système et réseau,
                développeur de sécurité…
            </p>
          </div>

          {/* Partie droite - Photo */}
          <div className="md:w-1/2">
            <div className=" h-full min-h-[400px] rounded-lg overflow-hidden flex items-center justify-center">
              {/* Remplacez cette div par votre balise img */}

              <span className="text-gray-500">
               
                  <img 
                src="/public/debouches.webp" 
                alt="Étudiants en informatique"
                className="w-full h-full object-cover"
              />
              </span>
              {/* Exemple avec une image réelle : 
            
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Debouches