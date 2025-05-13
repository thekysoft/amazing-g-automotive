
import React from 'react';

const galleryItems = [
  {
    id: 1,
    image: "/lovable-uploads/e1198361-93ce-4f02-9e89-328fab4d317d.png",
    title: "Custom White Volkswagen",
    description: "Full exterior refinishing with premium white paint"
  },
  {
    id: 2,
    image: "/lovable-uploads/ef2be529-f84f-4241-8075-2262975d6f2e.png",
    title: "BMW Performance White",
    description: "Luxury white paint job with high-gloss finish"
  },
  {
    id: 3,
    image: "/lovable-uploads/e1198361-93ce-4f02-9e89-328fab4d317d.png",
    title: "Premium VW Restoration",
    description: "Custom refinishing with protective clear coat"
  },
  {
    id: 4,
    image: "/lovable-uploads/ef2be529-f84f-4241-8075-2262975d6f2e.png",
    title: "BMW Interior Detailing",
    description: "Comprehensive painting and detailing package"
  },
  {
    id: 5,
    image: "/lovable-uploads/e1198361-93ce-4f02-9e89-328fab4d317d.png",
    title: "Volkswagen Factory Finish",
    description: "Original factory color match with premium quality"
  },
  {
    id: 6,
    image: "/lovable-uploads/ef2be529-f84f-4241-8075-2262975d6f2e.png",
    title: "BMW Sport Package",
    description: "Performance finish with custom detailing"
  }
];

const GallerySection = () => {
  return (
    <section id="portfolio" className="py-24 bg-automotive-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Portfolio</h2>
          <div className="w-20 h-1 bg-automotive-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            While we believe our words speak volumes about our commitment, our portfolio truly showcases the artistry and skill that define Amazing G Automotive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item rounded-lg overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover"
              />
              <div className="gallery-caption">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
