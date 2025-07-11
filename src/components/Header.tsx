'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="bg-[#D2691E] text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight font-[Quicksand]">
          <span className="text-[#FFC324]">Afri</span>
          <span className="text-white">Market</span>
        </Link>
        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-lg font-medium">
          <Link href="/catalogue" className="hover:text-[#FFC324] transition">Catalogue</Link>
          <Link href="/restaurant" className="hover:text-[#FFC324] transition">Restaurant</Link>
          <Link href="/blog" className="hover:text-[#FFC324] transition">Astuces</Link>
        </nav>
        {/* Panier + CTA */}
        <div className="flex items-center gap-4">
          <Link href="/panier" className="relative group">
            <span className="material-symbols-outlined text-3xl">shopping_cart</span>
            {/* Badge panier */}
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#228B22] text-xs rounded-full px-1.5 py-0.5 font-bold">
                {totalItems}
              </span>
            )}
          </Link>
          <Link href="/restaurant" className="bg-[#228B22] hover:bg-[#FFC324] text-white hover:text-[#D2691E] font-semibold rounded-full px-4 py-2 transition shadow-lg">
            Commandez nos plats chauds du soir
          </Link>
        </div>
      </div>
    </header>
  );
} 