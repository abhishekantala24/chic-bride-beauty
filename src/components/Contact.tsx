import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-br from-beauty-cream via-background to-beauty-pink-soft/20">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-56 h-56 beauty-gradient rounded-full opacity-10 blur-3xl floating-element"></div>
      <div className="absolute bottom-10 right-20 w-40 h-40 bg-beauty-gold/20 rounded-full opacity-25 blur-2xl floating-element" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 mb-6 animate-slide-in-right">
            <Mail className="w-4 h-4 text-accent animate-pulse-soft" />
            <span className="text-sm font-medium text-muted-foreground">Let's Connect</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
            <span className="text-shimmer">Get In</span>
            <br />
            <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Ready to book your beauty transformation? Contact us today to schedule your consultation and let's create magic together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
                <div className="w-3 h-3 beauty-gradient rounded-full animate-pulse-soft"></div>
                Visit Our Salon
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="glass-card p-4 rounded-2xl group-hover:scale-110 beauty-transition">
                    <MapPin size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary text-lg mb-2">Our Location</h4>
                    <p className="text-muted-foreground leading-relaxed">123 Beauty Avenue<br />Downtown District, City 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="glass-card p-4 rounded-2xl group-hover:scale-110 beauty-transition">
                    <Phone size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary text-lg mb-2">Call Us</h4>
                    <p className="text-muted-foreground leading-relaxed">(555) 123-BEAUTY<br />(555) 123-2328</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="glass-card p-4 rounded-2xl group-hover:scale-110 beauty-transition">
                    <Mail size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary text-lg mb-2">Email Us</h4>
                    <p className="text-muted-foreground leading-relaxed">hello@bellebeauty.com<br />bookings@bellebeauty.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="glass-card p-4 rounded-2xl group-hover:scale-110 beauty-transition">
                    <Clock size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary text-lg mb-2">Business Hours</h4>
                    <div className="text-muted-foreground space-y-2 leading-relaxed">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 8:00 AM - 8:00 PM</p>
                      <p>Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border/30">
                <h4 className="font-semibold text-primary text-lg mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 beauty-gradient rounded-full"></div>
                  Follow Our Journey
                </h4>
                <div className="flex space-x-4">
                  <button className="glass-card border-2 border-accent/20 text-accent hover:bg-accent/10 px-6 py-3 rounded-full beauty-transition hover:scale-105 flex items-center gap-2">
                    <Instagram size={18} />
                    Instagram
                  </button>
                  <button className="glass-card border-2 border-accent/20 text-accent hover:bg-accent/10 px-6 py-3 rounded-full beauty-transition hover:scale-105 flex items-center gap-2">
                    <Facebook size={18} />
                    Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="animate-slide-up">
            <div className="glass-card p-10 rounded-3xl">
              <h3 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
                <div className="w-3 h-3 beauty-gradient rounded-full animate-pulse-soft"></div>
                Book Your Appointment
              </h3>
              
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-3">
                      First Name
                    </label>
                    <input className="elegant-input w-full" placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-3">
                      Last Name
                    </label>
                    <input className="elegant-input w-full" placeholder="Your last name" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-3">
                    Email Address
                  </label>
                  <input type="email" className="elegant-input w-full" placeholder="your.email@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-3">
                    Phone Number
                  </label>
                  <input type="tel" className="elegant-input w-full" placeholder="(555) 123-4567" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-3">
                    Service Interested In
                  </label>
                  <input className="elegant-input w-full" placeholder="e.g., Bridal Package, Nail Art, Makeup" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-3">
                    Preferred Date & Time
                  </label>
                  <input className="elegant-input w-full" placeholder="When would you like to visit?" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-3">
                    Additional Information
                  </label>
                  <textarea 
                    placeholder="Tell us about your event, any special requests, or questions..."
                    className="elegant-input w-full min-h-[120px] resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="luxury-button w-full text-lg justify-center"
                >
                  Send Booking Request
                </button>
              </form>

              <div className="mt-8 p-6 glass-card rounded-2xl border border-accent/20">
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  ✨ We'll get back to you within 24 hours to confirm your appointment and discuss your beauty goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;