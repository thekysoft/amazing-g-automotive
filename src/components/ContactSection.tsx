
import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-automotive-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our services or want to schedule a consultation? 
            Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Name</label>
                  <Input type="text" placeholder="John Smith" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input type="tel" placeholder="(123) 456-7890" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Vehicle Information</label>
                <Input type="text" placeholder="Year, Make, Model" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Tell us about your project or ask a question..." className="min-h-[120px]" />
              </div>
              
              <Button type="submit" className="w-full bg-automotive-blue hover:bg-automotive-blue/90 text-white">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-automotive-blue mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Our Location</h4>
                  <p className="text-gray-600">
                    123 Automotive Drive<br />
                    Paintsville, CA 90210
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-automotive-blue mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-automotive-blue mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-600">info@autofinishpro.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-automotive-blue mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 3:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 bg-gray-200 h-64 rounded-lg relative overflow-hidden">
              {/* This would be a map in a real implementation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-600">Map Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
