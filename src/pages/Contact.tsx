import Navbar from "@/components/Navbar";
import { useState } from "react";
import contactHeroWave from "@/assets/contact-hero-wave.jpg";
import officeAppleValley from "@/assets/office-apple-valley.jpg";
import officeWhiteBearLake from "@/assets/office-white-bear-lake.jpg";
import askQuestionPerson from "@/assets/ask-question-person.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner with Wave Image */}
      <section className="relative pt-20">
        <div className="relative h-[340px] overflow-hidden">
          <img
            src={contactHeroWave}
            alt="Abstract colorful wave"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 left-8 md:left-16">
            <p className="text-primary-foreground text-lg font-medium">
              Need more info before getting started?
            </p>
            <p className="text-primary-foreground/80">
              Why not just sign up?
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information + Map */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Contact<br />Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're here to walk alongside you on your wellness journey.
                Whether you have questions about our services, want to book
                an appointment, or simply need guidance, our team is ready to
                help.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Address:</h4>
                  <p className="text-sm text-primary">14960 Florence Trail</p>
                  <p className="text-sm text-primary">Apple Valley, MN 55124</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Open:</h4>
                  <p className="text-sm text-muted-foreground">Monday – Sunday,</p>
                  <p className="text-sm text-muted-foreground">9am – 7pm EST</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90141.47784400978!2d-93.26014!3d44.7319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f62f331be1a135%3A0xab2e7e30e3f0a95c!2sApple%20Valley%2C%20MN!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AIVA Office Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* All Locations */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            All Locations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="rounded-2xl overflow-hidden mb-4">
                <img
                  src={officeAppleValley}
                  alt="Apple Valley office"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="font-display text-xl font-bold">Apple Valley</h3>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden mb-4">
                <img
                  src={officeWhiteBearLake}
                  alt="White Bear Lake office"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="font-display text-xl font-bold">White Bear Lake</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Ask a Question */}
      <section className="py-16 px-6 bg-foreground">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={askQuestionPerson}
                alt="Ask a question"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
                Ask a Question
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-primary-foreground/20 bg-transparent text-primary-foreground rounded-lg px-4 py-2.5 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-primary-foreground/20 bg-transparent text-primary-foreground rounded-lg px-4 py-2.5 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-primary-foreground/20 bg-transparent text-primary-foreground rounded-lg px-4 py-2.5 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full border border-primary-foreground/20 bg-transparent text-primary-foreground rounded-lg px-4 py-2.5 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <button
                  type="submit"
                  className="gradient-bg text-primary-foreground px-8 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
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

export default Contact;
