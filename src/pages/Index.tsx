import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            The AI Employee That Runs Your{" "}
            <span className="underline decoration-accent decoration-4 underline-offset-8">E-Commerce.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Aiva, your e-commerce machine, runs the figures, marketing, subscriptions, customer service, loyalty, and more. 100% like your trusted full-time employee would.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              to="/the-story"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-background/90 transition-colors"
            >
              Read the Story <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Get Early Access
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "70%+", label: "Cost Reduction" },
              { value: "$47.5k", label: "Saved Yearly" },
              { value: "4.5x", label: "Revenue Uplift" },
              { value: "2.7%", label: "Lower Churn" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is AIVA */}
      <section className="py-16 px-6 gradient-subtle-bg">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            What is <span className="gradient-text">AIVA</span>?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Aiva is a modular, multi-talented AI employee whose skills can be toggled on or off per merchant. Instead of juggling five different platforms, merchants get one powerful assistant who learns their business and acts accordingly.
          </p>
          <Link
            to="/the-story"
            className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Read the Full Story <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            11 Specialists. One Platform.{" "}
            <span className="gradient-text">One Price.</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Every skill Aiva has replaces an expensive tool or consultant. Toggle them on or off as you need.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🎯", title: "Sales Intelligence", desc: "RFM analysis, cart recovery, churn prediction, upsells." },
              { icon: "📢", title: "Content Marketing", desc: "SEO blogs, social posts, email sequences, lead magnets." },
              { icon: "🔄", title: "Subscription Mgmt", desc: "Works with Recharge, Bold, Appstle, Loop, and more." },
              { icon: "💬", title: "Customer Service", desc: "24/7 automated support that resolves 60-80% of tickets." },
              { icon: "🎨", title: "Creative Design", desc: "Ad creatives, video ads, brand templates, A/B testing." },
              { icon: "🤝", title: "Affiliate Platform", desc: "Two-tier commissions, fraud detection, automated payouts." },
            ].map((skill, i) => (
              <div
                key={i}
                className="group border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <span className="text-3xl mb-4 block">{skill.icon}</span>
                <h3 className="font-display font-bold text-lg mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="gradient-bg rounded-3xl p-12 text-center text-primary-foreground">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready To Meet Your AI Employee?
            </h2>
            <p className="opacity-90 mb-8">
              Early adopters get 1:1 expert consultation and Aiva FREE for 3 months.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-background/90 transition-colors"
            >
              Get Early Access <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="container mx-auto max-w-4xl flex items-center justify-between">
          <span className="font-display text-xl font-bold gradient-text">AIVA</span>
          <span className="text-sm text-muted-foreground">© 2025 Aiva. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
