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
  "Software engineer building in AI, Ethereum, and robotics. Founder of NiceNode, backend engineer on Geo at Wonderland, and creator of onchain games like BasedChess and MentalPoker.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jgresham.xyz"),
  title: {
    default: "Johns Gresham — Software Engineer",
    template: "%s | Johns Gresham",
  },
  description: siteDescription,
  keywords: [
    "Johns Gresham",
    "software engineer",
    "Ethereum developer",
    "NiceNode",
    "Wonderland",
    "Geo",
    "geobrowser.io",
    "blockchain engineer",
    "full stack engineer",
  ],
  authors: [{ name: "Johns Gresham", url: "https://jgresham.xyz" }],
  creator: "Johns Gresham",
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
