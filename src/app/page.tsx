'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, MessageSquare } from 'lucide-react'
import { useRef } from 'react'

export default function Home() {
  const projectsRef = useRef<HTMLElement>(null)

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
      <div className="min-h-screen bg-gradient-to-bl from-purple-900 via-gray-900 to-black text-white">
        <header className="p-8">
          <nav className="flex justify-between items-center max-w-6xl mx-auto text-2xl">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-purple-600 rounded-sm"></div>
              <span className="font-semibold text-4xl">My portfolio</span>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/" className="hover:text-purple-400 px-4 py-2 rounded-md">Home</Link>
              <a href="#projects" onClick={scrollToProjects} className="hover:text-purple-400 px-4 py-2 rounded-md">Projets</a>
              <Link href="/a-propos" className="hover:text-purple-400 px-4 py-2 rounded-md">À propos</Link>
              <a href="https://github.com/adel-djd" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://fr.linkedin.com/in/adel-djedid-8aaa102a1" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto px-8 py-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3">
              <h1 className="text-7xl font-bold mb-6">Djedid Adel</h1>
              <p className="text-3xl mb-10">
                Je m&apos;appelle Adel Djedid, j&apos;ai 20 ans et je suis
                étudiant en deuxième année de BUT Informatique à l&apos;IUT de Lens.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Image
                  src="./images/portrait.jpeg"
                  alt="Profile"
                  width={250}
                  height={250}
                  className="rounded-full"
                  loading="lazy"
              />
            </div>
          </div>

          <section id="projects" ref={projectsRef} className="mt-32">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-5xl font-semibold">Mes derniers projets</h2>
              <button className="px-6 py-3 border border-purple-400 text-purple-400 rounded-md hover:bg-purple-400 hover:text-white transition-colors">
                Tous les projets →
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Ray Tracing', link: '/ray-tracing', image: './images/projects/ray_tracing.jpeg' },
                { name: 'Flatcraft', link: '/flatcraft', image: './images/projects/flatcraft.jpeg' },
                { name: 'Pokedex', link: '/pokedex', image: './images/projects/pokedex.jpeg' }
              ].map((project, index) => (
                  <Link href={project.link} key={index} className="block">
                    <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <Image
                          src={project.image}
                          alt={project.name}
                          width={350}
                          height={250}
                          className="w-full h-56 object-cover"
                          loading="lazy"
                      />
                      <div className="p-6">
                        <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
                      </div>
                    </div>
                  </Link>
              ))}
            </div>
          </section>

          <section className="mt-32 flex justify-between items-center">
            <h2 className="text-4xl font-semibold">Intéressé par mon profil ?</h2>
            <a
                href="mailto:adel.djedid.pro@gmail.com"
                className="flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md transition-colors text-white"
            >
              <MessageSquare className="w-6 h-6 mr-3" />
              Envoyez-moi un message
            </a>
          </section>
        </main>

        <footer className="mt-32 py-8 text-center text-gray-400">
          <p>© 2024 Adel Djedid</p>
        </footer>
      </div>
  )
}