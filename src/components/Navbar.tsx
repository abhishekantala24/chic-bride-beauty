import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border/50 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-serif font-bold text-primary">
            Belle Beauty
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-accent beauty-transition font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-accent beauty-transition font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-accent beauty-transition font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-accent beauty-transition font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-accent beauty-transition font-medium"
            >
              Contact
            </button>
            <Button variant="default" className="beauty-gradient text-primary-foreground hover:opacity-90">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-accent beauty-transition"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-accent beauty-transition font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-accent beauty-transition font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-left text-foreground hover:text-accent beauty-transition font-medium"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-accent beauty-transition font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-accent beauty-transition font-medium"
              >
                Contact
              </button>
              <Button variant="default" className="beauty-gradient text-primary-foreground hover:opacity-90 w-fit">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;