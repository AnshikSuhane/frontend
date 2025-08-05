import  { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Heart, Tag } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams();

  // Mock blog post data - in real app, fetch based on slug
  const post = {
    id: 1,
    slug: 'art-of-layering-fragrances',
    title: 'The Art of Layering Fragrances: Create Your Signature Scent',
    excerpt: 'Discover the secrets of fragrance layering to create a unique scent that\'s entirely your own.',
    content: `
      <p>Fragrance layering is an ancient art that has been practiced for centuries, allowing individuals to create truly unique and personal scents. In this comprehensive guide, we'll explore the techniques and secrets that master perfumers use to create complex, multi-dimensional fragrances.</p>

      <h2>Understanding Fragrance Families</h2>
      <p>Before you begin layering, it's essential to understand the different fragrance families and how they interact with each other. The main families include:</p>
      <ul>
        <li><strong>Citrus:</strong> Fresh, zesty, and energizing</li>
        <li><strong>Floral:</strong> Romantic, feminine, and elegant</li>
        <li><strong>Oriental:</strong> Warm, spicy, and exotic</li>
        <li><strong>Woody:</strong> Earthy, sophisticated, and grounding</li>
      </ul>

      <h2>The Golden Rules of Layering</h2>
      <p>Successful fragrance layering follows several key principles:</p>
      
      <h3>1. Start with Similar Notes</h3>
      <p>Begin by layering fragrances that share common notes. For example, if you have a rose-based perfume, try layering it with another fragrance that contains rose or complementary floral notes.</p>

      <h3>2. Consider Intensity</h3>
      <p>Layer lighter fragrances first, then add stronger ones. This prevents the more potent scents from overwhelming the delicate ones.</p>

      <h3>3. Apply Strategically</h3>
      <p>Apply different fragrances to different pulse points. Try one scent on your wrists and another behind your ears, allowing them to meld naturally with your body heat.</p>

      <h2>Advanced Layering Techniques</h2>
      <p>Once you've mastered the basics, you can experiment with more advanced techniques:</p>

      <blockquote>
        "The key to successful layering is patience and experimentation. Each person's skin chemistry is unique, so what works for one person may not work for another." - Isabella Moreau, Master Perfumer
      </blockquote>

      <h3>Seasonal Layering</h3>
      <p>Adapt your layering technique to the seasons. In summer, focus on lighter, fresher combinations, while winter calls for warmer, more intense blends.</p>

      <h3>Creating Depth</h3>
      <p>Use fragrances with different note structures to create depth. Combine a fragrance heavy in top notes with one rich in base notes for a well-rounded scent profile.</p>

      <h2>Common Mistakes to Avoid</h2>
      <p>Even experienced fragrance enthusiasts can make mistakes when layering. Here are some pitfalls to avoid:</p>
      <ul>
        <li>Over-application - less is more when layering</li>
        <li>Mixing incompatible families without understanding their interactions</li>
        <li>Not allowing time for the fragrances to settle and blend</li>
      </ul>

      <h2>Building Your Layering Collection</h2>
      <p>To become proficient at layering, consider building a collection of versatile fragrances that work well together. Start with:</p>
      <ul>
        <li>A light citrus fragrance for freshness</li>
        <li>A classic floral for romance</li>
        <li>A warm vanilla or amber for depth</li>
        <li>A clean musk for versatility</li>
      </ul>

      <p>Remember, fragrance layering is a personal journey of discovery. Take time to experiment, keep notes on successful combinations, and most importantly, have fun creating your signature scent!</p>
    `,
    image: 'https://images.pexels.com/photos/1190819/pexels-photo-1190819.jpeg',
    category: 'tips',
    author: 'Isabella Moreau',
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['layering', 'tips', 'fragrance-guide', 'perfumery']
  };

  const relatedPosts = [
    {
      id: 2,
      slug: 'seasonal-fragrance-guide',
      title: 'Seasonal Fragrance Guide',
      image: 'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg'
    },
    {
      id: 4,
      slug: 'fragrance-notes-explained',
      title: 'Understanding Fragrance Notes',
      image: 'https://images.pexels.com/photos/1190826/pexels-photo-1190826.jpeg'
    },
    {
      id: 5,
      slug: 'perfume-storage-tips',
      title: 'How to Store Your Perfumes',
      image: 'https://images.pexels.com/photos/1190828/pexels-photo-1190828.jpeg'
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-yellow-500 hover:text-yellow-400 transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6">
        <header className="mb-12">
          <div className="mb-6">
            <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="relative mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Social Actions */}
          <div className="flex items-center justify-between py-6 border-y border-gray-800">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <Heart className="w-5 h-5" />
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
            <div className="text-sm text-gray-500">
              5 min read
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-lg prose-invert max-w-none mb-16"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mb-12">
          <h3 className="text-white font-medium mb-4 flex items-center space-x-2">
            <Tag className="w-4 h-4" />
            <span>Tags</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm hover:bg-yellow-500/30 transition-colors duration-300 cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <div className="flex items-start space-x-6">
            <img
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
              alt={post.author}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-xl font-medium text-white mb-2">{post.author}</h3>
              <p className="text-gray-400 mb-4">
                Master Perfumer and founder of ÉLÉGANCE. With over 30 years of experience in the fragrance industry, Isabella has created some of the world's most beloved scents.
              </p>
              <div className="flex space-x-4">
                <button className="text-yellow-500 hover:text-yellow-400 transition-colors duration-300 text-sm font-medium">
                  Follow
                </button>
                <button className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 bg-gradient-to-t from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-light text-white mb-12 text-center">
            Related <span className="text-yellow-500">Articles</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.slug}`}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-white group-hover:text-yellow-500 transition-colors duration-300">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style >{`
        .prose {
          color: #d1d5db;
        }
        .prose h2 {
          color: #f9fafb;
          font-size: 1.5rem;
          font-weight: 300;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose h3 {
          color: #f9fafb;
          font-size: 1.25rem;
          font-weight: 400;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .prose p {
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }
        .prose ul {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
        .prose strong {
          color: #fbbf24;
          font-weight: 500;
        }
        .prose blockquote {
          border-left: 4px solid #fbbf24;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #9ca3af;
          background: rgba(251, 191, 36, 0.05);
          padding: 1.5rem;
          border-radius: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default BlogPostPage;