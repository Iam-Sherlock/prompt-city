/* Monochrome Theme */
export function MonochromePreview() {
  return (
    <div className="min-h-full bg-white text-black p-6">
      <div className="max-w-3xl mx-auto">
        {/* Nav */}
        <div className="flex items-center justify-between mb-16 text-sm">
          <span className="font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>NOIR</span>
          <div className="flex gap-6 text-[#666]">
            <span className="text-black">Home</span>
            <span>Gallery</span>
            <span>Journal</span>
            <span>Contact</span>
          </div>
        </div>

        <h1 className="text-7xl font-bold mb-6 leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
          Only<br />Black<br />& White.
        </h1>
        <div className="w-full h-[2px] bg-black mb-6" />
        <p className="text-lg text-[#666] max-w-md mb-8 leading-relaxed">
          When you remove color, only truth remains. Hierarchy through scale, weight, and space.
        </p>
        <div className="flex gap-4">
          <button className="bg-black text-white px-8 py-3 font-medium hover:bg-[#333] transition-colors">
            Explore
          </button>
          <button className="border-2 border-black text-black px-8 py-3 font-medium hover:bg-black hover:text-white transition-colors">
            About
          </button>
        </div>

        <div className="mt-16 space-y-0">
          {["Typography", "Contrast", "Composition"].map((title, i) => (
            <div key={i} className="border-t-2 border-black py-6 flex justify-between items-baseline">
              <h3 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
              <span className="text-sm text-[#999]">{String(i + 1).padStart(2, "0")}</span>
            </div>
          ))}
          <div className="border-t-2 border-black" />
        </div>
      </div>
    </div>
  );
}

