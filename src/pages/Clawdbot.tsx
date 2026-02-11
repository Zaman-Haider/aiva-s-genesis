import Navbar from "@/components/Navbar";
import { ArrowRight, Clock, Brain, Zap, Shield, Code, BarChart3, Bug, Palette, Workflow, Layers, MessageSquare, Bot, Sparkles } from "lucide-react";

const Clawdbot = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block text-sm font-medium text-primary-foreground/70 mb-4 tracking-wide uppercase">
            Clawdia — Your AI Development Partner | AIVA for Clawdbot
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Your AI Development<br />partner.
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Powered by Claude Opus 4.5. Trained on your codebase. It doesn't just write code — it understands your entire stack and delivers production-ready output in minutes, not days.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-background/90 transition-colors"
            >
              Start Building Now <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              See It In Action
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { value: "24/7", label: "Always Available" },
              { value: "Opus 4.5", label: "Latest AI Model" },
              { value: "Dedicated", label: "Your Own Instance" },
              { value: "Minutes", label: "Not Days" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-xl md:text-2xl font-bold text-primary-foreground mb-1">{stat.value}</div>
                <p className="text-xs text-primary-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not a chatbot */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Not a chatbot. A full-stack{" "}
                <span className="gradient-text">AI employee.</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Clawdia is not just another AI code generator. It's a complete development partner powered by Anthropic's Claude Opus 4.5 — the most capable AI model available.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                It understands context, maintains code consistency, and builds production-ready features across your entire stack. From frontend components to API routes to database schemas — Clawdia handles it all.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Think of it as hiring a senior full-stack developer who never sleeps, never forgets your codebase, and ships production-ready code in minutes.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-3">What's actually different?</h3>
              <ul className="space-y-3">
                {[
                  "It's trained on YOUR codebase — not generic examples",
                  "It understands your entire project architecture",
                  "It maintains consistent coding patterns across files",
                  "It writes tests, docs, and handles edge cases",
                  "It deploys production-ready code, not prototypes",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-base text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise AI Infrastructure */}
      <section className="py-16 px-4 gradient-subtle-bg">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-3">
            Enterprise AI infrastructure, delivered as a{" "}
            <span className="gradient-text">service.</span>
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Pre-built integrations and infrastructure so you can focus on building, not configuring.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: <Code className="w-6 h-6" />,
                title: "Full-Stack Code Gen",
                desc: "React, Next.js, Node, Python — Clawdia writes production code across your entire stack with consistent patterns.",
              },
              {
                icon: <Layers className="w-6 h-6" />,
                title: "JavaScript/Full-Stack Mastery",
                desc: "Deep expertise in modern JavaScript frameworks, TypeScript, APIs, databases, and deployment pipelines.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Shopify Automation",
                desc: "Build Shopify apps, themes, and integrations. Automate store management with custom scripts and workflows.",
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AIVA MCP + Shopify MCP",
                desc: "Direct integration with AIVA's Model Context Protocol and Shopify's MCP for intelligent store management.",
              },
              {
                icon: <Workflow className="w-6 h-6" />,
                title: "Clawdbot Funnels",
                desc: "Build conversion funnels, landing pages, and automated marketing sequences powered by AI intelligence.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Multi-Tenant Security",
                desc: "Enterprise-grade security with isolated environments, role-based access, and encrypted data handling.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="border border-border rounded-2xl p-6 bg-background hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-primary-foreground mb-4">
                  {card.icon}
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real conversation. Real results. */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-3">
            Real conversation.{" "}
            <span className="gradient-text">Real results.</span>
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            See how Clawdia handles real development requests from real users.
          </p>

          {/* Chat mockup */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="border border-border rounded-2xl overflow-hidden bg-background shadow-lg">
              <div className="gradient-bg px-5 py-3 flex items-center gap-2">
                <Bot className="w-5 h-5 text-primary-foreground" />
                <span className="text-sm font-semibold text-primary-foreground">Clawdia</span>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex justify-end">
                  <div className="bg-primary/10 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%]">
                    <p className="text-sm">Can you build me a complete Shopify customer dashboard with order history, subscription management, and analytics?</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%]">
                    <p className="text-sm">I'll build that for you right now. I'll create a responsive dashboard with 3 sections: order history with filters, subscription management with pause/cancel/upgrade flows, and analytics with revenue charts. Give me about 4 minutes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial quotes */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "It built our entire MVP in 3 days. What would've taken our team 3 months.",
                author: "Shopify Agency Owner",
              },
              {
                quote: "This is the closest thing to having a senior dev on call 24/7. It just gets it.",
                author: "E-Commerce Founder",
              },
              {
                quote: "I was skeptical until Clawdia refactored our entire codebase and reduced bugs by 60%.",
                author: "CTO, SaaS Startup",
              },
            ].map((t, i) => (
              <div key={i} className="border border-border rounded-2xl p-5 bg-background">
                <MessageSquare className="w-5 h-5 text-primary mb-3" />
                <p className="text-sm text-muted-foreground italic mb-3">"{t.quote}"</p>
                <p className="text-xs font-semibold text-foreground">{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What can Clawdia actually do? */}
      <section className="py-16 px-4 gradient-subtle-bg">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-3">
            What can Clawdia{" "}
            <span className="gradient-text">actually do?</span>
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Everything a full-stack developer can — and more. Here's a quick look.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: <Code className="w-6 h-6" />, title: "Run Projects", desc: "Manage entire codebases, plan sprints, and ship features end-to-end." },
              { icon: <BarChart3 className="w-6 h-6" />, title: "Analytics & Tech", desc: "Build dashboards, integrate APIs, analyze data, and optimize performance." },
              { icon: <Bug className="w-6 h-6" />, title: "Fix Bugs", desc: "Debug complex issues, trace errors, and resolve them with tested solutions." },
              { icon: <Palette className="w-6 h-6" />, title: "Design Pages", desc: "Create responsive layouts, design systems, and pixel-perfect UI components." },
              { icon: <Workflow className="w-6 h-6" />, title: "Automate Workflows", desc: "Set up CI/CD, automate testing, build scripts, and deployment pipelines." },
              { icon: <Layers className="w-6 h-6" />, title: "End-to-End Process", desc: "From requirements to deployment — Clawdia handles the complete SDLC." },
            ].map((card, i) => (
              <div key={i} className="border border-border rounded-2xl p-5 bg-background hover:shadow-lg hover:border-primary/20 transition-all text-center">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-primary-foreground mb-3 mx-auto">
                  {card.icon}
                </div>
                <h3 className="font-display font-bold text-base mb-1">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not just another AI chatbot */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-3">
            Not just another{" "}
            <span className="gradient-text">AI chatbot.</span>
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Here's how Clawdia compares to generic AI coding tools.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Other AI Tools */}
            <div className="border border-border rounded-2xl p-6 bg-background">
              <h3 className="font-display font-bold text-lg mb-4 text-muted-foreground">Other AI Tools</h3>
              <ul className="space-y-3">
                {[
                  "Generic code suggestions",
                  "No context of your project",
                  "Copy-paste workflow",
                  "Breaks existing code patterns",
                  "Limited to single files",
                  "No deployment support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-5 h-5 rounded-full bg-destructive/10 text-destructive flex items-center justify-center text-xs shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Clawdia */}
            <div className="border-2 border-primary/30 rounded-2xl p-6 bg-primary/5">
              <h3 className="font-display font-bold text-lg mb-4 gradient-text">Clawdia</h3>
              <ul className="space-y-3">
                {[
                  "Trained on YOUR codebase",
                  "Full project architecture awareness",
                  "Direct code commits & deployments",
                  "Maintains your coding patterns",
                  "Works across entire repositories",
                  "Built-in CI/CD and deployment",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-5 h-5 rounded-full gradient-bg text-primary-foreground flex items-center justify-center text-xs shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="gradient-bg rounded-3xl p-12 text-center text-primary-foreground">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Stop waiting. Start building.
            </h2>
            <p className="opacity-90 mb-8 max-w-xl mx-auto">
              Your AI development partner is ready. Start building with AIVA for Clawdbot and ship production-ready code in minutes, not months.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-background/90 transition-colors"
              >
                Start Building Now <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Book A Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto max-w-4xl flex items-center justify-between">
          <span className="font-display text-xl font-bold gradient-text">AIVA</span>
          <span className="text-sm text-muted-foreground">© 2025 Aiva. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Clawdbot;
