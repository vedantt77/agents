import { useState, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function LazyImage({ src, alt, className = '' }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
    img.onerror = () => setError(true);
  }, [src]);

  if (error) {
    return <div className={`bg-gray-200 ${className}`} />;
  }

  return (
    <>
      <div className={`bg-gray-200 ${className} ${loaded ? 'hidden' : ''}`} />
      <img
        src={src}
        alt={alt}
        className={`${className} ${loaded ? '' : 'hidden'}`}
        loading="lazy"
      />
    </>
  );
}