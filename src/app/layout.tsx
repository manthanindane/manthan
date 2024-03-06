import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Manrope } from "next/font/google";

import "./globals.css";


const inter = Inter({ 
  subsets: ["latin"],
  display:'swap',
 });
const manrope = Manrope({
  subsets:["latin"],
  display:'swap',
});



export const metadata: Metadata = {
  title: "@manthanindane",
  description: "The God",
};

export default function RootLayout({
  children,
  
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (
    <html lang="en" className="dark">
      
      <body className={manrope.className}>
      
        
        {children}</body>
    </html>
  );
}
