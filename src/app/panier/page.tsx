'use client';

import { useCart } from '@/contexts/CartContext';
import PaymentIcons from '@/components/PaymentIcons';
import DeliveryIcons from '@/components/DeliveryIcons';

export default function PanierPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-[#D2691E] mb-6">Votre Panier</h1>
        <div className="bg-white rounded-xl p-8 shadow-md">
          <p className="text-xl text-gray-600 mb-6">Votre panier est vide</p>
          <a 
            href="/catalogue" 
            className="bg-[#FFC324] text-[#D2691E] font-bold px-6 py-3 rounded-full hover:bg-[#D2691E] hover:text-white transition"
          >
            Découvrir nos produits
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#D2691E] mb-8 text-center">Votre Panier</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Liste des articles */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-[#D2691E] mb-4">Articles ({items.length})</h2>
            
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#D2691E]">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.price.toFixed(2)} € / {item.unit}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-bold text-[#228B22]">{(item.price * item.quantity).toFixed(2)} €</p>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                Vider le panier
              </button>
            </div>
          </div>
        </div>

        {/* Résumé et commande */}
        <div className="space-y-6">
          {/* Résumé */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-[#D2691E] mb-4">Résumé</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span className="font-semibold">{totalPrice.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between">
                <span>Livraison</span>
                <span className="font-semibold">2.00 €</span>
              </div>
              <div className="border-t pt-2 flex justify-between text-lg font-bold text-[#228B22]">
                <span>Total</span>
                <span>{(totalPrice + 2).toFixed(2)} €</span>
              </div>
            </div>
            
            <button className="w-full bg-[#228B22] text-white font-bold py-3 rounded-full hover:bg-[#FFC324] hover:text-[#D2691E] transition">
              Commander maintenant
            </button>
          </div>

          {/* Options de livraison */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <DeliveryIcons />
          </div>

          {/* Moyens de paiement */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <PaymentIcons />
          </div>
        </div>
      </div>
    </main>
  );
} 