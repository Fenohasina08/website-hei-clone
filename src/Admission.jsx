import React from "react";

const Admission = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen mt-2 text-white bg-blue-500 h-[70vh]">

      {/* Titre + description */}
      <div className="mb-5 text-center">
        <h2 className="mb-4 text-5xl font-bold">Admission</h2>
        <p>
          Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau :<br />
          une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D.
        </p>
      </div>

      {/* Bloc des 3 cartes */}
      <div className="flex flex-row justify-center bg-transparent w-full max-w-5xl h-[250px] m-8">

        <div className="flex w-full h-full overflow-hidden bg-yellow-300 rounded">
          {/* Card 1 */}
          <div className="w-1/3 p-6 text-left text-black bg-yellow-200 card1">
            <h2 className="mb-2 text-3xl font-bold text-white">01</h2>
            <p><span className="font-bold">Dépôt de dossiers :</span> pour les bacheliers de toutes séries sans limite d’âge</p>
          </div>

          {/* Card 2 */}
          <div className="relative w-1/3 p-6 text-left text-black bg-yellow-300 card2">
            <h2 className="mb-2 text-3xl font-bold text-white">02</h2>
                <div className="flex items-center">
                    {/* Texte : 80% */}
                        <p className="w-4/5 text-left text-black">
                            <span className="font-bold">Test de niveau :</span> composé d’une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D
                        </p>

                    {/* Flèche : 20% */}
                    <div className="w-1/5 text-5xl text-right text-white">
                        ➜
                    </div>
                </div>

        </div>

          {/* Card 3 */}
          <div className="w-1/3 p-6 text-left text-black bg-yellow-400 card3">
            <h2 className="mb-2 text-3xl font-bold text-white">03</h2>
            <p><span className="font-bold">Inscription définitive</span> (si test réussi)</p>
          </div>
        </div>
      </div>

      {/* Dernier bloc : bouton */}
      <div className="flex gap-4">
        <button className="px-6 py-2 font-semibold text-white transition border-2 border-white rounded hover:bg-white hover:text-blue-500">
          Inscrivez-vous ici
        </button>
        <button className="px-6 py-2 font-semibold text-white transition bg-blue-900 rounded hover:bg-blue-800">
          Résultat concours
        </button>
      </div>
    </div>
  );
};

export default Admission;
