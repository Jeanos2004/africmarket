'use client';

import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';

type ProductCardProps = {
  id: string;
  name: string;
  image: string;
  price: number;
  unit: string;
};

export default function ProductCard({ id, name, image, price, unit }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, unit });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition border border-[#FFC324]/30">
      <div className="w-32 h-32 relative mb-2">
        <Image src={image} alt={name} fill className="object-cover rounded-lg" />
      </div>
      <h3 className="text-lg font-semibold text-[#D2691E] mb-1 text-center">{name}</h3>
      <div className="text-[#228B22] font-bold text-base mb-2">{price.toFixed(2)} € <span className="text-xs font-normal text-gray-500">/ {unit}</span></div>
      <button 
        onClick={handleAddToCart}
        className="bg-[#FFC324] text-[#D2691E] font-bold px-4 py-1.5 rounded-full mt-auto hover:bg-[#D2691E] hover:text-white transition"
      >
        Ajouter au panier
      </button>
    </div>
  );
} 