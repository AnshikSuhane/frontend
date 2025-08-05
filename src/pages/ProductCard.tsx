import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Eye, Zap, Award, Crown } from 'lucide-react';
import type { Product } from '../Types/product';

interface ProductCardProps {
  product: Product;
  listView?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, listView = false }) => {
  
  const [isHovered, setIsHovered] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAddingToCart(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setIsAddingToCart(false);
  };

  if (listView) {
    return (
      <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-xl p-6 hover:from-white/10 hover:to-white/15 transition-all duration-500 group border border-gold/10 hover:border-gold/30">
        <div className="flex items-center space-x-6">
          <Link to={`/collection/${product.id}`} className="flex-shrink-0 relative overflow-hidden rounded-xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-gold/20 text-gold px-2 py-1 rounded-full text-xs font-medium capitalize">
                {product.category}
              </span>
              {product.category === 'limited' && (
                <Crown className="text-gold" size={16} />
              )}
              {product.rating >= 4.8 && (
                <Award className="text-gold" size={16} />
              )}
            </div>
            
            <Link to={`/collection/${product.id}`}>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-gold transition-colors duration-300 line-clamp-1">
                {product.name}
              </h3>
            </Link>
            
            <p className="text-gray-300 mb-3 line-clamp-2 leading-relaxed">{product.description}</p>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-current' : 'text-gray-400'}
                  />
                ))}
                <span className="text-sm text-gray-400 ml-2">({product.rating})</span>
              </div>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-400">1.2k reviews</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-gold">${product.price}</span>
                <span className="text-lg text-gray-400 line-through">${product.price + 50}</span>
              </div>
              
              <div className="flex space-x-2">
                <button className="p-2 bg-white/10 hover:bg-gold/20 rounded-lg transition-all duration-300 hover:scale-110 group">
                  <Heart size={18} className="group-hover:text-gold transition-colors" />
                </button>
                <button
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  className="px-6 py-2 bg-gold text-black hover:bg-gold/90 rounded-lg transition-all duration-300 flex items-center space-x-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAddingToCart ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                  ) : (
                    <ShoppingCart size={18} />
                  )}
                  <span>{isAddingToCart ? 'Adding...' : 'Add to Cart'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="group relative bg-gradient-to-b from-white/5 to-white/10 rounded-xl overflow-hidden hover:from-white/10 hover:to-white/15 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-gold/20 border border-gold/10 hover:border-gold/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/collection/${product.id}`}>
        <div className="aspect-square overflow-hidden relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Product Badges */}
          <div className="absolute top-4 left-4 flex flex-col space-y-2">
            {product.category === 'limited' && (
              <span className="bg-red-500/90 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 backdrop-blur-sm">
                <Crown size={12} />
                <span>Limited</span>
              </span>
            )}
            {product.rating >= 4.8 && (
              <span className="bg-gold/90 text-black px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 backdrop-blur-sm">
                <Award size={12} />
                <span>Best Seller</span>
              </span>
            )}
          </div>

          {/* Discount Badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
              Save $50
            </span>
          </div>
        </div>
      </Link>
      
      {/* Quick Actions */}
      <div className="absolute top-1/2 right-4 flex flex-col space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-8 group-hover:translate-x-0">
        <button className="p-3 bg-black/50 backdrop-blur-sm hover:bg-gold/20 rounded-full transition-all duration-300 hover:scale-110 group/btn">
          <Heart size={18} className="group-hover/btn:text-gold transition-colors" />
        </button>
        <Link
          to={`/collection/${product.id}`}
          className="p-3 bg-black/50 backdrop-blur-sm hover:bg-gold/20 rounded-full transition-all duration-300 hover:scale-110 group/btn"
        >
          <Eye size={18} className="group-hover/btn:text-gold transition-colors" />
        </Link>
        <button className="p-3 bg-black/50 backdrop-blur-sm hover:bg-gold/20 rounded-full transition-all duration-300 hover:scale-110 group/btn">
          <Zap size={18} className="group-hover/btn:text-gold transition-colors" />
        </button>
      </div>

      <div className="p-6 relative">
        <div className="flex items-center space-x-2 mb-3">
          <span className="bg-gold/20 text-gold px-2 py-1 rounded-full text-xs font-medium capitalize">
            {product.category}
          </span>
          <span className="text-xs text-gray-400">•</span>
          <span className="text-xs text-gray-400">Free Shipping</span>
        </div>

        <Link to={`/collection/${product.id}`}>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-gold transition-colors duration-300 line-clamp-1">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
        
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? 'text-gold fill-current' : 'text-gray-400'}
              />
            ))}
          </div>
          <span className="text-sm text-gray-400">({product.rating})</span>
          <span className="text-xs text-gray-400">•</span>
          <span className="text-xs text-gray-400">847 sold</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-gold">${product.price}</span>
            <span className="text-sm text-gray-400 line-through">${product.price + 50}</span>
          </div>
          <span className="text-sm text-green-400 font-medium">20% OFF</span>
        </div>
        
        <button
          onClick={handleAddToCart}
          disabled={isAddingToCart}
          className={`w-full transition-all duration-500 transform ${
            isHovered 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          } p-3 bg-gold text-black hover:bg-gold/90 rounded-lg font-medium flex items-center justify-center space-x-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isAddingToCart ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
              <span>Adding...</span>
            </>
          ) : (
            <>
              <ShoppingCart size={18} />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold/10 via-transparent to-gold/10 blur-xl"></div>
      </div>
    </div>
  );
};

export default ProductCard;