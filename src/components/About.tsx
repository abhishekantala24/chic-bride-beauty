import { Card } from "@/components/ui/card";
import { Award, Heart, Users, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Certified Professionals",
      description: "Our team consists of licensed and certified beauty professionals with years of experience."
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Every service is tailored to your unique style, preferences, and skin tone for the perfect look."
    },
    {
      icon: Users,
      title: "Bridal Specialists",
      description: "We specialize in bridal beauty, understanding the importance of your special day."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "We work around your busy schedule with early morning and weekend appointments available."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              About Belle Beauty
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                At Belle Beauty, we believe every woman deserves to feel absolutely radiant on her special day. 
                Founded with a passion for enhancing natural beauty, our salon specializes in creating stunning 
                bridal looks that reflect your unique personality and style.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our signature baby pink and black aesthetic creates an elegant, luxurious atmosphere where you 
                can relax and transform. From intricate nail art to breathtaking hairstyles and flawless makeup, 
                we provide comprehensive beauty services that ensure you look and feel your absolute best.
              </p>
              
              <p className="text-lg leading-relaxed">
                With over 5 years of experience and 500+ satisfied brides, we've mastered the art of bridal beauty. 
                Our team stays current with the latest trends and techniques while maintaining timeless elegance 
                that photographs beautifully and lasts throughout your celebration.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 beauty-shadow hover:beauty-shadow beauty-transition hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="bg-beauty-pink text-primary p-3 rounded-full flex-shrink-0">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;