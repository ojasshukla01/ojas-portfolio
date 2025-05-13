import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  return <Component {...pageProps} />;
}