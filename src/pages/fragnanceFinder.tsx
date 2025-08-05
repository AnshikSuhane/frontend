import  { useState } from 'react';
import { ChevronRight, Sparkles, Heart, Sun, Moon, Flower, Zap } from 'lucide-react';

const FragranceFinderPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  type Recommendation = {
    id: number;
    name: string;
    match: number;
    image: string;
    price: number;
    description: string;
    notes: string[];
    why: string;
  };
  
  const [results, setResults] = useState<Recommendation[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const questions = [
    {
      id: 'occasion',
      title: 'When do you plan to wear this fragrance?',
      subtitle: 'Different occasions call for different scent profiles',
      options: [
        { value: 'daily', label: 'Daily wear', icon: Sun, description: 'For everyday activities and work' },
        { value: 'evening', label: 'Evening events', icon: Moon, description: 'For dinner dates and special occasions' },
        { value: 'special', label: 'Special occasions', icon: Sparkles, description: 'For celebrations and formal events' },
        { value: 'romantic', label: 'Romantic moments', icon: Heart, description: 'For intimate and romantic settings' }
      ]
    },
    {
      id: 'personality',
      title: 'Which personality best describes you?',
      subtitle: 'Your fragrance should reflect your unique character',
      options: [
        { value: 'confident', label: 'Bold & Confident', icon: Zap, description: 'You love making a statement' },
        { value: 'elegant', label: 'Elegant & Sophisticated', icon: Sparkles, description: 'You appreciate timeless beauty' },
        { value: 'romantic', label: 'Romantic & Dreamy', icon: Heart, description: 'You love soft, feminine scents' },
        { value: 'fresh', label: 'Fresh & Energetic', icon: Sun, description: 'You prefer clean, invigorating scents' }
      ]
    },
    {
      id: 'season',
      title: 'What\'s your favorite season?',
      subtitle: 'Seasonal preferences often align with fragrance families',
      options: [
        { value: 'spring', label: 'Spring', icon: Flower, description: 'Fresh blooms and new beginnings' },
        { value: 'summer', label: 'Summer', icon: Sun, description: 'Warm days and ocean breezes' },
        { value: 'autumn', label: 'Autumn', icon: Sparkles, description: 'Cozy warmth and spiced air' },
        { value: 'winter', label: 'Winter', icon: Moon, description: 'Rich depth and comforting warmth' }
      ]
    },
    {
      id: 'notes',
      title: 'Which scent family appeals to you most?',
      subtitle: 'This helps us understand your fragrance preferences',
      options: [
        { value: 'floral', label: 'Floral', icon: Flower, description: 'Rose, jasmine, lily, peony' },
        { value: 'citrus', label: 'Citrus', icon: Sun, description: 'Lemon, bergamot, orange, grapefruit' },
        { value: 'oriental', label: 'Oriental', icon: Sparkles, description: 'Vanilla, amber, spices, incense' },
        { value: 'woody', label: 'Woody', icon: Moon, description: 'Sandalwood, cedar, oak, pine' }
      ]
    },
    {
      id: 'intensity',
      title: 'How strong do you like your fragrance?',
      subtitle: 'This determines the concentration and projection',
      options: [
        { value: 'subtle', label: 'Subtle & Close', icon: Heart, description: 'Intimate, only noticeable up close' },
        { value: 'moderate', label: 'Moderate', icon: Sun, description: 'Noticeable but not overwhelming' },
        { value: 'strong', label: 'Strong & Bold', icon: Zap, description: 'Makes a statement, high projection' },
        { value: 'variable', label: 'It depends', icon: Sparkles, description: 'Different strengths for different occasions' }
      ]
    }
  ];

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    
    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 300);
    } else {
      // Calculate results
      calculateResults({ ...answers, [questionId]: value });
    }
  };

  const calculateResults = async (finalAnswers: Record<string, string>) => {
    setIsLoading(true);

    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Use finalAnswers for demonstration (e.g., log or filter)
    console.log('User answers:', finalAnswers);

    // Mock recommendation logic
    const recommendations = [
      {
        id: 1,
        name: "Midnight Elegance",
        match: 95,
        image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg",
        price: 299,
        description: "Perfect for your sophisticated evening occasions",
        notes: ["Bergamot", "Rose", "Sandalwood"],
        why: "Based on your preference for elegant, evening fragrances with floral notes"
      },
      {
        id: 2,
        name: "Golden Dawn",
        match: 88,
        image: "https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg",
        price: 249,
        description: "Ideal for your daily wear with fresh energy",
        notes: ["Citrus", "Jasmine", "Musk"],
        why: "Matches your love for fresh, energetic scents perfect for daily wear"
      },
      {
        id: 3,
        name: "Royal Velvet",
        match: 82,
        image: "https://images.pexels.com/photos/1190819/pexels-photo-1190819.jpeg",
        price: 399,
        description: "For those special moments that deserve luxury",
        notes: ["Oud", "Amber", "Vanilla"],
        why: "Complements your appreciation for bold, statement-making fragrances"
      }
    ];

    setResults(recommendations);
    setIsLoading(false);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setResults(null);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow-500 animate-spin"></div>
              <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-yellow-400 animate-spin animation-delay-150"></div>
              <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-yellow-300 animate-spin animation-delay-300"></div>
            </div>
          </div>
          <h2 className="text-2xl font-light text-white mb-4">Analyzing Your Preferences</h2>
          <p className="text-gray-400 mb-6">Our AI is finding the perfect fragrances for you...</p>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce animation-delay-100"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce animation-delay-200"></div>
          </div>
        </div>
      </div>
    );
  }

  if (results) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <Sparkles className="w-16 h-16 text-yellow-500 mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl font-light text-white mb-4">
              Your Perfect <span className="text-yellow-500">Matches</span>
            </h1>
            <p className="text-xl text-gray-400">
              Based on your preferences, here are our top recommendations
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {results.map((fragrance, index) => (
              <div
                key={fragrance.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="relative">
                    <img
                      src={fragrance.image}
                      alt={fragrance.name}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                    <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                      {fragrance.match}% Match
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-2xl font-light text-white mb-2">{fragrance.name}</h3>
                      <p className="text-yellow-500 text-xl font-light">${fragrance.price}</p>
                    </div>
                    
                    <p className="text-gray-400">{fragrance.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {fragrance.notes.map((note) => (
                        <span
                          key={note}
                          className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                    
                    <div className="bg-yellow-500/10 rounded-lg p-4">
                      <p className="text-sm text-gray-300">
                        <strong className="text-yellow-500">Why this matches:</strong> {fragrance.why}
                      </p>
                    </div>
                    
                    <div className="flex space-x-4">
                      <button className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium py-3 rounded-lg hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105">
                        Add to Cart
                      </button>
                      <button className="px-6 py-3 border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={resetQuiz}
              className="px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              Take Quiz Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-light text-white mb-6">
            Fragrance <span className="text-yellow-500">Finder</span>
          </h1>
          <p className="text-xl text-gray-400">
            Discover your perfect scent with our personalized quiz
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-400">Question {currentStep + 1} of {questions.length}</span>
            <span className="text-yellow-500">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light text-white mb-4">
              {currentQuestion.title}
            </h2>
            <p className="text-gray-400 text-lg">
              {currentQuestion.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
                className="group bg-white/5 hover:bg-yellow-500/20 border border-gray-600 hover:border-yellow-500 rounded-xl p-6 text-left transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-400/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <option.icon className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium text-lg mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                      {option.label}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {option.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-yellow-500 transition-colors duration-300" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        {currentStep > 0 && (
          <div className="text-center">
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="px-6 py-3 text-gray-400 hover:text-white transition-colors duration-300"
            >
              ← Previous Question
            </button>
          </div>
        )}
      </div>

      <style>{`
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-150 { animation-delay: 0.15s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
};

export default FragranceFinderPage;