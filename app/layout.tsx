import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { ModeToggle } from "../components/theme-toggle";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Johns",
  description: "What I am up to",
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
            <a className="flex items-center gap-2" href="/">
              <Image
                aria-hidden
                src="/pfp.gif"
                alt="Pfp"
                className="pt-1"
                width={42}
                height={42}
              />
              <h1 className="text-2xl">johns gresham</h1>
            </a>
            <ModeToggle />
          </div>
          <main className="grid grid-rows-[20px_1fr_20px] min-h-[70vh] p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            {children}
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center pb-16">
            <a
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
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
            </a>
            <a
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
            </a>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
