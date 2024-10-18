import Link from 'next/link'
import Image from 'next/image'

export default function RayTracingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white">
            <main className="max-w-4xl mx-auto px-4 py-12">
                <Link href="/" className="text-purple-400 hover:underline mb-8 inline-block">
                    ← Retour à l&apos;accueil
                </Link>
                <h1 className="text-4xl font-bold mb-4">Ray Tracing</h1>
                <div className="mb-8">
                    <Image
                        src="./images/projects/ray_tracing.png"
                        alt="Ray Tracing"
                        width={800}
                        height={400}
                        className="rounded-lg w-full object-cover"
                    />
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Technologies utilisées</h2>
                    <ul className="list-disc list-inside">
                        <li>Java</li>
                        <li>Python</li>
                        <li>Git</li>
                    </ul>
                </div>
                <p className="text-xl mb-8">
                    Le projet consiste à développer un système de ray tracing en Java, simulant la propagation des rayons lumineux dans une scène en 3D afin de générer des images réalistes. Le ray tracing est une technique de rendu utilisée pour simuler l&apos;interaction de la lumière avec les objets dans une scène, permettant la création d&apos;images réalistes avec des effets de lumière, de réflexion et de réfraction.
                </p>
                <div className="bg-gray-800 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Détails du projet</h2>
                    <p className="mb-4">
                        Les composants clés du projet comprennent :
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Des modèles d&apos;éclairage variés</li>
                        <li>Des objets de scène tels que sphères, plans et triangles</li>
                        <li>Une caméra pour définir la vue de la scène</li>
                        <li>Des rayons lancés depuis la caméra à travers chaque pixel de l&apos;image</li>
                        <li>Des calculs d&apos;intersection pour déterminer les interactions lumineuses</li>
                        <li>L&apos;utilisation de motifs de conception, notamment le motif Builder</li>
                    </ul>
                    <p className="mb-4">
                        Les difficultés potentielles du projet résident dans la mise en œuvre des calculs de ray tracing, y compris les calculs d&apos;intersection pour les sphères, les plans et les triangles, ainsi que la gestion des modèles d&apos;éclairage pour simuler des effets lumineux complexes.
                    </p>
                    <p>
                        L&apos;objectif final du projet est de générer des images réalistes en utilisant des techniques de ray tracing pour simuler la propagation de la lumière dans une scène 3D, permettant la création de rendus visuellement convaincants et d&apos;effets d&apos;éclairage réalistes.
                    </p>
                </div>
            </main>
        </div>
    )
}