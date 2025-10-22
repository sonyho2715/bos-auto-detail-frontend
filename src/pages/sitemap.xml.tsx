// src/pages/sitemap.xml.tsx
import { GetServerSideProps } from 'next';

function generateSiteMap() {
  const baseUrl = 'https://bosautodetail.com';
  const currentDate = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${baseUrl}</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${baseUrl}/services</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${baseUrl}/pricing</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${baseUrl}/book</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${baseUrl}/reviews</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${baseUrl}/gallery</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${baseUrl}/reviews</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${baseUrl}/about</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${baseUrl}/contact</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${baseUrl}/blog</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.7</priority>
     </url>
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
