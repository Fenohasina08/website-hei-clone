import React from 'react'

const equipe = [
    {
        nom: 'Yannick Raharjiona',
        role: 'Responsable technique ML chez Robust Science',
        details: '(Obama – Canada)',
        img: '/public/Yannick.jpg'
    },
    {
        nom: 'Dr Tahina Ralitera',
        role: 'Docteure-ingénieure, CNRS France',
        details: 'Prix Ucheli-UNESCO pour les Femmes en Science (2017)',
        img: '/public/dretahina.png'
    },
    {
        nom: 'Dr Lou Maurice',
        role: 'Docteur-ingénieur en informatique',
        details: 'Producteur et Directeur pédagogique de HEI',
        img: '/public/lou.jpg'
    }
]

const Equipe = () => (
    <section className="py-20 px-4 bg-[#6586C7]">
        <div className="max-w-7xl mx-auto">
            {/* Section texte descriptive */}
            <div className="text-center mb-16 max-w-3xl mx-auto text-white">
                <h2 className="text-3xl font-bold mb-6">
                    L'équipe pédagogique
                </h2>
                <p className=" mb-8">
                    Notre équipe pédagogique se compose d'experts nationaux et internationaux de 
                    l'informatique, de la cybersécurité, de l'intelligence artificielle, dont un 
                    ingénieur chez Google. Ils sont passionnés par l'informatique et sont engagés 
                    vers l'excellence. Nous sommes conscients que cette équipe est la pierre 
                    angulaire de l'employabilité de nos étudiants, elle a été soigneusement 
                    sélectionnée.
                </p>
            </div>

            {/* Section membres de l'équipe */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {equipe.map(({ nom, role, details, img }) => (
                    <div
                        key={nom}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
                    >
                        <img
                            src={img}
                            alt={nom}
                            className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                        />
                        <div className="text-center">
                            <h3 className="text-xl text-[#001948] font-semibold mb-1">{nom}</h3>
                            <p className="text-[#001948] font-medium mb-1">{role}</p>
                            <p className="text-sm text-[#001948]">{details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default Equipe