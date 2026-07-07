import Image from "next/image";

export default function NiceNode() {
  return (
    <div className="min-h-screen p-0 sm:p-10 gap-2 flex flex-col">
      <h1 className="text-4xl font-bold mb-8">
        NiceNode: Run an Ethereum Node — Just Press Start
      </h1>
      <a
        className="hover:underline hover:underline-offset-4 text-lg text-blue-600"
        href="https://www.nicenode.xyz"
        target="_blank"
      >
        nicenode.xyz
      </a>
      <p className="text-gray-400 text-sm">
        Founder, Full Stack Engineer — March 2022 to September 2024
      </p>
      <p>
        NiceNode is a desktop app that makes running an Ethereum or Layer 2
        node as easy as installing any consumer app — no command line
        required. It packages and manages execution and consensus clients
        behind a simple UI: install, sync, monitor, and update nodes with a
        click.
      </p>
      <Image
        src="/nicenode/app-screenshot.png"
        alt="NiceNode desktop app showing an Ethereum node syncing, with Nimbus and Besu client cards"
        width={2328}
        height={1472}
        className="w-full h-auto rounded-lg border"
      />
      <ul className="list-disc list-inside flex flex-col gap-2 mt-2">
        <li>
          Built and shipped a cross-platform Electron desktop app (macOS,
          Windows, Linux) for running Ethereum and Optimism nodes, and other
          containerized software, with no command-line setup.
        </li>
        <li>
          Grew the project to 25k+ downloads, 1,500+ X followers, 300+
          Discord members, and 200+ GitHub stars.
        </li>
        <li>
          Won $500k+ in grants and funding from the Ethereum Foundation
          Ecosystem Support Program, Optimism RetroPGF, Gitcoin, and Octant.
        </li>
        <li>Raised support from 1,500+ donors.</li>
        <li>
          Hired, onboarded, and led 2 core contributors — a full-stack
          engineer and a designer — who reported to me.
        </li>
        <li>
          Gave a 40-minute talk and Q&amp;A at Devcon 6 in Bogotá,{" "}
          <a
            className="hover:underline hover:underline-offset-4 text-blue-600"
            href="https://archive.devcon.org/archive/watch/6/why-and-how-to-run-a-node-no-eth-required/"
            target="_blank"
          >
            &quot;Why and How to Run a Node!&quot;
          </a>
        </li>
      </ul>
      <p>
        Code at{" "}
        <a
          className="hover:underline hover:underline-offset-4 text-blue-600"
          href="https://github.com/NiceNode/nice-node"
          target="_blank"
        >
          NiceNode/nice-node
        </a>
        . Follow along on{" "}
        <a
          className="hover:underline hover:underline-offset-4 text-blue-600"
          href="https://x.com/NiceNodeApp"
          target="_blank"
        >
          X
        </a>{" "}
        or{" "}
        <a
          className="hover:underline hover:underline-offset-4 text-blue-600"
          href="https://discord.gg/k3dpYU4Pn9"
          target="_blank"
        >
          Discord
        </a>
        .
      </p>
    </div>
  );
}
