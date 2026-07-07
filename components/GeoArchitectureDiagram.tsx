// Categorical palette validated with the data-viz skill's validate_palette.js
// against this site's actual light (#ffffff) and dark (#030712) surfaces.
const ROLE = {
  bus: {
    box: "fill-[#2a78d6] dark:fill-[#3987e5] stroke-[#2a78d6] dark:stroke-[#3987e5]",
    dot: "fill-[#2a78d6] dark:fill-[#3987e5]",
  },
  ingest: {
    box: "fill-[#1baf7a] dark:fill-[#199e70] stroke-[#1baf7a] dark:stroke-[#199e70]",
    dot: "fill-[#1baf7a] dark:fill-[#199e70]",
  },
  store: {
    box: "fill-[#eda100] dark:fill-[#c98500] stroke-[#eda100] dark:stroke-[#c98500]",
    dot: "fill-[#eda100] dark:fill-[#c98500]",
  },
  deliver: {
    box: "fill-[#008300] dark:fill-[#008300] stroke-[#008300] dark:stroke-[#008300]",
    dot: "fill-[#008300] dark:fill-[#008300]",
  },
  client: {
    box: "fill-[#4a3aa7] dark:fill-[#9085e9] stroke-[#4a3aa7] dark:stroke-[#9085e9]",
    dot: "fill-[#4a3aa7] dark:fill-[#9085e9]",
  },
  neutral: {
    box: "fill-muted stroke-border",
    dot: "fill-muted-foreground",
  },
} as const;

type RoleKey = keyof typeof ROLE;

type NodeSpec = {
  cx: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  role: RoleKey;
};

function Node({ cx, y, w, h, label, sub, role }: NodeSpec) {
  const x = cx - w / 2;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        strokeWidth={2}
        fillOpacity={0.12}
        className={ROLE[role].box}
      />
      <text
        x={cx}
        y={sub ? y + h / 2 - 6 : y + h / 2 + 5}
        textAnchor="middle"
        className="fill-foreground"
        fontSize={15}
        fontWeight={600}
      >
        {label}
      </text>
      {sub && (
        <text
          x={cx}
          y={y + h / 2 + 14}
          textAnchor="middle"
          className="fill-muted-foreground"
          fontSize={11}
        >
          {sub}
        </text>
      )}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      strokeWidth={2}
      className="stroke-muted-foreground"
      markerEnd="url(#geo-arrowhead)"
    />
  );
}

const searchNodes: NodeSpec[] = [
  {
    cx: 230,
    y: 206,
    w: 340,
    h: 64,
    label: "search-indexer",
    sub: "Rust · Consumer → Processor → Loader",
    role: "ingest",
  },
  {
    cx: 230,
    y: 310,
    w: 340,
    h: 64,
    label: "OpenSearch",
    sub: "entities index · staging/prod aliases",
    role: "store",
  },
  {
    cx: 230,
    y: 414,
    w: 340,
    h: 64,
    label: "Search API",
    sub: "Bun + Hono · relevance ranking",
    role: "deliver",
  },
  {
    cx: 230,
    y: 518,
    w: 340,
    h: 64,
    label: "geobrowser.io",
    sub: "full-text + faceted search UI",
    role: "client",
  },
];

const notificationNodes: NodeSpec[] = [
  {
    cx: 670,
    y: 206,
    w: 340,
    h: 64,
    label: "notification-indexer",
    sub: "Rust · governance + bounty events",
    role: "ingest",
  },
  {
    cx: 670,
    y: 310,
    w: 340,
    h: 64,
    label: "Postgres",
    sub: "notification_outbox · per-user fan-out",
    role: "store",
  },
  {
    cx: 670,
    y: 414,
    w: 340,
    h: 64,
    label: "delivery-worker",
    sub: "Rust · HMAC-signed webhooks · retries",
    role: "deliver",
  },
  {
    cx: 670,
    y: 518,
    w: 340,
    h: 64,
    label: "App Server",
    sub: "TypeScript/Bun · email · in-app · prefs",
    role: "client",
  },
];

const legend: { role: RoleKey; label: string }[] = [
  { role: "bus", label: "Event bus" },
  { role: "ingest", label: "Ingestion (Rust)" },
  { role: "store", label: "Storage" },
  { role: "deliver", label: "Delivery / API" },
  { role: "client", label: "Client-facing" },
];

export function GeoArchitectureDiagram() {
  return (
    <div className="overflow-x-auto">
      <svg width={900} height={660} viewBox="0 0 900 660" className="min-w-[900px]">
        <defs>
          <marker
            id="geo-arrowhead"
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth={7}
            markerHeight={7}
            orient="auto-start-reverse"
          >
            <path d="M0,0 L8,4 L0,8 z" className="fill-muted-foreground" />
          </marker>
        </defs>

        {/* On-chain events */}
        <Node cx={450} y={20} w={240} h={40} label="On-chain Events" role="neutral" />
        <Arrow x1={450} y1={60} x2={450} y2={96} />

        {/* Kafka */}
        <Node
          cx={450}
          y={96}
          w={480}
          h={70}
          label="Kafka"
          sub="knowledge.edits · curation.scores · space.governance"
          role="bus"
        />
        <Arrow x1={330} y1={166} x2={235} y2={202} />
        <Arrow x1={570} y1={166} x2={665} y2={202} />

        {/* Column headers */}
        <text x={230} y={190} textAnchor="middle" className="fill-foreground" fontSize={13} fontWeight={700} letterSpacing={1}>
          SEARCH
        </text>
        <text x={670} y={190} textAnchor="middle" className="fill-foreground" fontSize={13} fontWeight={700} letterSpacing={1}>
          NOTIFICATIONS
        </text>

        {/* Search column */}
        {searchNodes.map((n) => (
          <Node key={n.label} {...n} />
        ))}
        <Arrow x1={230} y1={270} x2={230} y2={310} />
        <Arrow x1={230} y1={374} x2={230} y2={414} />
        <Arrow x1={230} y1={478} x2={230} y2={518} />

        {/* Notifications column */}
        {notificationNodes.map((n) => (
          <Node key={n.label} {...n} />
        ))}
        <Arrow x1={670} y1={270} x2={670} y2={310} />
        <Arrow x1={670} y1={374} x2={670} y2={414} />
        <Arrow x1={670} y1={478} x2={670} y2={518} />

        {/* Legend */}
        <g transform="translate(60, 610)">
          {legend.map((item, i) => (
            <g key={item.role} transform={`translate(${i * 160}, 0)`}>
              <circle cx={6} cy={0} r={6} className={ROLE[item.role].dot} />
              <text x={18} y={4} className="fill-muted-foreground" fontSize={12}>
                {item.label}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
