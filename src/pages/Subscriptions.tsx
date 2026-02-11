import Navbar from "@/components/Navbar";
import { ArrowRight, CheckCircle2, ChevronDown, Zap, BarChart3, PauseCircle, SkipForward, Bell, Users, Globe, ShoppingCart, Shield, Star, RefreshCw } from "lucide-react";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-6">
    {children}
  </div>
);

const Subscriptions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-28 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground text-sm font-semibold mb-6">
            <RefreshCw className="w-4 h-4" />
            Shopify Subscription Management
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.15] mb-5">
            AIVA Subscriptions
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-medium max-w-2xl mx-auto mb-4">
            The Smartest Subscription Management for Shopify
          </p>
          <p className="text-sm text-primary-foreground/60 mb-8">
            Powered by AI. Integrated with HighLevel. Built for Growth.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <a href="#pricing" className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-7 py-3.5 rounded-full font-bold hover:opacity-90 transition-opacity">
              Install Free for 30 Days
            </a>
            <a href="#features" className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded-full font-bold hover:bg-primary-foreground/10 transition-colors">
              See Features <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs text-primary-foreground/50">Fully functional trial with AIVA — 7-day free trial for subscription</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 px-4 -mt-8 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-4 gap-4">
            {[
              { value: "500+", label: "Active Stores" },
              { value: "$2M+", label: "MRR Managed" },
              { value: "99.9%", label: "Uptime" },
              { value: "4.5/5", label: "Rating" },
            ].map((s, i) => (
              <div key={i} className="text-center py-5 px-3 rounded-xl border border-border bg-card">
                <div className="font-display text-2xl md:text-3xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Point */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Tired of Subscription Apps That <span className="gradient-text">Don't Integrate?</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              Other subscription apps leave you with bad data, extra reports, and tools that don't talk to each other. Not us. Aiva plays nice with everything.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Zap, title: "HighLevel Integration", desc: "Subscriptions flow directly into your HighLevel CRM. Trigger workflows, segment users, automate follow-ups." },
              { icon: BarChart3, title: "AI-Powered Planning", desc: "Aiva automatically analyses and optimizes your subscription offer for more signups and revenue." },
              { icon: Star, title: "Real-Time Analytics", desc: "AIVA shares data across its other services to give you all the metrics you need in one unified dashboard." },
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

      {/* Features Grid */}
      <section id="features" className="py-16 px-4 gradient-subtle-bg scroll-mt-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <SectionLabel>Features</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to <span className="gradient-text">Manage Subscriptions</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              Built on Shopify's native subscription API for stability and compliance.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Zap, title: "Instant Install", desc: "One-click install on Shopify. No coding, no config. Live in minutes." },
              { icon: PauseCircle, title: "Pause & Resume", desc: "Let customers pause subscriptions instead of cancelling. Reduce churn instantly." },
              { icon: SkipForward, title: "Skip & Reschedule", desc: "Customers manage their schedule — fewer support tickets, more flexibility." },
              { icon: Shield, title: "Smart Dunning", desc: "Automatically retry failed payments with intelligent timing to recover revenue." },
              { icon: Bell, title: "Email Notifications", desc: "Automated emails for upcoming renewals, payment issues, and subscription changes." },
              { icon: Users, title: "Customer Portal", desc: "Branded self-service portal where customers manage their own subscriptions." },
              { icon: Globe, title: "Multi Currency", desc: "Sell subscriptions globally with support for multiple currencies." },
              { icon: ShoppingCart, title: "Shop Now", desc: "Let subscribers add one-time products to their next subscription order." },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/20 transition-all">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-sm mb-1.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Switching / Migration */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <SectionLabel>Migration</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Switching from <span className="gradient-text">Another App?</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              We make migration seamless. Import your subscribers in minutes, not days.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { name: "Recharge", emoji: "🔄" },
              { name: "Bold Subscriptions", emoji: "💪" },
              { name: "Seal Subscriptions", emoji: "🦭" },
              { name: "PayWhirl", emoji: "🌀" },
            ].map((app, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/20 transition-colors">
                <span className="text-3xl">{app.emoji}</span>
                <p className="font-display font-bold text-sm mt-3">{app.name}</p>
              </div>
            ))}
          </div>

          {/* Migration Guarantee */}
          <div className="bg-muted/30 border border-border rounded-2xl p-6 md:p-8">
            <h3 className="font-display font-bold text-xl mb-5 text-center">Migration Guarantee</h3>
            <div className="space-y-3 max-w-md mx-auto">
              {[
                "Zero downtime during migration",
                "All subscriber data preserved",
                "Billing schedules maintained",
                "Payment methods safely transferred",
                "Free assistance upon request for you",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-4 gradient-subtle-bg scroll-mt-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-muted-foreground text-base">
              Plans that grow with your Shopify store. No hidden fees, no surprises.
            </p>
          </div>

          <div className="max-w-sm mx-auto">
            <div className="bg-card border-2 border-primary rounded-2xl p-8 text-center shadow-lg shadow-primary/10">
              <span className="gradient-bg text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">AIVA Core</span>
              <div className="mt-5 mb-2">
                <span className="font-display text-5xl font-bold gradient-text">$97</span>
                <span className="text-muted-foreground text-sm">/mo</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6">Everything you need to run a successful subscription on Shopify.</p>
              <div className="space-y-3 text-left mb-8">
                {[
                  "AIVA Full-service Subscription workflow",
                  "AIVA Subscription automations",
                  "AIVA Sales Integration",
                  "CRM & HighLevel Integration",
                  "Smart Dunning & Revenue",
                  "Analytics Dashboard",
                  "Customer Self-Service Portal",
                  "Priority Support",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#" className="block w-full gradient-bg text-primary-foreground py-3.5 rounded-full font-bold hover:opacity-90 transition-opacity text-center">
                Start 30 Day Free Trial
              </a>
            </div>
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
              { q: "How long does migration take?", a: "Most migrations complete in under an hour. Our automated import tool handles everything, and our team is available for free to give you support." },
              { q: "Will my customers need to re-enter payment info?", a: "No. Our migration process safely transfers payment methods, so nothing changes for your customers. It's a seamless switch." },
              { q: "Do I need HighLevel to use AIVA Subscriptions?", a: "No, but it's recommended. AIVA Subscriptions works as a standalone tool, however the CRM & AI automation features unlock much more value." },
              { q: "Is there a transaction fee?", a: "We don't charge any additional transaction fees. Just the flat $97/mo subscription fee." },
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

      {/* Final CTA */}
      <section className="py-16 px-4 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-5">
            Ready to Transform Your Subscriptions?
          </h2>
          <p className="text-primary-foreground/80 text-base max-w-xl mx-auto mb-8">
            Join hundreds of Shopify stores using AIVA for smarter recurring revenue.
          </p>
          <a href="#" className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity">
            Start Your Free Trial
          </a>
          <p className="text-xs text-primary-foreground/50 mt-4">30-day free trial. No credit card required.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="font-display text-2xl font-bold gradient-text mb-2">AIVA</p>
          <p className="text-sm text-muted-foreground">© 2025 Growth Spurt Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Subscriptions;
