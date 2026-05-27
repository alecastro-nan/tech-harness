import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ToastManager } from "@/components/ui/ToastManager";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kinetic-tech-harness.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cyber-Run | Performance Commerce",
    template: "%s | Cyber-Run",
  },
  description:
    "Cyber-Run is an e-commerce experience for elite running gear, wearable telemetry, and performance-focused training products.",
  keywords: [
    "running gear",
    "performance ecommerce",
    "sports wearables",
    "carbon plate shoes",
    "fitness technology",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Cyber-Run | Performance Commerce",
    description:
      "Shop elite footwear and wearable training tech designed for precision, speed, and recovery.",
    url: "/",
    siteName: "Cyber-Run",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber-Run | Performance Commerce",
    description:
      "Elite running commerce for athletes who train with data and intent.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full dark`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <div
          id="app-shell"
          className="min-h-full flex flex-col transition-[filter,opacity] duration-300"
        >
          {children}
        </div>
        <ToastManager />
      </body>
    </html>
  );
}
