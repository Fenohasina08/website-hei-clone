 import React from "react";

const Hero = () => {
  return (
    <div
      className="max-w-full px-8 py-24 bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/hei-banner-1.webp')",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-8">Haute École d'Informatique</h1>

        <div className="mb-8 max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed">
            Le Déducation est l'arme la plus puissante pour changer le monde &gt; selon{" "}
            <strong className="font-bold">Nelson Mandela</strong>. « L'éducation dans
            l'informatique est une arme très puissante pour lutter contre la pauvreté à
            Madagascar » selon HEI. C'est notre mission.
          </p>
        </div>
 

        <div className="flex flex-col md:flex-row gap-8 justify-center text-white">
          {/* Carte 1 */}
          <div className="w-[20vw] min-w-[200px] p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Inscrivez-vous ici</h3>
          </div>

          {/* Carte 2 avec fond jaune */}
          <div
            className="w-[20vw] min-w-[200px] p-4 border border-gray-200 rounded-lg shadow-sm"
            style={{ backgroundColor: "#DFA408" }}
          >
            <h3 className="text-xl font-semibold mb-2">Emploi du temps</h3>
          </div>

          {/* Carte 3 */}
          <div className="w-[20vw] min-w-[200px] p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Programme pédagogique</h3>
          </div>
        </div>

        <p className="mt-12 text-2xl">
          Habilitation MESupRES, suivant l'arrêté n°313099/2023
        </p>
      </div>
    </div>
  );
};

export default Hero;
