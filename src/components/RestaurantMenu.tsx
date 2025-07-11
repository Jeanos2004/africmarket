import Link from 'next/link';

const menuItems = [
  { name: 'Attiéké + Poisson grillé', price: 8.5, description: 'Avec sauce graine et banane plantain' },
  { name: 'Attiéké + Poulet braisé', price: 7.5, description: 'Avec sauce tomate et légumes' },
  { name: 'Œufs à la sauce graine', price: 4.0, description: 'Avec attiéké et banane douce' },
  { name: 'Banane douce frite', price: 2.5, description: 'Dessert traditionnel' },
];

const promotions = [
  { text: '1kg de riz offert pour 2 plats achetés', icon: '🎁' },
  { text: 'Livraison gratuite à partir de 15€', icon: '🚚' },
  { text: 'Menu complet à 12€ (plat + dessert)', icon: '🍽️' },
];

export default function RestaurantMenu() {
  return (
    <section className="bg-gradient-to-r from-[#D2691E] to-[#FFC324] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🍽️ Nos Plats Chauds du Soir</h2>
          <p className="text-xl mb-2">Disponibles au restaurant à partir de 18h</p>
          <p className="text-lg opacity-90">Cuisine africaine authentique, fraîche et savoureuse</p>
        </div>

        {/* Menu */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-center">Menu du Soir</h3>
            <div className="space-y-4">
              {menuItems.map((item) => (
                <div key={item.name} className="flex justify-between items-start border-b border-white/20 pb-2">
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm opacity-80">{item.description}</p>
                  </div>
                  <span className="font-bold text-[#FFC324]">{item.price}€</span>
                </div>
              ))}
            </div>
          </div>

          {/* Promotions */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-center">🎉 Promotions</h3>
            <div className="space-y-3">
              {promotions.map((promo) => (
                <div key={promo.text} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                  <span className="text-2xl">{promo.icon}</span>
                  <span className="font-medium">{promo.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/restaurant" 
            className="inline-block bg-[#228B22] hover:bg-white text-white hover:text-[#D2691E] font-bold text-lg px-8 py-4 rounded-full transition shadow-lg"
          >
            Commandez maintenant - Disponible à 18h
          </Link>
        </div>
      </div>
    </section>
  );
} 