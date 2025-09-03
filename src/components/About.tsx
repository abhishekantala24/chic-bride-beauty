import { Card } from "@/components/ui/card";
import { Award, Heart, Users, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Certified Professionals",
      description: "Our team consists of licensed and certified beauty professionals with years of specialized experience in bridal beauty.",
      gradient: "from-beauty-pink/20 to-beauty-pink-light/20"
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Every service is meticulously tailored to your unique style, preferences, and skin tone for the absolutely perfect look.",
      gradient: "from-beauty-gold/20 to-beauty-cream/20"
    },
    {
      icon: Users,
      title: "Bridal Specialists",
      description: "We exclusively specialize in bridal beauty, deeply understanding the profound importance and magic of your special day.",
      gradient: "from-accent/20 to-beauty-pink-soft/20"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "We accommodate your busy schedule with early morning, evening, and weekend appointments to fit your timeline perfectly.",
      gradient: "from-beauty-pink-light/20 to-beauty-cream/20"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-br from-beauty-pink-soft/10 via-background to-beauty-cream/20">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-64 h-64 beauty-gradient rounded-full opacity-10 blur-3xl floating-element"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-beauty-gold/20 rounded-full opacity-25 blur-2xl floating-element" style={{animationDelay: '3s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="animate-slide-in-right">
            <div className="inline-flex items-center gap-2 glass-card px-6 py-3 mb-6">
              <Heart className="w-4 h-4 text-accent animate-pulse-soft" />
              <span className="text-sm font-medium text-muted-foreground">Our Story</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8">
              <span className="text-shimmer">About Belle</span>
              <br />
              <span className="text-primary">Beauty Salon</span>
            </h2>
            
            <div className="space-y-8 text-muted-foreground">
              <p className="text-xl leading-relaxed">
                At Belle Beauty, we believe every woman deserves to feel absolutely <span className="text-accent font-semibold">radiant and confident</span> on her most special day. 
                Founded with an unwavering passion for enhancing natural beauty, our salon specializes in creating stunning 
                bridal looks that reflect your unique personality and individual style.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our signature <span className="text-accent font-semibold">baby pink and elegant black</span> aesthetic creates a luxurious, 
                sophisticated atmosphere where you can completely relax and undergo your beautiful transformation. From intricate nail art to breathtaking hairstyles and flawless makeup, 
                we provide comprehensive beauty services that ensure you look and feel your absolute best.
              </p>
              
              <p className="text-lg leading-relaxed">
                With over <span className="text-accent font-semibold">5 years of dedicated experience</span> and <span className="text-accent font-semibold">500+ satisfied brides</span>, we've truly mastered the art of bridal beauty. 
                Our expert team stays current with the latest trends and cutting-edge techniques while maintaining timeless elegance 
                that photographs beautifully and lasts throughout your entire celebration.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="glass-card p-6 rounded-2xl text-center group hover:scale-105 beauty-transition">
                <div className="text-4xl font-bold text-shimmer mb-3 group-hover:animate-bounce-soft">500+</div>
                <div className="text-muted-foreground font-medium">Happy Clients</div>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center group hover:scale-105 beauty-transition">
                <div className="text-4xl font-bold text-shimmer mb-3 group-hover:animate-bounce-soft">5+</div>
                <div className="text-muted-foreground font-medium">Years of Excellence</div>
              </div>
            </div>

            <div className="mt-12">
              <button className="luxury-button text-lg">
                Learn More About Our Services
              </button>
            </div>
          </div>

          <div className="space-y-8 animate-slide-up">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="glass-card p-8 rounded-3xl group hover:scale-[1.02] beauty-transition relative overflow-hidden"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 beauty-transition`}></div>
                
                <div className="relative flex items-start space-x-6">
                  <div className="glass-card p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 beauty-transition">
                    <feature.icon size={28} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-accent beauty-transition">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground beauty-transition">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;