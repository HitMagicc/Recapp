import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const PoppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400"]
});

// ... (font configuration lainnya tetap sama)

export const metadata: Metadata = {
  title: "Recapp",
  description: "Gitu gitu lah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0"
        />
      </head>
      {/* Di sini GAK ADA Navbar & Flexbox lagi */}
      <body className={`${PoppinsSans.variable} antialiased bg-[#F8F9FA]`}>
        {children}
      </body>
    </html>
  );
}