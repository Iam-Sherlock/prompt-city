/* Terminal / CLI Theme */
export function TerminalPreview() {
  return (
    <div className="min-h-full bg-[#0a0a0a] text-[#00ff41] font-mono p-6" style={{ textShadow: "0 0 5px #00ff41" }}>
      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.1) 2px, rgba(0,255,65,0.1) 4px)" }} />

      <div className="max-w-4xl mx-auto relative">
        {/* Nav */}
        <div className="flex items-center justify-between mb-10 text-sm">
          <span className="font-bold">[VAULT_OS v3.1]</span>
          <div className="flex gap-6 text-[#00ff41]/50">
            <span className="text-[#00ff41]">[HOME]</span>
            <span>[MODULES]</span>
            <span>[LOGS]</span>
            <span>[CONFIG]</span>
          </div>
        </div>

        {/* Hero */}
        <div className="mb-2 text-[#00ff41]/40 text-sm">user@vault:~$ cat welcome.txt</div>
        <h1 className="text-4xl font-bold mb-3 tracking-tight">&gt; SYSTEM_ONLINE</h1>
        <p className="text-[#00ff41]/60 mb-8 max-w-lg leading-relaxed">
          Welcome to the terminal. All systems operational. Type a command or browse the interface below.
        </p>
        <div className="flex gap-4 mb-12">
          <button className="text-[#00ff41] border border-[#00ff41]/50 px-6 py-2 hover:bg-[#00ff41]/10 transition-all">[ INITIALIZE ]</button>
          <button className="text-[#00ff41]/50 px-6 py-2 hover:text-[#00ff41] transition-all">[ --help ]</button>
        </div>

        {/* Stats bar */}
        <div className="border border-[#00ff41]/20 p-4 mb-8 flex justify-between text-sm">
          <div><span className="text-[#00ff41]/40">UPTIME:</span> 99.97%</div>
          <div><span className="text-[#00ff41]/40">NODES:</span> 2,847</div>
          <div><span className="text-[#00ff41]/40">LATENCY:</span> 12ms</div>
          <div><span className="text-[#ffb000]">ALERTS:</span> <span className="text-[#ffb000]">2</span></div>
        </div>

        {/* Module cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {["ENCRYPTION", "FIREWALL", "MONITORING"].map((title, i) => (
            <div key={i} className="border border-[#00ff41]/20 p-5 hover:border-[#00ff41]/50 transition-colors">
              <div className="text-xs text-[#00ff41]/40 mb-2">MODULE_{String(i + 1).padStart(2, "0")}</div>
              <div className="text-lg font-bold mb-2">{title}</div>
              <div className="text-sm text-[#00ff41]/50 mb-3">Status: <span className="text-[#00ff41]">ACTIVE</span></div>
              <div className="h-1.5 bg-[#00ff41]/10 rounded">
                <div className="h-full bg-[#00ff41]/60 rounded" style={{ width: `${75 + i * 8}%` }} />
              </div>
              <div className="text-xs text-[#00ff41]/30 mt-2">{75 + i * 8}% capacity</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-xs text-[#00ff41]/30 border-t border-[#00ff41]/10 pt-4">
          vault@system:~$ <span className="animate-pulse">▊</span>
        </div>
      </div>
    </div>
  );
}

/* Neo-Brutalism Theme */
export function NeoBrutalismPreview() {
  return (
    <div className="min-h-full bg-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Nav */}
        <div className="flex items-center justify-between mb-12 pb-4 border-b-[3px] border-black">
          <span className="text-xl font-black" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>BRUTAL.</span>
          <div className="flex gap-6 text-sm font-bold uppercase">
            <span>Work</span><span>About</span><span>Contact</span>
          </div>
          <button className="bg-[#ffd93d] text-black font-bold px-4 py-2 border-[3px] border-black shadow-[3px_3px_0px_#000] text-sm">
            HIRE US
          </button>
        </div>

        {/* Hero */}
        <div className="mb-12">
          <h1 className="text-6xl font-black mb-5 text-black leading-[0.95]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            NO RULES.<br />JUST BOLD.
          </h1>
          <p className="text-xl text-black/60 mb-8 max-w-lg font-medium">
            Design that punches you in the face. Thick borders. Hard shadows. Zero apologies.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#ffd93d] text-black font-bold px-8 py-4 border-[3px] border-black shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              GET STARTED NOW →
            </button>
            <button className="bg-white text-black font-bold px-8 py-4 border-[3px] border-black shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] transition-all">
              VIEW WORK
            </button>
          </div>
        </div>

        {/* Trusted by */}
        <div className="border-[3px] border-black p-4 mb-10 text-center font-bold text-sm bg-[#ffd93d]/10">
          TRUSTED BY 500+ TEAMS WORLDWIDE
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-3 gap-6">
          {[
            { title: "FAST", color: "#ff6b6b", desc: "Blazing speed with zero compromises on quality" },
            { title: "BOLD", color: "#4ecdc4", desc: "Designs that demand attention and deliver results" },
            { title: "RAW", color: "#ffd93d", desc: "Unfiltered creative expression that converts" },
          ].map((card) => (
            <div key={card.title} className="border-[3px] border-black p-6 shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all" style={{ backgroundColor: card.color }}>
              <h3 className="text-2xl font-black text-black mb-3">{card.title}</h3>
              <p className="text-black/70 font-medium text-sm">{card.desc}</p>
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
    <div className="min-h-full bg-[#0d0221] text-white p-6 overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.04]" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,0,255,0.1) 2px, rgba(255,0,255,0.1) 4px)" }} />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Nav */}
        <div className="flex items-center justify-between mb-12">
          <span className="font-bold text-[#ff00ff] tracking-wider" style={{ fontFamily: "'Orbitron', sans-serif", textShadow: "0 0 10px #ff00ff" }}>NEXUS</span>
          <div className="flex gap-6 text-sm text-white/40 font-mono">
            <span className="text-[#00fff0]">SYS.HOME</span>
            <span>SYS.GRID</span>
            <span>SYS.DATA</span>
          </div>
          <button className="px-4 py-1.5 text-xs font-bold text-[#ff00ff] border border-[#ff00ff]/50 hover:bg-[#ff00ff]/10 transition-all" style={{ boxShadow: "0 0 10px rgba(255,0,255,0.3)" }}>
            JACK IN
          </button>
        </div>

        {/* Hero */}
        <h1 className="text-5xl font-bold mb-5" style={{ fontFamily: "'Orbitron', sans-serif", textShadow: "0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 80px #ff00ff" }}>
          NEON<br />FUTURES
        </h1>
        <p className="text-[#00fff0] text-lg mb-8 max-w-lg" style={{ textShadow: "0 0 10px #00fff0" }}>
          Jack into the grid. The megacity awaits. Your interface, upgraded for 2077.
        </p>
        <div className="flex gap-4 mb-12">
          <button className="px-8 py-3 font-bold text-[#ff00ff] border-2 border-[#ff00ff] hover:bg-[#ff00ff]/10 transition-all" style={{ boxShadow: "0 0 15px rgba(255,0,255,0.5), inset 0 0 15px rgba(255,0,255,0.1)" }}>
            INITIALIZE
          </button>
          <button className="px-8 py-3 font-bold text-[#00fff0]/60 border border-[#00fff0]/30 hover:text-[#00fff0] transition-all">
            DOCS →
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-8 mb-10 text-center">
          {[
            { val: "99.9%", label: "UPLINK" },
            { val: "2.4M", label: "NODES" },
            { val: "<1ms", label: "LATENCY" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-[#ff00ff]" style={{ textShadow: "0 0 10px #ff00ff" }}>{s.val}</div>
              <div className="text-xs text-[#00fff0]/40 font-mono mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Module cards */}
        <div className="grid grid-cols-3 gap-4">
          {["NEURAL LINK", "CYBER DECK", "DATA MINE"].map((title, i) => (
            <div key={i} className="p-5 border border-[#ff00ff]/20 bg-[#ff00ff]/5 hover:border-[#ff00ff]/40 transition-colors" style={{ boxShadow: "0 0 20px rgba(255,0,255,0.08)" }}>
              <div className="text-xs text-[#00fff0]/50 font-mono mb-2">SYS.{String(i + 1).padStart(3, "0")}</div>
              <h3 className="text-lg font-bold text-[#ff00ff] mb-2">{title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">Enhanced neural pathways for maximum throughput and connectivity.</p>
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
    <div className="min-h-full bg-[#f5f0e8] text-[#1a1a1a] p-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#cc0000]" style={{ transform: "rotate(45deg) translate(30%, -60%)" }} />
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full border-4 border-[#1a1a1a]" style={{ transform: "translate(-30%, 30%)" }} />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Nav */}
        <div className="flex items-center justify-between mb-12">
          <span className="text-xl font-black uppercase tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>KONSTRUKT</span>
          <div className="flex gap-6 text-sm font-bold uppercase tracking-wider">
            <span className="text-[#cc0000]">Manifesto</span>
            <span>Work</span>
            <span>Archive</span>
          </div>
        </div>

        {/* Hero */}
        <div className="w-full h-1 bg-[#1a1a1a] mb-8" />
        <h1 className="text-6xl font-black uppercase mb-5 tracking-tight leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>
          THE FUTURE<br />IS <span className="text-[#cc0000]">NOW</span>
        </h1>
        <p className="text-lg uppercase tracking-wider mb-8 max-w-md font-medium leading-relaxed">
          Revolution through design. Structure through geometry. Unity through typography.
        </p>
        <button className="bg-[#cc0000] text-[#f5f0e8] font-black uppercase px-10 py-3 tracking-wider hover:bg-[#a00000] transition-colors">
          JOIN THE MOVEMENT
        </button>

        {/* Feature cards */}
        <div className="grid grid-cols-3 gap-6 mt-16">
          {["FORM", "FUNCTION", "FUTURE"].map((title, i) => (
            <div key={i} className="border-2 border-[#1a1a1a] p-6" style={{ transform: `rotate(${i === 1 ? -1 : i === 2 ? 1 : 0}deg)` }}>
              <div className="text-4xl font-black mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-lg font-black uppercase mb-2">{title}</h3>
              <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">Revolutionary principles for the modern age of digital design.</p>
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
    <div className="min-h-full bg-white text-[#1a1a1a] p-6">
      <div className="max-w-4xl mx-auto">
        {/* Nav */}
        <div className="flex items-center justify-between mb-16 text-sm">
          <span className="font-medium">Typographica®</span>
          <div className="flex gap-8 text-[#999]">
            <span className="text-[#1a1a1a]">Home</span>
            <span>About</span>
            <span>Work</span>
            <span>Contact</span>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-[#999] mb-6">International Typographic Style</div>
          <h1 className="text-7xl font-light mb-6 leading-[0.95] tracking-tight" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            Clean.<br />Precise.<br />Objective.
          </h1>
          <div className="w-12 h-0.5 bg-[#e63946] mb-6" />
          <p className="text-lg text-[#666] max-w-md leading-relaxed">
            The grid is the foundation. Typography speaks for itself. Whitespace is a design element, not empty space.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 border-t border-[#eee] pt-8">
          {["Grid Systems", "Typography", "Objectivity"].map((title, i) => (
            <div key={i}>
              <div className="text-xs text-[#999] uppercase tracking-wider mb-3">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-lg font-medium mb-2">{title}</h3>
              <p className="text-sm text-[#666] leading-relaxed">Mathematical precision in every element placed upon the canvas with systematic intent.</p>
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
    <div className="min-h-full bg-[#fafafa] text-[#171717] p-8 md:p-12">
      <div className="max-w-2xl mx-auto">
        {/* Nav */}
        <div className="flex items-center justify-between mb-20 text-sm">
          <span className="font-medium">studio.</span>
          <div className="flex gap-6 text-[#a3a3a3]">
            <span className="text-[#171717]">Home</span>
            <span>Work</span>
            <span>About</span>
          </div>
        </div>

        {/* Hero */}
        <h1 className="text-4xl font-medium mb-4 leading-snug tracking-tight">
          Less, but better.
        </h1>
        <p className="text-lg text-[#737373] mb-10 leading-relaxed max-w-md">
          Every pixel earns its place. Radical simplicity for the focused mind.
        </p>
        <button className="bg-[#2563eb] text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-[#1d4ed8] transition-colors">
          Get started
        </button>

        {/* Feature list */}
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
      <div className="max-w-4xl mx-auto">
        {/* Nav */}
        <div className="flex items-center justify-between mb-8">
          <span className="font-bold text-lg">⬡ Prism</span>
          <div className="flex gap-6 text-sm text-[#71717a]">
            <span className="text-[#fafafa]">Dashboard</span>
            <span>Analytics</span>
            <span>Settings</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-2 tracking-tight">Dashboard</h1>
        <p className="text-[#71717a] mb-6">Your creative command center.</p>

        <div className="grid grid-cols-4 gap-3 auto-rows-[120px]">
          {/* Featured cell */}
          <div className="col-span-2 row-span-2 bg-[#18181b] border border-[#27272a] rounded-2xl p-6 flex flex-col justify-between">
            <div className="text-sm text-[#71717a]">Total Views</div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">2.4M</div>
              <div className="text-xs text-[#22c55e] mt-1">↑ 12.5% from last month</div>
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
            <div className="text-sm text-[#a855f7]">Pro Plan</div>
            <div className="text-lg font-bold">Upgrade →</div>
          </div>
          <div className="col-span-2 bg-[#18181b] border border-[#27272a] rounded-2xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] shrink-0" />
            <div>
              <div className="font-medium text-sm">Recent Activity</div>
              <div className="text-xs text-[#71717a]">3 new deployments today</div>
            </div>
          </div>
          <div className="col-span-2 bg-[#18181b] border border-[#27272a] rounded-2xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#f97316] to-[#ef4444] shrink-0" />
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
