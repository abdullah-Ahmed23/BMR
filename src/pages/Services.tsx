import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Palette, Share2, Code, Megaphone, LineChart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import img1 from "../assets/ST.jpg"
import img2 from "../assets/brand.jpeg"
import img3 from "../assets/SO.jpg"
import img4 from "../assets/WEB.png"
import img5 from "../assets/AD.webp"
import img6 from "../assets/PO.jpg"


const Services = () => {
  const servicesSection = useScrollAnimation();
  const integrationSection = useScrollAnimation();
  const investmentSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  const services = [
    {
      id: "brand-strategy",
      icon: Target,
      title: "Market Research & Brand Strategy",
      tagline: "The Foundation of Everything That Works",
      description: "Before a single design is created or ad is launched, we need to know: Who are you really competing against? What do your customers actually value? Where's the opportunity others are missing?",
      features: [
        "Competitive Analysis & Market Positioning",
        "Target Audience Research",
        "Brand Architecture",
        "Value Proposition Development",
        "Market Entry & Expansion Strategies",
      ],
      impact: "Position your brand where it wins before you invest in execution. Strategic clarity that prevents expensive pivots and ensures every marketing dollar works harder.",
      idealFor: "New businesses seeking market positioning, established companies planning expansion, brands struggling with differentiation.",
      image: [img1]
    },
    {
      id: "brand-identity",
      icon: Palette,
      title: "Brand Identity Design",
      tagline: "Visual Systems That Command Attention and Communicate Value",
      description: "Your brand identity isn't decoration—it's strategic communication. Every color, typeface, and design element works to position your brand and influence perception.",
      features: [
        "Logo Design & Visual Identity Systems",
        "Comprehensive Brand Guidelines",
        "Typography & Color Systems",
        "Marketing Collateral & Assets",
        "Packaging & Product Design",
      ],
      impact: "Professional credibility that justifies premium pricing. Visual consistency that builds recognition and trust faster than inconsistent branding ever could.",
      idealFor: "Startups launching to market, established brands ready for modernization, companies outgrowing their DIY identity.",
      image: [img2]
    },
    {
      id: "social-media",
      icon: Share2,
      title: "Social Media Management",
      tagline: "Strategic Content That Builds Communities and Drives Conversions",
      description: "Social media isn't about posting—it's about building audiences that convert into customers. Strategic content, consistent engagement, and community management that serves your business goals.",
      features: [
        "Strategic Content Planning",
        "Platform Optimization",
        "Community Management",
        "Audience Growth Strategies",
        "Social Listening & Reputation Management",
      ],
      impact: "Consistent brand presence that nurtures prospects, builds authority, and feeds your sales pipeline with qualified leads—all while you focus on running your business.",
      idealFor: "Businesses without dedicated marketing teams, brands seeking consistent presence, companies ready to leverage social for actual business growth.",
      image: [img3]
    },
    {
      id: "web-dev",
      icon: Code,
      title: "Web & App Development",
      tagline: "Conversion-Optimized Digital Experiences",
      description: "Your website isn't a brochure—it's your hardest-working salesperson. We build digital experiences designed for one purpose: converting visitors into customers and users into advocates.",
      features: [
        "Conversion-Optimized Website Design",
        "Mobile App Development",
        "E-Commerce Platform Setup",
        "UX/UI Design Excellence",
        "Performance & Security",
      ],
      impact: "24/7 lead generation and sales enablement. Professional digital presence that converts traffic into revenue and supports, rather than limits, your growth.",
      idealFor: "Businesses launching new digital products, companies with underperforming websites, brands ready for ecommerce or mobile apps.",
      image: [img4]
    },
    {
      id: "ad-campaigns",
      icon: Megaphone,
      title: "High-Converting Ad Campaigns",
      tagline: "Multi-Channel Advertising That Delivers ROI",
      description: "Traffic without conversion is just expensive noise. We build advertising campaigns engineered for measurable returns—targeting right audiences, with right messages, at right moments.",
      features: [
        "Meta Advertising (Facebook/Instagram)",
        "Google Ads",
        "LinkedIn Advertising",
        "Retargeting & Conversion Optimization",
        "Multi-Channel Campaign Orchestration",
      ],
      impact: "Predictable customer acquisition. Scalable growth. Complete visibility into what's working and what ROI you're getting from every dollar spent.",
      idealFor: "Businesses ready to scale acquisition, companies with proven product-market fit, brands seeking predictable growth channels.",
      image: [img5]
    },
    {
      id: "analytics",
      icon: LineChart,
      title: "Performance Analytics",
      tagline: "Real-Time Insights That Drive Strategic Decisions",
      description: "Data without insight is noise. We transform metrics into strategic intelligence—showing you exactly what's working, what's not, and what opportunities you're missing.",
      features: [
        "Real-Time Dashboard Setup",
        "KPI Tracking & Measurement",
        "ROI Analysis & Attribution",
        "A/B Testing & Optimization",
        "Strategic Recommendations",
      ],
      impact: "Make decisions based on performance data, not guesswork. Continuous optimization that ensures you're always improving returns and staying ahead of competition.",
      idealFor: "Data-driven leaders, companies scaling marketing investment, businesses demanding accountability from marketing spend.",
      image: [img6]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Full-Service Digital Marketing:{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Strategy to Execution to Growth
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6">
              Comprehensive digital marketing services: From growth strategy and web development to brand identity, social media management, and performance advertising—integrated solutions that drive measurable business growth.
            </p>
            <p className="text-xl font-semibold mb-8">
              Is your marketing keeping pace with your ambitions, or holding you back?
            </p>
            <p className="text-base text-muted-foreground">
              BMRGrowth delivers the complete strategic ecosystem ambitious businesses need to dominate their markets. Not individual services sold separately—integrated solutions designed to work together and compound results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed */}
   <section ref={servicesSection.ref} className="py-20">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="space-y-20">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
         <div key={service.id} id={service.id} className="scroll-mt-24">
  <Card
    className={`border-primary/20 overflow-hidden transition-all duration-700 ${
      servicesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    }`}
    style={{ transitionDelay: `${index * 150}ms` }}
  >
    <CardContent className="p-0">
 <div
  className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
>
  {/* LEFT SIDE WITH IMAGE BACKGROUND */}
  <div className="relative flex items-center justify-center p-8 lg:p-12 overflow-hidden group">
    {/* Background image */}
    <img
      src={service.image || "/images/default-service.jpg"}
      alt={service.title}
      className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
    />

    {/* Darker overlay */}
    <div className="absolute inset-0  group-hover:bg-black/60 transition-colors duration-500"></div>

    {/* Foreground content with hover animation */}
    <div className="relative text-center z-10 text-white">
      <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/20 mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
        <Icon className="h-10 w-10 text-white" />
      </div>

      {/* Text that fades and slides in */}
      <h2
        className="text-4xl font-bold mb-2 text-white opacity-0 translate-y-4 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0 drop-shadow-lg"
      >
        {service.title}
      </h2>
      <p
        className="text-xl font-medium opacity-0 translate-y-4 transition-all duration-700 delay-150 group-hover:opacity-100 group-hover:translate-y-0 drop-shadow-md"
      >
        {service.tagline}
      </p>
    </div>
  </div>

  {/* RIGHT SIDE - TEXT CONTENT */}
  <div className="p-8 lg:p-12 bg-background">
    <p className="text-foreground mb-6">{service.description}</p>
    <h4 className="font-semibold mb-4 text-lg">What We Deliver:</h4>
    <ul className="space-y-2 mb-6">
      {service.features.map((feature, idx) => (
        <li key={idx} className="flex items-start">
          <span className="text-primary mr-2">•</span>
          <span className="text-muted-foreground">{feature}</span>
        </li>
      ))}
    </ul>
    <div className="bg-muted/50 p-6 rounded-lg mb-6">
      <h4 className="font-semibold mb-2">Business Impact:</h4>
      <p className="text-sm text-muted-foreground">{service.impact}</p>
    </div>
    <div className="text-sm text-muted-foreground">
      <span className="font-semibold text-foreground">Ideal For:</span> {service.idealFor}
    </div>
  </div>
</div>

    </CardContent>
  </Card>
</div>

        );
      })}
    </div>
  </div>
