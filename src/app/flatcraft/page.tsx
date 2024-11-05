import Link from 'next/link'
import Image from 'next/image'

export default function FlatcraftPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <main className="max-w-4xl mx-auto px-4 py-12">
                <Link href="/" className="text-purple-400 hover:underline mb-8 inline-block">
                    ← Retour à l&apos;accueil
                </Link>
                <h1 className="text-4xl font-bold mb-4">Flatcraft</h1>
                <div className="mb-8">
                    <Image
                        src="/images/projects/flatcraft.webp"
                        alt="Iridescent ripples of a bright blue and pink liquid"
                        width={800}
                        height={400}
                        className="rounded-lg w-full object-cover"
                    />
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Technologies utilisées</h2>
                    <ul className="list-disc list-inside">
                        <li>Java</li>
                        <li>JavaFX</li>
                        <li>Git</li>
                    </ul>
                </div>
                <p className="text-xl mb-8">
                    Flatcraft est un projet collaboratif réalisé par une équipe de quatre personnes dans le cadre de l&apos;IUT, axé principalement sur le développement des compétences en Java. Ce projet éducatif a abouti à la création d&apos;un jeu en 2D inspiré de Minecraft, mettant en scène des blocs et des crafts.
                </p>
                <div className="bg-gray-800 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Détails du projet</h2>
                    <p className="mb-4">
                        Le jeu propose différents biomes, notamment :
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>L&apos;Overworld (biome de base)</li>
                        <li>Le Nether (équivalent de l&apos;enfer)</li>
                        <li>L&apos;End (biome final du jeu)</li>
                    </ul>
                    <p>
                        Les joueurs peuvent explorer ce monde, changer de biomes, fabriquer des outils et des armes, raffiner des matériaux, et cuisiner de la nourriture dans des fours.
                    </p>
                </div>
            </main>
        </div>
    )
}