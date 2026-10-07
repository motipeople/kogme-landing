import { ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FeatureSectionProps {
  className?: string;
  title: ReactNode;
  image?: string;
  imageAlt?: string;
  customVisual?: ReactNode;
  children?: ReactNode;
}

export function FeatureSection({
  className = '',
  title,
  image,
  imageAlt,
  customVisual,
  children,
}: FeatureSectionProps) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className={`section feature ${className}`}>
      <div className="container">
        <h2 className="feature__title">{title}</h2>
      </div>
      
      <div 
        ref={ref} 
        className={isVisible ? 'animate-fade-up' : 'opacity-0'}
      >
        {customVisual ? (
          customVisual
        ) : image ? (
          <div className="feature__visual">
            <img src={image} alt={imageAlt} />
          </div>
        ) : null}
      </div>

      {children}
    </section>
  );
}
