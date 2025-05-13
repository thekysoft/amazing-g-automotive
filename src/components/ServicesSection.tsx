
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, CarFront, PaintBucket, Paintbrush } from 'lucide-react';

const services = [
  {
    icon: <PaintBucket className="h-12 w-12 text-automotive-blue" />,
    title: "Full Car Repainting",
    description: "Complete exterior repainting with premium automotive paints for a factory-fresh finish and lasting protection.",
    features: ["Premium paint options", "Color matching", "UV protection coating"]
  },
  {
    icon: <Paintbrush className="h-12 w-12 text-automotive-red" />,
    title: "Custom Paint Jobs",
    description: "Express your style with our custom paint services including metallic finishes, two-tone designs, and more.",
    features: ["Custom designs", "Metallic & pearl finishes", "Hand-painted details"]
  },
  {
    icon: <CarFront className="h-12 w-12 text-automotive-gold" />,
    title: "Scratch & Dent Repair",
    description: "Professional repair of scratches, dents and paint damage with precise color matching and seamless blending.",
    features: ["Spot repairs", "Bumper repainting", "Scratch removal"]
  },
  {
    icon: <Car className="h-12 w-12 text-automotive-silver" />,
    title: "Restoration Work",
    description: "Bring classic cars back to their original glory with our meticulous restoration painting and detailing.",
    features: ["Period-correct paints", "Full restoration", "Show car quality"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
          <div className="w-20 h-1 bg-automotive-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive automotive painting services using the highest quality materials and techniques
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                      <span className="w-1.5 h-1.5 bg-automotive-blue rounded-full mr-2"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4 pb-8 flex justify-center">
                <Button className="bg-automotive-blue hover:bg-automotive-blue/90 text-white">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
