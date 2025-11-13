import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI LinkedIn Post Studio",
  description:
    "Daily, ready-to-publish LinkedIn posts on trending AI breakthroughs with hooks, insights, CTAs, and visuals tuned for engagement.",
  openGraph: {
    title: "AI LinkedIn Post Studio",
    description:
      "Fresh hooks, strategic insights, and visuals for your AI LinkedIn strategy — updated daily from live trend signals.",
    url: "https://agentic-6bd5df71.vercel.app",
    siteName: "AI LinkedIn Post Studio",
    images: [
      {
        url: "https://image.pollinations.ai/prompt/Futuristic%20AI%20content%20studio%20dashboard?width=1200&height=630&nologo=true",
        width: 1200,
        height: 630,
        alt: "AI LinkedIn content studio dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI LinkedIn Post Studio",
    description:
      "Copy-ready AI trend posts built for LinkedIn engagement — hooks, insights, CTAs, visuals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
