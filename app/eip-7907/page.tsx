export default function Eip7907() {
  return (
    <div className="min-h-screen p-0 sm:p-10 gap-2 flex flex-col">
      <h1 className="text-4xl font-bold mb-8">EIP-7907: Meter Contract Code Size And Increase Limit</h1>
      <a className="hover:underline hover:underline-offset-4 text-lg text-blue-600" 
        href="https://eips.ethereum.org/EIPS/eip-7907" target="_blank">
          Official specification 
      </a>
      <p>Many smart contract developers were frustrated with the 24KB contract code size limit. This EIP doubles the contract code size limit from 24KB to 48KB and implements a gas fee proportional to the code size. 
        The metered gas fee implementation paves the way for future EIPs that will allow for more larger contract code.</p>
      <br/>
      <p>I helped with the following:</p>
      <ul className="list-disc pl-6 space-y-4">
        <li>
          <span>Official specification values and wording</span>
          <div className="flex flex-wrap gap-2 mt-2">
            <a
              className="hover:underline hover:underline-offset-4 text-blue-600"
              href="https://github.com/ethereum/EIPs/commit/e18683ddb78505ec06b6ef0698ed0ccf6acfbb44"
              target="_blank"
              rel="noopener noreferrer"
            >
              PR1
            </a>
            <a
              className="hover:underline hover:underline-offset-4 text-blue-600"
              href="https://github.com/ethereum/EIPs/commit/e0a15e9d95ea89be2c93962d5bfb19fe25086e1f"
              target="_blank"
              rel="noopener noreferrer"
            >
              PR2
            </a>
            <a
              className="hover:underline hover:underline-offset-4 text-blue-600"
              href="https://github.com/ethereum/EIPs/commit/b0c050e56e2c9eb086b362a9625b8e1c4e1783f0"
              target="_blank"
              rel="noopener noreferrer"
            >
              PR3
            </a>
          </div>
        </li>
        <li>
          <span>Initial implementation in Rust (Revm) for Reth client</span>
          <div className="mt-2">
            <a
              className="hover:underline hover:underline-offset-4 text-blue-600"
              href="https://github.com/bluealloy/revm/pull/2550"
              target="_blank"
              rel="noopener noreferrer"
            >
              PR
            </a>
          </div>
        </li>
        <li>
          <span>The most popular smart contract build, test, and deployment tool, Foundry&apos;s forge, for which I implemented the EIP limits in Rust</span>
          <div className="mt-2">
            <a
              className="hover:underline hover:underline-offset-4 text-blue-600"
              href="https://github.com/foundry-rs/foundry/pull/10932"
              target="_blank"
              rel="noopener noreferrer"
            >
              PR
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
} 