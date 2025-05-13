import Layout from '@/components/Layout';

export default function Experience() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Experience</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold">🔧 Independent Data Engineer</h2>
          <p className="text-sm text-gray-600 mb-2">Feb 2025 – Present · Wollongong, NSW</p>
          <ul className="list-disc list-inside text-base">
            <li>Built a Unified Immigration Data Platform on GCP using dbt, DuckDB, Terraform, and FastAPI.</li>
            <li>Designed real-time + batch ingestion, schema validation, and automated pipelines.</li>
            <li>Experimented with LLMs (LangChain, Vertex AI) and ML workflows for prediction pipelines.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">🏢 Aluminium Stewardship Initiative (ASI)</h2>
          <p className="text-sm text-gray-600 mb-2">Feb 2023 – Jan 2025 · Wollongong, NSW</p>
          <ul className="list-disc list-inside text-base">
            <li>Built a central data warehouse on GCP integrating flat files, APIs, and cloud sources.</li>
            <li>Reduced ETL time by 40% using optimized dbt, DuckDB, and BigQuery pipelines.</li>
            <li>Created real-time data pipelines with Kafka and GCP Pub/Sub.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">🧠 Dementia Training Australia – UOW</h2>
          <p className="text-sm text-gray-600 mb-2">Jun 2022 – Jan 2023 · Wollongong, NSW</p>
          <ul className="list-disc list-inside text-base">
            <li>Automated ELT workflows with Cloud Functions + Airflow for real-time analytics.</li>
            <li>Improved dashboard performance (Power BI, Looker) by 35% via SQL tuning.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">🌍 HERE Technologies</h2>
          <p className="text-sm text-gray-600 mb-2">Feb 2019 – Dec 2021 · Mumbai, India</p>
          <ul className="list-disc list-inside text-base">
            <li>Built ETL pipelines using Hadoop, Spark, AWS Glue, and Redshift.</li>
            <li>Enabled geospatial analytics using Hive, HDFS, and QGIS.</li>
            <li>Designed dashboards with Tableau and Power BI for BI insights.</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
