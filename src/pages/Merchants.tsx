import Navbar from "@/components/Navbar";
import { ArrowRight, Bot, BarChart3, Link2, Check } from "lucide-react";
import { useState } from "react";

const Merchants = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    companyName: "",
    storeUrl: "",
    skills: [] as string[],
    revenue: "",
    otherApps: "",
    comments: "",
  });

  const skillOptions = [
    "CRM and Customer Service",
    "Subscriptions",
    "Marketing",
    "Sales / Lead Nurture",
    "Affiliate Rewards",
    "Analytics & Reporting",
    "Ad generation (image & video)",
    "Custom built skills",
  ];

  const handleSkillToggle = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-primary-foreground/70 uppercase tracking-widest text-sm font-semibold mb-4">
            Built for Shopify
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Grow Your Business with AI Powered{" "}
            <span className="underline decoration-accent decoration-4 underline-offset-8">
              Automation for Ecommerce
            </span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-12">
            AIVA + Growth Spurt CRM gives you enterprise-grade AI automation and
            customer relationship management at a fraction of the cost. Scale
            your e-commerce business faster than ever.
          </p>
        </div>
      </section>

      {/* 3 Feature Cards */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Bot className="w-6 h-6" />,
                title: "5 AI Assistants",
                color: "text-primary",
                desc: "Customer Service, Sales, Marketing, Subscription Management, and Design AIVAs work 24/7 to automate your business operations.",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Complete CRM System",
                color: "text-secondary",
                desc: "HighLevel CRM integration for email marketing, SMS campaigns, pipeline management, and conversion optimization.",
              },
              {
                icon: <Link2 className="w-6 h-6" />,
                title: "Seamless Integrations",
                color: "text-accent",
                desc: "Works with Shopify, WordPress, WooCommerce, and all your existing tools. Setup takes minutes, not months.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className={`${card.color} mb-3`}>{card.icon}</div>
                <h3 className={`font-display font-bold text-lg mb-2 ${card.color}`}>
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-xl">
          <div className="gradient-bg rounded-3xl p-10 text-center text-primary-foreground">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              Simple, Transparent Pricing
            </h2>
            <div className="mb-2">
              <span className="font-display text-6xl font-extrabold text-accent">
                $497
              </span>
              <span className="text-primary-foreground/70 text-lg">/month</span>
            </div>
            <p className="font-display font-bold text-xl mb-8">
              FREE 6 week trial!
            </p>
            <div className="space-y-4 text-left max-w-sm mx-auto mb-10">
              {[
                "AI Virtual Assistant (Aiva) with ALL skills",
                "HighLevel CRM Platform – ALL features",
                "WordPress/Shopify Integration (more coming soon)",
                "Blockchain Verification (optional)",
                "Growth Spurt Academy (training, webinars, resources)",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 border-b border-primary-foreground/20 pb-3"
                >
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="#merchant-form"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-full font-bold hover:opacity-90 transition-opacity"
            >
              Get Started For FREE <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="merchant-form" className="py-16 px-6 gradient-subtle-bg">
        <div className="container mx-auto max-w-lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-1.5">Full Name</label>
              <input
                type="text"
                placeholder="Firstname Lastname"
                className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5">
                Mobile <span className="text-destructive">*</span>
              </label>
              <input
                type="tel"
                placeholder="+Phone"
                required
                className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5">
                Email <span className="text-destructive">*</span>
              </label>
              <input
                type="email"
                placeholder="email"
                required
                className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5">Company/store name</label>
              <input
                type="text"
                placeholder="Legal Name"
                className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5">Store URL</label>
              <input
                type="url"
                placeholder="Enter your Shopify or WooCommerce url"
                className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                value={formData.storeUrl}
                onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
              />
            </div>

            {/* Skills checkboxes */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Which Aiva skills are you interested in?
              </label>
              <div className="space-y-2">
                {skillOptions.map((skill) => (
                  <label key={skill} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.skills.includes(skill)}
                      onChange={() => handleSkillToggle(skill)}
                      className="rounded border-border text-primary focus:ring-ring"
                    />
                    <span className="text-sm text-muted-foreground">{skill}</span>
                  </label>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Select as many as you like.</p>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5">Ecommerce revenue per month</label>
              <select
                className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                value={formData.revenue}
                onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
              >
                <option value="">Approximately monthly revenue in your website?</option>
                <option value="0-10k">$0 - $10k</option>
                <option value="10k-50k">$10k - $50k</option>
                <option value="50k-100k">$50k - $100k</option>
                <option value="100k-500k">$100k - $500k</option>
                <option value="500k+">$500k+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5">Other apps/systems I use</label>
              <select
                className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                value={formData.otherApps}
                onChange={(e) => setFormData({ ...formData, otherApps: e.target.value })}
              >
                <option value="">Select all apps you use (or tell us)</option>
                <option value="klaviyo">Klaviyo</option>
                <option value="recharge">Recharge</option>
                <option value="gorgias">Gorgias</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5">
                Any additional comments or questions?
              </label>
              <textarea
                placeholder="Anything else we should know?"
                rows={3}
                className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                value={formData.comments}
                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full gradient-bg text-primary-foreground py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
            >
              NEXT
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            <div>
              <span className="font-display text-2xl font-bold gradient-text block mb-2">AIVA</span>
              <p className="text-sm text-primary-foreground/60 max-w-xs">
                Highly intelligent AI growth automation for Shopify and WooCommerce websites.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-sm mb-3">Start a conversation</h4>
                <p className="text-sm text-primary-foreground/60">info@getaiva.ai</p>
                <p className="text-sm text-primary-foreground/60">+1 (000) 000-0000</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-3">Offices</h4>
                <p className="text-sm text-primary-foreground/60">Las Vegas – Grand Entities</p>
                <p className="text-sm text-primary-foreground/60">Los Angeles – Hollywood</p>
                <p className="text-sm text-primary-foreground/60">Philadelphia – Center City</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 pt-6 flex items-center justify-between">
            <span className="text-xs text-primary-foreground/40">
              © Copyright 2026 Getaiva LLC. All rights reserved.
            </span>
            <div className="flex gap-4 text-xs text-primary-foreground/40">
              <a href="#" className="hover:text-primary-foreground/70">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground/70">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Merchants;
