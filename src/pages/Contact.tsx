import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {

   const location = useLocation();
const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
});

useEffect(() => {
  // Check if data came from Home page
  if (location.state) {
    const { fullName, email, phone, company } = location.state;
    const nameParts = fullName ? fullName.split(" ") : [];
    setFormData((prev) => ({
      ...prev,
      firstName: nameParts[0] || "",
      lastName: nameParts.slice(1).join(" ") || "",
      email: email || "",
      phone: phone || "",
      company: company || "",
    }));
  }
}, [location.state]);

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({ ...formData, [e.target.id]: e.target.value });
};

  const contactSection = useScrollAnimation();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@bmrgrowth.com",
      link: "mailto:hello@bmrgrowth.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Monday - Friday: 9:00 AM - 6:00 PM",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Contact BMRGrowth:{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Strategic Branding Consultation
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Request a free brand strategy consultation. Discover how our data-driven branding and marketing services can accelerate your business growth and market positioning.
              </p>
            </div>

            <div ref={contactSection.ref} className="grid lg:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className={`border-primary/20 hover:shadow-lg transition-all hover:scale-105 duration-700 ${
                    contactSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}>
                    <CardContent className="p-6 text-center">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <a
                        href={item.link}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.info}
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
  <div className="grid sm:grid-cols-2 gap-4">
    <div>
      <Label htmlFor="firstName">First Name</Label>
      <Input
        id="firstName"
        placeholder="John"
        value={formData.firstName}
        onChange={handleChange}
        className="mt-2"
      />
    </div>
    <div>
      <Label htmlFor="lastName">Last Name</Label>
      <Input
        id="lastName"
        placeholder="Doe"
        value={formData.lastName}
        onChange={handleChange}
        className="mt-2"
      />
    </div>
  </div>

  <div>
    <Label htmlFor="email">Email</Label>
    <Input
      id="email"
      type="email"
      placeholder="john@example.com"
      value={formData.email}
      onChange={handleChange}
      className="mt-2"
    />
  </div>

  <div>
    <Label htmlFor="phone">Phone (Optional)</Label>
    <Input
      id="phone"
      type="tel"
      placeholder="+1 (234) 567-890"
      value={formData.phone}
      onChange={handleChange}
      className="mt-2"
    />
  </div>

  <div>
    <Label htmlFor="company">Company</Label>
    <Input
      id="company"
      placeholder="Your Company"
      value={formData.company}
      onChange={handleChange}
      className="mt-2"
    />
  </div>

  <div>
    <Label htmlFor="message">Message</Label>
    <Textarea
      id="message"
      placeholder="Tell us about your project and goals..."
      rows={6}
      value={formData.message}
      onChange={handleChange}
      className="mt-2"
    />
  </div>

  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
    Send Message
  </Button>
</form>

                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="space-y-8">
                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Why Work With BMRGrowth?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-muted-foreground">
                          Data-driven strategies backed by proven results
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-muted-foreground">
                          Transparent pricing and honest timelines
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-muted-foreground">
                          Complete visibility into performance and ROI
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-muted-foreground">
                          Strategic partnership, not vendor relationship
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-muted-foreground">
                          Continuous optimization and improvement
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">What Happens Next?</h3>
                    <ol className="space-y-4">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold mr-3">
                          1
                        </span>
                        <div>
                          <h4 className="font-semibold mb-1">We Review Your Request</h4>
                          <p className="text-sm text-muted-foreground">
                            Our team reviews your message within 24 hours
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold mr-3">
                          2
                        </span>
                        <div>
                          <h4 className="font-semibold mb-1">Discovery Call</h4>
                          <p className="text-sm text-muted-foreground">
                            We schedule a call to understand your goals and challenges
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold mr-3">
                          3
                        </span>
                        <div>
                          <h4 className="font-semibold mb-1">Custom Proposal</h4>
                          <p className="text-sm text-muted-foreground">
                            We create a tailored strategy and proposal for your business
                          </p>
                        </div>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
