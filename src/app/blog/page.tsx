const articles = [
  {
    id: 1,
    title: 'Comment cuisiner l\'attiéké parfait',
    excerpt: 'Découvrez nos secrets pour préparer un attiéké moelleux et savoureux comme en Afrique.',
    image: '/images/blog/attieke.jpg',
    category: 'Recettes',
    readTime: '5 min',
    date: '2024-01-15'
  },
  {
    id: 2,
    title: 'Les bienfaits de l\'huile de palme rouge',
    excerpt: 'L\'huile de palme rouge, un ingrédient traditionnel aux multiples vertus nutritionnelles.',
    image: '/images/blog/huile-palme.jpg',
    category: 'Nutrition',
    readTime: '4 min',
    date: '2024-01-10'
  },
  {
    id: 3,
    title: 'Préparer une sauce graine authentique',
    excerpt: 'La sauce graine, un accompagnement traditionnel qui sublime tous vos plats.',
    image: '/images/blog/sauce-graine.jpg',
    category: 'Recettes',
    readTime: '6 min',
    date: '2024-01-05'
  },
  {
    id: 4,
    title: 'Conserver les bananes plantain',
    excerpt: 'Nos conseils pour bien conserver vos bananes plantain et les faire mûrir à la perfection.',
    image: '/images/blog/bananes.jpg',
    category: 'Astuces',
    readTime: '3 min',
    date: '2024-01-01'
  }
];

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#D2691E] mb-4">🍳 Astuces Cuisine</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Découvrez nos secrets de cuisine africaine et nos conseils pour sublimer vos plats traditionnels
        </p>
      </div>

      {/* Articles */}
      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <article key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-gradient-to-br from-[#D2691E] to-[#FFC324] flex items-center justify-center">
              <span className="text-6xl">🍽️</span>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="bg-[#FFC324] text-[#D2691E] px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </span>
                <span className="text-sm text-gray-500">{article.readTime}</span>
              </div>
              
              <h2 className="text-xl font-bold text-[#D2691E] mb-3">
                {article.title}
              </h2>
              
              <p className="text-gray-600 mb-4">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {new Date(article.date).toLocaleDateString('fr-FR')}
                </span>
                <button className="bg-[#228B22] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#FFC324] hover:text-[#D2691E] transition">
                  Lire l'article
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter */}
      <section className="mt-16 bg-gradient-to-r from-[#D2691E] to-[#FFC324] text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Restez informé !</h2>
        <p className="mb-6 opacity-90">
          Recevez nos nouvelles recettes et astuces cuisine directement dans votre boîte mail
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Votre email" 
            className="flex-1 px-4 py-3 rounded-full text-[#D2691E] font-medium focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-[#228B22] text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#228B22] transition">
            S'abonner
          </button>
        </div>
      </section>
    </main>
  );
} 