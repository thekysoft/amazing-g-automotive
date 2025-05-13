
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PaintBucket, CarFront, Paintbrush, Image, Check, Shield, Car } from 'lucide-react';

const services = [
  {
    icon: <PaintBucket className="h-12 w-12 text-automotive-orange" />,
    title: "Full Vehicle Repainting",
    description: "Whether you're looking to refresh your car's original color, opt for a bold new look, or restore a classic beauty to its former glory, our full vehicle repainting service guarantees a smooth, even, and durable finish.",
    features: ["Premium quality paints", "Perfect color match", "Durable finish"]
  },
  {
    icon: <Paintbrush className="h-12 w-12 text-automotive-red" />,
    title: "Custom Paint Jobs",
    description: "Unleash your individuality with our custom paint services. From eye-catching color combinations and unique finishes to intricate designs and graphics, our skilled painters can bring your wildest automotive dreams to life.",
    features: ["Metallic & pearlescent finishes", "Custom designs", "Unique color combinations"]
  },
  {
    icon: <Check className="h-12 w-12 text-automotive-gold" />,
    title: "Touch-Up & Spot Repairs",
    description: "Scratches, chips, and minor damage can detract from your vehicle's appearance. Our expert touch-up and spot repair services seamlessly blend the repaired areas with the existing paintwork.",
    features: ["Scratch removal", "Chip repairs", "Seamless blending"]
  },
  {
    icon: <CarFront className="h-12 w-12 text-automotive-silver" />,
    title: "Panel Painting",
    description: "Whether you've been in a minor accident or have a specific panel that needs painting due to damage or wear, we provide precise panel painting services to ensure a perfect match.",
    features: ["Perfect color matching", "Seamless integration", "Quality preparation"]
  },
  {
    icon: <Image className="h-12 w-12 text-automotive-orange" />,
    title: "Color Matching Expertise",
    description: "Achieving the perfect color match is crucial for any paint job. Our experienced technicians utilize advanced color matching technology and their keen eye to ensure seamless blending.",
    features: ["Advanced technology", "Factory color matching", "Custom shade matching"]
  },
  {
    icon: <Shield className="h-12 w-12 text-automotive-dark" />,
    title: "Clear Coat Application",
    description: "To enhance the longevity and shine of your paintwork, we apply high-quality clear coats that provide excellent protection against UV rays, environmental elements, and minor scratches.",
    features: ["UV protection", "Enhanced shine", "Long-lasting durability"]
  },
  {
    icon: <Car className="h-12 w-12 text-automotive-gold" />,
    title: "Polishing & Paint Correction",
    description: "Even the best paint jobs can benefit from professional polishing and paint correction. We offer services to remove swirl marks, imperfections, and oxidation, restoring your vehicle's paint to a mirror-like shine.",
    features: ["Swirl removal", "Scratch reduction", "Mirror finish"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
          <div className="w-20 h-1 bg-automotive-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Amazing G Automotive offers a comprehensive range of vehicle painting services designed to cater to all your needs, from minor touch-ups to complete transformations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="service-card border border-gray-200">
              <CardHeader className="text-center pt-8">
                <div className="mx-auto mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6">{service.description}</CardDescription>
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-automotive-orange rounded-full mr-2"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
