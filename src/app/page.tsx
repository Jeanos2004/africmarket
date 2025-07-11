import Link from 'next/link';
import RestaurantMenu from '@/components/RestaurantMenu';
import PaymentIcons from '@/components/PaymentIcons';
import DeliveryIcons from '@/components/DeliveryIcons';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#D2691E] via-[#FFC324] to-[#228B22] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block">Bienvenue chez</span>
            <span className="block text-[#FFC324]">AfriMarket</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Découvrez les saveurs authentiques de l'Afrique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/catalogue" 
              className="bg-white text-[#D2691E] font-bold px-8 py-3 rounded-full text-lg hover:bg-[#FFC324] transition"
            >
              Voir nos produits
            </Link>
            <Link 
              href="/restaurant" 
              className="bg-[#228B22] text-white font-bold px-8 py-3 rounded-full text-lg hover:bg-white hover:text-[#228B22] transition"
            >
              Commander au restaurant
            </Link>
          </div>
        </div>
      </section>

      {/* Restaurant Menu Section */}
      <RestaurantMenu />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#D2691E] mb-12">
            Pourquoi choisir AfriMarket ?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFC324] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌾</span>
              </div>
              <h3 className="text-xl font-bold text-[#D2691E] mb-2">Produits Frais</h3>
              <p className="text-gray-600">Des produits frais et de qualité, sélectionnés avec soin pour vous offrir le meilleur de l'Afrique.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#228B22] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold text-[#D2691E] mb-2">Livraison Rapide</h3>
              <p className="text-gray-600">Livraison à domicile en 30-45 minutes ou retrait gratuit au restaurant en 15 minutes.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D2691E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-bold text-[#D2691E] mb-2">Paiement Flexible</h3>
              <p className="text-gray-600">Paiement en espèces, Orange Money ou MTN Money selon vos préférences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Delivery Info */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <PaymentIcons />
            <DeliveryIcons />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#228B22] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Prêt à découvrir nos saveurs ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Commandez maintenant et savourez l'authenticité africaine
          </p>
          <Link 
            href="/catalogue" 
            className="bg-[#FFC324] text-[#D2691E] font-bold px-8 py-4 rounded-full text-lg hover:bg-white transition inline-block"
          >
            Commencer mes achats
          </Link>
        </div>
      </section>
    </main>
  );
}
