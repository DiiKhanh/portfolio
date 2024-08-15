import Header from '@/components/header';
import Providers from '@/redux/provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer';
import { Toaster } from 'react-hot-toast';
import ThemeSwitch from '@/components/theme-switch';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DiiKhanh | Personal Portfolio',
  description: `I'm currently 2nd year student at UIT, wish to become full-stack developer`
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <link rel="icon" href="/favicon.ico" type='image/x-icon' />
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative
      pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className='bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem]
        h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]'/>
        <div className='bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem]
        h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem]
        lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'/>
        <Providers>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" />
          <ThemeSwitch />
        </Providers>
      </body>
    </html>
  );
};
