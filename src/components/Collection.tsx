/* eslint-disable prefer-const */
import  { useState, useMemo } from 'react';
import { Filter, Search, Grid, List } from 'lucide-react';
import { products } from '../Data/product';
import ProductCard from '../pages/ProductCard';

const Collection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [isGridView, setIsGridView] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['all', 'women', 'men', 'unisex', 'limited'];
  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: '$100 - $200', value: '100-200' },
    { label: 'Over $200', value: '200+' }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      let matchesPrice = true;
      if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(p => (p === '+' ? Infinity : parseInt(p)));
        matchesPrice =
          product.price >= min && (max ? product.price <= max : true);
      }

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Our <span className="text-gold">Collection</span>
          </h1>
          <p
            className="text-xl text-gray-300 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Discover the perfect fragrance that speaks to your soul
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search fragrances..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gold/30 rounded-lg focus:outline-none focus:border-gold text-white placeholder-gray-400"
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 text-gold hover:text-gold/80 transition-colors"
            >
              <Filter size={20} />
              <span>Filters</span>
            </button>

            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="bg-black border border-gold/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              <div className="flex border border-gold/30 rounded-lg overflow-hidden">
                <button
                  onClick={() => setIsGridView(true)}
                  className={`p-2 ${isGridView ? 'bg-gold text-black' : 'text-gold hover:bg-gold/10'}`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setIsGridView(false)}
                  className={`p-2 ${!isGridView ? 'bg-gold text-black' : 'text-gold hover:bg-gold/10'}`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Filters Panel */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              showFilters ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-white/5 rounded-lg p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <h3 className="text-lg font-semibold text-gold mb-3">Category</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label
                        key={category}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="category"
                          value={category}
                          checked={selectedCategory === category}
                          onChange={e => setSelectedCategory(e.target.value)}
                          className="text-gold focus:ring-gold"
                        />
                        <span className="capitalize text-gray-300">
                          {category === 'all' ? 'All Categories' : category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h3 className="text-lg font-semibold text-gold mb-3">Price Range</h3>
                  <div className="space-y-2">
                    {priceRanges.map(range => (
                      <label
                        key={range.value}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="price"
                          value={range.value}
                          checked={priceRange === range.value}
                          onChange={e => setPriceRange(e.target.value)}
                          className="text-gold focus:ring-gold"
                        />
                        <span className="text-gray-300">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          Showing {filteredProducts.length} of {products.length} products
        </div>

        <div
          className={`grid gap-8 ${
            isGridView ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4' : 'grid-cols-1'
          }`}
        >
          {filteredProducts.map(product => (
            <div key={product.id} className="animate-fade-in-up">
              <ProductCard product={product} listView={!isGridView} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-400 mb-4">No products found</p>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;
