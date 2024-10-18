import Link from 'next/link'
import Image from 'next/image'

export default function PokedexPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white">
            <main className="max-w-4xl mx-auto px-4 py-12">
                <Link href="/" className="text-purple-400 hover:underline mb-8 inline-block">
                    ← Retour à l&apos;accueil
                </Link>
                <h1 className="text-4xl font-bold mb-4">Pokedex</h1>
                <div className="mb-8">
                    <Image
                        src="./images/projects/pokedex.jpeg"
                        alt="Pokedex Pokemon"
                        width={800}
                        height={400}
                        className="rounded-lg w-full object-cover"
                    />
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Technologies utilisées</h2>
                    <ul className="list-disc list-inside">
                        <li>PHP</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <p className="text-xl mb-8">
                    Le projet Pokedex est une initiative collaborative au sein d&apos;une équipe de quatre personnes, menée dans le cadre de l&apos;IUT. L&apos;objectif principal est de concevoir un site web offrant des informations exhaustives sur chaque Pokémon, avec la possibilité de les ajouter à une collection personnelle.
                </p>
                <div className="bg-gray-800 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Détails du projet</h2>
                    <p className="mb-4">
                        Le site se compose de plusieurs pages :
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Accueil</li>
                        <li>Pokedex</li>
                        <li>Collection</li>
                        <li>Page de connexion</li>
                    </ul>
                    <p className="mb-4">
                        Sur la page d&apos;accueil, une barre de recherche permet à l&apos;utilisateur de sélectionner un Pokémon parmi toutes les générations, afin d&apos;accéder à ses statistiques.
                    </p>
                    <p className="mb-4">
                        La page d&apos;informations présente des détails tels que le ou les types du Pokémon, ses points de vie, son attaque, sa défense, son attaque spéciale, sa défense spéciale, sa taille en mètres, son poids en kilogrammes, ainsi que son cri distinctif.
                    </p>
                    <p>
                        Quant à la page de collection, elle offre la possibilité de sauvegarder et de mettre en favoris plusieurs Pokémon sélectionnés. L&apos;accès à cette fonctionnalité est conditionné à la connexion de l&apos;utilisateur.
                    </p>
                </div>
            </main>
        </div>
    )
}