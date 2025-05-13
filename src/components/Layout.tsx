import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
  <title>Ojas Shukla | Senior Data Engineer</title>
  <meta name="description" content="Portfolio of Ojas Shukla — Data Engineer skilled in GCP, AWS, dbt, DuckDB, and Python." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta property="og:title" content="Ojas Shukla | Senior Data Engineer" />
  <meta property="og:description" content="Explore Ojas Shukla's portfolio: projects, experience, and contact info." />
  <meta property="og:image" content="/og-image.png" />  {/* Optional: add OG image */}
  <meta property="og:url" content="https://ojas-portfolio-omega.vercel.app/" />
  <meta name="twitter:card" content="summary_large_image" />
</Head>

      <Navbar />
      <main className="max-w-4xl mx-auto p-6">{children}</main>
    </>
  );
}
