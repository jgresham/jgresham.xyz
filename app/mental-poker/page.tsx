import type { Metadata } from "next";
import Image from "next/image";

const title = "MentalPoker: Trustless Poker";
const description =
  "Poker onchain with no trusted third party, built on commutative encryption discovered by the creators of RSA — scales to as many players as a poker table can handle.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/mental-poker",
    type: "website",
    siteName: "Johns Gresham",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: "@SirJohnsGresham",
    creator: "@SirJohnsGresham",
  },
};

export default function MentalPoker() {
  return (
    <div className="min-h-screen p-0 sm:p-10 gap-2 flex flex-col">
      <h1 className="text-4xl font-bold mb-8">MentalPoker</h1>
      <a className="hover:underline hover:underline-offset-4 text-lg" 
        href="https://mentalpoker.xyz" target="_blank">
          mentalpoker.xyz
      </a>
      <p>Welcome to MentalPoker - Poker onchain. No trusted third party.</p>
      <p>Mental Poker was discovered decades ago by the creators of RSA encryption. 
        However, recently blockchains have given us an open database and financial system to make it practical.</p>
      <Image
        src="/mental-poker-commutative-vertical-dark.svg"
        alt="Mental Poker Encryption explained"
        width={875}
        height={2168}
        unoptimized
      />
      <p>TLDR; This is commutative encryption - the order of encrypting and decrypting does not matter.</p>
      <p>This can scale up to as many players as a game of poker can handle. Additionally, the core functionality 
        can be used for other games.</p>
    </div>
  );
} 