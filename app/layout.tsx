import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../app/component/Header/page'
import Footer from '../app/component/Footer/page'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel Website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
