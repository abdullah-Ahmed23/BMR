import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FAQ = () => {
  const faqSection = useScrollAnimation();

  const faqs = [
    {
      question: "How is BMRGrowth different from other marketing agencies?",
      answer: "We focus on strategic partnership over vendor relationships, data-driven decision making, and transparent operations. Unlike agencies that sell individual services, we deliver integrated ecosystems designed to work together. Every recommendation is backed by research and proven methodologies, not guesswork.",
    },
    {
      question: "What industries do you work with?",
      answer: "We work across multiple industries including Technology & SaaS, Professional Services, E-Commerce, Health & Wellness, Financial Services, Education, and B2B Manufacturing. What matters most isn't your industry—it's your ambition to build a market-leading brand.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Complete brand transformation typically takes 8-20 weeks: Discovery & Research (2-3 weeks), Strategy Development (2-4 weeks), Design & Execution (4-12 weeks), followed by ongoing Launch & Optimization. Timeline varies based on project scope and specific needs.",
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer three approaches: Project-Based (fixed pricing for defined scope), Retainer-Based (monthly partnerships for ongoing services), and Hybrid (upfront project work transitioning to ongoing optimization). All pricing is transparent with milestone-based payments tied to deliverable completion.",
    },
    {
      question: "Do you require long-term contracts?",
      answer: "Project-based work has defined timelines without long-term commitments. For retainer partnerships, we typically recommend minimum 3-6 month engagements to see meaningful results, but we're flexible based on your needs. We believe in earning your business continuously, not locking you in.",
    },
    {
      question: "What results can I expect?",
      answer: "Results vary by industry and goals, but our clients typically see improved brand recognition, increased conversion rates, lower customer acquisition costs, and measurable ROI growth. We set clear KPIs during strategy development and provide regular performance reporting so you always know what's working.",
    },
    {
      question: "How involved do I need to be in the process?",
      answer: "Involvement varies by stage: High during Discovery & Research (workshops and interviews), Moderate during Strategy Development and Design & Execution (feedback sessions and approvals), and Low to Moderate during ongoing Optimization (regular review meetings). We adapt to your availability while ensuring strategic alignment.",
    },
    {
      question: "Do you work with startups or only established businesses?",
      answer: "We work with both! Startups benefit from strategic positioning and brand foundation to launch effectively. Established businesses leverage our expertise for modernization, expansion, or competitive repositioning. The key requirement is commitment to building a market-leading brand.",
    },
    {
      question: "What makes your research and strategy different?",
      answer: "We don't skip to execution. Every project starts with comprehensive market research, competitive analysis, and audience insights. This strategic foundation prevents expensive pivots later and ensures every marketing dollar works harder. We use proven frameworks, not experimental approaches.",
    },
    {
      question: "Can you help with just one service (like branding or website)?",
      answer: "Yes, while we recommend integrated ecosystems for maximum impact, we can provide individual services. However, even standalone projects begin with strategic discovery to ensure alignment with your business goals and market position.",
    },
    {
      question: "How do you measure success?",
      answer: "Success is measured through clear KPIs defined during strategy development, including metrics like brand awareness, website traffic, conversion rates, customer acquisition cost, customer lifetime value, ROI, and revenue growth. You'll have access to real-time dashboards and receive regular performance reports.",
    },
    {
      question: "What happens if I'm not satisfied with the results?",
      answer: "We're committed to your success. If something isn't working, we acknowledge it immediately, analyze why, and make corrections. Our milestone-based payment structure means you're paying for value delivered. We also maintain open communication throughout the process to address concerns before they become problems.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Absolutely. Launch is just the beginning. We offer ongoing optimization services including performance monitoring, A/B testing, campaign refinement, strategic consultations, and proactive recommendations. Markets change, and your marketing should evolve accordingly.",
    },
    {
      question: "How quickly can we get started?",
      answer: "We can typically begin Discovery within 1-2 weeks of engagement, depending on current workload and team availability. Complex projects may require additional preparation time. Book a strategy call to discuss your timeline needs and project urgency.",
    },
    {
      question: "What information do you need to provide a proposal?",
      answer: "We'll need to understand your business goals, target audience, current marketing efforts, competitive landscape, budget range, and timeline expectations. A discovery call covers these topics and helps us determine if we're the right fit before creating a custom proposal.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Get answers to common questions about working with BMRGrowth. Don't see your question? Contact us directly.
              </p>
            </div>

            <Accordion ref={faqSection.ref} type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={`border border-primary/20 rounded-lg px-6 bg-card transition-all duration-700 ${
                    faqSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
                <p className="text-muted-foreground mb-6">
                  We're here to help. Book a free strategy call to discuss your specific situation and get personalized answers.
                </p>
                <Link to="/strategy-call">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Book Your Free Strategy Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
