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
      <img src="/mental-poker-commutative-vertical-dark.svg" alt="Mental Poker Encryption explained" width={875} height={2168} />
      <p>TLDR; This is commutative encryption - the order of encrypting and decrypting does not matter.</p>
      <p>This can scale up to as many players as a game of poker can handle. Additionally, the core functionality 
        can be used for other games.</p>
    </div>
  );
} 