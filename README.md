# 🍽️ AfriMarket - E-commerce de Produits Alimentaires Africains

Un site e-commerce moderne pour vendre des produits alimentaires africains avec intégration restaurant, développé avec Next.js 14, TypeScript et Tailwind CSS.

## 🌟 Fonctionnalités

### 🛒 E-commerce
- **Catalogue de produits** : Épicerie sèche, produits frais, produits locaux
- **Panier d'achat** : Gestion complète avec contexte React
- **Paiement** : Orange Money, MTN Money, Espèces
- **Livraison** : À domicile ou retrait au restaurant

### 🍽️ Restaurant
- **Menu du soir** : Plats africains authentiques
- **Promotions croisées** : Offres spéciales entre e-commerce et restaurant
- **Horaires** : Service du soir (18h-22h)

### 📱 Interface
- **Design responsive** : Optimisé mobile et desktop
- **Palette africaine** : Couleurs chaudes et authentiques
- **UX intuitive** : Navigation claire et CTA visibles

## 🎨 Design & Thématique

### Couleurs
- **Terre cuite** : `#D2691E` (marron chaleureux)
- **Vert feuille** : `#228B22` (nature et fraîcheur)
- **Jaune mangue** : `#FFC324` (énergie et chaleur)
- **Ivoire** : `#FFF8E7` (fond doux)

### Typographie
- **Police** : Quicksand (arrondie et chaleureuse)
- **Style** : Moderne avec touches traditionnelles

## 🚀 Technologies

- **Framework** : Next.js 14 avec App Router
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **État** : React Context (panier)
- **Icons** : Lucide React
- **Animations** : Framer Motion

## 📁 Structure du Projet

```
src/
├── app/                    # Pages Next.js
│   ├── catalogue/         # Catalogue produits
│   ├── panier/           # Panier d'achat
│   ├── restaurant/       # Menu restaurant
│   ├── blog/             # Astuces cuisine
│   └── layout.tsx        # Layout global
├── components/           # Composants réutilisables
│   ├── Header.tsx       # Navigation + CTA
│   ├── Footer.tsx       # Pied de page
│   ├── ProductCard.tsx  # Carte produit
│   ├── RestaurantMenu.tsx # Menu restaurant
│   ├── PaymentIcons.tsx # Moyens de paiement
│   └── DeliveryIcons.tsx # Options livraison
├── contexts/            # Contextes React
│   └── CartContext.tsx  # Gestion panier
└── styles/              # Styles globaux
```

## 🛠️ Installation

1. **Cloner le projet**
```bash
git clone [url-du-repo]
cd ecommerce
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer en développement**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## 📦 Produits Disponibles

### Épicerie Sèche
- Riz parfumé 5kg
- Huile de palme 1L
- Maggi x24
- Sucre, sel, farine
- Conserves et poisson séché

### Produits Frais
- Bananes plantain
- Mangues fraîches
- Tomates, oignons
- Légumes de saison

### Produits Locaux
- Attiéké 1kg
- Fonio, maïs, igname
- Manioc, haricot, taro

## 🍽️ Menu Restaurant

### Plats Principaux
- Attiéké + Poisson grillé (8.50€)
- Attiéké + Poulet braisé (7.50€)
- Riz + Poisson sauce graine (9.00€)

### Promotions
- 1kg de riz offert pour 2 plats
- Livraison gratuite à partir de 15€
- Menu complet à 12€

## 🚚 Livraison & Paiement

### Options de Livraison
- **Livraison à domicile** : 2€ (30-45 min)
- **Retrait restaurant** : Gratuit (15 min)

### Moyens de Paiement
- **Orange Money** : Paiement mobile
- **MTN Money** : Paiement mobile
- **Espèces** : Paiement à la livraison

## 🎯 Fonctionnalités Futures

- [ ] Système d'authentification
- [ ] Paiement en ligne (Stripe)
- [ ] CMS pour gérer les produits
- [ ] Support multilingue (Soussou)
- [ ] Notifications push
- [ ] Système de fidélité

## 📞 Contact

- **Téléphone** : 01 23 45 67 89
- **Email** : contact@afrimarket.fr
- **Adresse** : 123 Rue de l'Afrique
- **Horaires** : 18h-22h

## 📄 Licence

Ce projet est développé pour AfriMarket. Tous droits réservés.

---

**Développé avec ❤️ pour promouvoir les saveurs africaines**
