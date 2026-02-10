import Navbar from "@/components/Navbar";
import { ArrowRight, DollarSign, Users, Zap, Shield, CheckCircle2, ChevronDown, Sparkles, TrendingUp, Headphones, Bot, Puzzle, Star } from "lucide-react";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-6">
    {children}
  </div>
);

const PartnerProgramme = () => {
  const revenueData = [
    { clients: "10", monthly: "$2,150/mo", annual: "$25,800/year" },
    { clients: "25", monthly: "$5,375/mo", annual: "$64,500/year" },
    { clients: "50", monthly: "$10,750/mo", annual: "$129,000/year" },
    { clients: "100", monthly: "$21,500/mo", annual: "$258,000/year" },
    { clients: "200", monthly: "$43,000/mo", annual: "$516,000/year" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-28 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground text-sm font-semibold mb-6">
            <DollarSign className="w-4 h-4" />
            Integration Partner Program
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.15] mb-5">
            Turn Every Client Into{" "}
            <span className="relative inline-block">
              <span className="relative z-10">$200–$2,000+</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-accent/40 rounded" />
            </span>{" "}
            in Monthly Recurring Revenue
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-medium max-w-2xl mx-auto mb-4">
            No AI Expertise Needed. No Automation Skills Required. No New Services To Learn. Just Pure, Passive Income From Tools Your Clients Already NEED.
          </p>
          <a href="#how-it-works" className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-7 py-3.5 rounded-full font-bold hover:opacity-90 transition-opacity mt-4">
            Become a Partner <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-4 -mt-8 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg shadow-primary/5">
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
              The Shopify Agency Problem <span className="gradient-text">Nobody Talks About</span>
            </h2>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">You're Great At Shopify, But…</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Your revenue is capped by project-based work",
                "Clients churn after the build is done",
                "You can't compete with AI-powered agencies",
                "Adding new services means learning entirely new tools",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-3 px-4 rounded-lg bg-destructive/5 border border-destructive/10 text-sm text-muted-foreground">
                  <span className="text-destructive font-bold shrink-0">✕</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <SectionLabel>The Solution</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What If You Could Offer Premium AI & CRM Services <span className="gradient-text">WITHOUT Becoming An AI Expert?</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Bot, title: "AIVA AI Assistant", desc: "Enterprise-grade AI employee for your clients' stores. Sales, marketing, support — all automated." },
              { icon: Headphones, title: "Growth Spurt CRM", desc: "Full HighLevel-powered CRM. Funnels, email, SMS, automations — white-labeled for your agency." },
              { icon: Puzzle, title: "Seamless Integrations", desc: "Plug directly into existing Shopify stores. No migration, no disruption, no learning curve." },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md hover:border-primary/20 transition-all">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-4 gradient-subtle-bg scroll-mt-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <SectionLabel>Partner Benefits</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Here's What You Get <span className="gradient-text">(For FREE)</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Full AIVA AI platform access for your clients",
              "White-labeled Growth Spurt CRM (HighLevel)",
              "40% recurring revenue on every client",
              "Done-for-you onboarding & setup support",
              "Marketing materials & sales scripts",
              "Priority partner support channel",
              "Training & certification program",
              "No setup fees, no monthly costs to you",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-3 px-4 rounded-lg bg-card border border-border text-sm">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Calculator */}
      <section className="py-16 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <SectionLabel>Revenue Calculator</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Your <span className="gradient-text">Revenue Potential</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              Here's exactly how much recurring revenue YOU make when your clients sign up:
            </p>
          </div>

          {/* Table */}
          <div className="rounded-xl border border-border overflow-hidden mb-6">
            <div className="grid grid-cols-3 gradient-bg text-primary-foreground font-display font-bold text-sm">
              <div className="p-4">Your Clients</div>
              <div className="p-4">Monthly Revenue (YOU)</div>
              <div className="p-4">Annual Revenue (YOU)</div>
            </div>
            {revenueData.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 text-sm border-t border-border ${i === 3 ? "bg-primary/5 font-bold" : ""}`}>
                <div className="p-4 font-display font-bold text-foreground">{row.clients} Clients</div>
                <div className="p-4 gradient-text font-bold">{row.monthly}</div>
                <div className="p-4 text-muted-foreground">{row.annual}</div>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-muted/30 border border-border p-5 text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">How it works:</strong> Each client pays $538/mo total (HighLevel $97 + AIVA $297 + Integrations $47 + Blockchain $97). You earn 40% = <strong className="text-foreground">$215/mo per client</strong>. HighLevel reselling gets you an additional commission when you sell their Pro plan at $497/mo.
          </div>
        </div>
      </section>

      {/* Big Number */}
      <section className="py-16 px-4 gradient-subtle-bg">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            That's <span className="gradient-text">$21,500/Month</span> With Just 100 Clients
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            You probably already have 100+ Shopify clients. Imagine if just <strong className="text-foreground">HALF</strong> of them signed up.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            <div className="bg-card border border-border rounded-xl py-5 px-3">
              <div className="font-display text-3xl font-bold gradient-text">$0</div>
              <p className="text-xs text-muted-foreground mt-1">Your Cost</p>
            </div>
            <div className="bg-card border border-border rounded-xl py-5 px-3">
              <div className="font-display text-3xl font-bold gradient-text">40%</div>
              <p className="text-xs text-muted-foreground mt-1">Your Cut</p>
            </div>
            <div className="bg-card border border-border rounded-xl py-5 px-3">
              <div className="font-display text-3xl font-bold gradient-text">∞</div>
              <p className="text-xs text-muted-foreground mt-1">MRR Potential</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pure Profit */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="gradient-bg rounded-2xl p-8 md:p-10 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              This Isn't A Cost. It's Pure Profit.
            </h2>
            <p className="text-primary-foreground/80 text-base leading-relaxed max-w-2xl mx-auto mb-6">
              We're not asking you to buy anything. We're not charging you setup fees. We're not taking your money. We're <strong>GIVING</strong> you tools that make you money.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { emoji: "🏪", label: "Your clients win", desc: "AI automation & premium CRM" },
                { emoji: "💰", label: "You win", desc: "40% recurring revenue" },
                { emoji: "🚀", label: "We win", desc: "~20% after operating costs" },
              ].map((item, i) => (
                <div key={i} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-5 border border-primary-foreground/20">
                  <span className="text-2xl">{item.emoji}</span>
                  <p className="font-display font-bold text-primary-foreground text-sm mt-2">{item.label}</p>
                  <p className="text-primary-foreground/70 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="font-display font-bold text-primary-foreground text-lg mt-6">
              Everyone gets a <span className="underline decoration-accent decoration-2 underline-offset-4">GROWTH SPURT</span>
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4 gradient-subtle-bg scroll-mt-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <SectionLabel>Getting Started</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              How It Works <span className="gradient-text">(3 Simple Steps)</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { n: "01", title: "Sign Up as a Partner", desc: "Fill out a quick application. Get approved within 24 hours. Zero cost, zero risk." },
              { n: "02", title: "Plug In AIVA & CRM", desc: "We help you integrate AIVA and Growth Spurt CRM into your existing client workflow. No tech skills needed." },
              { n: "03", title: "Earn Recurring Revenue", desc: "Every client who signs up earns you $215+/mo in passive income. Stack clients, stack revenue." },
            ].map((step) => (
              <div key={step.n} className="flex gap-5 items-start border border-border rounded-xl p-6 bg-card hover:border-primary/20 transition-colors">
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <span className="font-display text-xl font-bold text-primary-foreground">{step.n}</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "Do I need AI or technical expertise?", a: "Absolutely not. We handle all the tech. You focus on your existing client relationships." },
              { q: "Is there any cost to join?", a: "Zero. No setup fees, no monthly fees, no hidden costs. You only earn money." },
              { q: "How do I get paid?", a: "Monthly payouts via direct deposit. You earn 40% of gross revenue from every client you refer." },
              { q: "What if my client cancels?", a: "Your recurring revenue adjusts accordingly, but with our retention tools, churn stays very low." },
              { q: "Can I white-label this for my agency?", a: "Yes! The Growth Spurt CRM is fully white-labeled. Present it as your own service." },
            ].map((faq, i) => (
              <details key={i} className="border border-border rounded-xl overflow-hidden group bg-card">
                <summary className="p-5 cursor-pointer flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <span className="font-display font-bold text-base">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-4 gradient-subtle-bg">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>
          <SectionLabel>Our Promise</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
            Our <span className="gradient-text">Guarantee</span> To You
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
            You plugin AIVA and Growth Spurt CRM into your existing Shopify agency. Your clients win (they get AI automation and premium CRM). You win (you earn 40% of gross revenue). We win (we get about 20% after operating costs). Everyone gets a GROWTH SPURT.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Our Clients <span className="gradient-text">Reviews</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { name: "Sarah M.", role: "Shopify Agency Owner", quote: "We added $8k/mo in recurring revenue within the first 2 months. This was a no-brainer." },
              { name: "James K.", role: "E-commerce Consultant", quote: "My clients love the AI features. I love the passive income. Win-win." },
              { name: "Priya R.", role: "Digital Marketing Agency", quote: "The onboarding was seamless. Our clients didn't even notice a change — except better results." },
            ].map((review, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/20 transition-all">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">"{review.quote}"</p>
                <div>
                  <p className="font-display font-bold text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="gradient-bg rounded-2xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
            <div className="relative z-10">
              <SectionLabel>Join Now</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Join 100+ Agencies Already Earning with Growth Spurt
              </h2>
              <p className="text-primary-foreground/80 text-base mb-8 max-w-xl mx-auto">
                Start earning recurring revenue from your existing clients today. Zero cost. Zero risk.
              </p>
              <a href="#" className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-8 py-4 rounded-full font-bold text-base hover:opacity-90 transition-opacity">
                Apply Now — It's Free <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="font-display text-xl font-bold gradient-text mb-2">AIVA</p>
          <p className="text-sm text-muted-foreground">© 2025 Growth Spurt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PartnerProgramme;
