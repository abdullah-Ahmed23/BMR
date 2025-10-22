import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Shield, TrendingUp, Users, Zap, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const missionSection = useScrollAnimation();
  const differentSection = useScrollAnimation();
  const valuesSection = useScrollAnimation();
  const workSection = useScrollAnimation();
  const clientSection = useScrollAnimation();
  const commitmentSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  const values = [
    {
      icon: Award,
      title: "Excellence Without Ego",
      description: "We're confident in our expertise, but we listen before we talk. Your business knowledge combined with our marketing mastery creates unbeatable strategy.",
    },
    {
      icon: Shield,
      title: "Transparency Always",
      description: "Honest timelines. Clear pricing. Visible performance. Open communication. Trust built through radical transparency.",
    },
    {
      icon: Target,
      title: "Results Above All",
      description: "We're not satisfied with effort or activity. We demand measurable outcomes, clear ROI, and continuous improvement.",
    },
    {
      icon: Users,
      title: "Client Success Is Our Success",
      description: "When your business grows, we win. We're genuinely invested in your success because it's the only metric that matters.",
    },
    {
      icon: Zap,
      title: "Innovation Within Proven Frameworks",
      description: "We embrace new tools and tactics, but never at expense of proven strategy. Innovation informed by foundation of what works.",
    },
    {
      icon: TrendingUp,
      title: "Accountability Always",
      description: "We own our work and our results. If something isn't working, we acknowledge it, analyze why, and fix it immediately.",
    },
  ];

  const differentiators = [
    "Strategic Partnership Over Vendor Relationship: We work as an extension of your team, not an external contractor. Your business expertise meets our marketing mastery, creating strategies neither could develop alone.",
    "Data-Driven Decision Making: Every strategic choice informed by market research, competitive analysis, and performance data. We don't guess—we measure, analyze, and optimize continuously.",
    "Proven Methodologies: Our processes aren't experimental—they're battle-tested frameworks that have delivered results across industries. Every recommendation backed by proven performance.",
    "Transparent Operations: No black boxes. No hidden fees. No surprises. You get clear pricing, honest timelines, and complete visibility into process and performance.",
    "Cost-Effective Excellence: Premium quality without premium waste. We deliver world-class branding and marketing at pricing that maximizes ROI for growing businesses.",
    "Continuous Optimization: Launch is just the beginning. We monitor performance obsessively, test relentlessly, and optimize continuously to ensure your brand keeps winning.",
    "Responsive Support: Questions answered quickly. Issues resolved immediately. Strategic pivots executed rapidly. We move at the speed your business demands.",
  ];

  const commitments = [
    "Strategic Thinking: Every recommendation backed by research, competitive analysis, and proven methodology. No guesswork.",
    "Quality Execution: Professional work that builds trust and drives results. Excellence in every deliverable.",
    "Transparent Communication: Regular updates, clear reporting, honest assessment. You're never in the dark.",
    "Responsive Support: Quick response times, rapid issue resolution, and strategic agility when markets shift.",
    "Continuous Improvement: Relentless optimization and testing. Your marketing gets better over time, not stagnant.",
    "Measurable Results: Clear KPIs, real-time dashboards, and regular reporting. You always know ROI.",
    "Partnership Mindset: We're invested in your success. When you win, we win.",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About BMRGrowth: Leading{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Strategic Branding Agency
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Our Mission: Data-Driven Brand Strategy & Marketing Excellence</h2>
            <p className="text-lg text-muted-foreground mb-6">
              BMRGrowth was founded to solve a critical market gap: businesses needed a strategic branding partner that combined professional-grade brand strategy, creative excellence, and measurable marketing performance—all at scalable pricing.
            </p>
            <p className="text-base text-muted-foreground mb-6">
              Unlike traditional marketing agencies focused on deliverables, our strategic branding methodology prioritizes business outcomes. Every brand identity, marketing campaign, and growth strategy is engineered for ROI through competitive research, audience insights, and continuous performance optimization.
            </p>
            <p className="text-lg font-semibold">Strategic branding that drives measurable business growth.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionSection.ref} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid md:grid-cols-2 gap-8 max-w-6xl mx-auto transition-all duration-700 ${
            missionSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses with strategic branding and performance-driven marketing that creates lasting market advantage and measurable growth.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become the go-to strategic partner for ambitious businesses that refuse to settle for mediocre marketing and demand brands that dominate their markets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section ref={differentSection.ref} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center transition-all duration-700 ${
              differentSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              What Makes BMRGrowth Different
            </h2>
            <div className="space-y-6">
              {differentiators.map((item, index) => (
                <Card 
                  key={index} 
                  className={`border-primary/20 transition-all duration-700 ${
                    differentSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
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

      {/* Our Values */}
      <section ref={valuesSection.ref} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center transition-all duration-700 ${
              valuesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card 
                    key={index} 
                    className={`border-primary/20 transition-all duration-700 ${
                      valuesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-8">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section ref={workSection.ref} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 text-center transition-all duration-700 ${
              workSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              How We Work With Clients
            </h2>
            <p className={`text-lg text-center text-muted-foreground mb-12 transition-all duration-700 ${
              workSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}>
              Our approach is built on fundamental principles that guide every client relationship
            </p>
            <div className="space-y-6">
              <Card className={`border-primary/20 transition-all duration-700 ${
                workSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "200ms" }}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">We Listen First</h4>
                  <p className="text-muted-foreground">
                    Before we recommend anything, we understand your business, market, and goals. Deep discovery ensures strategies aligned with your reality.
                  </p>
                </CardContent>
              </Card>
              <Card className={`border-primary/20 transition-all duration-700 ${
                workSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "300ms" }}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">We Speak Truth</h4>
                  <p className="text-muted-foreground">
                    If an idea won't work, we say so. If timeline is unrealistic, we're honest. If investment won't deliver ROI, we tell you. Trust requires truth.
                  </p>
                </CardContent>
              </Card>
              <Card className={`border-primary/20 transition-all duration-700 ${
                workSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "400ms" }}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">We Deliver Excellence</h4>
                  <p className="text-muted-foreground">
                    Quality isn't negotiable. Every deliverable meets our standards before you see it. Professional work builds trust and drives results.
                  </p>
                </CardContent>
              </Card>
              <Card className={`border-primary/20 transition-all duration-700 ${
                workSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "500ms" }}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">We Measure Everything</h4>
                  <p className="text-muted-foreground">
                    Clear KPIs. Real-time dashboards. Regular reporting. You always know what's working, what's not, and why.
                  </p>
                </CardContent>
              </Card>
              <Card className={`border-primary/20 transition-all duration-700 ${
                workSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "600ms" }}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">We Optimize Continuously</h4>
                  <p className="text-muted-foreground">
                    Markets change. Competitors adapt. We're never satisfied with 'good enough'—always testing, improving, and staying ahead.
                  </p>
                </CardContent>
              </Card>
              <Card className={`border-primary/20 transition-all duration-700 ${
                workSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "700ms" }}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">We Partner Long-Term</h4>
                  <p className="text-muted-foreground">
                    We're not looking for one-time projects. We build lasting relationships with clients who value strategic partnership and continuous improvement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section ref={clientSection.ref} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 text-center transition-all duration-700 ${
              clientSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              Our Ideal Client Partners
            </h2>
            <p className={`text-lg text-center text-muted-foreground mb-12 transition-all duration-700 ${
              clientSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}>
              We work best with businesses that:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className={`border-primary/20 transition-all duration-700 ${
                clientSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Have Proven Product-Market Fit</h4>
                  <p className="text-sm text-muted-foreground">
                    You know your offering works. Now you need marketing that scales it.
                  </p>
                </CardContent>
              </Card>
              <Card className={`border-primary/20 transition-all duration-700 ${
                clientSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Value Strategic Partnership</h4>
                  <p className="text-sm text-muted-foreground">
                    You're looking for long-term partner, not task executor. You want collaboration, not just execution.
                  </p>
                </CardContent>
              </Card>
              <Card className={`border-primary/20 transition-all duration-700 ${
                clientSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Demand Transparency</h4>
                  <p className="text-sm text-muted-foreground">
                    You expect clear communication, honest assessment, and complete visibility into performance.
                  </p>
                </CardContent>
              </Card>
              <Card className={`border-primary/20 transition-all duration-700 ${
                clientSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "500ms" }}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Are Growth-Focused</h4>
                  <p className="text-sm text-muted-foreground">
                    You're not maintaining—you're scaling. You need marketing that supports ambitious growth goals.
                  </p>
                </CardContent>
              </Card>
              <Card className={`border-primary/20 transition-all duration-700 ${
                clientSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Make Data-Driven Decisions</h4>
                  <p className="text-sm text-muted-foreground">
                    You value analytics and performance metrics. You want to know what's working and why.
                  </p>
                </CardContent>
              </Card>
              <Card className={`border-primary/20 transition-all duration-700 ${
                clientSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "700ms" }}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Refuse to Settle</h4>
                  <p className="text-sm text-muted-foreground">
                    You're not building another 'me too' business. You're creating something that dominates your market.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold mb-4">
                What matters most: Not your industry, but your ambition.
              </p>
              <p className="text-muted-foreground">
                If you're serious about building a market-leading brand, we speak your language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section ref={commitmentSection.ref} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 text-center transition-all duration-700 ${
              commitmentSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              Our Commitment to You
            </h2>
            <p className={`text-lg text-center text-muted-foreground mb-12 transition-all duration-700 ${
              commitmentSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}>
              What You Can Expect From Primoxe
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {commitments.map((commitment, index) => (
                <Card 
                  key={index} 
                  className={`border-primary/20 transition-all duration-700 ${
                    commitmentSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <p className="text-foreground">{commitment}</p>
                  </CardContent>
                </Card>
              ))}
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
              Ready to Partner With BMRGrowth?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Stop settling for agencies that sell services. Start partnering with strategists who deliver results.
            </p>
            <p className="text-base mb-10 text-white/80 max-w-2xl mx-auto">
              Book a strategy call to discuss your business goals, competitive challenges, and growth ambitions. We'll provide honest assessment of whether we're the right strategic partner for your unique situation.
            </p>
            <Link to="/strategy-call">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
                Book Your Free Strategy Call
              </Button>
            </Link>
            <p className="text-sm mt-6 text-white/70">
              No sales pressure. No obligations. Just an honest conversation about whether BMRGrowth can help you build a brand that dominates your market.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
