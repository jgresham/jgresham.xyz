import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { ModeToggle } from "../components/theme-toggle";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Software engineer building in AI, Ethereum, and robotics. Founder of NiceNode. Backend engineer on Geo at Wonderland. Creator of onchain games and Ethereum improvements.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jgresham.xyz"),
  title: {
    default: "Johns Gresham — Software Engineer",
    template: "%s | Johns Gresham",
  },
  description: siteDescription,
  keywords: [
    "Johns Gresham",
    "John Gresham",
    "software engineer",
    "Ethereum developer",
    "NiceNode",
    "Wonderland",
    "Geo",
    "geobrowser.io",
    "blockchain",
    "onchain games",
    "EIP-7907",
    "Mental Poker",
    "full stack engineer",
    "Rust developer",
  ],
  authors: [{ name: "Johns Gresham", url: "https://jgresham.xyz" }],
  creator: "Johns Gresham",
  publisher: "Johns Gresham",
  openGraph: {
    type: "website",
    url: "https://jgresham.xyz",
    siteName: "Johns Gresham",
    title: "Johns Gresham — Software Engineer",
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SirJohnsGresham",
    creator: "@SirJohnsGresham",
  },
  alternates: {
    canonical: "https://jgresham.xyz",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Navbar */}
          <div className="flex justify-between items-center p-4">
            <Link className="flex items-center gap-2" href="/">
              <Image
                unoptimized
                aria-hidden
                src="/pfp.gif"
                alt="Pfp"
                className="pt-1"
                width={42}
                height={42}
              />
              <h1 className="text-2xl">johns gresham</h1>
            </Link>
            <ModeToggle />
          </div>
          {/* <main className="grid grid-rows-[20px_1fr_20px] min-h-[70vh] p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}
          <main className="min-h-[70vh] p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> 
            {children}
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center pb-16">
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://warpcast.com/johns"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/farcaster.svg"
                alt="Farcaster icon"
                width={16}
                height={16}
              />
              Farcaster
            </Link>
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://github.com/jgresham"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                className="dark:invert"
                src="/github.svg"
                alt="Github icon"
                width={16}
                height={16}
              />
              Github
            </Link>
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://www.linkedin.com/in/johnsgresham/"
              target="_blank"
              rel="noopener noreferrer me"
            >
              <svg
                aria-hidden
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.064 0-1.14.92-2.064 2.063-2.064 1.14 0 2.064.925 2.064 2.064 0 1.139-.925 2.064-2.064 2.064zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </Link>
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://x.com/SirJohnsGresham"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/x.svg"
                alt="X icon"
                width={16}
                height={16}
              />
              @sirjohnsgresham
            </Link>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
