
const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow-500 animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-yellow-400 animate-spin animation-delay-150"></div>
            <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-yellow-300 animate-spin animation-delay-300"></div>
            
            
          </div>
        </div>
        <h1 className="text-4xl font-light text-yellow-500 mb-4 animate-pulse">ÉLÉGANCE</h1>
        <p className="text-gray-400 text-lg animate-fade-in">Crafting timeless fragrances...</p>
        <div className="mt-8 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce animation-delay-100"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce animation-delay-200"></div>
          
        </div>
      </div>
      <style>{`
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-150 {
          animation-delay: 0.15s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animate-fade-in {
          animation: fadeIn 2s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Loading