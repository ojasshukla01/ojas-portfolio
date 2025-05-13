import Layout from '@/components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SkillsCarousel from '@/components/SkillsCarousel';

export default function Home() {
  return (
    <Layout>
      <section className="h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#1E3A8A] via-[#6D28D9] to-[#EC4899] text-white font-[Inter] relative">
        <div className="text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
              Hi, I’m <span className="text-white">Ojas Shukla</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-white/90 font-light tracking-wide">
              Senior Data Engineer · GCP · AWS · dbt · Kafka · Real-time Pipelines
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center items-center gap-4"
          >
            <Link
              href="/resume.pdf"
              className="inline-block bg-white text-indigo-700 font-semibold px-6 py-2 rounded shadow hover:bg-indigo-100 transition duration-300 border border-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Download Resume
            </Link>

            <Link
              href="https://github.com/ojasshukla01"
              className="inline-block bg-transparent border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-indigo-700 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 View GitHub
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Skills Carousel Section */}
      <SkillsCarousel />
    </Layout>
  );
}
