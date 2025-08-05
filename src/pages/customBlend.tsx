import  { useState } from 'react';
import { Plus, Minus, Beaker, Heart, Star, ChevronRight } from 'lucide-react';

const CustomBlendPage = () => {
  const [selectedNotes, setSelectedNotes] = useState<Record<string, number>>({});
  const [blendName, setBlendName] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [totalIntensity, setTotalIntensity] = useState(0);

  const noteCategories = {
    top: {
      name: 'Top Notes',
      description: 'First impression - fresh and light',
      color: 'from-blue-500 to-cyan-400',
      notes: [
        { id: 'bergamot', name: 'Bergamot', intensity: 3, price: 25, description: 'Citrusy and fresh' },
        { id: 'lemon', name: 'Lemon', intensity: 4, price: 20, description: 'Bright and zesty' },
        { id: 'pink-pepper', name: 'Pink Pepper', intensity: 2, price: 30, description: 'Spicy and warm' },
        { id: 'mint', name: 'Mint', intensity: 5, price: 22, description: 'Cool and refreshing' },
        { id: 'grapefruit', name: 'Grapefruit', intensity: 4, price: 24, description: 'Tangy and energizing' },
        { id: 'lavender', name: 'Lavender', intensity: 3, price: 28, description: 'Calming and herbal' }
      ]
    },
    heart: {
      name: 'Heart Notes',
      description: 'The soul of your fragrance',
      color: 'from-pink-500 to-rose-400',
      notes: [
        { id: 'rose', name: 'Rose', intensity: 4, price: 45, description: 'Classic and romantic' },
        { id: 'jasmine', name: 'Jasmine', intensity: 5, price: 50, description: 'Intoxicating and exotic' },
        { id: 'lily', name: 'Lily of the Valley', intensity: 3, price: 40, description: 'Delicate and pure' },
        { id: 'peony', name: 'Peony', intensity: 3, price: 42, description: 'Soft and feminine' },
        { id: 'iris', name: 'Iris', intensity: 2, price: 55, description: 'Powdery and elegant' },
        { id: 'magnolia', name: 'Magnolia', intensity: 4, price: 48, description: 'Creamy and luxurious' }
      ]
    },
    base: {
      name: 'Base Notes',
      description: 'Long-lasting foundation',
      color: 'from-amber-500 to-orange-400',
      notes: [
        { id: 'sandalwood', name: 'Sandalwood', intensity: 3, price: 60, description: 'Creamy and woody' },
        { id: 'vanilla', name: 'Vanilla', intensity: 4, price: 35, description: 'Sweet and comforting' },
        { id: 'amber', name: 'Amber', intensity: 5, price: 65, description: 'Warm and resinous' },
        { id: 'musk', name: 'White Musk', intensity: 3, price: 40, description: 'Clean and sensual' },
        { id: 'cedar', name: 'Cedarwood', intensity: 4, price: 45, description: 'Dry and sophisticated' },
        { id: 'patchouli', name: 'Patchouli', intensity: 5, price: 38, description: 'Earthy and mysterious' }
      ]
    }
  };

  type CategoryId = keyof typeof noteCategories;

  const addNote = (categoryId: CategoryId, noteId: string) => {
    const note = noteCategories[categoryId].notes.find((n) => n.id === noteId);
    const currentAmount = selectedNotes[noteId] || 0;
    
    if (note && currentAmount < 5 && totalIntensity + note.intensity <= 20) {
      setSelectedNotes(prev => ({
        ...prev,
        [noteId]: currentAmount + 1
      }));
      setTotalIntensity(prev => prev + note.intensity);
    }
  };

  const removeNote = (categoryId: CategoryId, noteId: string) => {
    const note = noteCategories[categoryId].notes.find((n) => n.id === noteId);
    const currentAmount = selectedNotes[noteId] || 0;
    
    if (note && currentAmount > 0) {
      setSelectedNotes(prev => ({
        ...prev,
        [noteId]: currentAmount - 1
      }));
      setTotalIntensity(prev => prev - note.intensity);
    }
  };

  const getTotalPrice = () => {
    let total = 0;
    Object.entries(selectedNotes).forEach(([noteId, amount]) => {
      Object.values(noteCategories).forEach(category => {
        const note = category.notes.find(n => n.id === noteId);
        if (note) {
          total += note.price * amount;
        }
      });
    });
    return total + 150; // Base price for custom blend service
  };

  const getSelectedNotesCount = () => {
    return Object.values(selectedNotes).reduce((sum, amount) => sum + amount, 0);
  };

  const steps = [
    { id: 1, name: 'Select Notes', description: 'Choose your fragrance notes' },
    { id: 2, name: 'Customize', description: 'Name your blend and adjust' },
    { id: 3, name: 'Review', description: 'Review and place order' }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
      {/* Header */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Beaker className="w-16 h-16 text-yellow-500 mx-auto mb-6 animate-pulse" />
          <h1 className="text-6xl font-light text-white mb-6">
            Custom <span className="text-yellow-500">Blend</span>
          </h1>
          <p className="text-xl text-gray-400">
            Create your unique signature fragrance with our master perfumers
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-center">
            <div className="flex items-center space-x-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center space-x-3 ${
                    currentStep >= step.id ? 'text-yellow-500' : 'text-gray-500'
                  }`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      currentStep >= step.id 
                        ? 'border-yellow-500 bg-yellow-500 text-black' 
                        : 'border-gray-500 text-gray-500'
                    }`}>
                      {step.id}
                    </div>
                    <div className="text-left">
                      <div className="font-medium">{step.name}</div>
                      <div className="text-sm opacity-75">{step.description}</div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <ChevronRight className="w-5 h-5 text-gray-500 mx-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-light text-white">Select Your Notes</h2>
                    <div className="text-right">
                      <div className="text-yellow-500 font-medium">
                        Intensity: {totalIntensity}/20
                      </div>
                      <div className="text-gray-400 text-sm">
                        {getSelectedNotesCount()} notes selected
                      </div>
                    </div>
                  </div>

                  <div className="w-full bg-gray-800 rounded-full h-2 mb-8">
                    <div
                      className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(totalIntensity / 20) * 100}%` }}
                    ></div>
                  </div>

                  {Object.entries(noteCategories).map(([categoryId, category]) => (
                    <div key={categoryId} className="mb-8">
                      <div className="mb-6">
                        <h3 className={`text-xl font-medium bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
                          {category.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{category.description}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {category.notes.map((note) => (
                          <div
                            key={note.id}
                            className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <h4 className="text-white font-medium">{note.name}</h4>
                                <p className="text-gray-400 text-sm">{note.description}</p>
                                <p className="text-yellow-500 text-sm">${note.price} per unit</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => removeNote(categoryId as CategoryId, note.id)}
                                  disabled={!selectedNotes[note.id]}
                                  className="w-8 h-8 rounded-full bg-gray-700 text-white hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <span className="text-white font-medium w-8 text-center">
                                  {selectedNotes[note.id] || 0}
                                </span>
                                <button
                                  onClick={() => addNote(categoryId as CategoryId, note.id)}
                                  disabled={
                                    (selectedNotes[note.id] || 0) >= 5 || 
                                    totalIntensity + note.intensity > 20
                                  }
                                  className="w-8 h-8 rounded-full bg-yellow-500 text-black hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-3 h-3 ${
                                      i < note.intensity
                                        ? 'text-yellow-500 fill-current'
                                        : 'text-gray-600'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-gray-400 text-xs">Intensity</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-2xl font-light text-white mb-8">Customize Your Blend</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">
                      Blend Name
                    </label>
                    <input
                      type="text"
                      value={blendName}
                      onChange={(e) => setBlendName(e.target.value)}
                      placeholder="Enter a name for your custom fragrance"
                      className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:bg-white/20 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">
                      Special Instructions (Optional)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Any special requests or preferences for your blend..."
                      className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:bg-white/20 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  <div className="bg-yellow-500/10 rounded-lg p-6 border border-yellow-500/20">
                    <h3 className="text-yellow-500 font-medium mb-3">Perfumer's Note</h3>
                    <p className="text-gray-300 text-sm">
                      Your custom blend will be crafted by our master perfumers and aged for 30 days 
                      to ensure perfect harmony between all notes. Each bottle is hand-labeled with 
                      your chosen name and comes with a certificate of authenticity.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-2xl font-light text-white mb-8">Review Your Blend</h2>
                
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="text-white font-medium mb-4">
                      {blendName || 'My Custom Blend'}
                    </h3>
                    
                    <div className="space-y-4">
                      {Object.entries(noteCategories).map(([categoryId, category]) => {
                        const categoryNotes = category.notes.filter(note => selectedNotes[note.id]);
                        if (categoryNotes.length === 0) return null;
                        
                        return (
                          <div key={categoryId}>
                            <h4 className={`font-medium bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
                              {category.name}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {categoryNotes.map(note => (
                                <span
                                  key={note.id}
                                  className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm"
                                >
                                  {note.name} x{selectedNotes[note.id]}
                                </span>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/20">
                    <div className="flex items-center space-x-3 mb-3">
                      <Heart className="w-5 h-5 text-green-500" />
                      <h3 className="text-green-500 font-medium">Ready to Create</h3>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Your custom blend is ready for creation! Our master perfumers will craft 
                      your unique fragrance and have it ready in 2-3 weeks.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className="px-6 py-3 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
              >
                ← Previous
              </button>
              
              {currentStep < 3 ? (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  disabled={currentStep === 1 && getSelectedNotesCount() === 0}
                  className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium rounded-lg hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue →
                </button>
              ) : (
                <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium rounded-lg hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105">
                  Place Order
                </button>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sticky top-24">
              <h3 className="text-white font-medium mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Custom Blend Service</span>
                  <span className="text-white">$150</span>
                </div>
                
                {Object.entries(selectedNotes).map(([noteId, amount]) => {
                  if (amount === 0) return null;
                  
                  const note = Object.values(noteCategories)
                    .flatMap(category => category.notes)
                    .find((n) => n.id === noteId);

                  if (!note) return null;

                  return (
                    <div key={noteId} className="flex justify-between text-sm">
                      <span className="text-gray-400">
                        {note.name} x{amount}
                      </span>
                      <span className="text-white">${note.price * amount}</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="border-t border-gray-700 pt-4">
                <div className="flex justify-between font-medium">
                  <span className="text-white">Total</span>
                  <span className="text-yellow-500 text-xl">${getTotalPrice()}</span>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <div className="text-gray-400 text-sm mb-2">
                  50ml Custom Blend
                </div>
                <div className="text-gray-400 text-xs">
                  Includes premium packaging & certificate
                </div>
              </div>
            </div>

            {/* Process Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-white font-medium mb-4">Creation Process</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xs">
                    1
                  </div>
                  <div>
                    <div className="text-white font-medium">Formulation</div>
                    <div className="text-gray-400">Master perfumer creates your blend</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xs">
                    2
                  </div>
                  <div>
                    <div className="text-white font-medium">Aging</div>
                    <div className="text-gray-400">30-day maturation process</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xs">
                    3
                  </div>
                  <div>
                    <div className="text-white font-medium">Bottling</div>
                    <div className="text-gray-400">Hand-bottled and labeled</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomBlendPage;