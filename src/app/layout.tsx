import { TodosProvider } from '@/store/todos';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CommonLayout } from './common/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Task Planner',
  description:
    'Simplify your life and achieve more with our smart and user-friendly TODO app.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TodosProvider>
          <CommonLayout>{children}</CommonLayout>
        </TodosProvider>
      </body>
    </html>
  );
}
