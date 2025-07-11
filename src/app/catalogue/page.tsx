import ProductCard from '@/components/ProductCard';

const products = [
  {
    id: 'riz-5kg',
    name: 'Riz parfumé 5kg',
    image: '/images/products/riz.jpg',
    price: 12.5,
    unit: 'sac',
  },
  {
    id: 'huile-palme-1l',
    name: 'Huile de palme 1L',
    image: '/images/products/huile.jpg',
    price: 4.2,
    unit: 'bouteille',
  },
  {
    id: 'bananes-plantain',
    name: 'Bananes plantain',
    image: '/images/products/banane.jpg',
    price: 2.8,
    unit: 'kg',
  },
  {
    id: 'attieke-1kg',
    name: 'Attiéké 1kg',
    image: '/images/products/attieke.jpg',
    price: 3.5,
    unit: 'kg',
  },
  {
    id: 'mangues-fraiches',
    name: 'Mangues fraîches',
    image: '/images/products/mangue.jpg',
    price: 3.0,
    unit: 'kg',
  },
  {
    id: 'maggi-x24',
    name: 'Maggi x24',
    image: '/images/products/maggi.jpg',
    price: 2.0,
    unit: 'paquet',
  },
];

export default function CataloguePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-[#D2691E] mb-6 text-center font-[Quicksand]">Catalogue</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
} 