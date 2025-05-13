
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-automotive-dark">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151')] bg-center bg-cover"></div>
      
      <div className="container relative z-20 mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
          Malaysian Premium Car Painting & Refinishing
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in">
          At Amazing G Automotive, we don't just paint cars; we breathe new life into them
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
          <Button 
            className="bg-automotive-orange hover:bg-automotive-orange/90 text-white px-8 py-6 text-lg"
          >
            Get a Free Quote
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
            onClick={scrollToServices}
          >
            Our Services
          </Button>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToServices} className="text-white p-2 rounded-full border border-white/30">
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
