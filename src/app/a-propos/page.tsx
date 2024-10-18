import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white">
            <main className="max-w-4xl mx-auto px-4 py-12">
                <Link href="/" className="text-purple-400 hover:underline mb-8 inline-block">
                    ← Retour à l&aposaccueil
                </Link>
                <h1 className="text-4xl font-bold mb-8">À Propos de Moi</h1>

                <div className="mb-12">
                    <div className="w-full mb-8">
                        <Image
                            src="/images/bureau_ordi.jpg"
                            alt="Adel Djedid au travail"
                            width={800}
                            height={400}
                            className="rounded-lg w-full object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Parcours Académique</h2>
                        <p className="mb-4">
                            Actuellement en deuxième année de BUT informatique à l&aposIUT de Lens, j&aposai acquis des
                            compétences solides en programmation, avec une maîtrise des langages tels que Python, Java,
                            et JavaScript. Mon parcours académique m&aposa également permis de développer des connaissances
                            approfondies en développement web (HTML, CSS, PHP), en gestion de bases de données
                            relationnelles (SQL, MySQL, PostgreSQL), ainsi qu&aposen routage réseau avec une expertise dans
                            l&aposattribution d&aposadresses IPv4 et IPv6.
                        </p>
                    </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Compétences</h2>
                    <p className="mb-4">
                        Doté d&aposune excellente capacité d&aposécoute, d&aposune gestion rigoureuse du temps, et d&aposune volonté
                        d&aposapprentissage continu, je suis convaincu que ces atouts me permettront de m&aposintégrer
                        efficacement au sein de votre équipe. Ma compréhension des principaux systèmes d&aposexploitation
                        (Windows, Linux) et ma maîtrise avancée de Git, acquise à travers des projets en groupe,
                        attestent de ma polyvalence et de ma capacité à collaborer efficacement.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Programmation : Python, Java, JavaScript</li>
                        <li>Développement web : HTML, CSS, PHP</li>
                        <li>Bases de données : SQL, MySQL, PostgreSQL</li>
                        <li>Réseaux : Routage, IPv4, IPv6</li>
                        <li>Systèmes d&aposexploitation : Windows, Linux</li>
                        <li>Gestion de version : Git</li>
                    </ul>
                </div>

                <div className="bg-gray-800 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Langues</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Français : Titulaire du certificat Voltaire, communication efficace et rédaction
                            professionnelle
                        </li>
                        <li>Anglais : Niveau C1, aisance en communication et adaptation aux documentations en anglais
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}