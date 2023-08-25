import Header from 'components/layout/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import { Footer } from 'components/layout/Footer';

import 'styles/_index.scss';

const inter = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CHFLIX | Xem phim hoạt hình Trung Quốc miễn phí',
  description: 'Xem phim hoạt hình Trung Quốc thuyết minh, vietsub mới nhất miễn phí',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
