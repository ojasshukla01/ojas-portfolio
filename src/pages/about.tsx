import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">About Me</h1>

      <section className="mb-6">
        <p className="text-lg">
          I'm Ojas Shukla, a Senior Data Engineer with over 5 years of experience building scalable cloud-native data platforms, automating ETL/ELT processes, and designing real-time data workflows. I’ve worked across fintech, sustainability, and health sectors to deliver robust data architectures using GCP, AWS, dbt, and Python.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">🎓 Education</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Master of Computer Science — University of Wollongong, 2022</li>
          <li>Bachelor of Computer Science — Mumbai University, 2017</li>
          <li>Diploma in Computer Technology — MSBTE, 2013</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">🌐 Languages</h2>
        <p className="text-lg">English, Hindi, Marathi</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🎯 Interests</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Literature — Fiction, Poetry</li>
          <li>Competitive gaming — DOTA2, strategy games</li>
          <li>Badminton — doubles, recreational</li>
          <li>Swimming — freestyle, endurance</li>
        </ul>
      </section>
    </Layout>
  );
}
