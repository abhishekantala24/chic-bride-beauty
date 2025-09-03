import { Heart, Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-serif font-bold mb-4">Belle Beauty</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Your trusted beauty salon specializing in bridal services. We create stunning transformations 
              that make your special day unforgettable with our signature pink and black elegance.
            </p>
            <div className="flex space-x-4">
              <div className="bg-beauty-pink text-primary p-2 rounded-full hover:scale-110 beauty-transition cursor-pointer">
                <Instagram size={20} />
              </div>
              <div className="bg-beauty-pink text-primary p-2 rounded-full hover:scale-110 beauty-transition cursor-pointer">
                <Facebook size={20} />
              </div>
              <div className="bg-beauty-pink text-primary p-2 rounded-full hover:scale-110 beauty-transition cursor-pointer">
                <Mail size={20} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground beauty-transition">Home</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground beauty-transition">Services</a></li>
              <li><a href="#gallery" className="text-primary-foreground/80 hover:text-primary-foreground beauty-transition">Gallery</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground beauty-transition">About</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground beauty-transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span className="text-primary-foreground/80">(555) 123-BEAUTY</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span className="text-primary-foreground/80">hello@bellebeauty.com</span>
              </div>
              <div className="text-primary-foreground/80">
                <p>123 Beauty Avenue</p>
                <p>Downtown District, City 12345</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-beauty-pink fill-current" /> for beautiful brides
          </p>
          <p className="text-primary-foreground/60 mt-2">
            © 2024 Belle Beauty Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;