import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Instagram, Facebook, Mail, Phone, MapPin, Clock, Star, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
 
const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-rose-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 via-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-xl shadow-pink-500/30">
                  <Sparkles className="w-6 h-6 text-white animate-spin" style={{ animationDuration: '3s' }} />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-bounce"></div>
              </div>
              <div>
                <h3 className="text-3xl font-serif font-bold bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
                  Belle Beauty
                </h3>
                <div className="flex items-center space-x-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                  ))}
                  <span className="text-sm text-gray-400 ml-2">5.0 Rating</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Your trusted beauty destination specializing in bridal transformations. We create stunning looks 
              that make your special moments unforgettable with our signature elegance and professional expertise.
            </p>
            
            <div className="flex space-x-4">
              {[
                { icon: Instagram, color: 'from-pink-500 to-purple-600', delay: '0ms' },
                { icon: Facebook, color: 'from-blue-500 to-blue-600', delay: '100ms' },
                { icon: Mail, color: 'from-green-500 to-emerald-600', delay: '200ms' }
              ].map(({ icon: Icon, color, delay }, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-r ${color} p-3 rounded-full shadow-lg hover:scale-110 transform transition-all duration-300 cursor-pointer hover:shadow-xl`}
                  style={{ animationDelay: delay }}
                >
                  <Icon size={20} className="text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-pink-500 to-rose-600 rounded mr-3"></div>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((item, index) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-300 hover:text-pink-400 transition-all duration-300 flex items-center space-x-2 group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="w-2 h-2 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <span className="group-hover:translate-x-1 transition-all duration-300">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 p-4 rounded-lg border border-pink-500/20">
              <p className="text-sm text-pink-300 font-medium">Special Offer</p>
              <p className="text-xs text-gray-400 mt-1">20% off on bridal packages this month!</p>
            </div>
          </div>

          {/* Enhanced Contact Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-pink-500 to-rose-600 rounded mr-3"></div>
                Get in Touch
              </h4>
              <div className="space-y-4">
                {[
                  { icon: Phone, text: "(555) 123-BEAUTY", subtext: "Call anytime" },
                  { icon: Mail, text: "hello@bellebeauty.com", subtext: "Quick response" },
                  { icon: MapPin, text: "123 Beauty Avenue", subtext: "Downtown District, City 12345" }
                ].map(({ icon: Icon, text, subtext }, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-2 rounded-lg shadow-md group-hover:shadow-pink-500/30 transition-all duration-300">
                      <Icon size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-200 font-medium">{text}</p>
                      <p className="text-gray-400 text-sm">{subtext}</p>
                    </div>
                  </div>
                ))}
                
                <div className="flex items-start space-x-3 pt-2">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg shadow-md">
                    <Clock size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium">Business Hours</p>
                    <p className="text-gray-400 text-sm">Mon-Sat: 9AM-7PM</p>
                    <p className="text-gray-400 text-sm">Sunday: 10AM-5PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 flex items-center space-x-2">
              <span>Made with</span>
              <Heart size={16} className="text-pink-500 fill-current animate-pulse" />
              <span>for beautiful brides</span>
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Online</span>
              </div>
              <p className="text-gray-400 text-sm">© 2024 Belle Beauty Salon. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