</section>
      {/* Integration Section */}
      <section ref={integrationSection.ref} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 text-center transition-all duration-700 ${
              integrationSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              How BMRGrowth Services Work Together
            </h2>
            <p className={`text-xl text-center mb-12 text-muted-foreground transition-all duration-700 ${
              integrationSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}>
              Individual services deliver results. Integrated ecosystems deliver transformation.
            </p>
            
            <div className="space-y-6">
              <Card className={`border-primary/20 transition-all duration-700 ${
                integrationSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "200ms" }}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Strategic Foundation</h4>
                  <p className="text-muted-foreground">
                    Research and strategy inform every execution decision—from design to messaging to channel selection.
                  </p>
                </CardContent>
              </Card>
              
              <Card className={`border-primary/20 transition-all duration-700 ${
                integrationSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "300ms" }}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Consistent Brand Experience</h4>
                  <p className="text-muted-foreground">
                    Your brand identity guides website design, social content, ad creative—every touchpoint reinforces positioning.
                  </p>
                </CardContent>
              </Card>
              
              <Card className={`border-primary/20 transition-all duration-700 ${
                integrationSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "400ms" }}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Data-Driven Optimization</h4>
                  <p className="text-muted-foreground">
                    Performance analytics inform strategy adjustments, content improvements, campaign optimization—continuous improvement.
                  </p>
                </CardContent>
              </Card>
              
              <Card className={`border-primary/20 transition-all duration-700 ${
                integrationSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "500ms" }}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Compounding Results</h4>
                  <p className="text-muted-foreground">
                    Each service amplifies the others. Your website converts traffic from ads. Social builds audiences for retargeting. Brand authority improves all conversion rates.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section ref={investmentSection.ref} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 transition-all duration-700 ${
              investmentSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              Transparent Pricing. Clear Deliverables. Measurable ROI.
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-12">
              <Card className={`border-primary/20 transition-all duration-700 ${
                investmentSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}>
                <CardContent className="p-6 text-left">
                  <h4 className="font-semibold mb-2">Clear Scope & Deliverables</h4>
                  <p className="text-muted-foreground text-sm">Know exactly what you're getting</p>
                </CardContent>
              </Card>
              <Card className={`border-primary/20 transition-all duration-700 ${
                investmentSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}>
                <CardContent className="p-6 text-left">
                  <h4 className="font-semibold mb-2">Fixed Project Pricing or Transparent Retainers</h4>
                  <p className="text-muted-foreground text-sm">Budget with confidence</p>
                </CardContent>
              </Card>
              <Card className={`border-primary/20 transition-all duration-700 ${
                investmentSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}>
                <CardContent className="p-6 text-left">
                  <h4 className="font-semibold mb-2">Milestone-Based Payment</h4>
                  <p className="text-muted-foreground text-sm">Pay as value is delivered</p>
                </CardContent>
              </Card>
              <Card className={`border-primary/20 transition-all duration-700 ${
                investmentSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}>
                <CardContent className="p-6 text-left">
                  <h4 className="font-semibold mb-2">Performance Guarantees</h4>
                  <p className="text-muted-foreground text-sm">Outcomes we stand behind</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Premium quality doesn't require premium waste. We deliver world-class work at pricing that makes sense for growing businesses—maximizing your ROI at every stage.
            </p>
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
              Ready to Build Your Competitive Advantage?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Stop piecing together marketing tactics. Start building integrated brand ecosystems.
            </p>
            <p className="text-base mb-10 text-white/80 max-w-2xl mx-auto">
              Book a strategy call to discuss your business goals, competitive challenges, and growth ambitions. We'll provide honest assessment of whether BMRGrowth is right strategic partner to help you achieve them.
            </p>
            <Link to="/strategy-call">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
                Book Your Free Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
