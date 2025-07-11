import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 row-start-2 sm:items-start max-w-lg justify-self-center">
      <div>
        <a
          className="flex gap-2 hover:underline hover:underline-offset-4 text-lg items-start justify-start"
          href="/eip-7907"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            className="pt-1"
            width={16}
            height={16}
          />
          EIP-7907: Meter Contract Code Size And Increase Limit
        </a>
        <span className="text-gray-400 text-xs">Jun 1, 25 - Jul 7, 25</span>
      </div>
      <div>
        <a
          className="flex gap-2 hover:underline hover:underline-offset-4 text-lg items-start justify-start"
          href="/ethcn"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            className="pt-1"
            width={16}
            height={16}
          />
          Ethcn: Shadcn UI component library for Ethereum apps
        </a>
        <span className="text-gray-400 text-xs">Jun 30, 25</span>
      </div>
      <div>
        <a
          className="flex gap-2 hover:underline hover:underline-offset-4 text-lg items-start justify-start"
          href="/mental-poker"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            className="pt-1"
            width={16}
            height={16}
          />
          MentalPoker: Trustless Poker
        </a>
        <span className="text-gray-400 text-xs">May 15, 25</span>
      </div>
      <div>
        <a
          className="flex gap-2 hover:underline hover:underline-offset-4 text-lg items-start justify-start"
          href="/based-chess"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            className="pt-1"
            width={16}
            height={16}
          />
          BasedChess: Chess onchain
        </a>
        <span className="text-gray-400 text-xs">Jan 6, 25</span>
      </div>

      {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
      {/* <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol> */}

      {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div> */}
    </div>
  );
}
