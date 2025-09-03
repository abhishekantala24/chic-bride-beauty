import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beauty-salon.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-beauty-cream via-beauty-pink-soft to-beauty-pink-light/30">
      {/* Floating decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 beauty-gradient rounded-full opacity-20 blur-3xl floating-element"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-beauty-gold/30 rounded-full opacity-40 blur-2xl floating-element" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent/20 rounded-full opacity-30 blur-xl floating-element" style={{animationDelay: '4s'}}></div>

      {/* Background Image with advanced overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 mb-8 animate-slide-in-right">
            <div className="w-3 h-3 beauty-gradient rounded-full animate-pulse-soft"></div>
            <span className="text-sm font-medium text-muted-foreground">Premium Bridal Beauty Services</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 animate-fade-in">
            <span className="text-shimmer block leading-none">Bridal Beauty</span>
            <span className="text-primary block leading-none">Perfected</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl animate-slide-up leading-relaxed">
            Transform your special day with our luxurious bridal services. From elegant nail art to stunning makeup and hair styling, 
            we create unforgettable beauty experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-slide-up mb-12">
            <button className="luxury-button text-lg">
              Book Your Session
            </button>
            <button className="glass-card border-2 border-accent/30 text-accent hover:text-accent-foreground px-8 py-4 rounded-full beauty-transition hover:scale-105 hover:bg-accent/10 text-lg font-medium">
              View Gallery
            </button>
          </div>

          {/* Enhanced stats */}
          <div className="grid grid-cols-3 gap-8 animate-fade-in">
            <div className="text-center glass-card p-6 rounded-2xl group hover:scale-105 beauty-transition">
              <div className="text-4xl font-bold text-shimmer mb-2 group-hover:animate-bounce-soft">500+</div>
              <div className="text-muted-foreground font-medium">Happy Brides</div>
            </div>
            <div className="text-center glass-card p-6 rounded-2xl group hover:scale-105 beauty-transition">
              <div className="text-4xl font-bold text-shimmer mb-2 group-hover:animate-bounce-soft">5+</div>
              <div className="text-muted-foreground font-medium">Years Experience</div>
            </div>
            <div className="text-center glass-card p-6 rounded-2xl group hover:scale-105 beauty-transition">
              <div className="text-4xl font-bold text-shimmer mb-2 group-hover:animate-bounce-soft">100%</div>
              <div className="text-muted-foreground font-medium">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-soft">
        <div className="w-1 h-8 beauty-gradient rounded-full opacity-60"></div>
      </div>
    </section>
  );
};

export default Hero;