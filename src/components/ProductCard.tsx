
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import Button from './Button';
import { Download, ExternalLink } from 'lucide-react';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
  downloadCount?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  price,
  imageUrl,
  category,
  downloadCount = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "group relative rounded-xl overflow-hidden transition-all duration-300 bg-card shadow-sm hover:shadow-md",
        isHovered ? "scale-[1.02]" : "scale-100"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-secondary/40">
        <img 
          src={imageUrl} 
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            isHovered ? "scale-110" : "scale-100"
          )}
          loading="lazy"
        />
        
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <span className="text-white text-sm font-medium">
              {downloadCount > 0 && (
                <span className="flex items-center gap-1">
                  <Download size={14} />
                  {downloadCount} downloads
                </span>
              )}
            </span>
            <Button 
              size="sm" 
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="View Product"
            >
              <ExternalLink size={16} className="mr-1" /> View
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="mb-3">
          <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-2.5 py-0.5 rounded-full">{category}</span>
        </div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="font-semibold">{price}</span>
          <Link to={`/product/${id}`}>
            <Button size="sm" variant="outline">Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
