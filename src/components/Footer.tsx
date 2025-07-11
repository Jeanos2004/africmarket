import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#D2691E] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-[#FFC324]">Afri</span>
              <span className="text-white">Market</span>
            </h3>
            <p className="text-gray-200 mb-4">
              Découvrez les saveurs authentiques de l'Afrique. Produits frais, cuisine traditionnelle et service de qualité.
            </p>
            <div className="flex gap-4">
              <span className="text-2xl">📞</span>
              <span className="text-2xl">📧</span>
              <span className="text-2xl">📍</span>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FFC324]">Liens rapides</h4>
            <ul className="space-y-2">
              <li><Link href="/catalogue" className="hover:text-[#FFC324] transition">Catalogue</Link></li>
              <li><Link href="/restaurant" className="hover:text-[#FFC324] transition">Restaurant</Link></li>
              <li><Link href="/blog" className="hover:text-[#FFC324] transition">Astuces cuisine</Link></li>
              <li><Link href="/panier" className="hover:text-[#FFC324] transition">Mon panier</Link></li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FFC324]">Informations</h4>
            <ul className="space-y-2">
              <li>Horaires: 18h-22h</li>
              <li>Tél: 01 23 45 67 89</li>
              <li>Email: contact@afrimarket.fr</li>
              <li>Adresse: 123 Rue de l'Afrique</li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              © 2024 AfriMarket. Tous droits réservés.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/mentions-legales" className="text-sm text-gray-300 hover:text-[#FFC324] transition">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-sm text-gray-300 hover:text-[#FFC324] transition">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 