import Link from 'next/link'

export default function RayTracingPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <main className="max-w-4xl mx-auto px-4 py-12">
                <Link href="/" className="text-purple-400 hover:underline mb-8 inline-block">
                    ← Retour à l&apos;accueil
                </Link>
                <h1 className="text-4xl font-bold mb-4">Ray Tracing</h1>
                <p className="text-xl mb-8">
                    Le Ray Tracing est une technique de rendu 3D avancée qui simule le comportement de la lumière pour créer des images photoréalistes.
                </p>
                <div className="bg-gray-800 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Détails du projet</h2>
                    <p className="mb-4">
                        Dans ce projet, j&apos;ai implémenté un moteur de ray tracing capable de :
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Générer des réflexions et réfractions réalistes</li>
                        <li>Simuler différents matériaux (métaux, verre, plastique)</li>
                        <li>Créer des ombres douces et des effets d&apos;éclairage global</li>
                    </ul>
                    <p>
                        J&apos;ai utilisé C++ pour l&apos;implémentation de base et CUDA pour l&apos;accélération GPU, permettant un rendu en temps réel de scènes complexes.
                    </p>
                </div>
            </main>
        </div>
    )
}