import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/Nav";
import { personalInfo } from "./data/content";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: "Software Developer specializing in full-stack development, cloud infrastructure, and AI-driven solutions. Building scalable applications with modern tech stacks.",
  keywords: ["Software Developer", "React", "TypeScript", "Cloud", "AI", "Full Stack", "New Jersey"],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://meermodi.dev",
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: "Software Developer specializing in full-stack development, cloud infrastructure, and AI-driven solutions.",
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: "/og-image.jpg", // You can add this image later
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: "Software Developer specializing in full-stack development, cloud infrastructure, and AI-driven solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sora.variable} ${manrope.variable} antialiased`}>
        <Nav />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
