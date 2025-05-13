
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { PaintBucket } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <PaintBucket className={`h-8 w-8 ${scrolled ? 'text-automotive-orange' : 'text-white'}`} />
          <span className={`text-xl font-bold ${scrolled ? 'text-automotive-dark' : 'text-white'}`}>
            Amazing G <span className="text-automotive-orange">Automotive</span>
          </span>
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium hover:text-automotive-orange transition-colors ${
                    scrolled ? 'text-automotive-dark' : 'text-white'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button 
          className="hidden md:flex bg-automotive-orange hover:bg-automotive-orange/90 text-white"
        >
          Get a Quote
        </Button>

        <button className="md:hidden text-2xl">
          <span className={scrolled ? 'text-automotive-dark' : 'text-white'}>☰</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
