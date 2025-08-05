
import { motion } from 'framer-motion';
import { Award, Heart, Leaf, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Passionate Craftsmanship',
      description: 'Every fragrance is born from passion, crafted with meticulous attention to detail and artistic vision.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Luxury',
      description: 'We source our ingredients ethically, supporting local communities while preserving the environment.'
    },
    {
      icon: Award,
      title: 'Award-Winning Excellence',
      description: 'Recognized globally for our innovative approach to perfumery and commitment to quality.'
    },
    {
      icon: Sparkles,
      title: 'Unique Compositions',
      description: 'Each scent is an exclusive creation, designed to evoke emotions and create lasting memories.'
    }
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Organic Background Shapes */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            d: [
              "M200,400 Q400,100 600,300 T1000,400",
              "M200,300 Q500,200 700,400 T1000,300",
              "M200,400 Q400,100 600,300 T1000,400"
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 opacity-10"
        >
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <motion.path
              d="M200,400 Q400,100 600,300 T1000,400"
              stroke="url(#aboutGradient)"
              strokeWidth="3"
              fill="none"
              animate={{ 
                d: [
                  "M200,400 Q400,100 600,300 T1000,400",
                  "M200,300 Q500,200 700,400 T1000,300",
                  "M200,400 Q400,100 600,300 T1000,400"
                ]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-amber-300 via-rose-300 to-purple-300 bg-clip-text text-transparent">
            Our Philosophy
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are a team of visionary perfumers, artisans, and innovators dedicated to crafting 
            exceptional olfactory experiences. Our mission is to bridge creativity with luxury, 
            creating fragrances that tell your unique story.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-amber-300/20 backdrop-blur-sm hover:border-amber-300/40 transition-all duration-500">
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-rose-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ 
                    background: [
                      "linear-gradient(135deg, rgba(245,158,11,0.05) 0%, rgba(236,72,153,0.05) 100%)",
                      "linear-gradient(135deg, rgba(236,72,153,0.05) 0%, rgba(139,92,246,0.05) 100%)",
                      "linear-gradient(135deg, rgba(245,158,11,0.05) 0%, rgba(236,72,153,0.05) 100%)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-rose-400/20 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-amber-500/25 transition-all duration-500"
                >
                  <feature.icon className="text-amber-300" size={28} />
                </motion.div>

                <h3 className="font-playfair text-2xl font-bold mb-4 text-white group-hover:text-amber-300 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute top-4 right-4 w-3 h-3 bg-amber-400/50 rounded-full"
                />
                <motion.div
                  animate={{ 
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: index * 0.3 }}
                  className="absolute bottom-4 left-4 w-2 h-2 bg-rose-400/50 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 grid md:grid-cols-3 gap-8 text-center"
        >
          {[
            { number: '50+', label: 'Unique Fragrances', suffix: '' },
            { number: '25', label: 'Years of Excellence', suffix: '+' },
            { number: '100K', label: 'Happy Customers', suffix: '+' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl border border-amber-300/20 backdrop-blur-sm hover:border-amber-300/40 transition-all duration-500"
              >
                <motion.div
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(245,158,11,0.5)",
                      "0 0 40px rgba(245,158,11,0.8)",
                      "0 0 20px rgba(245,158,11,0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-300 to-rose-300 bg-clip-text text-transparent mb-4"
                >
                  {stat.number}{stat.suffix}
                </motion.div>
                <div className="text-xl text-gray-300 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;