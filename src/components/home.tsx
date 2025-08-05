 
import {
  ChevronDown,
  ChevronRight,
  Crown,
  Diamond,
  Eye,
  Flame,
  Sparkles,
  Star,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import perfume from "../assets/perfume.jpg";
import { products } from "../Data/product";
import ProductCard from "../pages/ProductCard";
const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setmousePosition] = useState({ x: 0, y: 0 });
  const featuresRef = useRef(null);
  const featuredProduct = products.slice(0, 6);
  const [particles] = useState<
    Array<{ id: number; x: number; y: number; size: number; speed: number }>
  >([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const handleMouseMove = (e: MouseEvent) => {
      setmousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  // Example: simulate loading complete after 2 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
        {/* Extreme Loading Animation */}
        <div
          className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-all duration-2000 ${
            isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="relative">
            <div className="w-32 h-32 border-4 border-transparent border-t-yellow-400 rounded-full animate-spin-fast"></div>
            <div className="absolute inset-0 w-32 h-32 border-4 border-transparent border-r-purple-500 rounded-full animate-spin-reverse"></div>
            <div className="absolute inset-4 w-24 h-24 border-4 border-transparent border-b-pink-500 rounded-full animate-spin-slow"></div>
            <Sparkles className="absolute inset-0 m-auto w-8 h-8 text-yellow-400 animate-pulse-extreme" />
          </div>
        </div>
        <div className="fixed inset-0 pointer-events-none z-10">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-particle-float opacity-60"
              style={{
                left: `${particle.x}px`,
                top: `${particle.y}px`,
                animationDelay: `${particle.id * 0.1}s`,
                animationDuration: `${particle.speed + 3}s`,
              }}
            />
          ))}
        </div>
        <div
          className="fixed w-6 h-6 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
          style={{
            left: `${mousePosition.x - 12}px`,
            top: `${mousePosition.y - 12}px`,
            transform: `scale(${Math.sin(Date.now() * 0.005) * 0.5 + 1})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/30 to-black">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/30 to-pink-500/30 rounded-full blur-3xl animate-morph-extreme"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-morph-reverse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-500/25 to-yellow-400/25 rounded-full blur-2xl animate-pulse-extreme"></div>
          </div>
        </div>
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-float-extreme opacity-20 ${
                i % 3 === 0
                  ? "w-4 h-4 bg-yellow-400 rotate-45"
                  : i % 3 === 1
                  ? "w-6 h-6 bg-pink-500 rounded-full"
                  : "w-5 h-5 bg-purple-500 rounded-sm rotate-12"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8 animate-fade-in-up">
            <Sparkles className="w-16 h-16 text-yellow-500 mx-auto mb-6 animate-spin-slow" />
          </div>

          <h1 className="text-6xl md:text-8xl font-light mb-6 animate-fade-in-up animation-delay-300">
            <span className="text-white">ÉLÉGANCE</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up animation-delay-600">
            Where luxury meets artistry in every drop
          </p>

          <div className="mb-12 animate-fade-in-up animation-delay-900">
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Discover our exclusive collection of handcrafted perfumes, each
              telling a unique story of sophistication and elegance.
            </p>
          </div>
          <div>
            <div className="relative animate-float-3d">
              <div className="relative w-96 h-96 mx-auto group">
                {/* Main Perfume Image */}
                <div className="relative w-full h-full transform-gpu perspective-1000">
                  <img
                    src={perfume}
                    alt="Luxury Perfume"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl transform group-hover:rotateY-12 group-hover:rotateX-6 transition-transform duration-1000"
                    style={{
                      transform: `translateY(${
                        Math.sin(scrollY * 0.01) * 10
                      }px) rotateY(${Math.cos(scrollY * 0.005) * 5}deg)`,
                    }}
                  />

                  {/* Floating Elements Around Image */}
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full animate-orbit opacity-80">
                    <Flame className="w-8 h-8 text-black m-auto mt-4 animate-spin-slow" />
                  </div>
                  <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-orbit-reverse opacity-70">
                    <Diamond className="w-10 h-10 text-white m-auto mt-5 animate-pulse-extreme" />
                  </div>
                  <div className="absolute top-1/2 -right-12 w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full animate-bounce-extreme">
                    <Eye className="w-6 h-6 text-black m-auto mt-3 animate-blink" />
                  </div>

                  {/* Particle Explosion Effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full animate-particle-explosion opacity-60"
                        style={{
                          left: `${
                            50 + Math.cos((i * 18 * Math.PI) / 180) * 40
                          }%`,
                          top: `${
                            50 + Math.sin((i * 18 * Math.PI) / 180) * 40
                          }%`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-1200">
              <Link
                to="/collection"
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium rounded-full hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-500 transform hover:scale-105"
              >
                <span className="relative z-10">Explore Collection</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>

              <Link
                to="/about"
                className="group px-8 py-4 border-2 border-yellow-500 text-yellow-500 font-medium rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-500 transform hover:scale-105"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-extreme">
          <div className="relative">
            <ChevronDown className="w-10 h-10 text-yellow-400 animate-pulse-glow" />
            <div className="absolute inset-0 w-10 h-10 border-2 border-yellow-400 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
      <section
        ref={featuresRef}
        className="py-32 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-5xl font-light text-white mb-6">
              Crafted to <span className="text-yellow-500">Perfection</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every fragrance is a masterpiece, meticulously developed by master
              perfumers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Crown,
                title: "Luxury Ingredients",
                description:
                  "Sourced from the finest materials around the world",
              },
              {
                icon: Star,
                title: "Master Craftsmanship",
                description:
                  "Created by world-renowned perfumers with decades of experience",
              },
              {
                icon: Sparkles,
                title: "Unique Blends",
                description:
                  "Exclusive formulations that capture your individual essence",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group text-center animate-on-scroll"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-yellow-500/20 to-yellow-400/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-10 h-10 text-yellow-500" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4 group-hover:text-yellow-500 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-400/10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="animate-on-scroll">
            <h2 className="text-5xl font-light text-white mb-8">
              Begin Your{" "}
              <span className="text-yellow-500">Fragrance Journey</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Discover scents that define your unique story and leave an
              unforgettable impression
            </p>
            <Link
              to="/collection"
              className="inline-block px-12 py-6 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium text-lg rounded-full hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-500 transform hover:scale-105"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
      {/* Feature Collection  */}
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-0 left-0 w-64 h-64 bg-gold rounded-full filter blur-3xl opacity-20 mix-blend-overlay"></div>
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold rounded-full filter blur-3xl opacity-20 mix-blend-overlay"></div>
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-20">
      <div className="inline-flex items-center justify-center mb-4">
        <span className="h-px w-16 bg-gold"></span>
        <span className="px-4 text-gold font-medium tracking-wider">LUXURY SELECTION</span>
        <span className="h-px w-16 bg-gold"></span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white">
        <span className="font-serif italic">Curated</span> <span className="text-gold font-medium">Essences</span>
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
        Experience our exclusive collection of fragrances, where each scent tells a story of elegance and craftsmanship.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredProduct.map((product, index) => (
        <div 
          key={product.id} 
          className="group relative transition-all duration-500 hover:scale-[1.02]"
        >
          {/* Featured badge for first product */}
          {index === 0 && (
            <div className="absolute top-4 left-4 z-10 bg-gold text-black px-3 py-1 text-xs font-bold tracking-wider rounded-full shadow-lg">
              EDITOR'S PICK
            </div>
          )}
          
          <ProductCard product={product} />
        </div>
      ))}
    </div>

    <div className="text-center mt-16">
      <Link 
        to="/collection" 
        className="inline-flex items-center px-8 py-3 border border-gold text-gold hover:bg-gold/10 transition-all duration-300 rounded-full group"
      >
        <span className="tracking-wider font-medium">Discover More</span>
        <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
      </Link>
    </div>
  </div>
</section>
    </>
  );
};

export default Home;
