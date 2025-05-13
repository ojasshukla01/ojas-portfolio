import Layout from '@/components/Layout';

export default function Contact() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Contact</h1>

      <p className="text-lg mb-4">
        If you're interested in working together, want to collaborate on a project, or just want to connect, feel free to reach out!
      </p>

      <ul className="text-base space-y-2">
        <li>
          📧 Email: <a href="mailto:ojasshukla01@gmail.com" className="text-blue-600 underline">ojasshukla01@gmail.com</a>
        </li>
        <li>
          💼 LinkedIn: <a href="https://www.linkedin.com/in/ojasshukla01" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">linkedin.com/in/ojasshukla01</a>
        </li>
        <li>
          🐙 GitHub: <a href="https://github.com/ojasshukla01" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">github.com/ojasshukla01</a>
        </li>
      </ul>
    </Layout>
  );
}
