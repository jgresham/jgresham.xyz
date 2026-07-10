import type { Metadata } from "next";

const title = "BasedChess: Chess onchain";
const description =
  "Openly verifiable chess — every move is signed by the player, giving a verifiable, open history of wins and losses.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/based-chess",
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

export default function BasedChess() {
  return (
    <div className="min-h-screen p-8 sm:p-20">
      <h1 className="text-4xl font-bold mb-8">BasedChess</h1>
      <p>Welcome to BasedChess - Chess onchain</p>
      <p>Every move is signed by the player. This means that we can verify every move was made by the player and that
        they acknowledge the moves by the other player. Verifyable history of wins and losses and open.
      </p>
      <a className="hover:underline hover:underline-offset-4 text-lg" 
        href="https://basedchess.xyz" target="_blank">
          basedchess.xyz
      </a>
    </div>
  );
} 