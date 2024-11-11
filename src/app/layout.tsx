import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { Copyright } from "@/components/Copyright";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UMSA - Unidad de postgrados",
  description: "",
  icons: {
    icon: '../../favicon.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <NavigationBar />
          <Navbar />
          <div>{children}</div>
          <Footer />
          <Copyright/>
        </ThemeProvider>
      </body>
    </html>
  );
}
