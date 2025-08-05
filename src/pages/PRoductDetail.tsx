/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
 
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Star, Heart, Share2, Plus, Minus, ShoppingCart, ArrowLeft, Truck, Shield, RotateCcw,
  Eye, ChevronDown, ChevronUp, Play, Volume2, VolumeX,
  Camera, Maximize2, X, ThumbsUp, MessageCircle, Gift, Sparkles, Crown, Leaf
} from 'lucide-react';
import { products } from '../Data/product';


const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [showVideo, setShowVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [selectedSize, setSelectedSize] = useState('50ml');
  const [showReviews, setShowReviews] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const [, setCurrentReview] = useState(0);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [showFullscreen, setShowFullscreen] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const product = products.find(p => p.id === parseInt(id || ''));

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-3xl font-bold text-gold mb-4">Product Not Found</h1>
          <button onClick={() => navigate('/shop')} className="btn-primary">
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
   
    setIsAddingToCart(false);
    // Show success animation
    const button = document.querySelector('.add-to-cart-btn');
    button?.classList.add('animate-pulse');
    setTimeout(() => button?.classList.remove('animate-pulse'), 2000);
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleImageHover = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  const productImages = [
    product.image,
    `${product.image}?variant=2`,
    `${product.image}?variant=3`,
    `${product.image}?variant=4`,
    `${product.image}?variant=5`,
    `${product.image}?variant=6`
  ];

  const sizes = [
    { size: '30ml', price: product.price - 50, popular: false },
    { size: '50ml', price: product.price, popular: true },
    { size: '100ml', price: product.price + 80, popular: false },
    { size: '200ml', price: product.price + 150, popular: false }
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2024-01-15",
      verified: true,
      comment: "Absolutely divine! This fragrance is sophisticated and long-lasting. I get compliments every time I wear it.",
      helpful: 24,
      images: [`${product.image}?review=1`]
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      date: "2024-01-10",
      verified: true,
      comment: "Great scent profile, very unique. The bottle design is also beautiful. Highly recommend!",
      helpful: 18,
      images: []
    },
    {
      id: 3,
      name: "Emma Williams",
      rating: 5,
      date: "2024-01-08",
      verified: true,
      comment: "This has become my signature scent. The longevity is incredible - lasts all day!",
      helpful: 31,
      images: [`${product.image}?review=2, ${product.image}?review=3`]
    }
  ];

  const ingredients = [
    { name: "Bergamot Oil", origin: "Italy", sustainability: "Organic", percentage: 15 },
    { name: "Bulgarian Rose", origin: "Bulgaria", sustainability: "Fair Trade", percentage: 20 },
    { name: "Sandalwood", origin: "India", sustainability: "Sustainable", percentage: 25 },
    { name: "White Musk", origin: "Synthetic", sustainability: "Cruelty-Free", percentage: 18 },
    { name: "Vanilla Extract", origin: "Madagascar", sustainability: "Organic", percentage: 12 },
    { name: "Amber", origin: "Baltic", sustainability: "Natural", percentage: 10 }
  ];

  const tabs = [
    { id: 'description', label: 'Description', icon: Eye },
    { id: 'notes', label: 'Fragrance Notes', icon: Sparkles },
    { id: 'ingredients', label: 'Ingredients', icon: Leaf },
    { id: 'reviews', label: 'Reviews', icon: MessageCircle },
    { id: 'care', label: 'Care Instructions', icon: Shield }
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8 animate-fade-in-up">
          <button onClick={() => navigate('/')} className="hover:text-gold transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/shop')} className="hover:text-gold transition-colors">Shop</button>
          <span>/</span>
          <span className="text-gold capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </nav>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gold hover:text-gold/80 transition-all duration-300 hover:translate-x-1 mb-8 animate-fade-in-left"
        >
          <ArrowLeft size={20} />
          <span>Back to Collection</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Enhanced Product Images */}
          <div className="space-y-6 animate-fade-in-left">
            {/* Main Image with Zoom */}
            <div className="relative group">
              <div 
                ref={imageRef}
                className="aspect-square bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden relative cursor-zoom-in"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleImageHover}
                onClick={() => setShowFullscreen(true)}
              >
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isZoomed ? 'scale-150' : 'scale-100 group-hover:scale-105'
                  }`}
                  style={isZoomed ? {
                    transformOrigin:` ${zoomPosition.x}% ${zoomPosition.y}%`
                  } : {}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Zoom Indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                    <Maximize2 className="text-white" size={20} />
                  </div>
                </div>

                {/* 360° View Button */}
                <button className="absolute bottom-4 left-4 bg-gold/90 hover:bg-gold text-black px-4 py-2 rounded-full flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <Camera size={16} />
                  <span className="text-sm font-medium">360° View</span>
                </button>
              </div>

              {/* Video Preview */}
              {showVideo && (
                <div className="absolute inset-0 bg-black/90 rounded-2xl flex items-center justify-center z-10">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover rounded-2xl"
                    autoPlay
                    loop
                    muted={isMuted}
                    src="/product-video.mp4"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="bg-black/50 backdrop-blur-sm rounded-full p-2 hover:bg-black/70 transition-colors"
                    >
                      {isMuted ? <VolumeX className="text-white" size={20} /> : <Volume2 className="text-white" size={20} />}
                    </button>
                    <button
                      onClick={() => setShowVideo(false)}
                      className="bg-black/50 backdrop-blur-sm rounded-full p-2 hover:bg-black/70 transition-colors"
                    >
                      <X className="text-white" size={20} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-6 gap-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                    selectedImage === index 
                      ? 'border-gold shadow-lg shadow-gold/25' 
                      : 'border-transparent hover:border-gold/50'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
              
              {/* Video Thumbnail */}
              <button
                onClick={() => setShowVideo(true)}
                className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-gold/50 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group transition-all duration-300 hover:scale-105"
              >
                <Play className="text-gold group-hover:scale-110 transition-transform" size={20} />
              </button>
            </div>

            {/* Image Counter */}
            <div className="text-center text-gray-400 text-sm">
              {selectedImage + 1} / {productImages.length} images
            </div>
          </div>

          {/* Enhanced Product Info */}
          <div className="space-y-8 animate-fade-in-right">
            {/* Product Header */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-medium capitalize">
                  {product.category}
                </span>
                {product.category === 'limited' && (
                  <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Crown size={14} />
                    <span>Limited Edition</span>
                  </span>
                )}
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  In Stock
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gold bg-clip-text text-transparent">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < Math.floor(product.rating) ? 'text-gold fill-current' : 'text-gray-400'}
                      />
                    ))}
                  </div>
                  <span className="text-gold font-semibold">{product.rating}</span>
                  <span className="text-gray-400">({reviews.length} reviews)</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Eye size={16} />
                  <span>1,247 views today</span>
                </div>
              </div>

              {/* Price Section */}
              <div className="mb-8">
                <div className="flex items-baseline space-x-4 mb-2">
                  <span className="text-5xl font-bold text-gold">
                    ${sizes.find(s => s.size === selectedSize)?.price}
                  </span>
                  <span className="text-2xl text-gray-400 line-through">
                    ${(sizes.find(s => s.size === selectedSize)?.price || 0) + 50}
                  </span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                    Save $50
                  </span>
                </div>
                <p className="text-gray-400">Free shipping on orders over $100</p>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <span>Size</span>
                <span className="text-sm text-gray-400 font-normal">({selectedSize})</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {sizes.map((sizeOption) => (
                  <button
                    key={sizeOption.size}
                    onClick={() => setSelectedSize(sizeOption.size)}
                    className={`relative p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                      selectedSize === sizeOption.size
                        ? 'border-gold bg-gold/10 shadow-lg shadow-gold/25'
                        : 'border-gray-600 hover:border-gold/50'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-lg font-semibold">{sizeOption.size}</div>
                      <div className="text-gold font-bold">${sizeOption.price}</div>
                    </div>
                    {sizeOption.popular && (
                      <div className="absolute -top-2 -right-2 bg-gold text-black text-xs px-2 py-1 rounded-full font-medium">
                        Popular
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Quantity</label>
                  <div className="flex items-center border-2 border-gold/30 rounded-lg overflow-hidden">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-3 hover:bg-gold/10 transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-6 py-3 border-x-2 border-gold/30 min-w-[4rem] text-center font-semibold">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-3 hover:bg-gold/10 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Gift Wrapping</label>
                  <select className="w-full p-3 bg-white/10 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-gold text-white">
                    <option value="">No gift wrapping</option>
                    <option value="standard">Standard Gift Box (+$15)</option>
                    <option value="premium">Premium Gift Set (+$35)</option>
                    <option value="luxury">Luxury Presentation (+$65)</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  className="add-to-cart-btn w-full btn-primary flex items-center justify-center space-x-3 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAddingToCart ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                      <span>Adding to Cart...</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={20} />
                      <span>Add to Cart - ${(sizes.find(s => s.size === selectedSize)?.price || 0) * quantity}</span>
                    </>
                  )}
                </button>
                
                <div className="grid grid-cols-3 gap-4">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`btn-secondary flex items-center justify-center space-x-2 py-3 ${
                      isWishlisted ? 'bg-gold text-black' : ''
                    }`}
                  >
                    <Heart size={18} className={isWishlisted ? 'fill-current' : ''} />
                    <span className="hidden sm:inline">{isWishlisted ? 'Saved' : 'Save'}</span>
                  </button>
                  
                  <button className="btn-secondary flex items-center justify-center space-x-2 py-3">
                    <Share2 size={18} />
                    <span className="hidden sm:inline">Share</span>
                  </button>

                  <button className="btn-secondary flex items-center justify-center space-x-2 py-3">
                    <Gift size={18} />
                    <span className="hidden sm:inline">Gift</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gold/20">
              <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                <Truck className="text-gold flex-shrink-0" size={20} />
                <div>
                  <div className="text-sm font-medium">Free Shipping</div>
                  <div className="text-xs text-gray-400">Orders over $100</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                <Shield className="text-gold flex-shrink-0" size={20} />
                <div>
                  <div className="text-sm font-medium">Authentic</div>
                  <div className="text-xs text-gray-400">100% Genuine</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                <RotateCcw className="text-gold flex-shrink-0" size={20} />
                <div>
                  <div className="text-sm font-medium">30-Day Returns</div>
                  <div className="text-xs text-gray-400">Easy returns</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Tabs Section */}
        <div className="mb-16">
          <div className="flex flex-wrap border-b border-gold/20 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all duration-300 border-b-2 ${
                  activeTab === tab.id
                    ? 'border-gold text-gold'
                    : 'border-transparent text-gray-400 hover:text-gold hover:border-gold/50'
                }`}
              >
                <tab.icon size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="animate-fade-in-up">
            {activeTab === 'description' && (
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gold mb-4">Fragrance Story</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Inspired by the golden hour when day meets night, this exquisite fragrance captures 
                      the essence of transformation and elegance. Each note has been carefully selected to 
                      create a symphony of scents that evolves throughout the day, revealing new facets 
                      of its personality with every passing hour.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gold mb-4">Perfect For</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Evening events and special occasions</li>
                      <li>• Romantic dinners and intimate gatherings</li>
                      <li>• Professional meetings and business events</li>
                      <li>• Daily wear for the sophisticated individual</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-gradient-to-b from-gold/10 to-transparent rounded-lg">
                    <h4 className="text-xl font-semibold text-gold mb-4">Top Notes</h4>
                    <div className="space-y-2">
                      <div className="text-gray-300">Bergamot</div>
                      <div className="text-gray-300">Pink Pepper</div>
                      <div className="text-gray-300">Lemon Zest</div>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">First impression, lasts 15-30 minutes</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-b from-gold/10 to-transparent rounded-lg">
                    <h4 className="text-xl font-semibold text-gold mb-4">Heart Notes</h4>
                    <div className="space-y-2">
                      <div className="text-gray-300">Bulgarian Rose</div>
                      <div className="text-gray-300">Jasmine</div>
                      <div className="text-gray-300">Geranium</div>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">Main character, lasts 2-4 hours</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-b from-gold/10 to-transparent rounded-lg">
                    <h4 className="text-xl font-semibold text-gold mb-4">Base Notes</h4>
                    <div className="space-y-2">
                      <div className="text-gray-300">Sandalwood</div>
                      <div className="text-gray-300">White Musk</div>
                      <div className="text-gray-300">Amber</div>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">Foundation, lasts 6-8 hours</p>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gold mb-4">Fragrance Pyramid</h4>
                  <div className="relative">
                    <svg viewBox="0 0 300 200" className="w-full max-w-md mx-auto">
                      <polygon points="150,20 50,180 250,180" fill="url(#gradient)" stroke="#d4af37" strokeWidth="2"/>
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#d4af37" stopOpacity="0.3"/>
                          <stop offset="50%" stopColor="#d4af37" stopOpacity="0.2"/>
                          <stop offset="100%" stopColor="#d4af37" stopOpacity="0.1"/>
                        </linearGradient>
                      </defs>
                      <text x="150" y="50" textAnchor="middle" fill="#d4af37" fontSize="12">Top</text>
                      <text x="150" y="110" textAnchor="middle" fill="#d4af37" fontSize="12">Heart</text>
                      <text x="150" y="160" textAnchor="middle" fill="#d4af37" fontSize="12">Base</text>
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-2xl font-semibold text-gold">Natural Ingredients</h4>
                  <button
                    onClick={() => setShowIngredients(!showIngredients)}
                    className="flex items-center space-x-2 text-gold hover:text-gold/80 transition-colors"
                  >
                    <span>{showIngredients ? 'Hide Details' : 'Show Details'}</span>
                    {showIngredients ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {ingredients.map((ingredient, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-lg font-semibold">{ingredient.name}</h5>
                        <span className="text-gold font-bold">{ingredient.percentage}%</span>
                      </div>
                      <div className="space-y-2 text-sm text-gray-400">
                        <div>Origin: <span className="text-gray-300">{ingredient.origin}</span></div>
                        <div className="flex items-center space-x-2">
                          <Leaf size={14} className="text-green-400" />
                          <span className="text-green-400">{ingredient.sustainability}</span>
                        </div>
                      </div>
                      {showIngredients && (
                        <div className="mt-4 pt-4 border-t border-gold/20">
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-gold h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${ingredient.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-semibold text-gold">Customer Reviews</h4>
                  <button
                    onClick={() => setShowReviews(!showReviews)}
                    className="btn-secondary"
                  >
                    Write a Review
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="bg-white/5 rounded-lg p-6 text-center">
                      <div className="text-4xl font-bold text-gold mb-2">{product.rating}</div>
                      <div className="flex items-center justify-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={i < Math.floor(product.rating) ? 'text-gold fill-current' : 'text-gray-400'}
                          />
                        ))}
                      </div>
                      <div className="text-gray-400">Based on {reviews.length} reviews</div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-6">
                    {reviews.map((review, index) => (
                      <div key={review.id} className="bg-white/5 rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <h5 className="font-semibold">{review.name}</h5>
                              {review.verified && (
                                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs flex items-center space-x-1">
                                  <Shield size={12} />
                                  <span>Verified</span>
                                </span>
                              )}
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    size={16}
                                    className={i < review.rating ? 'text-gold fill-current' : 'text-gray-400'}
                                  />
                                ))}
                              </div>
                              <span className="text-gray-400 text-sm">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4">{review.comment}</p>
                        {review.images.length > 0 && (
                          <div className="flex space-x-2 mb-4">
                            {review.images.map((image, imgIndex) => (
                              <img
                                key={imgIndex}
                                src={image}
                                alt="Review"
                                className="w-16 h-16 object-cover rounded-lg"
                              />
                            ))}
                          </div>
                        )}
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <button className="flex items-center space-x-1 hover:text-gold transition-colors">
                            <ThumbsUp size={14} />
                            <span>Helpful ({review.helpful})</span>
                          </button>
                          <button className="hover:text-gold transition-colors">Reply</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'care' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gold mb-4">Storage Instructions</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start space-x-3">
                      <Shield className="text-gold mt-1 flex-shrink-0" size={16} />
                      <span>Store in a cool, dry place away from direct sunlight</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Shield className="text-gold mt-1 flex-shrink-0" size={16} />
                      <span>Keep bottle upright to prevent leakage</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Shield className="text-gold mt-1 flex-shrink-0" size={16} />
                      <span>Avoid extreme temperatures (below 5°C or above 25°C)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Shield className="text-gold mt-1 flex-shrink-0" size={16} />
                      <span>Keep away from children and pets</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gold mb-4">Application Tips</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start space-x-3">
                      <Sparkles className="text-gold mt-1 flex-shrink-0" size={16} />
                      <span>Apply to pulse points for best projection</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Sparkles className="text-gold mt-1 flex-shrink-0" size={16} />
                      <span>Don't rub after application - let it dry naturally</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Sparkles className="text-gold mt-1 flex-shrink-0" size={16} />
                      <span>Layer with matching body products for longevity</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Sparkles className="text-gold mt-1 flex-shrink-0" size={16} />
                      <span>Reapply every 6-8 hours for continuous scent</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <section className="animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-8">
            Complete Your <span className="text-gold">Collection</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products
              .filter((p: { id: any; category: any; }) => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map((relatedProduct: { id: React.Key | null | undefined; image: string | undefined; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; rating: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; price: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: number) => (
                <div key={relatedProduct.id} className="group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s `}}>
                  <div
                    onClick={() => navigate(`/collection/${relatedProduct.id}`)}
                    className="cursor-pointer"
                  >
                    <div className="aspect-square bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden mb-4 relative">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name ? String(relatedProduct.name) : undefined}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <button className="absolute bottom-4 right-4 bg-gold text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:scale-110">
                        <ShoppingCart size={16} />
                      </button>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-gold transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < Math.floor(Number(relatedProduct.rating) || 0) ? 'text-gold fill-current' : 'text-gray-400'}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">({relatedProduct.rating})</span>
                    </div>
                    <p className="text-2xl font-bold text-gold">${relatedProduct.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>

      {/* Fullscreen Image Modal */}
      {showFullscreen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={productImages[selectedImage]}
              alt={product.name}
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setShowFullscreen(false)}
              className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <X className="text-white" size={24} />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedImage ? 'bg-gold scale-125' : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;