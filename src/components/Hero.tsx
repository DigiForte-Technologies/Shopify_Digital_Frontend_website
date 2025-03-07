
import React from 'react';
import Button from './Button';
import { cn } from "@/lib/utils";
import { ArrowRight, Download, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 10 H40 M10 0 V40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent mb-6 animate-fade-in">
            <span className="text-xs font-medium">Shopify's most elegant digital delivery solution</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-balance animate-fade-in animation-delay-100">
            Deliver digital products with <span className="text-accent">exceptional</span> experience
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance animate-fade-in animation-delay-200">
            The most elegant way to sell and deliver digital products directly from your Shopify store. Seamless, secure, and beautifully designed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in animation-delay-300">
            <Button size="lg" className="group">
              Get Started <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground animate-fade-in animation-delay-500">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-accent" />
              <span>Secure delivery</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap size={16} className="text-accent" />
              <span>Lightning fast</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Download size={16} className="text-accent" />
              <span>5000+ stores trust us</span>
            </div>
          </div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="aspect-[16/9] rounded-xl overflow-hidden glass shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1920&auto=format&fit=crop"
              alt="Digital Delivery Dashboard" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
