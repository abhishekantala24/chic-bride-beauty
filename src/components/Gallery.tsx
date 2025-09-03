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
    { category: 'nails', image: galleryNails1, title: 'Elegant Pink Floral Nails' },
    { category: 'hair', image: galleryHair1, title: 'Bridal Updo with Accessories' },
    { category: 'makeup', image: galleryMakeup1, title: 'Natural Bridal Makeup' },
    { category: 'nails', image: galleryNails2, title: 'Geometric Pink & Black Design' },
    { category: 'nails', image: nailArtService, title: 'Professional Nail Art' },
    { category: 'hair', image: hairStylingService, title: 'Wedding Hair Styling' },
    { category: 'makeup', image: makeupService, title: 'Glamorous Makeup Look' }
  ];

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'nails', label: 'Nail Art' },
    { id: 'hair', label: 'Hair Styling' },
    { id: 'makeup', label: 'Makeup' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Our Beautiful Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Browse through our portfolio of stunning transformations and get inspired for your special day
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={activeFilter === filter.id 
                  ? "beauty-gradient text-primary-foreground" 
                  : "border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                }
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={`${item.category}-${index}`}
              className="gallery-item group relative"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-80 object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 beauty-transition flex items-end">
                <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 beauty-transition">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90 capitalize">{item.category} Service</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to create your own beautiful transformation?
          </p>
          <Button size="lg" className="beauty-gradient text-primary-foreground hover:opacity-90">
            Schedule Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;