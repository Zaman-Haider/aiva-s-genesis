import Navbar from "@/components/Navbar";
import { ArrowRight, Clock, User, Zap, DollarSign, TrendingUp, Shield, Bot, Sparkles, Rocket, Users, Code2, Database, Layers, Globe, CheckCircle2, ArrowDown } from "lucide-react";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
    {children}
  </div>
);

const TheStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-28 pb-20 px-3 md:px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            5 Early Adopter Spots Available
          </div>
          <h1 className="font-display text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-primary-foreground leading-[1.15] mb-5">
            How I Built an Enterprise SaaS in{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Two Weeks</span>
              <span className="absolute bottom-0.5 left-0 right-0 h-2.5 bg-accent/40 rounded" />
            </span>{" "}
            With AI
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-medium mb-8">
            And Why Traditional Development is Dead
          </p>
          <div className="flex flex-wrap justify-center gap-5 text-primary-foreground/60 text-xs mb-6">
            <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> Tim Thomas</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Nov 14, 2025</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 6-7 min read</span>
          </div>
          <div className="flex justify-center">
            <a href="#section-0" className="flex items-center gap-1 text-primary-foreground/50 text-xs hover:text-primary-foreground/80 transition-colors">
              Scroll to read <ArrowDown className="w-3 h-3 animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="py-12 px-3 md:px-4 -mt-8 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg shadow-primary/5">
            <span className="gradient-bg text-primary-foreground px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest">Summary</span>
            <p className="text-foreground text-base leading-relaxed font-medium mt-4 mb-3">
              I built <span className="gradient-text font-bold">Aiva</span> — an AI employee for e-commerce merchants. One goal: increase revenue, cut costs.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              What should've taken 10 developers and 6 figures was built in ~100 hours at near-zero cost, with production-ready integrations and real merchants onboarded.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-10 px-3 md:px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="grid grid-cols-4 gap-3">
            {[
              { icon: Code2, value: "25k+", label: "Lines" },
              { icon: Database, value: "58", label: "Tables" },
              { icon: Layers, value: "47", label: "APIs" },
              { icon: Globe, value: "12", label: "Integrations" },
            ].map((s, i) => (
              <div key={i} className="text-center py-4 px-2 rounded-xl border border-border bg-card">
                <s.icon className="w-4 h-4 mx-auto mb-2 text-primary" />
                <div className="font-display text-xl md:text-2xl font-bold gradient-text">{s.value}</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="px-3 md:px-4 pb-12">
        <div className="container mx-auto max-w-3xl">
          <details className="border border-border rounded-xl overflow-hidden group">
            <summary className="p-4 cursor-pointer flex items-center justify-between hover:bg-muted/50 transition-colors">
              <span className="font-display font-bold text-sm flex items-center gap-2">📖 Table of Contents</span>
              <ArrowDown className="w-4 h-4 text-muted-foreground group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-4 pb-4 grid grid-cols-2 gap-x-6 gap-y-1">
              {[
                "The Vision", "The AIVA Platform", "The Numbers", "Claude Code",
                "Impossible Features", "Apps Replaced", "Traditional Dev is Dead",
                "Why Agencies Fear This", "The Future", "What's Next", "To Founders", "Conclusion",
              ].map((s, i) => (
                <a key={i} href={`#section-${i}`} className="text-xs text-muted-foreground hover:text-primary transition-colors py-1.5 flex items-center gap-2">
                  <span className="w-4 h-4 rounded bg-muted text-[9px] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                  {s}
                </a>
              ))}
            </div>
          </details>
        </div>
      </section>

      {/* Section 0: Vision */}
      <section id="section-0" className="py-14 px-3 md:px-4 scroll-mt-20">
        <div className="container mx-auto max-w-3xl">
          <SectionLabel>The Beginning</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
            The Vision That Seemed <span className="gradient-text">Impossible</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            I set out to build a full-stack, AI-powered SaaS that replaces <strong className="text-foreground">$7,000+/month</strong> in software and labour costs — while making merchants more money.
          </p>
          <p className="text-foreground font-display font-bold text-lg mb-5">
            Not a toy MVP. A complete, enterprise-grade system that replaces:
          </p>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {[
              "Klaviyo/MailChimp", "Recharge/Bold", "UpPromote/BixGrow", "Gorgias",
              "Jasper/Copy.ai", "AdCreative.ai", "Agency fees ($3-5k+)", "Revenue intel",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 py-2 px-3 rounded-lg bg-muted/50 text-xs text-muted-foreground">
                <CheckCircle2 className="w-3 h-3 text-primary shrink-0" /> {item}
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-muted/30 border border-border p-4">
            <p className="text-muted-foreground text-xs leading-relaxed">
              <strong className="text-foreground">My resources?</strong> One human. One Claude Max subscription. Caffeine. And somehow — I shipped it in production for real clients.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto max-w-3xl px-3 md:px-4"><div className="border-t border-border" /></div>

      {/* Section 1: Skills */}
      <section id="section-1" className="py-14 px-3 md:px-4 scroll-mt-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <SectionLabel>The Platform</SectionLabel>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
              What I Built: <span className="gradient-text">AIVA</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              A modular AI employee whose skills toggle on/off per merchant. One assistant that learns your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                emoji: "🎯", title: "Sales Intelligence",
                cost: "$25k–50k", time: "2 days",
                features: ["RFM segmentation", "Cart recovery", "Churn prediction", "Upsells"],
                impact: "More revenue & LTV",
              },
              {
                emoji: "📢", title: "Content Marketing",
                cost: "$2k–5k/mo", time: "1 day",
                features: ["SEO blogs", "Social automation", "Competitor tracking", "Email sequences"],
                impact: "50–100% traffic boost",
              },
              {
                emoji: "🔄", title: "Subscriptions",
                cost: "$200–500/mo", time: "2 days",
                features: ["6 platform integrations", "Churn detection", "SMS upsells", "Dunning flows"],
                impact: "Lower churn, higher MRR",
              },
              {
                emoji: "💬", title: "Customer Service",
                cost: "$30–40k/yr", time: "½ day",
                features: ["Instant responses", "Order tracking", "Sentiment detection", "Smart escalation"],
                impact: "60–80% auto-resolved",
              },
              {
                emoji: "🎨", title: "Creative Design",
                cost: "$2k–5k/mo", time: "1 day",
                features: ["Ad generation", "Video + voiceover", "A/B testing", "Brand templates"],
                impact: "50–70% cost cut",
              },
              {
                emoji: "🤝", title: "Affiliate Platform",
                cost: "$2k/mo", time: "2 days",
                features: ["MLM commissions", "Fraud detection", "Dynamic codes", "Auto payouts"],
                impact: "Full system in 48hrs",
              },
            ].map((skill, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/20 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{skill.emoji}</span>
                    <h3 className="font-display font-bold text-sm">{skill.title}</h3>
                  </div>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded gradient-bg text-primary-foreground">⚡ {skill.time}</span>
                </div>
                <div className="grid grid-cols-2 gap-1 mb-3">
                  {skill.features.map((f, j) => (
                    <span key={j} className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full gradient-bg shrink-0" /> {f}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-[10px] text-muted-foreground">Was: <strong className="text-foreground">{skill.cost}</strong></span>
                  <span className="text-[10px] font-semibold gradient-text">{skill.impact}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { emoji: "🎲", title: "Promotions", desc: "Blockchain-powered draws" },
              { emoji: "🔒", title: "Security", desc: "Enterprise-grade infra" },
              { emoji: "⚙️", title: "Automation", desc: "Background job engine" },
            ].map((item, i) => (
              <div key={i} className="border border-border rounded-lg p-3 text-center bg-card">
                <span className="text-lg">{item.emoji}</span>
                <h4 className="font-display font-bold text-[11px] mt-1">{item.title}</h4>
                <p className="text-[10px] text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Numbers */}
      <section id="section-2" className="py-14 px-3 md:px-4 gradient-subtle-bg scroll-mt-20">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <SectionLabel>The Numbers</SectionLabel>
            <h2 className="font-display text-2xl md:text-3xl font-bold">
              Mind-Blowing <span className="gradient-text">Economics</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="border-2 border-border rounded-2xl p-6 bg-card relative">
              <span className="absolute -top-2.5 left-4 px-2 py-0.5 bg-card border border-border rounded text-[10px] font-bold text-muted-foreground">TRADITIONAL</span>
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground mt-1">$500k<span className="text-lg">+</span></div>
              <p className="text-xs text-muted-foreground mt-1">12+ months • 10+ devs</p>
            </div>
            <div className="gradient-bg rounded-2xl p-6 relative">
              <span className="absolute -top-2.5 left-4 px-2 py-0.5 bg-card rounded text-[10px] font-bold text-foreground">WITH AI</span>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-1">$190</div>
              <p className="text-xs text-primary-foreground/70 mt-1">2 weeks • 1 person</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center py-6 rounded-xl bg-card border border-border">
              <div className="font-display text-3xl font-bold gradient-text">25x</div>
              <p className="text-[11px] text-muted-foreground mt-1">Cost Reduction</p>
            </div>
            <div className="text-center py-6 rounded-xl bg-card border border-border">
              <div className="font-display text-3xl font-bold gradient-text">26x</div>
              <p className="text-[11px] text-muted-foreground mt-1">Faster to Market</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Claude Code */}
      <section id="section-3" className="py-14 px-3 md:px-4 scroll-mt-20">
        <div className="container mx-auto max-w-3xl">
          <SectionLabel>The Engine</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
            How Claude Code <span className="gradient-text">Changed Everything</span>
          </h2>

          <blockquote className="gradient-bg rounded-xl p-6 mb-8 text-primary-foreground">
            <p className="font-display text-base md:text-lg font-bold leading-relaxed">
              "Claude Code didn't just speed up development — it redefined what 'possible' means."
            </p>
          </blockquote>

          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            It thinks like a senior architect, writes like a machine, and never gets tired. Schemas, migrations, services, APIs, tests, docs — all handled.
          </p>

          <div className="space-y-3 mb-8">
            {[
              { n: "01", title: "Describe the outcome", desc: "Full system requirements with production constraints." },
              { n: "02", title: "Get the blueprint", desc: "Tables, services, jobs, error handling — all at once." },
              { n: "03", title: "Iterate & refine", desc: "Like a senior architect beside you in real time." },
              { n: "04", title: "Ship it", desc: "The speed is obscene." },
            ].map((item) => (
              <div key={item.n} className="flex gap-4 items-start border border-border rounded-lg p-4 bg-card hover:border-primary/20 transition-colors">
                <span className="font-display text-lg font-bold gradient-text shrink-0 w-6">{item.n}</span>
                <div>
                  <p className="font-display font-bold text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-muted/30 border border-border p-4">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground">A word of caution:</strong> 25 years of full-stack experience made this possible. You can't just watch vibe-coding videos and replicate this. Experience matters.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Impossible Features */}
      <section id="section-4" className="py-14 px-3 md:px-4 gradient-subtle-bg scroll-mt-20">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <SectionLabel>Beyond Limits</SectionLabel>
            <h2 className="font-display text-2xl md:text-3xl font-bold">
              Previously <span className="gradient-text">Impossible</span> Features
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Zap, title: "Zero-Latency Subscription Intel", desc: "Real-time churn signals. Normally a data engineering nightmare." },
              { icon: Users, title: "Instant Affiliate Networks", desc: "Full multi-tier system rivalling Impact.com — 48 hours." },
              { icon: Sparkles, title: "End-to-End Creative Pipeline", desc: "Prompt → Script → Voiceover → Video → Ads. Automated." },
              { icon: Rocket, title: "AI-Driven Onboarding", desc: "API key in → everything configured. Workflows, pipelines, templates." },
            ].map((f, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 flex gap-3 items-start hover:shadow-md hover:border-primary/20 transition-all">
                <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <f.icon className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs mb-1">{f.title}</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Apps Replaced */}
      <section id="section-5" className="py-14 px-3 md:px-4 scroll-mt-20">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <SectionLabel>The Stack Killer</SectionLabel>
            <h2 className="font-display text-2xl md:text-3xl font-bold">
              Apps <span className="gradient-text">Aiva Replaces</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { cat: "Marketing", items: ["Klaviyo", "Mailchimp", "Omnisend", "Canva Pro"] },
              { cat: "Subscriptions", items: ["Recharge", "Appstle", "Bold", "Loop"] },
              { cat: "Support", items: ["Gorgias", "Zendesk"] },
              { cat: "People", items: ["Copywriters", "Strategists", "Analysts"] },
            ].map((g, i) => (
              <div key={i} className="border border-border rounded-xl p-4 bg-card">
                <h4 className="font-display font-bold text-[10px] mb-2 gradient-text uppercase tracking-wider">{g.cat}</h4>
                <ul className="space-y-1.5">
                  {g.items.map((item, j) => (
                    <li key={j} className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full gradient-bg shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="gradient-bg rounded-xl p-6 text-center text-primary-foreground">
            <p className="font-display text-2xl md:text-3xl font-bold">$5k–$15k<span className="text-base font-normal opacity-70">/month saved</span></p>
            <p className="text-xs opacity-70 mt-1">Plus increased revenue, retention & unlimited automation</p>
          </div>
        </div>
      </section>

      {/* Section 6: Dark Truth */}
      <section id="section-6" className="py-14 px-3 md:px-4 gradient-subtle-bg scroll-mt-20">
        <div className="container mx-auto max-w-3xl">
          <SectionLabel>Wake-Up Call</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
            Traditional Dev is <span className="gradient-text">Dead</span>
          </h2>
          <div className="space-y-2 mb-6">
            {[
              "Devs refusing AI ship 10-20x slower",
              "Agencies lose to AI-native competitors",
              "Startups die before launch without AI",
              "Legacy products stagnate as AI teams sprint",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card">
                <Zap className="w-4 h-4 text-secondary shrink-0" />
                <p className="text-xs text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
          <blockquote className="gradient-bg rounded-xl p-6 text-primary-foreground text-center">
            <p className="font-display text-base md:text-lg font-bold">
              "Software isn't expensive anymore. Inefficiency is."
            </p>
          </blockquote>
        </div>
      </section>

      {/* Section 7: Agencies */}
      <section id="section-7" className="py-14 px-3 md:px-4 scroll-mt-20">
        <div className="container mx-auto max-w-3xl">
          <SectionLabel>Industry Shift</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">
            Why This <span className="gradient-text">Terrifies Agencies</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            25 years running an agency taught me their weaknesses. Aiva exploits all three:
          </p>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { icon: Clock, title: "Time", desc: "They sell hours. AI kills that." },
              { icon: Shield, title: "Skills", desc: "AI writes everything now." },
              { icon: DollarSign, title: "Retainers", desc: "80% automated. Why pay?" },
            ].map((item, i) => (
              <div key={i} className="border border-border rounded-xl p-4 text-center bg-card hover:border-primary/20 transition-colors">
                <item.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                <h4 className="font-display font-bold text-[11px]">{item.title}</h4>
                <p className="text-[10px] text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-muted/30 border border-border p-4">
            <p className="text-xs text-muted-foreground">
              Become an <strong className="text-foreground">Aiva Partner</strong> — we build, you sell, we both profit.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Future */}
      <section id="section-8" className="py-14 px-3 md:px-4 gradient-subtle-bg scroll-mt-20">
        <div className="container mx-auto max-w-3xl text-center">
          <SectionLabel>Paradigm Shift</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
            The Future Is <span className="gradient-text">Already Here</span>
          </h2>
          <blockquote className="gradient-bg rounded-xl p-6 text-primary-foreground mb-8">
            <p className="font-display text-base md:text-lg font-bold">
              "The founder who masters AI will beat the company with 50 employees who does not."
            </p>
          </blockquote>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-border rounded-xl p-5 bg-card">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold mb-2">Old Way</p>
              <p className="font-display font-bold text-sm">Money → Talent → Speed</p>
            </div>
            <div className="gradient-bg rounded-xl p-5">
              <p className="text-[10px] text-primary-foreground/60 uppercase tracking-wider font-bold mb-2">New Way</p>
              <p className="font-display font-bold text-sm text-primary-foreground">Knowledge → Prompts → Speed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Roadmap */}
      <section id="section-9" className="py-14 px-3 md:px-4 scroll-mt-20">
        <div className="container mx-auto max-w-3xl">
          <SectionLabel>Roadmap</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
            What's <span className="gradient-text">Coming Next</span>
          </h2>
          <div className="space-y-2">
            {[
              { title: "Aiva Agents", desc: "Dedicated workers for ads, SEO, email, CRO" },
              { title: "Knowledge Vault", desc: "Encrypted intelligence with zero-knowledge proofs" },
              { title: "Messenger Hub", desc: "Unified WhatsApp/SMS/IG automation" },
              { title: "Pricewatch", desc: "Real-time discount alerts" },
              { title: "Growth Loops", desc: "Autonomous experiments" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 border border-border rounded-lg p-3 bg-card hover:border-primary/20 transition-colors">
                <span className="w-6 h-6 rounded gradient-bg text-primary-foreground flex items-center justify-center text-[10px] font-bold shrink-0">{i + 1}</span>
                <div className="flex items-center justify-between flex-1 gap-2">
                  <p className="font-display font-bold text-xs">{item.title}</p>
                  <p className="text-[10px] text-muted-foreground hidden sm:block">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Message */}
      <section id="section-10" className="py-14 px-3 md:px-4 gradient-subtle-bg scroll-mt-20">
        <div className="container mx-auto max-w-3xl text-center">
          <SectionLabel>To Founders</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
            You Don't Need <span className="gradient-text">a Team</span>
          </h2>
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <p className="font-display text-xl font-bold text-foreground mb-2">One AI partner. Relentless execution.</p>
            <p className="text-sm text-muted-foreground mb-6">That's all it takes now.</p>
            <div className="grid grid-cols-3 gap-3">
              {["A scary vision", "Courage to start", "100x AI tools"].map((item, i) => (
                <div key={i} className="rounded-lg bg-muted/50 p-3">
                  <p className="text-[11px] font-semibold text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Conclusion CTA */}
      <section id="section-11" className="py-16 px-3 md:px-4 scroll-mt-20">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <p className="text-muted-foreground leading-relaxed mb-3">
              A solo founder can outpace entire teams. A bootstrapper can out-innovate VC-backed companies.
            </p>
            <p className="font-display text-2xl font-bold text-foreground">Aiva is proof.</p>
          </div>

          <div className="gradient-bg rounded-2xl p-8 md:p-10 text-center text-primary-foreground">
            <Rocket className="w-8 h-8 mx-auto mb-3 opacity-80" />
            <p className="font-display text-lg md:text-xl font-bold mb-3">
              Follow Aiva's journey
            </p>
            <p className="text-xs opacity-70 max-w-md mx-auto mb-1">
              Her conception story. Born in 2 weeks. Ready to master every skill. Her growth will be rapid. 💥
            </p>
            <a href="#" className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-2.5 rounded-full font-semibold mt-5 hover:bg-background/90 transition-colors text-sm">
              Get Early Access <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 px-3 md:px-4">
        <div className="container mx-auto max-w-3xl flex items-center justify-between">
          <span className="font-display text-lg font-bold gradient-text">AIVA</span>
          <span className="text-[11px] text-muted-foreground">© 2025 Aiva. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default TheStory;
