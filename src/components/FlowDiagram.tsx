const nodes = [
  { id: "client", label: "Client", x: 20 },
  { id: "api", label: "API", x: 170 },
  { id: "redis", label: "Redis", x: 320 },
  { id: "queue", label: "Queue", x: 470 },
  { id: "pg", label: "Postgres", x: 620 },
];

const W = 96;
const H = 44;
const Y = 38;

// Generic illustration of a typical request path. Not a claim about any specific client system.
export function FlowDiagram() {
  return (
    <figure>
      <svg
        viewBox="0 0 740 120"
        role="img"
        aria-label="Diagram of a request moving from client through API, Redis cache, job queue and Postgres"
        className="w-full"
      >
        {nodes.slice(0, -1).map((n, i) => (
          <line
            key={n.id}
            x1={n.x + W}
            y1={Y + H / 2}
            x2={nodes[i + 1].x}
            y2={Y + H / 2}
            stroke="var(--accent)"
            strokeWidth="1.5"
            className="flow-line"
          />
        ))}
        {nodes.map((n) => (
          <g key={n.id}>
            <rect
              x={n.x}
              y={Y}
              width={W}
              height={H}
              rx="6"
              fill="var(--card)"
              stroke="var(--line)"
              strokeWidth="1.5"
            />
            <text
              x={n.x + W / 2}
              y={Y + H / 2 + 4}
              textAnchor="middle"
              fontSize="13"
              fill="var(--foreground)"
              fontFamily="var(--font-geist-mono)"
            >
              {n.label}
            </text>
          </g>
        ))}
        <text x="20" y="108" fontSize="11" fill="var(--muted)" fontFamily="var(--font-geist-mono)">
          request → cache check → async work → durable storage
        </text>
      </svg>
    </figure>
  );
}
