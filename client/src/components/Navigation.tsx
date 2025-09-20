import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Book Examples', href: '#examples' },
    { label: 'Contact Us', href: '#contact' }
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className="bg-[#F5F1E8]/90 backdrop-blur-md rounded-full border border-[#E5D5C8]/50 shadow-lg px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-heading text-[#E17B47] font-bold" data-testid="text-logo">
              Punchi Katha
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#4A5D4A] hover:text-[#2B4C6F] transition-colors hover-elevate px-3 py-2 rounded-full"
                data-testid={`link-${item.label.toLowerCase().replace(' ', '-')}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border/50">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-[#4A5D4A] hover:text-[#2B4C6F] transition-colors hover-elevate px-3 py-2 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase().replace(' ', '-')}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}