import  { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Heart, User, Search } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/collection' },
    { name: 'Fragrance Finder', path: '/fragrance-finder' },
    { name: 'Custom Blend', path: '/custom-blend' },
    { name: 'Our Story', path: '/story' },
    { name: 'Blog', path: '/blog' },
    { name: 'Gift Guide', path: '/gift-guide' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-yellow-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-light text-yellow-500 hover:text-yellow-400 transition-colors duration-300 group"
          >
            <span className="inline-block transform group-hover:scale-110 transition-transform duration-300">
              ÉLÉGANCE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-white hover:text-yellow-500 transition-colors duration-300 group text-sm ${
                  location.pathname === item.path ? 'text-yellow-500' : ''
                }`}
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-white hover:text-yellow-500 transition-colors duration-300 group"
            >
              <Search className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative p-2 text-white hover:text-yellow-500 transition-colors duration-300 group"
            >
              <Heart className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
             
                <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  
                </span>
            
            </Link>

            {/* Cart */}
            <button
             
              className="relative p-2 text-white hover:text-yellow-500 transition-colors duration-300 group"
            >
              <ShoppingBag className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />

            </button>

            {/* Account */}
            <Link
              to="/account"
              className="p-2 text-white hover:text-yellow-500 transition-colors duration-300 group"
            >
              <User className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden p-2 text-white hover:text-yellow-500 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className={`transition-all duration-300 overflow-hidden ${
          isSearchOpen ? 'max-h-20 pb-4' : 'max-h-0'
        }`}>
          <div className="pt-4 border-t border-yellow-500/20">
            <input
              type="text"
              placeholder="Search fragrances..."
              className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:bg-white/20 transition-all duration-300"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`xl:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <nav className="flex flex-col space-y-4 pt-4 border-t border-yellow-500/20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-white hover:text-yellow-500 transition-colors duration-300 ${
                  location.pathname === item.path ? 'text-yellow-500' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;