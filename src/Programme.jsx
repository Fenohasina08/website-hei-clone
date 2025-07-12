import programmes from '../public/programmes.webp'
import photo1programmes from '../public/photo1programmes.webp'
import photo2programmes from '../public/photo2programmes.webp'
import photo3programmes from '../public/photo3programmes.webp'
import { fromJSON } from 'postcss'
const Programmes = () => {
    const carteprogrammes = [
  {
    pourcentage: "25%",
    description: "Apprentissage théorique en présentiel",
  },
  {
    pourcentage: "25%",
    description: "Supports numériques",
  },
  {
    pourcentage: "25%",
    description: "Travaux individuels",
  },
  {
    pourcentage: "25%",
    description: "Apprentissage en entreprise",
  },
];

    return (
       <div className="w-screen bg-white h-[100vh] justify-center items-center text-blue-800 mb-8">
             <div className="flex flex-row w-[100vw] h-[60vh] items-center justify-between  text-blue px-10">
                {/* Partie image */}
                <div className="flex w-1/2 h-full items-center justify-center">
                  <img
                    src={programmes}
                    alt="Programmes"
                    className="h-[100%] object-contain"
                  />
                </div>

                {/* Partie texte */}
                <div className="flex w-1/2 flex-col justify-center space-y-4 px-6 gap-8">
                  <h2 className="text-3xl font-bold">Le programme pédagogique</h2>
                  <p>
                    Suivant le système LMD, jusqu’au Master, notre formation repose sur un<br />
                    programme pédagogique conçu en adéquation avec les attentes du marché. La <br />
                    formation est sanctionnée par un diplôme de Licence et de Master en <br />
                    Informatique reconnu par le MESupRes de Madagascar.
                  </p>
                  <p className="w-fit px-6 py-2 border border-blue bg-white text-blue-900 font-semibold rounded transition duration-300 hover:bg-blue-900 hover:text-white cursor-pointer">
                    Notre Programme
                  </p>
                </div>
              </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full max-w-7xl px-4 justify-center items-stretch mx-auto">
                {carteprogrammes.map((item, index) => (
                    <div
                    key={index}
                    className="h-[20vh] w-[15vw] bg-pink-300 text-white rounded-xl p-6 border border-white text-center hover:scale-105 transition-transform duration-300"
                    >
                      <h3 className="text-3xl font-bold text-yellow-500 mb-2">{item.pourcentage}</h3>
                      <p className="font-semibold text-blue-900 text-2xl">{item.description}</p>
                    </div>
                ))}


            </div>
         <div className="flex w-full h-[40vh] items-center justify-center mt-5 gap-9 mb-8">
                  <img
                    src={photo1programmes}
                    alt="Programmes"
                    className="h-[100%]"
                  />

                  <img
                    src={photo2programmes}
                    alt="Programmes"
                    className="h-[100%]"
                  />

                  <img
                    src={photo3programmes}
                    alt="Programmes"
                    className="h-[100%]"
                  />
                </div>
        </div>
    )
}

export default Programmes