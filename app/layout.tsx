import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from './NavBar';
import Sidebar from './Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sidebar-Sheet Drawer Demo',
  description:
    'Demo of ShadCN-Ui sidebar with sheet component modified to be left side drawer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col">
          <NavBar />
          <div className="flex flex-row h-screen">
            <Sidebar />

            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
