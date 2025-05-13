import Link from 'next/link';
import { useRouter } from 'next/router';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' }, // ← Add this
  ];
  

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-700">Ojas</span>
        <ul className="flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`hover:text-blue-600 ${
                  router.pathname === item.path ? 'text-blue-600 underline' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
