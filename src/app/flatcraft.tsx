import Link from 'next/link'

export default function FlatcraftPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white">
            <main className="max-w-4xl mx-auto px-4 py-12">
                <Link href="/" className="text-purple-400 hover:underline mb-8 inline-block">
                    ← Retour à l'accueil
                </Link>
                <h1 className="text-4xl font-bold mb-4">Flatcraft</h1>
                <p className="text-xl mb-8">
                    Flatcraft est un jeu de survie et de construction en 2D inspiré par Minecraft, offrant une expérience unique de crafting et d'exploration.
                </p>
                <div className="bg-gray-800 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Détails du projet</h2>
                    <p className="mb-4">
                        Les principales caractéristiques de Flatcraft incluent :
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Un monde généré procéduralement en 2D</li>
                        <li>Un système de crafting avec plus de 50 objets uniques</li>
                        <li>Des biomes variés avec leurs propres ressources et défis</li>
                        <li>Un mode multijoueur en temps réel</li>
                    </ul>
                    <p>
                        J'ai développé Flatcraft en utilisant JavaScript et la bibliothèque Phaser pour le rendu 2D, avec Node.js et Socket.io pour la partie serveur et le multijoueur.
                    </p>
                </div>
            </main>
        </div>
    )
}