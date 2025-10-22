import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Target, TrendingUp, Award, BarChart3, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import Darkveil  from '../components/ui/darkveil'

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Home = () => {
  const problemSection = useScrollAnimation();
  const approachSection = useScrollAnimation();
  const servicesSection = useScrollAnimation();
  const testimonialsSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  const navigate = useNavigate();
const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  company: "",
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

  

  const features = [
    "No guesswork - Every strategy backed by market research and competitive analysis",
    "No surprises - Transparent pricing, honest timelines, complete visibility",
    "No plateaus - Continuous optimization that keeps you ahead of the competition",
  ];

  const services = [
    {
      icon: Target,
      title: "Market Research & Brand Strategy",
      description: "Position your brand where it wins. Deep competitive analysis, audience research, and strategic frameworks that differentiate you from day one.",
    },
    {
      icon: Sparkles,
      title: "Brand Identity Design",
      description: "Visual systems that command attention and communicate value. From logo to complete brand guidelines—designed to scale with your growth.",
    },
    {
      icon: TrendingUp,
      title: "Social Media Management",
      description: "Strategic content that builds communities and drives conversions. Platform optimization, engagement strategies, and growth that matters to your bottom line.",
    },
    {
      icon: BarChart3,
      title: "High-Converting Ad Campaigns",
      description: "Multi-channel advertising that delivers ROI. Meta, Google, LinkedIn—orchestrated campaigns that turn ad spend into revenue growth.",
    },
  ];

  const testimonials = [
    {
      quote: "BMRGrowth didn't just redesign our brand—they repositioned our entire market approach. Revenue up 247% in eight months.",
      author: "Sarah Chen",
      title: "CEO, TechFlow Solutions",
    },
    {
      quote: "Finally, an agency that actually understands ROI. Our cost per acquisition dropped 64% while lead quality improved dramatically.",
      author: "Marcus Rodriguez",
      title: "CMO, GrowthMinds",
    },
    {
      quote: "Transparent, responsive, and relentlessly focused on results. The strategic partnership we needed to scale from $2M to $8M.",
      author: "Jennifer Blake",
      title: "Founder, Elevate Wellness",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
       
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background z-0" />
          <div className="absolute inset-0 z-0">
   <Darkveil 
   hueShift={25}
   />
  </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Copy */}
            <div className="animate-fade-in">
              <h1 className="text-2xl sm:text-5xl lg:text-2xl xl:text-5xl font-bold mb-6 text-white">
                Data-Driven Marketing Agency That{" "}
                <span className="text-[#f7fabb]">
                  Accelerates Growth
                </span>
                {" "}Through Integrated Digital Strategy
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 animate-slide-up text-white">
                Full-service digital marketing agency delivering measurable results. BMRGrowth combines brand strategy, web development, social media marketing, and performance advertising to drive sustainable business growth and market leadership.
              </p>
              <p className="text-base sm:text-lg font-medium mb-10 animate-slide-up text-white">
                Expert marketing services including strategic planning, web & app development, brand identity, social media management, and ROI-focused advertising campaigns that scale your business predictably.
              </p>
            </div>

            {/* Right Column - Form */}
            <div className="animate-slide-in-right">
              <Card className="border-primary/20 shadow-xl rounded-[45px]">
                <CardContent className="p-8 ">
                  <h2 className="text-2xl font-bold mb-6">Get started with your free strategy call</h2>
                 <form
  onSubmit={(e) => {
    e.preventDefault();
    navigate("/strategy-call", { state: formData });
  }}
  className="space-y-4"
>
  <div>
    <Input
      type="text"
      name="fullName"
      placeholder="Full Name"
      value={formData.fullName}
      onChange={handleChange}
      className="bg-background rounded-[45px]"
    />
  </div>
  <div>
    <Input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      className="bg-background rounded-[45px]"
    />
  </div>
  <div>
    <Input
      type="tel"
      name="phone"
      placeholder="Phone"
      value={formData.phone}
      onChange={handleChange}
      className="bg-background rounded-[45px]"
    />
  </div>
  <div>
    <Input
      type="text"
      name="company"
      placeholder="Company Name"
      value={formData.company}
      onChange={handleChange}
      className="bg-background rounded-[45px]"
    />
  </div>

  <div className="flex items-start space-x-2 pt-2">
    <input
      type="checkbox"
      id="privacy1"
      className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-primary"
    />
    <label htmlFor="privacy1" className="text-sm text-muted-foreground leading-tight">
      I would like to receive marketing communication emails from the BMRGrowth team
      about products, services, and events.
    </label>
  </div>

  <div className="flex items-start space-x-2 pt-2">
    <input
      type="checkbox"
      id="privacy2"
      className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-primary"
    />
    <label htmlFor="privacy2" className="text-sm text-muted-foreground leading-tight">
      I agree to the{" "}
      <Link to="/privacy" className="text-primary hover:underline">
        Terms of Service
      </Link>{" "}
      and{" "}
      <Link to="/terms" className="text-primary hover:underline">
        Privacy Policy
      </Link>
    </label>
  </div>

  <Button
    type="submit"
    size="lg"
    className="w-full bg-primary hover:bg-primary/90 text-lg"
  >
    GET STARTED
  </Button>
</form>

                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section ref={problemSection.ref} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl mx-auto text-center mb-12 transition-all duration-700 ${
            problemSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose BMRGrowth's Growth-Focused Marketing Approach
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Unlike traditional agencies, our integrated marketing methodology focuses on measurable business outcomes. Every strategy, digital asset, and campaign is backed by competitive research and performance data—delivering real ROI and sustainable growth, not just deliverables.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`border-primary/20 hover:border-primary/40 transition-all hover:scale-105 duration-700 ${
                  problemSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <p className="text-foreground font-medium">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Differently */}
      <section ref={approachSection.ref} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${
            approachSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Data-Driven Marketing Strategy & Growth Excellence
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className={`border-primary/20 hover:shadow-lg transition-all hover:scale-105 duration-700 ${
              approachSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0ms" }}>
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Data-Driven Decision Making</h3>
                <p className="text-muted-foreground">
                  Market research. Competitive analysis. Performance metrics. Real-time optimization. Every choice is informed by data, not hunches.
                </p>
              </CardContent>
            </Card>
            <Card className={`border-primary/20 hover:shadow-lg transition-all hover:scale-105 duration-700 ${
              approachSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "150ms" }}>
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Methodologies</h3>
                <p className="text-muted-foreground">
                  Battle-tested frameworks that have delivered results across industries. We don't experiment with your budget—we execute what works.
                </p>
              </CardContent>
            </Card>
            <Card className={`border-primary/20 hover:shadow-lg transition-all hover:scale-105 duration-700 ${
              approachSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}>
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Cost-Effective Excellence</h3>
                <p className="text-muted-foreground">
                  Premium quality without premium waste. World-class marketing solutions and digital development at pricing that maximizes ROI at every stage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesSection.ref} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${
            servicesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Comprehensive Digital Marketing & Growth Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className={`border-primary/20 hover:shadow-lg transition-all hover:scale-105 duration-700 ${
                    servicesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <Icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <Link to="/services" className="text-primary font-medium hover:underline">
                      Learn More →
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsSection.ref} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${
            testimonialsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Proven Results From Our Growth Marketing Clients
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`border-primary/20 hover:shadow-lg transition-all hover:scale-105 duration-700 ${
                  testimonialsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaSection.ref} className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            ctaSection.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Accelerate Your Business Growth?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-white/90">
              Partner with a growth marketing agency that delivers measurable ROI across all channels.
            </p>
            <p className="text-base mb-10 text-white/80 max-w-2xl mx-auto">
              Schedule your free growth strategy consultation. Discover how BMRGrowth's data-driven approach to marketing strategy, web development, and integrated campaigns can accelerate your revenue growth and market position.
            </p>
            <Link to="/strategy-call">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
                Book Your Free Strategy Call
              </Button>
            </Link>
            <p className="text-sm mt-6 text-white/70 max-w-2xl mx-auto">
              No sales pitch. No obligations. Just an honest conversation about your business goals and whether we're the right strategic partner to help you achieve them.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
