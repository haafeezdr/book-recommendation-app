import '../app/globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';


const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Book Recommendation System',
  description: 'Created By haafeezdev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${outfit.className}`}>
            <main className=''>
              {children}
            </main>
      </body>
    </html>
  );
}