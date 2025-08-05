import { useEffect } from 'react';
import { Sparkles, Heart, Award, Globe, Users, Crown } from 'lucide-react';

const StoryPage = () => {
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
  }, []);

  const milestones = [
    {
      year: '1999',
      title: 'The Beginning',
      description: 'Isabella Moreau founded ÉLÉGANCE in a small atelier in Grasse, France',
      image: 'https://images.pexels.com/photos/1190819/pexels-photo-1190819.jpeg'
    },
    {
      year: '2005',
      title: 'First International Award',
      description: 'Our signature fragrance "Midnight Rose" wins the International Fragrance Award',
      image: 'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg'
    },
    {
      year: '2010',
      title: 'Global Expansion',
      description: 'ÉLÉGANCE opens boutiques in Paris, New York, and Tokyo',
      image: 'https://images.pexels.com/photos/1190824/pexels-photo-1190824.jpeg'
    },
    {
      year: '2015',
      title: 'Sustainable Initiative',
      description: 'Launch of our eco-friendly packaging and ethical sourcing program',
      image: 'https://images.pexels.com/photos/1190826/pexels-photo-1190826.jpeg'
    },
    {
      year: '2020',
      title: 'Digital Innovation',
      description: 'Introduction of our AI-powered fragrance finder and virtual consultations',
      image: 'https://images.pexels.com/photos/1190828/pexels-photo-1190828.jpeg'
    },
    {
      year: '2024',
      title: 'The Future',
      description: 'Continuing to innovate with custom blends and personalized fragrances',
      image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg'
    }
  ];

  const values = [
    {
      icon: Crown,
      title: 'Excellence',
      description: 'We pursue perfection in every bottle, using only the finest ingredients sourced from around the world.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for the art of perfumery drives us to create fragrances that touch the soul.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We constantly push boundaries, blending traditional techniques with modern technology.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'We are committed to protecting our planet through ethical sourcing and eco-friendly practices.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in building lasting relationships with our customers and partners worldwide.'
    },
    {
      icon: Sparkles,
      title: 'Artistry',
      description: 'Each fragrance is a work of art, carefully crafted to tell a unique and memorable story.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-400/3 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center px-6">
          <Sparkles className="w-16 h-16 text-yellow-500 mx-auto mb-6 animate-spin-slow" />
          <h1 className="text-6xl font-light text-white mb-8 animate-fade-in-up">
            Our <span className="text-yellow-500">Story</span>
          </h1>
          <p className="text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
            A journey of passion, artistry, and dedication to creating the world's most 
            exquisite fragrances. From a small French atelier to a global luxury brand.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                  alt="Isabella Moreau, Founder"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-medium">Isabella Moreau</h3>
                  <p className="text-gray-300">Founder & Master Perfumer</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 animate-on-scroll">
              <h2 className="text-4xl font-light text-white">
                The Vision Behind <span className="text-yellow-500">ÉLÉGANCE</span>
              </h2>
              <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                <p>
                  "I believe that fragrance is the most intimate form of memory. It has the power 
                  to transport us through time, to evoke emotions we thought were forgotten, and 
                  to create new moments of pure magic."
                </p>
                <p>
                  Born in the heart of Provence, I grew up surrounded by lavender fields and 
                  jasmine gardens. My grandmother taught me that every flower has a story, 
                  every scent has a soul. This early connection to nature's aromatic treasures 
                  sparked a lifelong passion for perfumery.
                </p>
                <p>
                  After studying under master perfumers in Grasse and working with prestigious 
                  houses in Paris, I founded ÉLÉGANCE with a simple mission: to create fragrances 
                  that don't just smell beautiful, but tell beautiful stories.
                </p>
              </div>
              <div className="pt-4">
                <div className="bg-yellow-500/10 rounded-lg p-6 border border-yellow-500/20">
                  <p className="text-yellow-500 font-medium mb-2">"Our Philosophy"</p>
                  <p className="text-gray-300 italic">
                    "Every person deserves a fragrance as unique as their fingerprint, 
                    as personal as their dreams, and as timeless as their love story."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-400/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl font-light text-white mb-6">
              Our <span className="text-yellow-500">Journey</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From humble beginnings to global recognition, every milestone tells our story
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-500 to-yellow-400 hidden lg:block"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } animate-on-scroll`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-1 lg:pr-8 lg:pl-8">
                    <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}>
                      <div className="mb-4">
                        <span className="text-4xl font-light text-yellow-500">{milestone.year}</span>
                      </div>
                      <h3 className="text-2xl font-medium text-white mb-4">{milestone.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:flex w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full items-center justify-center z-10 shadow-lg shadow-yellow-500/25">
                    <div className="w-8 h-8 bg-black rounded-full"></div>
                  </div>

                  <div className="flex-1 lg:pr-8 lg:pl-8">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl font-light text-white mb-6">
              Our <span className="text-yellow-500">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide every decision, every creation, every relationship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 animate-on-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-500/20 to-yellow-400/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-medium text-white mb-4 text-center group-hover:text-yellow-500 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-t from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="animate-on-scroll">
            <h2 className="text-5xl font-light text-white mb-8">
              Be Part of Our <span className="text-yellow-500">Story</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Every fragrance we create is a new chapter. Every customer becomes part of our legacy. 
              What story will your scent tell?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-12 py-6 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium text-lg rounded-full hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-500 transform hover:scale-105">
                Discover Your Fragrance
              </button>
              <button className="px-12 py-6 border-2 border-yellow-500 text-yellow-500 font-medium text-lg rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-500 transform hover:scale-105">
                Visit Our Atelier
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
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
      `}</style>
    </div>
  );
};

export default StoryPage;