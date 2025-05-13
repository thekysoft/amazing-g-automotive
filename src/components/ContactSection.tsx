
import React from 'react';
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
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
                <a href="tel:+60148850980" className="text-gray-600 hover:text-automotive-orange transition-colors block">
                  +6014 885 0980
                </a>
                <a href="tel:+60102481885" className="text-gray-600 hover:text-automotive-orange transition-colors block mt-1">
                  +6010 248 1885
                </a>
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
