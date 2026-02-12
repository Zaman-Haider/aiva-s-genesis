import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl font-bold gradient-text">
          AIVA
        </Link>
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className={`font-medium text-sm transition-colors hover:text-primary ${
              location.pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            
          </Link>
          <Link
            to="/the-story"
            className={`font-medium text-sm transition-colors hover:text-primary ${
              location.pathname === "/the-story" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            The Story
          </Link>
          <Link
            to="/partner-programme"
            className={`font-medium text-sm transition-colors hover:text-primary ${
              location.pathname === "/partner-programme" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Partner Programme
          </Link>
          <Link
            to="/subscriptions"
            className={`font-medium text-sm transition-colors hover:text-primary ${
              location.pathname === "/subscriptions" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Subscriptions
          </Link>
          <Link
            to="/clawdbot"
            className={`font-medium text-sm transition-colors hover:text-primary ${
              location.pathname === "/clawdbot" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Clawdbot
          </Link>
          <Link
            to="/merchants"
            className={`font-medium text-sm transition-colors hover:text-primary ${
              location.pathname === "/merchants" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Merchants
          </Link>
          <Link
            to="/data-usage"
            className={`font-medium text-sm transition-colors hover:text-primary ${
              location.pathname === "/data-usage" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Data Usage
          </Link>
          <Link
            to="/contact"
            className={`font-medium text-sm transition-colors hover:text-primary ${
              location.pathname === "/contact" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Contact
          </Link>
          <a
            href="#"
            className="gradient-bg text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