/* Luxury / Editorial Theme */
export function LuxuryPreview() {
  return (
    <div className="min-h-full bg-[#0c0c0c] text-[#f5f5f0] p-6">
      <div className="max-w-2xl mx-auto pt-8">
        {/* Nav */}
        <div className="flex items-center justify-between mb-16">
          <span className="text-sm uppercase tracking-[0.3em] text-[#c9a96e]">Maison</span>
          <div className="flex gap-8 text-xs uppercase tracking-[0.2em] text-[#f5f5f0]/40">
            <span className="text-[#f5f5f0]/80">Home</span>
            <span>Collection</span>
            <span>Atelier</span>
          </div>
        </div>

        <div className="text-xs uppercase tracking-[0.3em] text-[#c9a96e] mb-8">Exclusive Collection</div>
        <h1 className="text-5xl font-light mb-6 leading-tight tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.05em" }}>
          The Art of<br />Refined Taste
        </h1>
        <div className="w-16 h-[1px] bg-[#c9a96e] mb-6" />
        <p className="text-lg text-[#f5f5f0]/50 mb-10 leading-relaxed font-light" style={{ letterSpacing: "0.02em" }}>
          Where craftsmanship meets digital elegance. Every detail speaks of exclusivity and timeless quality.
        </p>
        <button className="border border-[#c9a96e] text-[#c9a96e] px-10 py-3 uppercase text-xs tracking-[0.2em] hover:bg-[#c9a96e]/10 transition-colors">
          Discover More
        </button>

        <div className="mt-20 grid grid-cols-2 gap-12">
          {["Heritage", "Craftsmanship", "Elegance", "Legacy"].map((title, i) => (
            <div key={i}>
              <div className="text-[#c9a96e] text-xs uppercase tracking-widest mb-3">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-xl font-light mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{title}</h3>
              <p className="text-sm text-[#f5f5f0]/30 font-light leading-relaxed">An unwavering commitment to the finest standards of excellence.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Nature Distilled Theme */
export function OrganicPreview() {
  return (
    <div className="min-h-full bg-[#f7f4ef] text-[#2d3a2e] p-6">
      <div className="max-w-4xl mx-auto">
        {/* Nav */}
        <div className="flex items-center justify-between mb-12">
          <span className="text-lg font-bold" style={{ fontFamily: "'Nunito', sans-serif" }}>🌿 Verdant</span>
          <div className="flex gap-6 text-sm text-[#2d3a2e]/50">
            <span className="text-[#2d3a2e]">Home</span>
            <span>Garden</span>
            <span>Journal</span>
            <span>About</span>
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: "'Nunito', sans-serif" }}>
          Rooted in<br />Nature 🌿
        </h1>
        <p className="text-lg text-[#2d3a2e]/50 mb-8 max-w-md leading-relaxed">
          Organic design inspired by the gentle rhythms of the natural world. Calming, grounded, alive.
        </p>
        <button className="bg-[#4a7c59] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#3d6a4b] transition-colors">
          Explore Nature
        </button>

        <div className="grid grid-cols-3 gap-6 mt-14">
          {[
            { title: "Earth", color: "#c17f59", emoji: "🌍", desc: "Grounded in the rich soil of sustainable practice" },
            { title: "Water", color: "#8fb4c4", emoji: "💧", desc: "Flowing with the natural rhythms of design" },
            { title: "Growth", color: "#4a7c59", emoji: "🌱", desc: "Cultivating ideas that blossom over time" },
          ].map((card) => (
            <div key={card.title} className="bg-white rounded-3xl p-6 shadow-lg shadow-[#2d3a2e]/5">
              <div className="text-3xl mb-3">{card.emoji}</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: card.color }}>{card.title}</h3>
              <p className="text-sm text-[#2d3a2e]/40 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Vaporwave Theme */
export function VaporwavePreview() {
  return (
    <div className="min-h-full text-[#ff71ce] p-6 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #1a0533 0%, #0d0221 100%)" }}>
      {/* Grid floor */}
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-20" style={{ background: "linear-gradient(180deg, transparent, #ff71ce)", backgroundSize: "100% 100%" }}>
        <div className="h-full" style={{ backgroundImage: "linear-gradient(90deg, #ff71ce 1px, transparent 1px), linear-gradient(#ff71ce 1px, transparent 1px)", backgroundSize: "40px 40px", transform: "perspective(200px) rotateX(40deg)", transformOrigin: "bottom" }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Nav */}
        <div className="flex items-center justify-between mb-12">
          <span className="text-sm text-[#b967ff] tracking-widest">ＶＡＵＬＴ</span>
          <div className="flex gap-6 text-xs text-[#01cdfe]/50">
            <span className="text-[#01cdfe]">ホーム</span>
            <span>ギャラリー</span>
            <span>アーカイブ</span>
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: "'Times New Roman', serif", fontStyle: "italic", background: "linear-gradient(90deg, #ff71ce, #01cdfe, #b967ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Ａ Ｅ Ｓ Ｔ Ｈ Ｅ Ｔ Ｉ Ｃ
        </h1>
        <p className="text-[#01cdfe] text-lg mb-8">
          ｄ ｒ ｅ ａ ｍ ｓ &nbsp; ｏ ｆ &nbsp; ａ &nbsp; ｄ ｉ ｇ ｉ ｔ ａ ｌ &nbsp; ｐ ａ ｒ ａ ｄ ｉ ｓ ｅ ✨
        </p>
        <button className="px-8 py-3 font-bold border-2 border-[#ff71ce] text-[#ff71ce] hover:bg-[#ff71ce]/10 transition-all" style={{ boxShadow: "0 0 20px rgba(255,113,206,0.3)" }}>
          E N T E R  💿
        </button>

        <div className="grid grid-cols-3 gap-4 mt-14">
          {["PALM MALL", "SUNSET CORP", "DREAM TECH"].map((title, i) => (
            <div key={i} className="p-5 border border-[#b967ff]/20 bg-[#b967ff]/5 hover:border-[#b967ff]/40 transition-colors" style={{ boxShadow: "0 0 15px rgba(185,103,255,0.08)" }}>
              <h3 className="text-sm font-bold text-[#b967ff] mb-1">{title}</h3>
              <p className="text-xs text-[#01cdfe]/40">Memories of a future that never was ～</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Glassmorphism Theme */
export function GlassmorphismPreview() {
  return (
    <div className="min-h-full p-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)" }}>
      {/* Floating orbs */}
      <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-[#06b6d4] opacity-40 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-[#f43f5e] opacity-30 blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Nav */}
        <div className="backdrop-blur-md bg-white/15 border border-white/20 rounded-full px-6 py-3 flex items-center justify-between mb-10">
          <span className="font-bold text-white text-sm">◈ Glassia</span>
          <div className="flex gap-6 text-sm text-white/60">
            <span className="text-white">Home</span>
            <span>Features</span>
            <span>Pricing</span>
          </div>
          <button className="backdrop-blur-md bg-white/20 border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-semibold">
            Sign Up
          </button>
        </div>

        {/* Hero */}
        <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-[30px] p-10 mb-8">
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.02em" }}>
            Through<br />the Glass
          </h1>
          <p className="text-white/70 text-lg mb-6 max-w-md">
            Layered transparency creates depth. Blur reveals beauty. Glass becomes interface.
          </p>
          <div className="flex gap-3">
            <button className="backdrop-blur-md bg-white/25 border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/35 transition-all">
              Explore
            </button>
            <button className="text-white/70 px-8 py-3 rounded-full font-semibold hover:text-white transition-all">
              Learn more →
            </button>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-3 gap-4">
          {["Clarity", "Depth", "Elegance"].map((title) => (
            <div key={title} className="backdrop-blur-lg bg-white/15 border border-white/20 rounded-[20px] p-6 hover:bg-white/20 transition-all">
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-white/50">Beautiful layers of translucent surfaces that catch light.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Neumorphism Theme */
export function NeumorphismPreview() {
  return (
    <div className="min-h-full bg-[#e0e5ec] p-6">
      <div className="max-w-4xl mx-auto">
        {/* Nav */}
        <div className="flex items-center justify-between mb-12 px-6 py-3 rounded-2xl" style={{ background: "#e0e5ec", boxShadow: "6px 6px 12px #b8bec7, -6px -6px 12px #ffffff" }}>
          <span className="font-semibold text-[#65748b]" style={{ fontFamily: "'Poppins', sans-serif" }}>SoftUI</span>
          <div className="flex gap-6 text-sm text-[#65748b]/50">
            <span className="text-[#6366f1]">Home</span>
            <span>Features</span>
            <span>Pricing</span>
          </div>
        </div>

        <h1 className="text-4xl font-semibold text-[#65748b] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Soft Surfaces
        </h1>
        <p className="text-lg text-[#65748b]/50 mb-8 max-w-md">
          Tactile design where light and shadow sculpt the interface from a single material.
        </p>
        <button className="px-8 py-3 rounded-xl text-[#6366f1] font-semibold transition-all" style={{ background: "#e0e5ec", boxShadow: "8px 8px 16px #b8bec7, -8px -8px 16px #ffffff" }}>
          Touch Me
        </button>

        <div className="grid grid-cols-3 gap-6 mt-14">
          {["Design", "Build", "Ship"].map((title, i) => (
            <div key={i} className="p-6 rounded-2xl" style={{ background: "#e0e5ec", boxShadow: "8px 8px 16px #b8bec7, -8px -8px 16px #ffffff" }}>
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-[#6366f1] font-bold text-lg" style={{ background: "#e0e5ec", boxShadow: "inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-semibold text-[#65748b] mb-2">{title}</h3>
              <p className="text-sm text-[#65748b]/40">Sculpted from the same surface, designed to feel physical.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
