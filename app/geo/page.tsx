import type { Metadata } from "next";
import Image from "next/image";
import { GeoArchitectureDiagram } from "../../components/GeoArchitectureDiagram";

const title = "Geo: Search & Notifications for geobrowser.io";
const description =
  "Senior Backend Developer work at Wonderland: built the Search and Notifications indexing and API services powering geobrowser.io, the explorer for Geo.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "/geo", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function Geo() {
  return (
    <div className="min-h-screen p-0 sm:p-10 gap-2 flex flex-col">
      <h1 className="text-4xl font-bold mb-8">Geo</h1>
      <a
        className="hover:underline hover:underline-offset-4 text-lg text-blue-600"
        href="https://geobrowser.io"
        target="_blank"
      >
        geobrowser.io
      </a>
      <p className="text-gray-400 text-sm">
        Senior Backend Developer, Wonderland — Sep 2025 to Jul 2026
      </p>
      <p>
        Built from scratch the Search and Notifications indexing and API
        services powering geobrowser.io, the explorer for Geo, a
        decentralized knowledge graph.
      </p>
      <div className="flex flex-col gap-4">
        <Image
          src="/geo-search-1.png"
          alt="Geo search dropdown showing results grouped by space, topic, and organization"
          width={2324}
          height={1824}
          className="w-full h-auto rounded-lg border"
        />
        <Image
          src="/geo-search-2.png"
          alt="Geo search for 'spacex' showing ranked results across topics, projects, and organizations"
          width={2324}
          height={1810}
          className="w-full h-auto rounded-lg border"
        />
      </div>
      <h2 className="text-2xl font-bold mt-4">Architecture</h2>
      <p className="text-sm text-gray-400">
        Both pipelines fan out from the same Kafka event bus. Search indexes
        on-chain knowledge graph edits into OpenSearch; Notifications resolves
        per-user recipients and delivers signed webhooks with retries.
      </p>
      <GeoArchitectureDiagram />
      <ul className="list-disc list-inside flex flex-col gap-2">
        <li>
          Owned Search end-to-end: architecture, OpenSearch cluster
          provisioning, multi-environment index/alias strategy, query design
          and relevance ranking, plus Kubernetes jobs for zero-downtime index
          migrations.
        </li>
        <li>
          Designed and delivered the full notification system (Rust Kafka
          indexer + TypeScript/Bun delivery service) with webhook support for
          multi-client apps, email + in-app channels, and granular user
          notification preferences.
        </li>
        <li>
          Wrote production Rust services for on-chain data ingestion and
          PostgreSQL indexing, plus TypeScript HTTP/GraphQL APIs.
        </li>
        <li>
          Drove down API 5xx error rates during rapid scaling by implementing
          hotfixes for backend services; built Grafana/Prometheus monitoring
          dashboards and Sentry alerting for production observability.
        </li>
        <li>
          Established Rust and npm supply-chain security best practices.
        </li>
      </ul>
      <p>
        Backend services live in{" "}
        <a
          className="hover:underline hover:underline-offset-4 text-blue-600"
          href="https://github.com/geobrowser/gaia"
          target="_blank"
        >
          geobrowser/gaia
        </a>
        . GitHub work history under{" "}
        <a
          className="hover:underline hover:underline-offset-4 text-blue-600"
          href="https://github.com/0xNeoDev"
          target="_blank"
        >
          0xNeoDev
        </a>
        .
      </p>
    </div>
  );
}
