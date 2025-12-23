import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rana Islam | Portfolio",
  description:
    "Showcasing my projects, skills, and professional experience as a fullstack developer.",
  keywords: [
    "developer",
    "portfolio",
    "fullstack",
    "react",
    "next.js",
    "typescript",
  ],
  icons: {
    icon: "/logo.png",
  },
  authors: [{ name: "Rana Islam" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://my-portfolio-rana-islam.vercel.app",
    siteName: "Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300`}
      >
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
