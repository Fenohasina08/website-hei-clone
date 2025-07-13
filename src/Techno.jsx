import React from 'react'

const Techno = () => {
  const languages = [
    { name: 'Java', url: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
    { name: 'Python', url: '/python.png' }, // image dans public/
    { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'C', url: '/C.png' }, // image dans public/
  ]

  const technologies = [
    { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'AWS', url: '/aws.png' }, // image dans public/
    { name: 'Serverless', url: '/serverless.png' }, // image dans public/
    { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'OpenAPI', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openapi/openapi-plain.svg' },
  ]

  return (
    <section className="py-20 bg-gray-50 text-center text-[#001948]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold  mb-6">
          Les technos et langages utilisées
        </h2>
        <p className="  text-lg max-w-3xl mx-auto leading-relaxed">
          Nos étudiants sont formés à l'utilisation et à la maîtrise des langages de programmation Java et JavaScript. Ces deux langages occupent une place de choix dans le domaine du développement logiciel et du web, offrant une polyvalence et une robustesse appréciées par les développeurs à travers le monde.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10 mt-12">
          {languages.map(({ name, url }) => (
            <div key={name} className="flex flex-col items-center">
              <img src={url} alt={name} className="h-16 object-contain mb-2" />
              <p className="text-lg font-semibold text-yellow-600">{name}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 mt-12">
          {technologies.map(({ name, url }) => (
            <div key={name} className="flex flex-col items-center">
              <img src={url} alt={name} className="h-12 object-contain mb-1" />
              <p className="text-base font-medium text-gray-700">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Techno
