"use client"

import { ThemeProvider } from 'next-themes';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default CommonLayout;
