import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Legal = () => {
  const location = useLocation();
  const defaultTab = location.pathname.replace("/", "") || "terms";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Legal Information</h1>
            <p className="text-lg text-muted-foreground">
              Please review our policies and terms of service
            </p>
          </div>

          <Tabs defaultValue={defaultTab} className="w-full animate-slide-up">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="terms">Terms of Service</TabsTrigger>
              <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
              <TabsTrigger value="cookies">Cookie Policy</TabsTrigger>
              <TabsTrigger value="refund">Refund Policy</TabsTrigger>
            </TabsList>

            {/* Terms of Service */}
            <TabsContent value="terms" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Terms of Service</CardTitle>
                  <CardDescription>Last updated: January 2025</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <section>
                    <h3 className="text-xl font-semibold mb-3">1. Agreement to Terms</h3>
                    <p className="text-muted-foreground">
                      By accessing or using BMRGrowth services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">2. Services Description</h3>
                    <p className="text-muted-foreground mb-3">
                      BMRGrowth provides strategic branding, marketing, and revenue growth services including but not limited to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Market research and brand strategy development</li>
                      <li>Brand identity design and visual systems</li>
                      <li>Social media management and content creation</li>
                      <li>Web and app development services</li>
                      <li>Advertising campaign management</li>
                      <li>Performance analytics and reporting</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">3. Client Responsibilities</h3>
                    <p className="text-muted-foreground mb-3">Clients agree to:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Provide accurate and complete information for project execution</li>
                      <li>Respond to requests for feedback within agreed timeframes</li>
                      <li>Make timely payments according to the agreed schedule</li>
                      <li>Provide necessary access to platforms and tools required for service delivery</li>
                      <li>Use delivered work in accordance with agreed usage rights</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">4. Payment Terms</h3>
                    <p className="text-muted-foreground">
                      Payment terms are specified in individual service agreements. Unless otherwise stated, payments are due according to milestone schedules or monthly retainer agreements. Late payments may incur interest charges and may result in suspension of services.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">5. Intellectual Property</h3>
                    <p className="text-muted-foreground">
                      Upon full payment, clients receive ownership of final deliverables as specified in the service agreement. BMRGrowth retains the right to showcase completed work in portfolios and case studies unless otherwise agreed in writing. Pre-existing intellectual property and methodologies remain the property of BMRGrowth.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">6. Confidentiality</h3>
                    <p className="text-muted-foreground">
                      Both parties agree to maintain confidentiality of proprietary information shared during the course of the business relationship. This obligation survives termination of services.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">7. Limitation of Liability</h3>
                    <p className="text-muted-foreground">
                      BMRGrowth shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from use of our services. Our total liability shall not exceed the amount paid by the client for the specific service giving rise to the claim.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">8. Termination</h3>
                    <p className="text-muted-foreground">
                      Either party may terminate services with written notice as specified in the service agreement. Clients remain responsible for payment of work completed through the termination date.
                    </p>
                  </section>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Privacy Policy */}
            <TabsContent value="privacy" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Policy</CardTitle>
                  <CardDescription>Last updated: January 2025</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <section>
                    <h3 className="text-xl font-semibold mb-3">1. Information We Collect</h3>
                    <p className="text-muted-foreground mb-3">We collect information you provide directly to us, including:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Contact information (name, email, phone number)</li>
                      <li>Company information and business details</li>
                      <li>Payment and billing information</li>
                      <li>Communications and correspondence</li>
                      <li>Project-specific information required for service delivery</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">2. How We Use Your Information</h3>
                    <p className="text-muted-foreground mb-3">We use collected information to:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Deliver and improve our services</li>
                      <li>Communicate with you about projects and services</li>
                      <li>Process payments and transactions</li>
                      <li>Send marketing communications (with your consent)</li>
                      <li>Analyze and improve our business operations</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">3. Information Sharing</h3>
                    <p className="text-muted-foreground">
                      We do not sell your personal information. We may share information with service providers who assist in our operations, when required by law, or with your explicit consent. All third parties are contractually obligated to maintain confidentiality.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">4. Data Security</h3>
                    <p className="text-muted-foreground">
                      We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">5. Your Rights</h3>
                    <p className="text-muted-foreground mb-3">You have the right to:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Access your personal information</li>
                      <li>Correct inaccurate information</li>
                      <li>Request deletion of your information</li>
                      <li>Opt-out of marketing communications</li>
                      <li>Withdraw consent where applicable</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">6. Data Retention</h3>
                    <p className="text-muted-foreground">
                      We retain your information for as long as necessary to provide services and comply with legal obligations. When no longer needed, we securely delete or anonymize your information.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">7. Contact Us</h3>
                    <p className="text-muted-foreground">
                      For privacy-related questions or to exercise your rights, contact us at: privacy@bmrgrowth.com
                    </p>
                  </section>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Cookie Policy */}
            <TabsContent value="cookies" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Cookie Policy</CardTitle>
                  <CardDescription>Last updated: January 2025</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <section>
                    <h3 className="text-xl font-semibold mb-3">1. What Are Cookies</h3>
                    <p className="text-muted-foreground">
                      Cookies are small text files stored on your device when you visit our website. They help us provide better functionality and analyze how our website is used.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">2. Types of Cookies We Use</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Essential Cookies</h4>
                        <p className="text-muted-foreground">
                          Required for the website to function properly. These cannot be disabled.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                        <p className="text-muted-foreground">
                          Help us understand how visitors interact with our website by collecting anonymous information.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Marketing Cookies</h4>
                        <p className="text-muted-foreground">
                          Track your visit across websites to display relevant advertisements and measure campaign effectiveness.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Functionality Cookies</h4>
                        <p className="text-muted-foreground">
                          Remember your preferences and settings to provide enhanced, personalized features.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">3. Third-Party Cookies</h3>
                    <p className="text-muted-foreground mb-3">
                      We use services from trusted third parties that may set cookies:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Google Analytics - for website analytics</li>
                      <li>Social media platforms - for sharing and engagement</li>
                      <li>Advertising networks - for marketing campaigns</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">4. Managing Cookies</h3>
                    <p className="text-muted-foreground">
                      You can control and manage cookies through your browser settings. Note that disabling cookies may affect website functionality. Most browsers allow you to refuse or accept cookies, delete existing cookies, or set preferences for certain websites.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">5. Updates to This Policy</h3>
                    <p className="text-muted-foreground">
                      We may update this Cookie Policy periodically. Changes will be posted on this page with an updated revision date.
                    </p>
                  </section>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Refund Policy */}
            <TabsContent value="refund" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Refund Policy</CardTitle>
                  <CardDescription>Last updated: January 2025</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <section>
                    <h3 className="text-xl font-semibold mb-3">1. General Policy</h3>
                    <p className="text-muted-foreground">
                      BMRGrowth is committed to client satisfaction. Our refund policy is designed to be fair while protecting the value of work completed and resources committed.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">2. Project-Based Services</h3>
                    <p className="text-muted-foreground mb-3">
                      For project-based engagements:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Deposits and initial payments are non-refundable once work begins</li>
                      <li>If you cancel mid-project, you're responsible for payment of completed milestones</li>
                      <li>Refunds may be considered if we fail to deliver agreed-upon milestones</li>
                      <li>Revision rounds are included as specified in your agreement; additional revisions are billable</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">3. Retainer Services</h3>
                    <p className="text-muted-foreground mb-3">
                      For ongoing retainer agreements:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Monthly retainer fees are billed in advance and are non-refundable</li>
                      <li>Either party may terminate with 30 days written notice</li>
                      <li>No refunds for partial months of service</li>
                      <li>Unused hours or budget do not roll over unless specified in agreement</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">4. Strategy Calls & Consultations</h3>
                    <p className="text-muted-foreground">
                      Initial strategy calls offered as complimentary are non-refundable as no payment is required. Paid consultation sessions are non-refundable once scheduled, but may be rescheduled with 48 hours notice.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">5. Advertising Campaign Management</h3>
                    <p className="text-muted-foreground mb-3">
                      For advertising services:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Management fees are separate from ad spend and are non-refundable</li>
                      <li>Ad spend paid to platforms (Google, Meta, etc.) is non-refundable</li>
                      <li>Campaign performance depends on multiple factors; we do not guarantee specific results</li>
                      <li>We commit to following best practices and continuous optimization</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">6. Requesting a Refund</h3>
                    <p className="text-muted-foreground mb-3">
                      To request a refund consideration:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Submit written request to billing@bmrgrowth.com</li>
                      <li>Include detailed explanation of the issue</li>
                      <li>Provide supporting documentation if applicable</li>
                      <li>Allow 10 business days for review and response</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">7. Dispute Resolution</h3>
                    <p className="text-muted-foreground">
                      If you're unsatisfied with our services, we encourage direct communication to resolve concerns. We're committed to finding fair solutions that respect both your investment and the value of work delivered.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3">8. Exceptions</h3>
                    <p className="text-muted-foreground">
                      Refunds may be considered on a case-by-case basis for extraordinary circumstances. All refund decisions are at the sole discretion of BMRGrowth management.
                    </p>
                  </section>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;