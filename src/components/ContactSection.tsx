
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const ContactSection = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  
  // Location coordinates for Shah Alam, Selangor
  const longitude = 101.5259;
  const latitude = 3.0738;

  useEffect(() => {
    if (!mapContainer.current) return;
    if (!mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 14
    });

    // Add marker for our location
    const marker = new mapboxgl.Marker({ color: '#ff6b00' })
      .setLngLat([longitude, latitude])
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-automotive-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our services or want to schedule a consultation? 
            Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-automotive-orange mr-4 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Our Location</h4>
                <p className="text-gray-600">
                  60, Jalan Bateri 34/5, Sek 34,<br />
                  4000 Shah Alam, Selangor.<br />
                  Malaysia
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-automotive-orange mr-4 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-600">+60148850980</p>
                <p className="text-gray-600">+60112481885</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-automotive-orange mr-4 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-gray-600">hi@agauto.com.my</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="h-6 w-6 text-automotive-orange mr-4 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Business Hours</h4>
                <p className="text-gray-600">
                  Monday - Saturday: 9:00 AM - 5:30 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 rounded-lg overflow-hidden relative h-64 bg-gray-200">
            {!mapboxToken && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10">
                <p className="text-gray-600 mb-2">Please enter your Mapbox public token to display the map</p>
                <input 
                  type="text" 
                  placeholder="Enter your Mapbox public token"
                  className="px-4 py-2 border rounded w-full max-w-md"
                  onChange={(e) => setMapboxToken(e.target.value)}
                />
                <p className="text-xs text-gray-500 mt-2">
                  Get your token at <a href="https://www.mapbox.com" target="_blank" rel="noopener noreferrer" className="text-automotive-orange">mapbox.com</a>
                </p>
              </div>
            )}
            <div ref={mapContainer} className="w-full h-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
