import { Helmet } from 'react-helmet-async';

interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
}

export function Head({ 
  title = 'Discover Top AI Agents',
  description = 'Explore our curated collection of AI agents designed to enhance your productivity, creativity, and problem-solving capabilities.',
  image = '/og-image.jpg',
  path = ''
}: HeadProps) {
  const baseUrl = 'https://topaiagents.fyi';
  const fullUrl = `${baseUrl}${path}`;
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
    </Helmet>
  );
}