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
      description: "Exquisite nail designs with attention to detail. From classic French tips to intricate bridal nail art with pink and black themes.",
      features: ["Custom Nail Designs", "Gel & Acrylic Options", "Bridal Packages", "Nail Care & Spa"],
      image: nailArtImage,
      icon: Sparkles,
      price: "Starting from $45"
    },
    {
      title: "Bridal Hair Styling",
      description: "Elegant hairstyles that complement your wedding dress. From romantic updos to flowing curls, we create the perfect bridal look.",
      features: ["Bridal Updos", "Hair Extensions", "Trial Sessions", "Hair Accessories"],
      image: hairStylingImage,
      icon: Scissors,
      price: "Starting from $120"
    },
    {
      title: "Makeup Artistry",
      description: "Professional makeup application for your special day. Natural glam to dramatic looks, enhancing your natural beauty.",
      features: ["Bridal Makeup", "Airbrush Technique", "Touch-up Kit", "Photography Ready"],
      image: makeupImage,
      icon: Palette,
      price: "Starting from $85"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our luxurious beauty services designed to make you look and feel stunning on your special day
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card group">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover beauty-transition group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-beauty-pink/90 text-primary p-3 rounded-full">
                    <service.icon size={24} />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-2">Includes:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-accent">
                    {service.price}
                  </span>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    Book Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="beauty-gradient text-primary-foreground hover:opacity-90">
            View All Services & Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;