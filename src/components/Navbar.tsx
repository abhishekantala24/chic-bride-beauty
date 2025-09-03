import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Instagram, Facebook, Mail, Phone, MapPin, Clock, Star, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
 
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-pink-100 shadow-xl shadow-pink-500/10' 
        : 'bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 via-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/30 group-hover:shadow-pink-500/50 transition-all duration-300">
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-bounce shadow-sm"></div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent">
                Belle Beauty
              </div>
              <div className="text-xs text-gray-500 font-medium tracking-widest">BRIDAL SALON</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((item, index) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative text-gray-700 hover:text-pink-600 font-medium transition-all duration-300 group py-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-full transition-all duration-300"></div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </button>
            ))}
            <Button className="relative bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white px-6 py-2.5 rounded-full shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <span className="relative flex items-center space-x-2">
                <Heart className="w-4 h-4 animate-pulse" />
                <span>Book Now</span>
              </span>
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-110"
            >
              <div className={`transition-all duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mt-6 pb-6 border-t border-pink-100">
            <div className="flex flex-col space-y-4 pt-6">
              {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((item, index) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-gray-700 hover:text-pink-600 font-medium transition-all duration-300 transform hover:translate-x-2 py-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item}
                </button>
              ))}
              <Button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full shadow-lg shadow-pink-500/30 w-fit px-6 py-2.5 mt-4">
                <Heart className="w-4 h-4 mr-2 animate-pulse" />
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
