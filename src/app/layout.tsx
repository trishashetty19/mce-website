'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import DesktopNavbar from "./components/desktop-navbar";
import MobileNavbar from "./components/mobile-navbar";
import Footer from "./components/footer"
import { useEffect, useState } from "react";
import { metadata } from "./head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  const title = String(metadata.title ?? "Default Title");

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={metadata.description ?? "Default Description"} />
      </head>
      <body className={`${inter.className} antialiased`}>
        {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
