/** @format */

import Footer from '@/components/Home/Footer/Footer';
import ResponsiveNav from '@/components/Home/Navbar/ResponsiveNav';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import ScrollToTop from '@/components/Helper/ScrollToTop ';

const font = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'real estate next js app',
  description: 'real estate website by create next js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop  />
      </body>
    </html>
  );
}
