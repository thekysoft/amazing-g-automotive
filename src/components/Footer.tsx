
import React from 'react';
import { PaintBucket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-automotive-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PaintBucket className="h-8 w-8 text-automotive-orange" />
              <span className="text-xl font-bold">
                Amazing G <span className="text-automotive-orange">Automotive</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Premium automotive painting and refinishing services with a commitment to quality and customer satisfaction in Malaysia.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'youtube'].map(platform => (
                <a
                  key={platform}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-automotive-orange transition-colors"
                >
                  <span className="sr-only">{platform}</span>
                  {/* This would be replaced with actual social icons */}
                  <div className="w-5 h-5"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Services</h3>
            <ul className="space-y-2">
              {[
                'Full Vehicle Repainting',
                'Custom Paint Jobs',
                'Touch-Up & Spot Repairs',
                'Panel Painting',
                'Color Matching Expertise',
                'Clear Coat Application',
                'Polishing & Paint Correction'
              ].map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-automotive-orange transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {[
                'Home',
                'About Us',
                'Services',
                'Portfolio',
                'Contact',
                'Get a Quote'
              ].map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-automotive-orange transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Amazing G Automotive. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-automotive-orange transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-automotive-orange transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
