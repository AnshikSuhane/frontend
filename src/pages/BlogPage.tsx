import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      slug: 'art-of-layering-fragrances',
      title: 'The Art of Layering Fragrances: Create Your Signature Scent',
      excerpt: 'Discover the secrets of fragrance layering to create a unique scent that\'s entirely your own.',
      image: 'https://images.pexels.com/photos/1190819/pexels-photo-1190819.jpeg',
      category: 'tips',
      author: 'Isabella Moreau',
      date: '2024-01-15',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      slug: 'seasonal-fragrance-guide',
      title: 'Seasonal Fragrance Guide: Scents for Every Season',
      excerpt: 'Learn how to choose the perfect fragrance for spring, summer, fall, and winter.',
      image: 'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg',
      category: 'guide',
      author: 'Alexandre Dubois',
      date: '2024-01-10',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 3,
      slug: 'history-of-perfumery',
      title: 'A Journey Through Time: The History of Perfumery',
      excerpt: 'Explore the fascinating evolution of perfume from ancient civilizations to modern luxury.',
      image: 'https://images.pexels.com/photos/1190824/pexels-photo-1190824.jpeg',
      category: 'history',
      author: 'Sophie Laurent',
      date: '2024-01-05',
      readTime: '10 min read',
      featured: false
    },
    {
      id: 4,
      slug: 'fragrance-notes-explained',
      title: 'Understanding Fragrance Notes: Top, Heart, and Base',
      excerpt: 'Demystify the complex world of fragrance composition and learn to identify different notes.',
      image: 'https://images.pexels.com/photos/1190826/pexels-photo-1190826.jpeg',
      category: 'education',
      author: 'Isabella Moreau',
      date: '2024-01-01',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 5,
      slug: 'perfume-storage-tips',
      title: 'How to Store Your Perfumes: Preserving Your Investment',
      excerpt: 'Essential tips for storing your fragrances to maintain their quality and longevity.',
      image: 'https://images.pexels.com/photos/1190828/pexels-photo-1190828.jpeg',
      category: 'tips',
      author: 'Alexandre Dubois',
      date: '2023-12-28',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 6,
      slug: 'custom-fragrance-process',
      title: 'Behind the Scenes: Creating Your Custom Fragrance',
      excerpt: 'Take a peek into our custom fragrance creation process and what makes each blend unique.',
      image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg',
      category: 'behind-scenes',
      author: 'Sophie Laurent',
      date: '2023-12-25',
      readTime: '8 min read',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'tips', name: 'Tips & Tricks' },
    { id: 'guide', name: 'Guides' },
    { id: 'history', name: 'History' },
    { id: 'education', name: 'Education' },
    { id: 'behind-scenes', name: 'Behind the Scenes' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || selectedCategory !== 'all' || searchTerm);

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
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
      {/* Header */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-light text-white mb-6 animate-fade-in-up">
            Fragrance <span className="text-yellow-500">Journal</span>
          </h1>
          <p className="text-xl text-gray-400 animate-fade-in-up animation-delay-300">
            Discover the art, science, and stories behind luxury perfumery
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:bg-white/20 transition-all duration-300"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/25'
                      : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'all' && !searchTerm && (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="animate-on-scroll">
              <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-400/5 rounded-3xl p-8 border border-yellow-500/20">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="text-yellow-500 text-sm">{featuredPost.category}</span>
                    </div>
                    
                    <h2 className="text-3xl font-light text-white leading-tight">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    
                    <Link
                      to={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center space-x-2 text-yellow-500 hover:text-yellow-400 transition-colors duration-300 font-medium"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  
                  <div className="relative">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-80 object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article
                key={post.id}
                className="group animate-on-scroll bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-medium text-white group-hover:text-yellow-500 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-yellow-500 hover:text-yellow-400 transition-colors duration-300 text-sm font-medium"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <Tag className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-400 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      <style >{`
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        
        .animation-delay-300 { animation-delay: 0.3s; }
        
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
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;