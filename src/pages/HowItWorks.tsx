import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HowItWorks = () => {
  const processSection = useScrollAnimation();
  const differentSection = useScrollAnimation();
  const timelineSection = useScrollAnimation();
  const investmentStructure = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  const stages = [
    {
      number: "01",
      icon: Search,
      title: "Discovery & Research",
      duration: "2-3 weeks",
      involvement: "High (collaborative workshops and stakeholder interviews)",
      activities: [
        "Comprehensive business audit and stakeholder interviews",
        "Deep competitive landscape analysis",
        "Customer insight development and persona creation",
        "Strategic assessment and opportunity identification",
      ],
      deliverable: "Comprehensive research report documenting findings, insights, and strategic opportunities.",
      why: "Strategic clarity prevents expensive pivots later. Every hour invested in research saves weeks of execution time and thousands in wasted marketing spend.",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Strategy Development",
      duration: "2-4 weeks",
      involvement: "Moderate (strategic presentations and feedback sessions)",
      activities: [
        "Strategic positioning and brand messaging framework",
        "Channel strategy and content planning",
        "Budget allocation and timeline development",
        "KPI definition and measurement framework",
      ],
      deliverable: "Complete brand strategy document and marketing roadmap—your blueprint for market dominance.",
      why: "Strategy eliminates wasted effort. With clear positioning and proven roadmap, every marketing dollar works harder and every campaign compounds results.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Design & Execution",
      duration: "4-12 weeks",
      involvement: "Moderate (feedback and approval at key milestones)",
      activities: [
        "Brand identity system and visual design",
        "Website design, development, and platform setup",
        "Content creation and ad creative development",
        "Comprehensive testing and quality assurance",
      ],
      deliverable: "Complete brand ecosystem ready for market. Everything from visual identity to website to campaigns—designed, built, tested, and ready to convert.",
      why: "Execution quality determines results. Professional work builds trust, amateur work destroys it. We deliver excellence that justifies premium pricing and drives conversions.",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Launch & Optimization",
      duration: "Ongoing",
      involvement: "Low to Moderate (regular review meetings and strategic consultations)",
      activities: [
        "Coordinated market launch across all channels",
        "Real-time performance monitoring and analysis",
        "Continuous A/B testing and optimization",
        "Strategic consultations and proactive recommendations",
      ],
      deliverable: "Marketing that improves over time, not stagnates. Continuous optimization that compounds results and keeps you ahead of competition.",
      why: "Markets change. Competitors adapt. Consumer behavior evolves. Static marketing dies. Continuous optimization ensures you're always improving and never plateauing.",
    },
  ];

  const differentiators = [
    "Transparent Collaboration: You're never in the dark. Regular updates, clear communication, complete visibility into progress and performance.",
    "Data-Driven Decisions: Every strategic choice backed by research. Every optimization informed by performance data. No guessing, just measuring and improving.",
    "Proven Methodology: Battle-tested across industries and markets. We're not experimenting with your budget—we're executing frameworks that work.",
    "Flexible Within Structure: The process is proven, but execution is customized. We adapt to your industry, market, and specific business needs.",
    "Partnership Approach: Your business expertise + our marketing mastery. We work as extension of your team, not external vendor.",
    "Results Obsession: We're not satisfied with effort—we demand outcomes. Measurable results, clear ROI, continuous improvement.",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our Strategic Branding Process:{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Data-Driven Brand Strategy & Marketing
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6">
              How BMRGrowth Delivers Measurable Results:
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Most agencies start creating before they start thinking. They're eager to design, to build, to launch—because that's what you're paying for, right? Wrong. You're paying for results. And results come from strategy, not speed. From research, not rushing. From proven methodologies, not experimental tactics.
            </p>
          </div>
        </div>
      </section>

      {/* Process Stages */}
      <section ref={processSection.ref} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div key={index} className="relative">
                  {/* Connecting Line */}
                  {index < stages.length - 1 && (
                    <div className="hidden lg:block absolute left-[60px] top-[120px] w-0.5 h-[calc(100%+4rem)] bg-gradient-to-b from-primary to-primary/20" />
                  )}
                  
                  <Card className={`border-primary/20 overflow-hidden transition-all duration-700 ${
                    processSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}>
                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-12 gap-0">
                        {/* Stage Number & Icon */}
                        <div className="lg:col-span-2 bg-gradient-to-br from-primary to-primary-dark text-white p-8 flex flex-col items-center justify-center">
                          <span className="text-5xl font-bold opacity-50 mb-4">
                            {stage.number}
                          </span>
                          <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center">
                            <Icon className="h-8 w-8" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-10 p-8 lg:p-12">
                          <h3 className="text-3xl font-bold mb-4">{stage.title}</h3>
                          
                          <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-muted/50 p-4 rounded-lg">
                              <p className="text-sm font-semibold mb-1">Duration</p>
                              <p className="text-muted-foreground">{stage.duration}</p>
                            </div>
                            <div className="bg-muted/50 p-4 rounded-lg">
                              <p className="text-sm font-semibold mb-1">Your Involvement</p>
                              <p className="text-muted-foreground">{stage.involvement}</p>
                            </div>
                          </div>

                          <h4 className="font-semibold mb-3">What We Do:</h4>
                          <ul className="space-y-2 mb-6">
                            {stage.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span className="text-muted-foreground">{activity}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="bg-primary/5 p-6 rounded-lg mb-4">
                            <h4 className="font-semibold mb-2">Deliverable:</h4>
                            <p className="text-muted-foreground">{stage.deliverable}</p>
                          </div>

                          <div className="border-l-4 border-primary pl-4">
                            <h4 className="font-semibold mb-2">Why It Matters:</h4>
                            <p className="text-muted-foreground">{stage.why}</p>
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

      {/* What Makes Us Different */}
      <section ref={differentSection.ref} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center transition-all duration-700 ${
              differentSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              What Makes Our Process Different
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {differentiators.map((item, index) => (
                <Card 
                  key={index} 
                  className={`border-primary/20 transition-all duration-700 ${
                    differentSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <p className="text-foreground">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Expectations */}
      <section ref={timelineSection.ref} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-8 text-center transition-all duration-700 ${
              timelineSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              Timeline Expectations
            </h2>
            
            <Card className={`border-primary/20 mb-8 transition-all duration-700 ${
              timelineSection.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "100ms" }}>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Discovery & Research</h4>
                    <p className="text-muted-foreground">2-3 weeks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Strategy Development</h4>
                    <p className="text-muted-foreground">2-4 weeks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Design & Execution</h4>
                    <p className="text-muted-foreground">4-12 weeks (varies by scope)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Launch & Optimization</h4>
                    <p className="text-muted-foreground">Ongoing</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-2">Total Time to Market</h4>
                  <p className="text-lg text-primary font-medium">8-20 weeks for complete brand transformation</p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Why This Timeline?</h4>
              <p className="text-muted-foreground">
                Quality and strategy take time. Rushing research leads to flawed strategy. Rushing execution leads to amateur results. We move deliberately to ensure excellence.
              </p>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Need faster? We can accelerate certain phases when business demands require it.
              </p>
              <Link to="/strategy-call">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Discuss Your Timeline
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Structure */}
      <section ref={investmentStructure.ref} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-8 text-center transition-all duration-700 ${
              investmentStructure.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              Investment Structure
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className={`border-primary/20 transition-all duration-700 ${
                investmentStructure.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Project-Based</h4>
                  <p className="text-sm text-muted-foreground">
                    Fixed pricing for defined scope and deliverables
                  </p>
                </CardContent>
              </Card>
              <Card className={`border-primary/20 transition-all duration-700 ${
                investmentStructure.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Retainer-Based</h4>
                  <p className="text-sm text-muted-foreground">
                    Monthly partnerships for ongoing services
                  </p>
                </CardContent>
              </Card>
              <Card className={`border-primary/20 transition-all duration-700 ${
                investmentStructure.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Hybrid</h4>
                  <p className="text-sm text-muted-foreground">
                    Upfront project work transitioning to ongoing optimization
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Payment Structure:</h4>
              <p className="text-muted-foreground">
                Milestone-based payments tied to deliverable completion. You pay as value is delivered, not upfront for promises.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-2">No Surprises:</h4>
              <p className="text-muted-foreground">
                Clear scope definition. Transparent pricing. Honest timelines. If scope changes, we discuss before proceeding.
              </p>
            </div>
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
              Ready to Start Your Transformation?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Stop wondering if professional marketing could make a difference. Start discovering what's possible.
            </p>
            <p className="text-base mb-10 text-white/80 max-w-2xl mx-auto">
              Book a strategy call to discuss your business goals, competitive challenges, and growth ambitions. We'll provide honest assessment of whether BMRGrowth is the right strategic partner—and if we are, we'll outline exactly how we'd approach your unique situation.
            </p>
            <Link to="/strategy-call">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
                Book Your Free Strategy Call
              </Button>
            </Link>
            <p className="text-sm mt-6 text-white/70">
              No sales pressure. No obligations. Just an honest conversation about your business and whether our proven process can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
