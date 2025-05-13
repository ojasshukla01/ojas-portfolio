import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { useEffect } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  return <main className={inter.className}><Component {...pageProps} /></main>;
}