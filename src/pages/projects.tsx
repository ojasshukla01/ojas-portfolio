import Layout from '@/components/Layout';

const projects = [
  {
    title: "OpenCompliance ESG",
    description: "Open-source ESG compliance dashboard with automated validation.",
    tech: ["Python", "Streamlit", "FastAPI", "DuckDB"],
    github: "https://github.com/ojasshukla01/opencompliance-esg",
  },
  {
    title: "Data Engineering Case Studies",
    description: "Real-world ETL pipelines and orchestration examples.",
    tech: ["Python", "dbt", "Airflow", "BigQuery"],
    github: "https://github.com/ojasshukla01/data-engineering-case-studies",
  },
  {
    title: "SOP Generator Web App",
    description: "Dynamic SOP generator built with React and FastAPI.",
    tech: ["React", "FastAPI", "Docker"],
    github: "https://github.com/ojasshukla01/sop_generator_app",
  },
];

export default function Projects() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6 border hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{proj.title}</h2>
            <p className="text-sm mb-3">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
}
