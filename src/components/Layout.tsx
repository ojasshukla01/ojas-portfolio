import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Ojas Shukla | Data Engineer</title>
        <meta name="description" content="Portfolio of Ojas Shukla, Senior Data Engineer." />
      </Head>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">{children}</main>
    </>
  );
}
