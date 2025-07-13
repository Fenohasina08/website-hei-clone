import React from 'react';

const partenaires = [
  { name: 'NextA', src: '/public/LOGO-NEXTA.webp' },
  { name: 'Passerelles Numériques', src: '/public/PN_Logo_baseline_color_ENG.png' },
  { name: 'Yooz', src: '/public/Yooz-2023-Logo-2.webp' },
  { name: 'Etech', src: '/public/logo-etech.png' },
  { name: 'EMIT', src: '/public/logo_emit.png' },
  { name: 'Numer', src: '/public/Logo-Numer-vf.png' },
  { name: 'B Partners', src: '/public/bp-logo-full-1024x331.webp' },
  { name: 'Vourifactorv', src: '/public/YIF_LOGO_512x512_BL_on_WH-1.webp' },
  { name: 'Kante CO', src: '/public/logo-kante-company-1.png' },
];

const Partenaires = () => {
  return (
    <section className="py-16 bg-white text-center text-[#001948]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold  mb-6">Nos partenaires</h2>
        <p className="  text-lg max-w-3xl mx-auto leading-relaxed mb-12">
          L’employabilité de nos étudiants se base sur la pertinence de notre programme pédagogique
          et de la composition de notre corps enseignant mais aussi du soutien et la collaboration
          des entreprises partenaires
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
          {partenaires.map((partenaire) => (
            <div key={partenaire.name} className="flex justify-center items-center">
              <img
                src={partenaire.src}
                alt={partenaire.name}
                className="max-h-16 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partenaires;
