
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

// Sample products data
const featuredProducts = [
  {
    id: '1',
    title: 'Ultimate E-Commerce Guide',
    description: 'A comprehensive guide to building and scaling your online store with proven strategies.',
    price: '$29.99',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1920&auto=format&fit=crop',
    category: 'E-Book',
    downloadCount: 1245
  },
  {
    id: '2',
    title: 'Digital Marketing Templates',
    description: 'Ready-to-use templates for all your digital marketing needs - social media, ads, and more.',
    price: '$19.99',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1920&auto=format&fit=crop',
    category: 'Templates',
    downloadCount: 987
  },
  {
    id: '3',
    title: 'Sales Funnel Masterclass',
    description: 'Learn how to build high-converting sales funnels that turn visitors into loyal customers.',
    price: '$59.99',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto=format&fit=crop',
    category: 'Course',
    downloadCount: 2341
  },
  {
    id: '4',
    title: 'Social Media Content Pack',
    description: 'Over 500 customizable social media templates, captions, and strategies for all platforms.',
    price: '$39.99',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1920&auto=format&fit=crop',
    category: 'Bundle',
    downloadCount: 782
  }
];

const testimonials = [
  {
    quote: "This app has transformed how we deliver digital products. Our customers love the seamless experience.",
    author: "Sarah Johnson",
    role: "Founder, Digital Creatives",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80"
  },
  {
    quote: "The setup was incredibly easy, and the delivery process is flawless. I've seen a 40% increase in digital sales since switching.",
    author: "Mark Thompson",
    role: "CEO, Thompson Digital",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80"
  },
  {
    quote: "The analytics features alone are worth it. I finally understand which products are performing best and why.",
    author: "Ava Martinez",
    role: "Marketing Director, EduTech",
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80"
  }
];

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      
      <FeatureSection />
      
      {/* Featured Products Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Digital Products</h2>
              <p className="text-muted-foreground max-w-2xl">
                Discover our most popular digital downloads that help businesses grow online.
              </p>
            </div>
            <Button variant="ghost" className="mt-4 md:mt-0">
              View all products <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by store owners</h2>
            <p className="text-muted-foreground text-lg">
              See what Shopify merchants are saying about our digital delivery solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-sm">
                <div className="mb-6">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 21H9C8.17157 21 7.5 20.3284 7.5 19.5V15C7.5 14.1716 8.17157 13.5 9 13.5H12C12.8284 13.5 13.5 12.8284 13.5 12V9.75C13.5 9.33579 13.8358 9 14.25 9H15.75C16.1642 9 16.5 9.33579 16.5 9.75V15C16.5 15.8284 15.8284 16.5 15 16.5H12.75V18H15C15.8284 18 16.5 18.6716 16.5 19.5V21C16.5 21.8284 15.8284 22.5 15 22.5H13.5C12.6716 22.5 12 21.8284 12 21Z" fill="currentColor" className="fill-accent"/>
                    <path d="M25.5 21H21C20.1716 21 19.5 20.3284 19.5 19.5V15C19.5 14.1716 20.1716 13.5 21 13.5H24C24.8284 13.5 25.5 12.8284 25.5 12V9.75C25.5 9.33579 25.8358 9 26.25 9H27.75C28.1642 9 28.5 9.33579 28.5 9.75V15C28.5 15.8284 27.8284 16.5 27 16.5H24.75V18H27C27.8284 18 28.5 18.6716 28.5 19.5V21C28.5 21.8284 27.8284 22.5 27 22.5H25.5C24.6716 22.5 24 21.8284 24 21Z" fill="currentColor" className="fill-accent"/>
                  </svg>
                </div>
                <p className="mb-6 text-foreground/90">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.imageUrl} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-16 flex items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Start delivering digital products today</h2>
                  <p className="text-primary-foreground/80 mb-8 max-w-md">
                    Join thousands of Shopify merchants who are growing their businesses with our digital delivery platform.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0" />
                      <span>Free 14-day trial, no credit card required</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0" />
                      <span>Easy setup, works with all Shopify plans</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0" />
                      <span>Dedicated support team to help you succeed</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                      Start Free Trial
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      Contact Sales
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="relative hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1920&auto=format&fit=crop" 
                  alt="Digital Delivery Dashboard Preview" 
                  className="h-full w-full object-cover object-left"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
