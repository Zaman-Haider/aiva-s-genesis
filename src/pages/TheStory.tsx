import Navbar from "@/components/Navbar";
import { ArrowRight, Clock, User, Zap, DollarSign, TrendingUp, Shield, Bot, Sparkles, Rocket, Users, Code2, Database, Layers, Globe } from "lucide-react";

const TheStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-28 pb-24 px-3 md:px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            5 Early Adopter Spots Available
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-6">
            How I Built an Enterprise SaaS Platform in{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Two Weeks</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-accent/40 -z-0 rounded" />
            </span>{" "}
            With AI
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-display font-medium mb-10">
            (And Why Traditional Development is Dead)
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/70 text-sm mb-10">
            <span className="flex items-center gap-2"><User className="w-4 h-4" /> Tim Thomas</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> November 14, 2025</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 6-7 min read</span>
          </div>
          <p className="text-primary-foreground/60 text-sm max-w-xl mx-auto">
            Help refine Aiva, in return get 1:1 expert consultation from me and Aiva FREE for 3 months!
          </p>
        </div>
      </section>

      {/* TL;DR Banner */}
      <section className="py-16 px-3 md:px-4 gradient-subtle-bg">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-background border border-border rounded-3xl p-8 md:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <span className="gradient-bg text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">TL;DR</span>
            </div>
            <p className="text-foreground text-lg leading-relaxed font-medium mb-4">
              I built <span className="gradient-text font-bold">Aiva</span>, an AI employee for online merchants. One goal — increase revenue, cut costs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What should've taken a team of 10 developers, months of planning, and a six-figure budget was built in ~100 hours at near-zero cost, with production-ready integrations, enterprise-class security, and real merchants already onboarded.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="py-12 px-3 md:px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Code2, value: "25,000+", label: "Lines of Code" },
              { icon: Database, value: "58", label: "Database Tables" },
              { icon: Layers, value: "47", label: "API Endpoints" },
              { icon: Globe, value: "12", label: "Integrations" },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 rounded-2xl border border-border hover:shadow-md transition-shadow">
                <s.icon className="w-5 h-5 mx-auto mb-3 text-primary" />
                <div className="font-display text-2xl md:text-3xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="px-3 md:px-4 pb-16">
        <div className="container mx-auto max-w-3xl">
          <div className="border border-border rounded-2xl p-6 md:p-8">
            <h3 className="font-display font-bold text-lg mb-5 flex items-center gap-2">
              📖 Contents
            </h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              {[
                "The Vision That Seemed Impossible",
                "What I Built: The AIVA Platform",
                "The Mind-Blowing Numbers",
                "How Claude Code Changed Everything",
                "Features That Would've Been Impossible",
                "Apps & Services Aiva Replaces",
                "The Dark Truth About Traditional Dev",
                "Why This Terrifies Agencies",
                "The Future Is Already Here",
                "What I'm Building Next",
                "The Message to Founders",
                "Conclusion",
              ].map((s, i) => (
                <a key={i} href={`#section-${i}`} className="text-sm text-muted-foreground hover:text-primary transition-colors py-1.5 flex items-center gap-2 group">
                  <span className="w-5 h-5 rounded-full bg-muted text-[10px] font-bold flex items-center justify-center group-hover:gradient-bg group-hover:text-primary-foreground transition-all">{i + 1}</span>
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 0: Vision */}
      <section id="section-0" className="py-16 px-3 md:px-4 scroll-mt-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            The Vision That Seemed <span className="gradient-text">Impossible</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            Two weeks ago I set out to build something most CTOs would call naïve: a full-stack, AI-powered SaaS platform that replaces <strong className="text-foreground">$7,000+ per month</strong> in software and labour costs — while making merchants more money.
          </p>
          <p className="text-foreground font-display font-bold text-xl mb-6">
            Not a single tool. Not a toy MVP. A complete, enterprise-grade system.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              "Klaviyo/MailChimp (email/SMS)",
              "Recharge/Bold (subscriptions)",
              "UpPromote/BixGrow (affiliates)",
              "Gorgias (customer support)",
              "Jasper/Copy.ai (content)",
              "AdCreative.ai (ad generation)",
              "Staff & Agency fees ($3-5k+/mo)",
              "Revenue intelligence (unique)",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full gradient-bg shrink-0" /> {item}
              </div>
            ))}
          </div>
          <div className="gradient-subtle-bg rounded-2xl p-6 border border-border">
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">My resources?</strong> One human (me). One Claude Max subscription. Determination. Caffeine. Not much sleep. And somehow — I shipped it. In production. For real clients.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: What I Built - Skills */}
      <section id="section-1" className="py-16 px-3 md:px-4 gradient-subtle-bg scroll-mt-24">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What I Built: The <span className="gradient-text">AIVA Platform</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AIVA — AI Virtual Assistant. A modular AI employee whose skills toggle on/off per merchant. One powerful assistant that learns your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: TrendingUp,
                emoji: "🎯",
                title: "Sales Skill",
                subtitle: "Revenue Multiplication Engine",
                cost: "$25k–50k setup",
                time: "2 days",
                features: ["RFM Analysis & segmentation", "Cart Recovery (3-stage AI)", "Churn Prediction & win-back", "Post-Purchase Upsells"],
                impact: "More revenue, repeat orders, LTV",
              },
              {
                icon: Sparkles,
                emoji: "📢",
                title: "Marketing Skill",
                subtitle: "The Content Machine",
                cost: "$2k–5k/month",
                time: "1 day",
                features: ["SEO blog generation", "Social post automation", "Competitor tracking", "Email sequences & lead magnets"],
                impact: "50–100% traffic increase",
              },
              {
                icon: Zap,
                emoji: "🔄",
                title: "Subscription Skill",
                subtitle: "Retention Powerhouse",
                cost: "$200–500/mo + %",
                time: "2 days",
                features: ["Recharge, Seal, Bold, Appstle, Loop", "Churn prediction & detection", "Zero friction SMS upsells", "Dunning flows"],
                impact: "Churn reduction, MRR uplift",
              },
              {
                icon: Bot,
                emoji: "💬",
                title: "Customer Service",
                subtitle: "24/7 Support Team",
                cost: "$30–40k/year",
                time: "½ day",
                features: ["Instant responses & order tracking", "Returns/exchanges handling", "Product recommendations", "Sentiment detection & escalation"],
                impact: "60–80% auto-resolved",
              },
              {
                icon: Sparkles,
                emoji: "🎨",
                title: "Design Skill",
                subtitle: "Creative at Scale",
                cost: "$2k–5k/month",
                time: "1 day",
                features: ["Ad creative generation", "Video ads with voiceovers", "A/B variations", "Brand-consistent templates"],
                impact: "50–70% cost reduction",
              },
              {
                icon: Users,
                emoji: "🤝",
                title: "Affiliate Platform",
                subtitle: "Marketing Powerhouse",
                cost: "$2k/month (Impact.com)",
                time: "2 days",
                features: ["Two-tier MLM commissions", "LTV-based payouts & fraud detection", "Dynamic discount codes", "Tiered bonuses & real-time tracking"],
                impact: "Full affiliate system in 48 hrs",
              },
            ].map((skill, i) => (
              <div key={i} className="bg-background border border-border rounded-2xl p-6 hover:shadow-lg transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{skill.emoji}</span>
                  <div className="flex gap-2">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full gradient-bg text-primary-foreground">{skill.cost}</span>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-muted text-muted-foreground">⚡ {skill.time}</span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg">{skill.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{skill.subtitle}</p>
                <ul className="space-y-1.5 mb-4">
                  {skill.features.map((f, j) => (
                    <li key={j} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full gradient-bg shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-border">
                  <p className="text-xs font-semibold">
                    <span className="gradient-text">Impact:</span>{" "}
                    <span className="text-muted-foreground">{skill.impact}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Extra skills */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              { emoji: "🎲", title: "Promotions", desc: "Blockchain-powered fair prize draws with Chainlink VRF" },
              { emoji: "🔒", title: "Enterprise Security", desc: "Rate limiting, telemetry, monitoring, multi-tenant" },
              { emoji: "⚙️", title: "Job Scheduling", desc: "Hangfire background jobs with intelligent processing" },
            ].map((item, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-5 text-center">
                <span className="text-2xl block mb-2">{item.emoji}</span>
                <h4 className="font-display font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Numbers - Big comparison */}
      <section id="section-2" className="py-20 px-3 md:px-4 scroll-mt-24">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            The Mind-Blowing <span className="gradient-text">Numbers</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border-2 border-border rounded-3xl p-8 relative">
              <span className="absolute -top-3 left-6 px-3 py-1 bg-background border border-border rounded-full text-xs font-semibold text-muted-foreground">Traditional</span>
              <div className="font-display text-5xl font-bold text-foreground mb-2 mt-2">$500,000<span className="text-2xl">+</span></div>
              <p className="text-muted-foreground">12+ months • Team of 10+</p>
            </div>
            <div className="gradient-bg rounded-3xl p-8 relative">
              <span className="absolute -top-3 left-6 px-3 py-1 bg-background rounded-full text-xs font-semibold text-foreground">With AI</span>
              <div className="font-display text-5xl font-bold text-primary-foreground mb-2 mt-2">$190</div>
              <p className="text-primary-foreground/80">2 weeks • 1 person</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-8 rounded-2xl gradient-subtle-bg">
              <div className="font-display text-4xl md:text-5xl font-bold gradient-text">25x</div>
              <p className="text-sm text-muted-foreground mt-2">Cost Reduction</p>
            </div>
            <div className="text-center p-8 rounded-2xl gradient-subtle-bg">
              <div className="font-display text-4xl md:text-5xl font-bold gradient-text">26x</div>
              <p className="text-sm text-muted-foreground mt-2">Faster to Market</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Claude Code */}
      <section id="section-3" className="py-16 px-3 md:px-4 gradient-subtle-bg scroll-mt-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            How Claude Code <span className="gradient-text">Changed Everything</span>
          </h2>

          <blockquote className="relative gradient-bg rounded-2xl p-8 mb-10 text-primary-foreground">
            <span className="text-6xl absolute top-2 left-4 opacity-20 font-serif">"</span>
            <p className="font-display text-xl font-bold leading-relaxed relative z-10">
              Claude Code didn't just speed up development — it redefined what "possible" means.
            </p>
          </blockquote>

          <p className="text-muted-foreground leading-relaxed mb-8">
            It thinks like a senior architect, writes like a machine, and iterates like a world-class engineering team. It designs schemas, writes migrations, implements services, integrates APIs, documents everything. And it never gets tired.
          </p>

          <h3 className="font-display text-xl font-bold mb-6">The Workflow</h3>
          <div className="space-y-4 mb-10">
            {[
              { step: "01", title: "Describe the outcome, not the code", desc: "Full system requirements with production constraints — not 'write a function.'" },
              { step: "02", title: "Get the whole blueprint", desc: "Tables, models, DTOs, services, repo patterns, jobs, error handling — all at once." },
              { step: "03", title: "Iterate & refine", desc: "Like a senior architect beside me, bug fixing and enhancing in real time." },
              { step: "04", title: "Ship it", desc: "The speed is obscene." },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 items-start bg-background border border-border rounded-xl p-5">
                <span className="font-display text-2xl font-bold gradient-text shrink-0">{item.step}</span>
                <div>
                  <p className="font-display font-bold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-background border border-border rounded-2xl p-6">
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">A word of caution:</strong> 25 years experience delivering websites from 4 to 7 figures gave me the ability to make this happen. You can't just watch a few 'vibe coding' videos and deliver something like this. Decades of industry experience matters.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Impossible Features */}
      <section id="section-4" className="py-16 px-3 md:px-4 scroll-mt-24">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Features That Would've Been <span className="gradient-text">Impossible</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">Traditionally, these features alone would each take months of dedicated engineering.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Zap, title: "Zero-Latency Subscription Intelligence", desc: "Real-time churn signal detection. Normally a full-time data engineering nightmare." },
              { icon: Users, title: "Instant Affiliate Networks", desc: "Complete multi-tier system rival to Impact.com ($2k/mo) — built in 48 hours." },
              { icon: Sparkles, title: "End-to-End Creative Production", desc: "Prompt → Script → Voiceover → Video → Ads → Scheduling. All automated." },
              { icon: Rocket, title: "Dynamic AI-Driven Onboarding", desc: "Pop in your API key and Aiva sets everything up. Workflows, pipelines, templates — done." },
            ].map((f, i) => (
              <div key={i} className="border border-border rounded-2xl p-6 flex gap-4 items-start hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <f.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base mb-1">{f.title}</h4>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Apps Replaced */}
      <section id="section-5" className="py-16 px-3 md:px-4 gradient-subtle-bg scroll-mt-24">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Apps & Services <span className="gradient-text">Aiva Replaces</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { cat: "Marketing", items: ["Klaviyo", "Mailchimp", "Omnisend", "Canva Pro", "AdCreative.ai"] },
              { cat: "Subscriptions", items: ["Recharge", "Appstle", "Bold", "Loop"] },
              { cat: "Support", items: ["Gorgias", "Zendesk"] },
              { cat: "Consulting", items: ["Copywriters", "Strategists", "Analysts", "Data scientists"] },
            ].map((g, i) => (
              <div key={i} className="bg-background border border-border rounded-2xl p-5">
                <h4 className="font-display font-bold text-sm mb-3 gradient-text uppercase tracking-wider">{g.cat}</h4>
                <ul className="space-y-2">
                  {g.items.map((item, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full gradient-bg shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="gradient-bg rounded-2xl p-8 text-center text-primary-foreground">
            <DollarSign className="w-8 h-8 mx-auto mb-3 opacity-80" />
            <p className="font-display text-3xl md:text-4xl font-bold mb-2">$5,000–$15,000/month saved</p>
            <p className="text-sm opacity-80">Plus increased revenue, retention, LTV, and unlimited automation</p>
          </div>
        </div>
      </section>

      {/* Section 6: Dark Truth */}
      <section id="section-6" className="py-16 px-3 md:px-4 scroll-mt-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            The Dark Truth About <span className="gradient-text">Traditional Development</span>
          </h2>
          <div className="space-y-4 mb-8">
            {[
              "Developers who refuse to use AI will ship 10-20x slower.",
              "Agencies will lose clients to AI-native competitors.",
              "Startups will die before launch if they ignore AI tooling.",
              "Old products will stagnate while AI-first teams sprint ahead.",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                <Zap className="w-5 h-5 text-secondary shrink-0" />
                <p className="text-sm text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
          <blockquote className="gradient-bg rounded-2xl p-8 text-primary-foreground text-center">
            <p className="font-display text-xl md:text-2xl font-bold">
              "Software isn't expensive anymore.<br />Inefficiency is expensive."
            </p>
          </blockquote>
        </div>
      </section>

      {/* Section 7: Agencies */}
      <section id="section-7" className="py-16 px-3 md:px-4 gradient-subtle-bg scroll-mt-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Why This <span className="gradient-text">Terrifies Agencies</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I've built and run an agency for 25 years. I know their margins, bottlenecks, and weaknesses. That's why I developed Aiva — AI SwaS (Software with a Service).
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { title: "Labour Hours", desc: "Agencies sell time. Aiva kills that model.", icon: Clock },
              { title: "Skill Moats", desc: "Aiva writes ads, scripts, emails, funnels, code.", icon: Shield },
              { title: "Retainers", desc: "AI does 80% of work. Why pay $6k/month?", icon: DollarSign },
            ].map((item, i) => (
              <div key={i} className="bg-background border border-border rounded-2xl p-5 text-center">
                <item.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
                <h4 className="font-display font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-background border border-border rounded-2xl p-6">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Agencies survive only by pivoting into AI orchestration and automation consulting. If you're an Agency — become an <strong className="text-foreground">Aiva Partner</strong>. We build. You sell. We both profit.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Future */}
      <section id="section-8" className="py-16 px-3 md:px-4 scroll-mt-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            The Future Is <span className="gradient-text">Already Here</span>
          </h2>
          <blockquote className="gradient-bg rounded-2xl p-8 text-primary-foreground text-center mb-10">
            <p className="font-display text-xl md:text-2xl font-bold">
              "The founder who masters AI will beat the company with 50 employees who does not."
            </p>
          </blockquote>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-border rounded-2xl p-6 text-center">
              <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider font-semibold">The Old Way</p>
              <p className="font-display text-xl font-bold text-foreground">Money → Talent → Speed</p>
            </div>
            <div className="gradient-bg rounded-2xl p-6 text-center">
              <p className="text-xs text-primary-foreground/70 mb-3 uppercase tracking-wider font-semibold">The New Way</p>
              <p className="font-display text-xl font-bold text-primary-foreground">Knowledge → Prompts → Speed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Building Next */}
      <section id="section-9" className="py-16 px-3 md:px-4 gradient-subtle-bg scroll-mt-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            What I'm <span className="gradient-text">Building Next</span>
          </h2>
          <div className="space-y-3">
            {[
              { title: "Aiva Agents", desc: "Separate workers for ads, SEO, email, CRO" },
              { title: "Knowledge Vault", desc: "Encrypted merchant intelligence, zero-knowledge proofs" },
              { title: "Aiva Messenger", desc: "Unified WhatsApp/SMS/Messenger/IG hub" },
              { title: "Pricewatch", desc: "Real-time discount alerts for bargain hunters" },
              { title: "Growth Loops", desc: "Autonomous growth experiments, fully automated" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-background border border-border rounded-xl p-4 hover:shadow-md transition-shadow">
                <span className="w-8 h-8 rounded-lg gradient-bg text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                <div>
                  <p className="font-display font-bold text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Message to Founders */}
      <section id="section-10" className="py-16 px-3 md:px-4 scroll-mt-24">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            The Message to <span className="gradient-text">Other Founders</span>
          </h2>
          <div className="gradient-subtle-bg border border-border rounded-3xl p-8 md:p-12">
            <p className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">You don't need a team.</p>
            <p className="text-muted-foreground text-lg mb-8">You need one good AI partner and relentless execution.</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                "A vision that scares you",
                "The courage to start",
                "AI tools that multiply 100x",
              ].map((item, i) => (
                <div key={i} className="bg-background rounded-xl p-4 border border-border">
                  <p className="text-sm font-medium text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Conclusion */}
      <section id="section-11" className="py-20 px-3 md:px-4 scroll-mt-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="gradient-text">Conclusion</span>
          </h2>
          <div className="text-center mb-10">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              With AI, a solo founder can outpace entire product teams. A bootstrapper can out-innovate VC-backed companies.
            </p>
            <p className="font-display text-2xl font-bold text-foreground mb-8">Aiva is proof.</p>
          </div>

          <div className="gradient-bg rounded-3xl p-10 md:p-12 text-center text-primary-foreground">
            <Rocket className="w-10 h-10 mx-auto mb-4 opacity-80" />
            <p className="font-display text-xl md:text-2xl font-bold mb-4">
              Follow Aiva's journey. Follow my journey.
            </p>
            <p className="text-sm opacity-80 max-w-lg mx-auto mb-2">
              This was her conception story. From a seed in my mind, gestated in just 2 weeks. She's just been born. Ready to find her feet and rapidly master the skills I gave her.
            </p>
            <p className="text-lg font-bold mt-4">
              Her growth spurt will be rapid. 💥
            </p>
            <a href="#" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3 rounded-full font-semibold mt-6 hover:bg-background/90 transition-colors text-sm">
              Get Early Access <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-3 md:px-4">
        <div className="container mx-auto max-w-4xl flex items-center justify-between">
          <span className="font-display text-xl font-bold gradient-text">AIVA</span>
          <span className="text-sm text-muted-foreground">© 2025 Aiva. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default TheStory;
