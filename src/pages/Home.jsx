import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

const Home = () => {
  // Snowfall confetti effect on page load
  useEffect(() => {
    const duration = 5 * 1000; 
    const animationEnd = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2, 
        startVelocity: 0, 
        ticks: 180,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ['#ffffff', '#e0f2fe', '#cffafe'], // Soft icy colors for a snowfall effect
        shapes: ['circle'],
        gravity: 0.3, // Speed at which confetti falls
        scalar: .9, // Size of confetti particles
        drift: Math.random() - 0.5
      });
      if (Date.now() < animationEnd) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  return (
    // The main container with a soft gradient background and a welcoming message
    <div className="min-h-screen -mt-8 -mx-4 md:-mx-8 bg-gradient-to-b from-cyan-100 via-blue-50 to-white">
      <div className="bg-gradient-to-br from-accent via-[#B2BEFF] to-secondary p-16 md:p-32 text-center rounded-b-3xl shadow-xl shadow-lavender/20">
        <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter mb-4">
          Project Snowfall
        </h1>
      
        <p className="text-xl md:text-2xl font-medium text-white/90 max-w-2xl mx-auto leading-relaxed">
          Your debt-free future starts today. Organize your balances, choose your strategy, and take the first confident step toward financial freedom.
        </p>
        <div className="mt-10">
          <Link 
            to="/dashboard" 
            className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform inline-block"
          >
            Begin Your Journey
          </Link>
        </div>
      </div>

      {/* Value Proposition of Project Snowfall */}
      <div className="container mx-auto mt-20 px-6 grid md:grid-cols-3 gap-8 text-center">
        <div className="p-4">
          <div className="text-primary text-3xl mb-2">🧘</div>
          <h4 className="font-bold text-slate-800">Stress-free planning</h4>
          <p className="text-sm text-slate-500">Take a breath and get organized.</p>
        </div>
        <div className="p-4">
          <div className="text-primary text-3xl mb-2">🤖</div>
          <h4 className="font-bold text-slate-800">Automatic Ordering</h4>
          <p className="text-sm text-slate-500">We sort the math for you.</p>
        </div>
        <div className="p-4">
          <div className="text-primary text-3xl mb-2">📈</div>
          <h4 className="font-bold text-slate-800">Visual Progress</h4>
          <p className="text-sm text-slate-500">Watch your debt melt away.</p>
        </div>
      </div>

      {/* How It Works -Step-by-Step Method */}
      <div className="container mx-auto mt-24 pb-24 px-6">
        <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">How it Works</h3>
        <div className="grid md:grid-cols-3 gap-12 relative">

          {/* Step 1: Stress-free Planning */}
          <div className="relative z-10 text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold shadow-lg">1</div>
            <h5 className="font-bold text-lg mb-2">List Your Debts</h5>
            <p className="text-slate-600 text-sm">Add your balances and rates to see the full picture.</p>
          </div>
          {/* Step 2: Choose Your Path */}
          <div className="relative z-10 text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold shadow-lg">2</div>
            <h5 className="font-bold text-lg mb-2">Choose Your Path</h5>
            <p className="text-slate-600 text-sm">Select Snowball for wins or Avalanche to save on interest.</p>
          </div>
          {/* Step 3: Visual Progress */}
          <div className="relative z-10 text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold shadow-lg">3</div>
            <h5 className="font-bold text-lg mb-2">Track Progress</h5>
            <p className="text-slate-600 text-sm">Log payments and watch your progress bars fill up.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;