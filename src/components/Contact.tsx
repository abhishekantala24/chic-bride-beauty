import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to book your beauty transformation? Contact us today to schedule your consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 beauty-shadow">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">
                Visit Our Salon
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-beauty-pink text-primary p-2 rounded-full">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Location</h4>
                    <p className="text-muted-foreground">123 Beauty Avenue<br />Downtown District, City 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-beauty-pink text-primary p-2 rounded-full">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Phone</h4>
                    <p className="text-muted-foreground">(555) 123-BEAUTY<br />(555) 123-2328</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-beauty-pink text-primary p-2 rounded-full">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Email</h4>
                    <p className="text-muted-foreground">hello@bellebeauty.com<br />bookings@bellebeauty.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-beauty-pink text-primary p-2 rounded-full">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Hours</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 8:00 AM - 8:00 PM</p>
                      <p>Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-primary mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <Instagram size={16} className="mr-2" />
                    Instagram
                  </Button>
                  <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <Facebook size={16} className="mr-2" />
                    Facebook
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 beauty-shadow">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">
              Book Your Appointment
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    First Name
                  </label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Your last name" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Email Address
                </label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Phone Number
                </label>
                <Input type="tel" placeholder="(555) 123-4567" />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Service Interested In
                </label>
                <Input placeholder="e.g., Bridal Package, Nail Art, Makeup" />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Preferred Date & Time
                </label>
                <Input placeholder="When would you like to visit?" />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Additional Information
                </label>
                <Textarea 
                  placeholder="Tell us about your event, any special requests, or questions..."
                  className="min-h-[100px]"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full beauty-gradient text-primary-foreground hover:opacity-90"
              >
                Send Booking Request
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-4 text-center">
              We'll get back to you within 24 hours to confirm your appointment
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;