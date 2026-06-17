import { Helmet } from 'react-helmet-async';

function SEO({ title, description, path }) {
  const siteTitle = 'ASH Dental';
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Luxury Dentistry in Pretoria East`;
  const defaultDescription = 'Escape traditional dental appointments and embark on a transformative journey at ASH Dental, conveniently located in Ashlea Gardens, Pretoria.';
  const baseUrl = 'https://www.ashdental.co.za';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={`${baseUrl}${path || ''}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={`${baseUrl}${path || ''}`} />
    </Helmet>
  );
}

export default SEO;
