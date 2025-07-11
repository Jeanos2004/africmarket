export default function PaymentIcons() {
  const paymentMethods = [
    { name: 'Orange Money', icon: '📱', color: 'bg-orange-500' },
    { name: 'MTN Money', icon: '📱', color: 'bg-yellow-500' },
    { name: 'Espèces', icon: '💵', color: 'bg-green-500' },
  ];

  return (
    <div className="flex flex-col items-center gap-2">
      <h4 className="text-sm font-semibold text-gray-700">Moyens de paiement</h4>
      <div className="flex gap-3">
        {paymentMethods.map((method) => (
          <div key={method.name} className="flex flex-col items-center gap-1">
            <div className={`w-10 h-10 ${method.color} rounded-full flex items-center justify-center text-white text-lg shadow-md`}>
              {method.icon}
            </div>
            <span className="text-xs text-gray-600 font-medium">{method.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 