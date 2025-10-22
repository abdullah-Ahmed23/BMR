import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import emailjs from "emailjs-com";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const StrategyCall = () => {
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const templateParams = {
    FirstName: formData.firstName,
    LastName: formData.lastName,
    Email: formData.email,
    Phone: formData.phone,
    CompanyName: formData.company,
    Website: formData.website,
    RevenueRange: formData.revenue,
    Goals: formData.goals,
    Timeline: formData.timeline,
    time: new Date().toLocaleString(),
  };

  try {
    await emailjs.send(
      "service_1po8ofe", // Service ID
      "template_q1cypuo",  // Template ID
      templateParams,
      "uDt6VwT2Ou41smT7M"    // ⚠️ Replace with your EmailJS public key
    );
    alert("✅ Your call has been scheduled successfully! We'll contact you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      revenue: "",
      goals: "",
      timeline: "",
    });
  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("❌ Failed to send. Please try again later.");
  }
};

 const location = useLocation();

const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  revenue: "",
  goals: "",
  timeline: "",
});

useEffect(() => {
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

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setFormData({ ...formData, [e.target.id]: e.target.value });
};



  const formSection = useScrollAnimation();

  const benefits = [
    "Honest assessment of your current marketing situation",
    "Discussion of your business goals and growth ambitions",
    "Strategic insights tailored to your industry and market",
    "Clear roadmap of how BMRGrowth could help you succeed",
    "Transparent pricing and timeline expectations",
    "No sales pressure - just honest conversation",
  ];

  const whatToExpect = [
    {
      title: "Before the Call",
      items: [
        "Brief questionnaire to understand your business",
        "Review of your current marketing materials (if available)",
        "Preliminary research on your industry and competitors",
      ],
    },
    {
      title: "During the Call (60 minutes)",
      items: [
        "Deep dive into your business goals and challenges",
        "Discussion of your target audience and market position",
        "Strategic insights and initial recommendations",
        "Q&A about our process, pricing, and approach",
      ],
    },
    {
      title: "After the Call",
      items: [
        "Summary of key discussion points",
        "Custom proposal (if we're a good fit)",
        "Next steps and timeline (if you decide to proceed)",
        "No obligations - take time to decide what's right for you",
      ],
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
                Book Your Free{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Strategy Call
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
                No sales pitch. No obligations. Just an honest conversation about your business goals and whether we're the right strategic partner to help you achieve them.
              </p>
            </div>

            <div ref={formSection.ref} className={`grid lg:grid-cols-2 gap-12 mb-16 transition-all duration-700 ${
              formSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              {/* Booking Form */}
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Schedule Your Call</h2>
                 <form className="space-y-6" onSubmit={handleSubmit}>

  <div className="grid sm:grid-cols-2 gap-4">
    <div>
      <Label htmlFor="firstName">First Name *</Label>
      <Input
        id="firstName"
        placeholder="John"
        className="mt-2"
        required
        value={formData.firstName}
        onChange={handleChange}
      />
    </div>
    <div>
      <Label htmlFor="lastName">Last Name *</Label>
      <Input
        id="lastName"
        placeholder="Doe"
        className="mt-2"
        required
        value={formData.lastName}
        onChange={handleChange}
      />
    </div>
  </div>

  <div>
    <Label htmlFor="email">Email *</Label>
    <Input
      id="email"
      type="email"
      placeholder="john@example.com"
      className="mt-2"
      required
      value={formData.email}
      onChange={handleChange}
    />
  </div>

  <div>
    <Label htmlFor="phone">Phone *</Label>
    <Input
      id="phone"
      type="tel"
      placeholder="+1 (234) 567-890"
      className="mt-2"
      required
      value={formData.phone}
      onChange={handleChange}
    />
  </div>

  <div>
    <Label htmlFor="company">Company Name *</Label>
    <Input
      id="company"
      placeholder="Your Company"
      className="mt-2"
      required
      value={formData.company}
      onChange={handleChange}
    />
  </div>

  <div>
    <Label htmlFor="website">Company Website</Label>
    <Input
      id="website"
      type="url"
      placeholder="https://yourcompany.com"
      className="mt-2"
      value={formData.website}
      onChange={handleChange}
    />
  </div>

  <div>
    <Label htmlFor="revenue">Annual Revenue Range</Label>
    <select
      id="revenue"
      className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
      value={formData.revenue}
      onChange={handleChange}
    >
      <option value="">Select range</option>
      <option value="under-500k">Under $500K</option>
      <option value="500k-1m">$500K - $1M</option>
      <option value="1m-5m">$1M - $5M</option>
      <option value="5m-10m">$5M - $10M</option>
      <option value="over-10m">Over $10M</option>
    </select>
  </div>

  <div>
    <Label htmlFor="goals">What are your primary goals? *</Label>
    <Textarea
      id="goals"
      placeholder="Tell us about your business goals, challenges, and what you hope to achieve..."
      rows={4}
      className="mt-2"
      required
      value={formData.goals}
      onChange={handleChange}
    />
  </div>

  <div>
    <Label htmlFor="timeline">When would you like to get started?</Label>
    <select
      id="timeline"
      className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
      value={formData.timeline}
      onChange={handleChange}
    >
      <option value="">Select timeline</option>
      <option value="asap">As soon as possible</option>
      <option value="1-month">Within 1 month</option>
      <option value="1-3-months">1-3 months</option>
      <option value="3-6-months">3-6 months</option>
      <option value="exploring">Just exploring options</option>
    </select>
  </div>

  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
    Book My Free Strategy Call
  </Button>

  <p className="text-xs text-muted-foreground text-center">
    By submitting this form, you agree to receive communications from BMRGrowth.
    We respect your privacy and will never share your information.
  </p>
</form>

                </CardContent>
              </Card>

              {/* Benefits & What to Expect */}
              <div className="space-y-8">
                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">What You'll Get From This Call</h3>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">What to Expect</h3>
                    <div className="space-y-6">
                      {whatToExpect.map((section, index) => (
                        <div key={index}>
                          <h4 className="font-semibold mb-3 text-primary">{section.title}</h4>
                          <ul className="space-y-2">
                            {section.items.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span className="text-sm text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-primary/20 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-2">No</div>
                  <p className="text-muted-foreground">Sales Pressure</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">Confidential</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-2">Free</div>
                  <p className="text-muted-foreground">Strategic Insights</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StrategyCall;
