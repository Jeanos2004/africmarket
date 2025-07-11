import RestaurantMenu from '@/components/RestaurantMenu';
import PaymentIcons from '@/components/PaymentIcons';
import DeliveryIcons from '@/components/DeliveryIcons';

const menuComplet = [
  {
    category: 'Plats Principaux',
    items: [
      { name: 'Attiéké + Poisson grillé', price: 8.5, description: 'Poisson frais grillé avec attiéké, sauce graine et banane plantain' },
      { name: 'Attiéké + Poulet braisé', price: 7.5, description: 'Poulet braisé avec attiéké, sauce tomate et légumes' },
      { name: 'Riz + Poisson sauce graine', price: 9.0, description: 'Riz parfumé avec poisson et sauce graine traditionnelle' },
      { name: 'Riz + Poulet sauce tomate', price: 8.0, description: 'Riz avec poulet et sauce tomate épicée' },
    ]
  },
  {
    category: 'Accompagnements',
    items: [
      { name: 'Banane plantain frite', price: 2.5, description: 'Banane plantain frite à l\'huile de palme' },
      { name: 'Igname frite', price: 3.0, description: 'Igname frite avec sel et poivre' },
      { name: 'Sauce graine', price: 1.5, description: 'Sauce graine traditionnelle' },
      { name: 'Sauce tomate', price: 1.0, description: 'Sauce tomate épicée' },
    ]
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Banane douce frite', price: 2.5, description: 'Banane douce frite avec sucre' },
      { name: 'Beignets de banane', price: 3.0, description: 'Beignets de banane plantain' },
      { name: 'Fruits frais', price: 2.0, description: 'Assortiment de fruits frais de saison' },
    ]
  }
];

const horaires = [
  { jour: 'Lundi - Vendredi', heures: '18h00 - 22h00' },
  { jour: 'Samedi', heures: '17h00 - 23h00' },
  { jour: 'Dimanche', heures: '12h00 - 21h00' },
];

export default function RestaurantPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#D2691E] to-[#FFC324] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            🍽️ Restaurant AfriMarket
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Cuisine africaine authentique, fraîche et savoureuse
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Horaires d'ouverture</h2>
            <div className="space-y-2">
              {horaires.map((horaire) => (
                <div key={horaire.jour} className="flex justify-between">
                  <span className="font-medium">{horaire.jour}</span>
                  <span className="font-bold">{horaire.heures}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu complet */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#D2691E] mb-12">
            Notre Menu Complet
          </h2>
          
          <div className="space-y-8">
            {menuComplet.map((category) => (
              <div key={category.category} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-[#D2691E] mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item) => (
                    <div key={item.name} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-[#D2691E]">{item.name}</h4>
                        <span className="font-bold text-[#228B22]">{item.price}€</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions croisées */}
      <section className="py-16 bg-[#FFC324]/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#D2691E] mb-12">
            🎉 Promotions Croisées
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-bold text-[#D2691E] mb-2">Offre Riz</h3>
              <p className="text-gray-600">1kg de riz offert pour 2 plats achetés</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-[#D2691E] mb-2">Livraison Gratuite</h3>
              <p className="text-gray-600">Livraison gratuite à partir de 15€ de commande</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-bold text-[#D2691E] mb-2">Menu Complet</h3>
              <p className="text-gray-600">Menu complet à 12€ (plat + dessert)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#D2691E] mb-12">
            Informations Pratiques
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#D2691E] mb-4">Options de livraison</h3>
              <DeliveryIcons />
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#D2691E] mb-4">Moyens de paiement</h3>
              <PaymentIcons />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#228B22] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Prêt à commander ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Appelez-nous au 01 23 45 67 89 ou passez votre commande en ligne
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0123456789" 
              className="bg-[#FFC324] text-[#D2691E] font-bold px-8 py-4 rounded-full text-lg hover:bg-white transition"
            >
              📞 Appeler maintenant
            </a>
            <a 
              href="/catalogue" 
              className="bg-white text-[#228B22] font-bold px-8 py-4 rounded-full text-lg hover:bg-[#FFC324] hover:text-[#D2691E] transition"
            >
              🛒 Commander en ligne
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 