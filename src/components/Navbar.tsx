import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const router = useRouter();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    const newTheme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <nav className="w-full sticky top-0 z-50 border-b bg-white text-black shadow-sm dark:bg-gray-900 dark:text-white dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-700 dark:text-blue-400">Ojas</span>

        <div className="flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`hover:text-blue-600 dark:hover:text-blue-400 ${
                router.pathname === item.path
                  ? 'text-blue-600 dark:text-blue-400 underline'
                  : ''
              }`}
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 border rounded text-sm border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
}
