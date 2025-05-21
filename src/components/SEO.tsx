import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

type SEOProps = {
  title: string;
  description: string;
  image?: string;
  url?: string;
};

const SITE_URL = import.meta.env.VITE_SITE_URL || window.location.origin;

export default function SEO({ title, description, image, url }: SEOProps) {
  const { pathname, search, hash } = useLocation();
  const canonical = url ?? `${SITE_URL}${pathname}${search}${hash}`;

  const absoluteImage = image
    ? image.startsWith(`http`)
      ? image
      : `${SITE_URL}${image}`
    : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} />

      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {absoluteImage && <meta property="og:image" content={absoluteImage} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content={absoluteImage ? `summary_large_image` : `summary`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {absoluteImage && <meta name="twitter:image" content={absoluteImage} />}
    </Helmet>
  );
}
