import Navbar from "@/components/Navbar";

const TableOfContents = () => {
  const sections = [
    "The Vision That Seemed Impossible",
    "What I Built: The AIVA Platform",
    "The Mind-Blowing Numbers",
    "How Claude Code Changed Everything",
    "Features That Would've Been Impossible",
    "Apps and Services Aiva Replaces",
    "The Dark Truth About Traditional Development",
    "Why This Terrifies Agencies",
    "The Future Is Already Here",
    "What I'm Building Next",
    "The Message to Other Founders",
    "Conclusion",
  ];

  return (
    <div className="gradient-subtle-bg rounded-2xl p-6 mb-12">
      <h3 className="font-display font-bold text-lg mb-4">Contents</h3>
      <ul className="space-y-2">
        {sections.map((s, i) => (
          <li key={i}>
            <a href={`#section-${i}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {s}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillCard = ({ title, cost, buildTime, features, impact }: {
  title: string;
  cost: string;
  buildTime: string;
  features: string[];
  impact: string;
}) => (
  <div className="border border-border rounded-2xl p-6 mb-8 hover:shadow-lg transition-shadow">
    <h4 className="font-display font-bold text-xl mb-2">{title}</h4>
    <div className="flex flex-wrap gap-4 mb-4">
      <span className="text-xs font-semibold px-3 py-1 rounded-full gradient-bg text-primary-foreground">
        Traditional: {cost}
      </span>
      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground">
        Built in: {buildTime}
      </span>
    </div>
    <ul className="space-y-1 mb-4">
      {features.map((f, i) => (
        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
          <span className="gradient-text font-bold mt-0.5">✦</span> {f}
        </li>
      ))}
    </ul>
    <p className="text-sm font-medium text-foreground">
      <span className="gradient-text font-semibold">Impact:</span> {impact}
    </p>
  </div>
);

const StatBox = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center p-6 rounded-2xl gradient-subtle-bg">
    <div className="font-display text-3xl font-bold gradient-text mb-1">{value}</div>
    <div className="text-xs text-muted-foreground">{label}</div>
  </div>
);

const TheStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-background/20 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6">
            Marketing Website coming very soon. In the meantime read the story.
          </div>
          <p className="text-primary-foreground/80 text-sm mb-6 max-w-2xl mx-auto">
            I'm taking on 5 early adopters now. Help refine Aiva, in return get 1:1 expert consultation from me and Aiva FREE for 3 months!
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            How I Built an Enterprise SaaS Platform in{" "}
            <span className="underline decoration-accent decoration-4 underline-offset-4">Two Weeks</span> With AI
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium mb-8">
            (And Why Traditional Development is Dead)
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/70 text-sm">
            <span>By <strong className="text-primary-foreground">Tim Thomas</strong></span>
            <span>November 14, 2025</span>
            <span>6-7 min read</span>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="gradient-subtle-bg border border-border rounded-2xl p-8 mb-12">
            <h2 className="font-display text-2xl font-bold mb-4">
              TL;DR <span className="gradient-text">(Summary)</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I built Aiva, she's an AI employee that works for online merchants. She has many skills, and one goal – increase revenue, while cutting costs. Two weeks ago, I set myself a ridiculous challenge: build a fully-fledged, enterprise-grade, AI-powered multi-tenant SaaS platform that replaces half a dozen expensive tools, automates an entire e-commerce operation, and performs like a team of specialists, all by myself, using AI agents.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              What should've taken a team of 10 developers, months of planning, and a six-figure budget was instead built in around 100 hours at near-zero cost, with production-ready integrations, enterprise-class security, and real merchants already onboarded.
            </p>
          </div>

          <TableOfContents />

          {/* Section: Vision */}
          <section id="section-0" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-bold mb-6">
              The Vision That Seemed <span className="gradient-text">Impossible</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Two weeks ago I set out to build something most CTOs would call naïve, if not impossible: a full-stack, AI-powered SaaS platform that replaces $7,000+ per month in software and labour costs for e-commerce merchants — while making them more money in the process.
            </p>
            <p className="text-foreground font-medium mb-4">
              Not a single tool. Not a toy MVP. But a complete, enterprise-grade system that replaces:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Klaviyo/MailChimp/ActiveCampaign (email/SMS automation)",
                "Recharge/Bold (subscriptions)",
                "UpPromote/BixGrow (affiliate/referrals)",
                "Gorgias (customer support)",
                "Jasper/Copy.ai (content)",
                "AdCreative.ai (ad generation)",
                "Staff and Consultant/Agency fees ($3-5k+/month)",
              ].map((item, i) => (
                <li key={i} className="text-muted-foreground flex items-start gap-2">
                  <span className="gradient-text font-bold">→</span> {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              And adds revenue intelligence no existing tool can match. All integrated with Shopify, HighLevel, WordPress, WooCommerce, and six subscription platforms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My available resources? One human, just me. One Claude Max subscription. Determination. Caffeine. Not much sleep. And somehow — I shipped it. In production. For real clients.
            </p>
          </section>

          {/* Section: What I Built */}
          <section id="section-1" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-bold mb-6">
              What I Built: The <span className="gradient-text">AIVA Platform</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AIVA stands for AI Virtual Assistant — but I just call her Aiva. She's a modular, multi-talented, super intelligent "AI employee" whose "skills" can be toggled on or off per merchant. Instead of juggling five different platforms and 20 different logins, merchants get one powerful assistant who learns their business and acts accordingly.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Aiva comes bundled with the world-class HighLevel CRM automation platform, giving her superpowers before we even add our own layers. Below are the core skills I built in record time.
            </p>

            <SkillCard
              title="🎯 The Sales Skill — Revenue Multiplication Engine"
              cost="$25,000–50,000 setup + $1k/mo"
              buildTime="2 days"
              features={[
                "RFM Analysis with automatic segmentation",
                "Cart Recovery with 3-stage AI sequences",
                "Churn Prediction and win-back flows",
                "Subscription Conversion Intelligence",
                "Customer Health Scoring & Post-Purchase Upsells",
              ]}
              impact="More revenue, more repeat orders, more LTV."
            />

            <SkillCard
              title="📢 The Marketing Skill — The Content Machine"
              cost="$2,000–5,000/month"
              buildTime="1 day"
              features={[
                "SEO-friendly blog generation",
                "Social post automation",
                "Competitor tracking",
                "Email sequence creation",
                "Lead magnet production",
              ]}
              impact="50–100% increase in organic traffic, with 30–40% lower costs."
            />

            <SkillCard
              title="🔄 The Subscription Management Skill"
              cost="$200–500/month + % of revenue"
              buildTime="2 days"
              features={[
                "Integrates with Recharge, Seal, Bold, Appstle, Loop, Shopify Native",
                "Churn prediction & detection",
                "Pre-billing reminders & zero friction upsells",
                "SMS offer + reply 'yes' — no login required",
                "Dunning flows and MRR uplift tools",
              ]}
              impact="Churn reduction, MRR uplift."
            />

            <SkillCard
              title="💬 The Customer Service Skill — 24/7 Support"
              cost="$30–40k/year per CS human"
              buildTime="½ day"
              features={[
                "Instant responses & order tracking",
                "Returns/exchanges handling",
                "Product recommendations",
                "Sentiment detection",
                "Escalate to human when needed",
              ]}
              impact="Resolves 60–80% of support requests automatically."
            />

            <SkillCard
              title="🎨 The Design Skill — Creative at Scale"
              cost="$2,000–5,000/month"
              buildTime="1 day"
              features={[
                "Ad creative generation",
                "Video ads with voiceovers",
                "A/B variations",
                "Brand-consistent templates",
              ]}
              impact="50–70% cost reduction, 20–40% ROAS improvement expected."
            />

            <div className="border border-border rounded-2xl p-6 mb-8">
              <h4 className="font-display font-bold text-xl mb-4">But Wait, There's More…</h4>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  <strong className="text-foreground">The Affiliate Marketing Powerhouse</strong> — In two days, a full affiliate platform rivalling Impact.com: two-tier MLM commissions, LTV-based payouts, dynamic discount codes, fraud detection, automated payouts, tiered bonuses, and real-time tracking.
                </p>
                <p>
                  <strong className="text-foreground">The Promotions Skill</strong> — Blockchain-powered prize draws with Chainlink VRF fairness, Solidity smart contracts, live WordPress widgets, and social-driven entry mechanisms.
                </p>
                <p>
                  <strong className="text-foreground">Enterprise-Grade Infrastructure</strong> — Hangfire job scheduling, rate limiting, telemetry & monitoring, security hardening, multi-tenant design.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Numbers */}
          <section id="section-2" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-bold mb-8 text-center">
              The Mind-Blowing <span className="gradient-text">Numbers</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <StatBox value="25,000+" label="Lines of C# Code" />
              <StatBox value="58" label="Database Tables" />
              <StatBox value="47" label="API Endpoints" />
              <StatBox value="12" label="Integrations" />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="border border-border rounded-2xl p-6">
                <h4 className="font-display font-bold text-lg mb-3 text-muted-foreground">Traditional Cost</h4>
                <div className="font-display text-3xl font-bold text-foreground mb-1">$500,000+</div>
                <p className="text-sm text-muted-foreground">12+ months timeline</p>
              </div>
              <div className="gradient-bg rounded-2xl p-6 text-primary-foreground">
                <h4 className="font-display font-bold text-lg mb-3 opacity-80">My Cost</h4>
                <div className="font-display text-3xl font-bold mb-1">$190</div>
                <p className="text-sm opacity-80">2 weeks timeline</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatBox value="25x" label="Cost Reduction" />
              <StatBox value="26x" label="Faster to Market" />
            </div>
          </section>

          {/* Section: Claude Code */}
          <section id="section-3" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-bold mb-6">
              How Claude Code <span className="gradient-text">Changed Everything</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Claude Code is the difference between dreaming and shipping. It thinks like a senior architect, writes like a machine, and iterates like a world-class engineering team. It designs schemas, writes migrations, implements services, writes tests, integrates APIs, documents everything. And it never gets tired.
            </p>
            <blockquote className="border-l-4 gradient-border pl-6 py-4 my-8 bg-muted/50 rounded-r-xl">
              <p className="text-foreground font-medium italic">
                "The gap between a solo founder and a development team is now measured in prompt quality, not headcount."
              </p>
            </blockquote>
            <p className="text-muted-foreground leading-relaxed mb-6">
              But I must say, 25 years experience delivering websites from 4 to 7 figures, wearing every hat in the full-stack product development lifecycle gave me the experience to make this happen. You can't just watch a few 'vibe coding' videos and spend a month in all the AI coding Skool communities, then deliver something like this. Decades of industry experience matters.
            </p>

            <h3 className="font-display text-xl font-bold mb-4">My Workflow</h3>
            <div className="space-y-4 mb-8">
              {[
                { step: "1", title: "Describe the outcome, not the code", desc: "Instead of 'Write a function', I describe the full system requirement with production constraints." },
                { step: "2", title: "Claude responds with the whole blueprint", desc: "Tables, models, DTOs, services, repo patterns, Hangfire jobs, error handling — all at once." },
                { step: "3", title: "Iterate, refine, extend", desc: "Like having a senior architect sitting beside me, bug fixing and enhancing in real time." },
                { step: "4", title: "Ship", desc: "The speed is obscene." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <span className="gradient-bg text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Impossible Features */}
          <section id="section-4" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-bold mb-6">
              Features That Would've Been <span className="gradient-text">Impossible</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Zero-Latency Subscription Intelligence", desc: "Aiva reads subscription churn signals in real time. Normally a full-time data engineering nightmare." },
                { title: "Instant Affiliate Networks", desc: "A complete multi-tier affiliate system — the kind Impact.com charges $2k/month for — built in 48 hours." },
                { title: "End-to-End Creative Production", desc: "Prompt → Script → Voiceover → Video → Ads → Scheduling. All automated." },
                { title: "Dynamic AI-Driven Onboarding", desc: "Pop in your Shopify/WooCommerce API key and Aiva sets everything up. Ready to go." },
              ].map((f, i) => (
                <div key={i} className="gradient-subtle-bg rounded-xl p-5">
                  <h4 className="font-display font-bold text-base mb-2">{f.title}</h4>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Replaces */}
          <section id="section-5" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-bold mb-6">
              Apps and Services <span className="gradient-text">Aiva Replaces</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { cat: "Marketing", items: ["Klaviyo", "Mailchimp", "Omnisend", "Canva Pro", "AdCreative.ai"] },
                { cat: "Subscriptions", items: ["Recharge", "Appstle", "Bold", "Loop"] },
                { cat: "Support", items: ["Gorgias", "Zendesk"] },
                { cat: "Consulting", items: ["Copywriters", "Marketing strategists", "Revenue analysts", "Data scientists"] },
              ].map((g, i) => (
                <div key={i} className="border border-border rounded-xl p-5">
                  <h4 className="font-display font-bold text-base mb-3 gradient-text">{g.cat}</h4>
                  <ul className="space-y-1">
                    {g.items.map((item, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full gradient-bg shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="gradient-bg rounded-xl p-6 mt-6 text-center text-primary-foreground">
              <p className="font-display text-2xl font-bold">Total potential savings: $5,000–$15,000/month</p>
              <p className="text-sm opacity-80 mt-1">Plus increased revenue, retention, LTV, and unlimited automation</p>
            </div>
          </section>

          {/* Section: Dark Truth */}
          <section id="section-6" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-bold mb-6">
              The Dark Truth About <span className="gradient-text">Traditional Development</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Building software the "old way" is dead. This project made it painfully obvious:</p>
            <ul className="space-y-3">
              {[
                "Developers who refuse to use AI will ship 10-20x slower.",
                "Agencies will lose clients to AI-native competitors.",
                "Startups will die before launch if they ignore AI tooling.",
                "Old products will stagnate while AI-first teams sprint ahead.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-secondary font-bold text-lg">⚡</span> {item}
                </li>
              ))}
            </ul>
            <blockquote className="border-l-4 gradient-border pl-6 py-4 my-8 bg-muted/50 rounded-r-xl">
              <p className="text-foreground font-medium italic">
                "Software isn't expensive anymore. Inefficiency is expensive."
              </p>
            </blockquote>
          </section>

          {/* Section: Agencies */}
          <section id="section-7" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-bold mb-6">
              Why This <span className="gradient-text">Terrifies Agencies</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I've built an agency. I've run it for 25 years. I know their margins, their bottlenecks, their weaknesses. That's why I'm leaving the Agency and developed this AI SwaS – Artificially Intelligent Software with a Service.
            </p>
            <div className="space-y-4 mb-6">
              {[
                { title: "Labour hours", desc: "Agencies sell time. Aiva kills that model." },
                { title: "Specialist skill moats", desc: "Aiva writes ads, scripts, emails, funnels, SOPs, code." },
                { title: "Retainer justification", desc: "If an AI does 80% of the work, why pay $6k/month?" },
              ].map((item, i) => (
                <div key={i} className="gradient-subtle-bg rounded-xl p-4">
                  <p className="font-semibold text-foreground text-sm">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Agencies will survive only if they pivot into AI orchestration, automation consulting, and AI-first implementation. If you're an Agency — why not become an Aiva Partner? We build. You sell. We both support. We both profit.
            </p>
          </section>

          {/* Section: Future */}
          <section id="section-8" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-bold mb-6">
              The Future Is <span className="gradient-text">Already Here</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">This project made one thing crystal clear:</p>
            <blockquote className="border-l-4 gradient-border pl-6 py-4 my-8 bg-muted/50 rounded-r-xl">
              <p className="text-foreground font-medium italic text-lg">
                "The founder who masters AI will beat the company with 50 employees who does not."
              </p>
            </blockquote>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-border rounded-xl p-5">
                <p className="text-sm text-muted-foreground mb-2">What it used to be:</p>
                <p className="font-display font-bold text-foreground">Money → Talent → Speed</p>
              </div>
              <div className="gradient-bg rounded-xl p-5 text-primary-foreground">
                <p className="text-sm opacity-80 mb-2">What it is now:</p>
                <p className="font-display font-bold">Knowledge → Prompts → Speed</p>
              </div>
            </div>
          </section>

          {/* Section: Building Next */}
          <section id="section-9" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-bold mb-6">
              What I'm <span className="gradient-text">Building Next</span>
            </h2>
            <div className="space-y-3">
              {[
                "Aiva Agents: separate workers for ads, SEO, email, CRO.",
                "Aiva Knowledge Vault: encrypted merchant intelligence with zero-knowledge proofs.",
                "Aiva Messenger: unified WhatsApp/SMS/Messenger/IG automation hub.",
                "Aiva Pricewatch: real-time discount alerts for bargain hunters.",
                "Autonomous Growth Loops: Aiva runs growth experiments automatically.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                  <span className="gradient-bg text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-muted-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-6">
              Everything I thought would take years is now weeks. Everything that seemed too hard is now doable.
            </p>
          </section>

          {/* Section: Message */}
          <section id="section-10" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-bold mb-6">
              The Message to <span className="gradient-text">Other Founders</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you're a founder, CEO, dev lead, or marketer, hear this:
            </p>
            <div className="gradient-subtle-bg rounded-2xl p-8">
              <p className="font-display text-xl font-bold text-foreground mb-2">You don't need a team.</p>
              <p className="text-muted-foreground mb-4">You need one good AI partner and relentless execution.</p>
              <ul className="space-y-2">
                {[
                  "You don't need to raise $500k to start.",
                  "You don't need a dev shop bleeding you dry.",
                  "A vision that scares you",
                  "The courage to start",
                  "AI tools that multiply your output 100x",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="gradient-text">✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section: Conclusion */}
          <section id="section-11" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-bold mb-6">
              <span className="gradient-text">Conclusion</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With AI, a solo founder can outpace entire product teams. A bootstrapper can out-innovate VC-backed companies. A dreamer can build what used to require an army.
            </p>
            <p className="text-foreground font-semibold text-lg mb-6">Aiva is proof.</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This isn't the future. It's already happening. And the people who act now will own the next decade.
            </p>

            <div className="gradient-bg rounded-2xl p-8 text-primary-foreground text-center">
              <p className="font-display text-xl font-bold mb-3">Follow Aiva's journey. Follow my journey.</p>
              <p className="text-sm opacity-90 mb-2">
                This was her conception story. From a seed in my mind, gestated in just 2 weeks. She's just been born. Ready to find her feet and rapidly master the skills I gave her.
              </p>
              <p className="text-sm opacity-90">
                Her growth spurt will be rapid. 💥 Follow along.
              </p>
            </div>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="container mx-auto max-w-3xl flex items-center justify-between">
          <span className="font-display text-xl font-bold gradient-text">AIVA</span>
          <span className="text-sm text-muted-foreground">© 2025 Aiva. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default TheStory;
