export default function DeliveryIcons() {
  const deliveryOptions = [
    { 
      name: 'Livraison à domicile', 
      icon: '🚚', 
      description: 'Livraison en 30-45 min',
      price: '2€'
    },
    { 
      name: 'Retrait restaurant', 
      icon: '🏪', 
      description: 'Prêt en 15 min',
      price: 'Gratuit'
    },
  ];

  return (
    <div className="flex flex-col items-center gap-3">
      <h4 className="text-sm font-semibold text-gray-700">Options de livraison</h4>
      <div className="flex gap-4">
        {deliveryOptions.map((option) => (
          <div key={option.name} className="flex flex-col items-center gap-2 bg-white rounded-lg p-3 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-[#228B22] rounded-full flex items-center justify-center text-white text-xl">
              {option.icon}
            </div>
            <div className="text-center">
              <h5 className="text-sm font-semibold text-gray-800">{option.name}</h5>
              <p className="text-xs text-gray-600">{option.description}</p>
              <p className="text-xs font-bold text-[#228B22]">{option.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 