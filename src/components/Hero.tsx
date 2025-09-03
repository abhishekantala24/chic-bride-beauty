import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beauty-salon.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 animate-fade-in">
            Bridal Beauty
            <span className="block text-accent">Perfected</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
            Transform your special day with our luxurious bridal services. From elegant nail art to stunning makeup and hair styling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Button 
              size="lg" 
              className="beauty-gradient text-primary-foreground hover:opacity-90 text-lg px-8 py-6"
            >
              Book Your Session
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6"
            >
              View Gallery
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Happy Brides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 beauty-gradient rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-accent/30 rounded-full opacity-40 blur-xl"></div>
    </section>
  );
};

export default Hero;