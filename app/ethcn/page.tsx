import Image from "next/image";

export default function Ethcn() {
  return (
    <div className="min-h-screen p-0 sm:p-10 gap-2 flex flex-col">
      <h1 className="text-4xl font-bold mb-8">Ethcn</h1>
      <a className="hover:underline hover:underline-offset-4 text-lg text-blue-600" 
        href="https://ethcn.xyz" target="_blank">
          ethcn.xyz
      </a>
      <p>Ethcn is a Shadcn UI component library for React apps using an Ethereum equivalent chain. Shadcn is the easiest way to install and use a single React component in any app - existing or new. One singular command to install and use a component: </p>
      <code>npx shadcn add https://ethcn.xyz/r/ens-name.json</code>
      <br/>

      <p>It uses an existing wagmi provider (which most Ethereum apps use) to get chain data and displays it in the Ethcn component.</p>
      <Image src="/ethcn-ss.png" alt="Ethcn" width={1000} height={1000} />
    </div>
  );
} 