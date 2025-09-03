import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Scissors, Sparkles } from "lucide-react";
import nailArtImage from "@/assets/nail-art-service.jpg";
import hairStylingImage from "@/assets/hair-styling-service.jpg";
import makeupImage from "@/assets/makeup-service.jpg";

const Services = () => {
  const services = [
    {
      title: "Nail Art & Manicure",
      description: "Exquisite nail designs with meticulous attention to detail. From classic French tips to intricate bridal nail art featuring our signature pink and black aesthetic.",
      features: ["Custom Nail Designs", "Gel & Acrylic Options", "Bridal Packages", "Nail Care & Spa"],
      image: nailArtImage,
      icon: Sparkles,
      price: "Starting from $45",
      gradient: "from-beauty-pink/20 to-beauty-pink-light/20"
    },
    {
      title: "Bridal Hair Styling",
      description: "Elegant hairstyles that perfectly complement your wedding dress. From romantic updos to flowing curls, we craft the ideal bridal look for your special day.",
      features: ["Bridal Updos", "Hair Extensions", "Trial Sessions", "Hair Accessories"],
      image: hairStylingImage,
      icon: Scissors,
      price: "Starting from $120",
      gradient: "from-beauty-gold/20 to-beauty-cream/20"
    },
    {
      title: "Makeup Artistry",
      description: "Professional makeup application that enhances your natural beauty. From natural glam to dramatic looks, creating photography-ready perfection for your wedding day.",
      features: ["Bridal Makeup", "Airbrush Technique", "Touch-up Kit", "Photography Ready"],
      image: makeupImage,
      icon: Palette,
      price: "Starting from $85",
      gradient: "from-accent/20 to-beauty-pink-soft/20"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 soft-gradient"></div>
      <div className="absolute top-20 left-10 w-64 h-64 beauty-gradient rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-beauty-gold/20 rounded-full opacity-30 blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 mb-6 animate-slide-in-right">
            <Sparkles className="w-4 h-4 text-accent animate-pulse-soft" />
            <span className="text-sm font-medium text-muted-foreground">Premium Services</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
            <span className="text-shimmer">Our Signature</span>
            <br />
            <span className="text-primary">Beauty Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Discover our luxurious beauty services meticulously designed to make you look and feel absolutely stunning on your most special day
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="service-card group" style={{animationDelay: `${index * 200}ms`}}>
              <div className="relative overflow-hidden rounded-t-2xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-72 object-cover beauty-transition group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} group-hover:opacity-70 beauty-transition`}></div>
                
                {/* Floating icon */}
                <div className="absolute top-6 left-6 glass-card p-4 rounded-2xl group-hover:scale-110 beauty-transition">
                  <service.icon size={28} className="text-accent" />
                </div>
                
                {/* Price badge */}
                <div className="absolute top-6 right-6 glass-card px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-accent">{service.price}</span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-accent beauty-transition">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-8">
                  <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 beauty-gradient rounded-full"></div>
                    Includes:
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-3 group/item">
                        <div className="w-2 h-2 bg-accent rounded-full group-hover/item:animate-pulse-soft"></div>
                        <span className="group-hover/item:text-foreground beauty-transition">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="luxury-button w-full justify-center">
                  Book This Service
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-8 text-lg">
            Ready to experience luxury beauty services?
          </p>
          <button className="luxury-button text-lg">
            View All Services & Packages
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;