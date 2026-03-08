/* Terminal / CLI Theme — Full Website */
export function TerminalPreview() {
  return (
    <div className="min-h-full bg-[#0a0a0a] text-[#00ff41] font-mono" style={{ textShadow: "0 0 5px #00ff41" }}>
      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.1) 2px, rgba(0,255,65,0.1) 4px)" }} />

      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Nav */}
        <nav className="flex items-center justify-between py-5 border-b border-[#00ff41]/20">
          <span className="font-bold text-sm">[VAULT_OS v3.1]</span>
          <div className="flex gap-6 text-xs text-[#00ff41]/40">
            <span className="text-[#00ff41]">[HOME]</span>
            <span>[MODULES]</span>
            <span>[LOGS]</span>
            <span>[CONFIG]</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-16">
          <div className="text-[#00ff41]/40 text-sm mb-3">user@vault:~$ cat welcome.txt</div>
          <h1 className="text-5xl font-bold mb-4 tracking-tight leading-[1.1]">&gt; SYSTEM<br />&gt; ONLINE_</h1>
          <p className="text-[#00ff41]/50 mb-8 max-w-lg leading-relaxed text-sm">
            A next-generation security operations platform. Monitor threats, manage encryption, and deploy firewalls — all from a unified command center.
          </p>
          <div className="flex gap-4">
            <button className="text-[#00ff41] border border-[#00ff41]/50 px-6 py-2.5 text-sm hover:bg-[#00ff41]/10 transition-all">[ INITIALIZE ]</button>
            <button className="text-[#00ff41]/40 px-6 py-2.5 text-sm hover:text-[#00ff41] transition-all">[ --help ]</button>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border border-[#00ff41]/15 p-4 mb-12 grid grid-cols-4 gap-4 text-center text-sm">
          {[
            { label: "UPTIME", value: "99.97%", color: "" },
            { label: "NODES", value: "2,847", color: "" },
            { label: "LATENCY", value: "12ms", color: "" },
            { label: "THREATS BLOCKED", value: "1.2M", color: "#ffb000" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-[#00ff41]/30 text-xs mb-1">{s.label}</div>
              <div className="font-bold text-lg" style={s.color ? { color: s.color, textShadow: `0 0 5px ${s.color}` } : {}}>{s.value}</div>
            </div>
          ))}
        </section>

        {/* Modules */}
        <section className="mb-16">
          <div className="text-[#00ff41]/40 text-sm mb-6">user@vault:~$ ls modules/</div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { name: "ENCRYPTION", status: "ACTIVE", load: 91 },
              { name: "FIREWALL", status: "ACTIVE", load: 83 },
              { name: "MONITORING", status: "ACTIVE", load: 75 },
            ].map((mod, i) => (
              <div key={i} className="border border-[#00ff41]/15 p-5 hover:border-[#00ff41]/40 transition-colors">
                <div className="text-xs text-[#00ff41]/30 mb-2">MODULE_{String(i + 1).padStart(2, "0")}</div>
                <div className="text-lg font-bold mb-1">{mod.name}</div>
                <div className="text-xs text-[#00ff41]/40 mb-3">Status: <span className="text-[#00ff41]">{mod.status}</span></div>
                <div className="h-1.5 bg-[#00ff41]/10 rounded">
                  <div className="h-full bg-[#00ff41]/50 rounded" style={{ width: `${mod.load}%` }} />
                </div>
                <div className="text-xs text-[#00ff41]/25 mt-1">{mod.load}% load</div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mb-16">
          <div className="text-[#00ff41]/40 text-sm mb-6">user@vault:~$ cat how-it-works.md</div>
          <div className="space-y-4">
            {[
              { step: "01", title: "DEPLOY", desc: "Spin up secure nodes in seconds with zero-config deployment" },
              { step: "02", title: "CONFIGURE", desc: "Set your threat parameters and encryption policies" },
              { step: "03", title: "MONITOR", desc: "Real-time dashboards with automated incident response" },
              { step: "04", title: "SCALE", desc: "Auto-scale from 10 to 10,000 nodes with a single command" },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start border-b border-[#00ff41]/10 pb-4">
                <span className="text-[#00ff41]/20 font-bold text-lg">{item.step}</span>
                <div>
                  <div className="font-bold mb-1">{item.title}</div>
                  <div className="text-sm text-[#00ff41]/40">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="border border-[#00ff41]/15 p-8 mb-16">
          <div className="text-[#00ff41]/30 text-xs mb-4">// TRANSMISSION_LOG</div>
          <p className="text-[#00ff41]/60 text-sm leading-relaxed mb-4">
            "Vault OS reduced our incident response time by 94%. The terminal-first approach means our engineers feel right at home. It's the security platform we always wanted."
          </p>
          <div className="text-xs text-[#00ff41]/30">— SARAH_CHEN // CTO @ NEXUS_CORP</div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-[#00ff41]/15 mb-8">
          <h2 className="text-2xl font-bold mb-3">&gt; READY TO BEGIN?</h2>
          <p className="text-sm text-[#00ff41]/40 mb-6">Initialize your secure operations center in under 60 seconds.</p>
          <button className="text-[#00ff41] border border-[#00ff41]/50 px-10 py-3 text-sm hover:bg-[#00ff41]/10 transition-all">[ START FREE TRIAL ]</button>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#00ff41]/10 py-6 flex justify-between text-xs text-[#00ff41]/20">
          <span>© 2026 VAULT_OS // ALL RIGHTS RESERVED</span>
          <div className="flex gap-4">
            <span>[DOCS]</span>
            <span>[STATUS]</span>
            <span>[GITHUB]</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* Neo-Brutalism Theme — Full Website */
export function NeoBrutalismPreview() {
  return (
    <div className="min-h-full bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Nav */}
        <nav className="flex items-center justify-between py-5 border-b-[3px] border-black">
          <span className="text-xl font-black" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>BRUTAL.</span>
          <div className="flex gap-6 text-sm font-bold uppercase">
            <span>Work</span><span>About</span><span>Pricing</span><span>Contact</span>
          </div>
          <button className="bg-[#ffd93d] text-black font-bold px-4 py-2 border-[3px] border-black shadow-[3px_3px_0px_#000] text-xs uppercase">HIRE US</button>
        </nav>

        {/* Hero */}
        <section className="py-16">
          <h1 className="text-7xl font-black text-black leading-[0.9] mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            NO RULES.<br />JUST BOLD<br />DESIGN.
          </h1>
          <p className="text-xl text-black/60 mb-8 max-w-lg font-medium">
            We build websites that punch you in the face — in a good way. Thick borders. Hard shadows. Zero apologies. Maximum conversion.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#ffd93d] text-black font-bold px-8 py-4 border-[3px] border-black shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all uppercase">
              GET STARTED →
            </button>
            <button className="bg-white text-black font-bold px-8 py-4 border-[3px] border-black shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] transition-all uppercase">
              VIEW WORK
            </button>
          </div>
        </section>

        {/* Social proof */}
        <section className="border-[3px] border-black p-5 mb-16 text-center bg-[#ffd93d]/10">
          <div className="font-bold text-sm uppercase tracking-wide">TRUSTED BY 500+ TEAMS · $2B+ IN REVENUE GENERATED · 98% CLIENT SATISFACTION</div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-8 uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>WHAT WE DO</h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              { title: "FAST", color: "#ff6b6b", desc: "Blazing speed with zero compromises. Your site loads in under 1 second." },
              { title: "BOLD", color: "#4ecdc4", desc: "Designs that demand attention and drive 3x more engagement." },
              { title: "RAW", color: "#ffd93d", desc: "Unfiltered creative expression that converts visitors into customers." },
            ].map((card) => (
              <div key={card.title} className="border-[3px] border-black p-6 shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all" style={{ backgroundColor: card.color }}>
                <h3 className="text-2xl font-black text-black mb-3">{card.title}</h3>
                <p className="text-black/60 font-medium text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-black text-white p-10 border-[3px] border-black mb-16">
          <div className="grid grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "CLIENTS" },
              { value: "1.2K", label: "PROJECTS" },
              { value: "$2B+", label: "REVENUE" },
              { value: "98%", label: "RETENTION" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-black text-[#ffd93d] mb-1">{s.value}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16">
          <div className="border-[3px] border-black p-8 shadow-[4px_4px_0px_#000] bg-[#ff6b6b]/10">
            <p className="text-xl font-medium mb-4 text-black/80 leading-relaxed">
              "They completely transformed our brand. Our conversions went up 340% in the first month. The bold approach works."
            </p>
            <div className="font-bold text-black">— JAKE THOMPSON, CEO at StartupCo</div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t-[3px] border-black">
          <h2 className="text-4xl font-black mb-4 uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>READY TO GO BOLD?</h2>
          <p className="text-lg text-black/50 mb-8 font-medium">Stop blending in. Start standing out.</p>
          <button className="bg-[#ffd93d] text-black font-bold px-12 py-5 border-[3px] border-black shadow-[4px_4px_0px_#000] text-lg uppercase hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            LET'S BUILD SOMETHING →
          </button>
        </section>

        {/* Footer */}
        <footer className="border-t-[3px] border-black py-6 flex justify-between text-sm font-bold">
          <span>© 2026 BRUTAL. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-4 uppercase text-xs">
            <span>Twitter</span><span>Dribbble</span><span>Github</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* Cyberpunk / Neon Theme — Full Website */
export function CyberpunkPreview() {
  return (
    <div className="min-h-full bg-[#0d0221] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.04]" style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,0,255,0.1) 2px, rgba(255,0,255,0.1) 4px)" }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Nav */}
        <nav className="flex items-center justify-between py-5 border-b border-[#ff00ff]/20">
          <span className="font-bold text-[#ff00ff] tracking-wider text-sm" style={{ fontFamily: "'Orbitron', sans-serif", textShadow: "0 0 10px #ff00ff" }}>NEXUS//</span>
          <div className="flex gap-6 text-xs text-white/30 font-mono uppercase">
            <span className="text-[#00fff0]">Home</span>
            <span>Grid</span>
            <span>Data</span>
            <span>Access</span>
          </div>
          <button className="px-4 py-1.5 text-xs font-bold text-[#ff00ff] border border-[#ff00ff]/50 hover:bg-[#ff00ff]/10 transition-all" style={{ boxShadow: "0 0 10px rgba(255,0,255,0.2)" }}>
            JACK IN
          </button>
        </nav>

        {/* Hero */}
        <section className="py-20">
          <h1 className="text-6xl font-bold mb-5 leading-[1.05]" style={{ fontFamily: "'Orbitron', sans-serif", textShadow: "0 0 20px #ff00ff, 0 0 60px #ff00ff" }}>
            NEON<br />FUTURES
          </h1>
          <p className="text-[#00fff0] text-lg mb-8 max-w-lg" style={{ textShadow: "0 0 10px #00fff0" }}>
            Next-generation cybersecurity infrastructure for the connected world. Jack into the grid. The megacity awaits.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 font-bold text-[#ff00ff] border-2 border-[#ff00ff] hover:bg-[#ff00ff]/10 transition-all" style={{ boxShadow: "0 0 15px rgba(255,0,255,0.4)" }}>
              INITIALIZE →
            </button>
            <button className="px-8 py-3 font-bold text-white/30 border border-white/10 hover:text-white/60 transition-all">
              VIEW DOCS
            </button>
          </div>
        </section>

        {/* Stats */}
        <section className="flex gap-10 mb-16 pb-10 border-b border-[#ff00ff]/10">
          {[
            { val: "99.9%", label: "UPLINK STABILITY" },
            { val: "2.4M", label: "ACTIVE NODES" },
            { val: "<1ms", label: "NEURAL LATENCY" },
            { val: "0", label: "BREACHES" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-[#ff00ff]" style={{ textShadow: "0 0 10px #ff00ff" }}>{s.val}</div>
              <div className="text-[10px] text-[#00fff0]/30 font-mono mt-1 uppercase">{s.label}</div>
            </div>
          ))}
        </section>

        {/* Modules */}
        <section className="mb-16">
          <div className="text-xs text-[#00fff0]/40 font-mono mb-6 uppercase tracking-wider">// CORE MODULES</div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { title: "NEURAL LINK", desc: "Direct brain-computer interfaces for seamless data integration" },
              { title: "CYBER DECK", desc: "Portable hacking suite with quantum encryption capabilities" },
              { title: "DATA MINE", desc: "AI-powered threat intelligence and pattern recognition" },
            ].map((mod, i) => (
              <div key={i} className="p-6 border border-[#ff00ff]/15 bg-[#ff00ff]/5 hover:border-[#ff00ff]/30 transition-colors" style={{ boxShadow: "0 0 20px rgba(255,0,255,0.05)" }}>
                <div className="text-[10px] text-[#00fff0]/40 font-mono mb-3">SYS.{String(i + 1).padStart(3, "0")}</div>
                <h3 className="text-lg font-bold text-[#ff00ff] mb-2" style={{ textShadow: "0 0 5px #ff00ff" }}>{mod.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mb-16 border border-[#ff00ff]/10 p-8">
          <div className="text-xs text-[#00fff0]/40 font-mono mb-6 uppercase tracking-wider">// PROTOCOL SEQUENCE</div>
          <div className="space-y-6">
            {[
              { step: "001", title: "CONNECT", desc: "Establish secure neural handshake with quantum-encrypted tunnel" },
              { step: "002", title: "CONFIGURE", desc: "Deploy AI agents across your threat surface perimeter" },
              { step: "003", title: "ACTIVATE", desc: "Go live with real-time monitoring and autonomous response" },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <span className="text-[#ff00ff]/30 font-mono text-sm font-bold">{item.step}</span>
                <div>
                  <div className="font-bold text-[#ff00ff] text-sm mb-1" style={{ fontFamily: "'Orbitron', sans-serif" }}>{item.title}</div>
                  <div className="text-white/25 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16 border-l-2 border-[#ff00ff]/30 pl-6">
          <p className="text-white/40 text-sm leading-relaxed mb-3">
            "Nexus eliminated 99.7% of our threat surface within the first week. The neural link integration is years ahead of anything else on the market."
          </p>
          <div className="text-[10px] text-[#00fff0]/30 font-mono uppercase">— DR. ARIA VOSS // HEAD OF SECURITY @ MEGACORP</div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t border-[#ff00ff]/10">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Orbitron', sans-serif", textShadow: "0 0 15px #ff00ff" }}>READY TO JACK IN?</h2>
          <p className="text-white/25 text-sm mb-6">Deploy your first neural node in under 30 seconds.</p>
          <button className="px-10 py-3 font-bold text-[#ff00ff] border-2 border-[#ff00ff] hover:bg-[#ff00ff]/10 transition-all" style={{ boxShadow: "0 0 15px rgba(255,0,255,0.4)" }}>
            BEGIN SEQUENCE →
          </button>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#ff00ff]/10 py-6 flex justify-between text-[10px] text-white/15 font-mono">
          <span>© 2077 NEXUS SYSTEMS // ALL RIGHTS RESERVED</span>
          <div className="flex gap-4 uppercase">
            <span>[STATUS]</span><span>[DOCS]</span><span>[GITHUB]</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* Constructivism Theme — Full Website */
export function ConstructivismPreview() {
  return (
    <div className="min-h-full bg-[#f5f0e8] text-[#1a1a1a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#cc0000]" style={{ transform: "rotate(45deg) translate(30%, -60%)" }} />
      <div className="absolute bottom-[40%] left-0 w-32 h-32 rounded-full border-4 border-[#1a1a1a]" style={{ transform: "translate(-30%, 0)" }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Nav */}
        <nav className="flex items-center justify-between py-5">
          <span className="text-xl font-black uppercase tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>KONSTRUKT</span>
          <div className="flex gap-6 text-sm font-bold uppercase tracking-wider">
            <span className="text-[#cc0000]">Manifesto</span>
            <span>Work</span>
            <span>Archive</span>
            <span>Contact</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-16">
          <div className="w-full h-1 bg-[#1a1a1a] mb-8" />
          <h1 className="text-7xl font-black uppercase mb-5 tracking-tight leading-[0.85]" style={{ fontFamily: "'Oswald', sans-serif" }}>
            THE FUTURE<br />IS <span className="text-[#cc0000]">NOW</span>
          </h1>
          <p className="text-lg uppercase tracking-wider mb-8 max-w-md font-medium leading-relaxed">
            Revolution through design. Structure through geometry. Unity through typography. We build digital experiences with conviction.
          </p>
          <button className="bg-[#cc0000] text-[#f5f0e8] font-black uppercase px-10 py-4 tracking-wider hover:bg-[#a00000] transition-colors">
            JOIN THE MOVEMENT →
          </button>
        </section>

        {/* Divider */}
        <div className="w-full h-1 bg-[#1a1a1a] mb-12" />

        {/* Features */}
        <section className="mb-16">
          <div className="grid grid-cols-3 gap-6">
            {["FORM", "FUNCTION", "FUTURE"].map((title, i) => (
              <div key={i} className="border-2 border-[#1a1a1a] p-6" style={{ transform: `rotate(${i === 1 ? -1 : i === 2 ? 1 : 0}deg)` }}>
                <div className="text-5xl font-black mb-3 text-[#1a1a1a]/10" style={{ fontFamily: "'Oswald', sans-serif" }}>{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-xl font-black uppercase mb-2">{title}</h3>
                <p className="text-sm text-[#1a1a1a]/50 leading-relaxed">Revolutionary principles for the modern age of digital design and communication.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#1a1a1a] text-[#f5f0e8] p-10 mb-16">
          <div className="grid grid-cols-4 gap-8 text-center">
            {[
              { val: "200+", label: "PROJECTS" },
              { val: "50", label: "AWARDS" },
              { val: "12", label: "COUNTRIES" },
              { val: "100%", label: "CONVICTION" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-[#cc0000] mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>{s.val}</div>
                <div className="text-xs uppercase tracking-wider text-[#f5f0e8]/40">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-black uppercase mb-8" style={{ fontFamily: "'Oswald', sans-serif" }}>OUR <span className="text-[#cc0000]">PROCESS</span></h2>
          <div className="space-y-4">
            {[
              { n: "01", title: "RESEARCH", desc: "We study the landscape, find the tension, understand the audience" },
              { n: "02", title: "DESIGN", desc: "Bold compositions built on geometric foundations and typographic power" },
              { n: "03", title: "BUILD", desc: "Pixel-perfect execution with modern tools and revolutionary spirit" },
              { n: "04", title: "LAUNCH", desc: "Deploy with confidence, measure impact, iterate with conviction" },
            ].map((step) => (
              <div key={step.n} className="flex gap-6 items-baseline border-t-2 border-[#1a1a1a] pt-4">
                <span className="text-2xl font-black text-[#1a1a1a]/15" style={{ fontFamily: "'Oswald', sans-serif" }}>{step.n}</span>
                <h3 className="text-lg font-black uppercase w-32">{step.title}</h3>
                <p className="text-sm text-[#1a1a1a]/50 flex-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t-2 border-[#1a1a1a]">
          <h2 className="text-4xl font-black uppercase mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
            JOIN THE <span className="text-[#cc0000]">REVOLUTION</span>
          </h2>
          <p className="uppercase tracking-wider text-[#1a1a1a]/50 mb-8">Design with purpose. Build with conviction.</p>
          <button className="bg-[#cc0000] text-[#f5f0e8] font-black uppercase px-12 py-4 tracking-wider hover:bg-[#a00000] transition-colors">
            START YOUR PROJECT →
          </button>
        </section>

        {/* Footer */}
        <footer className="border-t-2 border-[#1a1a1a] py-6 flex justify-between text-xs uppercase tracking-wider text-[#1a1a1a]/30">
          <span>© 2026 KONSTRUKT COLLECTIVE</span>
          <div className="flex gap-4">
            <span>TWITTER</span><span>BEHANCE</span><span>ARENA</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* Swiss Style Theme — Full Website */
export function SwissPreview() {
  return (
    <div className="min-h-full bg-white text-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Nav */}
        <nav className="flex items-center justify-between py-6 text-sm border-b border-[#eee]">
          <span className="font-medium">Typographica®</span>
          <div className="flex gap-8 text-[#999]">
            <span className="text-[#1a1a1a]">Home</span>
            <span>About</span>
            <span>Work</span>
            <span>Contact</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-20">
          <div className="text-xs uppercase tracking-[0.2em] text-[#999] mb-6">International Typographic Style</div>
          <h1 className="text-[5.5rem] font-light mb-6 leading-[0.92] tracking-tight" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            Clean.<br />Precise.<br />Objective.
          </h1>
          <div className="w-12 h-0.5 bg-[#e63946] mb-6" />
          <p className="text-lg text-[#666] max-w-md leading-relaxed">
            The grid is the foundation. Typography speaks for itself. Whitespace is a design element, not empty space.
          </p>
        </section>

        {/* Features */}
        <section className="mb-20">
          <div className="grid grid-cols-3 gap-8 border-t border-[#eee] pt-8">
            {["Grid Systems", "Typography", "Objectivity"].map((title, i) => (
              <div key={i}>
                <div className="text-xs text-[#999] uppercase tracking-wider mb-4">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-lg font-medium mb-2">{title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">Mathematical precision in every element placed upon the canvas with systematic intent and clear purpose.</p>
              </div>
            ))}
          </div>
        </section>

        {/* About section */}
        <section className="mb-20 grid grid-cols-[1fr_2fr] gap-12 border-t border-[#eee] pt-12">
          <div>
            <div className="text-xs text-[#999] uppercase tracking-wider mb-2">About</div>
            <h2 className="text-2xl font-light leading-tight" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Design as a<br />universal language</h2>
          </div>
          <div>
            <p className="text-[#666] leading-relaxed mb-4">
              The Swiss Style emerged in the 1950s as a movement toward objective, systematic design. It prioritized readability, grid-based layouts, and clean sans-serif typography.
            </p>
            <p className="text-[#666] leading-relaxed">
              Today, these principles remain the foundation of modern web design — proving that timeless design transcends trends and technology.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="mb-20">
          <div className="space-y-0">
            {["The grid is sacred", "Content determines form", "Less is more", "Typography is design"].map((p, i) => (
              <div key={i} className="flex justify-between items-baseline border-t border-[#eee] py-5">
                <span className="text-xs text-[#999]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-medium flex-1 ml-8">{p}</h3>
                <span className="text-xs text-[#999]">→</span>
              </div>
            ))}
            <div className="border-t border-[#eee]" />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t border-[#eee]">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Start with clarity</h2>
          <p className="text-[#666] mb-8">Let the grid guide your next project.</p>
          <button className="bg-[#1a1a1a] text-white px-8 py-3 text-sm font-medium hover:bg-[#333] transition-colors">
            Get in touch
          </button>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#eee] py-6 flex justify-between text-xs text-[#999]">
          <span>© 2026 Typographica</span>
          <div className="flex gap-6">
            <span>Twitter</span><span>LinkedIn</span><span>Behance</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* Modern Minimalism Theme — Full Website */
export function MinimalismPreview() {
  return (
    <div className="min-h-full bg-[#fafafa] text-[#171717]">
      <div className="max-w-2xl mx-auto px-8">
        {/* Nav */}
        <nav className="flex items-center justify-between py-8 text-sm">
          <span className="font-medium">studio.</span>
          <div className="flex gap-6 text-[#a3a3a3]">
            <span className="text-[#171717]">Home</span>
            <span>Work</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-20">
          <h1 className="text-[2.75rem] font-medium mb-5 leading-[1.15] tracking-tight">
            Less, but better.
          </h1>
          <p className="text-lg text-[#737373] mb-10 leading-relaxed max-w-md">
            We design digital products with radical simplicity. Every pixel earns its place. Nothing more, nothing less.
          </p>
          <div className="flex gap-3">
            <button className="bg-[#2563eb] text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-[#1d4ed8] transition-colors">
              Get started
            </button>
            <button className="text-[#737373] px-6 py-2.5 rounded-md text-sm font-medium hover:text-[#171717] transition-colors">
              Learn more →
            </button>
          </div>
        </section>

        {/* Features */}
        <section className="mb-20">
          <div className="space-y-8">
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
        </section>

        {/* About */}
        <section className="mb-20">
          <h2 className="text-2xl font-medium mb-4 tracking-tight">Our philosophy</h2>
          <p className="text-[#737373] leading-relaxed mb-4">
            We believe the best interfaces are invisible. They don't call attention to themselves — they call attention to the content and the user's goals.
          </p>
          <p className="text-[#737373] leading-relaxed">
            Every project starts with subtraction. We remove elements until the design breaks, then add back exactly one thing.
          </p>
        </section>

        {/* Testimonial */}
        <section className="mb-20 border-l-2 border-[#2563eb] pl-6">
          <p className="text-[#737373] leading-relaxed mb-3">
            "They stripped away everything we thought we needed and left us with exactly what our users wanted. Conversions doubled."
          </p>
          <div className="text-sm text-[#a3a3a3]">— Maria Chen, Product Lead at Calm</div>
        </section>

        {/* CTA */}
        <section className="text-center py-16">
          <h2 className="text-2xl font-medium mb-3 tracking-tight">Ready to simplify?</h2>
          <p className="text-[#737373] mb-6">Let's build something beautifully simple together.</p>
          <button className="bg-[#2563eb] text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-[#1d4ed8] transition-colors">
            Start a project →
          </button>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#e5e5e5] py-6 flex justify-between text-xs text-[#a3a3a3]">
          <span>© 2026 studio.</span>
          <div className="flex gap-6">
            <span>Twitter</span><span>Dribbble</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* Bento Grid Theme — Full Website */
export function BentoPreview() {
  return (
    <div className="min-h-full bg-[#09090b] text-[#fafafa]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Nav */}
        <nav className="flex items-center justify-between py-5 border-b border-[#27272a]">
          <span className="font-bold text-lg">⬡ Prism</span>
          <div className="flex gap-6 text-sm text-[#71717a]">
            <span className="text-[#fafafa]">Dashboard</span>
            <span>Analytics</span>
            <span>Reports</span>
            <span>Settings</span>
          </div>
        </nav>

        <section className="py-8">
          <h1 className="text-3xl font-bold mb-2 tracking-tight">Dashboard</h1>
          <p className="text-[#71717a] mb-6">Your creative command center. Everything at a glance.</p>

          <div className="grid grid-cols-4 gap-3 auto-rows-[120px] mb-6">
            <div className="col-span-2 row-span-2 bg-[#18181b] border border-[#27272a] rounded-2xl p-6 flex flex-col justify-between">
              <div className="text-sm text-[#71717a]">Total Revenue</div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">$2.4M</div>
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
          </div>

          {/* Activity feed */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { icon: "from-[#3b82f6] to-[#06b6d4]", title: "3 new deployments", sub: "Production pipeline active" },
              { icon: "from-[#f97316] to-[#ef4444]", title: "2 alerts pending", sub: "Memory threshold exceeded" },
            ].map((item) => (
              <div key={item.title} className="bg-[#18181b] border border-[#27272a] rounded-2xl p-5 flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${item.icon} shrink-0`} />
                <div>
                  <div className="font-medium text-sm">{item.title}</div>
                  <div className="text-xs text-[#71717a]">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature grid */}
          <h2 className="text-xl font-bold mb-4 mt-10">Features</h2>
          <div className="grid grid-cols-3 gap-3">
            {["Real-time Analytics", "Team Collaboration", "API Access", "Custom Reports", "Integrations", "Security"].map((title) => (
              <div key={title} className="bg-[#18181b] border border-[#27272a] rounded-2xl p-5">
                <h3 className="font-medium text-sm mb-1">{title}</h3>
                <p className="text-xs text-[#71717a]">Enterprise-grade tools built for modern teams.</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-[#27272a]">
          <h2 className="text-2xl font-bold mb-3">Ready to level up?</h2>
          <p className="text-[#71717a] text-sm mb-6">Start your free trial today. No credit card required.</p>
          <button className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white px-8 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity">
            Get Started Free →
          </button>
        </section>

        <footer className="border-t border-[#27272a] py-6 flex justify-between text-xs text-[#71717a]">
          <span>© 2026 Prism Analytics</span>
          <div className="flex gap-4"><span>Docs</span><span>Status</span><span>GitHub</span></div>
        </footer>
      </div>
    </div>
  );
}
