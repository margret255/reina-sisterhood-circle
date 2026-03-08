import { Link } from "react-router-dom";
import { Heart, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-display font-bold mb-3">RWCC</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Reina WombCare Campus Circle — Where healing turns into confidence, and confidence into destiny.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {[
                { label: "About Us", path: "/about" },
                { label: "Activities", path: "/activities" },
                { label: "Events", path: "/events" },
                { label: "Blog", path: "/blog" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-display font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/join" className="hover:opacity-100 transition-opacity">Join RWCC</Link></li>
              <li><Link to="/start-branch" className="hover:opacity-100 transition-opacity">Start a Branch</Link></li>
              <li><Link to="/support" className="hover:opacity-100 transition-opacity">Support Us</Link></li>
              <li><Link to="/gallery" className="hover:opacity-100 transition-opacity">Gallery</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
              <a href="mailto:reinacampuscircle@gmail.com" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors" aria-label="Gmail">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-50">© 2026 Reina WombCare Campus Circle. All rights reserved.</p>
          <p className="text-sm opacity-50 flex items-center gap-1">
            Made with <Heart size={14} className="text-primary" /> for our sisterhood
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
