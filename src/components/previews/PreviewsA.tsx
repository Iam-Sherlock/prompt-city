/* Terminal / CLI Theme */
export function TerminalPreview() {
  return (
    <div className="min-h-full bg-[#0a0a0a] text-[#00ff41] font-mono p-8" style={{ textShadow: "0 0 5px #00ff41" }}>
      <div className="max-w-3xl mx-auto">
        {/* Scanline overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-5" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.1) 2px, rgba(0,255,65,0.1) 4px)" }} />

        <div className="mb-2 text-[#00ff41]/50 text-sm">user@vault:~$ cat welcome.txt</div>
        <h1 className="text-4xl font-bold mb-2 tracking-tight">
          &gt; SYSTEM_ONLINE
        </h1>
        <p className="text-[#00ff41]/70 mb-8">
          Welcome to the terminal. All systems operational.<br />
          Type a command or browse the interface below.
        </p>
        <div className="mb-8">
          <button className="text-[#00ff41] border border-[#00ff41]/50 px-6 py-2 hover:bg-[#00ff41]/10 transition-all">
            [ INITIALIZE ]
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["ENCRYPTION", "FIREWALL", "MONITORING"].map((title, i) => (
            <div key={i} className="border border-[#00ff41]/30 p-4">
              <div className="text-xs text-[#00ff41]/50 mb-2">MODULE_{String(i + 1).padStart(2, "0")}</div>
              <div className="text-lg font-bold mb-1">{title}</div>
              <div className="text-sm text-[#00ff41]/60">Status: ACTIVE<br />Uptime: 99.97%</div>
              <div className="mt-3 h-1 bg-[#00ff41]/20 rounded"><div className="h-full bg-[#00ff41]/60 rounded" style={{ width: `${75 + i * 8}%` }} /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Neo-Brutalism Theme */
export function NeoBrutalismPreview() {
  return (
    <div className="min-h-full bg-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black mb-4 text-black" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          NO RULES.<br />JUST BOLD.
        </h1>
        <p className="text-xl text-black/70 mb-8 max-w-lg">
          Design that punches you in the face. Thick borders. Hard shadows. Zero apologies.
        </p>
        <button className="bg-[#ffd93d] text-black font-bold px-8 py-4 border-[3px] border-black shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
          GET STARTED NOW
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { title: "FAST", color: "#ff6b6b", desc: "Blazing speed with zero compromises" },
            { title: "BOLD", color: "#4ecdc4", desc: "Designs that demand attention" },
            { title: "RAW", color: "#ffd93d", desc: "Unfiltered creative expression" },
          ].map((card) => (
            <div key={card.title} className="border-[3px] border-black p-6 shadow-[4px_4px_0px_#000]" style={{ backgroundColor: card.color }}>
              <h3 className="text-2xl font-black text-black mb-2">{card.title}</h3>
              <p className="text-black/70 font-medium">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Cyberpunk / Neon Theme */
export function CyberpunkPreview() {
  return (
    <div className="min-h-full bg-[#0d0221] text-white p-8 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,0,255,0.05) 2px, rgba(255,0,255,0.05) 4px)" }} />
      <div className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: "'Orbitron', sans-serif", textShadow: "0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 80px #ff00ff" }}>
          NEON<br />FUTURES
        </h1>
        <p className="text-[#00fff0] text-lg mb-8 max-w-lg" style={{ textShadow: "0 0 10px #00fff0" }}>
          Jack into the grid. The megacity awaits. Your interface, upgraded for 2077.
        </p>
        <button className="px-8 py-3 font-bold text-[#ff00ff] border-2 border-[#ff00ff] hover:bg-[#ff00ff]/10 transition-all" style={{ boxShadow: "0 0 15px rgba(255,0,255,0.5), inset 0 0 15px rgba(255,0,255,0.1)" }}>
          JACK IN
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {["NEURAL LINK", "CYBER DECK", "DATA MINE"].map((title, i) => (
            <div key={i} className="p-5 border border-[#ff00ff]/30 bg-[#ff00ff]/5" style={{ boxShadow: "0 0 20px rgba(255,0,255,0.1)" }}>
              <div className="text-xs text-[#00fff0]/60 mb-2 font-mono">SYS.{String(i + 1).padStart(3, "0")}</div>
              <h3 className="text-lg font-bold text-[#ff00ff] mb-1">{title}</h3>
              <p className="text-white/50 text-sm">Enhanced neural pathways for maximum throughput.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Constructivism Theme */
export function ConstructivismPreview() {
  return (
    <div className="min-h-full bg-[#f5f0e8] text-[#1a1a1a] p-8 relative overflow-hidden">
      {/* Decorative diagonal */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#cc0000]" style={{ transform: "rotate(45deg) translate(30%, -60%)" }} />
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full border-4 border-[#1a1a1a]" style={{ transform: "translate(-30%, 30%)" }} />

      <div className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-6xl font-black uppercase mb-4 tracking-tight leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>
          THE FUTURE<br />IS <span className="text-[#cc0000]">NOW</span>
        </h1>
        <div className="w-full h-1 bg-[#1a1a1a] mb-6" />
        <p className="text-lg uppercase tracking-wider mb-8 max-w-md font-medium">
          Revolution through design. Structure through geometry. Unity through typography.
        </p>
        <button className="bg-[#cc0000] text-[#f5f0e8] font-black uppercase px-8 py-3 tracking-wider hover:bg-[#a00000] transition-colors">
          JOIN THE MOVEMENT
        </button>

        <div className="grid grid-cols-3 gap-6 mt-12">
          {["FORM", "FUNCTION", "FUTURE"].map((title, i) => (
            <div key={i} className="border-2 border-[#1a1a1a] p-5" style={{ transform: `rotate(${i === 1 ? -1 : i === 2 ? 1 : 0}deg)` }}>
              <div className="text-4xl font-black mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-lg font-black uppercase">{title}</h3>
              <p className="text-sm mt-1 text-[#1a1a1a]/60">Revolutionary principles for the modern age.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Swiss Style Theme */
export function SwissPreview() {
  return (
    <div className="min-h-full bg-white text-[#1a1a1a] p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-[#999] mb-6">International Typographic Style</div>
          <h1 className="text-7xl font-light mb-6 leading-none tracking-tight" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            Clean.<br />Precise.<br />Objective.
          </h1>
          <div className="w-12 h-0.5 bg-[#e63946] mb-6" />
          <p className="text-lg text-[#666] max-w-md leading-relaxed">
            The grid is the foundation. Typography speaks for itself. Whitespace is a design element.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 border-t border-[#eee] pt-8">
          {["Grid Systems", "Typography", "Objectivity"].map((title, i) => (
            <div key={i}>
              <div className="text-xs text-[#999] uppercase tracking-wider mb-3">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-lg font-medium mb-2">{title}</h3>
              <p className="text-sm text-[#666] leading-relaxed">Mathematical precision in every element placed upon the canvas.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Modern Minimalism Theme */
export function MinimalismPreview() {
  return (
    <div className="min-h-full bg-[#fafafa] text-[#171717] p-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-medium mb-4 leading-snug tracking-tight">
          Less, but better.
        </h1>
        <p className="text-lg text-[#737373] mb-10 leading-relaxed max-w-md">
          Every pixel earns its place. Radical simplicity for the focused mind.
        </p>
        <button className="bg-[#2563eb] text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-[#1d4ed8] transition-colors">
          Get started
        </button>

        <div className="mt-20 space-y-8">
          {["Focus on what matters", "Remove the unnecessary", "Embrace whitespace"].map((title, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="text-sm text-[#d4d4d4] font-medium mt-1">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3 className="text-lg font-medium mb-1">{title}</h3>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">Thoughtful design emerges when you subtract until you can subtract no more.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Bento Grid Theme */
export function BentoPreview() {
  return (
    <div className="min-h-full bg-[#09090b] text-[#fafafa] p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 tracking-tight">Dashboard</h1>
        <p className="text-[#71717a] mb-6">Your creative command center.</p>

        <div className="grid grid-cols-4 gap-3 auto-rows-[120px]">
          <div className="col-span-2 row-span-2 bg-[#18181b] border border-[#27272a] rounded-2xl p-6 flex flex-col justify-between">
            <div className="text-sm text-[#71717a]">Total Views</div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">2.4M</div>
              <div className="text-xs text-[#22c55e] mt-1">+12.5% from last month</div>
            </div>
          </div>
          <div className="col-span-2 bg-[#18181b] border border-[#27272a] rounded-2xl p-5 flex flex-col justify-between">
            <div className="text-sm text-[#71717a]">Active Users</div>
            <div className="text-2xl font-bold">48.2K</div>
          </div>
          <div className="col-span-1 bg-[#18181b] border border-[#27272a] rounded-2xl p-5 flex flex-col justify-between">
            <div className="text-sm text-[#71717a]">Bounce</div>
            <div className="text-2xl font-bold text-[#f97316]">24%</div>
          </div>
          <div className="col-span-1 bg-gradient-to-br from-[#a855f7]/20 to-[#ec4899]/20 border border-[#a855f7]/30 rounded-2xl p-5 flex flex-col justify-between">
            <div className="text-sm text-[#a855f7]">Pro</div>
            <div className="text-lg font-bold">Upgrade</div>
          </div>
          <div className="col-span-2 bg-[#18181b] border border-[#27272a] rounded-2xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]" />
            <div>
              <div className="font-medium text-sm">Recent Activity</div>
              <div className="text-xs text-[#71717a]">3 new deployments today</div>
            </div>
          </div>
          <div className="col-span-2 bg-[#18181b] border border-[#27272a] rounded-2xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#f97316] to-[#ef4444]" />
            <div>
              <div className="font-medium text-sm">Alerts</div>
              <div className="text-xs text-[#71717a]">2 warnings need attention</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
