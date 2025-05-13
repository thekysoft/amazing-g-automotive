
import React from 'react';
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About AutoFinish Pro</h2>
            <div className="w-20 h-1 bg-automotive-blue mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              With over 15 years of experience in automotive painting and refinishing, 
              AutoFinish Pro has established itself as the premier destination for 
              quality car painting services.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              Our team of certified professionals uses only the highest quality materials 
              and state-of-the-art techniques to deliver exceptional results that exceed 
              our customers' expectations.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              From minor touch-ups to complete custom paint jobs, we approach every project 
              with the same level of dedication and attention to detail.
            </p>
            
            <Button className="bg-automotive-blue hover:bg-automotive-blue/90 text-white px-8 py-6 text-lg">
              Meet Our Team
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-gray-200 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="text-4xl font-bold text-automotive-blue">15+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-gray-200 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="text-4xl font-bold text-automotive-blue">5,000+</h3>
                <p className="text-gray-600">Cars Painted</p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="bg-gray-200 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="text-4xl font-bold text-automotive-blue">100%</h3>
                <p className="text-gray-600">Satisfaction</p>
              </div>
              <div className="bg-gray-200 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="text-4xl font-bold text-automotive-blue">10</h3>
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
                <div className="text-4xl text-automotive-blue absolute -top-5 left-8">"</div>
                <p className="text-gray-700 mb-6 pt-4">
                  Absolutely amazing work! The team at AutoFinish Pro transformed my car 
                  with their incredible attention to detail and craftsmanship. The paint job 
                  looks better than factory finish.
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
