import  { useState, useEffect } from 'react';
import { Gift, Heart, Star, Sparkles, Crown, Users, Calendar, ShoppingBag } from 'lucide-react';

const GiftGuidePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selectedCategory, selectedBudget]);

  const giftCategories = [
    { id: 'all', name: 'All Gifts', icon: Gift },
    { id: 'romantic', name: 'For Her', icon: Heart },
    { id: 'masculine', name: 'For Him', icon: Crown },
    { id: 'luxury', name: 'Luxury Sets', icon: Sparkles },
    { id: 'occasions', name: 'Special Occasions', icon: Calendar },
    { id: 'discovery', name: 'Discovery Sets', icon: Star }
  ];

  const budgetRanges = [
    { id: 'all', name: 'All Budgets' },
    { id: 'under100', name: 'Under $100' },
    { id: '100-250', name: '$100 - $250' },
    { id: '250-500', name: '$250 - $500' },
    { id: 'luxury', name: '$500+' }
  ];

  const giftSets = [
    {
      id: 1,
      name: 'Romantic Evening Collection',
      price: 299,
      originalPrice: 399,
      category: 'romantic',
      budget: '250-500',
      image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg',
      description: 'Perfect for romantic occasions with three signature scents',
      contents: ['Midnight Elegance 50ml', 'Rose Garden 30ml', 'Silk & Satin 30ml', 'Luxury Gift Box'],
      rating: 4.9,
      bestseller: true
    },
    {
      id: 2,
      name: 'Gentleman\'s Choice Set',
      price: 349,
      originalPrice: 449,
      category: 'masculine',
      budget: '250-500',
      image: 'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg',
      description: 'Sophisticated fragrances for the modern gentleman',
      contents: ['Urban Noir 50ml', 'Leather & Wood 30ml', 'Fresh Citrus 30ml', 'Premium Packaging'],
      rating: 4.8,
      bestseller: false
    },
    {
      id: 3,
      name: 'Discovery Journey',
      price: 89,
      originalPrice: 120,
      category: 'discovery',
      budget: 'under100',
      image: 'https://images.pexels.com/photos/1190819/pexels-photo-1190819.jpeg',
      description: 'Explore our most popular fragrances in travel sizes',
      contents: ['6 x 10ml Travel Sprays', 'Fragrance Guide', 'Elegant Travel Case'],
      rating: 4.7,
      bestseller: true
    },
    {
      id: 4,
      name: 'Luxury Signature Collection',
      price: 799,
      originalPrice: 999,
      category: 'luxury',
      budget: 'luxury',
      image: 'https://images.pexels.com/photos/1190824/pexels-photo-1190824.jpeg',
      description: 'Our most exclusive fragrances in a premium presentation',
      contents: ['Royal Velvet 100ml', 'Diamond Essence 50ml', 'Gold Edition 50ml', 'Crystal Decanter', 'Silk-lined Box'],
      rating: 5.0,
      bestseller: false
    },
    {
      id: 5,
      name: 'Wedding Day Memories',
      price: 199,
      originalPrice: 249,
      category: 'occasions',
      budget: '100-250',
      image: 'https://images.pexels.com/photos/1190826/pexels-photo-1190826.jpeg',
      description: 'Create lasting memories with this bridal collection',
      contents: ['Bridal Bouquet 50ml', 'Something Blue 30ml', 'Forever Yours 30ml', 'Keepsake Box'],
      rating: 4.9,
      bestseller: true
    },
    {
      id: 6,
      name: 'Mother\'s Day Special',
      price: 159,
      originalPrice: 199,
      category: 'romantic',
      budget: '100-250',
      image: 'https://images.pexels.com/photos/1190828/pexels-photo-1190828.jpeg',
      description: 'Show your love with this elegant floral collection',
      contents: ['Garden Party 50ml', 'Morning Dew 30ml', 'Silk Scarf', 'Handwritten Note Card'],
      rating: 4.8,
      bestseller: false
    }
  ];

  const occasions = [
    {
      title: 'Valentine\'s Day',
      description: 'Romantic fragrances for your special someone',
      image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg',
      color: 'from-pink-500 to-red-400'
    },
    {
      title: 'Mother\'s Day',
      description: 'Elegant scents to honor the special women in your life',
      image: 'https://images.pexels.com/photos/1190819/pexels-photo-1190819.jpeg',
      color: 'from-purple-500 to-pink-400'
    },
    {
      title: 'Weddings',
      description: 'Memorable fragrances for life\'s most precious moments',
      image: 'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'Anniversaries',
      description: 'Celebrate your love story with signature scents',
      image: 'https://images.pexels.com/photos/1190824/pexels-photo-1190824.jpeg',
      color: 'from-yellow-500 to-orange-400'
    }
  ];

  const filteredGifts = giftSets.filter(gift => {
    const categoryMatch = selectedCategory === 'all' || gift.category === selectedCategory;
    const budgetMatch = selectedBudget === 'all' || gift.budget === selectedBudget;
    return categoryMatch && budgetMatch;
  });

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-400/3 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center px-6">
          <Gift className="w-16 h-16 text-yellow-500 mx-auto mb-6 animate-bounce" />
          <h1 className="text-6xl font-light text-white mb-8 animate-fade-in-up">
            Gift <span className="text-yellow-500">Guide</span>
          </h1>
          <p className="text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
            Find the perfect fragrance gift for every person and every occasion. 
            Curated collections that create lasting memories.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Category Filter */}
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Shop by Recipient</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {giftCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category.id
                        ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/25'
                        : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span className="text-sm">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Filter */}
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Shop by Budget</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {budgetRanges.map((budget) => (
                  <button
                    key={budget.id}
                    onClick={() => setSelectedBudget(budget.id)}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                      selectedBudget === budget.id
                        ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/25'
                        : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                    }`}
                  >
                    <span className="text-sm">{budget.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Sets Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGifts.map((gift, index) => (
              <div
                key={gift.id}
                className="group animate-on-scroll bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={gift.image}
                    alt={gift.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {gift.bestseller && (
                      <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-medium">
                        Bestseller
                      </span>
                    )}
                    {gift.originalPrice > gift.price && (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Save ${gift.originalPrice - gift.price}
                      </span>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-white text-xs">{gift.rating}</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                      {gift.name}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {gift.description}
                    </p>
                  </div>

                  {/* Contents */}
                  <div>
                    <p className="text-gray-500 text-xs mb-2">Includes:</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      {gift.contents.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                      {gift.contents.length > 3 && (
                        <li className="text-yellow-500 text-xs">
                          +{gift.contents.length - 3} more items
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div>
                      <span className="text-2xl font-light text-yellow-500">${gift.price}</span>
                      {gift.originalPrice > gift.price && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ${gift.originalPrice}
                        </span>
                      )}
                    </div>
                    <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredGifts.length === 0 && (
            <div className="text-center py-16">
              <Gift className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-400 mb-2">No gifts found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more options</p>
            </div>
          )}
        </div>
      </section>

      {/* Special Occasions */}
      <section className="py-20 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-400/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl font-light text-white mb-6">
              Shop by <span className="text-yellow-500">Occasion</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Find the perfect fragrance gift for life's most special moments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((occasion, index) => (
              <div
                key={index}
                className="group animate-on-scroll bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={occasion.image}
                    alt={occasion.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${occasion.color} opacity-60`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                    {occasion.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {occasion.description}
                  </p>
                  <button className="text-yellow-500 hover:text-yellow-400 transition-colors duration-300 text-sm font-medium">
                    Shop Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl font-light text-white mb-6">
              Premium <span className="text-yellow-500">Gift Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Gift,
                title: 'Luxury Gift Wrapping',
                description: 'Elegant packaging with silk ribbons and personalized notes',
                price: 'Complimentary'
              },
              {
                icon: Users,
                title: 'Personal Shopping',
                description: 'One-on-one consultation with our fragrance experts',
                price: 'Free with purchase'
              },
              {
                icon: Sparkles,
                title: 'Custom Engraving',
                description: 'Personalize bottles with names, dates, or special messages',
                price: 'From $25'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group animate-on-scroll bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-500/20 to-yellow-400/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-medium text-white mb-4 text-center group-hover:text-yellow-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-center mb-4">
                  {service.description}
                </p>
                <p className="text-yellow-500 text-center font-medium">
                  {service.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style >{`
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-1000 { animation-delay: 1s; }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default GiftGuidePage;