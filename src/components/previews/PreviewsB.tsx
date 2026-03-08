/* Monochrome Theme — Full Website */
export function MonochromePreview() {
  return (
    <div className="min-h-full bg-white text-black">
      <div className="max-w-3xl mx-auto px-6">
        {/* Nav */}
        <nav className="flex items-center justify-between py-6 border-b-2 border-black">
          <span className="font-bold text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>NOIR</span>
          <div className="flex gap-6 text-sm text-[#666]">
            <span className="text-black">Home</span>
            <span>Gallery</span>
            <span>Journal</span>
            <span>Contact</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-20">
          <h1 className="text-[5.5rem] font-bold mb-6 leading-[0.85]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Only<br />Black<br />& White.
          </h1>
          <div className="w-full h-[2px] bg-black mb-6" />
          <p className="text-lg text-[#666] max-w-md mb-8 leading-relaxed">
            When you remove color, only truth remains. We create timeless digital experiences through hierarchy, scale, weight, and space.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-8 py-3 font-medium hover:bg-[#333] transition-colors">Explore Work</button>
            <button className="border-2 border-black text-black px-8 py-3 font-medium hover:bg-black hover:text-white transition-colors">About Us</button>
          </div>
        </section>

        {/* Services */}
        <section className="mb-20">
          {["Typography", "Contrast", "Composition", "Hierarchy", "Rhythm"].map((title, i) => (
            <div key={i} className="border-t-2 border-black py-6 flex justify-between items-baseline group cursor-pointer hover:bg-black hover:text-white hover:px-6 transition-all">
              <h3 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
              <span className="text-sm text-[#999] group-hover:text-white/50">{String(i + 1).padStart(2, "0")}</span>
            </div>
          ))}
          <div className="border-t-2 border-black" />
        </section>

        {/* About */}
        <section className="mb-20 grid grid-cols-[1fr_1.5fr] gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Our Method</h2>
          </div>
          <div>
            <p className="text-[#666] leading-relaxed mb-4">
              We believe color is a crutch. When you strip it away, you're forced to master the fundamentals: scale creates importance, weight creates emphasis, and space creates rhythm.
            </p>
            <p className="text-[#666] leading-relaxed">
              The result is design that works in any context, on any medium, at any size. Timeless by nature, not by accident.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-black text-white p-10 mb-20">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { val: "200+", label: "Projects" },
              { val: "15yr", label: "Experience" },
              { val: "100%", label: "Monochrome" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{s.val}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-20 border-l-2 border-black pl-8">
          <p className="text-xl text-[#666] leading-relaxed mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            "They proved that great design doesn't need color. Our rebrand in pure black and white increased brand recognition by 40%."
          </p>
          <div className="text-sm text-[#999]">— Alexandra Pierce, Creative Director</div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t-2 border-black">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Ready for clarity?</h2>
          <p className="text-[#666] mb-8">Let's create something timelessly beautiful.</p>
          <button className="bg-black text-white px-10 py-4 font-medium hover:bg-[#333] transition-colors">Start a Project →</button>
        </section>

        <footer className="border-t-2 border-black py-6 flex justify-between text-xs text-[#999]">
          <span>© 2026 NOIR Studio</span>
          <div className="flex gap-4"><span>Instagram</span><span>Behance</span><span>Arena</span></div>
        </footer>
      </div>
    </div>
  );
}

/* Luxury / Editorial Theme — Full Website */
export function LuxuryPreview() {
  return (
    <div className="min-h-full bg-[#0c0c0c] text-[#f5f5f0]">
      <div className="max-w-2xl mx-auto px-6">
        {/* Nav */}
        <nav className="flex items-center justify-between py-8 border-b border-[#c9a96e]/20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c9a96e]">Maison</span>
          <div className="flex gap-8 text-xs uppercase tracking-[0.15em] text-[#f5f5f0]/30">
            <span className="text-[#f5f5f0]/70">Home</span>
            <span>Collection</span>
            <span>Atelier</span>
            <span>Contact</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-24">
          <div className="text-xs uppercase tracking-[0.3em] text-[#c9a96e] mb-10">Exclusive Collection · 2026</div>
          <h1 className="text-[3.5rem] font-light mb-8 leading-[1.1] tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.04em" }}>
            The Art of<br />Refined Taste
          </h1>
          <div className="w-16 h-[1px] bg-[#c9a96e] mb-8" />
          <p className="text-lg text-[#f5f5f0]/40 mb-12 leading-relaxed font-light max-w-md" style={{ letterSpacing: "0.02em" }}>
            Where craftsmanship meets digital elegance. Every detail speaks of exclusivity, heritage, and timeless quality.
          </p>
          <button className="border border-[#c9a96e] text-[#c9a96e] px-10 py-3 uppercase text-xs tracking-[0.2em] hover:bg-[#c9a96e]/10 transition-colors">
            Discover More
          </button>
        </section>

        {/* Features */}
        <section className="mb-24">
          <div className="grid grid-cols-2 gap-16">
            {["Heritage", "Craftsmanship", "Elegance", "Legacy"].map((title, i) => (
              <div key={i}>
                <div className="text-[#c9a96e] text-xs uppercase tracking-widest mb-4">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-2xl font-light mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{title}</h3>
                <p className="text-sm text-[#f5f5f0]/25 font-light leading-relaxed">An unwavering commitment to the finest standards of excellence, passed through generations.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider quote */}
        <section className="py-16 border-t border-b border-[#c9a96e]/15 mb-24 text-center">
          <p className="text-2xl font-light text-[#f5f5f0]/50 max-w-md mx-auto leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
            "True luxury is not about having more — it's about having only what is truly exceptional."
          </p>
          <div className="text-xs text-[#c9a96e] uppercase tracking-[0.3em] mt-6">— The Maison Philosophy</div>
        </section>

        {/* Process */}
        <section className="mb-24">
          <div className="text-xs uppercase tracking-[0.3em] text-[#c9a96e] mb-8">The Atelier</div>
          <div className="space-y-6">
            {[
              { title: "Consultation", desc: "A private session to understand your vision and aspirations" },
              { title: "Design", desc: "Bespoke compositions crafted with meticulous attention to detail" },
              { title: "Refinement", desc: "Iterative perfection until every element resonates" },
              { title: "Delivery", desc: "A finished experience worthy of the Maison name" },
            ].map((step, i) => (
              <div key={i} className="flex gap-8 items-start border-t border-[#c9a96e]/10 pt-6">
                <span className="text-[#c9a96e]/30 text-xs">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg font-light mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{step.title}</h3>
                  <p className="text-sm text-[#f5f5f0]/25 font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-20 border-t border-[#c9a96e]/15">
          <div className="text-xs uppercase tracking-[0.3em] text-[#c9a96e] mb-6">Begin Your Journey</div>
          <h2 className="text-3xl font-light mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Request a Private<br />Consultation</h2>
          <button className="border border-[#c9a96e] text-[#c9a96e] px-12 py-4 uppercase text-xs tracking-[0.2em] hover:bg-[#c9a96e]/10 transition-colors">
            Book Appointment
          </button>
        </section>

        <footer className="border-t border-[#c9a96e]/10 py-8 text-center text-xs text-[#f5f5f0]/15 uppercase tracking-[0.2em]">
          © 2026 Maison · All Rights Reserved
        </footer>
      </div>
    </div>
  );
}

/* Nature Distilled Theme — Full Website */
export function OrganicPreview() {
  return (
    <div className="min-h-full bg-[#f7f4ef] text-[#2d3a2e]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Nav */}
        <nav className="flex items-center justify-between py-5">
          <span className="text-lg font-bold" style={{ fontFamily: "'Nunito', sans-serif" }}>🌿 Verdant</span>
          <div className="flex gap-6 text-sm text-[#2d3a2e]/40">
            <span className="text-[#2d3a2e]">Home</span>
            <span>Garden</span>
            <span>Journal</span>
            <span>About</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-16">
          <h1 className="text-5xl font-bold mb-5 leading-tight" style={{ fontFamily: "'Nunito', sans-serif" }}>
            Rooted in<br />Nature 🌿
          </h1>
          <p className="text-lg text-[#2d3a2e]/45 mb-8 max-w-md leading-relaxed">
            Organic design inspired by the gentle rhythms of the natural world. Calming, grounded, and alive — just like the best digital experiences should be.
          </p>
          <div className="flex gap-3">
            <button className="bg-[#4a7c59] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#3d6a4b] transition-colors">Explore Nature</button>
            <button className="text-[#4a7c59] px-6 py-3 rounded-full font-semibold hover:bg-[#4a7c59]/10 transition-colors">Learn more →</button>
          </div>
        </section>

        {/* Feature cards */}
        <section className="mb-16">
          <div className="grid grid-cols-3 gap-6">
            {[
              { title: "Earth", color: "#c17f59", emoji: "🌍", desc: "Grounded in sustainable practice and timeless design principles" },
              { title: "Water", color: "#8fb4c4", emoji: "💧", desc: "Flowing naturally with the rhythms of user behavior" },
              { title: "Growth", color: "#4a7c59", emoji: "🌱", desc: "Cultivating ideas that blossom beautifully over time" },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-3xl p-6 shadow-lg shadow-[#2d3a2e]/5">
                <div className="text-3xl mb-3">{card.emoji}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: card.color }}>{card.title}</h3>
                <p className="text-sm text-[#2d3a2e]/35 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="mb-16 bg-white rounded-3xl p-10 shadow-lg shadow-[#2d3a2e]/5">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Nunito', sans-serif" }}>Our Philosophy 🌱</h2>
          <p className="text-[#2d3a2e]/45 leading-relaxed mb-4">
            Nature doesn't rush, yet everything is accomplished. We bring this same patience and intentionality to every digital experience we create.
          </p>
          <p className="text-[#2d3a2e]/45 leading-relaxed">
            Organic shapes, earthy palettes, and thoughtful animations create interfaces that feel human, warm, and genuinely alive.
          </p>
        </section>

        {/* Testimonial */}
        <section className="mb-16 bg-[#4a7c59] text-white rounded-3xl p-10">
          <p className="text-lg leading-relaxed mb-4 text-white/80">
            "Verdant created something that actually feels alive. Our users describe it as 'calming' and 'beautiful' — not words you usually hear about software."
          </p>
          <div className="text-sm text-white/50">— Emma Lindström, Head of Product at GreenTech</div>
        </section>

        {/* CTA */}
        <section className="text-center py-16">
          <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Nunito', sans-serif" }}>Ready to grow? 🌱</h2>
          <p className="text-[#2d3a2e]/40 mb-6">Let's cultivate something beautiful together.</p>
          <button className="bg-[#4a7c59] text-white px-10 py-3 rounded-full font-semibold hover:bg-[#3d6a4b] transition-colors">
            Start Growing →
          </button>
        </section>

        <footer className="border-t border-[#2d3a2e]/10 py-6 flex justify-between text-xs text-[#2d3a2e]/25">
          <span>© 2026 Verdant Studio 🌿</span>
          <div className="flex gap-4"><span>Instagram</span><span>Twitter</span><span>LinkedIn</span></div>
        </footer>
      </div>
    </div>
  );
}

/* Vaporwave Theme — Full Website */
export function VaporwavePreview() {
  return (
    <div className="min-h-full text-[#ff71ce] relative overflow-hidden" style={{ background: "linear-gradient(180deg, #1a0533 0%, #0d0221 100%)" }}>
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-20" style={{ background: "linear-gradient(180deg, transparent, #ff71ce)" }}>
        <div className="h-full" style={{ backgroundImage: "linear-gradient(90deg, #ff71ce 1px, transparent 1px), linear-gradient(#ff71ce 1px, transparent 1px)", backgroundSize: "40px 40px", transform: "perspective(200px) rotateX(40deg)", transformOrigin: "bottom" }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Nav */}
        <nav className="flex items-center justify-between py-5 border-b border-[#b967ff]/15">
          <span className="text-sm text-[#b967ff] tracking-widest">ＶＡＵＬＴ</span>
          <div className="flex gap-6 text-xs text-[#01cdfe]/40">
            <span className="text-[#01cdfe]/70">ホーム</span>
            <span>ギャラリー</span>
            <span>アーカイブ</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-20">
          <h1 className="text-6xl font-bold mb-5" style={{ fontFamily: "'Times New Roman', serif", fontStyle: "italic", background: "linear-gradient(90deg, #ff71ce, #01cdfe, #b967ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Ａ Ｅ Ｓ Ｔ Ｈ Ｅ Ｔ Ｉ Ｃ
          </h1>
          <p className="text-[#01cdfe] text-lg mb-8">ｄ ｒ ｅ ａ ｍ ｓ &nbsp; ｏ ｆ &nbsp; ａ &nbsp; ｄ ｉ ｇ ｉ ｔ ａ ｌ &nbsp; ｐ ａ ｒ ａ ｄ ｉ ｓ ｅ ✨</p>
          <button className="px-8 py-3 font-bold border-2 border-[#ff71ce] text-[#ff71ce] hover:bg-[#ff71ce]/10 transition-all" style={{ boxShadow: "0 0 20px rgba(255,113,206,0.3)" }}>
            E N T E R  💿
          </button>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-3 gap-4">
            {["PALM MALL", "SUNSET CORP", "DREAM TECH"].map((title, i) => (
              <div key={i} className="p-6 border border-[#b967ff]/15 bg-[#b967ff]/5 hover:border-[#b967ff]/30 transition-colors" style={{ boxShadow: "0 0 15px rgba(185,103,255,0.05)" }}>
                <h3 className="text-sm font-bold text-[#b967ff] mb-2">{title}</h3>
                <p className="text-xs text-[#01cdfe]/30 leading-relaxed">Memories of a future that never was. Digital paradise in perpetual sunset ～</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="mb-16 border-l-2 border-[#ff71ce]/30 pl-6">
          <p className="text-[#01cdfe]/40 text-sm leading-relaxed mb-2" style={{ fontStyle: "italic" }}>
            "In the mall of the mind, every sunset is eternal and every song plays on repeat forever ～"
          </p>
          <div className="text-xs text-[#b967ff]/30">— ＶＡＰＯＲ ＷＡＶＥ ＭＡＮＩＦＥＳＴＯ</div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t border-[#b967ff]/10">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Times New Roman', serif", fontStyle: "italic", background: "linear-gradient(90deg, #ff71ce, #01cdfe)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Ｅ Ｎ Ｔ Ｅ Ｒ &nbsp; Ｔ Ｈ Ｅ &nbsp; Ｖ Ｏ Ｉ Ｄ
          </h2>
          <button className="px-10 py-3 font-bold border-2 border-[#ff71ce] text-[#ff71ce] hover:bg-[#ff71ce]/10 transition-all" style={{ boxShadow: "0 0 20px rgba(255,113,206,0.3)" }}>
            S U B S C R I B E ✨
          </button>
        </section>

        <footer className="border-t border-[#b967ff]/10 py-6 text-center text-xs text-[#b967ff]/20">
          © ２０２６ ＶＡＵＬＴ ～ ALL RIGHTS RESERVED 💿
        </footer>
      </div>
    </div>
  );
}

/* Glassmorphism Theme — Full Website */
export function GlassmorphismPreview() {
  return (
    <div className="min-h-full relative overflow-hidden" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)" }}>
      <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-[#06b6d4] opacity-40 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-[#f43f5e] opacity-30 blur-3xl" />
      <div className="absolute top-[50%] left-[50%] w-48 h-48 rounded-full bg-[#fbbf24] opacity-20 blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Nav */}
        <nav className="backdrop-blur-md bg-white/15 border border-white/20 rounded-full px-6 py-3 flex items-center justify-between mt-4 mb-10">
          <span className="font-bold text-white text-sm">◈ Glassia</span>
          <div className="flex gap-6 text-sm text-white/50">
            <span className="text-white/90">Home</span>
            <span>Features</span>
            <span>Pricing</span>
            <span>About</span>
          </div>
          <button className="backdrop-blur-md bg-white/20 border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-semibold">Sign Up</button>
        </nav>

        {/* Hero */}
        <section className="py-16">
          <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-[30px] p-12 mb-8">
            <h1 className="text-5xl font-bold text-white mb-5 leading-[1.1]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Through<br />the Glass
            </h1>
            <p className="text-white/60 text-lg mb-8 max-w-md leading-relaxed">
              Build beautiful, layered interfaces with frosted glass effects. Depth through transparency. Elegance through blur.
            </p>
            <div className="flex gap-3">
              <button className="backdrop-blur-md bg-white/25 border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/35 transition-all">Get Started</button>
              <button className="text-white/60 px-8 py-3 rounded-full font-semibold hover:text-white transition-all">Learn more →</button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <div className="grid grid-cols-3 gap-4">
            {["Clarity", "Depth", "Elegance"].map((title) => (
              <div key={title} className="backdrop-blur-lg bg-white/15 border border-white/20 rounded-[20px] p-6 hover:bg-white/20 transition-all">
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">Beautiful layers of translucent surfaces that catch and refract light from vibrant gradients.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="backdrop-blur-lg bg-white/15 border border-white/20 rounded-[24px] p-8 mb-16">
          <div className="grid grid-cols-4 gap-6 text-center">
            {[
              { val: "50K+", label: "Users" },
              { val: "99.9%", label: "Uptime" },
              { val: "4.9★", label: "Rating" },
              { val: "150+", label: "Countries" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-white">{s.val}</div>
                <div className="text-xs text-white/40 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16 backdrop-blur-lg bg-white/10 border border-white/15 rounded-[20px] p-8">
          <p className="text-white/60 leading-relaxed mb-3">
            "Glassia's design system helped us create an interface that our users describe as 'magical.' The layered transparency feels genuinely premium."
          </p>
          <div className="text-sm text-white/30">— Priya Sharma, Design Lead at FloatUI</div>
        </section>

        {/* CTA */}
        <section className="text-center py-16">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>See through the glass</h2>
          <p className="text-white/40 mb-6">Start building beautiful layered interfaces today.</p>
          <button className="backdrop-blur-md bg-white/25 border border-white/30 text-white px-10 py-3 rounded-full font-semibold hover:bg-white/35 transition-all">
            Start Free Trial →
          </button>
        </section>

        <footer className="border-t border-white/10 py-6 flex justify-between text-xs text-white/20">
          <span>© 2026 Glassia</span>
          <div className="flex gap-4"><span>Twitter</span><span>GitHub</span><span>Discord</span></div>
        </footer>
      </div>
    </div>
  );
}

/* Neumorphism Theme — Full Website */
export function NeumorphismPreview() {
  return (
    <div className="min-h-full bg-[#e0e5ec]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Nav */}
        <nav className="flex items-center justify-between py-6">
          <div className="px-5 py-2.5 rounded-xl" style={{ background: "#e0e5ec", boxShadow: "4px 4px 8px #b8bec7, -4px -4px 8px #ffffff" }}>
            <span className="font-semibold text-[#65748b]" style={{ fontFamily: "'Poppins', sans-serif" }}>SoftUI</span>
          </div>
          <div className="flex gap-2">
            {["Home", "Features", "Pricing", "About"].map((item, i) => (
              <div key={item} className="px-4 py-2 rounded-xl text-sm" style={i === 0 ? { background: "#e0e5ec", boxShadow: "inset 2px 2px 4px #b8bec7, inset -2px -2px 4px #ffffff", color: "#6366f1" } : { color: "#65748b80" }}>
                {item}
              </div>
            ))}
          </div>
        </nav>

        {/* Hero */}
        <section className="py-16">
          <h1 className="text-4xl font-semibold text-[#65748b] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Soft Surfaces</h1>
          <p className="text-lg text-[#65748b]/45 mb-8 max-w-md leading-relaxed">
            Tactile design where light and shadow sculpt the interface from a single material. Everything feels physical, touchable, real.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 rounded-xl text-[#6366f1] font-semibold" style={{ background: "#e0e5ec", boxShadow: "6px 6px 12px #b8bec7, -6px -6px 12px #ffffff" }}>Get Started</button>
            <button className="px-8 py-3 rounded-xl text-[#65748b]/50 font-semibold" style={{ background: "#e0e5ec", boxShadow: "6px 6px 12px #b8bec7, -6px -6px 12px #ffffff" }}>Learn More</button>
          </div>
        </section>

        {/* Feature cards */}
        <section className="mb-16">
          <div className="grid grid-cols-3 gap-6">
            {["Design", "Build", "Ship"].map((title, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ background: "#e0e5ec", boxShadow: "8px 8px 16px #b8bec7, -8px -8px 16px #ffffff" }}>
                <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-[#6366f1] font-bold" style={{ background: "#e0e5ec", boxShadow: "inset 3px 3px 6px #b8bec7, inset -3px -3px 6px #ffffff" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold text-[#65748b] mb-2">{title}</h3>
                <p className="text-sm text-[#65748b]/35 leading-relaxed">Sculpted from the same surface, designed to feel physical and satisfying.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="p-8 rounded-2xl mb-16" style={{ background: "#e0e5ec", boxShadow: "8px 8px 16px #b8bec7, -8px -8px 16px #ffffff" }}>
          <div className="grid grid-cols-4 gap-6 text-center">
            {[
              { val: "10K+", label: "Users" },
              { val: "99%", label: "Satisfaction" },
              { val: "50+", label: "Components" },
              { val: "24/7", label: "Support" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-[#6366f1]">{s.val}</div>
                <div className="text-xs text-[#65748b]/40 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16 p-8 rounded-2xl" style={{ background: "#e0e5ec", boxShadow: "inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff" }}>
          <p className="text-[#65748b]/60 leading-relaxed mb-3">
            "The soft UI approach made our app feel genuinely premium. Users love the tactile quality — it's like touching real buttons."
          </p>
          <div className="text-sm text-[#65748b]/35">— Marcus Johansson, Founder at SoftApps</div>
        </section>

        {/* CTA */}
        <section className="text-center py-16">
          <h2 className="text-2xl font-semibold text-[#65748b] mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Ready to feel the difference?</h2>
          <p className="text-[#65748b]/35 mb-6">Start building tactile interfaces today.</p>
          <button className="px-10 py-3 rounded-xl text-[#6366f1] font-semibold" style={{ background: "#e0e5ec", boxShadow: "6px 6px 12px #b8bec7, -6px -6px 12px #ffffff" }}>
            Start Free →
          </button>
        </section>

        <footer className="border-t border-[#b8bec7]/30 py-6 flex justify-between text-xs text-[#65748b]/25">
          <span>© 2026 SoftUI</span>
          <div className="flex gap-4"><span>Twitter</span><span>GitHub</span><span>Docs</span></div>
        </footer>
      </div>
    </div>
  );
}
