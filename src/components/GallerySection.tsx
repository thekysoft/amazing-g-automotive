
import React from 'react';

const galleryItems = [
  {
    id: 1,
    type: 'image',
    media: "/lovable-uploads/e1198361-93ce-4f02-9e89-328fab4d317d.png",
    title: "Custom White Volkswagen",
    description: "Full exterior refinishing with premium white paint"
  },
  {
    id: 2,
    type: 'image',
    media: "/lovable-uploads/ef2be529-f84f-4241-8075-2262975d6f2e.png",
    title: "BMW Performance White",
    description: "Luxury white paint job with high-gloss finish"
  },
  {
    id: 3,
    type: 'video',
    media: "/lovable-uploads/VIDEO_PLACEHOLDER.mp4", // Replace with actual video after upload
    thumbnail: "/lovable-uploads/e1198361-93ce-4f02-9e89-328fab4d317d.png", // Thumbnail to show before video loads
    title: "Paint Restoration Process",
    description: "Watch our expert team restore a classic car's paint"
  },
  {
    id: 4,
    type: 'image',
    media: "/lovable-uploads/ef2be529-f84f-4241-8075-2262975d6f2e.png",
    title: "BMW Interior Detailing",
    description: "Comprehensive painting and detailing package"
  },
  {
    id: 5,
    type: 'video',
    media: "/lovable-uploads/VIDEO_PLACEHOLDER.mp4", // Replace with actual video after upload
    thumbnail: "/lovable-uploads/e1198361-93ce-4f02-9e89-328fab4d317d.png", // Thumbnail to show before video loads
    title: "Spray Painting Technique",
    description: "Professional spray painting process in action"
  },
  {
    id: 6,
    type: 'image',
    media: "/lovable-uploads/ef2be529-f84f-4241-8075-2262975d6f2e.png",
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
              {item.type === 'image' ? (
                <img 
                  src={item.media} 
                  alt={item.title} 
                  className="w-full h-64 object-cover"
                />
              ) : (
                <div className="relative">
                  <video 
                    src={item.media}
                    poster={item.thumbnail}
                    className="w-full h-64 object-cover" 
                    controls
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-automotive-orange/80 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
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
