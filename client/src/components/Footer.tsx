import { Link } from "wouter";
import { Car, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="about" className="border-t bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <Car className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">RouteBuddy</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Making ride-sharing safer, smarter, and more accessible for everyone.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="link-facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="link-twitter"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="link-instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="link-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-about">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-careers">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-blog">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-press">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-help">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-safety">
                  Safety
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-terms">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-cookies">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-disclaimer">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <p className="text-sm text-center text-muted-foreground" data-testid="text-copyright">
            © {new Date().getFullYear()} RouteBuddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
