import { useState } from "react";
import { Button } from "@/components/ui/button";
import galleryNails1 from "@/assets/gallery-nails-1.jpg";
import galleryNails2 from "@/assets/gallery-nails-2.jpg";
import galleryHair1 from "@/assets/gallery-hair-1.jpg";
import galleryMakeup1 from "@/assets/gallery-makeup-1.jpg";
import nailArtService from "@/assets/nail-art-service.jpg";
import hairStylingService from "@/assets/hair-styling-service.jpg";
import makeupService from "@/assets/makeup-service.jpg";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    { category: 'nails', image: galleryNails1, title: 'Elegant Pink Floral Nails', description: 'Delicate rose patterns with gold accents' },
    { category: 'hair', image: galleryHair1, title: 'Bridal Updo with Accessories', description: 'Classic elegance with pearl details' },
    { category: 'makeup', image: galleryMakeup1, title: 'Natural Bridal Makeup', description: 'Glowing skin with soft pink tones' },
    { category: 'nails', image: galleryNails2, title: 'Geometric Pink & Black Design', description: 'Modern art meets classic elegance' },
    { category: 'nails', image: nailArtService, title: 'Professional Nail Art', description: 'Intricate detailing and perfect finish' },
    { category: 'hair', image: hairStylingService, title: 'Wedding Hair Styling', description: 'Romantic waves with floral touches' },
    { category: 'makeup', image: makeupService, title: 'Glamorous Makeup Look', description: 'Bold eyes with natural glow' }
  ];

  const filters = [
    { id: 'all', label: 'All Work', icon: '✨' },
    { id: 'nails', label: 'Nail Art', icon: '💅' },
    { id: 'hair', label: 'Hair Styling', icon: '💇‍♀️' },
    { id: 'makeup', label: 'Makeup', icon: '💄' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-gradient-to-br from-background via-beauty-pink-soft/10 to-beauty-cream/30">
      {/* Background decorations */}
      <div className="absolute top-10 right-20 w-40 h-40 beauty-gradient rounded-full opacity-15 blur-3xl floating-element"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-beauty-gold/20 rounded-full opacity-25 blur-2xl floating-element" style={{animationDelay: '3s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 mb-6 animate-slide-in-right">
            <div className="w-3 h-3 beauty-gradient rounded-full animate-pulse-soft"></div>
            <span className="text-sm font-medium text-muted-foreground">Portfolio Showcase</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
            <span className="text-shimmer">Our Beautiful</span>
            <br />
            <span className="text-primary">Transformations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up">
            Browse through our curated portfolio of stunning beauty transformations and get inspired for your special day
          </p>

          {/* Enhanced Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter, index) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`group relative px-8 py-4 rounded-full font-medium beauty-transition ${
                  activeFilter === filter.id 
                    ? "luxury-button" 
                    : "glass-card border-2 border-accent/20 text-accent hover:border-accent/40 hover:bg-accent/10"
                }`}
                style={{animationDelay: `${index * 100}ms`}}
              >
                <span className="flex items-center gap-3">
                  <span className="text-lg">{filter.icon}</span>
                  {filter.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <div
              key={`${item.category}-${index}`}
              className="gallery-item group"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-80 object-cover beauty-transition group-hover:scale-110"
                />
                
                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 beauty-transition flex flex-col justify-end">
                  <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 beauty-transition">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 beauty-gradient rounded-full"></div>
                      <span className="text-sm opacity-90 capitalize font-medium">{item.category} Service</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-accent capitalize">{item.category}</span>
                </div>

                {/* Heart icon */}
                <div className="absolute top-4 right-4 glass-card p-2 rounded-full opacity-0 group-hover:opacity-100 beauty-transition hover:scale-110 cursor-pointer">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center glass-card p-8 rounded-3xl">
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to create your own stunning transformation?
          </p>
          <button className="luxury-button text-lg">
            Schedule Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;