
import React from 'react';

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
      </div>
    </section>
  );
};

export default AboutSection;
