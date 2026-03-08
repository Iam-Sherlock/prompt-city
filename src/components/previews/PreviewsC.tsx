/* Claymorphism Theme */
export function ClaymorphismPreview() {
  return (
    <div className="min-h-full bg-[#f8f9fa] p-6">
      <div className="max-w-4xl mx-auto">
        {/* Nav */}
        <div className="flex items-center justify-between mb-12">
          <span className="text-lg font-extrabold text-[#333]" style={{ fontFamily: "'Nunito', sans-serif" }}>Clay ✨</span>
          <div className="flex gap-6 text-sm text-[#666]">
            <span className="text-[#333] font-bold">Home</span>
            <span>Products</span>
            <span>About</span>
          </div>
        </div>

        <h1 className="text-5xl font-extrabold text-[#333] mb-4" style={{ fontFamily: "'Nunito', sans-serif" }}>
          Squishy &<br />Delightful ✨
        </h1>
        <p className="text-lg text-[#666] mb-8 max-w-md">
          Playful 3D elements that feel like digital clay. Touch, squish, create.
        </p>
        <button className="px-8 py-4 rounded-2xl text-white font-bold text-lg transition-transform hover:scale-105" style={{ background: "#ff7f7f", boxShadow: "0 8px 32px rgba(255,127,127,0.3), inset 0 -4px 8px rgba(0,0,0,0.05), inset 0 4px 8px rgba(255,255,255,0.4)" }}>
          Let's Play!
        </button>

        <div className="grid grid-cols-3 gap-6 mt-14">
          {[
            { title: "Create", color: "#7fdfbf", desc: "Mold ideas into tangible digital experiences" },
            { title: "Shape", color: "#b19cd9", desc: "Form beautiful interfaces with soft edges" },
            { title: "Mold", color: "#87ceeb", desc: "Craft delightful interactions that feel real" },
          ].map((card) => (
            <div key={card.title} className="p-6 rounded-3xl transition-transform hover:scale-105" style={{ background: card.color, boxShadow: `0 8px 32px ${card.color}44, inset 0 -4px 8px rgba(0,0,0,0.05), inset 0 4px 8px rgba(255,255,255,0.4)` }}>
              <h3 className="text-xl font-extrabold text-[#333] mb-2">{card.title}</h3>
              <p className="text-sm text-[#333]/50">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Tactile Maximalism Theme */
export function MaximalismPreview() {
  return (
    <div className="min-h-full p-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #fef3c7, #fce7f3, #e0e7ff)" }}>
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #e11d48 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Nav */}
        <div className="flex items-center justify-between mb-12">
          <span className="text-xl font-black text-[#e11d48]">MAX!</span>
          <div className="flex gap-4">
            <span className="bg-[#fef3c7] border-2 border-[#f59e0b] px-3 py-1 text-xs font-bold rounded-md">Gallery</span>
            <span className="bg-[#fce7f3] border-2 border-[#ec4899] px-3 py-1 text-xs font-bold rounded-md">Shop</span>
            <span className="bg-[#e0e7ff] border-2 border-[#6366f1] px-3 py-1 text-xs font-bold rounded-md">About</span>
          </div>
        </div>

        <h1 className="text-6xl font-black mb-4 leading-none">
          <span className="text-[#e11d48]">MORE</span>{" "}
          <span className="text-[#8b5cf6]" style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}>is</span>{" "}
          <span className="text-[#10b981]">MORE</span>
        </h1>
        <p className="text-lg text-[#1e293b] mb-8 max-w-md font-medium">
          Layered, textured, rich. Every surface tells a story. Controlled chaos that rewards the curious eye.
        </p>
        <button className="bg-[#e11d48] text-white px-8 py-3 font-bold border-2 border-[#1e293b] shadow-[3px_3px_0px_#1e293b] hover:shadow-[1px_1px_0px_#1e293b] transition-all rounded-md">
          Dive In →
        </button>

        <div className="grid grid-cols-3 gap-4 mt-14">
          {[
            { title: "Texture", bg: "#fef3c7", border: "#f59e0b" },
            { title: "Layers", bg: "#fce7f3", border: "#ec4899" },
            { title: "Density", bg: "#e0e7ff", border: "#6366f1" },
          ].map((card) => (
            <div key={card.title} className="p-5 rounded-lg border-2" style={{ background: card.bg, borderColor: card.border }}>
              <h3 className="text-xl font-black mb-2" style={{ color: card.border }}>{card.title}</h3>
              <p className="text-sm text-[#1e293b]/50">Rich details that reward exploration and discovery.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Liquid / WebGL Theme */
export function LiquidPreview() {
  return (
    <div className="min-h-full bg-[#050505] text-white p-6 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full opacity-30 blur-[80px]" style={{ background: "radial-gradient(circle, #06b6d4, #3b82f6)" }} />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full opacity-20 blur-[100px]" style={{ background: "radial-gradient(circle, #8b5cf6, #06b6d4)" }} />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Nav */}
        <div className="flex items-center justify-between mb-14">
          <span className="font-light text-lg bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>◉ Fluid</span>
          <div className="flex gap-6 text-sm text-white/30">
            <span className="text-white/60">Home</span>
            <span>Lab</span>
            <span>About</span>
          </div>
        </div>

        <h1 className="text-6xl font-light mb-5 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          <span className="bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent">Fluid</span><br />
          Interfaces
        </h1>
        <p className="text-white/30 text-lg mb-10 max-w-md font-light">
          Living, breathing digital surfaces. Nothing is static. Everything flows and transforms.
        </p>
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white font-medium hover:opacity-80 transition-opacity">
          Experience →
        </button>

        <div className="grid grid-cols-3 gap-4 mt-16">
          {["Flow", "Morph", "Pulse"].map((title) => (
            <div key={title} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] transition-all">
              <h3 className="text-lg font-medium mb-2 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent">{title}</h3>
              <p className="text-sm text-white/20">Organic motion meets digital precision in endless motion.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Kinetic Typography Theme */
export function KineticTypographyPreview() {
  return (
    <div className="min-h-full bg-black text-white p-6 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Nav */}
        <div className="flex items-center justify-between mb-16">
          <span className="text-sm font-bold tracking-widest text-white/40">TYPE</span>
          <div className="flex gap-8 text-sm text-white/20">
            <span className="text-white/60">Home</span>
            <span>Work</span>
            <span>Contact</span>
          </div>
        </div>

        <div className="mb-12">
          <h1 className="text-8xl font-black leading-none tracking-tighter mb-4">WORDS</h1>
          <h1 className="text-8xl font-black leading-none tracking-tighter text-[#f43f5e] mb-4">MOVE</h1>
          <h1 className="text-8xl font-black leading-none tracking-tighter">YOU.</h1>
        </div>
        <p className="text-white/20 text-lg max-w-sm mb-10">
          Typography is not just read — it's experienced. Every letter is choreographed with purpose.
        </p>

        <div className="flex gap-12">
          {["Design", "Motion", "Impact"].map((word) => (
            <div key={word} className="group cursor-pointer">
              <span className="text-2xl font-bold text-white/15 group-hover:text-white transition-colors duration-300">{word}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Scrapbook / Collage Theme */
export function ScrapbookPreview() {
  return (
    <div className="min-h-full p-6 relative" style={{ background: "#fef3c7" }}>
      <div className="max-w-4xl mx-auto relative">
        {/* Nav */}
        <div className="flex items-center justify-between mb-10">
          <span className="text-2xl font-bold text-[#1c1917]" style={{ fontFamily: "'Caveat', cursive" }}>My Journal 📔</span>
          <div className="flex gap-4">
            <span className="bg-[#fde68a] px-3 py-1 text-sm rotate-1 shadow-sm" style={{ fontFamily: "'Caveat', cursive" }}>Home</span>
            <span className="bg-white px-3 py-1 text-sm -rotate-1 shadow-sm" style={{ fontFamily: "'Caveat', cursive" }}>Gallery</span>
            <span className="bg-[#bfdbfe] px-3 py-1 text-sm rotate-2 shadow-sm" style={{ fontFamily: "'Caveat', cursive" }}>About</span>
          </div>
        </div>

        <div className="absolute top-2 right-4 bg-[#fde68a] px-4 py-2 rotate-3 shadow-md text-sm font-medium" style={{ fontFamily: "'Caveat', cursive" }}>
          ✨ handmade with love
        </div>

        <h1 className="text-5xl font-bold text-[#1c1917] mb-4" style={{ fontFamily: "'Caveat', cursive", transform: "rotate(-2deg)" }}>
          My Creative<br />Scrapbook 📔
        </h1>
        <p className="text-lg text-[#92400e] mb-8 max-w-md" style={{ fontFamily: "'Special Elite', cursive" }}>
          Nothing is perfectly aligned — and that's the beauty of it all.
        </p>
        <button className="bg-[#fb7185] text-white px-8 py-3 rounded-md font-bold rotate-1 shadow-lg hover:rotate-0 transition-transform">
          ✂️ Start Creating
        </button>

        <div className="grid grid-cols-3 gap-6 mt-14">
          {[
            { title: "Memories", rot: "-2deg", bg: "#fff" },
            { title: "Dreams", rot: "1deg", bg: "#fde68a" },
            { title: "Ideas", rot: "-1deg", bg: "#bfdbfe" },
          ].map((card) => (
            <div key={card.title} className="p-5 shadow-lg border border-[#1c1917]/10" style={{ background: card.bg, transform: `rotate(${card.rot})` }}>
              <h3 className="text-xl font-bold text-[#1c1917] mb-2" style={{ fontFamily: "'Caveat', cursive" }}>{card.title}</h3>
              <p className="text-sm text-[#92400e]" style={{ fontFamily: "'Special Elite', cursive" }}>Cut, paste, create. Make it yours.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Y2K / Retro-Modern Theme */
export function Y2KPreview() {
  return (
    <div className="min-h-full p-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #e0c3fc, #8ec5fc)" }}>
      <div className="absolute top-8 right-16 text-4xl">✨</div>
      <div className="absolute bottom-12 left-8 text-3xl">💿</div>
      <div className="absolute top-32 left-16 text-2xl">🌀</div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Nav */}
        <div className="flex items-center justify-between mb-12">
          <span className="font-bold text-lg text-[#333]" style={{ fontFamily: "'Outfit', sans-serif" }}>✨ Y2K Studio</span>
          <div className="flex gap-4">
            <span className="bg-white/40 backdrop-blur-sm border border-white/60 px-4 py-1.5 rounded-full text-sm text-[#333] font-medium">Home</span>
            <span className="bg-white/20 backdrop-blur-sm border border-white/40 px-4 py-1.5 rounded-full text-sm text-[#333]/60">Vibes</span>
            <span className="bg-white/20 backdrop-blur-sm border border-white/40 px-4 py-1.5 rounded-full text-sm text-[#333]/60">Shop</span>
          </div>
        </div>

        <h1 className="text-5xl font-bold text-[#333] mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Welcome to<br />the <span style={{ background: "linear-gradient(90deg, #ff6fff, #8ec5fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Future</span> ✨
        </h1>
        <p className="text-lg text-[#333]/60 mb-8 max-w-md">
          Y2K vibes. Chrome dreams. The millennium is now. 💫
        </p>
        <button className="px-8 py-3 rounded-full font-bold text-white" style={{ background: "linear-gradient(135deg, #ff6fff, #8ec5fc)", boxShadow: "0 4px 15px rgba(255,111,255,0.4)" }}>
          Enter the Future ✨
        </button>

        <div className="grid grid-cols-3 gap-4 mt-14">
          {["Retro ✨", "Chrome 💿", "Vibes 🌀"].map((title) => (
            <div key={title} className="p-5 rounded-3xl bg-white/40 backdrop-blur-sm border border-white/60 hover:bg-white/50 transition-all">
              <h3 className="text-lg font-bold text-[#333] mb-1">{title}</h3>
              <p className="text-sm text-[#333]/40">Optimistic futurism from the year 2000.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Corporate SaaS Theme */
export function CorporateSaaSPreview() {
  return (
    <div className="min-h-full bg-white text-[#1e293b] p-6">
      <div className="max-w-4xl mx-auto">
        {/* Nav */}
        <div className="flex items-center justify-between mb-12">
          <div className="font-bold text-lg">Acme<span className="text-[#3b82f6]">SaaS</span></div>
          <div className="flex gap-6 text-sm text-[#64748b]">
            <span>Features</span><span>Pricing</span><span>Docs</span><span>Blog</span>
          </div>
          <div className="flex gap-3">
            <button className="text-sm text-[#64748b] hover:text-[#1e293b] transition-colors">Log in</button>
            <button className="bg-[#3b82f6] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2563eb] transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="inline-block bg-[#eff6ff] text-[#3b82f6] text-xs font-medium px-3 py-1 rounded-full mb-4">
            ✦ Trusted by 10,000+ teams
          </div>
          <h1 className="text-5xl font-semibold mb-4 tracking-tight leading-tight">
            Ship faster with<br />better tools
          </h1>
          <p className="text-lg text-[#64748b] max-w-md mx-auto mb-8">
            The all-in-one platform that helps teams build, deploy, and scale their products with confidence.
          </p>
          <div className="flex gap-3 justify-center">
            <button className="bg-[#3b82f6] text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-[#2563eb] transition-colors">
              Start Free Trial →
            </button>
            <button className="border border-[#e2e8f0] text-[#1e293b] px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-[#f8fafc] transition-colors">
              View Demo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {[
            { title: "Analytics", desc: "Real-time insights into your data with custom dashboards" },
            { title: "Automation", desc: "Workflows that save hours daily and reduce errors" },
            { title: "Security", desc: "Enterprise-grade protection for your team's data" },
          ].map((feature) => (
            <div key={feature.title} className="p-6 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* E-commerce Immersive Theme */
export function EcommercePreview() {
  return (
    <div className="min-h-full bg-[#fafaf9] text-[#1c1917] p-6">
      <div className="max-w-4xl mx-auto">
        {/* Nav */}
        <div className="flex items-center justify-between mb-8">
          <div className="font-bold text-lg" style={{ fontFamily: "'DM Serif Display', serif" }}>MAISON</div>
          <div className="flex gap-6 text-sm text-[#78716c]">
            <span>Shop</span><span>Collection</span><span>Lookbook</span><span>About</span>
          </div>
          <div className="flex gap-4 text-sm text-[#78716c]">
            <span>Search</span><span>Cart (0)</span>
          </div>
        </div>

        {/* Hero banner */}
        <div className="bg-[#e7e5e4] rounded-2xl p-12 mb-8 text-center">
          <div className="text-xs uppercase tracking-widest text-[#78716c] mb-4">New Arrivals — Spring 2026</div>
          <h1 className="text-4xl font-medium mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
            The Spring Edit
          </h1>
          <p className="text-[#78716c] mb-6 max-w-md mx-auto">Curated pieces for the new season. Timeless quality meets contemporary design.</p>
          <button className="bg-[#059669] text-white px-8 py-3 rounded-md font-medium hover:bg-[#047857] transition-colors">
            Shop Now →
          </button>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-3 gap-5">
          {[
            { name: "Linen Blazer", price: "$245" },
            { name: "Silk Scarf", price: "$89" },
            { name: "Leather Tote", price: "$380" },
          ].map((product) => (
            <div key={product.name} className="group cursor-pointer">
              <div className="bg-[#e7e5e4] rounded-xl aspect-[3/4] mb-3 flex items-center justify-center text-[#a8a29e] text-sm overflow-hidden">
                <span className="group-hover:scale-105 transition-transform duration-300">Image</span>
              </div>
              <h3 className="font-medium text-sm">{product.name}</h3>
              <p className="text-sm font-bold text-[#059669]">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
