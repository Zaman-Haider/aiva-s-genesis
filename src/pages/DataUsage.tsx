import Navbar from "@/components/Navbar";

const DataUsage = () => {
  const apiPermissions = [
    { permission: "read_products", type: "Read", purpose: "Display product information, images, and variants in subscription offers." },
    { permission: "read_customers", type: "Read", purpose: "Match subscription records with Shopify customer data for order sync." },
    { permission: "write_orders", type: "Write", purpose: "Create subscription renewal orders and apply discounts." },
    { permission: "read_orders", type: "Read", purpose: "Access order history for subscription analytics and reporting." },
    { permission: "read_all_orders", type: "Read", purpose: "Access historical orders for comprehensive reporting and analytics." },
    { permission: "write_products", type: "Write", purpose: "Update product metadata and manage subscription product offerings." },
    { permission: "read_shipping", type: "Read", purpose: "Calculate shipping rates for subscription orders." },
    { permission: "write_customers", type: "Write", purpose: "Update customer tags and metadata for subscription management." },
    { permission: "read_own_subscription_contracts", type: "Read", purpose: "Retrieve subscription contract details for customer portal display." },
    { permission: "write_own_subscription_contracts", type: "Write", purpose: "Modify subscription frequency, product swaps, and cancellations." },
    { permission: "read_merchant_managed_payment_methods", type: "Read", purpose: "Display saved payment methods to let customers update billing." },
    { permission: "write_payment_methods", type: "Write", purpose: "Securely update payment method data (PCI-compliant) when customers want to change billing." },
  ];

  const webhooks = [
    { topic: "app/uninstalled", purpose: "Clean up app data on uninstall." },
    { topic: "customers/data_request", purpose: "Export customer data to comply with GDPR." },
    { topic: "customers/redact", purpose: "Delete customer data on privacy request." },
    { topic: "shop/redact", purpose: "Delete all shop data on request." },
    { topic: "subscription_billing_attempts/success", purpose: "Track successful payments for analytics and sync fulfillment." },
    { topic: "subscription_billing_attempts/failure", purpose: "Trigger dunning flow when billing fails." },
    { topic: "subscription_billing_cycle_edits/create", purpose: "Notify customers when a billing cycle is modified." },
    { topic: "subscription_billing_cycle_edits/update", purpose: "Notify customers when a billing cycle is updated." },
    { topic: "subscription_billing_cycle_edits/delete", purpose: "Notify customers when a billing cycle change is cancelled." },
    { topic: "customers/update", purpose: "Sync customer profile changes to subscription records." },
    { topic: "orders/create", purpose: "Track new subscription-related orders." },
    { topic: "customers/create", purpose: "Auto-enroll eligible new customers." },
    { topic: "app/purchases/one_time/update", purpose: "Handle app billing lifecycle events." },
  ];

  const dataRetention = [
    { type: "Subscription records", period: "Retained while store is active." },
    { type: "Transaction history", period: "7 years (legal requirement)." },
    { type: "Access tokens", period: "Encrypted and auto-revoked on uninstall." },
    { type: "Analytics aggregate", period: "Anonymized data retained for 12 months." },
    { type: "Event logs", period: "90 days." },
  ];

  const thirdPartySharing = [
    { vendor: "Shopify", purpose: "App operation", dataShared: "API requests and events." },
    { vendor: "Microsoft Azure", purpose: "Hosting & storage", dataShared: "All stored data (encrypted)." },
    { vendor: "Paddle/Stripe", purpose: "Subscription payments only", dataShared: "Payment tokens (no card data)." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Data Usage & Permissions
          </h1>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="border border-border rounded-2xl p-8 bg-card">
            <h2 className="font-display text-2xl font-bold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              This page explains exactly what data AIVA Subscription Management accesses, why we need each permission, and how we use
              your data. We believe in full transparency about our data practices.
            </p>
          </div>
        </div>
      </section>

      {/* API Permissions */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">API Permissions (Scopes)</h2>
          <p className="text-muted-foreground mb-6">The following app permissions are requested when you install the app.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="gradient-bg text-primary-foreground">
                  <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Permission</th>
                  <th className="text-left px-4 py-3 font-semibold">Type</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {apiPermissions.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-muted/30" : "bg-background"}>
                    <td className="px-4 py-3 font-mono text-xs">{row.permission}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                          row.type === "Read"
                            ? "bg-primary/10 text-primary"
                            : "bg-secondary/10 text-secondary"
                        }`}
                      >
                        {row.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 space-y-1">
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold text-primary">private</span> — Extensive permissions and access to the full app.
            </p>
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold text-secondary">Personal</span> — Sensitive permissions that require extra security.
            </p>
          </div>
        </div>
      </section>

      {/* Webhooks */}
      <section className="py-12 px-6 gradient-subtle-bg">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">Webhooks</h2>
          <p className="text-muted-foreground mb-6">We subscribe to the following webhooks and events to keep your data in sync.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="gradient-bg text-primary-foreground">
                  <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Webhook Topic</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {webhooks.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-background"}>
                    <td className="px-4 py-3 font-mono text-xs">{row.topic}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Data We Store */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Data We Store</h2>

          <div className="mb-8">
            <h3 className="font-display text-xl font-bold mb-3">Shop Installation Record</h3>
            <p className="text-muted-foreground mb-3">When you install the app, we store:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
              <li>Your myshopify.com domain</li>
              <li>Encrypted access token (AES-256)</li>
              <li>Installation & uninstallation timestamps</li>
              <li>Subscription plan tier</li>
              <li>Basic shop info (name, email, plan, currency, timezone)</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="font-display text-xl font-bold mb-3">Subscription Sync Records</h3>
            <p className="text-muted-foreground mb-3">For each subscription contract, we store:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
              <li>Shopify contract ID (for reference only)</li>
              <li>Subscription status and billing frequency</li>
              <li>Next billing date</li>
              <li>Line item details</li>
              <li>Last sync timestamp</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-3 italic">
              Note: We do NOT store customer payment information. All payments are processed directly through Shopify's secure payment infrastructure.
            </p>
          </div>

          {/* What We Do NOT Store */}
          <div className="border-2 border-destructive/30 bg-destructive/5 rounded-2xl p-6 mb-8">
            <h3 className="font-display text-xl font-bold mb-3 text-destructive">What We Do NOT Store</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
              <li>Customer names or email addresses (fetched on-demand)</li>
              <li>Full payment card numbers (only last 4 digits displayed)</li>
              <li>Order details beyond what subscription analytics require</li>
              <li>Product inventory data</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Data Processing Locations */}
      <section className="py-12 px-6 gradient-subtle-bg">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Data Processing Locations</h2>
          <p className="text-muted-foreground mb-3">Your data is processed and stored in:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground mb-4">
            <li><strong>Application Servers:</strong> Microsoft Azure (eastus2 and westus2 regions)</li>
            <li><strong>Database:</strong> Azure SQL Database (eastus2 failover)</li>
            <li><strong>Backups:</strong> Azure Geo-Redundant Storage (GRS)</li>
          </ul>
          <p className="text-sm text-muted-foreground">
            All data is encrypted in transit (TLS 1.2+) and at rest using AES-256 encryption.
          </p>
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Data Retention</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="gradient-bg text-primary-foreground">
                  <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Data Type</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">Retention Period</th>
                </tr>
              </thead>
              <tbody>
                {dataRetention.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-muted/30" : "bg-background"}>
                    <td className="px-4 py-3 font-semibold">{row.type}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Third-Party Data Sharing */}
      <section className="py-12 px-6 gradient-subtle-bg">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Third-Party Data Sharing</h2>
          <p className="text-muted-foreground mb-6">We share data with the following third-party providers:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="gradient-bg text-primary-foreground">
                  <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Vendor</th>
                  <th className="text-left px-4 py-3 font-semibold">Purpose</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">Data Shared</th>
                </tr>
              </thead>
              <tbody>
                {thirdPartySharing.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-background"}>
                    <td className="px-4 py-3 font-semibold">{row.vendor}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.purpose}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.dataShared}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            We do NOT sell your data to any third parties.
          </p>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Your Rights</h2>
          <p className="text-muted-foreground mb-4">
            Under GDPR, CCPA, and other applicable privacy laws, you have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
            <li><strong>Access:</strong> Request a copy of all data we hold about your store.</li>
            <li><strong>Rectification:</strong> Request correction of inaccurate data.</li>
            <li><strong>Erasure:</strong> Request deletion of your data.</li>
            <li><strong>Portability:</strong> Export your data in a machine-readable format.</li>
            <li><strong>Objection:</strong> Object to certain types of processing.</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            To exercise these rights, email us at{" "}
            <a href="mailto:support@getaiva.ai" className="text-primary hover:underline">
              support@getaiva.ai
            </a>
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 px-6 gradient-subtle-bg">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground mb-4">For any questions about our data practices:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
            <li>
              Privacy inquiries:{" "}
              <a href="mailto:privacy@getaiva.ai" className="text-primary hover:underline">
                privacy@getaiva.ai
              </a>
            </li>
            <li>
              Technical support:{" "}
              <a href="mailto:support@getaiva.ai" className="text-primary hover:underline">
                support@getaiva.ai
              </a>
            </li>
            <li>
              General:{" "}
              <a href="mailto:info@getaiva.ai" className="text-primary hover:underline">
                info@getaiva.ai
              </a>
            </li>
          </ul>
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

export default DataUsage;
