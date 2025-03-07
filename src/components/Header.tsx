
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import Button from './Button';
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, ChevronDown, Search, ShoppingCart } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 bg-white/90 backdrop-blur-lg shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl tracking-tight text-foreground flex items-center gap-2">
          <span className="text-accent">Digital</span>
          <span>Delivery</span>
        </Link>
        
        {!isMobile ? (
          <nav className="flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/products">Products</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-foreground/90 hover:text-foreground transition-colors">
                  <span>Resources</span>
                  <ChevronDown size={16} />
                </button>
                <div className="absolute hidden group-hover:block pt-2 left-0 min-w-[200px]">
                  <div className="glass rounded-lg p-3 shadow-lg animate-fade-in">
                    <NavLink href="/docs" className="block px-4 py-2 rounded-md hover:bg-secondary">Documentation</NavLink>
                    <NavLink href="/tutorials" className="block px-4 py-2 rounded-md hover:bg-secondary">Tutorials</NavLink>
                    <NavLink href="/blog" className="block px-4 py-2 rounded-md hover:bg-secondary">Blog</NavLink>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button aria-label="Search" className="text-foreground/70 hover:text-foreground transition-colors">
                <Search size={20} />
              </button>
              <button aria-label="Cart" className="text-foreground/70 hover:text-foreground transition-colors">
                <ShoppingCart size={20} />
              </button>
              <Button size="sm" variant="outline">Sign In</Button>
              <Button size="sm">Get Started</Button>
            </div>
          </nav>
        ) : (
          <div className="flex items-center gap-4">
            <button aria-label="Cart" className="text-foreground/70 hover:text-foreground transition-colors">
              <ShoppingCart size={20} />
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-foreground focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {isMenuOpen && (
              <div className="fixed inset-0 top-[60px] bg-background z-40 animate-fade-in">
                <nav className="container mx-auto px-6 py-8 flex flex-col space-y-6">
                  <NavLink href="/" className="text-lg" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                  <NavLink href="/products" className="text-lg" onClick={() => setIsMenuOpen(false)}>Products</NavLink>
                  <NavLink href="/pricing" className="text-lg" onClick={() => setIsMenuOpen(false)}>Pricing</NavLink>
                  <NavLink href="/docs" className="text-lg" onClick={() => setIsMenuOpen(false)}>Documentation</NavLink>
                  <NavLink href="/tutorials" className="text-lg" onClick={() => setIsMenuOpen(false)}>Tutorials</NavLink>
                  <NavLink href="/blog" className="text-lg" onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
                  
                  <div className="pt-4 flex flex-col space-y-4">
                    <Button variant="outline" className="w-full" onClick={() => setIsMenuOpen(false)}>Sign In</Button>
                    <Button className="w-full" onClick={() => setIsMenuOpen(false)}>Get Started</Button>
                  </div>
                </nav>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

const NavLink: React.FC<{ href: string; className?: string; onClick?: () => void; children: React.ReactNode }> = ({ 
  href, 
  className,
  onClick,
  children 
}) => {
  return (
    <Link 
      to={href} 
      className={cn(
        "text-foreground/90 hover:text-foreground transition-colors link-underline",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Header;
