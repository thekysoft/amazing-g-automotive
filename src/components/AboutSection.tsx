
import React from 'react';
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Amazing G Automotive</h2>
            <div className="w-20 h-1 bg-automotive-orange mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              At Amazing G Automotive, we don't just paint cars; we breathe new life into them. As a proudly local Malaysian vehicle paint shop, we are driven by a deep passion for automotive aesthetics and an unwavering commitment to delivering top-tier workmanship that exceeds expectations.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              For us, every vehicle that enters our workshop is an opportunity to showcase our expertise and transform it into a masterpiece on wheels.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              We understand that your vehicle is more than just a mode of transport – it's an extension of your personality, a reflection of your style, and a significant investment. That's why at Amazing G Automotive, we treat every project with meticulous attention to detail, using only premium quality paints and materials, and employing skilled technicians who are true artisans in their craft.
            </p>
            
            <Button className="bg-automotive-orange hover:bg-automotive-orange/90 text-white px-8 py-6 text-lg">
              Meet Our Team
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-gray-200 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="text-4xl font-bold text-automotive-orange">15+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-gray-200 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="text-4xl font-bold text-automotive-orange">5,000+</h3>
                <p className="text-gray-600">Cars Painted</p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="bg-gray-200 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="text-4xl font-bold text-automotive-orange">100%</h3>
                <p className="text-gray-600">Satisfaction</p>
              </div>
              <div className="bg-gray-200 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="text-4xl font-bold text-automotive-orange">10</h3>
                <p className="text-gray-600">Expert Painters</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-12">What Our Customers Say</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div 
                key={item} 
                className="bg-gray-50 p-8 rounded-lg border border-gray-200 relative"
              >
                <div className="text-4xl text-automotive-orange absolute -top-5 left-8">"</div>
                <p className="text-gray-700 mb-6 pt-4">
                  Amazing G Automotive completely transformed my car! The attention to detail and the quality of work is exceptional. My car looks better than when it was new.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">John Smith</h4>
                    <p className="text-sm text-gray-500">Satisfied Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
