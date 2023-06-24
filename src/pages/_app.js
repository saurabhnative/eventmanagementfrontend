import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] });

export default function EventApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Events section" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
