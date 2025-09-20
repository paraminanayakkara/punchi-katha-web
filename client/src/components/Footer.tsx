import { Button } from '@/components/ui/button';
import { Heart, Sparkles } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: FaFacebook, 
      href: '#', 
      color: 'hover:text-blue-500' 
    },
    { 
      name: 'Instagram', 
      icon: FaInstagram, 
      href: '#', 
      color: 'hover:text-pink-500' 
    },
    { 
      name: 'Twitter', 
      icon: FaTwitter, 
      href: '#', 
      color: 'hover:text-blue-400' 
    }
  ];

  const footerLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Support', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-r from-primary/5 via-secondary/10 to-accent/5 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Logo and Tagline */}
          <div className="text-center md:text-left space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div 
                className="text-2xl font-heading text-primary font-bold"
                data-testid="text-footer-logo"
              >
                Punchi Katha
              </div>
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <p 
              className="text-sm text-foreground/70 max-w-xs mx-auto md:mx-0"
              data-testid="text-footer-tagline"
            >
              Creating magical stories where your child becomes the hero of their own adventure.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="text-center space-y-4">
            <h3 
              className="font-semibold text-foreground"
              data-testid="text-social-title"
            >
              Follow Our Magic
            </h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    className={`rounded-full hover-elevate ${social.color} transition-colors`}
                    data-testid={`button-social-${social.name.toLowerCase()}`}
                    onClick={() => console.log(`${social.name} clicked`)}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right space-y-4">
            <h3 
              className="font-semibold text-foreground"
              data-testid="text-links-title"
            >
              Quick Links
            </h3>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded"
                  data-testid={`link-${link.label.toLowerCase().replace(' ', '-')}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p 
            className="text-sm text-foreground/60 flex items-center justify-center gap-2"
            data-testid="text-copyright"
          >
            © 2024 Punchi Katha. Made with 
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            for little dreamers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}