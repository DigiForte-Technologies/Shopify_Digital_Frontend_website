
import React from 'react';
import { Download, FileText, Lock, Zap, BarChart, Globe } from 'lucide-react';

const features = [
  {
    icon: <FileText size={24} />,
    title: "Any Digital Format",
    description: "Sell any type of digital file - PDFs, videos, audio, software, and more - all from your Shopify store."
  },
  {
    icon: <Lock size={24} />,
    title: "Secure Downloads",
    description: "Keep your digital products secure with expiring links, download limits, and user verification."
  },
  {
    icon: <Zap size={24} />,
    title: "Instant Delivery",
    description: "Automatic delivery to customers immediately after purchase - no manual intervention needed."
  },
  {
    icon: <Download size={24} />,
    title: "Easy Integration",
    description: "Seamlessly integrates with your Shopify store with minimal setup required."
  },
  {
    icon: <BarChart size={24} />,
    title: "Analytics & Insights",
    description: "Track downloads, popular products, and customer behavior to optimize your business."
  },
  {
    icon: <Globe size={24} />,
    title: "Global Delivery",
    description: "Deliver digital products to customers anywhere in the world, instantly."
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need for digital delivery</h2>
          <p className="text-muted-foreground text-lg">
            Our platform provides all the tools you need to sell and deliver digital products with ease.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
