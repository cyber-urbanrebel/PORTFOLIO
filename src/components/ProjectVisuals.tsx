import { motion } from "framer-motion";

export function SophiaVisual() {
  const labels = ["Voice", "Wellness", "Schedule", "Insights", "Habits"];

  return (
    <div className="relative h-full min-h-[240px] overflow-hidden rounded-[28px] border border-[#57d8ff]/25 bg-[#05070c] md:rounded-[40px]">
      <img src="/assets/sophia.jpg" alt="SOPHIA AI personal assistant" className="h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070c]/80 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
        {labels.map((label, i) => (
          <motion.span
            key={label}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 2.4, delay: i * 0.25, repeat: Infinity }}
            className="rounded-full border border-[#57d8ff]/50 bg-[#0C0C0C]/70 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-[#D7E2EA] backdrop-blur"
          >
            {label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export function MitmVisual() {
  const nodes = [
    { x: 18, y: 42 },
    { x: 50, y: 22 },
    { x: 82, y: 40 },
    { x: 36, y: 72 },
    { x: 68, y: 74 },
  ];

  return (
    <div className="relative h-full min-h-[240px] overflow-hidden rounded-[28px] border border-[#57d8ff]/20 bg-[#071018] md:rounded-[40px]">
      <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="pkt" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#57d8ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#57d8ff" />
            <stop offset="100%" stopColor="#B600A8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="18" y1="42" x2="50" y2="22" stroke="#57d8ff" strokeOpacity="0.35" strokeWidth="0.4" />
        <line x1="50" y1="22" x2="82" y2="40" stroke="#57d8ff" strokeOpacity="0.35" strokeWidth="0.4" />
        <line x1="18" y1="42" x2="36" y2="72" stroke="#57d8ff" strokeOpacity="0.25" strokeWidth="0.4" />
        <line x1="82" y1="40" x2="68" y2="74" stroke="#57d8ff" strokeOpacity="0.25" strokeWidth="0.4" />
        <line x1="36" y1="72" x2="68" y2="74" stroke="#B600A8" strokeOpacity="0.4" strokeWidth="0.45" />
        <line x1="50" y1="22" x2="68" y2="74" stroke="#B600A8" strokeOpacity="0.35" strokeWidth="0.4" />
        <circle r="1.2" fill="#fff">
          <animateMotion dur="3.2s" repeatCount="indefinite" path="M18,42 L50,22 L82,40" />
        </circle>
        <rect x="-6" y="-0.6" width="12" height="1.2" fill="url(#pkt)">
          <animateMotion dur="2.4s" repeatCount="indefinite" path="M36,72 L68,74" />
        </rect>
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="2.4" fill="#0C0C0C" stroke="#57d8ff" strokeWidth="0.5" />
            <circle cx={n.x} cy={n.y} r="5" fill="none" stroke="#57d8ff" strokeOpacity="0.2">
              <animate attributeName="r" values="4;7;4" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
        <text x="50" y="93" textAnchor="middle" fill="#D7E2EA" fontSize="4.2" letterSpacing="0.4">
          INTERCEPT / DEFEND
        </text>
      </svg>
    </div>
  );
}

export function TradingVisual() {
  const bars = [28, 44, 36, 58, 41, 72, 63, 80, 54, 69, 77, 88];

  return (
    <div className="relative flex h-full min-h-[240px] flex-col justify-end overflow-hidden rounded-[28px] border border-[#90f8b8]/20 bg-[#07140f] p-6 md:rounded-[40px]">
      <p className="absolute left-6 top-5 text-[0.65rem] uppercase tracking-[0.22em] text-[#90f8b8]/80">Risk-aware execution</p>
      <div className="flex h-[70%] items-end gap-2">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-[#0C0C0C] to-[#90f8b8]"
            initial={{ height: "12%" }}
            animate={{ height: [`${h * 0.55}%`, `${h}%`, `${h * 0.7}%`] }}
            transition={{ duration: 2.8, delay: i * 0.08, repeat: Infinity, repeatType: "mirror" }}
          />
        ))}
      </div>
      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#D7E2EA]/55">Python · multi-timeframe · controls</p>
    </div>
  );
}

export function CrewVisual() {
  return (
    <div className="relative flex h-full min-h-[240px] flex-col gap-2 overflow-hidden rounded-[28px] border border-[#C2B280]/30 bg-[#0C0C0C] p-2 md:rounded-[40px]">
      <img
        src="/assets/uc-hoodie.png"
        alt="Urban Crew Night Shift Hoodie"
        className="h-[62%] w-full rounded-[20px] object-cover object-top mix-blend-lighten"
      />
      <div className="grid min-h-0 flex-1 grid-cols-2 gap-2">
        <img src="/assets/uc-tee.png" alt="Urban Crew Gold Mark Tee" className="h-full w-full rounded-[16px] object-cover mix-blend-lighten" />
        <img src="/assets/uc-cap.png" alt="Urban Crew Cap" className="h-full w-full rounded-[16px] object-cover mix-blend-lighten" />
      </div>
      <p className="absolute bottom-4 left-5 text-xs uppercase tracking-[0.28em] text-[#C2B280]">Wear your frequency</p>
    </div>
  );
}

export function PulseVisual() {
  return (
    <div className="relative flex h-full min-h-[240px] flex-col gap-2 overflow-hidden rounded-[28px] border border-[#2563eb]/35 bg-[#071018] p-2 md:rounded-[40px]">
      <img
        src="/assets/supply-pulse-1.png"
        alt="SupplyPulse inventory overview"
        className="h-[62%] w-full rounded-[20px] object-cover object-top"
      />
      <div className="grid min-h-0 flex-1 grid-cols-2 gap-2">
        <img
          src="/assets/supply-pulse-2.png"
          alt="SupplyPulse catalog and KPIs"
          className="h-full w-full rounded-[16px] object-cover object-left"
        />
        <div className="flex flex-col justify-end rounded-[16px] border border-[#14b8a6]/25 bg-[#0a1624] p-3">
          <p className="text-[0.6rem] uppercase tracking-[0.22em] text-[#57d8ff]/80">Control tower</p>
          <p className="mt-1 text-xs uppercase tracking-wider text-[#D7E2EA]">Forecast · Restock · Ledger</p>
        </div>
      </div>
    </div>
  );
}

export function WakanVisual() {
  return (
    <div className="relative flex h-full min-h-[240px] flex-col gap-2 overflow-hidden rounded-[28px] border border-[#E8521A]/30 bg-[#08090D] p-2 md:rounded-[40px]">
      <img
        src="/assets/wakan-screen-1.png"
        alt="Wakan Solutions homepage"
        className="h-[62%] w-full rounded-[20px] object-cover object-top"
      />
      <div className="grid min-h-0 flex-1 grid-cols-2 gap-2">
        <img
          src="/assets/wakan-screen-2.png"
          alt="Wakan services screenshot"
          className="h-full w-full rounded-[16px] object-cover"
        />
        <img
          src="/assets/wakan-og.svg"
          alt="Wakan Solutions brand frame"
          className="h-full w-full rounded-[16px] object-cover"
        />
      </div>
    </div>
  );
}
