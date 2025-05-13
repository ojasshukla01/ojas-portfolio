
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">Hi, I’m <span className="text-blue-600">Ojas Shukla</span></h1>
      <p className="mb-6 text-lg">
        Senior Data Engineer — I build cloud-native data pipelines, real-time platforms, and data-driven solutions.
      </p>
      <div className="space-x-4">
        <Link href="/projects" className="text-blue-500 underline">View Projects</Link>
        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Download Resume</Link>
      </div>
    </Layout>
  );
}
