
import React from 'react';

const galleryItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    title: "Custom Metallic Red",
    description: "Full exterior repaint with premium metallic finish"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Classic Car Restoration",
    description: "Period-correct paint job on a vintage vehicle"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    title: "Candy Orange Custom",
    description: "Custom candy orange with clear coat protection"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Matte Black Finish",
    description: "Complete matte black wrap with accent details"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    title: "Pearl White Conversion",
    description: "Color change with premium pearl white finish"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Racing Stripes",
    description: "Custom racing stripes and performance accents"
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
